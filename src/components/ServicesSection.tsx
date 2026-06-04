'use client'

import { motion } from 'framer-motion'
import { MonolithCard } from './MonolithCard'
import { containerVariants, itemVariants } from '@/lib/animations'
import { servicios, segments } from '@/config/content'

const iconMap: Record<string, string> = {
  web: 'language',
  saas: 'school',
  seguridad: 'security',
}

export function ServicesSection() {
  // Map servicios to monolith format
  const monoliths = Object.entries(servicios).map(([key, service]) => ({
    title: service.title,
    description: service.description,
    icon: iconMap[key] || 'computer',
    label: 'EXPLORAR SERVICIO',
  }))

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
                Estructuras Hiperconectadas
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8 monolith-perspective mb-20"
        >
          {monoliths.map((monolith) => (
            <motion.div key={monolith.title} variants={itemVariants}>
              <MonolithCard {...monolith} />
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="my-20 h-px bg-gradient-to-r from-transparent via-tech-dark-border to-transparent"
        />

        {/* Industry Solutions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Soluciones por Industria
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Soluciones personalizadas diseñadas para los desafíos específicos de cada sector.
          </p>
        </motion.div>

        {/* Industry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {Object.values(segments).map((segment) => (
            <motion.div
              key={segment.name}
              variants={itemVariants}
              className="group bg-tech-dark-surface border border-tech-dark-border rounded-xl p-6 hover:border-primary-container hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{segment.icon}</div>
                <div className="flex-1">
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-2 group-hover:text-primary-container transition-colors">
                    {segment.name}
                  </h4>
                </div>
              </div>

              {/* Problem */}
              <div className="mb-4 pb-4 border-b border-tech-dark-border">
                <div className="font-status-label text-status-label text-outline mb-2 uppercase text-xs">
                  Desafío
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {segment.pain}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <div className="font-status-label text-status-label text-primary-container mb-2 uppercase text-xs">
                  Solución
                </div>
                <p className="font-body-md text-body-md text-on-surface">
                  {segment.solution}
                </p>
              </div>

              {/* CTA */}
              <button className="w-full flex items-center justify-between gap-2 py-2 px-3 rounded-lg bg-primary-container/10 hover:bg-primary-container/20 text-primary-container font-status-label text-status-label transition-colors text-xs uppercase">
                {segment.cta}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-12 border-t border-tech-dark-border"
        >
          <h3 className="font-headline-md text-headline-md text-center text-on-surface mb-12">
            Beneficios Concretos en Cada Servicio
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(servicios).map(([key, service]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-tech-dark-surface border border-tech-dark-border rounded-xl p-6"
              >
                <h4 className="font-headline-md text-headline-md text-primary-container mb-4">
                  {service.title}
                </h4>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary-container text-sm flex-shrink-0 mt-1">
                        check_circle
                      </span>
                      <span className="font-body-md text-body-md text-on-surface-variant">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
