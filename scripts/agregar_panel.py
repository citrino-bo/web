#!/usr/bin/env python3
"""Agrega la base de propiedades a celdas para publicar solo densidad, nunca inmuebles.

Entrada: el JSON completo que emite citrino-gestion (23k registros con lat/lng exacta,
precio y superficies). Ese archivo NO se commitea ni se sirve: es la base de datos.

Salida: data/panel.json, con el encabezado de indicadores y una grilla de celdas
lat/lng con conteo. Cada celda de menos de K propiedades se descarta, asi ninguna
celda publicada tiene menos de K inmuebles (piso de k-anonimato).

Uso:
    python scripts/agregar_panel.py [ruta_al_json_completo]

Sin argumento lee data/propiedades.json (gitignoreado).
"""
import json
import math
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SALIDA = ROOT / "data" / "panel.json"
ENTRADA = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "data" / "propiedades.json"

CELDA = 0.005  # ~550 m de lado a la latitud de Santa Cruz
K = 5          # piso de k-anonimato por celda
# Bbox de Bolivia: descarta geocodificaciones fallidas que caen en (0,0),
# La Habana o San Francisco y dibujarian marcadores fuera del pais.
BBOX = (-23.0, -9.0, -70.0, -57.0)  # lat_min, lat_max, lng_min, lng_max


def main() -> None:
    d = json.loads(ENTRADA.read_text(encoding="utf-8"))
    props = d["propiedades"]

    celdas = Counter()
    detalle = {}
    descartadas = 0
    for p in props:
        lat, lng = p.get("lat"), p.get("lng")
        if lat is None or lng is None:
            descartadas += 1
            continue
        if not (BBOX[0] <= lat <= BBOX[1] and BBOX[2] <= lng <= BBOX[3]):
            descartadas += 1
            continue
        clave = (math.floor(lat / CELDA), math.floor(lng / CELDA))
        celdas[clave] += 1
        det = detalle.setdefault(clave, Counter())
        det[p.get("tipo_operacion")] += 1
        det[p.get("tipo_inmueble")] += 1

    publicables = {
        clave: n for clave, n in celdas.items() if n >= K
    }

    # Red de seguridad: el total publicado nunca puede reconstruir el total real.
    ocultas = sum(n for (i, j), n in celdas.items() if n < K)

    claves = ("venta", "alquiler", "anticretico", "casa", "departamento", "terreno")
    grilla = [
        {
            "lat": round((i + 0.5) * CELDA, 4),
            "lng": round((j + 0.5) * CELDA, 4),
            "n": n,
            **{k: detalle[(i, j)][k] for k in claves},
        }
        for (i, j), n in sorted(publicables.items(), key=lambda kv: -kv[1])
    ]

    zonas = len({p["zona"] for p in props if p.get("zona")})
    panel = {
        "generado": d.get("generado"),
        "fuente": d.get("fuente"),
        "total": d["total"],
        "zonas": zonas,
        "por_tipo": d.get("por_tipo", {}),
        "por_operacion": d.get("por_operacion", {}),
        "top_zonas": d.get("top_zonas", []),
        "celda": CELDA,
        "k": K,
        "celdas": len(grilla),
        "grilla": grilla,
    }

    SALIDA.write_text(
        json.dumps(panel, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )

    assert panel["total"] > 0 and panel["generado"], "encabezado vacío: se pisó la variable del JSON"
    assert all(c["n"] >= K for c in panel["grilla"]), "celda bajo el piso de k"
    assert panel["celdas"] < len(celdas), "la grilla no ocultó ninguna celda"
    print(
        f"celdas publicadas {panel['celdas']}/{len(celdas)} | "
        f"propiedades ocultas en celdas chicas {ocultas} | "
        f"descartadas por coordenada invalida {descartadas} | "
        f"{SALIDA.stat().st_size / 1024:.0f} KB"
    )


if __name__ == "__main__":
    main()
