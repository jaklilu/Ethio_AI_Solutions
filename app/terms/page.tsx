'use client'

import { motion } from 'framer-motion'

export default function TermsOfServicePage() {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="pt-20 sm:pt-24">
      {/* Header */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-dark-surface">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gold-primary to-neon-cyan bg-clip-text text-transparent"
          >
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-gray-400"
          >
            Last updated: {currentDate}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-dark-bg">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg max-w-none">
          <div className="space-y-8 text-gray-300">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">1. Acceptance of Terms</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                By accessing and using the <span className="text-neon-green">Ethio</span>{' '}<span className="text-gold-primary">AI</span>{' '}<span className="text-red-primary">Solutions</span> website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">2. Description of Services</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                <span className="text-neon-green">Ethio</span>{' '}<span className="text-gold-primary">AI</span>{' '}<span className="text-red-primary">Solutions</span> provides AI automation services, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base sm:text-lg ml-4">
                <li>AI agent development and deployment</li>
                <li>Workflow automation solutions</li>
                <li>Custom dashboard and application development</li>
                <li>Consulting and advisory services related to AI implementation</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed mt-4">
                We reserve the right to modify, suspend, or discontinue any part of our services at any time with or without notice.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">3. User Obligations</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base sm:text-lg ml-4">
                <li>Provide accurate, current, and complete information when using our services</li>
                <li>Maintain the security of your account credentials and information</li>
                <li>Use our services only for lawful purposes and in accordance with these Terms</li>
                <li>Not to interfere with or disrupt the integrity or performance of our services</li>
                <li>Not to attempt to gain unauthorized access to any portion of our services</li>
                <li>Not to use our services to transmit any harmful or malicious code or content</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">4. Intellectual Property</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, and software, are the exclusive property of <span className="text-neon-green">Ethio</span>{' '}<span className="text-gold-primary">AI</span>{' '}<span className="text-red-primary">Solutions</span> or its licensors and are protected by United States and international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mt-4">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use our proprietary content without our express written permission.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">5. Payment Terms</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                For paid services, the following terms apply:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base sm:text-lg ml-4">
                <li>Payment terms will be specified in individual service agreements or invoices</li>
                <li>All fees are non-refundable unless otherwise stated in writing</li>
                <li>You are responsible for any taxes applicable to the services purchased</li>
                <li>We reserve the right to change our pricing with reasonable notice</li>
                <li>Late payments may result in suspension or termination of services</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">6. Service Level and Warranties</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                We strive to provide reliable and high-quality services. However, we make no warranties, expressed or implied, regarding:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base sm:text-lg ml-4">
                <li>The uninterrupted or error-free operation of our services</li>
                <li>The accuracy, completeness, or reliability of any information provided</li>
                <li>The suitability of our services for your specific needs or requirements</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed mt-4">
                Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">7. Limitation of Liability</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                To the fullest extent permitted by applicable law, <span className="text-neon-green">Ethio</span>{' '}<span className="text-gold-primary">AI</span>{' '}<span className="text-red-primary">Solutions</span> shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base sm:text-lg ml-4">
                <li>Your use or inability to use our services</li>
                <li>Any unauthorized access to or use of our servers or any personal information stored therein</li>
                <li>Any errors or omissions in any content</li>
                <li>Any interruption or cessation of transmission to or from our services</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed mt-4">
                Our total liability to you for all claims arising from or related to the use of our services shall not exceed the amount you paid to us in the twelve (12) months preceding the claim.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">8. Confidentiality</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                In the course of providing services, we may have access to your confidential information. We agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base sm:text-lg ml-4">
                <li>Keep all confidential information in strict confidence</li>
                <li>Not disclose confidential information to third parties without your prior written consent</li>
                <li>Use confidential information solely for the purpose of providing our services</li>
                <li>Take reasonable measures to protect the confidentiality of your information</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed mt-4">
                Confidential information does not include information that is publicly available, independently developed by us, or required to be disclosed by law.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">9. Termination</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms of Service. Upon termination, your right to use the services will cease immediately.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mt-4">
                You may terminate your use of our services at any time by discontinuing use and notifying us in writing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">10. Indemnification</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                You agree to indemnify, defend, and hold harmless <span className="text-neon-green">Ethio</span>{' '}<span className="text-gold-primary">AI</span>{' '}<span className="text-red-primary">Solutions</span>, its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising from or relating to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base sm:text-lg ml-4">
                <li>Your use of our services</li>
                <li>Your violation of these Terms of Service</li>
                <li>Your violation of any rights of another party</li>
                <li>Any content or data you provide or transmit through our services</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">11. Governing Law</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any disputes arising from or relating to these Terms or our services shall be subject to the exclusive jurisdiction of the courts located in the United States.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">12. Changes to Terms</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the new Terms on this page and updating the &quot;Last updated&quot; date. Your continued use of our services after such modifications constitutes your acceptance of the updated Terms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">13. Severability</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                If any provision of these Terms of Service is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">14. Contact Information</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-dark-elevated border border-gold-primary/20 rounded-lg p-6 mt-4">
                <p className="text-base sm:text-lg text-gray-300">
                  <strong>
                    <span className="text-neon-green">Ethio</span>{' '}
                    <span className="text-gold-primary">AI</span>{' '}
                    <span className="text-red-primary">Solutions</span>
                  </strong>
                </p>
                <p className="text-base sm:text-lg text-gray-400 mt-2">
                  Email: <a href="mailto:contact@ethioaisolutions.com" className="text-gold-primary hover:text-gold-accent">contact@ethioaisolutions.com</a>
                </p>
                <p className="text-base sm:text-lg text-gray-400">
                  Phone: <a href="tel:+13236732570" className="text-gold-primary hover:text-gold-accent">(323) 673-2570</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

