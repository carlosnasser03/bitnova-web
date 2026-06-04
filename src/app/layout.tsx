import type { Metadata } from 'next'
import { Hanken_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import { siteConfig } from '@/config/content'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import './globals.css'

const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'], weight: ['600', '700', '800'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['500', '700'] })

// Material Symbols font link to be added in head
const materialSymbolsLink = (
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
  />
)

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
      <body className={`${inter.className} antialiased bg-tech-dark-deep text-on-surface`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
