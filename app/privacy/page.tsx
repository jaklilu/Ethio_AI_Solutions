'use client'

import { motion } from 'framer-motion'

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">1. Introduction</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Welcome to Ethio AI Solutions (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                By accessing or using our website, you agree to the terms of this Privacy Policy. If you do not agree with the practices described in this policy, please do not use our services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">2.1 Personal Information</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                We may collect personal information that you voluntarily provide to us, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base sm:text-lg ml-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company name and business information</li>
                <li>Information provided in contact forms or consultation requests</li>
                <li>Payment information (processed through secure third-party providers)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-200 mb-2 mt-6">2.2 Automatically Collected Information</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                When you visit our website, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base sm:text-lg ml-4">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">3. How We Use Your Information</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base sm:text-lg ml-4">
                <li>To provide, maintain, and improve our services</li>
                <li>To respond to your inquiries, requests, and provide customer support</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To process transactions and send related information</li>
                <li>To analyze website usage and improve user experience</li>
                <li>To comply with legal obligations and protect our rights</li>
                <li>To prevent fraud and ensure security</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base sm:text-lg ml-4">
                <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as hosting, analytics, and email delivery.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities.</li>
                <li><strong>Protection of Rights:</strong> We may disclose information to protect our rights, property, or safety, or that of our users or others.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">5. Data Security</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings. Please note that disabling cookies may limit certain functionalities of our website.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">7. Your Rights</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base sm:text-lg ml-4">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to object to processing of your information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided in the Contact Us section below.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">8. Third-Party Links</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete that information.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4">11. Contact Us</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-dark-elevated border border-gold-primary/20 rounded-lg p-6 mt-4">
                <p className="text-base sm:text-lg text-gray-300">
                  <strong className="text-gold-primary">Ethio AI Solutions</strong>
                </p>
                <p className="text-base sm:text-lg text-gray-400 mt-2">
                  Email: <a href="mailto:contact@ethioaisolutions.com" className="text-gold-primary hover:text-gold-accent">contact@ethioaisolutions.com</a>
                </p>
                <p className="text-base sm:text-lg text-gray-400">
                  Phone: <a href="tel:+13239919373" className="text-gold-primary hover:text-gold-accent">(323) 991-9373</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

