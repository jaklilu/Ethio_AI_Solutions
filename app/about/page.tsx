'use client'

import { motion } from 'framer-motion'
import { Brain, Target, Users, Lightbulb } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8 text-gold-primary" />,
      title: 'Accessibility',
      description: 'Making AI solutions accessible to businesses of all sizes, not just enterprises.'
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-gold-primary" />,
      title: 'Partnership',
      description: 'We work with you as a partner, understanding your unique needs and goals.'
    },
    {
      icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-gold-primary" />,
      title: 'Innovation',
      description: 'Staying at the forefront of AI technology to deliver cutting-edge solutions.'
    },
    {
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-gold-primary" />,
      title: 'Practicality',
      description: 'Focusing on real-world solutions that deliver measurable business value.'
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Bringing enterprise-level AI automation to businesses that need it most.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 sm:p-8 md:p-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gold-primary">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                AI isn&apos;t just for big companies. At Ethio AI Solutions, we believe that every business, regardless of size, should have access to powerful AI automation tools.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                We specialize in creating affordable, practical AI solutions that help small and mid-sized businesses automate processes, reduce manual work, and compete more effectively. Our goal is to make AI accessible, understandable, and valuable for the businesses that power our economy.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                Whether you&apos;re a solo entrepreneur, a growing startup, or an established small business, we help you leverage AI the same way large enterprises do — without the enterprise price tag.
              </p>
            </motion.div>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gold-primary to-neon-cyan bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              What drives us every day
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-lg bg-gold-primary/10 flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gold-primary">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder/Team Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 sm:p-8 md:p-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gold-primary">
                Why We Do This
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                Having worked with both large enterprises and small businesses, we&apos;ve seen firsthand how AI can transform operations. However, we also noticed that small businesses were often left behind, unable to access the same powerful tools due to cost and complexity.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                That&apos;s why we founded Ethio AI Solutions — to bridge that gap. We combine deep technical expertise with a focus on practical, affordable solutions. We understand that small businesses need results, not just technology for technology&apos;s sake.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                Every solution we build is designed with your business in mind: clear ROI, quick implementation, and real impact. Because when your business succeeds, we succeed.
              </p>
            </motion.div>
          </Card>
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
              Ready to Work Together?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10">
              Let&apos;s discuss how AI can help your business grow.
            </p>
            <Button href="/contact" variant="primary" size="md">
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

