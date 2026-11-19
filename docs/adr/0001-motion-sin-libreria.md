# Motion sin librería de animación

Fecha: 2026-11-19
Estado: aceptada

## Contexto

El sitio es HTML, CSS y JS estático, sin build ni bundler, y GitHub Pages sirve cada archivo tal como está: cada kilobyte se paga en la primera visita. El contenido es persuasivo, así que la página tiene que estar legible antes de que el visitante decida leerla.

## Decisión

No se carga ninguna librería de animación. Las animaciones nativas cubren el repertorio sin descarga: `animation-timeline` para el trazado y el scroll atado, `@view-transition` para la navegación entre documentos, y transiciones de CSS disparadas por `IntersectionObserver` para entradas y cascadas.

## Consecuencia

Una librería como GSAP con ScrollTrigger pesa 45 KB comprimidos, y ese peso compra fade-ups que hoy se leen como plantilla mientras el CSS nativo los hace sin costo. Se pierde la coreografía atada a timelines complejas —secuencias de muchos elementos con dependencias entre sí—; si alguna vez hace falta, se resuelve aparte, con su propio ADR y sin arrastrar al resto del sitio.
