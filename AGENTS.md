# AGENTS.md — citrino-web

Reglas operativas para agentes y humanos en este repo. Quirúrgicas. Si no están acá, no las inventes.

## Stack

- HTML, CSS y JS estático, sin build tools ni bundler. Deploy en GitHub Pages, dominio `citrino.com.bo`.
- CSS con variables `:root`, fuentes Outfit + DM Sans + JetBrains Mono, colores `#002857` / `#ee7900` / `#10b981`.
- Analítica: Umami — detalle operativo en `citrino-gestion/AGENTS.d/infra.md`.
- Conversión, CTAs y formularios: criterios en `docs/conversion-y-formularios.md`.
- Fuente de datos: `citrino-gestion` genera `data/propiedades.json` y corre el pipeline de stats.

## Comandos

- Verificar navegación: `bash scripts/verificar_navs.sh`
- Verificar métricas del HTML: `bash scripts/verificar_stats.sh`
- Previsualizar local: `python -m http.server 8080`

## Diseño y CSS

- Antes de agregar CSS, buscá un patrón equivalente en `styles.css` (`.use-cases`, `.use-case-card`, `.value-prop`, `.section-title`, `.btn`, `.btn-primary`) y reusalo. No crees prefijos paralelos.
- Cards en grid: cada card `display: flex; flex-direction: column`; el contenido flexible lleva `flex: 1`; el CTA al fondo, `margin-top: auto`. Nunca `align-items: center` en el card container ni altura fija en la descripción.
- Continuidad entre secciones: cada bloque engancha con el siguiente (dot pattern, gradient sutil, `overflow: hidden`). Sin cortes planos.
- Componentes nuevos: seguí las convenciones de `styles.css` y `DESIGN.md`.

## Verificación antes de proponer

- El HTML es la fuente de verdad; la spec puede estar stale. Antes de proponer cambios, leé la versión live (`*.html`, `styles.css`, `script.js`) y reflejá el estado real. Si la spec difiere, marcalo y proponé corregirla primero.
- Antes de declarar "listo", verificá con el navegador en desktop y mobile y mostrá evidencia (captura + DOM). Sin verificación, no está listo.
- Un test A/B se aprueba solo con primary metric, baseline rate y duración esperada.

## No hagas

- No edites `data/propiedades.json` a mano: se genera desde `citrino-gestion`.
- No commitees claves ni secretos.

## Proceso

- Cambios de UI chicos (sección, copy, estilo): editá el HTML/CSS directo. Sin proposal + spec + design + tasks.
- Cambios de lógica o multi-archivo: SDD con spec corta, no slop de 2000 palabras.
- Tickets Leantime: el número es para rastreo. Si la premisa es falsa, pará y avisá.
