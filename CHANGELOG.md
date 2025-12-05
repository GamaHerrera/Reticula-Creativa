# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [Unreleased]

### Agregado
- Documentación completa del proyecto
- Guía de contribución (CONTRIBUTING.md)
- Este archivo de changelog

## [1.2.0] - 2025-12-05

### Agregado
- Mejoras completas de SEO
  - Meta tags (description, keywords, author)
  - Open Graph tags para Facebook/LinkedIn
  - Twitter Cards
  - Structured Data (JSON-LD) para Organization
  - Canonical URL
  - Favicon completo
- Optimizaciones de performance
  - Preconnect para recursos externos
  - Font-display: swap en fuentes
  - Scripts con defer
  - Lazy loading automático de imágenes
- Mejoras de accesibilidad
  - Skip link para navegación por teclado
  - Focus visible mejorado
  - Contraste WCAG 2.1 AA
  - Soporte para reduced motion
  - Tamaño mínimo de toque (44x44px)
- Archivos CSS modulares
  - `css/base.css` - Variables y estilos base
  - `css/responsive.css` - Correcciones responsive
  - `css/accessibility.css` - Mejoras de accesibilidad
- Documentación
  - SEO-CONFIG.md con guía de configuración
  - CONTRIBUTING.md con estándares de código

### Corregido
- Error crítico en `animations.js` (función setupThemeSwitcher no definida)
- Archivo `script.js` faltante creado con funcionalidad consolidada
- Código de MixItUp no utilizado eliminado
- Referencias de ScrollReveal actualizadas a elementos existentes
- Problemas de responsive design en móvil y tablet
  - Menú móvil funcional
  - Hero section adaptado
  - Grids responsive
  - Formulario adaptado
  - Footer responsive

### Cambiado
- Título de página mejorado para SEO
- Estructura CSS modularizada
- Scripts optimizados con defer

## [1.1.0] - 2024-XX-XX

### Agregado
- Carrusel de artículos con Glide.js
- Animaciones con anime.js
- Formulario de envío de artículos
- Validación de archivos en frontend
- Contador de palabras en tiempo real
- Service Worker para PWA
- Manifest.json configurado

### Corregido
- Mejoras en responsive design
- Optimizaciones de performance

## [1.0.0] - 2024-XX-XX

### Agregado
- Versión inicial del sitio
- Hero section
- Sección "Sobre Nosotros"
- Artículos destacados
- Artículos recientes
- Formulario de contacto
- Footer con enlaces
- Navegación responsive
- Diseño mobile-first

---

## Tipos de Cambios

- `Agregado` - para nuevas funcionalidades
- `Cambiado` - para cambios en funcionalidades existentes
- `Obsoleto` - para funcionalidades que serán eliminadas
- `Eliminado` - para funcionalidades eliminadas
- `Corregido` - para corrección de bugs
- `Seguridad` - para vulnerabilidades

---

[Unreleased]: https://github.com/tu-usuario/Reticula-Creativa/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/tu-usuario/Reticula-Creativa/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/tu-usuario/Reticula-Creativa/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/tu-usuario/Reticula-Creativa/releases/tag/v1.0.0
