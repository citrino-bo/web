#!/usr/bin/env bash
# Verifica que nav y footer sean identicos (labels + rutas) en las 8 paginas.
# Canonico: jul-ia/index.html. Si falla, copia el bloque <ul class="nav-menu">
# y <ul class="footer-nav-links"> desde ahi, ajustando ../ segun profundidad.
#
# Upgrade path: cuando el sitio pase ~15 paginas o los edits de nav sean
# frecuentes, migrar a Jekyll nativo de GitHub Pages (_layouts/_includes)
# para eliminar la duplicacion. Hoy (8 paginas) duplicar es el trade-off
# correcto; lo unico inaceptable es el drift entre paginas.
set -euo pipefail
cd "$(dirname "$0")/.."

PAGES="index.html privacidad.html jul-ia/index.html base-de-datos/index.html capitales/index.html desarrollos/index.html contacto/index.html inteligencia-inmobiliaria/index.html"

canon_nav() {
  printf 'jul-ia/|Jul-IA\n'
  printf 'base-de-datos/|Base de Datos\n'
  printf 'inteligencia-inmobiliaria/|Inteligencia\n'
  printf 'capitales/|Capitales\n'
  printf 'desarrollos/|Desarrollos\n'
  printf 'contacto/|Contacto\n'
}

canon_footer() {
  canon_nav
  printf 'privacidad.html|Privacidad\n'
}

normalizar() {
  grep -o '<a href="[^"]*"[^>]*>[^<]*</a>' \
    | sed 's#^<a href="\.\./#<a href="#; s/^<a href="//; s/"[^>]*>/|/; s#</a>$##'
}

extraer() {
  sed -n "/class=\"$1\"/,/<\/ul>/p" "$2" | normalizar
}

fail=0
for p in $PAGES; do
  diff <(canon_nav) <(extraer "nav-menu" "$p") >/dev/null \
    || { echo "NAV DRIFT: $p"; diff <(canon_nav) <(extraer "nav-menu" "$p") | head -8; fail=1; }
  diff <(canon_footer) <(extraer "footer-nav-links" "$p") >/dev/null \
    || { echo "FOOTER DRIFT: $p"; diff <(canon_footer) <(extraer "footer-nav-links" "$p") | head -8; fail=1; }
done

if [ "$fail" -eq 0 ]; then
  echo "OK: nav y footer consistentes en las 8 paginas"
fi
exit "$fail"
