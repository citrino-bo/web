# Plataforma de Inteligencia Inmobiliaria — Landing Page Specification

## Purpose

A lead-gen landing page at `/inteligencia-inmobiliaria/` that converts Citrino's CBDI collaboration into a client-acquisition channel. Non-members are routed to WhatsApp consultoría; CBDI members are informed about the access-request flow.

## Out of Scope

The following are explicitly NOT covered by this spec: authed portal or login screen, real indicator dashboards or data visualizations, CBDI member account management or Gmail assignment flow, Metabase integration or any BI tool embedding, city destination pages (Santa Cruz/Cochabamba/La Paz — placeholders only).

---

## ADDED Requirements

### Requirement: Landing Page Section Sequence

The page at `/inteligencia-inmobiliaria/` MUST contain the following sections in order: hero, value proposition, methodology (4 axes), platform indicators, city links, access/impact info, final WhatsApp CTA. Each section MUST contain the content defined in the proposal.

#### Scenario: Hero section renders badge, title, subtitle, and dual CTA

- GIVEN a browser navigates to `/inteligencia-inmobiliaria/`
- WHEN the page loads
- THEN the hero section displays a badge reading "En alianza con la Cámara Boliviana de Desarrolladores Inmobiliarios (CBDI)", the title "Plataforma de Inteligencia Inmobiliaria", a subtitle describing Citrino's equity research approach, and two CTAs: "Solicitar acceso" (WhatsApp link) and "Conocer la metodología" (scroll anchor)

#### Scenario: Value prop section lists three differentiators

- GIVEN the user scrolls past the hero
- WHEN the value prop section enters the viewport
- THEN it displays three items: "Equity Research como núcleo", "Expertise única en la región" and "Metodología avalada por Harvard", each with a description paragraph

#### Scenario: Methodology grid shows four analysis axes

- GIVEN the user scrolls to the methodology section
- WHEN the section is visible
- THEN four cards are displayed with titles "Ciclo inmobiliario", "Censo inmobiliario", "Financiamiento del sector" and "Análisis evolutivo", each with a description and tag list

#### Scenario: Platform indicators section has copy + feature list split layout

- GIVEN the user scrolls to the platform indicators section
- WHEN the section is visible
- THEN the layout presents descriptive copy on the left and a feature list (inventory/stock, pricing, macro indicators) on the right

#### Scenario: City links section renders three clickable link cards

- GIVEN the user scrolls to the city links section
- WHEN the section is visible
- THEN three `<a>` elements render labeled "Santa Cruz", "Cochabamba" and "La Paz", each with `href="#"` and `data-placeholder="true"` attribute; they MUST be clickable (not disabled, not hidden)

### Requirement: Lead-Gen WhatsApp CTA

The page MUST provide a WhatsApp CTA targeting `+59170933603` with a pre-filled Spanish message. This CTA MUST appear in the hero section AND in the final CTA section. The link format MUST use `https://wa.me/59170933603?text=...` with an URL-encoded message describing interest in the platform.

#### Scenario: Hero WhatsApp CTA opens correct pre-filled chat

- GIVEN a non-member user is on the landing page
- WHEN they click "Solicitar acceso" in the hero
- THEN the browser opens `https://wa.me/59170933603?text=Hola%20Citrino%2C%20me%20interesa%20conocer%20la%20Plataforma%20de%20Inteligencia%20Inmobiliaria.` in a new tab

#### Scenario: Final CTA WhatsApp link uses the same number

- GIVEN a user scrolls to the final CTA section
- WHEN they click "Escribinos por WhatsApp"
- THEN the browser opens `https://wa.me/59170933603` with a pre-filled message about "tener acceso" to the platform

### Requirement: Branding — Citrino Primary, CBDI Mentioned

The page MUST use Citrino as the primary brand (logo, colors, typography per the citrino-frontend-design skill). The CBDI alliance MUST be mentioned as "en alianza con la Cámara Boliviana de Desarrolladores Inmobiliarios (CBDI)" in the hero badge. No CBDI logo co-branding SHALL appear. The CBDI access-rule note MUST be present: access limited to CBDI members up to date with contributions, each member can assign up to two Gmail addresses.

#### Scenario: Hero badge mentions CBDI without logo

- GIVEN the landing page loads
- WHEN inspecting the hero badge text
- THEN it contains "CBDI" but no `<img>` or SVG representing a CBDI logo is present on the page

#### Scenario: CBDI access note explains membership rules

- GIVEN a user scrolls to the access section
- WHEN reading the access note
- THEN the text states that authorized access is limited to CBDI members up to date with their contributions and that each member can assign up to two Gmail addresses

### Requirement: City Links as Swappable Placeholders

Three city links (Santa Cruz, Cochabamba, La Paz) MUST be `<a>` elements with `href="#"` and a `data-placeholder="true"` attribute. They MUST NOT be disabled, hidden, or styled as non-interactive. Each SHALL display a city-specific title and an "Acceder" link indicator.

#### Scenario: City links are clickable anchor elements

- GIVEN the city links section is rendered
- WHEN inspecting each city card's HTML
- THEN each is an `<a>` tag with `href="#"`, `data-placeholder="true"`, rendered as a visibly clickable card (not `disabled`, not `aria-disabled`, not `pointer-events: none`, not `display: none`)

### Requirement: Navigation & Discoverability — "Plataforma" Nav Entry

A "Plataforma" navigation entry MUST be present in the header nav AND footer nav on all four site pages: `index.html`, `jul-ia/index.html`, `base-de-datos/index.html`, and `inteligencia-inmobiliaria/index.html`. On the active page (`inteligencia-inmobiliaria/index.html`), the nav entry SHALL have `aria-current="page"`.

#### Scenario: "Plataforma" appears in header nav on root index.html

- GIVEN a browser loads `https://citrino.com.bo/`
- WHEN inspecting the `<header>` navigation menu
- THEN an `<a>` element with text "Plataforma" and `href="inteligencia-inmobiliaria/"` is present

#### Scenario: "Plataforma" appears in footer nav on jul-ia/index.html

- GIVEN a browser loads `https://citrino.com.bo/jul-ia/`
- WHEN inspecting the `<footer>` navigation list
- THEN an `<a>` element with text "Plataforma" and `href="../inteligencia-inmobiliaria/"` is present

#### Scenario: Active page has aria-current="page" on the Plataforma link

- GIVEN a browser loads `https://citrino.com.bo/inteligencia-inmobiliaria/`
- WHEN inspecting the header nav link labeled "Plataforma"
- THEN it has the attribute `aria-current="page"`

### Requirement: Static-Site Conventions

The landing page MUST follow existing static-site patterns: live in a subdirectory (`inteligencia-inmobiliaria/index.html`), with a root-level `inteligencia-inmobiliaria.html` redirect stub using meta-refresh. It MUST reference `../styles.css` for shared styles. Page-specific CSS MUST be appended to `styles.css` under a clearly marked section comment. Existing `script.js` (scroll-reveal + hamburger) MUST be reused.

#### Scenario: Root redirect file sends users to subdirectory

- GIVEN a browser requests `https://citrino.com.bo/inteligencia-inmobiliaria.html`
- WHEN the page loads
- THEN a `<meta http-equiv="refresh">` tag redirects to `/inteligencia-inmobiliaria/` after 0 seconds

#### Scenario: Page-specific styles live in shared styles.css

- GIVEN the project's `styles.css` file
- WHEN searching for a section comment matching `/* ── Inteligencia Inmobiliaria Landing ──── */`
- THEN all page-specific CSS selectors (`.ii-*` prefixed) are contained within that section

#### Scenario: script.js provides scroll-reveal and hamburger behavior

- GIVEN the landing page loads
- WHEN scrolling through sections
- THEN elements with class `scroll-reveal` become visible via the shared script.js intersection observer

### Requirement: SEO — Structured Data + Social Meta

The page MUST include: JSON-LD of type `WebPage` with nested `Service`, Open Graph and Twitter Card meta tags, canonical URL `https://citrino.com.bo/inteligencia-inmobiliaria/`, and a corresponding entry in `sitemap.xml`.

#### Scenario: JSON-LD describes the platform as a service

- GIVEN a browser loads the page
- WHEN examining the `<script type="application/ld+json">` block
- THEN the JSON-LD is of type `WebPage` with an `about` field of type `Service` named "Plataforma de Inteligencia Inmobiliaria" and the provider is Citrino

#### Scenario: OG and Twitter meta tags reference the correct URL

- GIVEN the page `<head>` is inspected
- WHEN checking `meta[property="og:url"]` and `meta[name="twitter:title"]`
- THEN `og:url` is `https://citrino.com.bo/inteligencia-inmobiliaria/` and `twitter:title` contains "Plataforma de Inteligencia Inmobiliaria"

#### Scenario: sitemap.xml includes the new URL

- GIVEN the `sitemap.xml` file is read
- WHEN searching for `inteligencia-inmobiliaria`
- THEN an `<url>` entry exists with `<loc>https://citrino.com.bo/inteligencia-inmobiliaria/</loc>`

### Requirement: Accessibility & Responsive

The page MUST include: a skip-link targeting `#main-content`, `alt` attributes on all images, ARIA labels on interactive non-text elements (hamburger button, social links), visible focus states on all interactive elements, and responsive breakpoints matching the existing pages (768px mobile, 480px small mobile).

#### Scenario: Skip-link present before header

- GIVEN the page loads
- WHEN checking the first focusable element
- THEN an `<a href="#main-content" class="skip-link">` exists with visible-on-focus styling

#### Scenario: Hamburger button has aria-label

- GIVEN the page header renders
- WHEN inspecting the hamburger element
- THEN it has `role="button"`, `aria-label="Abrir menú de navegación"`, and `aria-expanded="false"`

#### Scenario: Responsive at 768px shows hamburger and stacked layout

- GIVEN a viewport width of 768px or less
- WHEN inspecting the page layout
- THEN the hamburger menu is visible, the nav menu is hidden (transformed off-screen), and sections stack vertically with full-width content
