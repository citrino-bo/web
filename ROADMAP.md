# Roadmap

Plan por feature del sitio de Citrino Capitales Inmobiliarios.
Cada feature tiene estado y, cuando aplica, su spec o doc de referencia.

## Hecho

### Sitio base y navegación

- Home con hero, pilares, plataforma, servicios y alianzas.
- Navegación y footer unificados en las páginas vivas.
- Migración tipográfica a Outfit + DM Sans + JetBrains Mono.

### Páginas

- `jul-ia/`: Jul-IA, chatbot para inversores.
- `base-de-datos/`: mapa interactivo (Leaflet) y métricas (Chart.js).
- `inteligencia-inmobiliaria/`: Plataforma Citrino en alianza con la CBDI.
- `contacto/`: WhatsApp y email.
- Baja de `capitales/` y `desarrollos/`, que redirigen a `/`.

### Captación

- Formulario de leads en la home con Web3Forms, `redirect` a `gracias.html` y honeypot.
- Ruteo de leads por interés; criterios en `docs/conversion-y-formularios.md`.
- Spec del formulario en `specs/leads-form/spec.md`.

### SEO y medición

- `sitemap.xml`, `robots.txt`, Open Graph, canonical y schema.org.
- Analítica Umami sin cookies, con funnels, goals y un board semanal.

### Identidad

- Logos en header y footer, favicon y Apple touch icon, con variantes responsive.

## Pendiente

### Formulario

- Cargar la `access_key` real de Web3Forms (hoy es un placeholder).
- Verificar el envío real end-to-end; después, retirar los `wa.me` de las páginas que corresponda (issue #5).

### Contenido

- Casos de éxito o proyectos, si el negocio lo prioriza.
- Testimonios de clientes, si el negocio lo prioriza.

### Exploratorio

- Newsletter y blog de sector, solo si el negocio los prioriza.
