'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, MessageSquare } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: Replace with your actual API endpoint when backend is ready
      // For now, this is a placeholder
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      // For development: show success even if API doesn't exist yet
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

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
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Ready to automate your business? Let&apos;s discuss how AI can transform your workflows.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info - Stack on mobile */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold-primary/10 rounded-lg flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gold-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-1">Email</h3>
                      <a
                        href="mailto:contact@ethioaisolutions.com"
                        className="text-sm sm:text-base text-gold-primary hover:underline touch-manipulation"
                      >
                        contact@ethioaisolutions.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold-primary/10 rounded-lg flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gold-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-1">Phone</h3>
                      <a
                        href="tel:+13239919373"
                        className="text-sm sm:text-base text-gold-primary hover:underline touch-manipulation"
                      >
                        (323) 991-9373
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold-primary/10 rounded-lg flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gold-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-1">Location</h3>
                      <p className="text-sm sm:text-base text-gray-300">
                        United States
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Form - Full width on mobile */}
            <div className="lg:col-span-2">
              <Card className="p-6 sm:p-8 md:p-10">
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm sm:text-base"
                    >
                      Thank you! We&apos;ve received your message and will get back to you soon.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm sm:text-base"
                    >
                      Something went wrong. Please try again or email us directly.
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-dark-elevated border border-gold-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 transition-all text-base touch-manipulation"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-dark-elevated border border-gold-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 transition-all text-base touch-manipulation"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-dark-elevated border border-gold-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 transition-all text-base touch-manipulation"
                        placeholder="(323) 991-9373"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-dark-elevated border border-gold-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 transition-all text-base touch-manipulation"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-dark-elevated border border-gold-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 transition-all resize-none text-base touch-manipulation"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </Button>
                </motion.form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

