# Conversión y formularios

Criterios de captación y conversión del sitio de Citrino, con el ruteo de leads y las fuentes (2026) que los respaldan.
Todo cambio que toque CTAs, formularios o captación de leads se rige por este documento.

## Ruteo de leads

El interés del lead decide el asunto del correo y a quién se delega.
Regla binaria: si el interés es de Citrino Inteligencia, va a Nicolás; cualquier otro interés va a Rolando.

| Interés del lead | Oferta | Pilar | Responsable | Asunto |
|---|---|---|---|---|
| Quiero desarrollar un terreno | Consultoría de desarrollo | Citrino Inteligencia | Nicolás | `[Desarrollo]` |
| Necesito datos o monitoreo del mercado | Plataforma Citrino y reportes B2B | Citrino Inteligencia | Nicolás | `[Datos]` |
| Quiero invertir o comprar una propiedad | Asesoría de inversión | Citrino Inversiones | Rolando | `[Inversión]` |
| Quiero vender una propiedad | AMC (informe de valor de mercado), alcance de Jul-IA | Citrino Inversiones | Rolando | `[Vender]` |

El formulario envía el asunto al correo de contacto (`info@citrino.com.bo`), donde hoy se delega.
El filtro por asunto permite derivar sin ambigüedad.
Cuando existan los correos por responsable, el envío se puede rutear directo a cada uno sin cambiar el formulario.

## Arquitectura de CTAs

Una sola acción primaria por página: el formulario.
Se repite en los puntos de decisión del scroll (hero y cierre), siempre con el mismo destino y la misma promesa.
La acción secundaria, si existe, es un enlace de texto subordinado; nunca un botón de igual peso que el primario.
No se replica el mismo CTA en cada sección: el botón dentro de las cards se elimina y las cards quedan informativas.

Fuente (independiente): Unbounce, *2026 Conversion Benchmark*, 44M conversiones sobre 18.639 landings: 1 CTA 13,5%; 2 CTA 11,9%; 3+ CTA 10,5%.
Fuente (independiente): Levri, 2026, 340 landings SaaS: 1 CTA above-the-fold 8,4% vs 3+ CTA 3,2%.

## Formulario

Formulario de calificación, una columna, con la segmentación primero y el contacto al final.
Campos del MVP, en orden:

1. ¿Qué necesitás? — las cuatro opciones que rutean (ver tabla de arriba).
2. Nombre.
3. WhatsApp o Email.
4. Contanos brevemente (opcional).
5. Consentimiento con enlace a la política de privacidad.

Reglas:

- Entre 3 y 5 campos para una sola pantalla; con 5 o más, evaluar 2 pasos (segmentación, luego contacto).
- Etiquetas visibles arriba del campo; el placeholder no reemplaza la etiqueta.
- Una columna; targets de al menos 44px; inputs de al menos 16px (por debajo, iOS hace zoom al enfocar).
- `type`/`autocomplete` correctos (`email`, `tel`) para que el teclado móvil y el autofill funcionen.
- Validación nativa del navegador (campos `required`) más la validación del servicio; sin mensajes propios.
- Reassurance junto al botón: tiempo de respuesta y qué se hace con los datos.
- Anti-spam con el honeypot del servicio (`botcheck`); sin captcha.
- Consentimiento explícito con enlace a la privacidad (se maneja PII).
- Instrumentar el envío con Umami.

Envío: Web3Forms (sin backend), con `POST` nativo y `redirect` a `gracias.html`.
El asunto por interés se setea con un listener de `submit`; si el JS no corre, el interés igual viaja como campo.
La `access_key` va como placeholder hasta que se cargue la clave real.

Fuentes (independientes): Antforms, 2026; Capconvert, 2026; Verlua, 2026; PromptlyForms, 2026.

## Formulario o chatbot

Primero el formulario; el chatbot, después.
El chatbot aporta cuando hay que calificar y rutear en conversación, pero necesita infraestructura propia (proxy para la key de LLM).
El AMC (informe de valor de mercado) es el alcance que cubrirá Jul-IA; hasta que Jul-IA esté operativo para leads web, ese interés rutea a Rolando.
La evidencia a favor del bot es mayormente de vendors (Conferbot, Chatonbo, getaiform) y no es reproducible; se trata como hipótesis, no como dato.

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
