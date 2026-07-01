# Proposal: Plataforma de Inteligencia Inmobiliaria Landing Page

## Intent

Attract NEW developer/investor clients who are not yet CBDI members by presenting Citrino's market-intelligence platform as a lead-gen asset. The page routes non-members to WhatsApp consultoría (monetizable path) and CBDI members to the access-request flow. It converts Citrino's CBDI collaboration into a client-acquisition channel.

## Scope

### In Scope
- Lead-gen landing page at `/inteligencia-inmobiliaria/`: hero, value prop, methodology (4 axes), platform indicators, city links (placeholder), access/impact info, final WhatsApp CTA
- Root redirect `inteligencia-inmobiliaria.html` (301 meta-refresh)
- Nav entry "Plataforma" added to header on all pages + footer
- Page-specific CSS appended to `styles.css`
- `sitemap.xml` updated with new URL entry
- Pre-filled WhatsApp link (`+59170933603`) for non-member consultoría CTA

### Out of Scope
- Authed portal or login screen
- Real indicator dashboards or data visualizations
- CBDI member account management / gmail assignment flow
- Metabase integration or any BI tool embedding
- City destination pages (SC/Cbba/LP) — placeholders only

## Capabilities

### New Capabilities
- `plataforma-inteligencia-landing`: Lead-gen landing page — sections (hero, value prop, methodology 4 axes, platform indicators, city links, access/impact, CTA), WhatsApp integration, placeholder city link pattern

### Modified Capabilities
- None (no existing specs)

## Approach

**Page flow:** Hero (badge + title + subtitle + dual CTA) → Value prop (why Citrino: 3 items) → Methodology (4 analysis axes as cards) → Platform indicators (split layout: copy + features list) → City links (3 cards with `data-placeholder` hrefs) → Access info (CBDI rules + note) → Impact (for member / for sector) → Final WhatsApp CTA.

**Tech:** Static HTML/CSS/JS within existing conventions. Avoids npm, build tools. Page-specific CSS appended to `styles.css` under an `/* ── Inteligencia Inmobiliaria Landing ──── */` section. City links use `<a href="#" data-placeholder="true">` marked with a CSS class for future swappability. All interactive behavior via existing `script.js` scroll-reveal + nav hamburger logic.

**SEO:** JSON-LD (WebPage+Service), OG/Twitter cards, canonical, `sitemap.xml` entry — matching existing page patterns.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `inteligencia-inmobiliaria/index.html` | New | Landing page content |
| `inteligencia-inmobiliaria.html` | New | Root redirect stub |
| `styles.css` | Modified | Append page-specific styles |
| `jul-ia/index.html` | Modified | Add "Plataforma" to nav + footer |
| `base-de-datos/index.html` | Modified | Add "Plataforma" to nav + footer |
| `index.html` (root) | Modified | Add "Plataforma" to nav + footer |
| `sitemap.xml` | Modified | Add `/inteligencia-inmobiliaria/` entry |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| City URLs not provided by Citrino team before deploy | High | Use `<a href="#">` with `data-placeholder`; trivial 1-line swap |
| Dual audience (CBDI member vs non-member) confuses CTA | Med | Split CTAs clearly: "Solicitar acceso" (members) vs WhatsApp consultoría (non-members) |
| Page feels too informational, weak on lead-gen | Low | Leading CTA is WhatsApp; copy framed as value → action throughout |

## Rollback Plan

Revert the 3 files: delete `inteligencia-inmobiliaria/index.html`, delete `inteligencia-inmobiliaria.html`, revert `styles.css` append. Remove nav entry "Plataforma" from header/footer on all pages. Revert `sitemap.xml`.

## Dependencies

- City destination URLs (team will provide; placeholder-safe for initial deploy)
- Final WhatsApp pre-fill message copy (default provided in requirements)

## Success Criteria

- [ ] Landing page deployed and accessible at `https://citrino.com.bo/inteligencia-inmobiliaria/`
- [ ] WhatsApp CTA triggers correct pre-filled message to `+59170933603`
- [ ] City links render as clickable `<a>` elements (not disabled) with `data-placeholder`
- [ ] Nav "Plataforma" entry added on all site pages with `aria-current="page"` on active
- [ ] Page passes basic Lighthouse audit (no a11y or SEO regressions vs existing pages)
- [ ] CBDI alliance badge shown without logo co-branding
