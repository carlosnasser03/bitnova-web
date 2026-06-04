'use client'

import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            ¿Listo para Transformarte?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Solicita una consulta gratuita y descubre cómo podemos ayudarte a crecer
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition">
            Agendar Consulta Gratis
          </button>
        </div>
      </section>
    </main>
  )
}
