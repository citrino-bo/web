# Motion

Qué se mueve en el sitio, con qué técnica y con qué criterio se cierra cada página. Las secciones **Por página** describen el objetivo de su issue de motion: no son estado actual. Las dos decisiones difíciles de revertir viven en `adr/0001-motion-sin-libreria.md` y `adr/0002-scroll-atado-en-desktop.md`.

## Tesis

El instrumento responde. El movimiento marca estado, lectura y avance. Nada se anima porque existe, y ningún bloque repite el gesto de otro.

## Repertorio

- Entrada de bloque: 14px y 0.55s con `cubic-bezier(0.16, 1, 0.3, 1)`. Una vez por bloque.
- Hero: el titular entra desde `blur(10px)` y 18px en 0.85s, el resto lo sigue con escalonado de 0.1 a 0.4s, y la retícula de fondo se enciende una vez en 1.4s con opacidad y escala 1.06. Es la única secuencia de entrada de la portada.
- Navegación: `@view-transition` cruza el documento en 0.3s y el header queda quieto con `view-transition-name: masthead`. Sin soporte, la navegación corta como siempre.
- Trazado: el guion naranja de 10×2px y la barra de 60×4px se dibujan de izquierda a derecha.
- Scroll atado: sólo desde 768px y sólo con `@supports (animation-timeline: view())`. Sin soporte, el contenido queda en su estado final.
- Cascada: sólo en listas y equipos, tope de cinco ítems, 70ms entre uno y otro.
- Feedback: hover de -3/-4px en botones y tarjetas, `scale(0.97)` al presionar, zoom 1.03 en la foto del equipo, 2px en la flecha de empresa.
- Conteo: sólo enteros. Nunca una cifra con sufijo de moneda.

## Prohibido

- Animar un bloque con entrada propia y además animar sus ítems con otro gesto.
- Scroll atado en móvil.
- Cargar una librería de animación.

## Por página

### Inicio

El libro del censo entra al 35% de visibilidad: las barras se trazan y los enteros se cuentan en 900ms, un paso cada 33ms. Las celdas del mapa brotan desde radio 0 con retardo según la distancia al centro y tope de 320ms, y el JSON se prefetchea 600px antes para que el aterrizaje ocurra a la vista. Los filtros repintan sin animar.

### Servicios

La lista de cada unidad se escribe atada al scroll: el guion se traza y el texto llega a opacidad completa mientras el ítem entra. En móvil la misma lista entra en cascada una vez, sin atarse. La lista de la primera unidad lleva `data-estatica` y nace completa, porque vive entera en el primer viewport y ninguna técnica puede animar lo que ya está en pantalla.

Cierre: a 1440 y a 390; los ítems cambian de estado entre dos posiciones de scroll dentro del rango de entrada; al subir se desdibujan; con movimiento reducido quedan completos; sin desborde horizontal.

### Inteligencia

Los cuatro ítems de la banda entran en cascada con su guion trazado. El logo de la CBDI no se toca.

Cierre: cascada de cuatro con tope de 280ms; el logo conserva sus colores; con movimiento reducido todo queda visible.

### Quiénes Somos

Los logros entran en cascada. La foto del equipo hace zoom 1.03 al hover. La flecha de cada empresa avanza 2px. Las dos cifras con signo (+40, +2.300) se cuentan conservando el signo; "3 casas/día" queda fija, porque no es un entero.

Cierre: las dos cifras con signo llegan al valor exacto del HTML; el zoom no desborda el marco; la flecha se mueve sin mover la fila; con movimiento reducido no hay conteo.

### Cierre

La retícula de `.cta-final` y `.banda-oscura` se enciende atada al scroll, con el mismo gesto del hero pero sin terminar de una vez.

Cierre: la opacidad de la retícula sigue al scroll entre dos posiciones; con movimiento reducido queda encendida y quieta.

## Documentación

`DESIGN.md` se regenera desde el código vivo antes de cerrar el trabajo de motion. Los criterios muertos se borran, no se corrigen al costado.

Cierre: ninguna afirmación de `DESIGN.md` contradice el HTML o el CSS; cada decisión difícil de revertir tiene su ADR; el detector de diseño vuelve sin hallazgos.

## Presupuesto

Ninguna animación del repertorio toca propiedades que disparen layout. El blur es un elemento y una vez. La navegación entre páginas no carga JavaScript. Con `prefers-reduced-motion` los momentos quedan en su estado final y el feedback sobrevive.
