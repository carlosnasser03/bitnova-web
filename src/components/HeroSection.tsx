'use client'

import { motion } from 'framer-motion'
import { Tesseract3D } from './Tesseract3D'

export function HeroSection() {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-gutter overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      
      {/* Central Graphic Container - Immersive Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full pointer-events-auto">
          <Tesseract3D />
          {/* Flicker overlay for neon tech effect */}
          <div 
            className="absolute inset-0 bg-primary-container/5 mix-blend-color-dodge animate-random-flicker pointer-events-none" 
            style={{ '--flicker-duration': '5s' } as any}
          />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-container/20 bg-nova-blue-dim mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-nova-glow" />
            <span className="font-status-label text-status-label text-primary-container tracking-widest uppercase">
              Estado del Sistema: Óptimo
            </span>
          </div>
          
          <h1 className="font-headline-xl text-headline-xl mb-6 leading-none">
            Arquitectura de <span className="text-primary-container block sm:inline-block">Cuarta Dimensión</span>
          </h1>
          
          <p className="font-body-lg text-body-lg text-on-surface-variant font-medium mb-10 max-w-2xl mx-auto">
            Nuestros sistemas operan en núcleos de datos hiperconectados, garantizando una estabilidad radical a través de geometrías de red multidimensionales de alto rendimiento.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-primary-container text-on-primary-fixed font-semibold px-8 py-4 rounded-lg active:scale-95 transition-all shadow-nova-glow hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
              Inicializar Núcleo
            </button>
            <button className="w-full sm:w-auto border border-tech-dark-border px-8 py-4 rounded-lg text-on-surface hover:bg-nova-blue-dim transition-all">
              Ver Arquitectura
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-outline animate-bounce z-10">
        <svg
          className="w-8 h-8 opacity-70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  )
}
