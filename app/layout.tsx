import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ethio AI Solutions | AI Automation for Small Business - Without Enterprise Price Tag',
  description: 'AI automation for small businesses without enterprise complexity or cost. We build AI agents, workflow automation, and custom dashboards. 25+ years of enterprise IT experience. Affordable, practical AI solutions that save hours and reduce errors.',
  keywords: 'AI automation, AI agents, business automation, AI solutions, small business AI, workflow automation, custom dashboards, AI for small business, affordable AI, automation consulting, small business automation, AI agents for business',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  authors: [{ name: 'Ethio AI Solutions' }],
  creator: 'Ethio AI Solutions',
  publisher: 'Ethio AI Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Ethio AI Solutions | AI Automation for Small Business',
    description: 'AI automation for small businesses without enterprise complexity. We build AI agents, workflow automation, and custom dashboards. 25+ years of enterprise IT experience.',
    url: 'https://www.ethioaisolutions.com',
    siteName: 'Ethio AI Solutions',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.ethioaisolutions.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ethio AI Solutions - AI Automation for Small Business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethio AI Solutions | AI Automation for Small Business',
    description: 'AI automation for small businesses without enterprise complexity. 25+ years of enterprise IT experience.',
    creator: '@ethioai',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

