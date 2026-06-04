'use client'

import { Suspense, lazy } from 'react'
import { HeroSection } from '@/components/HeroSection'
import { BinaryStreamBackground } from '@/components/BinaryStreamBackground'

// Lazy load heavy components
const ServicesSection = lazy(() => import('@/components/ServicesSection').then(mod => ({ default: mod.ServicesSection })))
const TechSpecsGrid = lazy(() => import('@/components/TechSpecsGrid').then(mod => ({ default: mod.TechSpecsGrid })))
const RadicalAccountabilityCTA = lazy(() => import('@/components/RadicalAccountabilityCTA').then(mod => ({ default: mod.RadicalAccountabilityCTA })))
const CTASection = lazy(() => import('@/components/CTASection').then(mod => ({ default: mod.CTASection })))

// Fallback component for lazy loading
function LoadingFallback() {
  return <div className="min-h-96 bg-tech-dark-surface animate-pulse" />
}

export default function Home() {
  return (
    <main className="min-h-screen pt-16 bg-tech-dark-deep">
      <BinaryStreamBackground />
      <HeroSection />

      <Suspense fallback={<LoadingFallback />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <TechSpecsGrid />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <RadicalAccountabilityCTA />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <CTASection />
      </Suspense>
    </main>
  )
}
