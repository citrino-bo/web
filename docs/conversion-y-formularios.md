# Conversión y formularios

Criterios de captación y conversión del sitio de Citrino, con el ruteo de leads y las fuentes (2026) que los respaldan. Todo cambio que toque CTAs, formularios o captación de leads se rige por este documento.

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

- Inicio: «Nuestros Servicios» (primaria) y «Contactanos» (secundaria) en el hero; el cierre invita a Nuestros Servicios.
- Nuestros Servicios: el cierre invita a Contacto.
- Inteligencia Inmobiliaria: el cierre invita a Nuestros Servicios.

Nunca dos botones del mismo peso en el mismo bloque, ni un botón dentro de una card informativa.

Riesgo asumido: el home ya no captura el lead en el lugar, así que el camino a la conversión suma una navegación.
No hay umbral definido de antemano: la comparación es el conteo semanal de `lead-submit` en las cuatro semanas previas al cambio contra las cuatro posteriores, mismo evento y misma unidad, más `page-view` de `contacto` para ver si la gente llega. Si el conteo cae de forma sostenida, se repone el formulario en Inicio.

Fuente (independiente): Unbounce, *2026 Conversion Benchmark*, 44M conversiones sobre 18.639 landings: 1 CTA 13,5%; 2 CTA 11,9%; 3+ CTA 10,5%.
Fuente (independiente): Levri, 2026, 340 landings SaaS: 1 CTA above-the-fold 8,4% vs 3+ CTA 3,2%.

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
- Validación nativa del navegador (campos `required`) más la validación del servicio; sin mensajes propios.
- Reassurance junto al botón: qué se hace con los datos.
- Anti-spam con el honeypot del servicio (`botcheck`); sin captcha.
- Consentimiento explícito con enlace a la privacidad (se maneja PII).
- Instrumentar el envío con Umami: `lead-submit` más un evento por interés (`lead-inversion`, `lead-asesoria`, `lead-datos`, `lead-socio-pasivo`, `lead-desarrollo`, `lead-vender`), porque Umami no segmenta custom events por propiedades.

Envío: Web3Forms (sin backend), con `POST` nativo y `redirect` a `gracias.html`.

Fuentes (independientes): Antforms, 2026; Capconvert, 2026; Verlua, 2026; PromptlyForms, 2026.

## Formulario o chatbot

Primero el formulario; el chatbot, después. El chatbot aporta cuando hay que calificar y rutear en conversación, pero necesita infraestructura propia (proxy para la key de LLM). El AMC (informe de valor de mercado) es el alcance que cubrirá la asesora inteligente; hasta que esté operativa para leads web, ese interés rutea a Rolando.

Fuentes (independientes): Harvard (respuesta en menos de 5 minutos multiplica la conexión con el lead); Gartner 2026 (67% de compradores B2B prefieren no hablar con un vendedor, pero 87% exige poder llegar a un humano).

## Fuentes

| Fuente | Fecha | Tipo | Uso |
|---|---|---|---|
| Unbounce, *2026 Conversion Benchmark* (44M conversiones) | 2026 | Independiente | Cantidad de CTAs |
| Levri (340 landings SaaS) | 2026-05 | Independiente | CTA above-the-fold |
| Antforms / Capconvert / Verlua / PromptlyForms | 2026 | Independiente | Diseño de formularios |
| Harvard (lead response) | s/f | Independiente | Tiempo de respuesta |
| Gartner (rep-free / acceso humano) | 2026-03 / 2026-08 | Independiente | Canal y humano |
| Conferbot / Chatonbo / getaiform | 2026 | Vendor | Hipótesis de lift de chatbot |
