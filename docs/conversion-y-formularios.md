# Conversión y formularios

Criterios de captación y conversión del sitio de Citrino, con el ruteo de leads. Todo cambio que toque CTAs, formularios o captación de leads se rige por este documento.

## Ruteo de leads

El interés del lead decide el asunto del correo y qué unidad lo sigue. Todas las notificaciones llegan hoy al correo de contacto (`info@citrino.com.bo`) y se delegan por el asunto; la columna «Responsable» indica quién da seguimiento, no una dirección distinta.

| Interés del lead | Oferta | Unidad | Responsable | Asunto |
|---|---|---|---|---|
| Quiero comprar una propiedad como inversión | Asesoría de inversión | Citrino Inversiones | Rolando | `[Inversión]` |
| Quiero una asesoría inmobiliaria personalizada | Consultoría y estudios para decidir | Citrino Inteligencia | Nicolás | `[Asesoría]` |
| Necesito datos o monitoreo del mercado online | Plataforma Citrino y reportes B2B | Citrino Inteligencia | Nicolás | `[Datos]` |
| Quiero invertir como socio pasivo en un proyecto | Capitales pasivos (SPV por proyecto) | Citrino Desarrollos | Luis | `[Socio pasivo]` |
| Quiero desarrollar mi terreno | Desarrollo en aportación inmobiliaria | Citrino Desarrollos | Luis | `[Desarrollo]` |
| Quiero vender una propiedad | AMC (informe de valor de mercado) | Citrino Inversiones | Rolando | `[Vender]` |

El asunto se setea en el `submit` del formulario; si el JS no corre, el interés igual viaja como campo. Cuando existan los correos por responsable, el envío se puede rutear directo a cada uno sin cambiar el formulario.

## Arquitectura de CTAs

El formulario vive en una sola página, `contacto.html`. En el resto del sitio la acción es navegar a esa página, con una sola llamada por bloque:

- Inicio: «Nuestros Servicios» (primaria) y «Contáctanos» (secundaria) en el hero; el cierre invita a Nuestros Servicios.
- Nuestros Servicios: el cierre invita a Contacto.
- Inteligencia Inmobiliaria: el cierre invita a Nuestros Servicios.

Nunca dos botones del mismo peso en el mismo bloque, ni un botón dentro de una card informativa.

## Formulario

Formulario de calificación, una columna, con la segmentación primero y el contacto al final.

Campos del MVP, en orden:

1. ¿Qué necesitás? — las seis opciones que rutean (ver tabla de arriba).
2. Nombre.
3. Email.
4. WhatsApp — uno de los dos (email o WhatsApp) obligatorio.
5. Mensaje «Cómo podemos ayudarte» (obligatorio).
6. Consentimiento de privacidad — aceptar la política (con enlace).
7. Autorización de contacto.

Reglas:

- Seis opciones de interés superan el umbral de 3–5 campos: por eso el formulario es de dos pasos lógicos (segmentación, luego contacto) dentro de la misma tarjeta, no dos pantallas.
- Etiquetas visibles arriba del campo; el placeholder no reemplaza la etiqueta.
- Una columna; targets de al menos 44px; inputs de al menos 16px (por debajo, iOS hace zoom al enfocar).
- `type`/`autocomplete` correctos (`email`, `tel`) para que el teclado móvil y el autofill funcionen.
- Validación nativa del navegador con mensajes propios en español: el navegador no sigue el `lang` de la página, así que el texto por defecto llega en su idioma. Más la validación del servicio.
- Reassurance junto al botón: qué se hace con los datos.
- Anti-spam con el honeypot del servicio (`botcheck`); sin captcha.
- Consentimiento explícito con enlace a la privacidad (se maneja PII).
- Instrumentar el formulario con el evento `form` del catálogo en `docs/analitica.md`.

Envío: Web3Forms (sin backend), con `POST` nativo y `redirect` a `gracias.html`.

Meta Pixel (ID `4669919089998524`): el código base está en el `<head>` de todas las páginas y dispara el estándar `PageView`; el estándar `Lead` se dispara en `gracias.html`, la página a la que Web3Forms redirige solo cuando acepta el envío. No se dispara en el `submit` de `contacto.html` porque el `POST` nativo navega fuera de la página y el evento se pierde. El `Lead` viaja sin parámetros: la referencia de eventos estándar de Meta solo admite `currency` y `value` para ese evento, y una propiedad propia no habilita ningún reporte en Ads Manager, así que el interés no se envía a Meta. Cada visita a `gracias.html` cuenta un `Lead`, incluido un refresh: Meta no deduplica eventos que llegan solo del navegador. El pixel setea la cookie `_fbp` y envía datos a Meta; la política de privacidad tiene que declararlo.

## Formulario o chatbot

Primero el formulario; el chatbot, después. El chatbot aporta cuando hay que calificar y rutear en conversación, pero necesita infraestructura propia (proxy para la key de LLM). El AMC (informe de valor de mercado) es el alcance que cubrirá la asesora inteligente; hasta que esté operativa para leads web, ese interés rutea a Rolando.

## Fuentes

| Fuente | Fecha | Tipo | Uso |
|---|---|---|---|
| Unbounce, *2026 Conversion Benchmark* (44M conversiones) | 2026 | Independiente | Cantidad de CTAs |
| Levri (340 landings SaaS) | 2026-05 | Independiente | CTA above-the-fold |
| Antforms / Capconvert / Verlua / PromptlyForms | 2026 | Independiente | Diseño de formularios |
| Harvard (lead response) | s/f | Independiente | Tiempo de respuesta |
| Gartner (rep-free / acceso humano) | 2026-03 / 2026-08 | Independiente | Canal y humano |
| Conferbot / Chatonbo / getaiform | 2026 | Vendor | Hipótesis de lift de chatbot |
