#!/usr/bin/env python3
"""Actualiza las cifras hardcodeadas del HTML desde data/propiedades.json.

Politica de floors: propiedades a millar, zonas a decena, alquileres a centena,
inmuebles con coordenadas a centena. Los floors viejos se leen de los
data-target de index.html (pagina canonica, orden DOM: propiedades, zonas,
alquileres); base-de-datos usa stats dinamicas y solo se le toca el texto.
Los numeros formateados se reemplazan solo como valor independiente.
Lo llama el pipeline semanal (citrino-gestion) junto con verificar_stats.sh.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGINAS = ["index.html", "jul-ia/index.html", "base-de-datos/index.html"]
CON_STATS_ESTATICAS = ["index.html", "jul-ia/index.html"]
ROLES = ["propiedades", "zonas", "alquileres"]


def floors() -> dict:
    d = json.loads((ROOT / "data" / "propiedades.json").read_text(encoding="utf-8"))
    zonas = len({p["zona"] for p in d["propiedades"] if p.get("zona")})
    con_coords = sum(1 for p in d["propiedades"] if p.get("lat") and p.get("lng"))
    return {
        "propiedades": d["total"] // 1000 * 1000,
        "zonas": zonas // 10 * 10,
        "alquileres": d["por_operacion"]["alquiler"] // 100 * 100,
        "inmuebles": con_coords // 100 * 100,
        "generado_mes": str(d.get("generado", ""))[:7],  # "2026-09-11" -> "2026-09"
    }


def reemplazar_independiente(html: str, viejo_fmt: str, nuevo_fmt: str) -> tuple[str, bool]:
    patron = re.compile(rf"(?<![0-9.,]){re.escape(viejo_fmt)}(?![0-9])")
    if not patron.search(html):
        return html, False
    return patron.sub(nuevo_fmt, html), True


def formatear_floor(n: int) -> str:
    return f"{n:,}" if n >= 1000 else str(n)


# "N+ zonas" en texto plano / meta / JSON-LD. El lookbehind evita arrancar
# dentro de un numero mayor. Exige la palabra "zonas" tras el "+", asi no
# toca "23,000+ propiedades" ni "4,000+ alquileres".
RE_ZONAS_TEXTO = re.compile(r"(?<![\d,.])(\d[0-9,]*)\+(\s*[Zz]onas\b)")

# <span class="jl-metric-value">N+</span> cuyo label inmediato es "Zonas mapeadas".
# \s* entre spans preserva el CRLF/indentacion via grupos.
RE_ZONAS_METRIC = re.compile(
    r'(<span class="jl-metric-value">)([0-9][0-9,]*)(\+</span>\s*'
    r'<span class="jl-metric-label">\s*[Zz]onas [Mm]apeadas</span>)'
)


def normalizar_texto_zonas(html: str, nuevo: int) -> tuple[str, int]:
    """Normaliza todo texto 'N+ zonas' al floor vigente. Idempotente."""
    nuevo_fmt = formatear_floor(nuevo)
    cambios = 0

    def _sub_texto(m: re.Match) -> str:
        nonlocal cambios
        if int(m.group(1).replace(",", "")) == nuevo:
            return m.group(0)
        cambios += 1
        return f"{nuevo_fmt}+{m.group(2)}"

    html = RE_ZONAS_TEXTO.sub(_sub_texto, html)

    def _sub_metric(m: re.Match) -> str:
        nonlocal cambios
        if int(m.group(2).replace(",", "")) == nuevo:
            return m.group(0)
        cambios += 1
        return f"{m.group(1)}{nuevo_fmt}{m.group(3)}"

    html = RE_ZONAS_METRIC.sub(_sub_metric, html)
    return html, cambios


RE_ACTUALIZADO = re.compile(r'(<p class="hero-updated"[^>]*>Actualizado:\s*)\d{4}-\d{2}(</p>)')


def actualizar_frescura(html: str, mes: str) -> tuple[str, int]:
    """Reescribe 'Actualizado: YYYY-MM' desde d['generado'][:7]. Idempotente."""
    if not mes:
        return html, 0
    cambios = 0

    def _sub(m: re.Match) -> str:
        nonlocal cambios
        nueva = f"{m.group(1)}{mes}{m.group(2)}"
        if nueva == m.group(0):
            return m.group(0)
        cambios += 1
        return nueva

    return RE_ACTUALIZADO.sub(_sub, html), cambios


def leer(path: Path) -> str:
    # open() con newline="" preserva CRLF/LF; Path.read_text(newline=) es 3.13+
    with open(path, encoding="utf-8", newline="") as fh:
        return fh.read()


def escribir(path: Path, contenido: str) -> None:
    with open(path, "w", encoding="utf-8", newline="") as fh:
        fh.write(contenido)


def main() -> int:
    nuevos = floors()
    canon = leer(ROOT / "index.html")
    viejos_raw = [int(v) for v in re.findall(r'data-target="(\d+)"', canon)]
    if len(viejos_raw) != 3:
        sys.exit(f"ERROR: index.html tiene {len(viejos_raw)} data-target, se esperaban 3")
    viejos = dict(zip(ROLES, viejos_raw))
    print(f"floors: viejos {viejos} -> nuevos {nuevos}")

    cambios = 0
    for pag in PAGINAS:
        f = ROOT / pag
        html = leer(f)
        for rol in ROLES:
            if viejos[rol] == nuevos[rol]:
                continue
            v, n = viejos[rol], nuevos[rol]
            if pag in CON_STATS_ESTATICAS:
                html, ok = reemplazar_independiente(html, f'data-target="{v}"', f'data-target="{n}"')
                cambios += ok
            for fmt_v, fmt_n in ((f"{v:,}", f"{n:,}"), (str(v), str(n))):
                # str plano solo para data-target ya cubierto; el texto usa miles
                if fmt_v == str(v) and fmt_n == str(n):
                    continue
                html, ok = reemplazar_independiente(html, fmt_v, fmt_n)
                cambios += ok
        # Zonas: normaliza 'N+ zonas' y el jl-metric SIEMPRE (no depende del floor viejo)
        html, n_zonas = normalizar_texto_zonas(html, nuevos["zonas"])
        cambios += n_zonas
        # Frescura: no-op en paginas sin la linea hero-updated
        html, n_frescura = actualizar_frescura(html, nuevos["generado_mes"])
        cambios += n_frescura
        # inmuebles con coordenadas (solo texto con sufijo, floor a centena)
        m = re.search(r"(?<![0-9.,])(\d{2},\d{3})\+ inmuebles", html)
        if m and int(m.group(1).replace(",", "")) != nuevos["inmuebles"]:
            html = html.replace(f"{m.group(1)}+ inmuebles", f"{nuevos['inmuebles']:,}+ inmuebles")
            cambios += 1
            print(f"{pag}: inmuebles {m.group(1)}+ -> {nuevos['inmuebles']:,}+")
        escribir(f, html)
    print(f"OK: {cambios} cambio(s)" if cambios else "OK: HTML ya consistente")
    return 0


if __name__ == "__main__":
    sys.exit(main())
