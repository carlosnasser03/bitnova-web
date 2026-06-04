'use client'

import { motion } from 'framer-motion'

interface ImmersiveVideoProps {
  src?: string
  height?: string
  width?: string
}

export function ImmersiveVideo({
  src = '/assets/hero-video.mp4',
  height = 'h-[500px]',
  width = 'w-full',
}: ImmersiveVideoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`relative ${width} ${height} rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,229,255,0.2)] border border-primary-container/20`}
    >
      {/* Overlay: Capa sutil oscura para mejorar contraste */}
      <div className="absolute inset-0 bg-tech-dark-surface/20 mix-blend-multiply z-10 pointer-events-none" />

      {/* Video HTML5 - Bucle infinito sin sonido */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-label="Fondo de video inmersivo"
      >
        <source src={src} type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>

      {/* Gradient overlay para mejor legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-tech-dark-deep/40 via-transparent to-transparent z-5 pointer-events-none" />
    </motion.div>
  )
}
