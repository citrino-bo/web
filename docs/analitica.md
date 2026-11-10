# Eventos de analítica

Umami mide `citrino.com.bo` con un `script.js` por página, `defer` y el `data-website-id` en el `<head>`. Este catálogo es el contrato entre el HTML, `script.js` y los reportes.

Los eventos declarativos salen de atributos: `data-umami-event` nombra el evento y `data-umami-event-<propiedad>` agrega cada propiedad.

|Evento|Propiedades|Origen|
|-|-|-|
|`nav`|`ubicacion`, `destino`|atributos|
|`cta`|`ubicacion`, `destino`|atributos|
|`outbound`|`tipo`, `destino`|atributos|
|`form`|`accion`, `interes`|`script.js`|
|`menu`|`accion`|`script.js`|
|`scroll`|`percent`|`script.js`|
|`seccion`|`id`|`script.js`|
|`engagement-time`|`seconds`|`script.js`|
|`marquesina`|`accion`|`script.js`|
|`mapa`|`accion`, `tipo`, `operacion`, `nivel`, `celdas`|`script.js`|

Los eventos de `script.js` suman `page` con el nombre de la página. El pageview lo registra el script de Umami, sin evento propio.

Umami no filtra propiedades en los goals: un goal apunta a un nombre de evento. Para segmentar por propiedad se usan funnels, que aceptan filtros por paso.

## Valores

- `ubicacion`: `logo`, `header`, `footer`, `logo-pie`, `legal`, `formulario`, `hero`, `cierre`, `404`, `gracias`
- `destino`: `inicio`, `inteligencia`, `servicios`, `quienes`, `contacto`, `privacidad`
- `tipo` en `outbound`: `social`, `empresa`, `equipo`, `acceso`, `email`
- `accion` en `form`: `inicio`, `interes`, `invalido`, `envio`
- `interes` en `form`: `inversion`, `asesoria`, `datos`, `socio-pasivo`, `desarrollo`, `vender`
- `accion` en `menu`: `abre`, `cierra`
- `accion` en `marquesina`: `pausa`, `reanuda`
- `accion` en `mapa`: `carga`, `filtro`, `celda`, `error`, `zoom`; `nivel` en `zoom`: `pais`, `departamento`, `ciudad`, `detalle`
