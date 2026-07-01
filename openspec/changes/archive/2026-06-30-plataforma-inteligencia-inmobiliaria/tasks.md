# Tasks: Plataforma de Inteligencia Inmobiliaria — Landing Page

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~190 (88 HTML edits + 12 new + 70 CSS + 12 nav + 8 sitemap) |
| 400-line budget risk | Low |
| Chained PRs recommended | No |
| Suggested split | Single PR |
| Delivery strategy | auto-forecast |
| Chain strategy | pending |

Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: pending
400-line budget risk: Low

**Rationale**: ~190 changed lines. Single cohesive landing page with 4 small supporting edits (CSS append, nav in 3 existing pages, sitemap entry). Well under 400-line budget. One PR is appropriate.

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Page skeleton (reconciled HTML) + redirect stub + CSS | PR 1 | Core deliverable; landing page content and styles |
| 2 | Nav propagation + sitemap | PR 1 | Small supporting edits across 4 files, same PR as Unit 1 |

---

## Phase 1: Landing Page — Reconcile Existing Draft

**Reality check**: `inteligencia-inmobiliaria/index.html` exists as a 407-line draft. **Do NOT keep or discard blindly.** Reconcile it against the design:

- Align all section class names to the `ii-` prefix convention from the design (`.ii-method-name` not `.ii-method-title`, `.ii-platform-grid` not `.ii-platform-layout`, `.ii-final-cta` not `.ii-cta`, etc.)
- Fix the methodology tags from `<li>` long-text items to `<span class="ii-method-tag">` pill items per design
- Restructure city cards from the draft's `.ii-city-icon`/`.ii-city-body`/`.ii-city-title`/`.ii-city-link` pattern to the design's simpler `.ii-city-card` > `.ii-city-name` + `.ii-city-link-indicator` pattern
- Restructure impact section from `.ii-impact-col`/`.ii-impact-heading`/`.ii-impact-list` to design's `.ii-impact-grid` > `.ii-impact-card` pattern
- Fix final CTA classes from `.ii-cta-*` to `.ii-final-cta-*`
- Keep sections that already match (hero structure, value prop, JSON-LD, OG tags, skip-link, header/footer markup)

- [ ] 1.1 Reconcile header `<head>`: verify JSON-LD, OG tags, canonical URL match design spec
- [ ] 1.2 Fix hero WhatsApp message: change "Solicitar acceso" link to CBDI-specific message: `Hola%20Citrino%2C%20soy%20miembro%20de%20la%20CBDI%20y%20quiero%20solicitar%20acceso%20a%20la%20Plataforma%20de%20Inteligencia%20Inmobiliaria.`
- [ ] 1.3 Reconcile methodology section: rename `.ii-method-title` → `.ii-method-name`, convert `<li>` tags to `<span class="ii-method-tag">` pills in `ii-method-tags`
- [ ] 1.4 Reconcile platform indicators section: use `.ii-platform-grid` (2-col) layout with `.ii-platform-copy` left + `.ii-platform-features`/`.ii-platform-feature-item` right; drop draft-specific `.ii-kicker`, `.ii-platform-lead`, `.ii-platform-panel`
- [ ] 1.5 Restructure city links to design pattern: `<a class="ii-city-card" data-placeholder="true" href="#">` containing `<h3 class="ii-city-name">` + `<span class="ii-city-link-indicator">Acceder →</span>` (drop `.ii-city-icon`, `.ii-city-body`, `.ii-city-title`, `.ii-city-link`)
- [ ] 1.6 Restructure access/impact section: use `.ii-access-note` + `.ii-access-rule` for CBDI rules; use `.ii-impact-grid` + `.ii-impact-card` for the two-column layout
- [ ] 1.7 Reconcile final CTA section: use `.ii-final-cta`/`.ii-final-cta-content`/`.ii-final-cta-title` classes; fix WhatsApp message to `Quiero%20conocer%20la%20Plataforma%20de%20Inteligencia%20Inmobiliaria%20de%20Citrino`
- [ ] 1.8 Create `inteligencia-inmobiliaria.html` (root) with meta-refresh redirect to `/inteligencia-inmobiliaria/` per design

**Acceptance criteria**: All 7 sections from spec render. Hero badge shows CBDI text without logo. Hero CTA opens CBDI-specific WhatsApp. City cards are `<a>` with `href="#"` + `data-placeholder="true"`. Final CTA opens general-lead WhatsApp. All `ii-*` classes match design spec. Root redirect file 301-equivalent via meta-refresh.

## Phase 2: Page-Specific CSS

- [ ] 2.1 Append `/* ── Inteligencia Inmobiliaria Landing ──── */` section to `styles.css` before the `@media (prefers-reduced-motion)` block, containing all `ii-*` selectors from the design CSS table

**Acceptance criteria**: All `.ii-method-*`, `.ii-platform-*`, `.ii-cities-*`, `.ii-city-card`, `.ii-access-*`, `.ii-impact-*`, `.ii-final-cta-*`, `.ii-badge` selectors present with correct properties. Section comment visible in `styles.css`. No new design tokens — only existing `:root` variables.

## Phase 3: Nav Propagation Across All Pages

- [ ] 3.1 After `Base de datos` `<li>` in root `index.html`: header nav (insert `<li><a href="inteligencia-inmobiliaria/">Plataforma</a></li>`) + footer nav
- [ ] 3.2 After `Base de datos` `<li>` in `jul-ia/index.html`: header nav + footer nav (use `href="../inteligencia-inmobiliaria/"`)
- [ ] 3.3 After `Base de datos` `<li>` in `base-de-datos/index.html`: header nav + footer nav (use `href="../inteligencia-inmobiliaria/"`)

**Note**: The landing page's own nav (`inteligencia-inmobiliaria/index.html`) already has the "Plataforma" entry with `aria-current="page"` — verify it's correct but no changes needed.

**Acceptance criteria**: "Plataforma" link appears in header and footer nav on all 4 pages, positioned after "Base de datos". Active page has `aria-current="page" class="nav-active"`. All hrefs use correct relative paths.

## Phase 4: SEO — Sitemap Update

- [ ] 4.1 Add `<url>` entry to `sitemap.xml` for `https://citrino.com.bo/inteligencia-inmobiliaria/` with `<changefreq>monthly</changefreq>` and `<priority>0.8</priority>`

**Acceptance criteria**: `sitemap.xml` contains the new URL block. Valid XML structure preserved.

## Implementation Order

**Phase 1 → Phase 2 → Phase 3 → Phase 4** (sequential). Phase 1 and 2 can be done in parallel since CSS doesn't depend on HTML content. Phase 3 and 4 are independent of each other but must go after 1+2 so the page exists when nav links point to it.

The existing draft at `inteligencia-inmobiliaria/index.html` should be **reconciled** (not replaced nor kept verbatim). The bulk of the content is correct; the apply step edits section class names, tag structure, city card markup, impact layout, and WhatsApp messages to match the design.
