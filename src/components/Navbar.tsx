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
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 font-black text-2xl bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"
          >
            {siteConfig.name}
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <motion.a
              href="#servicios"
              whileHover={{ color: '#3b82f6' }}
              className="text-gray-700 font-medium transition"
            >
              Servicios
            </motion.a>
            <motion.a
              href="#por-que"
              whileHover={{ color: '#3b82f6' }}
              className="text-gray-700 font-medium transition"
            >
              Por Qué Nosotros
            </motion.a>
            <motion.a
              href="#contacto"
              whileHover={{ color: '#3b82f6' }}
              className="text-gray-700 font-medium transition"
            >
              Contacto
            </motion.a>
          </div>

          {/* CTA Button */}
          <Button variant="primary" size="sm">
            {cta.primary}
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}
