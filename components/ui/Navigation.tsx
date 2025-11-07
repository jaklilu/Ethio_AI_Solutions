'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Brain } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when pressing escape (no body scroll lock to prevent freezing)
  useEffect(() => {
    if (!isOpen) return
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-surface/95 backdrop-blur-md shadow-lg' : 'bg-dark-surface/80 backdrop-blur-md'
      } border-b border-gold-primary/20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group flex-shrink-0">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-gold-primary group-hover:rotate-12 transition-transform" />
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gold-primary to-gold-accent bg-clip-text text-transparent whitespace-nowrap">
                Ethio AI Solutions
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm lg:text-base text-gray-300 hover:text-gold-primary transition-colors relative group py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-primary group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-gold-primary transition-colors p-2 -mr-2 relative z-[110]"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              type="button"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - outside nav for proper z-index */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/70 z-[90] md:hidden"
            style={{ top: '56px' }}
            aria-hidden="true"
          />
          
          {/* Menu Panel */}
          <div
            className="fixed top-14 right-0 bottom-0 w-full max-w-[85vw] bg-dark-elevated z-[100] md:hidden shadow-2xl overflow-y-auto border-l-2 border-gold-primary"
            style={{ 
              WebkitOverflowScrolling: 'touch',
              transform: 'translateX(0)',
              opacity: 1
            }}
          >
            <div className="px-6 py-8 space-y-2">
              <div className="mb-4 pb-4 border-b border-gold-primary/20">
                <h3 className="text-gold-primary text-lg font-bold">Menu</h3>
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-gold-primary transition-colors py-4 px-4 text-lg font-medium border-b border-gold-primary/10 hover:border-gold-primary/30 active:bg-gold-primary/10 min-h-[56px] flex items-center touch-manipulation"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}

