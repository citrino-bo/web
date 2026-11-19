# Eventos de analítica

Umami mide `citrino.com.bo` con `https://trafico.citrino.com.bo/script.js` en el `<head>` de las ocho páginas, `defer` y el `data-website-id`. Este catálogo es el contrato entre el HTML, `script.js` y los reportes.

Los eventos declarativos salen de atributos: `data-umami-event` nombra el evento y `data-umami-event-<propiedad>` agrega cada propiedad.

|Evento|Propiedades|Origen|
|-|-|-|
|`nav`|`ubicacion`, `destino`|atributos|
|`cta`|`ubicacion`, `destino`|atributos|
|`outbound`|`tipo`, `destino`|atributos|
|`form`|`accion`, `interes`|`script.js`|
|`menu`|`accion`|`script.js`|
|`scroll`|`percent`|`script.js`|
|`engagement-time`|`seconds`|`script.js`|
|`marquesina`|`accion`|`script.js`|
|`mapa`|`accion`, `tipo`, `operacion`, `nivel`, `celdas`|`script.js`|

Los eventos de `script.js` suman `page` con el nombre de la página. El pageview lo registra el script de Umami, sin evento propio.

## Valores

- `ubicacion`: `logo`, `header`, `footer`, `logo-pie`, `legal`, `formulario`, `hero`, `cierre`, `404`, `gracias`
- `destino` en `nav` y `cta`: `inicio`, `inteligencia`, `servicios`, `quienes`, `contacto`, `privacidad`
- `tipo` en `outbound`: `social`, `empresa`, `equipo`, `acceso`, `email`
- `destino` en `outbound`, según `tipo`: `social` → `facebook`, `instagram`, `linkedin`, `tiktok`, `youtube`; `empresa` → `ancora`, `atrio`, `urbanova`, `en-real-estate`, `expo`; `equipo` → `franzchirig1996`, `guillermo`, `jorge`, `juliocesarvalenzuelaroca`, `luis`, `roger`, `rolando`; `acceso` → `santa-cruz`, `la-paz`, `cochabamba`; `email` → `info`
- `accion` en `form`: `inicio`, `interes`, `invalido`, `envio`
- `interes` en `form`: `inversion`, `asesoria`, `datos`, `socio-pasivo`, `desarrollo`, `vender`
- `accion` en `menu`: `abre`, `cierra`
- `accion` en `marquesina`: `pausa`, `reanuda`
- `accion` en `mapa`: `carga`, `filtro`, `celda`, `error`, `zoom`; `nivel` en `zoom`: `pais`, `departamento`, `ciudad`, `detalle`
