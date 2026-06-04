'use client'

import { siteConfig, cta } from '@/config/content'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Empresa */}
          <div>
            <h3 className="text-white font-black text-lg mb-4">{siteConfig.name}</h3>
            <p className="text-sm">{siteConfig.description}</p>
          </div>

          {/* Productos */}
          <div>
            <h4 className="text-white font-bold mb-4">Productos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  SaaS Educativo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Seguridad Digital
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Carreras
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`tel:${cta.phone}`} className="hover:text-white transition">
                  {cta.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${cta.email}`} className="hover:text-white transition">
                  {cta.email}
                </a>
              </li>
              <li>
                <a href={cta.whatsapp} className="hover:text-white transition">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="hover:text-white transition" aria-label="Política de Privacidad">
                Privacidad
              </a>
              <a href="/terms" className="hover:text-white transition" aria-label="Términos y Condiciones">
                Términos
              </a>
              <a href="/cookies" className="hover:text-white transition" aria-label="Política de Cookies">
                Cookies
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-right">
              <p>&copy; {currentYear} {siteConfig.name}. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
