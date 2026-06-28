import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Pricing = () => {
  const standardPackages = [
    {
      id: 1,
      name: 'Starter Package',
      price: 'KES 15,000',
      duration: 'per month',
      features: [
        '4 personal training sessions',
        'Customized workout plan',
        'Nutrition guidance',
        'Progress tracking',
        'Email support'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Premium Package',
      price: 'KES 25,000',
      duration: 'per month',
      features: [
        '8 personal training sessions',
        'Customized workout plan',
        'Comprehensive nutrition plan',
        'Progress tracking',
        '24/7 WhatsApp support',
        'Monthly assessment'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Elite Package',
      price: 'KES 40,000',
      duration: 'per month',
      features: [
        '12 personal training sessions',
        'Customized workout plan',
        'Premium nutrition planning',
        'Progress tracking',
        '24/7 priority support',
        'Weekly assessments',
        'Meal prep guidance'
      ],
      popular: false
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1552334/pexels-photo-1552334.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Pricing background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold font-playfair text-crisp-white mb-6"
          >
            Investment in <span className="text-vibrant-green">Yourself</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="text-xl text-crisp-white/90 max-w-2xl mx-auto font-spartan"
          >
            Choose the package that fits your goals and budget
          </motion.p>
        </div>
      </section>

      {/* Standard Packages */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-crisp-white mb-12"
          >
            Standard Packages
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {standardPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative bg-white/5 border rounded-lg p-8 hover:border-vibrant-green transition-all duration-300 ${
                  pkg.popular ? 'border-vibrant-green' : 'border-white/10'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-vibrant-green text-deep-charcoal px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-crisp-white mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-vibrant-green">{pkg.price}</span>
                  <span className="text-crisp-white/60">/{pkg.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-crisp-white/80">
                      <span className="text-vibrant-green mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/booking"
                  className="block w-full bg-vibrant-green text-deep-charcoal px-6 py-3 rounded-lg font-semibold text-center hover:bg-white transition-colors duration-300"
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-lg"
            >
              <div className="relative h-64 md:h-80">
                <img
                  src="https://images.pexels.com/photos/4167552/pexels-photo-4167552.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Personal training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
              <div className="bg-white/5 border border-vibrant-green p-12 text-center -mt-20 relative z-10 mx-8">
                <h2 className="text-4xl font-bold text-crisp-white mb-4 font-playfair">Custom 1-on-1 Training</h2>
                <p className="text-xl text-crisp-white/90 mb-8 max-w-2xl mx-auto font-spartan">
                  Looking for a personalized training experience tailored specifically to your unique goals, schedule, and preferences? Schedule a consultation with Coach Fitnyikal to create your custom package.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-vibrant-green/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-vibrant-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-crisp-white mb-1 font-playfair">Personalized</h3>
                    <p className="text-crisp-white/70 text-sm font-spartan">Tailored to your goals</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-vibrant-green/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-vibrant-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-crisp-white mb-1 font-playfair">Flexible</h3>
                    <p className="text-crisp-white/70 text-sm font-spartan">Schedule that works for you</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-vibrant-green/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-vibrant-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-crisp-white mb-1 font-playfair">Results-Driven</h3>
                    <p className="text-crisp-white/70 text-sm font-spartan">Focused on your success</p>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Link
                    to="/booking"
                    className="inline-block bg-vibrant-green text-deep-charcoal px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-colors duration-300 font-spartan"
                  >
                    Schedule Consultation
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-crisp-white mb-12"
          >
            Package Comparison
          </motion.h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-crisp-white">Features</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-crisp-white">Starter</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-vibrant-green">Premium</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-crisp-white">Elite</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Personal Training Sessions', starter: '4', premium: '8', elite: '12' },
                  { feature: 'Customized Workout Plan', starter: '✓', premium: '✓', elite: '✓' },
                  { feature: 'Nutrition Guidance', starter: '✓', premium: '✓', elite: '✓' },
                  { feature: 'Progress Tracking', starter: '✓', premium: '✓', elite: '✓' },
                  { feature: 'Email Support', starter: '✓', premium: '✓', elite: '✓' },
                  { feature: 'Comprehensive Nutrition Plan', starter: '✗', premium: '✓', elite: '✓' },
                  { feature: '24/7 WhatsApp Support', starter: '✗', premium: '✓', elite: '✓' },
                  { feature: 'Monthly Assessment', starter: '✗', premium: '✓', elite: '✓' },
                  { feature: 'Weekly Assessments', starter: '✗', premium: '✗', elite: '✓' },
                  { feature: 'Meal Prep Guidance', starter: '✗', premium: '✗', elite: '✓' }
                ].map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-t border-white/10 hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-4 text-crisp-white/80">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-crisp-white/80">{row.starter}</td>
                    <td className="px-6 py-4 text-center text-vibrant-green font-semibold">{row.premium}</td>
                    <td className="px-6 py-4 text-center text-crisp-white/80">{row.elite}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-crisp-white mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'What payment methods do you accept?',
                a: 'We accept M-Pesa, bank transfers, and cash payments for all packages.'
              },
              {
                q: 'What is your cancellation policy?',
                a: 'Packages can be cancelled with 7 days notice. Refunds are processed within 14 business days.'
              },
              {
                q: 'Can I modify my package?',
                a: 'Yes, you can upgrade or modify your package at any time. Contact us to discuss your options.'
              },
              {
                q: 'Do you offer discounts?',
                a: 'We offer discounts for long-term commitments (3+ months) and group bookings.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-vibrant-green transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-crisp-white mb-2">{faq.q}</h3>
                <p className="text-crisp-white/70">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-vibrant-green">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-deep-charcoal mb-6 font-playfair"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-deep-charcoal/90 mb-8 max-w-2xl mx-auto font-spartan"
          >
            Choose your package or schedule a consultation to get started
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link
              to="/booking"
              className="inline-block bg-deep-charcoal text-crisp-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-colors duration-300 font-spartan"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
