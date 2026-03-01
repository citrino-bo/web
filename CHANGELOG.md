# Changelog

Este archivo registra todos los cambios notables en el sitio web de Citrino Capitales Inmobiliarios.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed
- **Mobile scroll vertical**: Corregido problema de scroll que ocultaba títulos al navegar en móvil y desktop
  - Cambiado `.marquee-container` de `overflow: hidden` a `overflow-x: hidden`
  - Eliminado `overflow-x: hidden` redundante del `.container`
  - Agregado `overflow-x: hidden` explícito en media queries de móvil para el marquee
  - Solucionado conflicto de contexto de scroll que capturaba gestor táctil

## [1.2.1] - 2026-02-22

### Changed
- **Logos PNG**: Reemplazados logos SVG por PNG (citrino-logo-fondo-claro.png y citrino-logo-fondo-oscuro.png)
- **Favicon**: Mantenido sin cambios (SVG + PNG + Apple Touch Icon)

### Fixed
- **Visual quality**: Corregido problema de visualización con logos SVG

## [1.2.0] - 2026-02-22

### Added
- **Identidad visual completa**: Integrados logos SVG de Citrino en header y footer
- **Favicon implementado**: Favicon SVG con fallback PNG + Apple Touch Icon
- **Logos responsivos**: Tamaños ajustados para desktop (40px/48px), tablet (36px/44px) y mobile (32px/40px)
- **Botón WhatsApp**: Botón Contacto del hero redirige a wa.me/59179822999
- **Navegación temporal**: Botón Nuestros Servicios redirige a sección ¿Por qué Citrino?

### Changed
- **Actualización de fechas**: Todos los años actualizados de 2025 a 2026
- **Header logo**: Reemplazado texto CITRINO por imagen SVG citrino-logo-fondo-claro.svg
- **Footer logo**: Reemplazado texto CITRINO por imagen SVG citrino-logo-fondo-oscuro.svg

### Technical Details
- SVGs optimizados para rendimiento (27KB logo claro, 25KB logo oscuro)
- Meta tags de favicon implementados en `<head>`
- Clases CSS `.logo-img` y `.footer-logo-img` para styling de logos
- Responsive breakpoints ajustados para logos en tablet y mobile

### Design Improvements
- Logo SVG vectorial mantiene calidad en cualquier tamaño
- Consistencia de marca en toda la web con logos oficiales
- Identidad visual profesional con elementos corporativos

## [1.1.0] - 2026-02-22

### Added
- **Tipografía distintiva**: Reemplazada fuente Inter genérica por Outfit (display) + DM Sans (body) + JetBrains Mono (elementos decorativos tech)
- **Gradientes corporativos**: Implementados gradientes depth para backgrounds (primary, secondary, accent)
- **Transparencias y overlays**: Variables CSS para opacidades con profundidad visual
- **Staggered animations**: Animación de entrada escalonada en hero con delays (0.1s - 0.4s)
- **Scroll-triggered animations**: Secciones con animaciones al entrar en viewport (value prop, about, contact)
- **Hover effects elegantes**:
  - Nav links con underline expand effect
  - Buttons con lift + scale + shadow + gradient accents
  - Social links con rotation + lift
  - Value icons con scale y color change
  - Contact items con top border reveal
- **Patterns tech backgrounds**:
  - Grid pattern mejorado en hero
  - Dot pattern en value prop y contact
  - Grid pattern sutil en footer
- **Generous negative space**: Padding aumentado en about (10rem) y value prop (8rem)

### Changed
- **Header**: Mejorado backdrop filter (20px) y shadow dinámico al scroll
- **Hero title**: Incrementado tamaño (clamp 2.5rem-4rem) y peso (800) con mejor letter-spacing
- **Hero subtitle**: Mejorado line-height (1.6) y máx-width (700px)
- **Buttons**: Padding aumentado (1rem 2.5rem) con gradientes y cubic-bezier transitions
- **Value prop items**: Padding aumentado (2.5rem gap) con icons rediseñados (56px, border-radius 16px)
- **Contact items**: Padding aumentado (2.5rem) con icons mejorados y top border reveal
- **Footer**: Padding aumentado (6rem 0 2rem) con social links rediseñados (48px, border-radius 12px)
- **Responsive design**:
  - Tablet breakpoint (1024px) agregado
  - Mobile breakpoints refinados (768px, 480px)
  - Navigation móvil mejorada con backdrop blur

### Technical Details
- Animaciones CSS con keyframes (fadeInUp, staggered delays)
- JavaScript vanilla para scroll-triggered animations con elementInView detection
- CSS variables mejoradas con gradientes y opacidades
- Cubic-bezier transitions para smoother animations (0.4, 0, 0.2, 1)
- SVG backgrounds data URI optimizados

### Design Improvements
- **Estética data-driven corporate fintech**: Inspiración en Stripe, Plaid
- **Balance profesionalidad-distinción**: Evitado minimalismo genérico y maximalismo caótico
- **Depth visual**: Gradients, overlays, transparencias para sofisticación
- **Unexpected layouts controlados**: Asymetrie sutil con grid patterns
- **Performance**: Animaciones CSS-only优先, JavaScript mínimo para scroll-triggered

## [1.0.0] - 2026-02-18

### Added
- Sitio web estático inicial para GitHub Pages
- Sección Hero con propuesta de valor y CTAs
- Sección Servicios con 4 tarjetas de servicio (actualmente comentada)
- Sección Diferenciadores con 3 puntos clave
- Sección Sobre Nosotros con descripción de la empresa
- Sección Contacto con ubicación y email
- Footer con marca y redes sociales
- Enlaces a redes sociales de Citrino:
  - Facebook: https://www.facebook.com/citrinocapitalesinmobiliarios
  - Instagram: https://www.instagram.com/citrinoinversion/
  - TikTok: https://www.tiktok.com/@citrinoinversion
  - LinkedIn: https://www.linkedin.com/company/citrino-capitales-inmobiliarios/
  - YouTube: https://www.youtube.com/@citrinocapitalesinmobiliarios
- Navegación responsiva con menú móvil
- Scroll suave entre secciones
- Colores corporativos: Azul (#002857) y Naranja (#ee7900)
- Diseño mobile-first y responsivo
- Política de Privacidad adaptada a Bolivia
- Documentación completa (README.md, CHANGELOG.md, ROADMAP.md)
- Archivo .gitignore para exclusión de archivos innecesarios

### Changed
- Actualización de enlaces de contacto a datos reales de Citrino
- Email: citrinocapitalesinmobiliario@gmail.com

### Technical Details
- HTML5 semántico
- CSS3 con variables custom properties
- JavaScript vanilla sin dependencias
- Iconos SVG integrados
- Fuente Inter de Google Fonts
- Sin frameworks ni bibliotecas externas

---

## Versiones

Las versiones siguen el formato `MAJOR.MINOR.PATCH`:

- **MAJOR**: Cambios incompatibles con la versión anterior
- **MINOR**: Nuevas funcionalidades de manera compatible hacia atrás
- **PATCH**: Correcciones de bugs de manera compatible hacia atrás

## Categorías de Cambios

- **Added**: Nuevas funcionalidades
- **Changed**: Cambios en funcionalidades existentes
- **Deprecated**: Funcionalidades que serán removidas en futuras versiones
- **Removed**: Funcionalidades removidas
- **Fixed**: Correcciones de bugs
- **Security**: Parches de seguridad

## Notas

- Las fechas se expresan en formato AAAA-MM-DD
- Este proyecto se adhiere a Semantic Versioning
- Para detalles de futuras mejoras, ver ROADMAP.md
