'use client'

import { motion } from 'framer-motion'
import { DollarSign, Clock, Shield, TrendingUp } from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-gold-primary" />,
      title: 'Affordable Pricing',
      description: 'Enterprise-level AI without the enterprise price tag. Solutions designed for small business budgets.'
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-gold-primary" />,
      title: 'Quick Implementation',
      description: 'Get up and running fast. Most automations are live within days, not months.'
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-gold-primary" />,
      title: 'Reliable & Secure',
      description: 'Built with security and reliability in mind. Your data and processes are protected.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-gold-primary" />,
      title: 'Scalable Solutions',
      description: 'Start small and grow. Our solutions scale with your business needs.'
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gold-primary to-neon-cyan bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            We make AI accessible to businesses of all sizes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-lg bg-gold-primary/10 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gold-primary">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

