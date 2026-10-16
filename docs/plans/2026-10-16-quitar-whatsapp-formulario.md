# Plan — Quitar WhatsApp clickeable + bajar Jul-IA + formulario como canal

Fecha: 2026-10-16 · Rama: `desarrollo` · Sin commit, sin deploy (revisar antes)

## Objetivo
1. Reemplazar los números/links de WhatsApp por el formulario.
2. Bajar la página de Jul-IA (redirect a inicio).
3. Link directo para LinkedIn/redes: `https://citrino.com.bo/contacto/`.

## Contexto
- El form ya existe en `index.html#contacto` y en `contacto/index.html` (Web3Forms, ya cargado).
- El retiro de WhatsApp ya está hecho en `index.html`, `jul-ia/`, `inteligencia-inmobiliaria/` y `contacto/` sobre `desarrollo`. **Faltan**: `base-de-datos/` (2 `wa.me`) y las menciones/links de Jul-IA.
- Número real: `59170933603`. No hay links `tel:`.

## Fases

### Fase 1 — `base-de-datos/index.html`
- L271: quitar "Chateá con Jul-IA o cotizá tu asesoramiento personalizado.".
- L272-282 (`.db-final-cta-buttons`): borrar los 2 `<a>` `wa.me` + el `<svg>` de WhatsApp; dejar un único `<a href="../contacto/" class="btn btn-primary">Solicitar asesoría</a>`.
- Nav L109 y footer L298: quitar `<li><a href="../jul-ia/">Jul-IA</a></li>`.

### Fase 2 — `contacto/index.html` (pulido C + nav Jul-IA)
- Meta L6: "— WhatsApp, email y ubicación" → "— Formulario, email y ubicación".
- OG L9 y Twitter L20: "Contactanos por WhatsApp o email" → "Contactanos por formulario o email".
- Hero L90-93: dejar solo el CTA primario ("Solicitar asesoría"); quitar el `.btn-secondary` "Enviar email" (el fallback mailto queda en `.contact-secondary`).
- Campo L150: label "WhatsApp o Email" → "Email o WhatsApp".
- Nav L71 y footer L185: quitar `<li><a href="../jul-ia/">Jul-IA</a></li>`.

### Fase 3 — stubs Jul-IA + sitemap
- `jul-ia/index.html`: reemplazar por stub igual a `capitales/index.html` (13 líneas: `noindex`, meta-refresh a `/`, canonical home, `<p>Redirigiendo a <a href="/">Citrino</a>...`).
- `jul-ia.html` (raíz): mismo stub apuntando a `/`.
- `sitemap.xml`: quitar `/jul-ia/`; agregar `/contacto/` (lastmod 2026-10-16, priority 0.8).

### Fase 4 — `index.html` (home)
- Meta L7, OG L11, Twitter L23: quitar referencias a Jul-IA.
- Nav L84 y footer L464: quitar `<li><a href="jul-ia/">Jul-IA</a></li>`.
- Sección plataforma L128-185: borrar Card 1 Jul-IA (L137-155); pasar el título/subtítulo de plural a singular ("Las herramientas detrás de los datos" → singular; ajustar "Dos herramientas que trabajan juntas…").
- L370: quitar "respaldado por Jul-IA, nuestra asesora inteligente disponible 24/7.".

### Fase 5 — shells restantes (nav + footer Jul-IA)
- `inteligencia-inmobiliaria/index.html`: L99, L237.
- `privacidad.html`: L40, L256.
- `gracias.html`: L25, L62.

### Fase 6 — `script.js`
- Quitar bloque `.platform-card .btn-julia` (L131-133).
- L139: hardcodear `product: 'base-de-datos'`.
- Quitar bloque `if (page === 'jul-ia')` (L144-153).
- L156: quitar `a[href*="jul-ia"]` del selector.

### Fase 7 — docs
- `README.md`, `ROADMAP.md`, `PRODUCT.md`, `CHANGELOG.md`: quitar Jul-IA y `wa.me`; corregir descripción de `contacto/` (form, no WhatsApp).
- `specs/leads-form/spec.md`: actualizar menciones `wa.me`.
- `openspec/specs/plataforma-inteligencia-landing/spec.md`: marcar/actualizar los CTAs `wa.me` stale.

## Fuera de scope
- Copy sin número: label "WhatsApp o Email" (ya se cambia en contacto), `privacidad.html:94`.
- CSS huérfano `.julia-*` / `.btn-julia` en `styles.css`.

## Verificación
- `git diff` por fase + `revisor-diff` sobre el diff completo.
- Chequeo: cero `wa.me`/`+591`/`tel:` en HTML (salvo stubs y datos).
- Form E2E (navegador headed; Cloudflare bloquea headless) + capturas desktop/mobile de `/contacto/`.
- Deploy (merge a `main`) **en pausa** hasta revisión.

## Resultado (2026-10-16)
Ejecutado en `desarrollo`, sin commit ni deploy.

- A/B/C aplicadas en 7 fases. Cero `wa.me`/`+591`/`tel:` en HTML; cero links a `jul-ia/`.
- Stubs `jul-ia/index.html` y `jul-ia.html` redirigen a `/` (verificado: `/jul-ia/` cae en la home).
- `sitemap.xml`: `/jul-ia/` fuera, `/contacto/` dentro.
- `scripts/verificar_navs.sh` y `scripts/verificar_stats.sh` actualizados a 5 páginas → **ambos verdes**.
- `styles.css`: `.platform-grid` pasó de `3fr 2fr` a single column centrada (la 2ª card ya no existe).
- `index.html` label unificado a "Email o WhatsApp".

Verificación visual (Playwright, localhost:8080, desktop 1440×900 + mobile 390×844):
- Home: sección de plataforma con una sola card centrada OK; form OK; nav/footer sin Jul-IA.
- `/contacto/`: hero con 1 CTA, form OK (label "Email o WhatsApp"), desktop + mobile OK.
- `/base-de-datos/`: CTA final "Convertí datos en decisiones" con un solo botón "Solicitar asesoría", desktop + mobile OK.
- Consola: 0 errores / 0 warnings en `/`, `/contacto/`, `/base-de-datos/`.

Pendiente: submit E2E real del form + merge a `main`.
