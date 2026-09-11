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
    }


def reemplazar_independiente(html: str, viejo_fmt: str, nuevo_fmt: str) -> tuple[str, bool]:
    patron = re.compile(rf"(?<![0-9.,]){re.escape(viejo_fmt)}(?![0-9])")
    if not patron.search(html):
        return html, False
    return patron.sub(nuevo_fmt, html), True


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
