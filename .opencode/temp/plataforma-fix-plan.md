# Plataforma — Plan de Fix UI

**Archivo(s) a tocar:** `inteligencia-inmobiliaria/index.html`, `styles.css`
**Origen:** auditoría 2026-07-01 con `impeccable audit` (5 dimensiones) + `web-design-guidelines` (Vercel Labs) + comparativa con `index.html`, `base-de-datos/index.html`, `jul-ia/index.html`.
**Score inicial:** 15/20 (Good). Meta: 18/20.

---

## Diagnóstico resumido

La página `/inteligencia-inmobiliaria/` tiene 5 secciones. El problema central es que rompe el patrón de alternancia de fondos del resto del sitio (home: blue → white → bg-light → white → blue → white → bg-light → dark; base-de-datos: blue → white → bg-light → white → gradient → dark). En plataforma hay **dos `use-cases` consecutivas con el mismo `bg-light` y el `ii-final-cta` se pega con el footer**, ambos azul oscuro. Además, padding monótono (8rem en todo) y falta `section-subtitle` en las dos `use-cases`.

---

## Cambios a aplicar (en orden)

### 1. HTML — `inteligencia-inmobiliaria/index.html`

| # | Líneas | Cambio |
|---|---|---|
| 1.1 | 157 | Insertar `<p class="section-subtitle scroll-reveal">Accedé al panel de indicadores de cada ciudad del eje troncal.</p>` después de `<h2 class="section-title scroll-reveal">Acceso a la plataforma</h2>` |
| 1.2 | 179 | Cambiar `class="use-cases"` a `class="use-cases use-cases--alt"` en el segundo `<section>` (el de "Planes de acceso") |
| 1.3 | 181 | Insertar `<p class="section-subtitle scroll-reveal">Elegí la modalidad que mejor se adapte a tu operación.</p>` después de `<h2 class="section-title scroll-reveal">Planes de acceso</h2>` |

**Verificación post-cambio:** confirmar con `grep` que el archivo tiene 2 ocurrencias de `section-subtitle` dentro de `use-cases` y 1 de `use-cases--alt`.

---

### 2. CSS — `styles.css`

| # | Líneas | Cambio |
|---|---|---|
| 2.1 | después de 1918 | Agregar `.use-cases--alt { background: var(--white); }` justo antes del cierre de la sección `use-cases` (al lado de `.use-cases-grid` o como bloque nuevo). El `::before` con dot pattern se hereda — eso ya da la diferenciación visual. |
| 2.2 | 1918 | Cambiar `.use-cases { padding: 8rem 0; }` → `.use-cases { padding: 6rem 0; }` (alinea con `.services`, `.db-metrics`, `.db-charts`) |
| 2.3 | 570-580 | Borrar `.value-prop::after { … }` entero. Corte seco entre azul y bg-light, consistente con `index.html` que no usa este pseudo-elemento. |
| 2.4 | 3372-3383 | En `.ii-final-cta::before`, agregar un `radial-gradient` naranja al background-image existente: `radial-gradient(circle at 85% 85%, rgba(238, 121, 0, 0.1) 0%, transparent 45%),` antes del url del grid pattern. Acento naranja en esquina inferior derecha. |
| 2.5 | 2055-2058 | En `.use-case-card--disabled` agregar `cursor: not-allowed;` |
| 2.6 | 3393-3399 | Cambiar `.ii-final-cta-title { font-size: clamp(1.5rem, 4vw, 2.25rem); }` → `.ii-final-cta-title { font-size: clamp(1.75rem, 4.5vw, 2.5rem); }` |
| 2.7 | final del archivo | Agregar `@media (prefers-reduced-motion: reduce) { .scroll-reveal, .scroll-reveal-left, .scroll-reveal-right { opacity: 1 !important; transform: none !important; transition: none !important; } .animate-staggered { animation: none !important; opacity: 1 !important; } }` |

**Verificación post-cambio:** confirmar con `grep` que `.use-cases--alt` existe, `.use-cases { padding: 6rem` existe, `.value-prop::after` ya no existe, `prefers-reduced-motion` está presente.

---

## Patrón de referencia (no romper)

- **Alternancia de fondos:** el resto del sitio alterna blue (gradient-primary) → white → bg-light → white → blue → dark.
- **Padding:** alterna 6rem (services, db-metrics, db-charts) / 8rem (value-prop, ii-final-cta por cierre dramático) / 10rem (about, ocasional).
- **Tipografía:** títulos de sección en `clamp(2rem, 4vw, 2.5rem)` (section-title) o `clamp(2rem, 5vw, 3rem)` (value-prop-title en azul). `ii-final-cta-title` debe pesar más.
- **Cards:** `display: flex; flex-direction: column`, descripción con `flex: 1`, CTA con `margin-top: auto`.

---

## Out of scope (no tocar en este cambio)

- Hero (funciona, consistente con home)
- Tipografías (Outfit + DM Sans son el sistema, no se tocan)
- Paleta (los 3 colores corporativos están bien)
- Cards (estructura interna correcta)
- Footer (idéntico al resto del sitio)

---

## Verificación final

1. Recargar `http://localhost:8765/inteligencia-inmobiliaria/`
2. Screenshot full-page desktop (1280×900)
3. Screenshot full-page mobile (375×812)
4. Confirmar visualmente:
   - Hero → value-prop: azul sólido a azul sólido (sin smudge)
   - value-prop → use-cases #1: corte seco azul → bg-light
   - use-cases #1 → use-cases #2: bg-light → white (diferenciados)
   - use-cases #2 → ii-final-cta: white → azul oscuro (con acento naranja sutil en la esquina)
   - ii-final-cta → footer: distinción visual mantenida
5. Verificar que ningún card queda con `opacity: 0` permanente (probar scroll)

---

## Tickets

- **Leantime:** (completar con el número del ticket cuando se cree)
- **Estado:** plan listo, pendiente ejecución paso a paso
