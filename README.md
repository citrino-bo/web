# Citrino Capitales Inmobiliarios

Sitio web estático profesional para Citrino Capitales Inmobiliarios, empresa especializada en análisis de datos e intermediación inmobiliaria en Santa Cruz, Bolivia.

## Descripción

Citrino Capitales Inmobiliarios es una empresa basada en Santa Cruz, Bolivia, que se especializa en:

- Recopilación de datos georreferenciados del sector inmobiliario desde fuentes públicas y privadas
- Análisis de rentabilidad de inmuebles por zonas específicas
- Consultorías para inversores corporativos con estrategias personalizadas
- Generación y socialización de presentaciones sobre diagnóstico y perspectivas del sector inmobiliario

### Propuesta de Valor

- Asesoramiento integral a inversores particulares y corporativos
- Big data especializado para el sector inmobiliario
- Conocimiento profundo del mercado local de Santa Cruz

## Características Técnicas

- Diseño responsivo adaptado a todos los dispositivos (mobile-first)
- Navegación fluida con scroll suave entre secciones
- Optimizado para GitHub Pages
- Sin dependencias externas complejas (solo HTML, CSS, JS vanilla)
- Colores corporativos: Azul (#002857) y Naranja (#ee7900)

## Estructura del Proyecto

```
web_citrino/
├── index.html           # Página principal
├── styles.css           # Estilos CSS con variables
├── script.js            # Funcionalidad JavaScript
├── privacidad.html      # Política de privacidad
├── CHANGELOG.md         # Historial de cambios
├── ROADMAP.md           # Roadmap de mejoras
├── README.md            # Documentación
└── .gitignore          # Archivos excluidos de Git
```

## Secciones del Sitio

### Hero
- Título principal con propuesta de valor
- Descripción del servicio
- Llamadas a la acción (Contacto, Servicios)

### Servicios (actualmente comentado)
- Recopilación de Datos Georreferenciados
- Análisis de Rentabilidad por Zonas
- Consultorías para Inversores Corporativos
- Presentaciones del Sector

### Diferenciadores
- Asesoramiento Integral
- Big Data Especializado
- Enfoque Local

### Nosotros
- Descripción de la empresa y su enfoque

### Contacto
- Ubicación: Santa Cruz, Bolivia
- Email: citrinocapitalesinmobiliario@gmail.com

### Redes Sociales
- Facebook: https://www.facebook.com/citrinocapitalesinmobiliarios
- Instagram: https://www.instagram.com/citrinoinversion/
- TikTok: https://www.tiktok.com/@citrinoinversion
- LinkedIn: https://www.linkedin.com/company/citrino-capitales-inmobiliarios/
- YouTube: https://www.youtube.com/@citrinocapitalesinmobiliarios

## Colores Corporativos

- **Primario (Azul)**: `#002857`
  - Logo
  - Header
  - Hero background
  - Sección diferenciadores
  - Títulos de sección

- **Secundario (Naranja)**: `#ee7900`
  - Botones CTA
  - Hover enlaces
  - Footer logo
  - Iconos de diferenciadores
  - Redes sociales hover

- **Variantes**:
  - Naranja hover: `#cc6a00`
  - Azul oscuro (degradado): `#001a38`
  - Azul medio (degradado): `#004080`

## Despliegue en GitHub Pages

### Paso 1: Crear Repositorio

1. Ve a [github.com](https://github.com)
2. Crea un nuevo repositorio: `citrino-web`
3. Inicializa con README (opcional)

### Paso 2: Subir Archivos

```bash
# Inicializar repositorio local
git init

# Agregar todos los archivos
git add .

# Crear primer commit
git commit -m "Initial commit - Citrino web"

# Renombrar rama a main
git branch -M main

# Conectar con repositorio remoto
git remote add origin https://github.com/TU_USUARIO/citrino-web.git

# Subir al repositorio
git push -u origin main
```

### Paso 3: Activar GitHub Pages

1. Ve a **Settings** > **Pages**
2. En **Source**, selecciona **Deploy from a branch**
3. En **Branch**, selecciona `main` y `/ (root)`
4. Haz clic en **Save**

### Paso 4: Acceder al Sitio

El sitio estará disponible en: `https://TU_USUARIO.github.io/citrino-web/`

El despliegue suele tardar 1-3 minutos.

## Dominio Personalizado (Opcional)

### Paso 1: Configurar DNS

Si tienes un dominio propio, configura los siguientes registros:

```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

### Paso 2: Crear Archivo CNAME

Crea un archivo `CNAME` en la raíz del repositorio con tu dominio:

```
www.tudominio.bo
```

### Paso 3: Configurar en GitHub

1. Ve a **Settings** > **Pages**
2. En **Custom domain**, ingresa tu dominio
3. Haz clic en **Save**
4. Espera la propagación DNS (hasta 48 horas)

## Personalización

### Modificar Contenido

Los archivos principales son:

- **index.html**: Estructura y contenido
- **styles.css**: Estilos y diseño
- **script.js**: Funcionalidad interactiva

### Modificar Colores

En `styles.css`, ajusta las variables CSS:

```css
:root {
    --primary-color: #002857;
    --secondary-color: #ee7900;
    --accent-color: #10b981;
}
```

### Agregar Logo

1. Prepara tu logo en formato PNG o SVG
2. Colócalo en la carpeta `/assets/images/`
3. Reemplaza el texto del logo en `index.html`:

```html
<a href="#" class="logo">
    <img src="assets/images/logo.svg" alt="Citrino Logo">
</a>
```

### Agregar Favicon

1. Crea un favicon (recomendado: 32x32px o 16x16px)
2. Colócalo en la raíz como `favicon.ico`
3. Agrega el link en `index.html`:

```html
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

## Scripts Disponibles

### Desarrollo

No se requiere proceso de build. Simplemente:

```bash
# Abrir en navegador
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux
```

### Opcional: Live Server

Para desarrollo con recarga automática:

```bash
# Si tienes Node.js instalado
npm install -g live-server
live-server
```

## Optimización

### Performance

- Imágenes optimizadas en formato WebP cuando sea posible
- CSS y JS sin dependencias externas
- Carga rápida debido a contenido estático

### SEO

Meta tags configurados en `index.html`:

```html
<meta name="description" content="...">
<title>Citrino Capitales Inmobiliarios | Data & Real Estate</title>
```

## Políticas

### Política de Privacidad

Ver archivo `privacidad.html` para la política de privacidad adaptada a la legislación boliviana.

### Cookies

El sitio actualmente no utiliza cookies ni recopila datos personales de usuarios.

## Soporte y Contacto

Para información sobre Citrino Capitales Inmobiliarios:

- **Ubicación**: Santa Cruz, Bolivia
- **Email**: citrinocapitalesinmobiliario@gmail.com
- **Facebook**: https://www.facebook.com/citrinocapitalesinmobiliarios
- **Instagram**: https://www.instagram.com/citrinoinversion/
- **TikTok**: https://www.tiktok.com/@citrinoinversion
- **LinkedIn**: https://www.linkedin.com/company/citrino-capitales-inmobiliarios/
- **YouTube**: https://www.youtube.com/@citrinocapitalesinmobiliarios

## Roadmap

Ver archivo `ROADMAP.md` para las mejoras y features pendientes.

## Changelog

Ver archivo `CHANGELOG.md` para el historial de cambios.

## Licencia

© 2025 Citrino Capitales Inmobiliarios. Todos los derechos reservados.

## Créditos

- Iconos: SVG integrados
- Fuente: Inter (Google Fonts)
- Diseño: Sitio estático profesional para GitHub Pages
