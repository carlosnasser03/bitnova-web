'use client'

import { motion } from 'framer-motion'
import { Button } from './Button'
import { siteConfig, cta } from '@/config/content'

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 h-20 backdrop-blur-xl border-b border-tech-dark-border bg-surface/80 shadow-[0_0_20px_rgba(0,229,255,0.05)]"
    >
      <div className="max-w-container-max mx-auto px-gutter h-full flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface"
        >
          {siteConfig.name}
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-body-md text-body-md">
          <motion.a
            href="#servicios"
            whileHover={{ color: '#c3f5ff' }}
            className="text-on-surface-variant hover:text-on-surface transition-colors active:scale-95 transition-transform"
          >
            Soluciones
          </motion.a>
          <motion.a
            href="#arquitectura"
            whileHover={{ color: '#c3f5ff' }}
            className="text-on-surface-variant hover:text-on-surface transition-colors active:scale-95 transition-transform"
          >
            Arquitectura
          </motion.a>
          <motion.a
            href="#rendimiento"
            whileHover={{ color: '#c3f5ff' }}
            className="text-on-surface-variant hover:text-on-surface transition-colors active:scale-95 transition-transform"
          >
            Rendimiento
          </motion.a>
          <motion.a
            href="#contacto"
            whileHover={{ color: '#c3f5ff' }}
            className="text-on-surface-variant hover:text-on-surface transition-colors active:scale-95 transition-transform"
          >
            Nosotros
          </motion.a>
        </div>

        {/* CTA Button */}
        <Button variant="primary" size="sm">
          {cta.primary}
        </Button>
      </div>
    </motion.nav>
  )
}
