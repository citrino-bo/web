# Plan — UX: sistema de headings, nav, home y formulario (v2)

Fecha: 2026-10-16 · Rama: `desarrollo` · Sin commit, sin deploy

## Objetivo
1. Centralizar en CSS el heading de sección (barra naranja en todos, sin hacks manuales).
2. Nav: agregar "Inicio" y renombrar "Base de Datos" → "Datos".
3. Home: quitar la sección "Nuestra Plataforma"; copy "Quiénes confían en nosotros".
4. Formulario: email + WhatsApp separados (uno obligatorio), mensaje obligatorio, dos consentimientos.

## Contrato del formulario (idéntico en `index.html` y `contacto/index.html`)

Hidden (sin cambios): `access_key`, `redirect`, `subject` (id `lead-subject`), `from_name`, `botcheck` (honeypot).

| Campo | name | id | tipo | required HTML | Nota |
|---|---|---|---|---|---|
| Interés | `interes` | — | radio ×4 | sí (1º) | ruteo de subject — sin cambios |
| Nombre | `nombre` | `lead-nombre` | text | sí | sin cambios |
| Email | `email` | `lead-email` | email | **no** | reservado Web3Forms (reply-to) |
| WhatsApp | `whatsapp` | `lead-whatsapp` | tel | **no** | `inputmode=tel`, `autocomplete=tel` |
| Mensaje | `mensaje` | `lead-mensaje` | textarea | **sí** | label "Cómo podemos ayudarte" |
| Privacidad | `consent_privacidad` | `lead-consent-privacidad` | checkbox | **sí** | "Acepto la política de privacidad" |
| Contacto | `consent_contacto` | `lead-consent-contacto` | checkbox | **sí** | "Autorizo que Citrino me contacte" |

**Email o WhatsApp (uno obligatorio)** — JS propio (Web3Forms no lo soporta):
```js
const leadEmail = document.getElementById('lead-email');
const leadWhats = document.getElementById('lead-whatsapp');
if (leadEmail && leadWhats) {
    const msg = 'Completá tu email o tu WhatsApp para que podamos contactarte.';
    const syncContacto = () => {
        const ok = leadEmail.value.trim() !== '' || leadWhats.value.trim() !== '';
        leadEmail.setCustomValidity(ok ? '' : msg);
    };
    leadEmail.addEventListener('input', syncContacto);
    leadWhats.addEventListener('input', syncContacto);
    syncContacto();
}
```

## Fases

### Fase A — Sistema de diseño (headings)
- `styles.css`: una sola regla `→ .section-title::after` (60×4px, `--gradient-secondary`, radius 2px, centrada, `margin: 1rem auto 0`) y aplicarla también a `.value-prop-title` en el mismo bloque. **Borrar** `.about-text::before`.
- `DESIGN.md`: documentar "Section Heading" como componente (la barra vive acá, no se redibuja a mano).

### Fase B — `script.js`
- Quitar handlers muertos `.platform-card .btn-primary` / `.platform-card-link`.
- Agregar el bloque "email o whatsapp (uno obligatorio)" de arriba.
- Mantener ruteo de `subject` por `interes` y eventos Umami.

### Fase C — Nav (shells) + verificación
- `inteligencia-inmobiliaria/index.html`, `privacidad.html`, `gracias.html`, `base-de-datos/index.html`: agregar **"Inicio"** (primer ítem, `href="../index.html"` en subpáginas, `href="index.html"` en raíz) y renombrar **"Base de Datos" → "Datos"** en nav y footer.
- `privacidad.html`: lista de datos → "Email y/o WhatsApp de contacto".
- `scripts/verificar_navs.sh`: canon `index.html|Inicio`, `base-de-datos/|Datos`.

### Fase D — `index.html`
- Nav + footer: +Inicio, Base de Datos → Datos.
- Quitar la sección `#julia` ("Nuestra Plataforma / La herramienta detrás de los datos") completa.
- "Quiénes confían en nuestros datos" → "Quiénes confían en nosotros".
- Form según el contrato.

### Fase E — `contacto/index.html`
- Nav + footer: +Inicio, Base de Datos → Datos.
- Form según el contrato (link privacidad `../privacidad.html`).

### Fase F — Docs
- `docs/conversion-y-formularios.md`: campos (email + WhatsApp, uno obligatorio; mensaje obligatorio; dos consentimientos).
- `specs/leads-form/spec.md`: ídem.

## Fuera de scope
- Honeypot `botcheck`: se deja como está.
- Fallback de reply-to cuando el lead deja solo WhatsApp: se deja como está (documentado).
- CSS huérfano `.platform-*` en `styles.css` se limpia; `.julia-*` restante, opcional.

## Verificación
- `verificar_navs.sh` + `verificar_stats.sh` verdes.
- Capturas desktop+mobile de home, contacto, base-de-datos; consola sin errores.
- Test del "uno de dos obligatorio".

## Resultado (2026-10-16)
Ejecutado en `desarrollo`, sin commit ni deploy.

- **Headings**: `styles.css` con una sola regla `.section-title::after, .value-prop-title::after` (barra naranja). Eliminado el hack `.about-text::before`. Documentado en `DESIGN.md` como componente "Section Heading". Todos los títulos de sección la muestran.
- **Nav**: "Inicio" (primer ítem) + "Base de Datos" → "Datos" en las 5 páginas (nav + footer). `verificar_navs.sh` OK.
- **Home**: sección `#julia` eliminada; "Quiénes confían en nosotros".
- **Formulario**: email + WhatsApp (uno obligatorio por JS — verificado: vacío inválido, solo-WhatsApp válido, solo-email válido); "Cómo podemos ayudarte" obligatorio; dos checkboxes (privacidad + autorización de contacto), ambos obligatorios.
- **Limpieza**: CSS huérfano `.platform-*` (home) removido; `.platform-hero`/`.platform-badge` de inteligencia conservados. `.lead-field--consent` con gap.
- Verificación visual (Playwright 8082, desktop 1440 + mobile 390): home, contacto, base-de-datos OK. Consola 0 errores.
- Docs: `docs/conversion-y-formularios.md` y `specs/leads-form/spec.md` actualizados.

Pendiente: submit E2E real + merge a `main`.
