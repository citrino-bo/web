#!/usr/bin/env bash
# Verifica que nav y footer sean identicos (labels + rutas) en todas las paginas. Si falla, copia el bloque <ul class="nav-menu"> y <ul class="footer-nav-links"> desde index.html.
# Upgrade path: cuando el sitio pase ~15 paginas o los edits de nav sean frecuentes, migrar a un include en build (Hugo/Eleventy). Hoy (7 paginas) duplicar es el trade-off correcto; lo unico inaceptable es el drift.
set -euo pipefail
cd "$(dirname "$0")/.."

PAGES="index.html inteligencia-inmobiliaria.html servicios.html quienes-somos.html contacto.html privacidad.html gracias.html"

canon_nav() {
  printf 'index.html|Inicio\n'
  printf 'inteligencia-inmobiliaria.html|Inteligencia Inmobiliaria\n'
  printf 'servicios.html|Nuestros Servicios\n'
  printf 'quienes-somos.html|Quiénes Somos\n'
  printf 'contacto.html|Contacto\n'
}

canon_footer() {
  canon_nav
  printf 'privacidad.html|Privacidad\n'
}

normalizar() {
  grep -o '<a href="[^"]*"[^>]*>[^<]*</a>' \
    | sed 's#^<a href="\./#<a href="#; s/^<a href="//; s/"[^>]*>/|/; s#</a>$##'
}

extraer() {
  sed -n "/class=\"$1\"/,/<\/ul>/p" "$2" | normalizar
}

fail=0
for p in $PAGES; do
  [ -f "$p" ] || continue
  diff <(canon_nav) <(extraer "nav-menu" "$p") >/dev/null \
    || { echo "NAV DRIFT: $p"; diff <(canon_nav) <(extraer "nav-menu" "$p") | head -8; fail=1; }
  diff <(canon_footer) <(extraer "footer-nav-links" "$p") >/dev/null \
    || { echo "FOOTER DRIFT: $p"; diff <(canon_footer) <(extraer "footer-nav-links" "$p") | head -8; fail=1; }
done

# Ninguna pagina puede quedar fuera de la lista (evita paginas huerfanas).
for f in *.html; do
  case " $PAGES " in *" $f "*) ;; *) echo "PAGINA FUERA DE LA LISTA: $f"; fail=1 ;; esac
done

[ $fail -eq 0 ] && echo "nav y footer OK en $(echo $PAGES | wc -w) paginas"
exit $fail
