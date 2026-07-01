# AGENTS.md — citrino-web

Reglas operativas para cualquier agente AI o humano que trabaje en este repo. Quirúrgicas. Si no están acá, no las inventes.

## Diseño y CSS

- **Antes de agregar CSS nuevo**, buscá si ya existe un patrón equivalente en `styles.css` (`.use-cases`, `.use-case-card`, `.value-prop`, `.section-title`, `.btn`, `.btn-primary`). Si existe, **reusalo**. No crees selectores `ii-*`, `db-*` u otros prefijos paralelos cuando hay un patrón que ya resuelve lo mismo.
- **Cards en grid** (`display: grid` con `repeat(N, 1fr)`): cada card usa `display: flex; flex-direction: column`, el contenido flexible (descripción) lleva `flex: 1`, y el CTA/acción al fondo lleva `margin-top: auto`. Esto iguala alturas automáticamente. **Nunca** uses `align-items: center` en el card container ni `height: fixed` en la descripción.
- **Transiciones visuales entre secciones**: cada bloque debe tener continuidad con el siguiente (dot pattern, gradient sutil, `overflow: hidden`). No dejes bloques con colores planos que corten seco.
- **Stack y prefijos**: HTML/CSS/JS plano, sin build tools. CSS sigue las convenciones del proyecto (variables `:root`, fuentes Outfit + DM Sans, colores `#002857` / `#ee7900` / `#10b981`). Si necesitás un componente nuevo, primero leé `.opencode/skills/citrino-frontend-design/SKILL.md`.

## Skills obligatorias (no improvisar)

Antes de tocar UI/CSS/layout, **cargá estas skills en este orden** y seguí su método. No improvises auditoría visual:

- **Auditoría/review de página existente** → load `impeccable` + leer `reference/audit.md` (5 dimensiones) y `reference/brand.md` (reflex-reject). Output = tabla con scores P0/P1/P2/P3.
- **Spacing/grid/jerarquía/ratio** → load `impeccable` + leer `reference/layout.md`. Verificá con squint test.
- **Tipografía (tamaños, jerarquía, pairing)** → load `impeccable` + leer `reference/typeset.md`.
- **Componentes/branding del proyecto** → load `citrino-frontend-design` (`.opencode/skills/citrino-frontend-design/SKILL.md`).
- **Compliance HTML/CSS puntual** → load `web-design-guidelines` (Vercel Labs). Output = formato `file:line` terse.
- **Accesibilidad** → load `accessibility` cuando el cambio toque ARIA, focus, contraste, keyboard nav.

**Prohibido**: hacer auditoría "a ojo" sin cargar el skill correspondiente. El método es el método.

## Verificación antes de proponer

- **La spec puede estar stale. El HTML es la fuente de verdad.** Antes de proponer cambios sobre un archivo existente (página, spec, config), leé la versión live (`*.html`, `styles.css`, `script.js`) y verificá que tu propuesta refleja el estado real. Si la spec está desactualizada respecto al código, marquélo explícitamente y propón corregir la spec como primer paso.
- **Antes de declarar "listo"**, verificá con el navegador (Playwright) en desktop y mobile. Mostrá evidencia (screenshot + DOM). Si no verificás, no está listo.

## Proceso

- **Para cambios de UI chicos** (agregar sección, refactor de copy, fix de estilo): editá directamente el HTML/CSS. No generes proposal + spec + design + tasks. El overhead es contraproducente.
- **Para cambios de lógica o multi-archivo**: usá SDD con preflicht + init. Pero specs cortas, no slop de 2000 palabras.
- **Tickets Leantime**: el número del ticket es para rastreo, no para bloquear. Si el ticket dice "implementar X", implementá X. Si encontrás que la premisa es falsa (spec stale, scope distinto), pará y avisá.
