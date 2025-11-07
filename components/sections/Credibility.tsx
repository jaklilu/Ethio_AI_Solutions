'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Zap, Users } from 'lucide-react'
import Card from '@/components/ui/Card'

export default function CredibilitySection() {
  const credentials = [
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 text-gold-primary" />,
      title: '25+ Years Experience',
      description: 'Enterprise IT expertise from leading organizations'
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-gold-primary" />,
      title: 'Enterprise-Grade',
      description: 'Security, compliance, and best practices'
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-gold-primary" />,
      title: 'Small Business Focus',
      description: 'Affordable solutions without enterprise complexity'
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-gold-primary" />,
      title: 'Proven Results',
      description: 'Real projects delivering measurable value'
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gold-primary to-neon-cyan bg-clip-text text-transparent">
            25+ Years of Enterprise IT Experience
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Before founding Ethio AI Solutions, we spent over two decades designing, supporting, and optimizing enterprise systems for organizations like Disney, Pepperdine University, and Justice Telecom.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-8 sm:mb-12"
        >
          <Card className="p-6 sm:p-8 md:p-10">
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4">
              We now bring that depth of knowledge — security, compliance, automation, system design, and business operations — to small businesses looking to modernize with AI.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
              Enterprise expertise. Small business focus. Affordable solutions.
            </p>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {credentials.map((credential, index) => (
            <motion.div
              key={credential.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-lg bg-gold-primary/10 flex items-center justify-center">
                  {credential.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gold-primary">
                  {credential.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {credential.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

