# Portfolio Personal - Eduardo Cruz

Portfolio profesional construido con foco en **rendimiento, accesibilidad y diseño técnico**. Desarrollado con una arquitectura estática (SSG) para garantizar métricas de Lighthouse perfectas (100/100) y SEO optimizado.

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build/) (Generación Estática - Zero JS por defecto).
- **Interactividad:** [React](https://reactjs.org/) (Arquitectura de Islas).
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/).
- **Iconografía:** [Lucide React](https://lucide.dev/).
- **Lenguaje:** TypeScript estricto.

## 📂 Arquitectura de Proyectos (Content Collections)

Este portfolio utiliza un sistema escalable basado en archivos Markdown (`.md`) gestionados mediante *Astro Content Collections* y validados con Zod.

### Cómo añadir un nuevo proyecto

1. Navega a `src/content/projects/`.
2. Crea un nuevo archivo Markdown (ej. `mi-nuevo-proyecto.md`).
3. Añade los metadatos en el encabezado (Frontmatter) y escribe tu caso de éxito en el cuerpo del archivo:

```markdown
---
title: "Nombre del Proyecto"
description: "Breve descripción orientada al valor."
technologies: ["Tech1", "Tech2", "Tech3"]
githubUrl: "https://github.com/tu-usuario/repo"
liveUrl: "https://demo.com"
featured: true
order: 2
---

## El Problema
...

## La Solución
...
```

La página principal y las rutas dinámicas individuales (`/projects/mi-nuevo-proyecto`) se generarán y enlazarán automáticamente.

## 💻 Desarrollo Local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Construir para producción
npm run build
```

## ☁️ Despliegue (Netlify)

El proyecto incluye un archivo `netlify.toml` preconfigurado.
Al conectarlo con Netlify, se configurará automáticamente:
- Comando de build (`npm run build`).
- Directorio público (`dist`).
- Versión de Node.js (v20).
- **Security Headers** para protección contra XSS y Clickjacking.
- Políticas agresivas de caché para los assets compilados.
