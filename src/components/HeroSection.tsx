'use client'

import { motion } from 'framer-motion'
import { Button } from './Button'
import { ImmersiveVideo } from './ImmersiveVideo'
import { hero, cta, stats } from '@/config/content'
import { heroConfig } from '@/config/hero.config'

export function HeroSection() {
  const { containerVariants, itemVariants } = heroConfig.contentContainer.animation

  return (
    <section className={`relative ${heroConfig.section.minHeight} ${heroConfig.section.bg} ${heroConfig.section.overflow} ${heroConfig.section.padding}`}>
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className={`relative z-10 ${heroConfig.container.maxWidth} mx-auto ${heroConfig.container.padding} ${heroConfig.container.layout} ${heroConfig.container.minHeight} ${heroConfig.container.verticalPadding}`}>
        {/* Status Badge */}
        <motion.div
          initial={heroConfig.badge.animation.initial}
          animate={heroConfig.badge.animation.animate}
          transition={heroConfig.badge.animation.transition}
          className={heroConfig.badge.container}
        >
          <span className={heroConfig.badge.dot} />
          <span className={heroConfig.badge.text}>Estado: Óptimo</span>
        </motion.div>

        {/* Content Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={heroConfig.contentContainer.layout}
        >
          {/* Title */}
          <motion.h1 variants={itemVariants} className={heroConfig.title.responsive}>
            {hero.title}{' '}
            <span className={`${heroConfig.title.accentColor} block sm:inline-block`}>
              {hero.subtitle}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className={heroConfig.description.text}>
            {hero.description}
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className={heroConfig.buttons.container}>
            <Button
              variant="primary"
              size="lg"
              className={heroConfig.buttons.primary.className}
              aria-label={heroConfig.buttons.primary.ariaLabel}
            >
              {cta.primary}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={heroConfig.buttons.secondary.className}
              aria-label={heroConfig.buttons.secondary.ariaLabel}
            >
              {heroConfig.buttons.secondary.text}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className={heroConfig.stats.container}>
            {[stats.projects, stats.satisfaction, stats.growth].map((stat, idx) => (
              <div key={idx} className={heroConfig.stats.stat.container}>
                <div className={heroConfig.stats.stat.number}>{stat.number}</div>
                <div className={heroConfig.stats.stat.label}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Immersive Video */}
        <motion.div
          initial={heroConfig.video.animation.initial}
          animate={heroConfig.video.animation.animate}
          transition={heroConfig.video.animation.transition}
          className={heroConfig.video.container}
        >
          <ImmersiveVideo />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={heroConfig.scrollIndicator.container}
        aria-label="Desplazarse hacia abajo para explorar más"
        role="img"
      >
        <div className="text-center">
          <p className={heroConfig.scrollIndicator.text}>Scroll para explorar</p>
          <svg
            className={heroConfig.scrollIndicator.icon}
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
