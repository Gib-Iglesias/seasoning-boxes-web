# 🎁 Seasoning Boxes

E-commerce de cajitas sorpresa temáticas. Enviado desde St Albans, UK.

## Stack
- **Next.js 14** + TypeScript
- **Tailwind CSS** + Framer Motion
- **next-intl** (EN / ES)
- **Clerk** (autenticación)
- **Supabase** (base de datos — Fase 2)
- **Stripe** (pagos — Fase 3)

## Setup local

1. Clonar el repo
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Copiar variables de entorno:
   ```bash
   cp .env.local.example .env.local
   ```
4. Llenar `.env.local` con tus claves de Clerk (mínimo para Fase 1):
   - Crear cuenta en https://clerk.com
   - Crear una nueva aplicación
   - Copiar `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` y `CLERK_SECRET_KEY`

5. Arrancar en desarrollo:
   ```bash
   npm run dev
   ```

6. Abrir http://localhost:3000

## Deploy en Vercel

1. Push a GitHub
2. Importar en https://vercel.com
3. Agregar las variables de `.env.local` en Vercel → Settings → Environment Variables
4. Deploy automático

## Estructura

```
seasoning-boxes/
├── app/
│   ├── [locale]/          ← Rutas EN/ES
│   │   ├── page.tsx       ← Landing principal
│   │   └── cart/page.tsx  ← Carrito (Fase 2)
│   └── api/               ← Endpoints (Fase 2-3)
├── components/
│   ├── ui/                ← Navbar, Footer
│   ├── themes/            ← HeroSection, ThemeCard, HowItWorks
│   └── configurator/      ← BoxConfigurator con precios dinámicos
├── lib/
│   └── constants.ts       ← Temas, tamaños, precios, ADMIN_EMAIL
├── messages/
│   ├── en.json            ← Traducciones inglés
│   └── es.json            ← Traducciones español
└── i18n/                  ← Configuración next-intl
```

## Admin
Email de admin hardcodeado: `goku.simpson.9517@gmail.com`
Para cambiarlo: editar `lib/constants.ts` → `ADMIN_EMAIL`

## Fases pendientes
- **Fase 2**: Supabase (DB, inventario, carrito persistente, auth completo)
- **Fase 3**: Stripe (checkout, webhooks, confirmación de pedidos)
- **Fase 4**: Panel admin (inventario, pedidos, disponibilidad)
