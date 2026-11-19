# Scroll atado sólo en desktop

Fecha: 2026-11-19
Estado: aceptada

## Contexto

El scroll atado escribe el bloque mientras el ítem cruza el viewport, y ese gesto compite con el dedo: en móvil el usuario arrastra, el contenido se mueve bajo su mano y el scroll se lee como un tirón.

## Decisión

El motion atado al scroll se aplica sólo desde 768px y sólo dentro de `@supports (animation-timeline: view())`. Debajo de 768px el mismo repertorio corre como entrada una vez. Arriba de 768px y sin soporte de `animation-timeline`, el contenido queda en su estado final, sin animación.

## Consecuencia

En móvil el repertorio es de entrada, no continuo: el ítem aparece completo en lugar de escribirse, y una revisión de diseño no puede pedir el gesto atado en esa pantalla. La verificación se hace a 1440 y a 390, y la segunda mide la entrada, no la continuidad.
