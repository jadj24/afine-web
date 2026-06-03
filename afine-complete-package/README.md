# AFINE - Cursos de Finanzas

## Contenido del Paquete
Sitio web profesional de AFINE con video de presentación.

## Estructura
- /dist → Archivos para subir al hosting
- /src → Código fuente (para modificaciones)
- /dist/video → Videos y audio

## Cómo usar

### Opción 1 - Subir al hosting
Sube el contenido de /dist a tu hosting (Netlify, Vercel, etc.)

### Opción 2 - Modificar y compilar
1. pnpm install
2. pnpm run dev (desarrollo)
3. Edita src/App.tsx
4. pnpm run build (genera nuevo /dist)

## Agregar video de YouTube
En src/App.tsx, línea ~213, cambia:
`src="https://www.youtube.com/embed/YOUR_VIDEO_ID"`
por tu ID de video de YouTube

## Contacto AFINE
- WhatsApp: 999 453 0002
- Email: afinemerida@gmail.com

Creado por MiniMax Agent para AFINE
