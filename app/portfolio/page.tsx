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
      title: 'Mahaber Hosting & Attendance Automation',
      description: 'Automated hosting sequence and attendance tracking for a 50+ member community',
      industry: 'Community Management',
      solution: 'Built a mobile-friendly platform that manages hosting rotation, attendance voting, image uploads, and history tracking. Fully automated using backend APIs and dynamic UI updates.',
      results: [
        'Eliminated manual coordination and texting',
        'Reduced hosting conflicts to zero',
        'Automated attendance collection',
        'Provided complete hosting history and rotations'
      ],
      technologies: ['Flask API', 'SQLite', 'PythonAnywhere', 'JavaScript UI', 'Automation']
    },
    {
      title: 'Bible Bus Participant Automation',
      description: 'Automated onboarding, reminders, and progress tracking for 300+ seasonal participants',
      industry: 'Nonprofit / Faith-Based Automation',
      solution: 'Created an automation pipeline connecting Google Sheets, WhatsApp, YouVersion plans, and email notifications. The system tracks introductions, reading progress, and sends targeted reminders.',
      results: [
        'Reduced manual tracking by 90%',
        'Improved participant engagement and completion rates',
        'Automatically manages new groups every 3 months',
        'Unified WhatsApp + email + spreadsheet workflow'
      ],
      technologies: ['n8n', 'Google Sheets API', 'SendGrid', 'WhatsApp Notifications', 'YouVersion Integration']
    },
    {
      title: 'PayPal Invoice & Payment Reconciliation',
      description: 'End-to-end automation for tracking PayPal invoices, manual payments, and receipts',
      industry: 'Finance / Operations',
      solution: 'Built a reconciliation system that fetches PayPal invoices across multiple pages, matches payments from PayPal and bank transfers, generates receipt-upload links, and updates Google Sheets in real time.',
      results: [
        'Consolidated over 1,700 invoices',
        'Reduced manual bookkeeping from hours to minutes',
        'Automated receipt submission with a web upload system',
        'Eliminated duplicate payment checks'
      ],
      technologies: ['PayPal API', 'n8n', 'Google Sheets', 'Custom Receipt Upload Page']
    },
    {
      title: 'Family Tree Dynamic Profile Engine',
      description: 'Graphical family tree system with dynamic layouts, admin tools, and image-based navigation',
      industry: 'Family / Cultural Heritage',
      solution: 'Developed a visual family tree platform with dynamic relationship rendering (single, married, kids, multiple spouses), admin data entry, image cropping, profile pages, and a future matching-game module.',
      results: [
        'Centralized 300+ family records',
        'Simplified relationship management',
        'Enabled future generations to explore their heritage interactively',
        'Inspired a gamified "match the faces" educational tool'
      ],
      technologies: ['Flask API', 'SQLite', 'Wix Frontend', 'Custom JavaScript', 'Image Processing']
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
              <em>Real projects delivering real results. Ready to automate your business processes?</em>
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

