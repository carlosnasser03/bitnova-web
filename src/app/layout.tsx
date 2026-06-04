import type { Metadata } from 'next'
import { siteConfig } from '@/config/content'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  authors: [{ name: 'Bitnova Labs' }],
  keywords: ['transformación digital', 'desarrollo web', 'SaaS educativo', 'seguridad digital'],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
