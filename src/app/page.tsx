'use client'

import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'
import { CTASection } from '@/components/CTASection'

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <HeroSection />
      <ServicesSection />
      <CTASection />
    </main>
  )
}
