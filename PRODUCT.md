# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Inversores que asignan capital a inmuebles en Santa Cruz y el eje troncal (Santa Cruz, La Paz, Cochabamba), en dos perfiles: el comprador-inversor que busca rentabilidad por alquiler y plusvalía, y el socio pasivo que aporta capital o terreno a un desarrollo.

Otros usuarios confirmados: grupo familiar con un inmueble a vender, desarrollador inmobiliario, agente inmobiliario independiente, cámara de desarrolladores, banco, negocio de hotelería y proveedores del sector que necesitan datos de mercado.

Los asociados a la CBDI son un usuario distinto: entran a la plataforma de indicadores sin pasar por el formulario de leads.

## Product Purpose

Citrino es una empresa asesora y gestora de inversiones inmobiliarias: detecta, viabiliza y gestiona oportunidades que responden al mercado. La investigación y los datos son el núcleo del negocio —censo propio y base geoespacial— y alimentan la consultoría, la asesoría de inversión y el desarrollo de proyectos.

El sitio existe para que un visitante entienda esa capacidad analítica, la vea respaldada con cifras propias y deje su requerimiento en el formulario con el interés correcto.

## Positioning

Citrino forma parte del Grupo Empresarial Valenzuela Roca, el único grupo inmobiliario boliviano con una visión integral más allá de la construcción: investigación de mercado, gestión de inversiones, desarrollo, arquitectura, construcción, educación y eventos.

Se distingue de un bróker porque decide con datos propios —censo de nuevos proyectos desde 2013, base de oferta pública geolocalizada y motor de retorno por alquiler— y porque asesora del lado del comprador-inversor, no del vendedor.

## Operating Context

El mercado de referencia es Santa Cruz de la Sierra y el eje troncal; la plataforma de indicadores cubre las tres ciudades.

El sitio es estático y no tiene backend: los formularios se envían a Web3Forms y los datos se sirven desde `data/panel.json`. Estructura de archivos y comandos en `AGENTS.md`.

El formulario de contacto es la acción primaria del sitio. El ruteo por interés vive en `docs/conversion-y-formularios.md`, que es normativo para cualquier cambio en CTAs o formularios.

## Capabilities and Constraints

Tres unidades de negocio: Inteligencia Inmobiliaria (estudios de mercado, plataforma de indicadores, modelos financieros, valoración por rentabilidad, análisis de portafolios), Inversiones Inmobiliarias (perfil de inversión, prospección, visitas y negociación, revisión de títulos y contratos) y Desarrollos Inmobiliarios (capitales pasivos vía SPV por proyecto, gestión integral 360º y desarrollo en aportación de terreno).

Base de datos propia: propiedades geolocalizadas y alquileres de referencia de `citrino-central`. El sitio publica sólo un agregado por celdas de ~550 m con piso de k-anonimato, en `data/panel.json`, regenerado con `scripts/agregar_panel.py` desde la base privada de `citrino-gestion`.

El campo `zona` es texto libre, no un catálogo: no se publica una cantidad de zonas porque ese número no existe todavía, y el catálogo con identificador y geometría es una deuda de `citrino-central`.

Censo de nuevos proyectos desde 2013 con datos comerciales y técnicos por proyecto, y censo de oferta pública online donde la data cruda se estructura con inteligencia artificial.

Plataforma de Inteligencia Inmobiliaria: paneles de indicadores por ciudad en Looker Studio, con acceso para asociados CBDI y un camino alternativo de contacto para no asociados.

Restricción de datos: la base individual —coordenadas, precios, superficies— nunca se publica ni se versiona, porque el repo es público.

## Brand Commitments

Nombre completo: Citrino Capitales Inmobiliarios. Tagline: "Inteligencia de Datos para Capitales Inmobiliarios".

Tono: autoridad serena, precisa e institucional. Personalidad premium y orientada a datos, con la sensación de una firma de inteligencia, no la de un bróker.

Identidad visual obligatoria: los logos de Citrino en versión clara y oscura, los de las unidades de negocio y los de las empresas del grupo, en `docs/refactorizacion_octubre_26/input_julio/Logos/`.

Grupo y afiliaciones públicas: Atrio, Urbanova, MegaObras, Ancora, Expo Real Estate Bolivia y EN Real Estate. La alianza con la CBDI es pública y se comunica con sus logos.

## Evidence on Hand

Cifras y logros: los publicados en el hero y la banda de censo de `index.html`, y los del grupo en `quienes-somos.html`. Se leen de la página, no se copian acá.

Logos de clientes y fotos del equipo en `assets/` y en `docs/refactorizacion_octubre_26/input_julio/`; nombres y roles publicados en `quienes-somos.html`.

No hay testimonios escritos, casos de estudio ni precios publicados: ese material no se inventa.

## Product Principles

1. **Los datos son el producto.** Toda afirmación se apoya en una cifra, un censo o un mapa propio; lo que no se puede medir no se declara.
2. **Del lado del inversor.** La asesoría se ejerce como representante del comprador: el interés del cliente manda sobre la comisión.
3. **Integralidad del grupo.** Citrino no opera solo: la cadena inmobiliaria completa se comunica como ventaja de ejecución.
4. **Una sola puerta de entrada.** El visitante elige qué necesita una vez y ese interés define el ruteo y la propuesta.
5. **Autoridad sin ruido.** Menos elementos, mejor ejecución; sin urgencia artificial ni lenguaje grandilocuente.

## Accessibility & Inclusion

WCAG 2.2 AA como estándar. La audiencia incluye inversores mayores: legibilidad, contraste y tamaño de texto mandan sobre la estética.
