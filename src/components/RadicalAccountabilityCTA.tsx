'use client'

import { motion } from 'framer-motion'
import { Button } from './Button'

export function RadicalAccountabilityCTA() {
  return (
    <section className="py-section-gap px-gutter relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-container/[0.02] -skew-y-3" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-headline-lg text-headline-lg mb-8 text-on-surface"
        >
          ¿Listo para eliminar lo innecesario?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body-lg text-body-lg text-on-surface-variant font-medium mb-12"
        >
          Únete a la red de empresas que priorizan el rendimiento radical sobre la complejidad
          heredada. Nuestros ingenieros están listos para auditar tu arquitectura.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 bg-primary-container text-on-primary-fixed font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,229,255,0.4)]"
          >
            <span className="relative z-10">SOLICITAR AUDITORÍA TÉCNICA</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
