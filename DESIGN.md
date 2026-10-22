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
  dark-link: "#93c5fd"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(2rem, 4vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.8rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.06em"
  small:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  sm: "8px"
  md: "10px"
  lg: "12px"
  icon: "14px"
  card: "16px"
  input: "10px"
  pill: "100px"
spacing:
  section: "6rem"
  section-roomy: "8rem"
  section-loose: "10rem"
  container-max: "1200px"
  container-padding: "2rem"
  grid-gap: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "1rem 2.5rem"
  button-primary-hover:
    backgroundColor: "{colors.signal-hover}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "1rem 2.5rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "1rem 2.5rem"
  card-metric:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "2.5rem"
  card-use-case:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "2.5rem"
  lead-option-selected:
    backgroundColor: "rgba(238, 121, 0, 0.1)"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "0.9rem 1rem"
  field-input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.input}"
    padding: "0.8rem 0.9rem"
  nav-header:
    backgroundColor: "rgba(255, 255, 255, 0.95)"
    textColor: "{colors.ink}"
    padding: "1rem 2rem"
---

# Design System: Citrino Capitales Inmobiliarios

## Overview

**Creative North Star: "The Data Room"**

The system reads as an institutional intelligence desk: a deep navy world interrupted by white proof sections, with orange reserved for the signal — a number, a link, a call to action. It is dense with evidence (counts, maps, charts, censuses) and light on decoration. Nothing is illustrated that could be measured.

It ships in two themes — light and dark — driven entirely by `prefers-color-scheme`, with no in-page toggle. Both themes carry the same navy/orange identity; dark mode reskins surfaces and inverts ink rather than inventing a second palette.

**Key Characteristics:**
- Data-forward: statistics are typographic elements, not captions
- Two-theme system: light default, dark automatic, same identity in both
- Documentary density: divided lists, tables of numbers, real charts, a real map
- Restraint in motion: one entrance animation, one hover lift, nothing ambient

## Colors

Three brand roles plus a neutral ladder, duplicated into a dark ladder that swaps by media query. Depth comes from tonal bands, not from tinted shadows.

### Primary
- **Deep Authority** (`{colors.primary}`): hero and interior-page backgrounds, `.value-prop` full-bleed band, heading text on light, icon-tile gradients, chart bars, footer logo plate. The most-used surface color after white.
- **Authority Light** (`{colors.primary-light}`): gradient stop for icon tiles and the `--gradient-primary-medium` used by `.about-highlight-icon`, `.db-metric-icon`.
- **Authority Dark / Deep** (`{colors.primary-dark}`, `{colors.primary-deep}`): the two dark stops of `--gradient-primary` and of the closing CTA bands (`.db-final-cta`, `.ii-final-cta`).

### Secondary
- **Signal** (`{colors.signal}`): primary buttons, statistic figures, `.db-badge` and `.hero-updated` accents, the 60×4px bar under section titles, link hover on cards. Gradient stop one of `--gradient-secondary`.
- **Signal Gradient End** (`{colors.signal-gradient-end}`): second stop of `--gradient-secondary`, so orange fills are gradients, never flat.
- **Signal Hover** (`{colors.signal-hover}`): defined for the orange hover state.
- **Signal Ink** (`{colors.signal-ink}`): the darker orange used for text on light surfaces (nav hover, inline orange links) where the base orange would fail contrast.

### Tertiary
- **Return** (`{colors.return}`): positive-state only — success, checkmarks, the small green accents in charts.

### Neutral (light)
- **Ink** (`{colors.ink}`): body text and headings on light surfaces.
- **Ink Medium / Muted / Faint** (`{colors.ink-medium}`, `{colors.ink-muted}`, `{colors.ink-faint}`): supporting copy, labels, disabled and tertiary text.
- **Paper / Paper Raised** (`{colors.paper}`, `{colors.paper-raised}`): the alternating off-white section bands, field backgrounds, dividers.
- **Surface** (`{colors.surface}`): page background and card fills on light.
- **Footer** (`{colors.footer}`): the `--bg-dark` band under the footer.

### Neutral (dark)
- **Page / Surface / Raised / Deep** (`{colors.dark-page}`, `{colors.dark-surface}`, `{colors.dark-raised}`, `{colors.dark-deep}`): body background is `dark-page`; cards, header and form move between `dark-surface` and `dark-raised`; the deepest band is `dark-deep`.
- **Dark Ink / Dark Link** (`{colors.dark-ink}`, `{colors.dark-link}`): dark-mode body text, nav labels and hamburger (`#e5e7eb`) and the light-blue in-text links used by the privacy and consent links (`#93c5fd`).
- In dark mode `--text-dark`, `--text-medium`, `--white`, `--bg-light`, `--bg-lighter` and `--bg-dark` are re-pointed to this ladder, and `--secondary-ink` collapses back to the base `Signal`. Dark-mode shadows switch from navy-tinted to pure black at higher opacity. `--text-light` is deliberately left at `Ink Muted`; do not put it on a dark surface (see Do's and Don'ts).

### Named Rules
**The Signal Rule.** Orange is intelligence and action, never decoration. A number worth reading, a link worth following, a button worth pressing — nothing else.

**The Two-Theme Rule.** Every new surface must be checked in both themes. A component that only defines light values is unfinished, and any color hardcoded in JS (Chart.js datasets) must exist in both.

**The Contrast Ink Rule.** Orange text on a light surface uses `{colors.signal-ink}`, not `{colors.signal}`.

## Typography

**Display Font:** Outfit (geometric sans, weights 400–800)
**Body Font:** DM Sans (humanist sans, 400–600)
**Label Font:** JetBrains Mono (monospace, 400–500), used uppercase with wide tracking

**Character:** Outfit gives the numbers their architectural quality; DM Sans keeps long explanatory copy readable; the mono is reserved for machine-truth metadata (data vintage, badges, update dates). All three load from Google Fonts in a single request, and `body` sets `font-variant-numeric: tabular-nums` so statistics align.

### Hierarchy
- **Display** (`{typography.display}`): hero headlines only, one per page, centered. `.hero-title` is Outfit 800 at `clamp(2.5rem, 6vw, 4rem)`.
- **Headline** (`{typography.headline}`): `.section-title`, Outfit 700 at `clamp(2rem, 4vw, 2.5rem)`, centered, with the orange bar beneath. `.value-prop-title` runs slightly larger, `clamp(2rem, 5vw, 3rem)`.
- **Title** (`{typography.title}`): `.service-title`, `.use-case-title` (1.3rem), card and step headings at 600.
- **Stat** (Outfit 800, `clamp(2rem, 4vw, 2.8rem)`, `1`–`1.2` line-height, orange): `.stat-number` and `.db-metric-value`, always paired with a small label underneath.
- **Body** (`{typography.body}`): DM Sans 400 at 1rem, 1.6–1.7 line-height; `.hero-subtitle` scales to `clamp(1.1rem, 2.5vw, 1.5rem)` and caps at a 700px measure; `.section-subtitle` sits at 1.1rem, muted, centered.
- **Label** (`{typography.label}`): JetBrains Mono 500 at 0.75–0.8rem with `0.03`–`0.06em` tracking. Uppercase only where it marks machine metadata: `.hero-updated` and `.hero-alliance-label` (0.65rem, 0.1em); `.db-badge` stays sentence case.
- **Small** (`{typography.small}`): DM Sans 0.9rem for helper copy, consent rows, the reassurance line, footer bottom and card eyebrows.

### Named Rules
**The One Bar Rule.** Section titles get the orange underline exactly once, from the shared `.section-title::after` / `.value-prop-title::after` rule: 60×4px, `--gradient-secondary`, 2px radius, `margin: 1rem auto 0`. Never redraw it locally.

**The Mono Means Data Rule.** JetBrains Mono only marks machine output — badges, vintages, counts, chart annotations. Never body copy, never headlines.

## Layout

A single centered container of `1200px` with `2rem` side padding, sitting inside full-bleed color bands. Sections alternate `Paper` → `Surface` → `Primary` → `Surface` → `Paper` → `Footer` down the home page, so the eye moves between evidence (light) and authority (navy) without a hard edge.

- **Section rhythm:** 6rem padding for standard sections (`.services`, `.clientes`, `.use-cases`), 8rem for statement sections (`.value-prop`, `.contact`, final CTAs), 10rem for `.about`, 5rem for `.db-map-section`.
- **Grids:** three-up for `.about-highlights`, `.db-metrics-grid` and `.use-cases-grid`, two-up for `.db-charts-grid`, with a consistent `2rem` gap. `.services-grid` is deliberately not a grid: a single column capped at 800px, where `.service-card` is a divided row — 2rem vertical padding, 1px `Paper Raised` bottom border, 48px icon tile on the left.
- **Hero:** full viewport (`100dvh`, `90dvh` on `.db-hero`), content centered, `6rem 2rem 4rem` padding, with a 24px white-dot radial grid at 8% opacity behind the headline. Interior heroes (`.platform-hero`) drop to `min-height: auto` with `8rem/6rem` padding.
- **Breakpoints:** 1024px (grids to two-up), 768px (single column, hamburger nav, stats wrap), 480px (type and padding shrink, buttons go full width where stacked).
- **Mobile nav:** the fixed header keeps the logo and swaps `.nav-menu` for a full-width dropdown under the header, driven by the hamburger button and closed on link click.

### Named Rules
**The No-Floating-Cards Rule.** Content lives inside container bands, not in cards floating on white. If a section needs separation, change the band color or add a hairline divider before adding a shadow.

## Elevation & Depth

Hybrid: tonal banding for structure, and a small navy-tinted shadow vocabulary for interaction. Surfaces are visible at rest — cards sit on `--shadow-sm`/`--shadow-md` rather than appearing flat and then shadowing on hover — and they lift with a `translateY` plus `--shadow-lg` on hover.

### Shadow Vocabulary
- **sm** (`0 1px 2px 0 rgba(0, 40, 87, 0.05)`): chart cards, toggle groups, resting hairlines under the header.
- **md** (`0 4px 6px -1px rgba(0, 40, 87, 0.08), 0 2px 4px -1px rgba(0, 40, 87, 0.04)`): metric cards, use-case cards, the lead form, the service list container.
- **lg** (`0 10px 15px -3px rgba(0, 40, 87, 0.1), 0 4px 6px -2px rgba(0, 40, 87, 0.05)`): hover state of a lifted card.
- **header-scrolled** (`0 4px 12px 0 rgba(0, 40, 87, 0.12)`): the fixed header after scroll.
- **action** (`0 4px 12px -3px rgba(238, 121, 0, 0.3)` at rest, `0 8px 20px -5px rgba(238, 121, 0, 0.4)` on hover): orange buttons, the only colored shadow in the system.

Dark mode redefines the same names with black at 0.2–0.5 opacity.

### Named Rules
**The Soft-Lift Rule.** A card rests on level 1–2 and rises one level on hover, moving `-6px` to `-8px`. No ambient glow, no shadow larger than `--shadow-lg`.

## Shapes

Rounded but never soft: `8px` for small controls, `10px` for buttons and inputs, `12px` for option rows and nav pills, `14px` for icon tiles, `16px` for cards and the lead form, `100px` only for the metadata pill (`.db-badge`). No card exceeds `16px`.

Borders are near-absent: cards rely on fill and shadow, sections on hairlines (`1px solid var(--bg-lighter)`) or on the color band itself. Form fields and unselected `.lead-option` rows are the exception, with a `1px` mixed-alpha border that turns orange on focus or selection.

Two recurring gestures: a **4px orange bar** that slides across the top edge of a card on hover (`scaleX(0 → 1)`), used by `.use-case-card` and `.db-metric-card`; and the **centered 60×4px bar** under section titles.

### Named Rules
**The Accent Bar Rule.** The top-edge hover bar is a 4px `--gradient-secondary` strip spanning the full card width. It appears on hover only, and only on cards that are clickable destinations.

## Components

### Buttons
- **Shape:** 10px radius, `2px solid transparent` so variants do not shift layout, `1rem 2.5rem` padding, 600 weight.
- **Primary:** `--gradient-secondary` fill with white text and the orange `action` shadow. Hover: `translateY(-3px) scale(1.02)` and a stronger orange shadow. Active: `translateY(0) scale(0.96)`.
- **Secondary:** transparent with a 2px white border; on hover it fills white and the label turns navy. It only works on navy surfaces — never place it on a light band.
- **Focus:** the global `:focus-visible` is a 2px navy outline at 2px offset; never remove it. `.lead-submit` stretches to the form width.

### Stat Blocks
Orange Outfit 800 figure with a `+` suffix as a sibling span, and a 0.9rem label at 80% opacity below. Counters animate from 0 to `data-target` when the hero enters the viewport; the value in the markup is the final one, so no-JS and reduced-motion readers see the real number.

### Service List
Not cards. Five rows inside `.services-grid`: 48px icon tile (`--primary-10` fill, navy stroke, 12px radius) beside a 1.2rem Outfit title and a muted description of 2–3 lines, separated by hairlines. No shadows, no borders around the group.

### Client Marquee
A single row of `.client-logo` images at 120px height, grayscale at 50% opacity, duplicated once in the DOM and translated continuously by a marquee animation; hover restores color. The strip bleeds the full container width and is clipped by `overflow: hidden`.

### Value-Prop Band
Full-bleed `Primary` section, one centered title with the orange bar, then a single-column list of three items: 44–48px icon tile with white stroke on navy, heading at 600, muted-inverse description. This is the darkest moment of the home page and the only one that uses navy as a text surface for body copy.

### Lead Form
The conversion component, used on the home page and on `/contacto/`, identical in both places. `.lead-form` is a `Surface` card, 16px radius, `clamp(1.5rem, 4vw, 2.75rem)` padding, `1.5rem` internal gap, max width 620px, centered on a `Paper` band.

- **Step 1, interest:** a `<fieldset>` with a display-weight legend ("¿Qué necesitás?") holding four radio rows. Each `.lead-option` is a full-width label: 20px radio using `accent-color: var(--secondary-color)`, a strong title and a small muted helper line. Unselected: 1px mixed border. Selected (`:has(input:checked)`): orange border plus `--secondary-10` fill. Focused: 2px orange outline with 2px offset.
- **Step 2, fields:** Nombre (required), Email, WhatsApp, and a required textarea, each with a 600-weight label above a 10px-radius `Paper` field. Focus: no outline, orange border plus a 3px `--secondary-20` ring.
- **Step 3, consent:** two required checkboxes (`accent-color` orange), one linking to the privacy policy.
- **Step 4, submit:** full-width primary button, then a 0.9rem reassurance line. Below the card, a text fallback link to `info@citrino.com.bo`.
- **Anti-spam:** a hidden honeypot checkbox and a Web3Forms `access_key` + `redirect` to `/gracias.html`.

### Data Platform (`/base-de-datos/`)
- **Map:** Leaflet with `markercluster`, 500px tall, inside a 16px-radius `Surface` frame, on a `Paper` band. Cluster markers are navy-to-orange circles by count; the section carries a mono "Mapa interactivo" badge, a title, one explanatory line, and two toggle groups.
- **Toggle groups:** pill container at 10px radius with `--shadow-sm`, buttons at 8px radius and 0.85rem; resting transparent/muted, hover `--primary-10`, active navy fill with white text.
- **Metric cards:** three-up `Surface` cards, 2.5rem padding, 56px navy-gradient icon tile, orange-free navy figure at `clamp(2rem, 4vw, 2.8rem)` with a 0.75rem mono label above and a muted description below. Hover lifts `-6px` and reveals the top accent bar.
- **Chart cards:** `Surface` with `--shadow-sm`, 2rem padding, 16px radius, a 300px canvas (350px when full-width), title at 0.95rem 600, plus a muted footnote explaining the metric. Chart.js bar charts in navy with orange for the highlighted series, 6px bar radius.
- **Fallbacks:** if Leaflet or Chart.js fail to load, a `[hidden]` fallback block with an icon and explanatory copy is revealed in place.

### Use-Case Cards (`/inteligencia-inmobiliaria/`)
The whole card is an `<a>` to an external Looker Studio report — one per city (Santa Cruz, Cochabamba, La Paz). White 16px-radius card with 2.5rem padding, a 1.3rem title, 2–3 muted lines, and an orange "Acceder →" line pinned to the bottom with `margin-top: auto`. Hover: `-8px`, `--shadow-lg`, and the top accent bar. The link line is currently an inline `style` attribute rather than a class; treat that as a defect, not a pattern.

### Header & Navigation
Fixed, 95% white with a 20px `backdrop-filter` blur, hairline shadow, logo left, four text links right (`Inicio`, `Datos`, `Inteligencia`, `Contacto`). Active page is marked with an orange underline that animates in from the left; hover turns the label `Signal Ink`. Below 768px the links collapse into a hamburger-triggered dropdown. In dark mode the header goes `rgba(10, 15, 26, 0.95)` and the logo swaps to the dark-background asset via CSS `content`.

### Closing CTA Bands
`.db-final-cta` and `.ii-final-cta`: 8rem padding on a three-stop navy gradient (`primary-dark → primary → primary-deep`), centered white headline, one supporting line, one orange button. On `/inteligencia-inmobiliaria/` a 56px orange chat icon sits above the headline.

### Footer
`{colors.footer}`, 6rem top / 2rem bottom padding, three columns: brand (dark-background logo plus the tagline), navigation list, and five social icons as 48px tiles with a 12px radius at 10% white. Bottom row holds the privacy link and the copyright in 0.9rem at 60% white.

## Do's and Don'ts

### Do:
- **Do** keep the two-theme contract: check every surface in light and dark before calling it done.
- **Do** let numbers carry the section — orange figures, mono labels, real counts from `data/propiedades.json`.
- **Do** alternate `Paper` and `Surface` bands, and use one full-bleed navy band per page for emphasis.
- **Do** use `--gradient-secondary` for every orange fill and keep orange text at `Signal Ink` or lighter stops.
- **Do** reuse `.section-title`, `.btn`, `.use-case-card`, `.db-*` before inventing a parallel pattern.
- **Do** keep one entrance animation (`fadeInUp`) and one hover lift language across components.
- **Do** honor `prefers-reduced-motion`: the reduction block disables reveals, counters and marquee.

### Don't:
- **Don't** introduce a light/dark toggle UI; the theme follows the OS preference only.
- **Don't** hardcode chart or map colors that only work on a light background.
- **Don't** use house icons, warm family photography, or "encontrá la casa de tus sueños" clichés.
- **Don't** use gradient text (`background-clip: text`), cream/beige backgrounds, or generic SaaS card grids.
- **Don't** put an all-caps tracked eyebrow above every section heading — the mono badge is for data screens only.
- **Don't** use `border-radius` above 16px on cards or combine a 1px border with a ≥16px blur shadow on the same element.
- **Don't** set muted text (`{colors.ink-muted}`) on a dark surface: it lands at 3.7:1. Use `{colors.dark-ink}` or a white alpha instead.
- **Don't** place the white-bordered secondary button on a light surface.
- **Don't** use stock imagery of handshakes or families; the proof is logos, counts and charts.
- **Don't** revive the Jul-IA chat mockup or `.btn-julia` styles: that landing no longer exists.
