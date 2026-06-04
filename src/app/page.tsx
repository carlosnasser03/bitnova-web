'use client'

import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'
import { TechSpecsGrid } from '@/components/TechSpecsGrid'
import { RadicalAccountabilityCTA } from '@/components/RadicalAccountabilityCTA'
import { CTASection } from '@/components/CTASection'
import { BinaryStreamBackground } from '@/components/BinaryStreamBackground'

export default function Home() {
  return (
    <main className="min-h-screen pt-16 bg-tech-dark-deep">
      <BinaryStreamBackground />
      <HeroSection />
      <ServicesSection />
      <TechSpecsGrid />
      <RadicalAccountabilityCTA />
      <CTASection />
    </main>
  )
}
