'use client'

import { motion } from 'framer-motion'
import { Button } from './Button'
import { cta } from '@/config/content'

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-4xl lg:text-5xl font-black mb-6">
          ¿Listo para Transformarte?
        </h2>
        <p className="text-xl mb-10 opacity-90">
          Solicita una consulta gratuita y descubre cómo podemos ayudarte a crecer
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="primary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            {cta.primary}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
