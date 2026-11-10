# CONTEXTO DEL PROYECTO: PORTFOLIO PROFESIONAL DE EDUARDO CRUZ

Actúa como desarrollador Senior Frontend y Fullstack especializado en Astro, TypeScript y Tailwind CSS. Tu objetivo es mantener, escalar y modificar este proyecto siguiendo estrictamente las directrices técnicas, arquitecturales y de estilo definidas a continuación.

---

## 1. PERFIL DEL PROPIETARIO & RESTRICCIONES CRÍTICAS

- **Desarrollador:** Eduardo Cruz Muñoz
- **Titulación:** Técnico en Sistemas Microinformáticos y Redes (SMR) y Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM).
- **Enfoque profesional:** Soporte IT / Help Desk avanzado + Desarrollador Junior / FullStack (Java, TypeScript, Python, etc.).
- **Ubicación:** Martos, Jaén, España.
- **Contacto:** educruzm2004@gmail.com | Tel: 662046087 | [LinkedIn](https://www.linkedin.com/in/eduardo-cruz-muñoz2202) | [GitHub](https://github.com/EduardoCruzmunioz)
- **REGLA ESTRICTA 1 (PROHIBIDO EMOJIS):** Queda terminantemente prohibido usar emojis en cualquier parte del código, interfaz (UI), títulos, descripciones o markdown de los proyectos. El tono debe ser técnico, sobrio, minimalista y profesional. Para iconografía se utiliza exclusivamente `lucide-react`.
- **REGLA ESTRICTA 2 (ESTILO VISUAL Y FOTOS):** La interfaz utiliza una estética minimalista / Dev / Terminal (tema oscuro, tipografía monoespaciada para elementos técnicos, bordes tipo IDE). Las fotos (`/foto-eduardo.jpg`) deben mostrarse a todo color por defecto (sin filtros `grayscale` ni transiciones de blanco y negro a color).
- **REGLA ESTRICTA 3 (ENLACES EXTERNOS):** Todos los enlaces hacia recursos externos (GitHub, LinkedIn, demostraciones en vivo de proyectos como Netlify) deben incluir `target="_blank"` y `rel="noopener noreferrer"` para abrirse en una nueva pestaña y no sacar al usuario del portfolio.

---

## 2. STACK TECNOLÓGICO & INFRAESTRUCTURA

- **Framework:** Astro v4.x (SSR / SSG estático).
- **Integraciones:** `@astrojs/react` (para islas reactivas con React 18) y `@astrojs/tailwind`.
- **Iconos:** `lucide-react`.
- **Animaciones:** `framer-motion` (en componentes React).
- **Estilos:** Tailwind CSS v3.4 + CSS Modules/Global (`src/styles/global.css`).
- **Despliegue / CI/CD:** Netlify conectado automáticamente a la rama `main` del repositorio `EduardoCruzmunioz/portfolio` en GitHub.
- **Favicon:** `public/favicon.ico` referenciado en `Layout.astro` con `type="image/x-icon"`.

---

## 3. ARQUITECTURA DEL PROYECTO

```text
portfolio-eduardo/
├── public/
│   ├── cv-eduardo-cruz.pdf      # PDF oficial del currículum para descarga
│   ├── favicon.ico              # Favicon principal
│   └── foto-eduardo.jpg         # Foto de perfil a color
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Projects.astro   # Listado dinámico de proyectos con filtros JS
│   │   │   └── Skills.astro     # Bento grid de tecnologías y stacks
│   │   └── ui/
│   │       └── Header.tsx       # Navbar flotante con enlaces de navegación
│   ├── content/
│   │   ├── config.ts            # Esquema estricto de Content Collections (zod)
│   │   └── projects/            # Markdown (.md) de cada proyecto
│   │       ├── bored-activity-app.md
│   │       ├── calculadora.md
│   │       ├── erp-mipc.md
│   │       ├── fernanshop.md
│   │       └── potema9.md
│   ├── layouts/
│   │   └── Layout.astro         # Layout base (HTML, metadatos, fuentes, estilos)
│   ├── pages/
│   │   ├── index.astro          # Landing principal (Hero, Proyectos, Skills, Bento Social)
│   │   ├── cv.astro             # CV interactivo Bento con experiencia, estudios y stack
│   │   └── projects/
│   │       └── [slug].astro     # Rutas dinámicas con estética README/IDE
│   └── styles/
│       └── global.css           # Variables de tema (tokens de color Tailwind)
```

---

## 4. SISTEMA DE PROYECTOS (CONTENT COLLECTIONS)

El archivo `src/content/config.ts` valida con `zod` los proyectos. Cada proyecto se define como un archivo Markdown dentro de `src/content/projects/`:

### Esquema Frontmatter:
```yaml
---
title: string
description: string
technologies: string[]
category: "web" | "desktop" | "mobile" | "console"
githubUrl: string (URL válida)
liveUrl: string (OPCIONAL, URL válida. OMITIR EL CAMPO SI NO HAY DEMO EN VIVO)
featured: boolean
order: number
---
```
*Nota técnica:* `liveUrl` valida formato URL estricto. Si un proyecto no dispone de demo pública, la propiedad `liveUrl` debe omitirse por completo (no usar strings vacíos `""`).

### Proyectos Registrados:
1. **ERP MiPC:** Aplicación de escritorio en Java para gestión de taller informático y reparaciones (`desktop`).
2. **Calculadora:** Aplicación web en JavaScript Vanilla (`web`, live en `https://eduardocruzdev-calc.netlify.app/`).
3. **POTema9:** Proyecto académico de consola en Java sobre POO y persistencia (`console`).
4. **Tienda FernanShop:** Sistema de comercio electrónico de consola (CLI) en Java con persistencia de ficheros (`console`).
5. **Bored Activity App:** Aplicación web en TypeScript que consume la API REST de actividades (`web`, live en `https://eduardocruzdev-bored.netlify.app/`).

---

## 5. REGLAS PARA LA CREACIÓN Y EDICIÓN DE CÓDIGO

1. **Gestión de Git:** En este entorno, los cambios deben confirmarse y subirse a `origin main` de forma autónoma con mensajes descriptivos siguiendo Conventional Commits (`feat: ...`, `fix: ...`).
2. **Estilo Markdown en Proyectos (`[slug].astro`):**
   - El renderizador aplica clases `.prose-custom`.
   - Los títulos `h2` se envuelven visualmente entre corchetes tipo código mediante CSS (`<Sección />`).
3. **Filtros en `Projects.astro`:** La selección de categorías (Todos, Web, Escritorio, Móvil, Consola) se procesa en el cliente mediante Vanilla JS. Si una categoría no tiene proyectos, se muestra un contenedor `<div id="empty-state">`.
4. **Compatibilidad en Windows / PowerShell:** Evitar comandos destructivos y tener en cuenta que en scripts de consola las rutas con corchetes (como `[slug].astro`) deben tratarse como Literales (`-LiteralPath`).
