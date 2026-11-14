---
name: Citrino Capitales Inmobiliarios
description: Data and real-estate intelligence for Santa Cruz, Bolivia
colors:
  primary: "#002857"
  primary-light: "#004080"
  primary-mid: "#00325e"
  primary-dark: "#001a38"
  primary-deep: "#0a1f3d"
  signal: "#ee7900"
  signal-deep: "#b35400"
  signal-hover: "#ff9f30"
  signal-ink: "#a14c00"
  hairline: "rgba(0, 40, 87, 0.14)"
  density-1: "#dbe7f2"
  density-2: "#a8c4de"
  density-3: "#6d9bc7"
  density-4: "#3a6ea3"
  density-5: "#002857"
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
  dark-hero-mid: "#12213d"
  dark-deep: "#060a12"
  dark-ink: "#e5e7eb"
  dark-ink-medium: "#b6bdc9"
  dark-link: "#93c5fd"
typography:
  display: { fontFamily: Outfit, fontSize: "clamp(2.75rem, 1.9rem + 3.2vw, 4.25rem)", fontWeight: 800, lineHeight: 1.3, letterSpacing: "-0.03em" }
  display-compact: { fontFamily: Outfit, fontSize: 2rem, fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.03em" }
  headline: { fontFamily: Outfit, fontSize: "clamp(2.125rem, 1.3rem + 2.4vw, 3rem)", fontWeight: 700, lineHeight: 1.3, letterSpacing: "-0.02em" }
  rail-heading: { fontFamily: Outfit, fontSize: "clamp(1.5rem, 2.2vw, 2rem)", fontWeight: 700, lineHeight: 1.3, letterSpacing: "-0.02em" }
  heading: { fontFamily: Outfit, fontSize: 1.625rem, fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.01em" }
  title: { fontFamily: Outfit, fontSize: 1.25rem, fontWeight: 600, lineHeight: 1.3 }
  stat: { fontFamily: Outfit, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.02em" }
  stat-total: { fontFamily: Outfit, fontSize: "clamp(3rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.03em" }
  stat-row: { fontFamily: Outfit, fontSize: 1.5rem, fontWeight: 700, lineHeight: 1 }
  subtitle: { fontFamily: "DM Sans", fontSize: "clamp(1.125rem, 2.2vw, 1.375rem)", fontWeight: 400, lineHeight: 1.65 }
  lead: { fontFamily: "DM Sans", fontSize: 1.125rem, fontWeight: 400, lineHeight: 1.75 }
  body: { fontFamily: "DM Sans", fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  small: { fontFamily: "DM Sans", fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.5 }
  label: { fontFamily: "JetBrains Mono", fontSize: 0.75rem, fontWeight: 500, lineHeight: 1.4, letterSpacing: "0.06em" }
rounded: { hairline: 1px, rule: 2px, swatch: 3px, bar: 6px, sm: 8px, md: 10px, lg: 12px, card: 16px, pill: 100px }
spacing: { section: 7rem, container-max: 1320px, container-narrow: 820px, container-padding: "clamp(1.25rem, 3.5vw, 3rem)", grid-gap: 2rem }
omitted:
  - section: components
    reason: "Los valores y los estados viven en `.btn`, `.acceso`, `.chart-card` y `.lead-form` de styles.css"
---

# Design System: Citrino Capitales Inmobiliarios

## Overview

**Creative North Star: "The Data Room"**

Una mesa de inteligencia institucional: un mundo navy profundo interrumpido por bandas blancas de evidencia, con el naranja reservado para la señal. Denso en datos —censos, tablas, un mapa de densidad, gráficos— y liviano en decoración: nada se ilustra si se puede medir.

Dos temas, claro y oscuro, decididos por `prefers-color-scheme` y sin interruptor en la página. El oscuro cambia las superficies y el ink; no inventa una segunda paleta.

**Key Characteristics:**
- Las cifras son tipografía, no epígrafes de una tarjeta.
- La evidencia se organiza en listas divididas y tablas, no en grillas de tarjetas.
- Un solo eje: todo arranca en el borde del contenedor.

## Colors

Tres roles de marca y una escalera neutra duplicada en oscuro; la profundidad viene de bandas tonales, nunca de un shadow con color.

- **Deep Authority** (`primary`): fondo del hero, `.banda-oscura` y `.cta-final`; el navy de los headings vía `--heading-ink`.
- **Authority Light / Mid** (`primary-light`, `primary-mid`): los dos stops del hero de páginas interiores. `primary-light` es además el cuarto paso de la rampa de densidad.
- **Signal** (`signal`): cifras, subrayado de 60×4px, marcadores de lista, links de LinkedIn.
- **Signal Deep** (`signal-deep`): el degradado de `--gradient-secondary`, que es lo que permite texto blanco en AA sobre un botón primario.
- **Signal Ink** (`signal-ink`): el naranja para texto sobre superficie clara.
- **Return** (`return`): sólo estado positivo.

**The Signal Rule.** El naranja marca lo que se lee como número o se acciona: cifras, links, botón primario, marcadores, la barra del título. No es un lavado decorativo, no es acento de tarjeta y nunca es categoría de dato: la rampa de densidad es una sola familia azul para que el naranja siga disponible para la acción.

**The Two-Theme Rule.** Toda superficie nueva se mira en los dos temas. Un componente que sólo define valores claros está sin terminar, y todo color fijado en JS —datasets de Chart.js, rampas del mapa— existe en ambos.

**The Contrast Ink Rule.** Naranja sobre claro se escribe con `signal-ink`, nunca con `signal`.

**The Brand-Asset Rule.** Los logos de las unidades y del grupo conservan sus colores oficiales: son marcas, no acentos, y no se recolorean ni se desaturan.

## Typography

**Display:** Outfit (400–800). **Body:** DM Sans (400–600). **Label:** JetBrains Mono (400–500), siempre uppercase con tracking amplio, y sólo para dato de máquina.

**Hierarchy** — los tamaños viven en el frontmatter; esto es el mapa a las clases:

- **Display**: `.hero-title`, uno por página, centrado.
- **Headline**: `.section-title`, `.banda-titulo`, `.cta-final-title` y el título del hero interior.
- **Rail heading**: `.unidad h2`, dentro de su riel.
- **Heading**: `.censo-article h3`, `.mapa-header`.
- **Title**: `.chart-card h3`, `.acceso h3`, `.lead-question`, `.documento h2`.
- **Stat** / **Stat total** / **Stat row**: `.cifra-valor`, `.censo-total-cifra`, `.censo-inmuebles`.
- **Lead** / **Subtitle** / **Body** / **Small**: prosa, subtítulos de sección, navegación y copy auxiliar.
- **Label**: `.tabla-censo thead th`, `.mapa-leyenda`, `.footer-nav-title`, `.cifra-label`, `.censo-proyectos`.
- **Display compact**: `.persona-iniciales`, el monograma que reemplaza una foto faltante.

**The One Bar Rule.** El subrayado naranja de 60×4px lo dibuja sólo `.section-title::after` / `.banda-titulo::after`, con `--gradient-secondary`. Las páginas de documento son la única variante: su `h2` lleva borde inferior completo. Nunca se redibuja localmente.

**The Mono Means Data Rule.** JetBrains Mono marca salida de máquina. Nunca prosa, nunca titulares.

## Layout

Un contenedor centrado de 1320px con padding fluido (`clamp(1.25rem, 3.5vw, 3rem)`) y 820px para `.container--narrow`, dentro de bandas de color a sangre. Los bloques internos no vuelven a topar el ancho: topan la medida en `ch`, no la caja.

- **Ritmo:** 7rem por sección; 4rem para `.mapa` y `.visualizaciones`, cada uno con hairline superior; 7rem para `.cta-final`; 4rem en móvil.
- **Grillas:** dos columnas para `.charts-grid` y `.empresas`, tres para `.accesos`, cuatro para `.equipo`, con 2rem de gap.
- **Rieles:** arriba de 1024px, `.censo-article`, `.unidad` y `.contacto-grid` son un riel de 280–320px más una columna de contenido, alineados en el mismo borde izquierdo.
- **Bandas:** papel, superficie, navy, superficie, pie. Una sola banda navy a sangre por página.
- **Breakpoints:** 1024 (equipo a tres), 900 (gráficos y accesos a una columna, pie a dos), 768 (una columna, menú hamburguesa, cifras apiladas), 480 (tipografía y padding chicos, botones del hero a lo ancho).
- **Hero:** 92vh en la portada con contenido centrado y grilla de puntos radial; en interiores baja a `min-height: auto`, para que la banda navy de abajo se lea como una segunda superficie.

## Elevation & Depth

Híbrido: bandas tonales para la estructura y un único vocabulario neutro para la interacción. Ningún shadow se tiñe con un color de marca.

- **sm** (`0 1px 2px 0 rgba(0, 0, 0, 0.05)`): tarjetas de gráfico, hairline del header.
- **md** (`0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -1px rgba(0, 0, 0, 0.04)`): `.acceso`, `.lead-form`, botones en reposo.
- **lg** (`0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`): hover, header tras el scroll, despliegue del menú móvil.

**The Soft-Lift Rule.** Una tarjeta descansa en 1–2 y sube un nivel en hover, moviendo -4px. Sin glow, sin shadow más grande que `lg`, sin color.

## Motion

Tesis: el instrumento se enciende. El movimiento explica que los datos llegan, no que la página es linda.

- **Hero (`enfocar`):** el titular entra desde `blur(10px)` y `translateY(18px)` en 0.85s con `cubic-bezier(0.16, 1, 0.3, 1)`; el subtítulo, las cifras y el CTA siguen con `aparecer` y un stagger de 0.1 a 0.4s. Es la única secuencia de entrada.
- **Barra del título:** se traza de `scaleX(0)` a 1 al 60% de visibilidad, con origen a la izquierda y al centro en las bandas.
- **Filas del censo y barras de ciudades:** entran en orden y se trazan una vez, al 35% de visibilidad.
- **Mapa:** las celdas crecen desde radio 0 en el primer pintado, con retardo según la distancia al centro y tope de 320ms. Los filtros repintan sin animar.
- **Feedback:** botones y tarjetas suben -3/-4px en hover y hacen `scale(0.97)` al presionar.

Presupuesto: ninguna propiedad que dispare layout, el blur es un elemento y una vez. Con `prefers-reduced-motion` los cuatro momentos se desactivan y el contenido queda en su estado final; el feedback sobrevive.

## Shapes

Redondeado, nunca blando: la escala está en `rounded`. Los bordes casi no existen —las tarjetas se separan por relleno y shadow neutro, las secciones por hairline o por la banda— y la única línea saturada del sistema es la barra de 60×4px bajo los títulos.

## Components

- **Botones:** el borde transparente de 2px evita que las variantes muevan el layout. Primario con `--gradient-secondary` y blanco; secundario transparente con borde blanco, sólo sobre navy. El foco es navy y pasa a naranja sobre las superficies navy, el pie y `.banda-oscura`.
- **Tarjetas:** las únicas son `.chart-card` y `.acceso`, y ambas existen porque son un lienzo o un link. Todo lo demás va en listas divididas.
- **Cifras y libro del censo:** valores estáticos, sin contador, porque dos de los tres llevan sufijo de moneda. Las barras de ciudad se escalan contra la ciudad más grande, no contra 100%.
- **Mapa de densidad:** una celda agregada por `L.circleMarker` sobre un canvas compartido, radio en píxeles (a escala país una celda de 550 m sería sub-píxel), con la rueda de zoom apagada. Los filtros recalculan cada celda desde su desglose. Estados `.mapa-loading` y `.mapa-fallback` con `[hidden]`. En oscuro se invierte el tile pane y la rampa de densidad corre al revés, para que las celdas más densas sigan siendo lo más claro del mapa.
- **Formulario:** el interés es el primer campo y define el asunto y el ruteo del lead. Los seis intereses son filas de una lista, con la selección marcada por relleno. La validación es nativa con mensajes propios en español, para no depender del idioma del navegador.
- **Marquesina de clientes:** excepción documentada del detector. El track está duplicado a propósito para que el loop no muestre un hueco, y el botón de pausa existe por WCAG 2.2.2.
- **Avisos del detector:** la marquesina, el masthead del formulario, las filas de logros y los `#000` de los `mask-image` quedan firmados con su razón y su medición en `.impeccable/config.json`. `.section-subtitle` declara el `line-height` que hereda para que el analizador lo lea sobre su propio `font-size`.
- **Header:** fijo, 95% blanco con blur, `aria-current` en la página activa y hamburguesa debajo de 768px.
- **Superficies del navegador:** `viewport-fit=cover` con `env(safe-area-inset-*)`, selección navy, caret naranja, scrollbar teñida y `font-variant-numeric: tabular-nums` en `body` para que las columnas de cifras alineen.

## Do's and Don'ts

- **Don't** introducir un interruptor de tema: el tema sigue al sistema operativo.
- **Don't** fijar colores de gráfico o de mapa que sólo funcionen sobre claro.
- **Don't** usar texto con degradado, fondos crema, grillas de tarjetas genéricas ni íconos de casita.
- **Don't** poner un kicker en mayúsculas chicas arriba de un título.
- **Don't** pasar de 16px de radio en tarjetas ni combinar borde de 1px con un shadow de 16px o más.
- **Don't** anidar una tarjeta dentro de otra, ni usar borde izquierdo o derecho de más de 1px como acento.
- **Don't** poner texto muted (`ink-muted`) sobre una superficie oscura: va `dark-ink-medium` o un blanco con alfa.
- **Don't** recolorear, desaturar o contornear los logos de las unidades o del grupo.
- **Don't** publicar la base individual de propiedades: coordenadas, precios y superficies no salen del repo privado.
