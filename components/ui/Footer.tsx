'use client'

import Link from 'next/link'
import { Brain, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'AI Agents', href: '/services#ai-agents' },
      { name: 'Automation', href: '/services#automation' },
      { name: 'Integrations', href: '/services#integrations' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', href: '/contact' },
    ],
  }

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
  ]

  return (
    <footer className="bg-dark-elevated border-t border-gold-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Brain className="w-6 h-6 text-gold-primary group-hover:rotate-12 transition-transform" />
              <span className="text-xl font-bold">
                <span className="text-neon-green">Ethio</span>{' '}
                <span className="text-gold-primary">AI</span>{' '}
                <span className="text-red-primary">Solutions</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Bringing enterprise-level AI automation to small and mid-sized businesses. Affordable. Practical. Powerful.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-dark-surface border border-gold-primary/20 text-gray-400 hover:text-gold-primary hover:border-gold-primary/50 transition-all touch-manipulation"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold text-gold-primary mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold-primary transition-colors touch-manipulation"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-semibold text-gold-primary mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold-primary transition-colors touch-manipulation"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold text-gold-primary mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@ethioai.com"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-gold-primary transition-colors touch-manipulation"
                >
                  <Mail className="w-4 h-4" />
                  contact@ethioai.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+13239919373"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-gold-primary transition-colors touch-manipulation"
                >
                  <Phone className="w-4 h-4" />
                  (323) 991-9373
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>United States</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-8 border-t border-gold-primary/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
              © {currentYear}{' '}
              <span className="text-neon-green">Ethio</span>{' '}
              <span className="text-gold-primary">AI</span>{' '}
              <span className="text-red-primary">Solutions</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-gold-primary transition-colors touch-manipulation">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gold-primary transition-colors touch-manipulation">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

