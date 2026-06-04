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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-black mb-6 leading-tight"
            >
              {hero.title}
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl lg:text-2xl mb-8 text-blue-100">
              {hero.subtitle}
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg mb-10 text-blue-200 max-w-xl">
              {hero.description}
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4">
              <Button
                variant="primary"
                size="lg"
                aria-label="Solicitar consulta gratuita"
              >
                {cta.primary}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:bg-opacity-10"
                aria-label="Ver nuestros servicios"
              >
                Ver Servicios
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 flex gap-8">
              <div>
                <div className="text-3xl font-bold text-orange-400">{stats.projects.number}</div>
                <div className="text-sm text-blue-200">{stats.projects.label}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">{stats.satisfaction.number}</div>
                <div className="text-sm text-blue-200">{stats.satisfaction.label}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">{stats.growth.number}</div>
                <div className="text-sm text-blue-200">{stats.growth.label}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Cube */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center items-center"
          >
            <Cube3D width={400} height={400} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Desplazarse hacia abajo para explorar más"
        role="img"
      >
        <div className="text-white text-center">
          <p className="text-sm mb-2">Scroll para explorar</p>
          <div className="flex justify-center">
            <svg
              className="w-6 h-6 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
