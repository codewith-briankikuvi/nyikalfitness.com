import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const MuscleBuilding = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://i.pinimg.com/736x/f4/68/83/f468838d85b76ba8a383af24c97cff9e.jpg" alt="Muscle Building background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-playfair text-crisp-white mb-6">
              Muscle <span className="text-vibrant-green">Building</span>
            </h1>
            <p className="text-xl text-crisp-white/90 font-spartan">
              Specialized strength and hypertrophy programs to build lean muscle mass effectively
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center font-playfair text-crisp-white mb-12"
          >
            What's Included
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: 'Strength Training', desc: 'Progressive overload programs for maximum muscle growth' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, title: 'Progress Tracking', desc: 'Track your strength gains and body composition changes' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>, title: 'Hypertrophy Focus', desc: 'Science-based muscle building techniques' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, title: 'Nutrition Planning', desc: 'Macro and calorie planning for muscle growth' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Form Correction', desc: 'Perfect your lifting technique for optimal results' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>, title: 'Periodization', desc: 'Structured training cycles to prevent plateaus' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:border-vibrant-green transition-colors duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-vibrant-green/10 rounded-full flex items-center justify-center text-vibrant-green">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold font-playfair text-crisp-white mb-2">{item.title}</h3>
                <p className="text-crisp-white/70 font-spartan">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold font-playfair text-crisp-white mb-6 text-center">Who This Is For</h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <ul className="space-y-4">
                {[
                  'Individuals looking to build lean muscle mass',
                  'Those wanting to increase strength and power',
                  'People who have hit a plateau in their training',
                  'Beginners wanting to start with proper technique',
                  'Athletes looking to improve performance',
                  'Anyone wanting to improve body composition'
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-crisp-white/80 font-spartan">
                    <span className="text-vibrant-green mr-3 mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center font-playfair text-crisp-white mb-12"
          >
            Investment
          </motion.h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl font-playfair text-crisp-white mb-4">Custom Pricing</p>
            <p className="text-crisp-white/70 mb-8 font-spartan">
              Muscle building programs are customized based on your experience level, goals, and training frequency. Contact us for a personalized quote.
            </p>
            <Link
              to="/booking"
              className="inline-block bg-vibrant-green text-deep-charcoal px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-colors duration-300 font-spartan"
            >
              Get Your Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center font-playfair text-crisp-white mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How long does it take to see results?',
                a: 'Most clients notice strength gains within 2-4 weeks. Visible muscle changes typically begin after 8-12 weeks of consistent training and proper nutrition.'
              },
              {
                q: 'Do I need gym access?',
                a: 'While gym access is ideal, we can design effective muscle building programs with minimal equipment or home gym setups.'
              },
              {
                q: 'Will I get too bulky?',
                a: 'Building significant muscle mass takes years of dedicated training. We can adjust your program based on your aesthetic goals.'
              },
              {
                q: 'What about supplements?',
                a: 'We focus on whole foods first but can provide guidance on supplements if needed. Supplements are optional and not required for results.'
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
                <h3 className="text-xl font-semibold font-playfair text-crisp-white mb-2">{faq.q}</h3>
                <p className="text-crisp-white/70 font-spartan">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center font-playfair text-crisp-white mb-12"
          >
            Related Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Personal Training', path: '/services/personal-training' },
              { name: 'Nutrition', path: '/services/nutrition' },
              { name: 'Online Coaching', path: '/services/online-coaching' }
            ].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={service.path}
                  className="block bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:border-vibrant-green transition-colors duration-300"
                >
                  <h3 className="text-xl font-bold font-playfair text-crisp-white">{service.name}</h3>
                  <p className="text-vibrant-green mt-2 font-spartan">Learn More →</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/1552334/pexels-photo-1552334.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="CTA background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-vibrant-green/90"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-playfair text-deep-charcoal mb-6"
          >
            Ready to Build Muscle?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-deep-charcoal/90 mb-8 max-w-2xl mx-auto font-spartan"
          >
            Start your muscle building journey with a science-based program
          </motion.p>
          <Link
            to="/booking"
            className="inline-block bg-deep-charcoal text-crisp-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-colors duration-300 font-spartan"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default MuscleBuilding
