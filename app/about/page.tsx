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
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                Our mission is to bring practical, affordable AI solutions to small and mid-sized businesses. We combine deep technical expertise across compute, networking, storage, cloud applications, and secure infrastructure with a clear focus on real-world operations.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                We believe AI should remove friction, simplify everyday work, and create measurable value — not add complexity. Every solution we build is designed to be stable, efficient, and aligned with how your business actually runs, so you can move faster with confidence.
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
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface">
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
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                Working with both large enterprises and small businesses has shown us something important: AI can transform the way organizations operate — but small businesses are often left behind due to cost, complexity, and lack of accessible expertise.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                That gap is why we founded <span className="text-neon-green">Ethio</span>{' '}<span className="text-gold-primary">AI</span>{' '}<span className="text-red-primary">Solutions</span>. We bring a holistic understanding of systems — from infrastructure and data flow to cloud applications and human workflows — and apply it in a way that&apos;s simple, practical, and results-driven.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                Small businesses don&apos;t need technology for technology&apos;s sake. They need clear ROI, quick wins, and automation that fits naturally into their existing workflow. Our job is to deliver exactly that: solutions that reduce manual work, eliminate bottlenecks, and have real impact from day one.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                When your business succeeds, we succeed.
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

