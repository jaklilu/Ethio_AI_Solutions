'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import NeuralMesh from '@/components/animations/NeuralMesh'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden neural-bg px-4 pt-20 pb-12">
      {/* Animated background elements - reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <NeuralMesh />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gold-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto w-full text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gold-glow/20 border border-gold-primary/30 mb-4 md:mb-6"
        >
          <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-gold-primary" />
          <span className="text-xs md:text-sm text-gold-primary">AI-Powered Solutions</span>
        </motion.div>

        {/* Responsive heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gold-primary via-gold-accent to-neon-cyan bg-clip-text text-transparent leading-tight px-2">
          AI for Every Business
        </h1>

        {/* Responsive paragraph */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
          We bring enterprise-level AI automation to small and mid-sized businesses.
          <span className="block mt-2 text-gold-primary text-sm sm:text-base md:text-lg lg:text-xl">
            Affordable. Practical. Powerful.
          </span>
        </p>

        {/* Key Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto px-4"
        >
          AI isn&apos;t just for big companies — we bring AI automation to the businesses that actually need it.
        </motion.p>

        {/* Mobile-optimized buttons - stack on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4"
        >
          <Link
            href="/contact"
            className="group relative px-6 py-3.5 sm:px-8 sm:py-4 bg-gold-primary text-dark-bg font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 glow-gold text-base sm:text-lg min-h-[48px] flex items-center justify-center gap-2 touch-manipulation"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-primary to-gold-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <Link
            href="/services"
            className="px-6 py-3.5 sm:px-8 sm:py-4 border-2 border-gold-primary/50 text-gold-primary font-semibold rounded-lg hover:bg-gold-primary/10 active:bg-gold-primary/20 transition-all duration-300 text-base sm:text-lg min-h-[48px] flex items-center justify-center touch-manipulation"
          >
            View Services
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 md:mt-12 text-xs sm:text-sm text-gray-400 px-4"
        >
          Trusted by businesses across the US and beyond
        </motion.p>
      </motion.div>
    </section>
  )
}

