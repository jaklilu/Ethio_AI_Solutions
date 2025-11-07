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
  title: 'Ethio AI Solutions | AI Automation for Small Business',
  description: 'Bringing enterprise-level AI automation to small and mid-sized businesses. Affordable, practical AI solutions. We build AI agents, create automation workflows, and help businesses use AI the same way big companies do.',
  keywords: 'AI automation, AI agents, business automation, AI solutions, small business AI',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  openGraph: {
    title: 'Ethio AI Solutions | AI Automation for Small Business',
    description: 'Bringing enterprise-level AI automation to small and mid-sized businesses.',
    type: 'website',
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

