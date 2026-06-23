# Sitio web propuesto - Dr. Juan José Quiroz Ramírez

## Qué contiene
Este paquete incluye una propuesta completa de sitio estático en HTML/CSS/JS para presentar al Dr. Juan José Quiroz Ramírez como investigador de alto nivel, con énfasis en procesos químicos sustentables, intensificación de procesos, agua, energía, IA ambiental, transferencia tecnológica, docencia y divulgación.

## Archivos principales
- `index.html`: página principal.
- `proyectos.html`: portafolio de proyectos.
- `publicaciones.html`: producción científica seleccionada con filtros.
- `desarrollo-tecnologico.html`: innovación, TRL y propiedad intelectual.
- `docencia.html`: cursos, mentoría y formación.
- `divulgacion.html`: comunicación pública de la ciencia.
- `agenda.html`: agenda editable.
- `cv_publico.html`: CV público curado sin datos sensibles.
- `curso01.html`, `curso_OBIM-5.html`, `curso_mapas_R.html`: páginas de cursos propuestos.
- `proyecto01.html`, `proyecto02.html`: fichas de proyectos insignia.
- `assets/css/styles.css`: estilos globales.
- `assets/js/main.js`: menú móvil y filtros.
- `assets/img/`: fotografía de perfil y gráficos SVG.
- `panel_expertos.md`: propuesta del panel de 4 expertos.

## Cómo visualizar
Abra `index.html` en un navegador. Para probar enlaces locales de forma más estable, puede servir la carpeta con:

```bash
python -m http.server 8000
```

Luego abra `http://localhost:8000`.

## Qué conviene completar antes de publicar
1. Confirmar datos bibliométricos actualizados y enlaces DOI.
2. Sustituir o añadir fotografías de laboratorio, prototipos, estudiantes y actividades de divulgación.
3. Agregar fechas reales en `agenda.html`.
4. Validar nombres oficiales de patentes/solicitudes con la oficina jurídica o transferencia tecnológica.
5. Si el sitio será público, mantener fuera datos sensibles como CURP, RFC, teléfono personal, domicilio y contactos de emergencia.
