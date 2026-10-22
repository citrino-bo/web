---
name: Citrino Capitales Inmobiliarios
description: Data and real-estate intelligence for Santa Cruz, Bolivia
colors:
  primary: "#002857"
  primary-light: "#004080"
  primary-dark: "#001a38"
  primary-deep: "#0a1f3d"
  signal: "#ee7900"
  signal-gradient-end: "#cc6a00"
  signal-hover: "#ff9f30"
  signal-ink: "#a14c00"
  return: "#10b981"
  ink: "#1f2937"
  ink-medium: "#4b5563"
  ink-muted: "#6b7280"
  ink-faint: "#9ca3af"
  paper: "#f9fafb"
  paper-raised: "#f3f4f6"
  surface: "#ffffff"
  footer: "#111827"
  dark-page: "#0a0f1a"
  dark-surface: "#0f1724"
  dark-raised: "#1a2235"
  dark-deep: "#060a12"
  dark-ink: "#e5e7eb"
  dark-ink-medium: "#b6bdc9"
  dark-link: "#93c5fd"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(2.2rem, 5.6vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(1.9rem, 3.8vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  stat:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 2.75rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
  subtitle:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(1.125rem, 2.2vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  heading:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  lead:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  small:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.06em"
  display-compact:
    fontFamily: "Outfit, sans-serif"
    fontSize: "2rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.03em"
rounded:
  hairline: "1px"
  rule: "2px"
  swatch: "3px"
  bar: "6px"
  sm: "8px"
  md: "10px"
  lg: "12px"
  card: "16px"
  pill: "100px"
spacing:
  section: "6rem"
  section-roomy: "7rem"
  container-max: "1200px"
  container-narrow: "820px"
  container-padding: "2rem"
  grid-gap: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "1rem 2.5rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "1rem 2.5rem"
  cifra:
    backgroundColor: "transparent"
    textColor: "{colors.surface}"
    rounded: "0"
    padding: "1.75rem 1.25rem"
  card-chart:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "2rem"
  card-acceso:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "2rem"
  field-input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.8rem 0.9rem"
  nav-header:
    backgroundColor: "rgba(255, 255, 255, 0.95)"
    textColor: "{colors.ink}"
    padding: "1rem 2rem"
---

# Design System: Citrino Capitales Inmobiliarios

## Overview

**Creative North Star: "The Data Room"**

The system reads as an institutional intelligence desk: a deep navy world interrupted by white and off-white proof sections, with orange reserved for the signal — a number, a link, a call to action. It is dense with evidence (censuses, tables, a density map, charts) and light on decoration. Nothing is illustrated that could be measured.

It ships in two themes — light and dark — driven entirely by `prefers-color-scheme`, with no in-page toggle. Both themes carry the same navy/orange identity; dark mode reskins surfaces and inverts ink rather than inventing a second palette.

**Key Characteristics:**
- Data-forward: statistics are typographic elements, not captions
- Two-theme system: light default, dark automatic, same identity in both
- Documentary density: divided lists, tables of numbers, a real density map, real charts
- Restraint in motion: one entrance animation, one hover lift, nothing ambient

## Colors

Three brand roles plus a neutral ladder, duplicated into a dark ladder that swaps by media query. Depth comes from tonal bands; shadows are neutral black, never tinted.

### Primary
- **Deep Authority** (`{colors.primary}`): hero and interior-page backgrounds, `.banda-oscura`, `.cta-final`, heading text on light surfaces via `--heading-ink`.
- **Authority Light** (`{colors.primary-light}`): fourth step of the map density ramp.
- **Authority Dark / Deep** (`{colors.primary-dark}`, `{colors.primary-deep}`): the two dark stops of the hero and closing CTA gradients.

### Secondary
- **Signal** (`{colors.signal}`): primary buttons, statistic figures, the 60×4px bar under section titles, the densest map cells, list markers, LinkedIn links.
- **Signal Gradient End** (`{colors.signal-gradient-end}`): second stop of `--gradient-secondary`, so orange fills are gradients, never flat.
- **Signal Hover** (`{colors.signal-hover}`): defined for the orange hover state.
- **Signal Ink** (`{colors.signal-ink}`): the darker orange for text on light surfaces (links, table totals, `.persona-linkedin`) where the base orange would fail contrast.

### Tertiary
- **Return** (`{colors.return}`): positive-state only. Defined, not currently used on a page.

### Neutral (light)
- **Ink** (`{colors.ink}`): body text and headings on light surfaces.
- **Ink Medium / Muted / Faint** (`{colors.ink-medium}`, `{colors.ink-muted}`, `{colors.ink-faint}`): supporting copy, labels, captions.
- **Paper / Paper Raised** (`{colors.paper}`, `{colors.paper-raised}`): the alternating off-white section bands, field backgrounds, dividers.
- **Surface** (`{colors.surface}`): page background and card fills on light.
- **Footer** (`{colors.footer}`): the footer band.

### Neutral (dark)
- **Page / Surface / Raised / Deep**: body background is `dark-page`; cards, header and form move between `dark-surface` and `dark-raised`.
- **Dark Ink / Dark Ink Medium / Dark Link**: dark-mode body text (`#e5e7eb`), supporting copy (`#b6bdc9`) and in-text links (`#93c5fd`).
- In dark mode `--text-dark`, `--text-medium`, `--text-light`, `--white`, `--bg-light`, `--bg-lighter` and `--bg-dark` are re-pointed to this ladder, `--secondary-ink` collapses back to the base `Signal`, and the `--chart-*` tokens switch to values that read on night surfaces. Shadows become pure black at higher opacity.
- `--heading-ink` is the one token that carries heading color: navy in light, `dark-ink` in dark. Headings never use `--primary-color` directly, so the navy can stay navy for gradients and fills.

### Named Rules
**The Signal Rule.** Orange marks what the reader should act on or read as a number: figures, links, primary buttons, the densest data, the title bar. It is not a decorative wash and not a card accent.

**The Two-Theme Rule.** Every new surface must be checked in both themes. A component that only defines light values is unfinished, and any color hardcoded in JS (Chart.js datasets, map ramps) must exist in both.

**The Contrast Ink Rule.** Orange text on a light surface uses `{colors.signal-ink}`, not `{colors.signal}`.

**The Brand-Asset Rule.** Logos of the business units and of the group keep their official colors. They are marks, not decorative accents, and they are never recolored or desaturated to fit the palette.

## Typography

**Display Font:** Outfit (geometric sans, weights 400–800) **Body Font:** DM Sans (humanist sans, 400–600) **Label Font:** JetBrains Mono (monospace, 400–500), used uppercase with wide tracking

**Character:** Outfit gives the numbers their architectural quality; DM Sans keeps long explanatory copy readable; the mono is reserved for machine-truth metadata (table headers, update dates, the map legend, the CBDI alliance line). All three load from Google Fonts in a single request, and `body` sets `font-variant-numeric: tabular-nums` so statistics align.

### Hierarchy
The ramp has seven fixed steps and three fluid ones. Nothing else is allowed; a size that is not on this list is drift.

- **Display** (`{typography.display}`): `.hero-title`, Outfit 800 at `clamp(2.2rem, 5.6vw, 3.75rem)`, centered, one per page.
- **Headline** (`{typography.headline}`): `.section-title`, `.banda-titulo`, `.cta-final-title` and the interior hero title (`.hero--interior .hero-title`), Outfit 700, centered, with the orange bar beneath, capped at 26ch (40ch with `.section-title--wide`).
- **Stat** (`{typography.stat}`): `.cifra-valor`, Outfit 800 orange at `clamp(2rem, 3.6vw, 2.75rem)`, always paired with a label underneath. Static values, no counter.
- **Heading** (`{typography.heading}`): `1.5rem` for `.censo-article h3`, `.mapa-header h3`, `.unidad h2`, and the `.hero-title` under 480px.
- **Title** (`{typography.title}`): `1.25rem` for `.chart-card h3`, `.acceso h3`, `.lead-question`, `.documento h2`.
- **Lead** (`{typography.lead}`): `1.125rem` at 1.75 for `.censo-article p`, `.unidad-descripcion`, `.cta-final-text`; capped at 72ch.
- **Subtitle** (`{typography.subtitle}`): `.hero-subtitle` and `.section-subtitle`, `clamp(1.125rem, 2.2vw, 1.375rem)` and `1.125rem` respectively.
- **Body** (`{typography.body}`): `1rem` for nav labels, buttons, list items and form fields.
- **Small** (`{typography.small}`): `0.875rem` for helper copy, consent rows, reassurance, chart notes, company rubros, roles and footer bottom.
- **Label** (`{typography.label}`): JetBrains Mono 500 at `0.75rem` with `0.06em` tracking, uppercase, for `.tabla-censo thead th`, `.mapa-leyenda`, `.alianza-label` and `.footer-nav-title`.
- **Display compact** (`{typography.display-compact}`): `2rem`, only for `.persona-iniciales`, the monogram that replaces a missing team photo.

### Named Rules
**The One Bar Rule.** Section titles get the orange underline exactly once, from `.section-title::after` / `.banda-titulo::after`: 60×4px, `--gradient-secondary`, 2px radius, `margin: 1rem auto 0`. Document pages (`privacidad.html`) are the one sanctioned variant: their `h2` uses a full-width 2px orange bottom border instead. Never redraw either locally.

**The Mono Means Data Rule.** JetBrains Mono only marks machine output — table headers, vintages, counts, the map legend. Never body copy, never headlines.

## Layout

A single centered container of `1200px` with `2rem` side padding (`820px` for `.container--narrow`), sitting inside full-bleed color bands. Sections alternate `Paper` → `Surface` → `Primary` → `Surface` → `Footer` down the home page, so the eye moves between evidence (light) and authority (navy) without a hard edge.

- **Section rhythm:** `6rem` padding for standard sections, `7rem` for the closing CTA band, `5rem` for `.mapa`, `4rem` on mobile.
- **Grids:** two-up for `.charts-grid`, three-up for `.accesos`, four-up for `.equipo` (three under 1024px, two under 768px, one under 480px), with a consistent `2rem` gap.
- **Divided lists, not cards:** `.censo-article`, `.unidad`, `.empresa` and `.logro` are rows separated by a `1px` hairline. The only cards in the system are `.chart-card` and `.acceso`.
- **Hero:** full viewport (`92vh`) on the home page, content centered, `8rem 2rem 5rem` padding, with a 24px white-dot radial grid behind the headline. Interior heroes (`.hero--interior`) drop to `min-height: auto` with `9rem/5rem` padding.
- **Breakpoints:** 1024px (team to three-up), 900px (charts and accesos to one column, footer to two), 768px (single column, hamburger nav, cifras stack), 480px (type and padding shrink, hero buttons go full width).
- **Mobile nav:** the fixed header keeps the logo and swaps `.nav-menu` for a full-width dropdown under the header, driven by the hamburger button and closed on link click.

### Named Rules
**The No-Floating-Cards Rule.** Content lives inside container bands, not in cards floating on white. If a section needs separation, change the band color or add a hairline divider before adding a shadow. Cards are for objects that are links (`.acceso`) or canvases (`.chart-card`).

**The No-Eyebrow Rule.** No kicker, label or all-caps line above a heading. The heading carries its own weight; the mono badge is for data screens only.

## Elevation & Depth

Hybrid: tonal banding for structure, and one neutral shadow vocabulary for interaction. `.chart-card` sits on `--shadow-sm`; `.acceso`, `.lead-form` and buttons rest on `--shadow-md` and lift `-4px` on `--shadow-lg`. No shadow is tinted with a brand color.

- **sm** (`0 1px 2px 0 rgba(0, 0, 0, 0.05)`): chart cards, header hairline.
- **md** (`0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -1px rgba(0, 0, 0, 0.04)`): acceso cards, lead form, buttons at rest.
- **lg** (`0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`): hover state, the fixed header after scroll, the mobile nav drop.

### Named Rules
**The Soft-Lift Rule.** A card rests on level 1–2 and rises one level on hover, moving `-4px`. No ambient glow, no shadow larger than `--shadow-lg`, no colored shadow.

## Shapes

Rounded but never soft: `1px` for hairline list markers, `2px` for the title bar, `3px` for the map legend swatches, `6px` for chart bar caps, `8px` for small controls and the alliance logo, `10px` for buttons, inputs and filter groups, `12px` for option rows, icon tiles and avisos, `16px` for cards, the form and the map frame. `100px` is reserved for a metadata pill, currently unused.

Borders are mostly absent: cards rely on fill and a neutral shadow, sections on hairlines (`1px solid var(--bg-lighter)`) or on the color band itself. Form fields, unselected `.lead-option` rows and the `.filtro-grupo` pill are the exception, with a `1px` mixed-alpha border that turns orange on focus or selection. No card carries a thick side or top accent strip; the only saturated line in the system is the 60×4px bar under section titles.

## Components

### Buttons
- **Shape:** 10px radius, `2px solid transparent` so variants do not shift layout, `1rem 2.5rem` padding, 600 weight, 44px minimum height.
- **Primary:** `--gradient-secondary` fill with white text and `--shadow-md`. Hover: `translateY(-3px)` and `--shadow-lg`. Active: `translateY(0) scale(0.97)`.
- **Secondary:** transparent with a 2px white border; on hover it fills white and the label turns navy (`#002857` literal, so dark mode keeps the contrast). It only works on navy surfaces — never place it on a light band.
- **Focus:** the global `:focus-visible` is a 2px navy outline at 2px offset; never remove it. `.lead-submit` stretches to the form width.

### Cifras
`.cifras` is a single ruled row, not three cards: three `.cifra` columns inside a `1px` top and bottom rule, divided by `1px` vertical rules. Orange Outfit 800 figure, `0.9rem` label at 70% white below, `22ch` cap. Under 768px the columns stack and the vertical rules become horizontal ones. Values are static text (no counter animation), because two of the three carry a currency suffix.

### Censo Articles
`.censo-article` is a divided row inside `.censo` (900px): `3rem` vertical padding, a `1px` bottom hairline, an `h3` in `--heading-ink`, and copy capped at 72ch. The census table lives inside `.tabla-scroll` for horizontal overflow.

### Table
`.tabla-censo`: full width, `border-collapse`, right-aligned numerics with tabular figures, left-aligned first column at zero side padding, `0.75rem` uppercase mono headers over a `2px` navy hairline, `1px` row hairlines, and the inmuebles column in `--secondary-ink` at 600. A `.tabla-censo caption` in `0.9rem` muted sits above. The row header is a `<th scope="row">`.

### Density Map
`.mapa` sits on a `Paper` band: a `h3` heading, a mono meta line (total · corte de la base), two `.filtro-grupo` pill groups (type, operation), the map frame and a legend.

- **Frame:** `.mapa-wrapper` is a 16px-radius clipped box with a `1px` hairline, `520px` tall (`420px` under 768px). Leaflet tiles inside; the container carries `role="application"` and an `aria-label`.
- **Rendering:** one `L.circleMarker` per aggregated cell on a shared `L.canvas` renderer, no stroke, radius 4/6/8/11/14px and color by count bucket. Radius is in pixels on purpose: at country scale a 550 m cell would be sub-pixel, so density is drawn as a cloud of constant-size dots that separates as you zoom in. Scroll-wheel zoom is off so the page keeps scrolling; the zoom control, drag and popups carry interaction.
- **Initial view:** Bolivia, zoom 6, so the country is the first read. No fly-to on load.
- **Legend:** `Densidad de propiedades` plus five swatches in a mono line, revealed once the layer paints.
- **States:** `.mapa-loading` with a spinner while the JSON is in flight, `.mapa-fallback` with an explanatory block on failure. Both use `[hidden]`, never `display` juggling.
- **Filters:** buttons carry `aria-pressed`; only one per group is true. Filtering recomputes each cell's count from its per-type and per-operation breakdown and re-paints the layer.
- **Data:** `data/panel.json` only. Never an individual-property feed.

### Charts
`.charts-grid` is two-up (`1fr` under 900px). A `Surface` card, `--shadow-sm`, `2rem` padding, a `1.15rem` heading, a `300px` (340px full-width) canvas wrapper and an optional muted note. Chart.js colors come from the `--chart-*` tokens, so the same charts stay legible in both themes. Labels use short forms (`Depto`) and never rotate. If Chart.js fails, `.charts-fallback` is revealed.

### Client Marquee
A continuously scrolling proof wall: `.client-logo` images at 64px height (48px under 768px), grayscale at 60% opacity, in a track that holds the seven logos twice and translates `-50%` on a 34s linear loop for a seamless wrap. The strip is clipped by `overflow: hidden` with an 8% edge mask. Hover pauses the loop and restores color. Under `prefers-reduced-motion` it does not animate.

The movement is deliberate: the client wall is social proof that has to read as alive, not a static grid. The mechanical detector flags auto-scrolling marquees as slop, so this project carries a documented `ignore-rule marquee` exception in `.impeccable/config.json`. Do not "fix" it into a static row, and do not remove the duplication: without the second copy the loop shows a gap.

### Unidades (servicios.html)
`.unidades` (980px) holds three `.unidad` rows separated by hairlines. Each row: the unit's official logo at 64px height (60px under 768px), an `h2` at `clamp(1.4rem, 2.6vw, 1.7rem)`, a description at 72ch, and `.unidad-lista` — a one-column list with a 10×2px orange dash per item, `1.75rem` hanging indent, and an optional `<strong>` lead-in for the three long service descriptions.

### Empresas del grupo (quienes-somos.html)
`.empresas` (900px) is a divided list. Each `.empresa` row is a flex line: a `120×56px` logo box with `object-fit: contain`, name plus rubro, and an orange `↗` for the rows that link out. The whole row is the link when there is one; MegaObras has no site, so it renders as a non-interactive row.

### Logros
`.logros` is a divided list, not a card grid: `1.5rem` bottom padding, `1px` hairline, `<strong>` lead-in in `--heading-ink`, copy in `--text-medium`. No colored side borders.

### Equipo
`.equipo` is a four-up grid of `.persona` columns. Each has a `1:1` `.persona-foto` with a 16px radius and `object-fit: cover`; a missing photo falls back to `.persona-iniciales`, the navy gradient with orange Outfit initials. Then name, role and an optional `.persona-linkedin` line.

### Lead Form
The conversion component, used on `/contacto.html`. `.lead-form` is a `Surface` card, 16px radius, `clamp(1.5rem, 4vw, 2.75rem)` padding, `1.5rem` internal gap, max width 660px, centered on a `Paper` band.

- **Step 1, interest:** a `<fieldset>` with a display-weight legend ("¿Qué necesitás?") holding six radio rows. Each `.lead-option` is a full-width label: 18px radio using `accent-color: var(--secondary-color)`, a strong title and a small muted helper line. Unselected: 1px mixed border. Selected (`:has(input:checked)`): orange border plus `--secondary-10` fill. Focused: 2px orange outline with 2px offset.
- **Step 2, fields:** Nombre (required), Email, WhatsApp, and a required textarea, each with a 600-weight label above a 10px-radius `Paper` field. Focus: no outline, orange border plus a 3px `--focus-ring`.
- **Step 3, consent:** two required checkboxes (`accent-color` orange), one linking to the privacy policy.
- **Step 4, submit:** full-width primary button, then a `0.875rem` reassurance line. Below the card, a text fallback link to `info@citrino.com.bo`.
- **Anti-spam:** a hidden honeypot checkbox and a Web3Forms `access_key` + `redirect` to `/gracias.html`.
- **Routing:** the interest value maps to a subject (`[Inversión]`, `[Asesoría]`, `[Datos]`, `[Socio pasivo]`, `[Desarrollo]`, `[Vender]`) and to the `interes` property of the Umami `form` event. See `docs/conversion-y-formularios.md`.

### Header & Navigation
Fixed, 95% white with a 20px `backdrop-filter` blur, hairline shadow, logo left, five text links right (`Inicio`, `Inteligencia Inmobiliaria`, `Nuestros Servicios`, `Quiénes Somos`, `Contacto`). Active page is marked with `aria-current="page"` and an orange underline that animates in from the left; hover turns the label `Signal Ink`. Below 768px the links collapse into a hamburger-triggered dropdown. In dark mode the header goes `rgba(10, 15, 26, 0.95)` and the logo swaps to the dark-background asset via JS and CSS `content`.

### Closing CTA Bands
`.cta-final`: `7rem` padding on a three-stop navy gradient, centered white headline, one supporting line, one orange button, with the same dot grid as the hero at 40% opacity. Used on the home page, servicios and inteligencia-inmobiliaria. It carries no heading when it is a pure hand-off (servicios), only the supporting line and the button.

### Banda Oscura
`.banda-oscura`: the one navy band inside a light page (inteligencia-inmobiliaria). Centered `.banda-titulo` with the orange bar, then `.banda-lista` — a one-column list of `.banda-item` rows with a 48px icon tile at 10% white, a 600-weight heading and 70%-white copy capped at 62ch.

### Accesos
`.accesos`: three-up grid (one column under 900px) of `.acceso` links to the Looker Studio reports. White 16px-radius card, `2rem` padding, `1.15rem` title, 2-line muted description with `flex: 1`, and an orange "Acceder →" line pinned to the bottom. Hover: `-4px` and `--shadow-lg`.

### Footer
`{colors.footer}`, `5rem` top / `2rem` bottom padding, three columns (brand with the dark-background logo plus the tagline, navigation list, five social icons as 44px tiles with a 12px radius at 8–10% white). Bottom row holds the copyright and the privacy link in `0.875rem` at 50% white.

### Browser Surfaces
Selection is navy with white text, the caret is orange, the scrollbar is tinted from `--primary-20`, `:focus-visible` is a 2px navy outline at 2px offset, and `font-variant-numeric: tabular-nums` is set on `body` so every figure column aligns.

## Do's and Don'ts

### Do:
- **Do** keep the two-theme contract: check every surface in light and dark before calling it done.
- **Do** run the mechanical detector over touched pages before shipping UI, and keep the documented exceptions to zero apart from the marquee.
- **Do** let numbers carry the section — orange figures, mono headers, real counts from `data/panel.json` and the census.
- **Do** alternate `Paper` and `Surface` bands, and use one full-bleed navy band per page for emphasis.
- **Do** use `--gradient-secondary` for every orange fill and keep orange text at `Signal Ink` or lighter stops.
- **Do** reuse `.section-title`, `.btn`, `.cifra`, `.unidad`, `.empresa` before inventing a parallel pattern.
- **Do** keep one entrance animation (`fadeInUp`) and one hover lift language across components.
- **Do** honor `prefers-reduced-motion`: the reduction block disables reveals and stops the marquee.
- **Do** publish aggregates. Individual properties never leave the private base.

### Don't:
- **Don't** introduce a light/dark toggle UI; the theme follows the OS preference only.
- **Don't** hardcode chart or map colors that only work on a light background.
- **Don't** use house icons, warm family photography, or "encontrá la casa de tus sueños" clichés.
- **Don't** use gradient text (`background-clip: text`), cream/beige backgrounds, or generic SaaS card grids.
- **Don't** put an all-caps tracked eyebrow above a section heading.
- **Don't** use `border-radius` above 16px on cards or combine a 1px border with a ≥16px blur shadow on the same element.
- **Don't** add a colored glow shadow (orange under a button, navy under a card): elevation is neutral black.
- **Don't** use a colored `border-left` or `border-right` above 1px on cards, list items or callouts.
- **Don't** set muted text (`{colors.ink-muted}`) on a dark surface. Use `{colors.dark-ink-medium}` or a white alpha instead.
- **Don't** recolor, desaturate or outline the logos of the business units or the group.
- **Don't** replace the client marquee with a static grid or remove its duplicated track; the movement is the spec, not an accident.
- **Don't** nest a card inside a card. The map frame, the filter groups and the fallback overlay all flatten into the band.
- **Don't** place the white-bordered secondary button on a light surface.
- **Don't** ship a JSON of individual properties with coordinates, prices and surfaces. That is the product.
