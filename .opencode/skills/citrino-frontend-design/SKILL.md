---
name: citrino-frontend-design
description: Diseño frontend elegante y distintivo para Citrino Capitales Inmobiliarios - balance entre profesionalidad corporativa y estética tech
license: MIT
compatibility: opencode
metadata:
  audience: frontend-developers
  project: citrino-web
  focus: corporate-tech-aesthetic
---

Este skill guía la creación de interfaces frontend para Citrino Capitales Inmobiliarias que equilibran profesionalidad corporativa con distinción tecnológica. Implementa código funcional HTML/CSS/JS con atención excepcional a detalles estéticos y decisiones creativas consistentes con la identidad de marca.

## Enfoque de Diseño

**Estética:** Data-driven corporate fintech - serio, tecnológico, con sofisticación visual. Inspiración: Stripe, Plaid, fintechs modernas.

**Tono:** Profesional corporativo + distintivo tech. NO genérico, NO excesivamente experimental.

**Público:** Inversores inmobiliarios corporativos y particulares en Santa Cruz, Bolivia que buscan confianza y sofisticación tecnológica.

**Propuesta de valor:** Big data inmobiliario, análisis de rentabilidad, datos georreferenciados - el diseño debe evocar tecnología y análisis sin comprometer la seriedad corporativa.

**CRUCIAL:** El balance es clave. Demás minimalismo = genérico. Demás maximalismo = poco profesional. La sofisticación está en la ejecución precisa de elementos elegantes.

## Tipografía

**IMPORTANTE:** NUNCA usar fuentes genéricas (Inter, Roboto, Arial, system fonts). Estas fuentes crean estética genérica que debe evitarse.

### Fuente de Display (Títulos Grandes)
- **Primaria:** `Outfit` (Google Fonts)
- **Peso:** 400, 500, 600, 700, 800
- **Uso:** Títulos de sección, hero title, headings grandes
- **Características:** Geométrica, moderna, distintiva pero legible, con carácter tech

### Fuente de Body (Texto)
- **Primaria:** `DM Sans` (Google Fonts)
- **Peso:** 400, 500, 600
- **Uso:** Párrafos, descripciones, labels
- **Características:** Legible, moderna, no genérica como Inter

### Fuente Monospace (Elementos Decorativos Tech)
- **Opcional:** `JetBrains Mono` (Google Fonts)
- **Uso:** Labels de datos, código decorativo, badges técnicos
- **Peso:** 400, 500

### Implementación

```html
<!-- Reemplazar carga de Inter -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

```css
:root {
    --font-display: 'Outfit', sans-serif;
    --font-body: 'DM Sans', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
}

body {
    font-family: var(--font-body);
    line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    line-height: 1.2;
}

.hero-title {
    font-family: var(--font-display);
    font-weight: 800;
}
```

## Paleta de Colores

### Colores Base (NO CAMBIAR)
- **Primary (Azul Corporativo):** `#002857`
- **Secondary (Naranja Acento):** `#ee7900`
- **Accent (Verde):** `#10b981`

### Variantes y Depth
Crear depth mediante:
- **Gradients sutiles:** No gradientes obvios tipo "purple gradient on white"
- **Overlays:** Transparencias que añaden profundidad
- **Variaciones tonales:** Más oscuro/más claro de los colores base

### Gradientes Corporativos
```css
:root {
    /* Gradient primary - dark to darker */
    --gradient-primary: linear-gradient(135deg, #002857 0%, #001a38 100%);
    
    /* Gradient primary - medium to dark */
    --gradient-primary-medium: linear-gradient(135deg, #004080 0%, #002857 100%);
    
    /* Gradient orange - subtle */
    --gradient-secondary: linear-gradient(135deg, #ee7900 0%, #cc6a00 100%);
    
    /* Gradient accent */
    --gradient-accent: linear-gradient(135deg, #10b981 0%, #059669 100%);
}
```

### Transparencias y Overlays
```css
:root {
    /* Opacities para depth */
    --primary-10: rgba(0, 40, 87, 0.1);
    --primary-20: rgba(0, 40, 87, 0.2);
    --primary-50: rgba(0, 40, 87, 0.5);
    
    --secondary-10: rgba(238, 121, 0, 0.1);
    --secondary-20: rgba(238, 121, 0, 0.2);
    
    --white-90: rgba(255, 255, 255, 0.9);
    --white-70: rgba(255, 255, 255, 0.7);
    --white-50: rgba(255, 255, 255, 0.5);
    --white-20: rgba(255, 255, 255, 0.2);
    --white-10: rgba(255, 255, 255, 0.1);
}
```

### Texto y Backgrounds
```css
:root {
    --text-dark: #1f2937;
    --text-medium: #4b5563;
    --text-light: #6b7280;
    --text-lighter: #9ca3af;
    
    --bg-white: #ffffff;
    --bg-light: #f9fafb;
    --bg-lighter: #f3f4f6;
    --bg-dark: #111827;
}
```

## Patrones Visuales

**IMPORTANTE:** Estos son patrones visuales decorativos, NO visualizaciones de datos reales. El objetivo es evocar sensación de "data/tech" sin ser data visualization.

### 1. Grid Pattern (Backgrounds)
Evoca structure, tecnología, análisis. Sutil, no dominante.

```css
.grid-pattern {
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.grid-pattern-dark {
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23002857' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
```

### 2. Dot Pattern (Georreferenciación)
Evoca puntos geográficos, datos dispersos, ubicación.

```css
.dot-pattern {
    background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 20px 20px;
}

.dot-pattern-dark {
    background-image: radial-gradient(circle, rgba(0,40,87,0.08) 1px, transparent 1px);
    background-size: 20px 20px;
}
```

### 3. Line Pattern (Data Flow)
Evoca flujo de datos, conectividad, análisis.

```css
.line-pattern {
    background-image: repeating-linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.03) 0px,
        rgba(255, 255, 255, 0.03) 1px,
        transparent 1px,
        transparent 40px
    );
}

.line-pattern-diagonal {
    background-image: repeating-linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.03) 0px,
        rgba(255, 255, 255, 0.03) 1px,
        transparent 1px,
        transparent 40px
    );
}
```

### 4. Pattern Combinations
```css
/* Hero: grid + gradient */
.hero-background {
    background: var(--gradient-primary);
    /* Agregar grid pattern */
    position: relative;
}

.hero-background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
    pointer-events: none;
}

/* Value prop: dot pattern en fondo */
.value-prop {
    background: var(--primary-color);
    position: relative;
}

.value-prop::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.6;
    pointer-events: none;
}
```

## Animaciones Tech

**Principio:** Animaciones elegantes, no disruptivas. Priorizar impacto en momentos clave (page load, scroll) sobre micro-interacciones dispersas.

### 1. Staggered Reveals (Entrada escalonada)
Animación de entrada escalonada para elementos relacionados. Más impacto que animaciones individuales dispersas.

```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Clases base */
.animate-staggered {
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards;
}

/* Delays escalonados */
.animate-delay-1 { animation-delay: 0.1s; }
.animate-delay-2 { animation-delay: 0.2s; }
.animate-delay-3 { animation-delay: 0.3s; }
.animate-delay-4 { animation-delay: 0.4s; }
.animate-delay-5 { animation-delay: 0.5s; }
```

**Implementación en Hero:**
```html
<section class="hero">
    <div class="hero-content">
        <h1 class="hero-title animate-staggered animate-delay-1">Inteligencia de Datos para el Sector Inmobiliario</h1>
        <p class="hero-subtitle animate-staggered animate-delay-2">Transformamos datos georreferenciados en decisiones estratégicas para inversores en Santa Cruz, Bolivia</p>
        <div class="hero-cta">
            <a href="#contacto" class="btn btn-primary animate-staggered animate-delay-3">Contacto</a>
            <a href="#servicios" class="btn btn-secondary animate-staggered animate-delay-4">Nuestros Servicios</a>
        </div>
    </div>
</section>
```

### 2. Scroll-Triggered Animations
Elementos que aparecen cuando entran en el viewport.

```css
/* Clases para scroll-triggered */
.scroll-reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.scroll-reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Variantes */
.scroll-reveal-left {
    opacity: 0;
    transform: translateX(-40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.scroll-reveal-left.visible {
    opacity: 1;
    transform: translateX(0);
}

.scroll-reveal-right {
    opacity: 0;
    transform: translateX(40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.scroll-reveal-right.visible {
    opacity: 1;
    transform: translateX(0);
}
```

**JavaScript para scroll-triggered:**
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const scrollElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
    
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100));
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 85)) {
                displayScrollElement(el);
            }
        });
    };
    
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    handleScrollAnimation();
});
```

### 3. Hover Effects Elegantes
Micro-interacciones que mejoran UX sin ser distractores.

```css
/* Cards con lift + shadow */
.service-card {
    transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px -10px rgba(0, 40, 87, 0.15);
}

/* Links con color fade + underline expand */
.nav-menu a {
    position: relative;
    color: var(--text-dark);
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav-menu a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--secondary-color);
    transition: width 0.3s ease;
}

.nav-menu a:hover {
    color: var(--secondary-color);
}

.nav-menu a:hover::after {
    width: 100%;
}

/* Buttons con lift + scale */
.btn {
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.btn:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 20px -5px rgba(238, 121, 0, 0.4);
}

.btn:active {
    transform: translateY(0) scale(0.98);
}
```

### 4. Icon Animations
```css
/* Icon scale + color on hover */
.value-icon {
    transition: transform 0.4s ease, background-color 0.4s ease;
}

.value-item:hover .value-icon {
    transform: scale(1.1);
    background-color: var(--secondary-color);
}

.value-item:hover .value-icon svg {
    color: var(--white);
}

/* Social links con rotation + lift */
.social-link {
    transition: transform 0.4s ease, background-color 0.4s ease, color 0.4s ease;
}

.social-link:hover {
    transform: translateY(-5px) rotate(5deg);
    background: var(--secondary-color);
}

.social-link svg {
    transition: transform 0.4s ease;
}

.social-link:hover svg {
    transform: rotate(-5deg);
}
```

## Layout Guidelines

**Principio:** Unexpected layouts, pero controlados. No caótico.

### 1. Asymetrie Controlada
```css
/* Layout asimétrico para sections alternas */
.alternate-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.alternate-section.reverse {
    direction: rtl;
}

.alternate-section.reverse > * {
    direction: ltr;
}
```

### 2. Overlap Sutil
```css
/* Elements overlapping sutilmente */
.overlap-container {
    position: relative;
    margin: -2rem 0;
}

.overlap-item {
    position: relative;
    z-index: 1;
    background: var(--white);
    border-radius: 16px;
    box-shadow: var(--shadow-lg);
    margin-bottom: -1rem;
}

.overlap-item:last-child {
    z-index: 2;
    margin-bottom: 0;
}
```

### 3. Generous Negative Space vs Controlled Density
```css
/* Negative space generosa para sections importantes */
.spacious-section {
    padding: 8rem 0;
}

/* Controlled density para elementos relacionados */
.dense-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}
```

### 4. Grid-Breaking Elements
```css
/* Elements que rompen el grid */
.grid-breaker {
    grid-column: 1 / -1;
    margin: 4rem 0;
}

/* Full-width backgrounds con grid interno */
.full-width-section {
    background: var(--bg-light);
    padding: 6rem 2rem;
}

.full-width-section .container {
    max-width: 1200px;
    margin: 0 auto;
}
```

## Secciones Específicas

### Hero Section

**Enfoque:** Impacto inicial + staggered animations + gradient depth.

```css
.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6rem 2rem 4rem;
    background: var(--gradient-primary);
    color: var(--white);
    overflow: hidden;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

/* Grid pattern overlay */
.hero-background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.6;
}

.hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 900px;
}

.hero-title {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.1;
    letter-spacing: -0.02em;
}

.hero-subtitle {
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    margin-bottom: 2.5rem;
    opacity: 0.95;
    line-height: 1.6;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}
```

### Services Section

**Enfoque:** Cards elegantes con hover lift + grid pattern sutil.

```css
.services {
    padding: 8rem 0;
    background-color: var(--bg-light);
    position: relative;
}

/* Dot pattern sutil */
.services::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle, rgba(0,40,87,0.05) 1px, transparent 1px);
    background-size: 24px 24px;
    pointer-events: none;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    position: relative;
    z-index: 1;
}

.service-card {
    background: var(--white);
    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: 0 4px 6px -1px rgba(0, 40, 87, 0.08);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-secondary);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px -10px rgba(0, 40, 87, 0.15);
}

.service-card:hover::before {
    transform: scaleX(1);
}

.service-icon {
    width: 64px;
    height: 64px;
    background: var(--gradient-primary-medium);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: var(--white);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover .service-icon {
    transform: scale(1.1);
}
```

### Value Prop Section

**Enfoque:** Dot pattern + icons con animation + staggered reveal.

```css
.value-prop {
    padding: 8rem 0;
    background: var(--primary-color);
    color: var(--white);
    position: relative;
    overflow: hidden;
}

/* Dot pattern */
.value-prop::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.6;
}

.value-prop-content {
    position: relative;
    z-index: 1;
    max-width: 900px;
    margin: 0 auto;
}

.value-prop-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    text-align: center;
    margin-bottom: 4rem;
    letter-spacing: -0.02em;
}

.value-prop-list {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}

.value-item {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    position: relative;
}

.value-icon {
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.value-item:hover .value-icon {
    background: var(--secondary-color);
    transform: scale(1.1);
}

.value-icon svg {
    width: 28px;
    height: 28px;
    color: var(--secondary-color);
    transition: color 0.4s ease;
}

.value-item:hover .value-icon svg {
    color: var(--white);
}

.value-text h3 {
    font-family: var(--font-display);
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    letter-spacing: -0.01em;
}

.value-text p {
    opacity: 0.85;
    line-height: 1.7;
}
```

### About Section

**Enfoque:** Generous negative space + tipografía legible + minimalista.

```css
.about {
    padding: 10rem 0;
    background-color: var(--white);
    position: relative;
}

.about-text {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    font-size: clamp(1.1rem, 2vw, 1.25rem);
    line-height: 1.9;
    color: var(--text-medium);
}

.about-text::before {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--gradient-secondary);
    margin: 0 auto 2rem;
    border-radius: 2px;
}
```

### Contact Section

**Enfoque:** Icons con gradient + hover effects elegantes.

```css
.contact {
    padding: 8rem 0;
    background-color: var(--bg-light);
    position: relative;
}

/* Grid pattern sutil */
.contact::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle, rgba(0,40,87,0.05) 1px, transparent 1px);
    background-size: 24px 24px;
    pointer-events: none;
}

.contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    margin-top: 4rem;
    position: relative;
    z-index: 1;
}

.contact-item {
    background: var(--white);
    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: 0 4px 6px -1px rgba(0, 40, 87, 0.08);
    display: flex;
    gap: 2rem;
    align-items: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.contact-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-item:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 32px -8px rgba(16, 185, 129, 0.15);
}

.contact-item:hover::before {
    transform: scaleX(1);
}

.contact-icon {
    width: 56px;
    height: 56px;
    background: var(--gradient-accent);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    flex-shrink: 0;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-item:hover .contact-icon {
    transform: scale(1.1);
}

.contact-icon svg {
    width: 28px;
    height: 28px;
}

.contact-text h3 {
    font-family: var(--font-display);
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-dark);
}

.contact-text p {
    color: var(--text-medium);
    font-size: 1.05rem;
}
```

### Footer

**Enfoque:** Dark background + subtle grid pattern + elegant hover effects.

```css
.footer {
    background-color: var(--bg-dark);
    color: var(--white);
    padding: 6rem 0 2rem;
    position: relative;
    overflow: hidden;
}

/* Subtle grid pattern */
.footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 4rem;
    margin-bottom: 3rem;
    position: relative;
    z-index: 1;
}

.footer-logo {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 0.75rem;
    background: var(--gradient-secondary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.footer-tagline {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    line-height: 1.6;
}

.social-link {
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    color: var(--white);
}

.social-link:hover {
    background: var(--secondary-color);
    transform: translateY(-5px) rotate(8deg);
    box-shadow: 0 8px 20px -5px rgba(238, 121, 0, 0.4);
}

.social-link svg {
    width: 22px;
    height: 22px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.social-link:hover svg {
    transform: rotate(-8deg);
}

.footer-bottom {
    text-align: center;
    padding-top: 2.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    position: relative;
    z-index: 1;
}
```

## Header & Navigation

**Enfoque:** Fixed header con backdrop blur + elegant hover effects.

```css
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 1px 3px 0 rgba(0, 40, 87, 0.08);
    z-index: 1000;
    transition: box-shadow 0.3s ease;
}

.header.scrolled {
    box-shadow: 0 4px 12px 0 rgba(0, 40, 87, 0.12);
}

.logo {
    font-family: var(--font-display);
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--primary-color);
    text-decoration: none;
    letter-spacing: -0.03em;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: transform 0.3s ease;
}

.logo:hover {
    transform: scale(1.05);
}

.nav-menu a {
    position: relative;
    color: var(--text-dark);
    text-decoration: none;
    font-weight: 500;
    font-family: var(--font-body);
    transition: color 0.3s ease;
}

.nav-menu a::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-secondary);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 1px;
}

.nav-menu a:hover {
    color: var(--secondary-color);
}

.nav-menu a:hover::after {
    width: 100%;
}
```

## Buttons

**Enfoque:** Lift + scale + shadow + gradient accents.

```css
.btn {
    display: inline-block;
    padding: 1rem 2.5rem;
    border-radius: 10px;
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.btn-primary {
    background: var(--gradient-secondary);
    color: var(--white);
    box-shadow: 0 4px 12px -3px rgba(238, 121, 0, 0.3);
}

.btn-primary:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 20px -5px rgba(238, 121, 0, 0.4);
}

.btn-primary:active {
    transform: translateY(0) scale(0.98);
}

.btn-secondary {
    background: transparent;
    color: var(--white);
    border-color: var(--white);
}

.btn-secondary:hover {
    background: var(--white);
    color: var(--primary-color);
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 20px -5px rgba(255, 255, 255, 0.3);
}

.btn-secondary:active {
    transform: translateY(0) scale(0.98);
}
```

## Responsive Design

**Enfoque:** Mobile-first con breakpoints que respetan la estética en todos los tamaños.

```css
/* Tablet */
@media (max-width: 1024px) {
    .hero-title {
        font-size: clamp(2rem, 5vw, 3rem);
    }
    
    .value-item {
        gap: 1.5rem;
    }
}

/* Mobile */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }
    
    .nav-menu {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(20px);
        flex-direction: column;
        padding: 2rem;
        gap: 1rem;
        box-shadow: 0 10px 30px -5px rgba(0, 40, 87, 0.1);
        transform: translateY(-150%);
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .nav-menu.active {
        transform: translateY(0);
    }
    
    .hero {
        padding: 5rem 1.5rem 3rem;
    }
    
    .hero-cta {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    
    .btn {
        width: 100%;
        max-width: 300px;
        text-align: center;
    }
    
    .value-item {
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
    
    .services,
    .value-prop,
    .about,
    .contact {
        padding: 6rem 0;
    }
    
    .service-card,
    .contact-item {
        padding: 2rem;
    }
}

/* Small mobile */
@media (max-width: 480px) {
    .container {
        padding: 0 1.25rem;
    }
    
    .hero {
        padding: 4.5rem 1.25rem 2.5rem;
    }
    
    .hero-title {
        font-size: clamp(1.75rem, 8vw, 2.5rem);
    }
    
    .hero-subtitle {
        font-size: 1rem;
    }
    
    .btn {
        padding: 0.875rem 2rem;
        font-size: 0.95rem;
    }
    
    .service-card,
    .contact-item {
        padding: 1.5rem;
    }
    
    .value-icon,
    .contact-icon {
        width: 48px;
        height: 48px;
    }
}
```

## Patrón a Evitar

**NUNCA hacer:**

1. **Fuentes genéricas:** Inter, Roboto, Arial, system fonts
2. **Gradient cliché:** Purple gradient on white background
3. **Layouts genéricos:** Bootstrap-like, sin distinción
4. **Animaciones excesivas:** Todo animado sin propósito
5. **Colores planos:** Sin depth, sin variaciones tonales
6. **Patrones cliché:** Default icons, generic illustrations
7. **Tipografía sin jerarquía:** Todo mismo peso, mismo tamaño
8. **Hover effects genéricos:** Simple color change sin depth
9. **Sobrecarga visual:** Demás elementos, sin breathing room
10. **Falta de intención:** Design sin dirección clara

**SIEMPRE hacer:**

1. **Fuentes distintivas:** Outfit + DM Sans (o equivalentes con carácter)
2. **Depth visual:** Gradients, overlays, transparencias
3. **Layouts inesperados:** Asymetrie, overlap, grid-breaking
4. **Animaciones estratégicas:** Staggered reveals, scroll-triggered
5. **Paleta refinada:** Depth en colores base
6. **Patrones sutilmente tech:** Grid, dots, lines
7. **Jerarquía tipográfica clara:** Display vs body weights
8. **Hover effects elegantes:** Lift, scale, shadow, underline expand
9. **Breathing room:** Negative space generoso o controlled density
10. **Intención clara:** Cada elemento tiene propósito estético

## Implementación Checklist

Antes de implementar cambios en la web de Citrino:

- [ ] Reemplazar Inter con Outfit + DM Sans
- [ ] Agregar gradientes depth a backgrounds
- [ ] Implementar staggered animations en Hero
- [ ] Agregar scroll-triggered animations
- [ ] Implementar hover effects elegantes en cards
- [ ] Agregar grid/dot/line patterns a backgrounds
- [ ] Refinar botones con lift + scale + shadow
- [ ] Mejorar navigation links con underline expand
- [ ] Agregar overlap sutil en sections
- [ ] Ajustar responsive breakpoints
- [ ] Probar en múltiples dispositivos
- [ ] Verificar performance (animaciones no afecten carga)

## Notas de Implementación

**Complejidad vs Elegancia:** La sofisticación está en la ejecución precisa de elementos simples, no en añadir más elementos.

**Menos es más, pero con intención:** Design minimalista no = genérico. Design minimalista intencional = sofisticado.

**Balance es clave:** Demás minimalista = aburrido. Demás maximalista = caótico. El sweet spot está en between.

**Consistencia:** Una vez definida la dirección estética, mantenerla consistente en todas las sections.

**Performance:** Animaciones CSS-only优先. JavaScript para scroll-triggered solo si es necesario.

**Accessibility:** Siempre mantener contraste sufficient, focus states, y ARIA labels.

**Cross-browser:** Testear en Chrome, Firefox, Safari, Edge. Polyfills si es necesario.

---

**Última actualización:** 2025-02-22  
**Versión:** 1.0.0  
**Para:** Citrino Capitales Inmobiliarios web project  
**Enfoque:** Data-driven corporate fintech aesthetic con balance profesionalidad-distinción