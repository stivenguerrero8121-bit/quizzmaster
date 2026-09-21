# QuizzMaster

Versión estática y responsive de QuizzMaster, preparada para GitHub Pages.

## Incluye
- 120 preguntas de cultura general.
- 15 preguntas por categoría.
- 10 preguntas por partida.
- Sin repetición de preguntas dentro de una partida.
- Temporizador de 15 segundos.
- 100 puntos base + bonificación de hasta 50 por rapidez.
- Racha y racha máxima.
- Explicación después de responder.
- Diseño mobile-first para celular y responsive para PC.
- PWA básica: manifest + service worker + iconos.
- No necesita servidor, base de datos ni API.

## Publicar en GitHub Pages

1. Sube todos estos archivos al repositorio.
2. En GitHub abre `Settings` → `Pages`.
3. En **Build and deployment**, selecciona:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Guarda.
5. GitHub generará una URL parecida a:
   `https://TU-USUARIO.github.io/quizzmaster/`

## Importante
No renombres ni muevas `index.html`, `styles.css`, `questions.js`, `app.js`, `manifest.webmanifest` o `sw.js` fuera de la raíz sin actualizar las rutas.

## Prueba local
Abre `index.html` en el navegador. Para probar el service worker/PWA correctamente se recomienda servir la carpeta con HTTPS (GitHub Pages ya lo hace).
