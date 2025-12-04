'use client'

import { motion } from 'framer-motion'
import { Briefcase, Home, Heart, Users, Stethoscope, Scale } from 'lucide-react'
import Card from '@/components/ui/Card'

interface Industry {
  name: string
  icon: React.ReactNode
  examples: string[]
}

export default function IndustriesSection() {
  const industries: Industry[] = [
    {
      name: 'Professional Services',
      icon: <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-gold-primary" />,
      examples: [
        'Automated client intake and onboarding',
        'Document generation and management',
        'Appointment scheduling and reminders',
        'Billing and invoice automation'
      ]
    },
    {
      name: 'Real Estate',
      icon: <Home className="w-6 h-6 sm:w-8 sm:h-8 text-gold-primary" />,
      examples: [
        'Lead capture and qualification',
        'Property listing management',
        'Automated follow-up emails',
        'Showing scheduling automation'
      ]
    },
    {
      name: 'Local Service Companies',
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-gold-primary" />,
      examples: [
        'Service request processing',
        'Technician scheduling',
        'Customer communication automation',
        'Invoice and payment tracking'
      ]
    },
    {
      name: 'Healthcare Offices',
      icon: <Stethoscope className="w-6 h-6 sm:w-8 sm:h-8 text-gold-primary" />,
      examples: [
        'Appointment reminders',
        'Patient intake forms',
        'Medical record organization',
        'Billing and insurance processing'
      ]
    },
    {
      name: 'Nonprofits & Community Groups',
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-gold-primary" />,
      examples: [
        'Member management and communication',
        'Donation tracking and thank-you automation',
        'Event registration and reminders',
        'Volunteer coordination'
      ]
    },
    {
      name: 'Membership Organizations',
      icon: <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-gold-primary" />,
      examples: [
        'Member onboarding workflows',
        'Automated renewal reminders',
        'Attendance tracking',
        'Communication and engagement automation'
      ]
    }
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8 md:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gold-primary to-neon-cyan bg-clip-text text-transparent">
            Industries We Help
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored AI automation solutions for businesses across different sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 sm:p-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-gold-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                  {industry.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gold-primary">
                  {industry.name}
                </h3>
                <ul className="space-y-2">
                  {industry.examples.map((example) => (
                    <li key={example} className="text-sm sm:text-base text-gray-400 flex items-start gap-2">
                      <span className="text-gold-primary mt-1">•</span>
                      <span>{example}</span>
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

