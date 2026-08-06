---
name: Citrino Capitales Inmobiliarios
description: Data intelligence for real estate investment
colors:
  primary: "#002857"
  secondary: "#ee7900"
  accent: "#10b981"
  neutral-bg: "#f9fafb"
  neutral-ink: "#1f2937"
  neutral-muted: "#6b7280"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(2rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.03em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  section: "6rem"
  container-padding: "2rem"
  grid-gap: "2rem"
components:
  button-primary:
    backgroundColor: "#ee7900"
    textColor: "#ffffff"
    rounded: "10px"
    padding: "1rem 2.5rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    rounded: "10px"
    padding: "1rem 2.5rem"
  card-default:
    backgroundColor: "#f9fafb"
    textColor: "#1f2937"
    rounded: "16px"
    padding: "2.5rem"
  card-dark:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    rounded: "16px"
    padding: "2.5rem"
---

# Design System: Citrino Capitales Inmobiliarios

## 1. Overview

**Creative North Star: "The Data Room"**

Citrino's visual system communicates institutional intelligence — the feeling of walking into a war room where every decision is backed by verified data. The palette anchors on deep navy for authority, with orange as the signal that sparks insight and emerald as the return on that insight.

Typography pairs a precise geometric sans (Outfit) with a warm, readable humanist sans (DM Sans). Layout favors generous vertical rhythm, asymmetrical composition, and data that breathes.

This system explicitly rejects: traditional real estate tropes (house icons, warm family imagery), SaaS clichés (cream backgrounds, gradient text, identical card grids), and anything that feels small or local-only. The brand punches above its weight.

**Key Characteristics:**
- **Data-forward:** Metrics and numbers are visual elements, not afterthoughts
- **Institutional weight:** Deep colors, controlled typography, deliberate spacing
- **Quiet authority:** Confident without shouting, premium without flash
- **Precision:** Every token has a job; every component is intentional

## 2. Colors

The palette uses a **Full palette** strategy: three named color roles serving distinct purposes.

### Primary: Deep Authority — #002857 (oklch 23.5% 0.08 261)
The foundation. Used for hero backgrounds, section fills, footer, and primary text on light. Carries 30–60% of surface area. Communicates institutional trust and the weight of data.

### Secondary: Signal — #ee7900 (oklch 62% 0.18 55)
The accent. Used for CTAs, interactive elements, data highlights (ROI badges, stat numbers), and hover states. Appears on ≤15% of any given screen — its rarity is the point.

### Accent: Return — #10b981 (oklch 65% 0.18 165)
Positive signals only. Used for success states, checkmarks, positive metrics, chat status indicators, and growth-oriented data points.

### Neutral scale
- **Ink** #1f2937 — Body text, headings on light surfaces
- **Muted** #6b7280 — Supporting text, secondary labels
- **Paper** #f9fafb — Card surfaces, alternating section backgrounds
- **White** #ffffff — Page background, text on dark surfaces
- **Dark-bg** #111827 — Footer background

### Named Rules
**The Signal Rule.** Orange is for intelligence and action. It's the color of insight, not decoration. Every orange element must communicate "pay attention — there's a signal here."

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows only appear as response to state (hover, focus), not as ambient decoration.

## 3. Typography

**Display Font:** Outfit (geometric sans-serif) — migrated from Sora (jul-2026)
**Body Font:** DM Sans (humanist sans-serif) — migrated from Source Sans 3 (jul-2026)
**Label Font:** JetBrains Mono (monospace)

**Character:** A controlled geometric pair. Outfit brings precision and structure — the architecture of data. DM Sans provides readability at length. JetBrains Mono signals data fidelity.

### Hierarchy
- **Display** (700, clamp(2rem, 5vw, 4rem), 1.1, -0.02em): Hero headlines only. One per page.
- **Headline** (700, clamp(1.8rem, 3vw, 2.5rem), 1.2, -0.02em): Section titles.
- **Title** (600, 1.2–1.6rem, 1.3, -0.01em): Card headings, feature names.
- **Body** (400, 1rem, 1.6–1.9, normal): Paragraphs. Max 75ch measure.
- **Label** (500, 0.75rem, 1.4, 0.03em uppercase): Badges, metadata, tags, data labels.

## 4. Elevation

Flat-by-default with controlled depth on interaction. Depth is conveyed through tonal layering — surface backgrounds are stepped by lightness, not by shadow.

### Shadow Vocabulary
- **Low** (0 4px 6px -1px rgba(0,40,87,0.08)): Card hover, low-tier interactive states
- **Medium** (0 10px 15px -3px rgba(0,40,87,0.1)): Header on scroll, dropdowns
- **High** (0 20px 40px -10px rgba(0,40,87,0.15)): Hero CTA hover, modals

## 5. Components

### Buttons
- **Shape:** Slightly rounded (10px). Not pill, not square.
- **Primary:** Orange fill (#ee7900), white text, 1rem/2.5rem padding. Hover: translateY(-3px) + high shadow. Active: scale(0.96).
- **Secondary:** Transparent, white border on dark / navy border on light. Hover: fills with white (dark) or navy (light).
- **WhatsApp (btn-julia):** Green fill (#25d366), pill shape (100px), icon + text.

### Cards / Containers
- **Corner Style:** Rounded (16px) — friendly but controlled.
- **Border:** None — tonal background provides separation.
- **Shadow Strategy:** Flat at rest; low shadow on hover.

### Navigation
- Fixed header with blur backdrop (rgba white 0.95). Active page underline in orange. Desktop: horizontal links. Mobile: hamburger → full menu drop.

### Chat Mockup (Jul-IA)
- Container: 20px rounded, chat-bg (#e5ddd5) body.
- Header: primary navy bar, avatar circle with orange gradient.
- Bubbles: white (incoming, border-bottom-left-radius: 3px), light green #dcf8c6 (outgoing). ROI badge in orange pill.
- Input bar: gray (#f0f0f0), pill input placeholder.

### Inputs (Contact)
- Card-style container with icon + text. Hover: raises 6px, top accent bar slides in.

## 6. Do's and Don'ts

### Do:
- **Do** use orange sparingly — its rarity is the point
- **Do** let numbers and metrics breathe as visual elements
- **Do** use dark navy backgrounds for primary sections
- **Do** pair Outfit headlines with DM Sans body for contrast
- **Do** use JetBrains Mono for data badges and small metadata
- **Do** keep card shadows subtle (≤8px blur) or use flat tonal separation
- **Do** let the data lead the narrative — every section answers "what does the data say?"

### Don't:
- **Don't** use house icons, warm family photos, or "find your dream home" clichés
- **Don't** use gradient text (`background-clip: text`)
- **Don't** use cream/beige backgrounds — those are the AI training-data default
- **Don't** use identical card grids with icon + heading + text repeated endlessly
- **Don't** put an all-caps tracked eyebrow above every section heading
- **Don't** use generic stock imagery of people shaking hands or families in houses
- **Don't** use border-radius >16px on cards (pill is fine for tags, buttons)
- **Don't** combine 1px border + soft shadow with blur ≥16px on the same element
- **Don't** default to editorial-magazine aesthetics — Citrino is an intelligence firm, not a lifestyle brand
