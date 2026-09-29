# Proyectos en Markdown

La colección se configura en `src/content.config.ts` (Astro 6).

- `proyectos/-index.md`: título y descripción opcional de la sección (`type: section`).
- `proyectos/proyecto-1/index.md`: datos del primer proyecto (`type: project`).
- `proyectos/proyecto-1/images/`: capturas locales del proyecto.

Para añadir un proyecto, copia `proyecto-1` como `proyecto-2`, `proyecto-3`, etc., cambia los datos de su `index.md` y añade sus imágenes. La colección detecta automáticamente cada nuevo `index.md`: no hace falta editar la página ni registrar el proyecto. Una carpeta vacía no crea un proyecto.

`order` determina el orden; en caso de empate, se usa el número del nombre de carpeta (`proyecto-2` antes de `proyecto-10`). `draft: true` oculta el proyecto. El título, la categoría y la descripción son obligatorios. No uses rutas de imágenes que aún no existen. En producción, vuelve a desplegar el sitio para publicar los nuevos proyectos.

```yaml
type: project
title: Nombre del proyecto
category: Desarrollo web
description: Descripción breve del proyecto.
order: 2
draft: false
technologies: [Astro, React]
href: https://example.com
coverImage: ./images/portada.webp
galleryImages:
  - image: ./images/vista-1.webp
    alt: Vista principal
  - image: ./images/vista-2.webp
    alt: Vista de detalle
  - image: ./images/vista-3.webp
    alt: Vista móvil
```

`galleryImages` acepta hasta tres imágenes con texto alternativo. Si está vacío, se utiliza `coverImage`; si tampoco existe, aparecen los marcadores de imagen actuales. Astro valida y resuelve las rutas relativas al Markdown.

`moreDescription`, `pointDescription` y `steps` son opcionales y están preparados para futuras páginas de detalle. El cuerpo Markdown también puede almacenarlas, pero la carpeta actual solo muestra título, categoría, imágenes y enlace; no se añade un modal ni un desplegable de descripción.
