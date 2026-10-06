# Citrino — Sitio web

Sitio estático de Citrino Capitales Inmobiliarios, consultora de inteligencia de datos aplicada al mercado inmobiliario de Bolivia.
Se publica en GitHub Pages bajo el dominio `citrino.com.bo`.
El repositorio es `web` dentro de la organización `citrino-bo` (remote `origin`: https://github.com/citrino-bo/web).

## Pilares de negocio

- **Citrino Inteligencia** — consultoría y datos: desarrollo, plataforma y reportes de mercado.
- **Citrino Inversiones** — asesoría de inversión, compra y venta de inmuebles.
- **Citrino Desarrollo** — desarrollo de proyectos inmobiliarios.

El catálogo de productos, los segmentos y los criterios de marca viven en `PRODUCT.md`.
El ruteo de leads por pilar está en `docs/conversion-y-formularios.md`.

## Páginas

| Ruta | Propósito |
|---|---|
| `index.html` | Home: hero, pilares, plataforma, servicios, alianzas y formulario de leads. |
| `jul-ia/` | Jul-IA, chatbot para inversores (freemium). |
| `base-de-datos/` | Base de datos Inmobiliaria: mapa interactivo y métricas del mercado. |
| `inteligencia-inmobiliaria/` | Plataforma Citrino en alianza con la CBDI. |
| `contacto/` | WhatsApp y email de contacto. |
| `privacidad.html` | Política de privacidad. |
| `gracias.html` | Confirmación de envío del formulario. |

`capitales/` y `desarrollos/` redirigen a `/` y están marcadas `noindex`.
`jul-ia.html`, `base-de-datos.html` e `inteligencia-inmobiliaria.html` son stubs de redirección a las URLs con barra final.

## Stack

- HTML, CSS y JavaScript sin build ni bundler.
- Leaflet 1.9.4 con Leaflet.markercluster y Chart.js, solo en `base-de-datos/`.
- Umami como analítica sin cookies, servida desde `estadisticas.srv1406344.hstgr.cloud` (website-id `072eb175-7fc1-4d66-b54f-32c2f817f940`).
- Google Fonts: Outfit (display), DM Sans (texto) y JetBrains Mono (detalle técnico).
- Variables de color y tipografía en `styles.css`.
- El dataset `data/propiedades.json` se genera desde `citrino-gestion`; no se edita a mano.

## Formulario de leads

La home incluye un formulario de calificación como acción primaria.
Se envía con Web3Forms (`POST` nativo sin backend), con `redirect` a `gracias.html` y honeypot `botcheck`.
La `access_key` está pendiente: el campo vale `REEMPLAZAR_CON_WEB3FORMS_KEY` hasta cargar la clave real.
El asunto del correo se rutea por interés; ver `docs/conversion-y-formularios.md`.

## Quick start

No se requiere build.
Previsualizar en local:

```bash
python -m http.server 8080
```

Abrir `http://localhost:8080`.

## Verificación

```bash
bash scripts/verificar_navs.sh
bash scripts/verificar_stats.sh
```

## Documentación

- `PRODUCT.md` — pilares, catálogo de productos, segmentos y personalidad de marca.
- `ROADMAP.md` — plan por feature y estado.
- `CHANGELOG.md` — historial de cambios.
- `DESIGN.md` — sistema de diseño.
- `docs/conversion-y-formularios.md` — criterios de conversión y ruteo de leads.
- `specs/leads-form/spec.md` — spec del formulario de captación.

## Licencia

© 2026 Citrino Capitales Inmobiliarios. Todos los derechos reservados.
