# Plan: pase de copy (home + Jul-IA) y anclaje al catálogo

> Issue de seguimiento: [#19 — Pase de copy: quitar slop de index.html y jul-ia y anclar en el catálogo](https://github.com/citrino-bo/web/issues/19).
> Este plan y ese issue se crean juntos; se referencian mutuamente.

## Contexto

El copy de marketing arrastra tells de IA ("en tiempo real", "inteligente", "24/7", "español natural", "Potenciado por IA", "transformar datos en decisiones").
El análisis de copy lo cuantificó: el slop está concentrado en `index.html` y `jul-ia/index.html`.
Además, la home no refleja el catálogo real de productos de Citrino Inteligencia.

## Objetivo

Reescribir el copy de marketing de `index.html` y `jul-ia/index.html` para que sea verdadero, concreto y anclado al catálogo, sin tells de IA.
Estructura y markup intactos; solo cambia el texto.

## Alcance

- `index.html`: hero, plataforma, servicios, clientes, value-prop, nosotros, y meta/OG/título.
- `jul-ia/index.html`: hero, use-cases, cómo funciona, demo, tecnología, métricas, CTA.
- Profundidad A: misma estructura; solo cambia el texto.

## No-goals

- No reestructurar secciones ni tocar markup/clases.
- No modificar `inteligencia-inmobiliaria`, `contacto`, `base-de-datos`, `gracias`.
- No cambiar los números del chat demo (quedan como ejemplo).
- No es rediseño visual.

## Cómo se ejecuta (impeccable + skills)

- Cargar las skills `stop-slop` y `copywriting` y aplicarlas a cada bloque reescrito.
- `$impeccable clarify index.html` y `$impeccable clarify jul-ia/index.html`: microcopy, labels y mensajes (es el comando de copy de la interfaz).
- `$impeccable polish index.html` y `$impeccable polish jul-ia/index.html`: pasada final de calidad sobre lo reescrito.
- Cierre: `$impeccable critique index.html` para medir el salto de score contra el baseline (26/40).

## Principios de reescritura

- Cada claim debe ser verdadero y verificable contra el catálogo y los datos.
- Anclar en productos y segmentos reales; nada de adjetivos vacíos.
- Sin comodines de tiempo, sin em-dashes, sin emoji.

## Tells a eliminar (líneas)

`index.html`: "en tiempo real" (6,10,22,144); "inteligente" (143,368); "español natural" (148); "24/7" (144,368); "transformar datos en decisiones" (131,334); "líderes" (257); clichés de servicios (199-247); título/meta/OG en inglés (6,10,28).
`jul-ia/index.html`: "Potenciado por IA" (120,252); "inteligente" (121); "en tiempo real" (6,10,22,59,78,122,231); "24/7" (122,357); "Tres formas/Tres pasos" (151,209); "perfecto" (187); "potencia" (369); "no duerme" (357); emoji (275).

## Mapa de reescritura (sección → dirección)

- Meta/título/OG: en español; sin comodines; hechos del catálogo.
- Hero: claim concreto sobre el mercado de Santa Cruz.
- Plataforma: copy concreto; nombrar las herramientas por lo que hacen; Jul-IA sin "inteligente", sin 24/7, sin "español natural".
- Servicios (5): reescritura concreta, sin "exclusivo", "desbloquear el valor oculto" ni "hoja de ruta".
- Clientes: concreto (bancos, desarrolladores, cámaras que usan los datos).
- Value prop: de-slop; el contenido factual casi no cambia.
- Nosotros: sin "transformar datos en decisiones" ni "24/7".
- jul-ia: quitar "Potenciado por IA", 24/7 y "tiempo real"; reescribir use-cases, cómo funciona, tecnología y métricas con claims verdaderos. Chat demo intacto.

## Verificación

- `grep` de tells = 0 en ambos archivos.
- Captura de la home y de jul-ia en desktop y mobile.
- Revisión humana del copy (no hay test automático de slop).

## Riesgos

- Afirmar 24/7 o "tiempo real" es falso hoy: Jul-IA no está operativo.
- No inventar números que no salgan de los datos.
