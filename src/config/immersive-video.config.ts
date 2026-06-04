// Immersive Video Configuration - Variables centralizadas

export const immersiveVideoConfig = {
  // Container
  container: {
    layout: 'relative',
    width: 'w-full',
    defaultHeight: 'h-[500px]',
    rounded: 'rounded-xl',
    overflow: 'overflow-hidden',
    shadow: 'shadow-[0_0_40px_rgba(0,229,255,0.2)]',
    border: 'border border-primary-container/20',
  },

  // Video Element
  video: {
    position: 'absolute inset-0',
    sizing: 'w-full h-full object-cover',
    zIndex: 'z-0',
  },

  // Overlays
  overlay: {
    dark: {
      position: 'absolute inset-0',
      bg: 'bg-tech-dark-surface/20',
      blend: 'mix-blend-multiply',
      zIndex: 'z-10',
      pointer: 'pointer-events-none',
    },
    gradient: {
      position: 'absolute inset-0',
      bg: 'bg-gradient-to-t from-tech-dark-deep/40 via-transparent to-transparent',
      zIndex: 'z-5',
      pointer: 'pointer-events-none',
    },
  },

  // Video Properties
  video_properties: {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
  },

  // Animation
  animation: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: 'easeOut' },
  },

  // Default source
  defaultSrc: '/assets/hero-video.mp4',

  // Accessibility
  ariaLabel: 'Fondo de video inmersivo',
  fallbackText: 'Tu navegador no soporta la reproducción de videos.',
}
