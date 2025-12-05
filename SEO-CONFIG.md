# Configuración SEO - Retícula Creativa

Este archivo contiene la configuración centralizada para SEO y redes sociales.

## Información del Sitio

```json
{
  "site": {
    "name": "Retícula Creativa",
    "url": "https://reticulacreativa.com",
    "description": "Comunidad abierta enfocada en el diseño visual en todas sus formas: gráfico, tipográfico, editorial, digital y UI",
    "language": "es",
    "locale": "es_MX",
    "foundingDate": "2024"
  }
}
```

## Redes Sociales

**IMPORTANTE:** Actualiza estas URLs con las reales de tu proyecto.

```json
{
  "social": {
    "facebook": "https://facebook.com/reticulacreativa",
    "twitter": "@reticulacreativa",
    "instagram": "https://instagram.com/reticulacreativa",
    "linkedin": "https://linkedin.com/company/reticula-creativa"
  }
}
```

## Contacto

```json
{
  "contact": {
    "email": "hola@reticulacreativa.com"
  }
}
```

## Imágenes para Redes Sociales

### Open Graph (Facebook/LinkedIn)
- **Tamaño:** 1200x630px
- **Formato:** JPG o PNG
- **Ubicación:** `/assets/og-image.jpg`
- **Contenido sugerido:** Logo + tagline + diseño atractivo

### Twitter Card
- **Tamaño:** 1200x600px
- **Formato:** JPG o PNG
- **Ubicación:** `/assets/twitter-image.jpg`
- **Contenido sugerido:** Similar a Open Graph

### Logo
- **Tamaño:** 512x512px mínimo
- **Formato:** PNG con transparencia
- **Ubicación:** `/assets/logo.png`

## Favicon

Genera un favicon completo usando: https://realfavicongenerator.net/

Archivos necesarios:
- `favicon-32x32.png`
- `favicon-16x16.png`
- `apple-touch-icon.png` (180x180px)
- `favicon.ico` (opcional, para compatibilidad antigua)

## Herramientas de Validación

### SEO General
- Google Search Console: https://search.google.com/search-console
- Bing Webmaster Tools: https://www.bing.com/webmasters

### Structured Data
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/

### Open Graph
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

### Twitter Card
- Twitter Card Validator: https://cards-dev.twitter.com/validator

### Performance
- Google PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/

### Accesibilidad
- WAVE: https://wave.webaim.org/
- axe DevTools: https://www.deque.com/axe/devtools/

## Checklist de Actualización

Cuando despliegues el sitio, actualiza:

- [ ] URL del sitio en todos los meta tags
- [ ] URLs de redes sociales reales
- [ ] Email de contacto
- [ ] Crear y subir imágenes de Open Graph
- [ ] Generar y agregar favicon completo
- [ ] Actualizar `manifest.json` con URLs reales
- [ ] Crear `robots.txt`
- [ ] Crear `sitemap.xml`
- [ ] Verificar en Google Search Console
- [ ] Probar compartir en redes sociales

## Robots.txt Sugerido

```txt
User-agent: *
Allow: /

Sitemap: https://reticulacreativa.com/sitemap.xml
```

## Sitemap.xml

Genera automáticamente o usa herramientas como:
- https://www.xml-sitemaps.com/
- https://www.mysitemapgenerator.com/

## Notas Adicionales

- Todos los meta tags ya están implementados en `index.html`
- El Structured Data (JSON-LD) ya está configurado
- Lazy loading está implementado automáticamente
- Preconnect para recursos externos ya está activo
- Accesibilidad mejorada con skip links y focus visible
