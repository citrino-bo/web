#!/usr/bin/env bash
# Verifica que las cifras hardcodeadas del HTML coincidan con data/propiedades.json
# bajo la politica de redondeo: floor a millar (propiedades), floor a decena (zonas),
# floor a centena (alquileres). Falla si cualquier cifra quedo vieja.
# Lo actualiza el pipeline semanal (citrino-gestion) junto con el JSON.
set -euo pipefail
cd "$(dirname "$0")/.."

PAGES="index.html jul-ia/index.html base-de-datos/index.html"

set -- $(python3 -c "
import json
d = json.load(open('data/propiedades.json', encoding='utf-8'))
zonas = len({p['zona'] for p in d['propiedades'] if p.get('zona')})
print(d['total'] // 1000 * 1000, zonas // 10 * 10, d['por_operacion']['alquiler'] // 100 * 100)
")
TOTAL=$1; ZONAS=$2; ALQ=$3

fail=0

# 1. Todo data-target debe ser uno de los floors vigentes
#    (solo index y jul-ia; base-de-datos usa placeholders dinamicos)
for p in index.html jul-ia/index.html; do
  while read -r t; do
    case "$t" in "$TOTAL"|"$ZONAS"|"$ALQ") ;; *)
      echo "DATA-TARGET VIEJO ($t != $TOTAL/$ZONAS/$ALQ): $p"; fail=1 ;;
    esac
  done < <(grep -o 'data-target="[0-9]*"' "$p" | grep -o '[0-9]*' || true)
done

# 2. El floor de total con formato debe aparecer en cada pagina
TOTAL_FMT=$(python3 -c "print(f'{$TOTAL:,}')")   # 22000 -> 22,000
for p in $PAGES; do
  grep -q "$TOTAL_FMT" "$p" || { echo "FALTA $TOTAL_FMT en $p"; fail=1; }
done

# 3. Numeros legacy prohibidos (eran de una epoca anterior del dataset);
#    el ancla [^0-9,.] evita matchear 800+ dentro de 3,800+ o 596 dentro de 1,596
LEGACY='(^|[^0-9,.])(7,693|7693|7,600|7,315|596|820|800\+|400\+)'
for p in $PAGES; do
  if grep -qE "$LEGACY" "$p"; then
    echo "STATS VIEJAS: $p"; grep -nE "$LEGACY" "$p" | head -5; fail=1
  fi
done

if [ "$fail" -eq 0 ]; then
  echo "OK: cifras consistentes con data/propiedades.json (total=$TOTAL_FMT+ zonas=$ZONAS+ alquileres=$ALQ+)"
fi
exit "$fail"
