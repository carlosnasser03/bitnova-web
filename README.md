# 🚀 Bitnova Web - Página Inmersiva

Página web de Bitnova Labs con animaciones fluidas (Framer Motion) + elementos 3D (Three.js).

## 📁 Estructura

```
bitnova-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx      (Layout principal)
│   │   ├── page.tsx        (Página home)
│   │   └── globals.css     (Estilos globales)
│   ├── components/
│   │   ├── HeroSection.tsx (Sección hero con cubo 3D)
│   │   ├── ServicesSection.tsx (3 pilares + 6 segmentos)
│   │   ├── Button.tsx      (Botón reutilizable)
│   │   ├── Card.tsx        (Card reutilizable)
│   │   └── Cube3D.tsx      (Cubo 3D con Three.js)
│   └── config/
│       └── content.ts      (Contenido centralizado - MODIFICA AQUÍ)
├── public/assets/          (Imágenes, iconos, videos)
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🚀 Instalación Rápida

```bash
# 1. Entra a la carpeta
cd "C:\Users\cavilez\Desktop\Proyectos\Pagina web\bitnova-web"

# 2. Instala dependencias
npm install

# 3. Ejecuta servidor dev
npm run dev

# 4. Abre en navegador
# http://localhost:3000
```

## 🎨 Features

✅ **Hero Section Inmersiva**
- Cubo 3D rotativo (Three.js)
- Animaciones fluidas de entrada (Framer Motion)
- Background animado con elementos flotantes
- Responsive en móvil y desktop

✅ **Services Section**
- 3 Pilares (Web, SaaS Educativo, Seguridad)
- 6 Segmentos de industria
- Cards con hover effects
- Animaciones al scroll

✅ **Marketing Integrado**
- Copywriting persuasivo (contenido en `content.ts`)
- CTAs claras y visibles
- Messaging por segmento
- ROI calculado

✅ **Tecnología**
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animaciones)
- Three.js (3D)
- Responsive Design

## 📝 Modificar Contenido

**TODO está en `src/config/content.ts`**

Edita ahí para cambiar:
- Textos del hero
- Descripciones de servicios
- Información de segmentos
- CTAs y contacto
- **Sin necesidad de tocar código React**

## 🎯 Próximos Pasos

1. **Portfolio Section** - Casos de éxito con antes/después
2. **Team Section** - Quiénes somos con fotos
3. **Blog Section** - Artículos de marketing
4. **Contact Form** - Formulario de contacto integrado
5. **Integración Supabase** - Backend para formulario

## 📚 Recursos

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Three.js Docs](https://threejs.org/docs/)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)

## 💡 Tips

- **Animaciones:** Edita `HeroSection.tsx` y `ServicesSection.tsx` para customizar
- **Colores:** Edita `tailwind.config.js` para cambiar paleta Bitnova
- **3D:** Edita `Cube3D.tsx` para modificar cubo (rotation, color, materiales)

## 🚢 Deploy

```bash
# Build para producción
npm run build

# Deploy a Vercel (recomendado para Next.js)
# 1. Conecta repo a Vercel
# 2. Deploy automático en cada push
```

---

**Creado con ❤️ por Bitnova Labs**
