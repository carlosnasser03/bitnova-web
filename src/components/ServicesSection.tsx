'use client'

import { motion } from 'framer-motion'
import { MonolithCard } from './MonolithCard'

export function ServicesSection() {
  const monoliths = [
    {
      title: 'SaaS',
      description: 'Sistemas ensamblados en entornos blindados para garantizar que cada bloque de datos sea preciso y seguro.',
      icon: 'cloud_done',
      label: 'LANZAR SISTEMA',
    },
    {
      title: 'Arquitectura',
      description: 'Diseños de red con precisión tesseract para una estabilidad multidimensional y redundancia total.',
      icon: 'architecture',
      label: 'EXPLORAR PLANOS',
    },
    {
      title: 'Rendimiento',
      description: 'Optimización radical de latencia mediante flujos de datos optimizados en el núcleo central.',
      icon: 'speed',
      label: 'MOTOR DE BENCHMARK',
    },
  ]

  return (
    <section className="py-section-gap relative px-gutter bg-tech-dark-deep">
      <div className="max-w-container-max mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
              Estructuras Hiperconectadas
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant font-medium">
              Nuestros sistemas se ensamblan dentro de domos blindados transparentes, asegurando que cada bloque de datos esté diseñado con precisión para una estabilidad multidimensional y protección absoluta.
            </p>
          </div>
          <div className="font-status-label text-status-label text-primary-container tracking-widest">
            MÓDULO_v4.0.2 // ESTABLE
          </div>
        </div>

        {/* Monolith Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 monolith-perspective">
          {monoliths.map((monolith) => (
            <motion.div
              key={monolith.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <MonolithCard {...monolith} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
