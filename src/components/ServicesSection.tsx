'use client'

import { motion } from 'framer-motion'
import { MonolithCard } from './MonolithCard'
import { containerVariants, itemVariants } from '@/lib/animations'

const monoliths = [
  {
    title: 'SaaS',
    description: 'Sistemas ensamblados en entornos blindados para garantizar que cada bloque de datos sea preciso y seguro.',
    icon: 'cloud',
    label: 'LANZAR NÚCLEO',
    imageSrc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Arquitectura',
    description: 'Diseños de red con precisión tesseract para una estabilidad multidimensional y redundancia total.',
    icon: 'architecture',
    label: 'EXPLORAR PLANES',
    imageSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Rendimiento',
    description: 'Optimización radical de latencia mediante flujos de datos optimizados en el núcleo central.',
    icon: 'speed',
    label: 'MONITOR DE RENDIMIENTO',
    imageSrc: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop'
  }
]

export function ServicesSection() {
  return (
    <section className="py-section-gap relative px-gutter bg-tech-dark-deep">
      <div className="max-w-container-max mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-6">
            <div className="max-w-2xl">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                Estructuras<br/>Hiperconectadas
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant font-medium">
                Nuestros sistemas se ensamblan dentro de domos blindados transparentes, asegurando que cada bloque de datos esté diseñado con precisión para una estabilidad multidimensional y protección absoluta.
              </p>
            </div>
            <div className="font-status-label text-status-label text-primary-container tracking-widest whitespace-nowrap">
              MÓDULO_v4.0.2 // ESTABLE
            </div>
          </div>
        </motion.div>

        {/* Monolith Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 monolith-perspective"
        >
          {monoliths.map((monolith) => (
            <motion.div key={monolith.title} variants={itemVariants}>
              <MonolithCard {...monolith} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
