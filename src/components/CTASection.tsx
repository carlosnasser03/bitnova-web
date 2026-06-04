'use client'

import { motion } from 'framer-motion'
import { Button } from './Button'
import { cta } from '@/config/content'

export function CTASection() {
  return (
    <section className="py-section-gap px-gutter bg-tech-dark-deep">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="font-headline-lg text-headline-lg mb-6 text-on-surface">
          ¿Listo para Transformarte?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant font-medium mb-10">
          Solicita una consulta gratuita y descubre cómo podemos ayudarte a crecer exponencialmente
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="primary"
            size="lg"
            className="shadow-[0_0_30px_rgba(0,229,255,0.2)]"
          >
            {cta.primary}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
