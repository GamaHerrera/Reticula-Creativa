# Guía de Contribución - Retícula Creativa

¡Gracias por tu interés en contribuir a Retícula Creativa! Esta guía te ayudará a empezar.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Cómo Contribuir](#cómo-contribuir)
- [Configuración del Entorno](#configuración-del-entorno)
- [Estándares de Código](#estándares-de-código)
- [Proceso de Pull Request](#proceso-de-pull-request)
- [Convenciones de Commits](#convenciones-de-commits)

---

## 🤝 Código de Conducta

Este proyecto se adhiere a un código de conducta. Al participar, se espera que mantengas este código. Por favor reporta comportamientos inaceptables.

**Principios:**
- Sé respetuoso y considerado
- Acepta críticas constructivas
- Enfócate en lo mejor para la comunidad
- Muestra empatía hacia otros miembros

---

## 🚀 Cómo Contribuir

### Reportar Bugs

Si encuentras un bug, por favor crea un issue con:
- **Descripción clara** del problema
- **Pasos para reproducir** el bug
- **Comportamiento esperado** vs **comportamiento actual**
- **Screenshots** si es aplicable
- **Entorno** (navegador, OS, versión)

### Sugerir Mejoras

Para sugerir nuevas funcionalidades:
- Verifica que no exista un issue similar
- Describe claramente la funcionalidad
- Explica por qué sería útil
- Proporciona ejemplos de uso

### Contribuir Código

1. **Fork** el repositorio
2. **Crea una rama** para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Haz commit** de tus cambios
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre un Pull Request**

---

## 💻 Configuración del Entorno

### Requisitos Previos

- Node.js (v14 o superior)
- npm o yarn
- Git

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/Reticula-Creativa.git
cd Reticula-Creativa

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

El sitio estará disponible en `http://localhost:8080`

### Scripts Disponibles

```bash
npm start          # Inicia el servidor de desarrollo
npm run build      # Construye para producción
npm run watch:css  # Observa cambios en CSS
```

---

## 📝 Estándares de Código

### HTML

- Usa HTML5 semántico
- Indentación: 4 espacios
- Atributos en orden: `class`, `id`, `data-*`, otros
- Siempre incluye `alt` en imágenes
- Usa ARIA labels cuando sea necesario

```html
<!-- ✅ Correcto -->
<article class="article-card" id="article-1" data-category="design">
    <img src="image.jpg" alt="Descripción clara">
</article>

<!-- ❌ Incorrecto -->
<div>
    <img src="image.jpg">
</div>
```

### CSS

- Usa variables CSS para colores y valores reutilizables
- Nomenclatura: BEM o similar
- Indentación: 2 espacios
- Mobile-first approach
- Agrupa media queries al final del archivo

```css
/* ✅ Correcto */
.article-card {
  padding: var(--spacing-md);
  background-color: var(--card-bg);
}

.article-card__title {
  font-size: var(--h3-font-size);
  color: var(--text-color);
}

/* ❌ Incorrecto */
.card {
  padding: 20px;
  background: #fff;
}
```

### JavaScript

- ES6+ syntax
- Usa `const` y `let`, evita `var`
- Nombres descriptivos de variables
- Comentarios JSDoc para funciones
- Indentación: 2 espacios

```javascript
// ✅ Correcto
/**
 * Valida el formato de un archivo
 * @param {File} file - Archivo a validar
 * @returns {boolean} True si es válido
 */
const validateFileFormat = (file) => {
  const allowedFormats = ['pdf', 'doc', 'docx'];
  const extension = file.name.split('.').pop().toLowerCase();
  return allowedFormats.includes(extension);
};

// ❌ Incorrecto
function validate(f) {
  var ext = f.name.split('.').pop();
  return ext == 'pdf' || ext == 'doc';
}
```

---

## 🔄 Proceso de Pull Request

### Antes de Enviar

- [ ] El código sigue los estándares del proyecto
- [ ] Has probado tus cambios localmente
- [ ] Has actualizado la documentación si es necesario
- [ ] Tus commits siguen las convenciones
- [ ] No hay conflictos con la rama `main`

### Descripción del PR

Incluye:
- **Qué** cambia el PR
- **Por qué** es necesario el cambio
- **Cómo** se probó
- **Screenshots** si hay cambios visuales
- **Issues relacionados** (#123)

### Template de PR

```markdown
## Descripción
Breve descripción de los cambios

## Tipo de Cambio
- [ ] Bug fix
- [ ] Nueva funcionalidad
- [ ] Mejora de código
- [ ] Documentación

## Checklist
- [ ] Código probado localmente
- [ ] Documentación actualizada
- [ ] Sin errores en consola
- [ ] Responsive verificado
```

---

## 📌 Convenciones de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/)

### Formato

```
<tipo>(<scope>): <descripción>

[cuerpo opcional]

[footer opcional]
```

### Tipos

- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Formato, punto y coma, etc (no afecta código)
- `refactor`: Refactorización de código
- `perf`: Mejora de performance
- `test`: Agregar tests
- `chore`: Cambios en build, herramientas, etc

### Ejemplos

```bash
# Nueva funcionalidad
git commit -m "feat(carousel): agregar navegación por teclado"

# Corrección de bug
git commit -m "fix(form): validar tamaño de archivo correctamente"

# Documentación
git commit -m "docs(readme): actualizar instrucciones de instalación"

# Refactorización
git commit -m "refactor(css): modularizar estilos en archivos separados"
```

---

## 🎨 Guía de Diseño

### Colores

Usa las variables CSS definidas:
- `--primary-color`: #FF6B6B
- `--secondary-color`: #4ECDC4
- `--accent-color`: #C3BCE3
- `--highlight-color`: #FFE66D

### Tipografía

- Fuente principal: Poppins
- Tamaños: Usa variables `--h1-font-size`, `--h2-font-size`, etc.

### Espaciado

Usa variables de espaciado:
- `--mb-0-5`: 0.5rem
- `--mb-1`: 1rem
- `--mb-2`: 2rem

---

## 🧪 Testing

### Manual

Antes de enviar un PR, verifica:
- [ ] Funcionalidad en Chrome, Firefox, Safari
- [ ] Responsive en móvil, tablet, desktop
- [ ] Sin errores en consola del navegador
- [ ] Accesibilidad (navegación por teclado)
- [ ] Performance (Lighthouse > 90)

### Herramientas Recomendadas

- **Chrome DevTools** - Debugging
- **Lighthouse** - Performance y SEO
- **WAVE** - Accesibilidad
- **BrowserStack** - Testing cross-browser

---

## 📚 Recursos

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)
- [A11y Project](https://www.a11yproject.com/)

---

## ❓ Preguntas

Si tienes preguntas, puedes:
- Abrir un issue con la etiqueta `question`
- Contactar al equipo en hola@reticulacreativa.com

---

## 📄 Licencia

Al contribuir, aceptas que tus contribuciones se licenciarán bajo la misma licencia del proyecto.

---

¡Gracias por contribuir a Retícula Creativa! 🎨✨
