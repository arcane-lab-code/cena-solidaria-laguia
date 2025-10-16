# Cena Solidaria La Guía 2025

Landing page para el evento benéfico "Cena Solidaria La Guía" - Un evento para recaudar fondos para la comunidad local.

## 🎯 Sobre el Proyecto

Sitio web informativo y de inscripción para la Cena Solidaria La Guía, un evento benéfico anual que reúne a la comunidad para apoyar a familias necesitadas.

## ✨ Características

- **Diseño Responsive**: Adaptado para móvil, tablet y desktop
- **Contador Regresivo**: Cuenta atrás hasta el evento
- **Formulario de Inscripción**: Sistema de reserva de plazas
- **Menú Interactivo**: Presentación del menú de la cena
- **Información de la Causa**: Detalles sobre el destino de los fondos
- **Animaciones Suaves**: Efectos visuales al hacer scroll

## 🛠️ Tecnologías

- HTML5
- CSS3 (Variables CSS, Grid, Flexbox)
- JavaScript Vanilla
- nginx (para producción)
- Docker

## 📋 Información del Evento

- **Fecha**: Sábado 15 de Marzo, 2025
- **Hora**: 20:30h
- **Lugar**: Salón Cultural La Guía
- **Precio**: €35 por persona / €320 mesa completa (10 personas)

## 🚀 Deployment

### Con Docker

```bash
# Build
docker build -t cena-solidaria-laguia .

# Run
docker run -d -p 80:80 cena-solidaria-laguia
```

### Local (desarrollo)

Simplemente abre `index.html` en tu navegador o usa un servidor local:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve
```

## 📁 Estructura del Proyecto

```
cena-solidaria-laguia/
├── index.html           # Página principal
├── assets/
│   ├── css/
│   │   └── styles.css   # Estilos
│   ├── js/
│   │   └── script.js    # JavaScript
│   └── images/          # Imágenes (vacío por ahora)
├── Dockerfile           # Configuración Docker
├── nginx.conf           # Configuración nginx
├── .gitignore
└── README.md
```

## 🎨 Paleta de Colores

- Primary: `#e74c3c` (Rojo)
- Secondary: `#c0392b` (Rojo oscuro)
- Accent: `#f39c12` (Naranja/Dorado)
- Text Dark: `#2c3e50`
- Background Light: `#ecf0f1`

## 📱 Secciones

1. **Hero**: Banner principal con información clave
2. **Contador**: Cuenta regresiva hasta el evento
3. **Evento**: Detalles sobre la cena
4. **Causa**: Información sobre el objetivo benéfico
5. **Menú**: Platos que se servirán
6. **Inscripción**: Formulario de reserva
7. **Contacto**: Información de contacto

## 🔧 Personalización

Para personalizar el evento:

1. **Fecha del evento**: Editar en `assets/js/script.js` línea 28
2. **Información de contacto**: Editar en `index.html` sección `#contacto`
3. **Menú**: Modificar en `index.html` sección `#menu`
4. **Precios**: Actualizar en `index.html` sección `#inscripcion`

## 📞 Contacto

- **Email**: info@cenasolidarialaguia.es
- **Teléfono**: +34 666 123 456
- **Ubicación**: Salón Cultural La Guía, Calle Principal, 123

## 📄 Licencia

Este proyecto fue creado para el evento Cena Solidaria La Guía 2025.

---

**Desarrollado con ❤️ por ArcaneCode Labs**
**Fecha**: 2025-10-16
