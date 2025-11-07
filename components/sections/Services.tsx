'use client'

import { motion } from 'framer-motion'
import { Bot, Zap, Plug, CheckCircle } from 'lucide-react'
import Card from '@/components/ui/Card'

interface Service {
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
}

export default function ServicesSection() {
  const services: Service[] = [
    {
      title: 'AI Agents',
      description: 'Intelligent automated agents that handle tasks 24/7, learn from interactions, and improve over time.',
      icon: <Bot className="w-8 h-8 sm:w-10 sm:h-10 text-gold-primary" />,
      features: ['Customer support automation', 'Data processing', 'Task automation', 'Intelligent responses']
    },
    {
      title: 'Workflow Automation',
      description: 'Streamline your business processes with smart automation that saves time and reduces errors.',
      icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-gold-primary" />,
      features: ['Process optimization', 'Integration setup', 'Time savings', 'Error reduction']
    },
    {
      title: 'Custom Dashboards & Apps',
      description: 'Build custom dashboards and small applications tailored to your business needs without enterprise complexity.',
      icon: <Plug className="w-8 h-8 sm:w-10 sm:h-10 text-gold-primary" />,
      features: ['Custom dashboards', 'Real-time insights', 'Automated reporting', 'Mobile-responsive']
    }
  ]

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gold-primary to-neon-cyan bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Practical AI solutions designed for small businesses
          </p>
        </motion.div>

        {/* Responsive grid - 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 sm:p-8">
                <div className="mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gold-primary/10 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gold-primary">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-400">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gold-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

