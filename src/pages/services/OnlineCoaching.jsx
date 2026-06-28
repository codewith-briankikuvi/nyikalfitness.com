import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const OnlineCoaching = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://i.pinimg.com/736x/65/12/35/6512358c4d8312cfcc0433eb798bd6cb.jpg" alt="Online Coaching background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-playfair text-crisp-white mb-6">
              Online <span className="text-vibrant-green">Coaching</span>
            </h1>
            <p className="text-xl text-crisp-white/90 font-spartan">
              Flexible training programs with remote guidance and support from anywhere in the world
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
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>, title: 'Remote Training', desc: 'Work out from anywhere with customized programs' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>, title: 'Video Check-ins', desc: 'Regular video calls to review progress and technique' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, title: 'App Tracking', desc: 'Use our app to log workouts and track progress' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>, title: '24/7 Messaging', desc: 'Unlimited support via WhatsApp and email' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, title: 'Nutrition Plans', desc: 'Customized meal plans to support your goals' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Goal Setting', desc: 'Regular goal reviews and adjustments' }
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
                  'People with busy schedules who need flexibility',
                  'Those who travel frequently',
                  'Individuals who prefer working out at home or their own gym',
                  'International clients who want remote coaching',
                  'Anyone who wants professional guidance without in-person sessions',
                  'Self-motivated individuals who need structure and accountability'
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
              Online coaching packages are customized based on your goals, frequency of check-ins, and duration. Contact us for a personalized quote.
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
                q: 'How does online coaching work?',
                a: 'You\'ll receive a customized workout plan through our app, with regular video check-ins to review progress and technique. We provide 24/7 support via messaging.'
              },
              {
                q: 'What equipment do I need?',
                a: 'Equipment requirements vary based on your program. We can design programs with minimal equipment (bodyweight, dumbbells) or full gym access.'
              },
              {
                q: 'How often do we have check-ins?',
                a: 'Typically weekly video check-ins, but this can be customized based on your needs and preferences.'
              },
              {
                q: 'Can I switch between online and in-person training?',
                a: 'Yes! We offer flexible options and can adjust your program as your needs change.'
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
              { name: 'Muscle Building', path: '/services/muscle-building' }
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
            Start Training From Anywhere
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-deep-charcoal/90 mb-8 max-w-2xl mx-auto font-spartan"
          >
            Get professional coaching no matter where you are in the world
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

export default OnlineCoaching
