# Motion

Qué se mueve en el sitio, con qué técnica y con qué criterio se cierra cada página. Las secciones **Por página** describen el objetivo de su issue de motion: no son estado actual. La razón de no usar librería se registra como ADR al cerrar #36.

## Tesis

El instrumento responde. El movimiento marca estado, lectura y avance. Nada se anima porque existe, y ningún bloque repite el gesto de otro.

## Repertorio

- Entrada de bloque: 14px y 0.55s con `cubic-bezier(0.16, 1, 0.3, 1)`. Una vez por bloque.
- Trazado: el guion naranja de 10×2px y la barra de 60×4px se dibujan de izquierda a derecha.
- Scroll atado: sólo arriba de 768px y sólo con `@supports (animation-timeline: view())`. Sin soporte, el contenido queda en su estado final.
- Cascada: sólo en listas y equipos, tope de cinco ítems, 70ms entre uno y otro.
- Feedback: hover de -3/-4px en botones y tarjetas, `scale(0.97)` al presionar, zoom 1.03 en la foto del equipo, 2px en la flecha de empresa.
- Conteo: sólo enteros. Nunca una cifra con sufijo de moneda.

## Prohibido

- Animar un bloque con entrada propia y además animar sus ítems con otro gesto.
- Scroll atado en móvil.
- Cargar una librería de animación.
- Contar una cifra con sufijo de moneda.
- Desaturar o recolorear los logos de las unidades y del grupo.

## Por página

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
