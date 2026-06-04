// Hero Section Configuration - Valores centralizados para evitar roturas

export const heroConfig = {
  // Layout
  section: {
    minHeight: 'min-h-screen',
    bg: 'bg-tech-dark-deep',
    overflow: 'overflow-hidden',
    padding: 'pt-20',
  },

  // Container
  container: {
    layout: 'flex flex-col items-center justify-center',
    maxWidth: 'max-w-container-max',
    padding: 'px-gutter',
    minHeight: 'min-h-[calc(100vh-80px)]', // Menos pt-20 del section
    verticalPadding: 'py-12 md:py-20',
  },

  // Status Badge
  badge: {
    container: 'inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-container/20 bg-nova-blue-dim mb-8',
    dot: 'w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_#00e5ff]',
    text: 'font-status-label text-status-label text-primary-container tracking-widest uppercase text-xs sm:text-sm',
    animation: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
    },
  },

  // Content Container
  contentContainer: {
    layout: 'text-center max-w-4xl mx-auto w-full',
    animation: {
      containerVariants: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
          },
        },
      },
      itemVariants: {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: 'easeOut' },
        },
      },
    },
  },

  // Title
  title: {
    responsive: 'font-headline-lg-mobile sm:font-headline-lg lg:font-headline-xl text-headline-lg-mobile sm:text-headline-lg lg:text-headline-xl mb-6 leading-tight sm:leading-none text-on-surface',
    accentColor: 'text-primary-container',
  },

  // Subtitle/Description
  description: {
    text: 'font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-on-surface-variant font-medium mb-10 max-w-2xl mx-auto px-2',
  },

  // Buttons Container
  buttons: {
    container: 'flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full px-2 sm:px-0',
    primary: {
      className: 'w-full sm:w-auto shadow-[0_0_30px_rgba(0,229,255,0.2)]',
      ariaLabel: 'Solicitar consulta gratuita',
    },
    secondary: {
      className: 'w-full sm:w-auto',
      ariaLabel: 'Ver nuestros servicios',
      text: 'Ver Arquitectura',
    },
  },

  // Stats
  stats: {
    container: 'flex flex-col sm:flex-row justify-center gap-6 sm:gap-12',
    stat: {
      container: 'text-center',
      number: 'font-headline-md text-headline-md text-primary-container',
      label: 'font-status-label text-status-label text-on-surface-variant text-xs',
    },
  },

  // Video
  video: {
    container: 'w-full mt-16 max-w-4xl mx-auto',
    animation: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.6 },
    },
  },

  // Scroll Indicator
  scrollIndicator: {
    container: 'absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-outline animate-bounce',
    text: 'text-sm mb-2 text-on-surface-variant',
    icon: 'w-6 h-6 text-primary-container mx-auto',
  },
}
