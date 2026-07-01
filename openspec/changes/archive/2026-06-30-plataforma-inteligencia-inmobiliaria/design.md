# Design: Plataforma de Inteligencia Inmobiliaria — Landing Page

## Technical Approach

Static HTML/CSS/JS landing page at `/inteligencia-inmobiliaria/` replicating the exact header/footer/chrome pattern from `jul-ia/index.html`, with page-specific styles appended to `styles.css` under an `/* ── Inteligencia Inmobiliaria Landing ──── */` section. All new page-specific CSS classes use the `ii-` prefix. No build step, no new tokens — reuse the existing design system (Outfit/DM Sans/JetBrains Mono, `--primary-color: #002857`, `--secondary-color: #ee7900`, `--accent-color: #10b981`, gradients, grid/dot patterns, `animate-staggered`, `scroll-reveal`, `.btn-primary`, `.btn-secondary`, `.hero`, `.value-prop`).

## Architecture Decisions

### Decision: Page-specific `ii-` prefix vs inline styles
| Option | Tradeoff | Decision |
|--------|----------|----------|
| `ii-*` prefixed classes in `styles.css` | Scoped, discoverable, consistent with `db-` and `julia-` patterns | **Chosen** — aligns with existing convention (`.db-hero`, `.julia-badge`, etc.) |
| Inline styles in HTML | No CSS to maintain but defeats reuse and responsive | Rejected |
| Separate CSS file | Extra HTTP request, breaks current pattern | Rejected |

### Decision: Nav insertion order — "Plataforma" after "Base de datos"
| Option | Tradeoff | Decision |
|--------|----------|----------|
| After "Base de datos" | Logical: Jul-IA → Base de datos → Plataforma (increasing complexity) | **Chosen** — natural info hierarchy |
| Before Jul-IA | Would jump the nav order | Rejected |

### Decision: City links as `<a href="#" data-placeholder="true">`
| Option | Tradeoff | Decision |
|--------|----------|----------|
| `href="#"` + `data-placeholder` | Clickable, swappable (1-line per `<a>`), no broken UX | **Chosen** — per spec, clickable anchors not disabled |
| `href=""` or `disabled` | Non-clickable or page reload | Rejected — spec requires clickable |
| No links, just cards | Not navigable | Rejected — spec requires `<a>` elements |

## Data Flow

```
Browser → /inteligencia-inmobiliaria/index.html
           ├── ../styles.css (shared: hero, nav, footer, buttons, animations, patterns)
           ├── ../script.js (scroll-reveal + hamburger)
           └── WhatsApp (external): wa.me/59170933603?text=...
                         ↕
               User clicks → WhatsApp Web/App
```

## Section-by-Section Layout Design

### 1. Hero
**Reused classes**: `section.hero`, `.hero-content`, `.hero-title`, `.hero-subtitle`, `.hero-cta`, `.btn-primary`, `.btn-secondary`, `.hero-background`, `.animate-staggered`, `.animate-delay-{1-5}`
**New class**: `.ii-badge` (inline-block badge, same visual pattern as `.julia-badge` / `.db-badge`)
**Structure**:
- `.hero-background` (reused grid overlay via `::before`)
- Badge: `<span class="ii-badge animate-staggered animate-delay-1">En alianza con la Cámara Boliviana de Desarrolladores Inmobiliarios (CBDI)</span>`
- `<h1 class="hero-title animate-staggered animate-delay-2">` "Plataforma de Inteligencia Inmobiliaria"
- `<p class="hero-subtitle animate-staggered animate-delay-3">` subtitle
- `.hero-cta animate-staggered animate-delay-4` with dual CTA:
  - "Solicitar acceso" → `https://wa.me/59170933603?text=Hola%20Citrino%2C%20soy%20miembro%20de%20la%20CBDI%20y%20quiero%20solicitar%20acceso%20a%20la%20Plataforma%20de%20Inteligencia%20Inmobiliaria.` (`.btn-primary`)
  - "Conocer la metodología" → `#metodologia` anchor (`.btn-secondary`)

### 2. Value Proposition
**Reused classes**: `section.value-prop`, `.container`, `.value-prop-content`, `.value-item`, `.value-icon`, `.value-text`, `.scroll-reveal`
- Uses existing `.value-prop` section recipe from the skill (dark blue bg + dot pattern `::before`)
- Three `.value-item` elements:
  1. "Equity Research como núcleo" — focus on Harvard-backed methodology
  2. "Expertise única en la región" — Bolivia-specific market intelligence
  3. "Metodología avalada por Harvard" — credibility differentiator

### 3. Methodology (4 Analysis Axes)
**Reused classes**: `section` (no special reuse), `.container`, `.section-title`, `.section-subtitle`, `.scroll-reveal`
**New classes**: `.ii-method-grid`, `.ii-method-card`, `.ii-method-icon`, `.ii-method-name`, `.ii-method-desc`, `.ii-method-tags`
**Design pattern**: 4-column grid à la `.services-grid` but with tagged content. Cards have white bg, border-radius, hover lift. Icon per card.
**Cards**:
1. "Ciclo inmobiliario" — tags: oferta/demanda/precios
2. "Censo inmobiliario" — tags: inventario/tipología/absorción
3. "Financiamiento del sector" — tags: crédito/tasas/banca
4. "Análisis evolutivo" — tags: series históricas/tendencias/proyecciones

### 4. Platform Indicators (Split Layout)
**New classes**: `.ii-platform-section`, `.ii-platform-grid` (2-column), `.ii-platform-copy`, `.ii-platform-features`, `.ii-platform-feature-item`
**Reused classes**: `.container`, `.section-title`, `.scroll-reveal`, `.scroll-reveal-left`, `.scroll-reveal-right`
**Layout**: Left column = descriptive copy about the platform. Right column = feature list with icons (inventory/stock, pricing analysis, macro indicators).
- Dark background section (`--primary-color`) with dot pattern
- `.section-title` in white, copy in `--white-70`

### 5. City Links (3 cards)
**Reused classes**: `.container`, `.section-title`, `.section-subtitle`, `.scroll-reveal`
**New classes**: `.ii-cities-grid`, `.ii-city-card`, `.ii-city-name`, `.ii-city-link-indicator`
**Design pattern**: 3-column card grid. Each `<a href="#" data-placeholder="true" class="ii-city-card">` with city name and "Acceder →" indicator.
**Cards**: Santa Cruz, Cochabamba, La Paz
- Cards are white, clickable (not disabled), with hover lift
- `data-placeholder="true"` marks them for easy swap when real URLs arrive

### 6. Access Note + Impact
**Reused classes**: `section`, `.container`, `.scroll-reveal`
**New classes**: `.ii-access-section`, `.ii-access-note`, `.ii-access-rule`, `.ii-impact-grid`, `.ii-impact-card`
**Structure**:
- CBDI access note: describes member rules (up-to-date contributions, max 2 Gmail addresses per member)
- Impact split: "Para el miembro CBDI" / "Para el sector" as 2 cards

### 7. Final WhatsApp CTA
**Reused classes**: Pattern mirrors `.db-final-cta` and `.julia-final-cta`
**New classes**: `.ii-final-cta`
**Structure**:
- Gradient dark background with grid overlay
- Title + subtitle + single CTA button: `.btn.btn-primary` → `https://wa.me/59170933603?text=Quiero%20conocer%20la%20Plataforma%20de%20Inteligencia%20Inmobiliaria%20de%20Citrino`

## CSS Strategy

Appended to `styles.css` under:
```css
/* ── Inteligencia Inmobiliaria Landing ──── */
```

**New selectors** (key properties):

| Selector | Key Properties |
|----------|---------------|
| `.ii-badge` | `display: inline-block; margin-bottom: 1.25rem;` (same as `.julia-badge`) |
| `.ii-method-grid` | `display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2rem;` |
| `.ii-method-card` | `background: var(--white); padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-md); transition: var(--transition);` |
| `.ii-method-card:hover` | `transform: translateY(-5px); box-shadow: var(--shadow-lg);` |
| `.ii-method-icon` | `width: 56px; height: 56px; border-radius: 14px; background: var(--gradient-primary-medium); display: flex; align-items: center; justify-content: center; color: var(--white); margin-bottom: 1.25rem;` |
| `.ii-method-name` | `font-family: var(--font-display); font-size: 1.2rem; font-weight: 600; color: var(--text-dark); margin-bottom: 0.75rem;` |
| `.ii-method-desc` | `font-size: 0.95rem; color: var(--text-light); line-height: 1.7; margin-bottom: 1rem;` |
| `.ii-method-tags` | `display: flex; flex-wrap: wrap; gap: 0.5rem;` |
| `.ii-method-tag` | `font-size: 0.8rem; padding: 0.3rem 0.75rem; background: var(--primary-10); color: var(--primary-color); border-radius: 20px; font-weight: 500;` |
| `.ii-platform-section` | `padding: 6rem 0; background: var(--primary-color); color: var(--white); position: relative; overflow: hidden;` + dot pattern `::before` |
| `.ii-platform-grid` | `display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start;` |
| `.ii-platform-copy` | `font-size: 1.05rem; line-height: 1.8; color: var(--white-70);` |
| `.ii-platform-features` | `display: flex; flex-direction: column; gap: 1.5rem;` |
| `.ii-platform-feature-item` | `display: flex; gap: 1rem; align-items: flex-start;` + icon + text |
| `.ii-cities-grid` | `display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;` |
| `.ii-city-card` | `display: block; background: var(--white); padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-md); transition: var(--transition); text-decoration: none; color: var(--text-dark);` |
| `.ii-city-card:hover` | `transform: translateY(-5px); box-shadow: var(--shadow-lg);` |
| `.ii-city-name` | `font-family: var(--font-display); font-size: 1.25rem; font-weight: 600; color: var(--primary-color); margin-bottom: 0.5rem;` |
| `.ii-city-link-indicator` | `color: var(--secondary-color); font-weight: 500;` |
| `.ii-access-section` | `padding: 6rem 0; background: var(--bg-light);` |
| `.ii-access-note` | `max-width: 800px; margin: 0 auto; text-align: center; color: var(--text-medium); line-height: 1.7;` |
| `.ii-access-rule` | `background: var(--primary-10); border-left: 3px solid var(--secondary-color); padding: 1rem 1.5rem; border-radius: 8px; margin-top: 1.5rem;` |
| `.ii-impact-grid` | `display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; margin-top: 3rem;` |
| `.ii-impact-card` | `background: var(--white); padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-md);` |
| `.ii-final-cta` | Same pattern as `.db-final-cta` (gradient dark bg + grid overlay) |
| `.ii-final-cta-content` | Same pattern as `.db-final-cta-content` |
| `.ii-final-cta-title` | Same pattern as `.db-final-cta-title` |

**No new design tokens** — only the existing `:root` variables.

## Component / Chrome Reuse

**Header + Footer**: Copied verbatim from `jul-ia/index.html` with `../` relative paths.

**Nav "Plataforma" insertion** — inserted AFTER "Base de datos" `<li>` in BOTH header nav and footer nav on all 4 pages:

| Page | Header `<a href>` | Active class |
|------|-------------------|-------------|
| `inteligencia-inmobiliaria/index.html` | `href="../inteligencia-inmobiliaria/"` | `aria-current="page" class="nav-active"` |
| `index.html` (root) | `href="inteligencia-inmobiliaria/"` | none |
| `jul-ia/index.html` | `href="../inteligencia-inmobiliaria/"` | none |
| `base-de-datos/index.html` | `href="../inteligencia-inmobiliaria/"` | none |

**Footer insertion** — same href pattern, no active state.

## WhatsApp CTA Messages

| Location | Target | Pre-filled message (URL-encoded) |
|----------|--------|----------------------------------|
| Hero "Solicitar acceso" | CBDI members | `Hola%20Citrino%2C%20soy%20miembro%20de%20la%20CBDI%20y%20quiero%20solicitar%20acceso%20a%20la%20Plataforma%20de%20Inteligencia%20Inmobiliaria.` |
| Final CTA "Escribinos por WhatsApp" | General leads | `Quiero%20conocer%20la%20Plataforma%20de%20Inteligencia%20Inmobiliaria%20de%20Citrino` |

Both use `target="_blank" rel="noopener noreferrer"`.

## SEO + A11y

**JSON-LD** (in `<head>`):
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Plataforma de Inteligencia Inmobiliaria — Citrino",
  "url": "https://citrino.com.bo/inteligencia-inmobiliaria/",
  "description": "Plataforma de análisis del mercado inmobiliario boliviano con metodología avalada por Harvard. En alianza con la CBDI.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Citrino Capitales Inmobiliarios",
    "url": "https://citrino.com.bo"
  },
  "about": {
    "@type": "Service",
    "name": "Plataforma de Inteligencia Inmobiliaria",
    "description": "Plataforma de análisis y datos del mercado inmobiliario boliviano",
    "provider": {
      "@type": "Organization",
      "name": "Citrino Capitales Inmobiliarios"
    }
  }
}
```

**OG/Twitter**: Mirror `base-de-datos/index.html` pattern — `og:title` = "Plataforma de Inteligencia Inmobiliaria — Citrino", `og:url` = `https://citrino.com.bo/inteligencia-inmobiliaria/`.

**Canonical**: `<link rel="canonical" href="https://citrino.com.bo/inteligencia-inmobiliaria/">`

**sitemap.xml entry**: Add `<url>` block with `<loc>https://citrino.com.bo/inteligencia-inmobiliaria/</loc>`, `<changefreq>monthly</changefreq>`, `<priority>0.8</priority>`.

**A11y**: skip-link (`#main-content`), hamburger `role="button" aria-label="Abrir menú de navegación"`, `alt` on logo, focus-visible states (shared), ARIA labels on social links.

## City Links Implementation

```html
<div class="ii-cities-grid">
  <a href="#" class="ii-city-card" data-placeholder="true">
    <h3 class="ii-city-name">Santa Cruz</h3>
    <span class="ii-city-link-indicator">Acceder →</span>
  </a>
  <a href="#" class="ii-city-card" data-placeholder="true">
    <h3 class="ii-city-name">Cochabamba</h3>
    <span class="ii-city-link-indicator">Acceder →</span>
  </a>
  <a href="#" class="ii-city-card" data-placeholder="true">
    <h3 class="ii-city-name">La Paz</h3>
    <span class="ii-city-link-indicator">Acceder →</span>
  </a>
</div>
```

**Swap procedure**: Replace `href="#"` with `href="{real-url}"` and remove `data-placeholder="true"` on each card. No other changes needed.

## Responsive Plan

Uses existing breakpoints at 768px (mobile) and 480px (small mobile) from `styles.css`:

| Breakpoint | Section | Behavior |
|------------|---------|----------|
| ≤768px | `.ii-method-grid` | Single column, full-width cards |
| ≤768px | `.ii-platform-grid` | Single column, copy above features |
| ≤768px | `.ii-cities-grid` | Single column, stacked |
| ≤768px | `.ii-impact-grid` | Single column |
| ≤768px | `.hero-cta` | Stacked buttons (shared style) |
| ≤768px | `.ii-final-cta` | Padding reduced, button full-width |
| ≤480px | General | Reduced padding, smaller font sizes (shared responsive) |

## Root Redirect

`inteligencia-inmobiliaria.html` at root:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=/inteligencia-inmobiliaria/">
  <link rel="canonical" href="https://citrino.com.bo/inteligencia-inmobiliaria/">
  <title>Redirigiendo... — Citrino</title>
</head>
<body>
  <p>Redirigiendo a la <a href="/inteligencia-inmobiliaria/">Plataforma de Inteligencia Inmobiliaria</a>...</p>
</body>
</html>
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `inteligencia-inmobiliaria/index.html` | Create | Full landing page (7 sections, JSON-LD, OG, skip-link) |
| `inteligencia-inmobiliaria.html` (root) | Create | Meta-refresh redirect stub |
| `styles.css` | Modify | Append `/* ── Inteligencia Inmobiliaria Landing ──── */` with all `ii-*` selectors |
| `index.html` (root) | Modify | Add "Plataforma" `<li>` to header nav + footer nav after "Base de datos" |
| `jul-ia/index.html` | Modify | Add "Plataforma" `<li>` to header nav + footer nav after "Base de datos" |
| `base-de-datos/index.html` | Modify | Add "Plataforma" `<li>` to header nav + footer nav after "Base de datos" |
| `sitemap.xml` | Modify | Add `<url>` entry for `/inteligencia-inmobiliaria/` |

## Build Order (for sdd-apply)

1. Create directory `inteligencia-inmobiliaria/` (if not exists)
2. Create `inteligencia-inmobiliaria/index.html` (full page)
3. Create `inteligencia-inmobiliaria.html` (redirect stub)
4. Append new CSS section to `styles.css`
5. Modify `index.html` nav (root)
6. Modify `jul-ia/index.html` nav
7. Modify `base-de-datos/index.html` nav
8. Update `sitemap.xml`

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Visual | All 7 sections render correctly | Manual browser verification |
| Navigation | "Plataforma" link active on the page, correct hrefs | Manual click test across all 4 pages |
| WhatsApp CTA | Both links open correct pre-filled messages | Click test in browser |
| A11y | Skip-link, ARIA labels, focus states | Tab-through + screen reader spot check |
| Responsive | 768px and 480px breakpoints | DevTools resize |
| SEO | JSON-LD, OG tags, canonical, sitemap | View source + sitemap.xml validation |

## Migration / Rollout

No migration required. Feature flag not applicable. Rollout = deploy to GitHub Pages.

## Open Questions

- None — all decisions documented above.

