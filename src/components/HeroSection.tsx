'use client'

import { motion } from 'framer-motion'
import { Cube3D } from './Cube3D'
import { Button } from './Button'
import { hero, cta, stats } from '@/config/content'

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen bg-tech-dark-deep overflow-hidden pt-20">
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-container-max mx-auto px-gutter min-h-screen flex flex-col items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-container/20 bg-nova-blue-dim mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_#00e5ff]" />
          <span className="font-status-label text-status-label text-primary-container tracking-widest uppercase text-xs sm:text-sm">
            Estado: Óptimo
          </span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto w-full"
        >
          <motion.h1
            variants={itemVariants}
            className="font-headline-lg-mobile sm:font-headline-lg lg:font-headline-xl text-headline-lg-mobile sm:text-headline-lg lg:text-headline-xl mb-6 leading-tight sm:leading-none text-on-surface"
          >
            {hero.title}{' '}
            <span className="text-primary-container block sm:inline-block">{hero.subtitle}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-on-surface-variant font-medium mb-10 max-w-2xl mx-auto px-2"
          >
            {hero.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full px-2 sm:px-0"
          >
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-[0_0_30px_rgba(0,229,255,0.2)]"
              aria-label="Solicitar consulta gratuita"
            >
              {cta.primary}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              aria-label="Ver nuestros servicios"
            >
              Ver Arquitectura
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12"
          >
            <div className="text-center">
              <div className="font-headline-md text-headline-md text-primary-container">
                {stats.projects.number}
              </div>
              <div className="font-status-label text-status-label text-on-surface-variant text-xs">
                {stats.projects.label}
              </div>
            </div>
            <div className="text-center">
              <div className="font-headline-md text-headline-md text-primary-container">
                {stats.satisfaction.number}
              </div>
              <div className="font-status-label text-status-label text-on-surface-variant text-xs">
                {stats.satisfaction.label}
              </div>
            </div>
            <div className="text-center">
              <div className="font-headline-md text-headline-md text-primary-container">
                {stats.growth.number}
              </div>
              <div className="font-status-label text-status-label text-on-surface-variant text-xs">
                {stats.growth.label}
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-outline animate-bounce"
        aria-label="Desplazarse hacia abajo para explorar más"
        role="img"
      >
        <div className="text-center">
          <p className="text-sm mb-2 text-on-surface-variant">Scroll para explorar</p>
          <svg
            className="w-6 h-6 text-primary-container mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
