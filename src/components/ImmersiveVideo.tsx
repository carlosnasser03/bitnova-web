'use client'

import { motion } from 'framer-motion'
import { immersiveVideoConfig } from '@/config/immersive-video.config'

interface ImmersiveVideoProps {
  src?: string
  height?: string
  width?: string
}

export function ImmersiveVideo({
  src = immersiveVideoConfig.defaultSrc,
  height = immersiveVideoConfig.container.defaultHeight,
  width = immersiveVideoConfig.container.width,
}: ImmersiveVideoProps) {
  const {
    container,
    video,
    overlay,
    video_properties,
    animation,
    ariaLabel,
    fallbackText,
  } = immersiveVideoConfig

  return (
    <motion.div
      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition}
      className={`${container.layout} ${width} ${height} ${container.rounded} ${container.overflow} ${container.shadow} ${container.border}`}
    >
      {/* Dark overlay - Capa sutil oscura para mejorar contraste */}
      <div
        className={`${overlay.dark.position} ${overlay.dark.bg} ${overlay.dark.blend} ${overlay.dark.zIndex} ${overlay.dark.pointer}`}
      />

      {/* Video HTML5 - Bucle infinito sin sonido */}
      <video
        autoPlay={video_properties.autoPlay}
        loop={video_properties.loop}
        muted={video_properties.muted}
        playsInline={video_properties.playsInline}
        className={`${video.position} ${video.sizing} ${video.zIndex}`}
        aria-label={ariaLabel}
      >
        <source src={src} type="video/mp4" />
        {fallbackText}
      </video>

      {/* Gradient overlay - Para mejor legibilidad */}
      <div
        className={`${overlay.gradient.position} ${overlay.gradient.bg} ${overlay.gradient.zIndex} ${overlay.gradient.pointer}`}
      />
    </motion.div>
  )
}
