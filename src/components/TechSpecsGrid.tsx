'use client'

import { motion } from 'framer-motion'
import { Button } from './Button'

export function TechSpecsGrid() {
  const cicdFeed = [
    {
      time: '12:44:01',
      message: 'DESPLIEGUE_EXITOSO',
      detail: 'en cluster-nova-01',
      status: 'success',
    },
    {
      time: '12:43:58',
      message: 'COMPILANDO_RECURSOS',
      detail: '98% completado',
      status: 'progress',
    },
    {
      time: '12:43:20',
      message: 'PETICIÓN_DE_FUSIÓN',
      detail: '#4023 verificada',
      status: 'neutral',
    },
    {
      time: '12:42:01',
      message: 'ESCANEO_VULNERABILIDADES',
      detail: 'Limpio',
      status: 'success',
    },
  ]

  return (
    <section className="py-section-gap px-gutter bg-surface-container-lowest relative">
      <div className="max-w-container-max mx-auto">
        <h2 className="font-headline-lg text-headline-lg text-center mb-16 text-on-surface">
          El Motor Central
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-gutter min-h-[600px]">
          {/* CI/CD Feed - 2 columns, 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 md:row-span-2 bg-tech-dark-surface border border-tech-dark-border rounded-xl p-8 flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="font-code-label text-code-label text-primary-container">
                FLUJO_TIEMPO_REAL
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                <span className="font-status-label text-status-label text-neon-green">
                  ACTIVO
                </span>
              </div>
            </div>

            <div className="flex-1 space-y-4 font-code-label text-code-label overflow-y-auto">
              {cicdFeed.map((entry, idx) => (
                <div
                  key={idx}
                  className={`flex gap-4 items-start border-l-2 pl-4 ${
                    entry.status === 'success'
                      ? 'border-neon-green'
                      : entry.status === 'progress'
                        ? 'border-primary-container'
                        : 'border-tech-dark-border opacity-50'
                  }`}
                >
                  <span className="text-outline">{entry.time}</span>
                  <div className="text-on-surface">
                    {entry.message}{' '}
                    <span
                      className={`${
                        entry.status === 'success'
                          ? 'text-neon-green'
                          : entry.status === 'progress'
                            ? 'text-primary-container'
                            : 'text-neon-purple'
                      } inline-block`}
                    >
                      {entry.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" className="mt-8 w-full">
              VER_REGISTROS_COMPLETOS
            </Button>
          </motion.div>

          {/* Latency Metric */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 bg-tech-dark-surface border border-tech-dark-border rounded-xl p-8 flex items-center justify-between"
          >
            <div>
              <div className="font-status-label text-status-label text-outline mb-2">
                LATENCIA_PROMEDIO
              </div>
              <div className="font-headline-lg text-headline-lg text-on-surface">
                14
                <span className="text-primary-container text-headline-md inline-block ml-2">
                  ms
                </span>
              </div>
            </div>
            <div className="flex gap-1 items-end h-16">
              <div className="w-2 bg-primary-container/20 h-1/2" />
              <div className="w-2 bg-primary-container/30 h-3/4" />
              <div className="w-2 bg-primary-container/40 h-1/3" />
              <div className="w-2 bg-primary-container h-full" />
              <div className="w-2 bg-primary-container/60 h-2/3" />
            </div>
          </motion.div>

          {/* Security Protocol */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-tech-dark-surface border border-tech-dark-border rounded-xl p-8 flex flex-col justify-center items-center text-center"
          >
            <span
              className="material-symbols-outlined text-4xl text-neon-purple mb-4"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              gpp_good
            </span>
            <div className="font-status-label text-status-label uppercase tracking-widest text-on-surface">
              Encriptación
            </div>
            <div className="font-code-label text-code-label text-on-surface-variant font-medium mt-2">
              AES-256-GCM
            </div>
          </motion.div>

          {/* Global Nodes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-tech-dark-surface border border-tech-dark-border rounded-xl p-8 flex flex-col justify-center items-center text-center"
          >
            <span
              className="material-symbols-outlined text-4xl text-primary-container mb-4"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              public
            </span>
            <div className="font-status-label text-status-label uppercase tracking-widest text-on-surface">
              Nodos Globales
            </div>
            <div className="font-code-label text-code-label text-on-surface-variant font-medium mt-2">
              24 Activos
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
