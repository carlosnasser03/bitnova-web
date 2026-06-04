# Bitnova Backend API

Backend serverless para **Google Analytics tracking** y **CMS (variables de configuración)** del frontend.

## 🏗️ Arquitectura

```
Vercel Serverless Functions (Next.js API Routes)
├── /api/track.ts → Google Analytics tracking
├── /api/auth/login.ts → Authentication
├── /api/config/variables.ts → CMS (Get/Update variables)
└── /lib → Shared utilities (Supabase, JWT, Auth)
         ├── supabase.ts → Database client
         └── auth.ts → JWT & CORS helpers
```

## 🔧 Configuración Inicial

### 1. Crear Supabase Project

1. Ve a [supabase.com](https://supabase.com)
2. Crea un nuevo proyecto
3. Ve a **Settings → API** y copia:
   - `Project URL` → `SUPABASE_URL`
   - `anon public` → `SUPABASE_KEY`
   - `service_role` → `SUPABASE_SERVICE_ROLE_KEY`

### 2. Ejecutar Schema SQL

1. Ve a **SQL Editor** en Supabase
2. Crea una nueva query
3. Copia el contenido de `api/db/schema.sql`
4. Ejecuta ✓

### 3. Configurar Variables de Entorno

```bash
# Copia el archivo de ejemplo
cp api/config.env.example .env.local

# Edita con tus credenciales
SUPABASE_URL=your_project_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
JWT_SECRET=tu_secret_min_32_caracteres
GOOGLE_ANALYTICS_ID=tu_ga_id
```

## 📡 Endpoints

### 1. Track Event (Google Analytics)

**POST** `/api/track`

```typescript
fetch('/api/track', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    event_name: 'page_view',
    event_category: 'engagement',
    event_label: '/',
    user_id: 'user_123',
    session_id: 'session_456',
    metadata: { page: 'home', referrer: 'google' }
  })
})
```

**Response:**
```json
{
  "success": true,
  "message": "Event tracked successfully",
  "data": [{...}]
}
```

### 2. Login (Authentication)

**POST** `/api/auth/login`

Default credentials:
- Username: `admin`
- Password: `admin123`

```typescript
const response = await fetch('/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: 'admin',
    password: 'admin123'
  })
})

const { token } = await response.json()
localStorage.setItem('authToken', token)
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGc...",
  "user": {
    "username": "admin",
    "email": "admin@bitnova.com",
    "role": "admin"
  }
}
```

### 3. Get Config Variables (CMS - Read)

**GET** `/api/config/variables`

No requiere autenticación. Obtén todas las variables:

```typescript
const response = await fetch('/api/config/variables')
const { data } = await response.json()

// data = [
//   { id: '...', key: 'hero.title', value: '"Arquitectura..."', ... },
//   { id: '...', key: 'tesseract.geometry.outerCubeSize', value: '4.5', ... }
// ]
```

**Parámetros opcionales:**
```
GET /api/config/variables?category=hero
GET /api/config/variables?category=tesseract
```

### 4. Update Config Variable (CMS - Write)

**PUT** `/api/config/variables`

Requiere autenticación (JWT token):

```typescript
const token = localStorage.getItem('authToken')

const response = await fetch('/api/config/variables', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    id: 'variable_id_uuid',
    value: '4.8' // Nueva valor
  })
})
```

## 🎯 Uso en Frontend

### Integrar Google Analytics

```typescript
// lib/analytics.ts
export async function trackEvent(event: {
  event_name: string
  event_category: string
  event_label?: string
  metadata?: Record<string, any>
}) {
  const sessionId = localStorage.getItem('sessionId') || crypto.randomUUID()
  localStorage.setItem('sessionId', sessionId)

  return fetch('/api/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...event,
      session_id: sessionId,
      user_id: localStorage.getItem('userId')
    })
  })
}

// Uso:
trackEvent({
  event_name: 'button_click',
  event_category: 'engagement',
  event_label: 'inicializar_nucleo',
  metadata: { timestamp: new Date().toISOString() }
})
```

### Usar Variables Dinámicas del CMS

```typescript
// hooks/useConfig.ts
import { useEffect, useState } from 'react'

export function useConfig(category?: string) {
  const [config, setConfig] = useState<any>(null)

  useEffect(() => {
    const url = category
      ? `/api/config/variables?category=${category}`
      : '/api/config/variables'

    fetch(url)
      .then(res => res.json())
      .then(data => {
        // Convert array to object
        const obj = data.data.reduce((acc: any, var: any) => {
          acc[var.key] = var.value
          return acc
        }, {})
        setConfig(obj)
      })
  }, [category])

  return config
}

// Uso en componente:
export function HeroSection() {
  const config = useConfig('hero')

  return (
    <h1>{config?.['hero.title']}</h1>
  )
}
```

## 🔐 Seguridad

- ✅ JWT tokens con expiración (7 días por defecto)
- ✅ Endpoints GET públicos (sin auth)
- ✅ Endpoints PUT/POST requieren auth
- ✅ CORS configurado para evitar XSS
- ✅ Variables sensibles marcadas como `is_secret`
- ✅ Audit logs de cambios (tabla audit_logs)

## 📦 Dependencias Necesarias

```bash
npm install @supabase/supabase-js jsonwebtoken
npm install --save-dev @types/jsonwebtoken
```

## 🚀 Deploy a Vercel

1. Conecta tu repositorio a Vercel
2. Añade variables de entorno en **Settings → Environment Variables**
3. Deploy automáticamente en cada push
4. Los endpoints estarán disponibles en `https://tu-dominio.vercel.app/api/*`

## 📋 Próximos Pasos

- [ ] Cambiar contraseña admin en producción
- [ ] Implementar dashboard de admin (CMS UI)
- [ ] Añadir más usuarios
- [ ] Configurar alertas de Google Analytics
- [ ] Implementar backups automáticos de BD
