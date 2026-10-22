# Changelog

Este archivo registra todos los cambios notables en el sitio web de Citrino Capitales Inmobiliarios.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-10-22

Refactor total de contenido y arquitectura según `docs/refactorizacion_octubre_26/input_julio`. La estética no cambia; el copy y las secciones sí.

### Added
- **Nuestros Servicios** (`servicios.html`): las tres unidades de negocio con su logo oficial, descripción y lista de servicios.
- **Quiénes Somos** (`quienes-somos.html`): identidad, grupo, seis empresas con logo y enlace, logros del grupo y equipo completo con fotos y LinkedIn.
- **Inicio**: censo de nuevos proyectos con tabla por ciudad, censo de oferta pública online con mapa de densidad y tres visualizaciones, cifras de negocio y cierre «Convertí datos en decisiones».
- **Densidad de propiedades**: mapa Leaflet sobre `data/panel.json` con filtros por tipo y operación, leyenda de cinco tramos y carga diferida por `IntersectionObserver`.
- **`scripts/agregar_panel.py`**: agrega la base completa a 885 celdas de ~550 m con piso de k-anonimato k=5 y descarte de coordenadas inválidas.

### Changed
- **Navegación**: Inicio, Inteligencia Inmobiliaria, Nuestros Servicios, Quiénes Somos y Contacto. El mapa y las visualizaciones se mudan de `/base-de-datos/` a Inicio.
- **Formulario de contacto**: seis opciones de interés en lugar de cuatro, con asuntos `[Inversión]`, `[Asesoría]`, `[Datos]`, `[Socio pasivo]`, `[Desarrollo]` y `[Vender]`. Ver `docs/conversion-y-formularios.md`.
- **Estructura del repo**: la raíz queda solo con páginas planas y archivos del sitio; toda carpeta es una concern (`assets`, `data`, `docs`, `scripts`).
- **Assets**: renombrados a kebab-case sin espacios, organizados en `unidades/`, `grupo/`, `clientes/` y `equipo/`.
- **`styles.css` y `script.js`**: reescritos sobre el mismo sistema de diseño, sin selectores muertos. Rampa tipográfica cerrada en siete pasos fijos y tres fluidos.
- **Documentación**: `DESIGN.md` reescrito sobre la implementación real, `PRODUCT.md` actualizado, `AGENTS.md` con la convención de estructura.

### Removed
- **Páginas**: `base-de-datos/`, `capitales/`, `desarrollos/`, `jul-ia/` y sus stubs de redirección. Nada de eso existe en el input de julio.
- **`data/propiedades.json`**: 23.222 inmuebles con lat/lng, precio y superficies ya no se sirven ni se versionan; el repo es público y esa base es el activo del negocio.
- **`scripts/actualizar_stats.py` y `scripts/verificar_stats.sh`**: sincronizaban cifras hardcodeadas que el sitio nuevo ya no tiene.
- **Imágenes sueltas en la raíz**: capturas de verificación de iteraciones anteriores.

### Fixed
- **Mapa fuera del país**: 241 registros con coordenadas inválidas (0,0, La Habana, San Francisco) ya no se dibujan.
- **Accesibilidad**: `aria-pressed` en los filtros del mapa, `aria-current` en la navegación, contraste de titulares en modo oscuro mediante `--heading-ink`, y etiquetas de formulario asociadas por `for`/`id`.

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
- **Botón WhatsApp**: Botón Contacto del hero redirige a wa.me/15558355716
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
