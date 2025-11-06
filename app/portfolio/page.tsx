'use client'

import { motion } from 'framer-motion'
import { ExternalLink, CheckCircle } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

interface PortfolioItem {
  title: string
  description: string
  industry: string
  solution: string
  results: string[]
  technologies: string[]
}

export default function PortfolioPage() {
  const portfolioItems: PortfolioItem[] = [
    {
      title: 'E-commerce Customer Support Automation',
      description: 'Automated customer service for an online retailer handling 500+ daily inquiries',
      industry: 'E-commerce',
      solution: 'Implemented an AI chatbot that handles order inquiries, returns, and product questions 24/7, integrated with their inventory system.',
      results: [
        'Reduced response time from hours to seconds',
        'Handled 80% of inquiries automatically',
        'Freed up staff for complex issues',
        'Improved customer satisfaction scores'
      ],
      technologies: ['AI Chatbot', 'API Integration', 'Natural Language Processing']
    },
    {
      title: 'Restaurant Order Processing System',
      description: 'Automated order management and kitchen workflow for a restaurant chain',
      industry: 'Food & Beverage',
      solution: 'Built an automated system that processes online orders, sends them to the kitchen, tracks preparation time, and notifies customers.',
      results: [
        'Eliminated manual order entry',
        'Reduced order errors by 95%',
        'Improved kitchen efficiency',
        'Increased order capacity by 40%'
      ],
      technologies: ['Workflow Automation', 'Order Management', 'SMS Notifications']
    },
    {
      title: 'Real Estate Lead Management',
      description: 'Automated lead capture, qualification, and follow-up system',
      industry: 'Real Estate',
      solution: 'Created an AI system that captures leads from multiple sources, qualifies them, schedules viewings, and sends automated follow-ups.',
      results: [
        'Captured 3x more leads',
        'Automated initial qualification',
        'Reduced manual data entry',
        'Improved lead conversion rate'
      ],
      technologies: ['AI Agents', 'CRM Integration', 'Automated Follow-up']
    },
    {
      title: 'Healthcare Appointment Scheduling',
      description: 'Intelligent appointment booking and reminder system',
      industry: 'Healthcare',
      solution: 'Developed an AI-powered system that handles appointment scheduling, sends reminders, manages cancellations, and optimizes schedules.',
      results: [
        'Reduced no-shows by 60%',
        'Automated appointment reminders',
        'Optimized scheduling efficiency',
        'Improved patient satisfaction'
      ],
      technologies: ['AI Agents', 'Calendar Integration', 'SMS Automation']
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
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Real-world solutions that help businesses automate, optimize, and grow.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Items */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 sm:p-8">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium bg-gold-primary/10 text-gold-primary rounded-full mb-3 sm:mb-4">
                      {item.industry}
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-gold-primary">
                      {item.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-300 mb-2">
                      Solution:
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-300 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gold-primary" />
                      Results:
                    </h3>
                    <ul className="space-y-2">
                      {item.results.map((result) => (
                        <li key={result} className="text-sm sm:text-base text-gray-400 flex items-start gap-2">
                          <span className="text-gold-primary mt-1">•</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-300 mb-2">
                      Technologies:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-dark-elevated border border-gold-primary/20 text-gray-400 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-dark-surface">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
              <em>Note: Specific client names and details are kept confidential. These examples represent the types of solutions we deliver.</em>
            </p>
            <Button href="/contact" variant="primary" size="md">
              Discuss Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

