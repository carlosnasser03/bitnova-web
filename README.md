# Bitnova Labs - Sitio Web Premium

Sitio web moderno y de alto rendimiento para Bitnova Labs, construido con Next.js 14, React, TypeScript, Tailwind CSS, Framer Motion y Three.js. Integra el diseño **Stitch** con arquitectura **Tech Dark** y animaciones avanzadas.

## 🎯 Características

- **Diseño Stitch Tech Dark**: Paleta de colores sofisticada con acentos Nova Blue
- **Animaciones Avanzadas**: Framer Motion para transiciones fluidas
- **3D Interactivo**: Esfera distorsionada con @react-three/fiber y Three.js
- **Componentes Reutilizables**: Arquitectura modular y escalable
- **Responsive Design**: Optimizado para todos los tamaños de pantalla
- **Accesibilidad**: Cumple con WCAG (aria-labels, semantic HTML, keyboard nav)
- **Performance**: Code splitting, lazy loading, image optimization
- **Monolith Cards**: Tarjetas 3D con efecto hover perspective
- **CI/CD Feed**: Visualización de tiempo real de estados
- **Binary Stream**: Animación de código binario flotante

## 🚀 Inicio Rápido

### Requisitos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env.local

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx           # Página principal (orquestador)
│   ├── layout.tsx         # Layout con Navbar y Footer
│   └── globals.css        # Estilos globales
├── components/
│   ├── index.ts           # Exports centralizados
│   ├── Navbar.tsx         # Navegación principal
│   ├── Footer.tsx         # Pie de página
│   ├── HeroSection.tsx    # Sección hero
│   ├── Cube3D.tsx         # Esfera 3D interactiva
│   ├── ServicesSection.tsx # Tarjetas de servicios
│   ├── MonolithCard.tsx   # Componente tarjeta 3D
│   ├── TechSpecsGrid.tsx  # Grid de especificaciones técnicas
│   ├── BinaryStreamBackground.tsx # Fondo animado
│   ├── RadicalAccountabilityCTA.tsx # Sección CTA
│   ├── CTASection.tsx     # Otra sección CTA
│   ├── Button.tsx         # Botón reutilizable
│   └── Card.tsx           # Card reutilizable
├── config/
│   └── content.ts         # Contenido centralizado
├── lib/
│   └── animations.ts      # Variantes de animación reutilizables
└── public/                # Assets estáticos
```

## 🎨 Paleta de Colores Stitch

### Tech Dark Theme
- **Profundo**: `#020617` (tech-dark-deep)
- **Surface**: `#0F172A` (tech-dark-surface)
- **Border**: `#1E293B` (tech-dark-border)

### Nova Blue (Primary)
- **Principal**: `#00e5ff` (nova-blue)
- **Tenue**: `rgba(0, 229, 255, 0.15)` (nova-blue-dim)

## 🔧 Scripts Disponibles

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Compilar para producción
npm start        # Iniciar servidor de producción
npm run lint     # Ejecutar linter
```

---

**Construido con ❤️ usando Next.js 14 y tecnologías modernas**
