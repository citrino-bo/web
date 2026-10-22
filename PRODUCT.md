# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Inversores que asignan capital a inmuebles en Santa Cruz y el eje troncal (Santa Cruz, La Paz, Cochabamba), con dos perfiles: el comprador-inversor que busca rentabilidad por alquiler y plusvalía, y el socio pasivo que aporta capital o terreno a un desarrollo.
Desarrolladores y propietarios de terrenos que necesitan decidir si conviene desarrollar y a qué precio, y empresas o instituciones del sector (bancos, aseguradoras, constructoras, proveedores, cámaras) que necesitan datos de mercado.
Segmentos confirmados: grupo familiar con inmueble a vender, desarrollador inmobiliario, vendedor de inmueble familiar, cámara de desarrolladores, inversor independiente local, agente inmobiliario independiente, banco y negocio de hotelería.
Los asociados a la Cámara Boliviana de Desarrolladores Inmobiliarios (CBDI) son un usuario distinto: acceden a la plataforma de indicadores sin pasar por el formulario de leads.

## Product Purpose

Citrino Capitales Inmobiliarios es una empresa asesora y gestora de inversiones inmobiliarias cuyo objetivo es detectar, viabilizar y gestionar oportunidades que respondan a las necesidades y circunstancias del mercado.
La investigación y los datos son el núcleo del negocio: el censo propio y la base geoespacial alimentan la consultoría, la asesoría de inversión y el desarrollo de proyectos.
El sitio existe para que un visitante entienda esa capacidad analítica, la vea respaldada con cifras y datos reales, y deje su requerimiento en el formulario de contacto con el interés correcto.

## Positioning

Citrino es parte del Grupo Empresarial Valenzuela Roca, el único grupo inmobiliario boliviano con una visión integral más allá de la construcción: investigación de mercado, gestión de inversiones, desarrollo, arquitectura, construcción, educación y eventos en un mismo grupo.
Se distingue de un bróker o de una agencia tradicional porque decide con datos propios: censo de nuevos proyectos desde 2013, base de oferta pública geolocalizada y motor de retorno por alquiler.
La asesoría se ejerce del lado del comprador-inversor, no del vendedor.

## Operating Context

El mercado de referencia es Santa Cruz de la Sierra y el eje troncal del país; la plataforma de indicadores cubre Santa Cruz, Cochabamba y La Paz.
El sitio es estático (HTML, CSS y JS sin build), se publica en GitHub Pages bajo `citrino.com.bo` y no tiene backend propio: los formularios se envían a Web3Forms y el contenido de datos se sirve desde `data/propiedades.json`.
La navegación objetivo del refactor de octubre de 2026 es Inicio, Inteligencia Inmobiliaria, Nuestros Servicios, Quiénes Somos y Contacto, según `docs/refactorizacion_octubre_26/input_julio`; el sitio publicado todavía usa Inicio, Datos, Inteligencia y Contacto.
El ruteo de leads por interés está documentado en `docs/conversion-y-formularios.md` y es normativo para cualquier cambio en CTAs o formularios.

## Capabilities and Constraints

Unidades de negocio confirmadas: Citrino Inteligencia Inmobiliaria (estudios de mercado, plataforma de inteligencia, modelos financieros de proyecto, valoración por rentabilidad, análisis y reestructuración de portafolios), Citrino Inversiones Inmobiliarias (perfil de inversión, prospección, visitas y negociación, revisión de títulos y contratos) y Citrino Desarrollos Inmobiliarios (capitales pasivos vía SPV por proyecto, gestión inmobiliaria integral 360º y desarrollo en aportación de terreno).
Base de datos propia: 23.222 propiedades geolocalizadas, 948 zonas y 4.080 alquileres de referencia, generados en `data/propiedades.json` (fuente `citrino-central vw_inmuebles_inversor`, corte 2026-09-11); alquiler 4.080, venta 18.808, anticrético 334.
Censo de nuevos proyectos: 1.813 proyectos y 74.905 inmuebles desde 2013 — Santa Cruz 902 proyectos / 41.555 inmuebles, La Paz 85 / 28.749, Cochabamba 56 / 4.601 — con datos comerciales y técnicos por proyecto.
Censo de oferta pública online: la data cruda se transforma con inteligencia artificial en campos geolocalizados y estructurados de inmuebles residenciales, comerciales, industriales y terrenos.
Cifras de negocio declaradas: más de 1,5 millones de dólares gestionados en proyectos, más de 8,5 millones intermediados en inversiones y más de 50 asesoramientos personalizados.
Plataforma de Inteligencia Inmobiliaria: paneles de indicadores por ciudad (ciclo y censo, financiamiento al sector, análisis evolutivo) en Looker Studio, con acceso para asociados CBDI y un camino alternativo de contacto para no asociados.
El formulario de contacto es la acción primaria del sitio; un solo formulario, con el interés como primer campo, rutea el lead al responsable correspondiente.
Restricción de datos: `data/propiedades.json` se genera desde `citrino-gestion`; no se edita a mano.

## Brand Commitments

Nombre completo: Citrino Capitales Inmobiliarios. Tagline: "Inteligencia de Datos para Capitales Inmobiliarios".
Tono: autoridad serena, precisa e institucional; la inteligencia es el producto y el sector inmobiliario es la vertical.
Personalidad: premium, sofisticada y orientada a datos; la sensación de una firma de inteligencia exclusiva, no la de un bróker inmobiliario.
Identidad visual obligatoria: logos de Citrino en versión clara y oscura, logos de las unidades de negocio y logos de las empresas del grupo, todos en `docs/refactorizacion_octubre_26/input_julio/Logos/`.
Grupo y afiliaciones públicas: Atrio (arquitectura y construcción), Urbanova (desarrollo), MegaObras (construcción), Ancora (administración de propiedades), Expo Real Estate Bolivia (congreso y salón inmobiliario) y EN Real Estate (escuela de negocios en bienes raíces).
La alianza con la CBDI es pública y se comunica con sus logos.

## Evidence on Hand

Cifras del negocio y del censo (1,5M$ gestionados, 8,5M$ intermediados, 50+ asesoramientos, 1.813 proyectos, 74.905 inmuebles) tomadas del brief de refactor.
Logros de las empresas del grupo: más de 40 años de experiencia en desarrollos inmobiliarios; Urbanova con más de 2.300 viviendas entregadas y más de 100 millones de dólares en ventas de proyectos concluidos; MegaObras socia de Graña y Montero, con el primer sistema de construcción industrializado de Bolivia; Expo Real Estate Bolivia como versión local del evento de real estate más importante de Sudamérica.
Logos de clientes en `assets/logos prueba social/Logos Clientes/`: Niemeyer, Synergy, Comversa, Grupo Nacional Vida, Banco Económico, Banco Mercantil Santa Cruz y CBDI.
Fotos y roles del equipo en `docs/refactorizacion_octubre_26/input_julio/Fotos Equipo/`: Julio César Valenzuela Roca (Gerente General), Rolando Valenzuela Roca (Gerente Inversiones Inmobiliarias), Luis Adolfo Valenzuela Roca (Gerente Desarrollos Inmobiliarios), Franz Chiri G. (Analista de datos), Roger Miranda T. (Economista urbano), Alejandro Moscoso R. (Asesor de Inversiones Inmobiliarias) y Guillermo Orias G. (Producción audiovisual). Nicolás Vincenti W. (Gerente Inteligencia Inmobiliaria) figura en el brief sin foto en esa carpeta.
Paneles públicos de la plataforma: reportes de Looker Studio de Santa Cruz, Cochabamba y La Paz enlazados desde `/inteligencia-inmobiliaria/`.
No hay testimonios escritos, casos de estudio ni precios publicados; ese material no debe inventarse.

## Product Principles

1. **Los datos son el producto.** Toda afirmación del sitio se apoya en una cifra, un censo o un mapa propio; lo que no se puede medir no se declara.

2. **Del lado del inversor.** La asesoría se ejerce como representante del comprador-inversor: el interés del cliente manda sobre la comisión.

3. **Integralidad del grupo.** Citrino no opera solo: forma parte de una cadena inmobiliaria completa y la comunica como ventaja de ejecución.

4. **Una sola puerta de entrada.** Cada visitante elige qué necesita una vez, y ese interés define el ruteo interno y la propuesta que recibe.

5. **Autoridad sin ruido.** Menos elementos, mejor ejecución; sin urgencia artificial ni lenguaje grandilocuente.

## Accessibility & Inclusion

WCAG 2.2 AA como estándar objetivo.
La audiencia incluye inversores mayores: legibilidad, contraste y tamaños de texto mandan sobre la estética.
Soporte de `prefers-reduced-motion` para las animaciones de entrada, contadores y marquesina.
