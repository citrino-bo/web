# Plataforma de Inteligencia Inmobiliaria — Landing Page Specification

## Purpose

A sober platform-focused landing page at `/inteligencia-inmobiliaria/` that presents the "Plataforma de Inteligencia Inmobiliaria" — a set of market analysis tools covering Bolivia's eje troncal (Santa Cruz, Cochabamba, La Paz). The page describes what the platform includes, links to the live Looker Studio dashboards for cities already available, marks La Paz as "Próximamente", and routes interested parties to WhatsApp.

## Out of Scope

The following are explicitly NOT covered by this spec: authed portal or login screen, real indicator dashboards or data visualizations (these live in Looker Studio and are linked, not embedded), CBDI member account management or Gmail assignment flow, Metabase integration or any BI tool embedding, city destination pages on this site (Santa Cruz/Cochabamba/La Paz link out to Looker Studio, not to local pages). Citrino corporate positioning ("who is Citrino", Equity Research methodology, Harvard/Levy Hara references, "única firma en Bolivia") — these belong on the homepage and are NOT part of this page.

---

## ADDED Requirements

### Requirement: Landing Page — 4-Block Sober Structure

The page at `/inteligencia-inmobiliaria/` MUST contain exactly four content blocks in order: (1) page header with title, factual subtitle, and a single WhatsApp CTA, (2) value proposition listing the four analysis axes, (3) access links for three cities, (4) final WhatsApp CTA. Each block MUST contain only the content defined below. The page MUST NOT include any access-note or CBDI-membership-notice block.

#### Scenario: Page header displays title, factual subtitle, and a single WhatsApp CTA

- GIVEN a browser navigates to `/inteligencia-inmobiliaria/`
- WHEN the page loads
- THEN the hero section displays the title "Plataforma de Inteligencia Inmobiliaria" and a single sober subtitle: "Información del mercado inmobiliario del eje troncal — Santa Cruz, La Paz y Cochabamba: ciclo, censo, financiamiento e indicadores del sector."
- AND the hero contains exactly one CTA button labeled "Solicitar acceso" linking to `https://wa.me/59170933603?text=Hola%20Citrino%2C%20me%20interesa%20la%20Plataforma%20de%20Inteligencia%20Inmobiliaria.` with `target="_blank" rel="noopener noreferrer"`
- AND the hero contains NO badge, NO dual CTA, NO marketing taglines, NO Citrino corporate positioning

#### Scenario: Value prop lists the four analysis axes with factual descriptions

- GIVEN the user scrolls past the header
- WHEN the value prop section enters the viewport
- THEN it displays a heading "Qué incluye la plataforma" and four items:
  - "Ciclo y censo inmobiliario" — description covering cycle phases, offer census, stock, sales pace, months of stock, and price per m² by zone and typology
  - "Análisis del financiamiento al sector" — description covering mortgage and construction credit evolution, portfolio, delinquency, and regulatory impact (D.S. 1842 and 2137)
  - "Análisis evolutivo" — description covering long-term trends in supply, sales pace, prices, and absorption by zone and construction stage
  - "Plataforma de indicadores inmobiliarios" — description covering the online tool updated continuously from annual census and monthly sampling
- AND NO corporate positioning items ("Equity Research", "Expertise única", "Metodología avalada por Harvard") appear

#### Scenario: City access section renders two live links and one "Próximamente" card

- GIVEN the user scrolls to the city access section
- WHEN the section is visible
- THEN it displays a heading "Acceso a la plataforma" and three city cards: Santa Cruz and Cochabamba as live `<a>` elements pointing to Looker Studio, and La Paz as a disabled card with a "Próximamente" badge

#### Scenario: Final CTA contains a single WhatsApp button

- GIVEN the user scrolls to the final CTA section
- WHEN the section is visible
- THEN it displays the title "Si te interesa tener acceso a esta información, escribinos." and a single WhatsApp button labeled "Escribinos por WhatsApp" linking to `https://wa.me/59170933603?text=Hola%20Citrino%2C%20me%20interesa%20la%20Plataforma%20de%20Inteligencia%20Inmobiliaria.` with `target="_blank" rel="noopener noreferrer"`
- AND NO dual CTA or description paragraph appears

### Requirement: Banned Content

The page MUST NOT contain any of the following text or references:
- "Equity Research"
- "Levy Hara", "Harvard", or any academic institutional reference
- "única firma en Bolivia", "única en Bolivia y Paraguay", or similar exclusivity claims
- "transformamos la percepción en evidencia" or similar marketing taglines
- "ventaja competitiva", "mitigación de riesgo", or similar sales-language impact claims
- A hero badge (no badge element exists)
- A "socios de la Cámara Boliviana de Desarrolladores Inmobiliarios (CBDI) al día con sus aportes" access note block (this is not implemented; see Future / Not Implemented)

### Requirement: City Access Links

The city access section MUST render three cards representing the three cities of Bolivia's eje troncal, in this order: Santa Cruz, Cochabamba, La Paz. The two cities with live dashboards MUST be `<a>` elements pointing to Looker Studio reports, and the one without a live dashboard MUST be a disabled card with a "Próximamente" badge.

#### Scenario: Santa Cruz card links to the live Looker Studio report

- GIVEN a user scrolls to the city access section
- WHEN the Santa Cruz card is inspected
- THEN it is an `<a>` element with `href="https://datastudio.google.com/reporting/4802c680-ec58-4d48-b879-9d3341e428e1"`, `target="_blank"`, `rel="noopener noreferrer"`
- AND it displays the title "Inteligencia inmobiliaria Santa Cruz" and a link indicator "Acceder →"

#### Scenario: Cochabamba card links to the live Looker Studio report

- GIVEN a user scrolls to the city access section
- WHEN the Cochabamba card is inspected
- THEN it is an `<a>` element with `href="https://datastudio.google.com/reporting/3066ff66-4f25-480f-a710-60cef0423cc6"`, `target="_blank"`, `rel="noopener noreferrer"`
- AND it displays the title "Inteligencia inmobiliaria Cochabamba" and a link indicator "Acceder →"

#### Scenario: La Paz card is disabled with a "Próximamente" badge

- GIVEN a user scrolls to the city access section
- WHEN the La Paz card is inspected
- THEN it is a `<div>` (not an `<a>`) with class `ii-city-card ii-city-card-soon` and `aria-disabled="true"`
- AND it displays the title "Inteligencia inmobiliaria La Paz" and a "Próximamente" badge
- AND clicking or focusing the card does NOT navigate anywhere

### Requirement: Lead-Gen WhatsApp CTA

The page MUST provide exactly two WhatsApp CTAs (one in the hero, one in the final CTA section), both targeting `+59170933603` with the pre-filled message "Hola Citrino, me interesa la Plataforma de Inteligencia Inmobiliaria." URL-encoded. The hero CTA MUST be labeled "Solicitar acceso" and the final CTA MUST be labeled "Escribinos por WhatsApp". Both links MUST use `https://wa.me/59170933603?text=...` and open in a new tab with `target="_blank" rel="noopener noreferrer"`.

#### Scenario: Hero WhatsApp link opens correct pre-filled chat

- GIVEN a user is on the hero section
- WHEN they click "Solicitar acceso"
- THEN the browser opens `https://wa.me/59170933603?text=Hola%20Citrino%2C%20me%20interesa%20la%20Plataforma%20de%20Inteligencia%20Inmobiliaria.` in a new tab

#### Scenario: Final CTA WhatsApp link opens correct pre-filled chat

- GIVEN a user scrolls to the final CTA section
- WHEN they click "Escribinos por WhatsApp"
- THEN the browser opens `https://wa.me/59170933603?text=Hola%20Citrino%2C%20me%20interesa%20la%20Plataforma%20de%20Inteligencia%20Inmobiliaria.` in a new tab

### Requirement: Navigation & Discoverability — "Plataforma" Nav Entry

A "Plataforma" navigation entry MUST be present in the header nav AND footer nav on all four site pages: `index.html`, `jul-ia/index.html`, `base-de-datos/index.html`, and `inteligencia-inmobiliaria/index.html`. On the active page (`inteligencia-inmobiliaria/index.html`), the nav entry SHALL have `aria-current="page"`.

#### Scenario: "Plataforma" appears in header nav on root index.html

- GIVEN a browser loads `https://citrino.com.bo/`
- WHEN inspecting the `<header>` navigation menu
- THEN an `<a>` element with text "Plataforma" and `href="inteligencia-inmobiliaria/"` is present

#### Scenario: Active page has aria-current="page" on the Plataforma link

- GIVEN a browser loads `https://citrino.com.bo/inteligencia-inmobiliaria/`
- WHEN inspecting the header nav link labeled "Plataforma"
- THEN it has the attribute `aria-current="page"`

### Requirement: Static-Site Conventions

The landing page MUST follow existing static-site patterns: live in a subdirectory (`inteligencia-inmobiliaria/index.html`), with a root-level `inteligencia-inmobiliaria.html` redirect stub. It MUST reference `../styles.css` for shared styles. Page-specific CSS MUST be in `styles.css` under `/* ── Inteligencia Inmobiliaria Landing ──── */` using `ii-*` prefixed selectors. Existing `script.js` (scroll-reveal + hamburger) MUST be reused.

#### Scenario: Root redirect file sends users to subdirectory

- GIVEN a browser requests `https://citrino.com.bo/inteligencia-inmobiliaria.html`
- WHEN the page loads
- THEN a `<meta http-equiv="refresh">` tag redirects to `/inteligencia-inmobiliaria/` after 0 seconds

#### Scenario: Page-specific styles use ii-* prefix in styles.css

- GIVEN the project's `styles.css` file
- WHEN searching for a section comment matching `/* ── Inteligencia Inmobiliaria Landing ──── */`
- THEN all page-specific CSS selectors (`.ii-*` prefixed) are contained within that section
- AND every `ii-*` class used in the HTML has a corresponding CSS rule
- AND no orphan CSS rules exist for unused `ii-*` classes

### Requirement: SEO — Structured Data + Social Meta

The page MUST include: JSON-LD of type `WebPage` with nested `Service` describing the platform as developed for the Cámara Boliviana de Desarrolladores Inmobiliarios (CBDI) and with `Citrino Capitales Inmobiliarios` as `provider`, Open Graph and Twitter Card meta tags, canonical URL `https://citrino.com.bo/inteligencia-inmobiliaria/`, and a corresponding entry in `sitemap.xml`. All meta copy MUST be sober and platform-focused, free of Citrino corporate superlatives.

#### Scenario: JSON-LD describes the platform as a service developed for CBDI

- GIVEN a browser loads the page
- WHEN examining the `<script type="application/ld+json">` block
- THEN the JSON-LD is of type `WebPage` with an `about` field of type `Service` named "Plataforma de Inteligencia Inmobiliaria"
- AND the `Service.description` field mentions "Cámara Boliviana de Desarrolladores Inmobiliarios (CBDI)"
- AND the `Service.provider` is an `Organization` named "Citrino Capitales Inmobiliarios"
- AND NO "metodología avalada por Harvard" or similar language appears in any structured data field

#### Scenario: OG and Twitter meta tags use sober platform-focused copy

- GIVEN the page `<head>` is inspected
- WHEN checking `meta[property="og:url"]` and `meta[name="twitter:title"]`
- THEN `og:url` is `https://citrino.com.bo/inteligencia-inmobiliaria/`
- AND descriptions reference "mercado inmobiliario del eje troncal" with NO corporate superlatives

### Requirement: Accessibility & Responsive

The page MUST include: a skip-link targeting `#main-content`, `alt` attributes on all images, ARIA labels on interactive non-text elements (hamburger button, social links), `aria-hidden="true"` on all decorative SVGs, visible focus states on all interactive elements, and responsive breakpoints matching the existing pages (768px mobile, 480px small mobile).

#### Scenario: Skip-link present before header

- GIVEN the page loads
- WHEN checking the first focusable element
- THEN an `<a href="#main-content" class="skip-link">` exists with visible-on-focus styling

#### Scenario: Hamburger button has aria-label

- GIVEN the page header renders
- WHEN inspecting the hamburger element
- THEN it has `role="button"`, `aria-label="Abrir menú de navegación"`, and `aria-expanded="false"`

#### Scenario: All decorative SVGs have aria-hidden="true"

- GIVEN the page loads
- WHEN inspecting all `<svg>` elements that are icons or decorations (not images)
- THEN each has the attribute `aria-hidden="true"`

### Requirement: Privacy-Friendly Analytics (Umami Self-Hosted)

The page MUST load the self-hosted Umami analytics script from `https://estadisticas.srv1406344.hstgr.cloud/script.js` with the `defer` attribute and a `data-website-id` attribute set to the production site ID. The page MUST include a `<link rel="preconnect" href="https://estadisticas.srv1406344.hstgr.cloud">` in the `<head>` to establish an early connection. No cookie banner is required because Umami is cookieless.

#### Scenario: Umami script loads with defer and correct site ID

- GIVEN a browser loads the page
- WHEN inspecting scripts with `src` pointing to `estadisticas.srv1406344.hstgr.cloud`
- THEN the script tag has the `defer` attribute and a `data-website-id` attribute matching the production site ID assigned to the landing page

#### Scenario: Preconnect to Umami host is declared in head

- GIVEN the page `<head>` is inspected
- WHEN searching for `<link rel="preconnect">` tags
- THEN one of them targets `https://estadisticas.srv1406344.hstgr.cloud`

---

## Future / Not Implemented

The following items were considered for inclusion in this spec but are NOT currently implemented in the HTML and therefore are NOT active requirements. They are documented here so future changes can reference them.

### CBDI Access Note Block (not implemented)

A prior version of this spec required an "Access note" block containing the text: "El acceso autorizado a la plataforma está limitado a socios de la Cámara Boliviana de Desarrolladores Inmobiliarios (CBDI) al día con sus aportes." This block is NOT present in the current HTML and is NOT a requirement of this spec. The current page already references CBDI through the JSON-LD `Service.description` field, which is sufficient. If a visible access note is added in a future change, it SHOULD appear between the city access section and the final CTA, and SHOULD reuse the text above.
