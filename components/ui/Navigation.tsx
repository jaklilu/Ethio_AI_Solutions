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
              <span className="text-lg sm:text-xl font-bold whitespace-nowrap">
                <span className="text-neon-green">Ethio</span>{' '}
                <span className="text-gold-primary">AI</span>{' '}
                <span className="text-red-primary">Solutions</span>
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
            className="fixed top-14 right-0 w-full max-w-[85vw] bg-gradient-to-b from-dark-elevated via-dark-elevated to-dark-surface z-[100] md:hidden shadow-2xl border-l-2 border-gold-primary/50 rounded-tl-lg"
            style={{ 
              WebkitOverflowScrolling: 'touch',
              transform: 'translateX(0)',
              opacity: 1,
              boxShadow: '-4px 0 20px rgba(255, 215, 0, 0.3), 0 10px 30px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Glow effect on left border */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-primary via-gold-primary/80 to-transparent blur-sm" />
            
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent" />
            
            <div className="px-6 py-6 pb-8 space-y-1">
              {/* Menu Header */}
              <div className="mb-6 pb-4 border-b border-gold-primary/30 relative">
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent" />
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-1 h-6 bg-gradient-to-b from-gold-primary to-gold-accent rounded-full" />
                    <div className="absolute inset-0 w-1 h-6 bg-gold-primary/50 blur-md rounded-full animate-pulse-slow" />
                  </div>
                  <h3 className="text-gold-primary text-xl font-bold bg-gradient-to-r from-gold-primary via-gold-accent to-gold-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]">
                    Navigation
                  </h3>
                </div>
              </div>
              
              {/* Menu Items */}
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group relative block text-gray-300 hover:text-gold-primary transition-all duration-300 py-4 px-4 rounded-lg hover:bg-gold-primary/10 hover:pl-6 active:bg-gold-primary/20 min-h-[56px] flex items-center touch-manipulation border border-transparent hover:border-gold-primary/20"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  {/* Hover indicator line */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-gold-primary to-gold-accent rounded-r-full group-hover:h-8 transition-all duration-300 group-hover:shadow-[0_0_8px_rgba(255,215,0,0.5)]" />
                  
                  {/* Item content */}
                  <span className="text-base font-medium relative z-10 flex items-center gap-3">
                    <span className="relative">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-primary/50 group-hover:bg-gold-primary group-hover:scale-150 transition-all duration-300 block" />
                      <span className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-gold-primary/0 group-hover:bg-gold-primary/50 group-hover:scale-[2.5] blur-sm transition-all duration-300" />
                    </span>
                    <span className="relative">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-gold-primary group-hover:w-full transition-all duration-300" />
                    </span>
                  </span>
                  
                  {/* Arrow on hover */}
                  <span className="ml-auto text-gold-primary/0 group-hover:text-gold-primary transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 text-lg font-bold">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}

