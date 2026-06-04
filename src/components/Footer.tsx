'use client'

import { siteConfig } from '@/config/content'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-section-gap bg-tech-dark-deep border-t border-tech-dark-border relative z-10">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="flex flex-col gap-6">
            <div className="font-headline-md text-headline-md text-on-surface">{siteConfig.name}</div>
            <p className="font-status-label text-status-label text-outline max-w-sm">
              © {currentYear} {siteConfig.name}. Diseñado para la Responsabilidad Radical.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-6 md:justify-end items-start font-status-label text-status-label">
            <a href="/privacy" className="text-outline hover:text-on-surface transition-colors hover:text-primary-container" aria-label="Política de Privacidad">
              Legal
            </a>
            <a href="/privacy" className="text-outline hover:text-on-surface transition-colors hover:text-primary-container" aria-label="Política de Privacidad">
              Privacidad
            </a>
            <a href="/security" className="text-outline hover:text-on-surface transition-colors hover:text-primary-container" aria-label="Seguridad">
              Seguridad
            </a>
            <a href="/history" className="text-outline hover:text-on-surface transition-colors hover:text-primary-container" aria-label="Historial">
              Historial
            </a>
            <a href="#contact" className="text-outline hover:text-on-surface transition-colors hover:text-primary-container" aria-label="Contacto">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
