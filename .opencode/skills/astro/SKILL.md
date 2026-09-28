---
name: astro
description: "Trigger: astro, .astro, astro.config, isla, island, client:load, client:idle, componente de Astro, sitio estático. Convenciones para construir y revisar sitios y componentes Astro."
license: Apache-2.0
metadata:
  author: "citrino"
  version: "1.0"
---

# Astro

## Activation Contract

Cargar cuando el trabajo toque un proyecto Astro: archivos `.astro`, `astro.config.mjs`, componentes, islas interactivas o el build de un sitio estático.

## Reglas duras

- `.astro` para contenido estático o renderizado en servidor; la UI con estado va en islas.
- Astro no envía JS por defecto. Toda isla necesita una directiva de cliente explícita (`client:load`, `client:idle`, `client:visible`, `client:media`, `client:only`); sin directiva el componente no hidrata.
- HTML semántico, CSS con Grid/Flexbox y mejora progresiva: el sitio funciona sin JS salvo las islas.
- Cubrí foco, contraste, `alt` y targets táctiles.
- Compilar no prueba el render: verificá el componente en el navegador antes de devolverlo.

## Gotchas

- Los `<style>` de un `.astro` son scoped; para estilos globales usá `<style is:global>` o un stylesheet importado.
- `set:html` con input externo abre XSS: usalo sólo con contenido propio o saneado.
- Un componente sin directiva de cliente se renderiza en build y no hidrata. Si "no anda la interactividad", revisá la directiva.
- Referencia oficial: https://docs.astro.build
