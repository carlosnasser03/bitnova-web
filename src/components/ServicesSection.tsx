'use client'

import { motion } from 'framer-motion'
import { Card } from './Card'
import { servicios, segments } from '@/config/content'

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
            Nuestros 3 Pilares
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Especialización profunda en tres áreas que impulsan el crecimiento empresarial
          </p>
        </motion.div>

        {/* Services Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {Object.entries(servicios).map(([key, service]) => (
            <motion.div key={key} variants={itemVariants}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">
                    {key === 'web' && '💻'}
                    {key === 'saas' && '🎓'}
                    {key === 'seguridad' && '🔐'}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    <ul className="space-y-2" aria-label={`Beneficios de ${service.title}`}>
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="w-2 h-2 bg-blue-500 rounded-full" aria-hidden="true" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Segments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 pt-20 border-t-2 border-slate-200"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Soluciones por Industria
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {Object.values(segments).map((segment) => (
              <motion.div key={segment.name} variants={itemVariants}>
                <Card className="text-center h-full">
                  <div className="text-5xl mb-4">{segment.icon}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{segment.name}</h4>
                  <p className="text-sm text-slate-600 mb-4">{segment.pain}</p>
                  <p className="text-sm text-blue-600 font-semibold">{segment.solution}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
