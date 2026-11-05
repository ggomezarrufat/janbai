# Janbai — Diagnóstico digital

Landing y encuesta gamificada para clasificar empresas (Perfil A/B), mostrar el diagnóstico por zona y ofrecer un plan de trabajo personalizado.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- React Router
- Zustand
- Framer Motion
- Recharts
- Vercel Analytics

## Desarrollo

```bash
npm install
cp .env.example .env
npm run dev
```

Variables de entorno (ver `.env.example`):

- `VITE_WHATSAPP_NUMBER` — número con código de país, sin `+` ni espacios
- `VITE_CALENDAR_URL` — URL de agenda (opcional)

## Scripts

- `npm run dev` — entorno local
- `npm run build` — build de producción
- `npm run preview` — preview del build
- `npm test` — tests de scoring

## Deploy en Vercel

1. Importar el repo en Vercel (preset Vite: build `npm run build`, output `dist`).
2. Configurar `VITE_WHATSAPP_NUMBER` y opcionalmente `VITE_CALENDAR_URL` en Production y Preview.
3. `vercel.json` ya incluye rewrite SPA para React Router.
