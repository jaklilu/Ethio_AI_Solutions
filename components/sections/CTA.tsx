'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-dark-surface relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gold-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gold-primary to-neon-cyan bg-clip-text text-transparent">
            Ready to Automate Your Business?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how AI can transform your workflows and help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group relative px-6 py-3.5 sm:px-8 sm:py-4 bg-gold-primary text-dark-bg font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 glow-gold text-base sm:text-lg min-h-[48px] flex items-center justify-center gap-2 touch-manipulation w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-primary to-gold-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/portfolio"
              className="px-6 py-3.5 sm:px-8 sm:py-4 border-2 border-gold-primary/50 text-gold-primary font-semibold rounded-lg hover:bg-gold-primary/10 active:bg-gold-primary/20 transition-all duration-300 text-base sm:text-lg min-h-[48px] flex items-center justify-center touch-manipulation w-full sm:w-auto"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

