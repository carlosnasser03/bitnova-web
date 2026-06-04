# Guía de Desarrollo - Bitnova Web

## Convenciones de Código

### Componentes

1. **Ubicación**: `src/components/`
2. **Naming**: PascalCase (ej: `HeroSection.tsx`)
3. **Estructura**:
   ```tsx
   'use client'  // Si usa Framer Motion u hooks de cliente

   import { ComponentType } from '@/types'
   import { motion } from 'framer-motion'

   interface Props {
     // Props aquí
   }

   export function ComponentName({ prop1, prop2 }: Props) {
     return (
       // JSX aquí
     )
   }
   ```

### Estilos

- **Usar Tailwind**: Preferencia absoluta
- **Clases personalizadas**: Añadir a `globals.css` si es necesario
- **Colores**: Usar variables de Tailwind (`bg-tech-dark-deep`, `text-primary-container`, etc.)
- **Responsive**: Mobile-first (`sm:`, `md:`, `lg:`)

### Tipos

1. **Ubicación**: `src/types/` (crear si no existe)
2. **Exports**: Nombrados, no default
3. **Ejemplo**:
   ```tsx
   export interface ButtonProps {
     variant: 'primary' | 'secondary' | 'outline'
     size: 'sm' | 'md' | 'lg'
     children: React.ReactNode
   }
   ```

## Branching Strategy

```
main (production-ready)
  └── development (integration branch)
      ├── feature/navbar-mobile
      ├── feature/dark-mode
      └── fix/animation-performance
```

### Flujo

1. Crear rama: `git checkout -b feature/nombre`
2. Hacer cambios
3. Commit: `git commit -m "tipo: descripción"`
4. Push: `git push origin feature/nombre`
5. PR a `development`
6. Merge y después de revisión, merge a `main`

## Commit Messages

Usar Conventional Commits:

```
feat: Agregar nueva funcionalidad
fix: Solucionar bug
refactor: Cambiar código sin alterar funcionalidad
docs: Actualizar documentación
style: Cambios de formato (sin lógica)
perf: Mejoras de performance
test: Agregar/actualizar tests
chore: Dependencias, config
```

Ejemplo:
```
feat(Navbar): Add mobile menu with hamburger icon

- Implement responsive hamburger menu
- Add smooth slide-in animation
- Update Navbar component structure

Closes #123
```

## Paleta de Colores

**Colores principales** están en `tailwind.config.js` como variables:

```typescript
// Usar así en componentes:
className="bg-tech-dark-deep text-primary-container"
```

**Para nuevos colores**: Actualizar `tailwind.config.js` → `theme.extend.colors`

## Animaciones

### Framer Motion Best Practices

1. **Reutilizar variantes**: Importar de `src/lib/animations.ts`
   ```tsx
   import { containerVariants, itemVariants } from '@/lib/animations'
   ```

2. **Layout animations**: Usar `layoutId` para animaciones de layout
3. **Lazy loading**: Evitar animaciones complejas en componentes lazy-loaded

### Ejemplos

```tsx
// ✅ Bueno
<motion.div variants={containerVariants} initial="hidden" whileInView="visible">
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>

// ❌ Malo (animaciones hardcodeadas)
<motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
  Content
</motion.div>
```

## Performance Checklist

- [ ] Componentes pesados usan `lazy()` + `Suspense`
- [ ] Imágenes usan `next/image`
- [ ] No hay console.log en producción
- [ ] PropTypes/TypeScript completo
- [ ] CSS crítico es inline
- [ ] Animaciones usan `will-change` cuando sea apropiado

## Accesibilidad

- [ ] Semantic HTML (`nav`, `main`, `section`, `footer`, `h1-h6`)
- [ ] `aria-label` en componentes sin texto visible
- [ ] `role="button"` para elementos no-nativos clicables
- [ ] Keyboard navigation (Tab, Enter, Space)
- [ ] Focus indicators visibles
- [ ] Contraste mínimo WCAG AA

Verificar con:
```bash
# axe DevTools Chrome Extension
# Lighthouse audit
```

## Testing (Futuro)

Cuando se implemente testing:
```bash
npm test          # Jest + React Testing Library
npm run test:e2e  # Playwright
```

## Debugging

### Next.js
```bash
npm run dev -- --debug
```

### React DevTools
```bash
# Chrome/Firefox extension
React DevTools
```

### Framer Motion
```tsx
// Añadir al componente temporalmente
<motion.div debug>
  Content
</motion.div>
```

## Variables de Entorno

Copiar `.env.example` a `.env.local`:

```bash
NEXT_PUBLIC_API_URL=https://api.bitnova.hn
NEXT_PUBLIC_STITCH_API_KEY=tu_clave
```

**Importante**: Variables con `NEXT_PUBLIC_` se exponen en el cliente. Nunca incluir secretos.

## Recursos

- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)

---

**Last Updated**: June 2026
