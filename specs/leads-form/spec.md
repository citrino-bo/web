# Spec: formulario de captación de leads

## Problema

Todos los leads entran por `wa.me` sin estructura; no se pueden filtrar ni derivar.
El dueño recibe volumen creciente y no logra calificarlo.

## Objetivo

Un formulario de calificación que (1) capture el interés, (2) rutee al responsable correcto y (3) sea el único destino de conversión del sitio.
Criterios completos en `docs/conversion-y-formularios.md`.

## Alcance

- Superficie: sección de conversión de la home (reemplaza las tarjetas de contacto). Luego, página de contacto.
- Campos: interés (rutea) → nombre → WhatsApp o email → mensaje (opcional) → consentimiento.
- Interés: las cuatro opciones que rutean (desarrollar terreno, datos/monitoreo, invertir, vender).
- Ruteo por asunto: `[Desarrollo]`/`[Datos]` → Nicolás; `[Inversión]`/`[Vender]` → Rolando.
- Envío sin backend: Web3Forms con `POST` nativo y `redirect` a `gracias.html`.
- Accesibilidad WCAG 2.2 AA: etiquetas visibles, foco visible, targets 44px, inputs 16px.
- Anti-spam: honeypot `botcheck` del servicio.
- Instrumentado con Umami.

## No-goals

- Backend propio / CRM.
- Chatbot (va en Fase 2, issue #16).
- Reemplazo de `wa.me` en otras páginas antes de verificar este formulario.

## Orden

Construir → verificar (envío real con la key cargada) → recién entonces quitar los `wa.me` (issue #5).

## Estados

Default, focus, hover, validación nativa del navegador (error), honeypot lleno (se descarta en el servicio), confirmación en `gracias.html`.

## Verificación

Envío real desde desktop y mobile; confirmar llegada, asunto por interés, consentimiento, ruteo y redirect a `gracias.html`.
