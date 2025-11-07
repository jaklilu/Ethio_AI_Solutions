'use client'

import { motion } from 'framer-motion'
import { Bot, Zap, Plug, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

interface ServiceDetail {
  id: string
  title: string
  description: string
  longDescription: string
  icon: React.ReactNode
  features: string[]
  useCases: string[]
}

export default function ServicesPage() {
  const services: ServiceDetail[] = [
    {
      id: 'ai-agents',
      title: 'AI Agents',
      description: 'Intelligent automated agents that handle tasks 24/7',
      longDescription: 'Our AI agents are intelligent systems that can interact with customers, process information, make decisions, and automate complex workflows. They handle repetitive tasks, answer questions, and work around the clock — saving your team hours every day while improving customer experience.',
      icon: <Bot className="w-10 h-10 sm:w-12 sm:h-12 text-gold-primary" />,
      features: [
        '24/7 automated customer support',
        'Natural language processing',
        'Multi-channel communication',
        'Learning and improvement',
        'Integration with existing systems',
        'Saves 10+ hours per week'
      ],
      useCases: [
        'Customer service chatbots',
        'Lead qualification and follow-up',
        'Appointment scheduling',
        'Order processing',
        'FAQ automation',
        'Email response automation'
      ]
    },
    {
      id: 'automation',
      title: 'Workflow Automation',
      description: 'Streamline your business processes with smart automation',
      longDescription: 'Automate repetitive tasks and workflows to save time, reduce errors, and free your team to focus on high-value work. Our automation solutions integrate seamlessly with your existing tools, eliminating manual data entry and reducing errors by up to 95%. Small businesses typically save 15-20 hours per week with our workflow automation.',
      icon: <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-gold-primary" />,
      features: [
        'Process optimization',
        'Multi-tool integration',
        'Error reduction (up to 95%)',
        'Time savings (15-20 hours/week)',
        'Custom workflow design',
        'No-code and low-code options'
      ],
      useCases: [
        'Email automation',
        'Data entry and processing',
        'Report generation',
        'Invoice processing',
        'Inventory management',
        'Client onboarding workflows',
        'Payment reconciliation'
      ]
    },
    {
      id: 'integrations',
      title: 'Custom Dashboards & Small Apps',
      description: 'Build custom dashboards and small applications tailored to your business',
      longDescription: 'We create custom dashboards and small applications that consolidate your data, automate reporting, and provide real-time insights. Perfect for businesses that need tailored solutions without the complexity of large enterprise software.',
      icon: <Plug className="w-10 h-10 sm:w-12 sm:h-12 text-gold-primary" />,
      features: [
        'Custom dashboard design',
        'Real-time data visualization',
        'Automated reporting',
        'Mobile-responsive interfaces',
        'Integration with existing tools'
      ],
      useCases: [
        'Business analytics dashboards',
        'Custom admin panels',
        'Data aggregation tools',
        'Internal workflow apps',
        'Reporting and monitoring systems'
      ]
    }
  ]

  return (
    <div className="pt-20 sm:pt-24">
      {/* Header */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gold-primary to-neon-cyan bg-clip-text text-transparent"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Comprehensive AI solutions designed to help your business work smarter, not harder.
          </motion.p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg bg-gold-primary/10 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gold-primary">
                      {service.title}
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-4 sm:mb-6">
                      {service.description}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                      {service.longDescription}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gold-primary mb-3 sm:mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Key Features
                        </h3>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="text-sm sm:text-base text-gray-400 flex items-start gap-2">
                              <span className="text-gold-primary mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gold-primary mb-3 sm:mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Common Use Cases
                        </h3>
                        <ul className="space-y-2">
                          {service.useCases.map((useCase) => (
                            <li key={useCase} className="text-sm sm:text-base text-gray-400 flex items-start gap-2">
                              <span className="text-gold-primary mt-1">•</span>
                              <span>{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gold-primary">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10">
              Let&apos;s discuss how we can help automate your business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="md">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/portfolio" variant="outline" size="md">
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

