# Plataforma de Inteligencia Inmobiliaria — Landing Page Specification

## Purpose

A sober platform-focused landing page at `/inteligencia-inmobiliaria/` that presents the "Plataforma de Inteligencia Inmobiliaria" — a set of market analysis tools covering Bolivia's eje troncal (Santa Cruz, La Paz, Cochabamba). The page describes what the platform includes and routes interested parties to WhatsApp.

## Out of Scope

The following are explicitly NOT covered by this spec: authed portal or login screen, real indicator dashboards or data visualizations, CBDI member account management or Gmail assignment flow, Metabase integration or any BI tool embedding, city destination pages (Santa Cruz/Cochabamba/La Paz — placeholders only). Citrino corporate positioning ("who is Citrino", Equity Research methodology, Harvard/Levy Hara references, "única firma en Bolivia") — these belong on the homepage and are NOT part of this page.

---

## ADDED Requirements

### Requirement: Landing Page — 5-Block Sober Structure

The page at `/inteligencia-inmobiliaria/` MUST contain exactly five content blocks in order: (1) page header with title and factual subtitle, (2) value proposition listing the four analysis axes, (3) access links for three cities, (4) access note, (5) single WhatsApp CTA. Each block MUST contain only the content defined below.

#### Scenario: Page header displays title and factual subtitle only

- GIVEN a browser navigates to `/inteligencia-inmobiliaria/`
- WHEN the page loads
- THEN the hero section displays the title "Plataforma de Inteligencia Inmobiliaria" and a single sober subtitle: "Información del mercado inmobiliario del eje troncal — Santa Cruz, La Paz y Cochabamba: ciclo, censo, financiamiento e indicadores del sector."
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

#### Scenario: City links section renders three clickable placeholder cards

- GIVEN the user scrolls to the city links section
- WHEN the section is visible
- THEN it displays a heading "Acceso a la plataforma" and three `<a>` elements labeled "Inteligencia inmobiliaria Santa Cruz", "Inteligencia inmobiliaria Cochabamba", and "Inteligencia inmobiliaria La Paz", each with `href="#"` and `data-placeholder="true"`; they MUST be clickable (not disabled, not hidden)

#### Scenario: Access note section displays factual CBDI membership note

- GIVEN the user scrolls to the access note section
- WHEN the section is visible
- THEN it displays the text: "El acceso autorizado a la plataforma está limitado a socios de la Cámara Boliviana de Desarrolladores Inmobiliarios (CBDI) al día con sus aportes."
- AND NO marketing impact items ("Para el asociado", "Para el sector", "ventaja competitiva", "mitigación de riesgo") appear

#### Scenario: Final CTA contains single WhatsApp button

- GIVEN the user scrolls to the final CTA section
- WHEN the section is visible
- THEN it displays the title "Si te interesa tener acceso a esta información, escribinos." and a single WhatsApp button linking to `https://wa.me/59170933603?text=Hola%20Citrino%2C%20me%20interesa%20la%20Plataforma%20de%20Inteligencia%20Inmobiliaria.` with `target="_blank" rel="noopener noreferrer"`
- AND NO dual CTA or description paragraph appears

### Requirement: Banned Content

The page MUST NOT contain any of the following text or references:
- "Equity Research"
- "Levy Hara", "Harvard", or any academic institutional reference
- "única firma en Bolivia", "única en Bolivia y Paraguay", or similar exclusivity claims
- "transformamos la percepción en evidencia" or similar marketing taglines
- "ventaja competitiva", "mitigación de riesgo", or similar sales-language impact claims
- A hero badge (no `.ii-badge` element exists)

### Requirement: City Links as Swappable Placeholders

Three city links (Santa Cruz, Cochabamba, La Paz) MUST be `<a>` elements with `href="#"` and a `data-placeholder="true"` attribute. They MUST NOT be disabled, hidden, or styled as non-interactive. Each SHALL display a city-specific title and an "Acceder" link indicator.

### Requirement: Lead-Gen WhatsApp CTA

The page MUST provide exactly one WhatsApp CTA targeting `+59170933603` in the final CTA section (block 5). The hero section MUST NOT contain any CTA. The link format MUST use `https://wa.me/59170933603?text=...` with the pre-filled message "Hola Citrino, me interesa la Plataforma de Inteligencia Inmobiliaria." URL-encoded.

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

The page MUST include: JSON-LD of type `WebPage` with nested `Service`, Open Graph and Twitter Card meta tags, canonical URL `https://citrino.com.bo/inteligencia-inmobiliaria/`, and a corresponding entry in `sitemap.xml`. All meta copy MUST be sober and platform-focused, free of Citrino corporate superlatives.

#### Scenario: JSON-LD describes the platform as a service

- GIVEN a browser loads the page
- WHEN examining the `<script type="application/ld+json">` block
- THEN the JSON-LD is of type `WebPage` with an `about` field of type `Service` named "Plataforma de Inteligencia Inmobiliaria"
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
