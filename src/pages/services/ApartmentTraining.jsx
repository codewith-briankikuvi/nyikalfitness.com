import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ApartmentTraining = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://i.pinimg.com/736x/73/74/c2/7374c2c26fdbe4ae946cc126c445b752.jpg" alt="Apartment Training background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-playfair text-crisp-white mb-6">
              Apartment <span className="text-vibrant-green">Training</span>
            </h1>
            <p className="text-xl text-crisp-white/90 font-spartan">
              Convenient training sessions at your apartment complex or residential community
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
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>, title: 'On-Site Training', desc: 'Professional training at your apartment complex' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>, title: 'Equipment Provided', desc: 'We bring all necessary equipment to your location' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, title: 'Community Sessions', desc: 'Group sessions for residents to train together' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>, title: 'Custom Programs', desc: 'Workouts designed for apartment gym facilities' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, title: 'Flexible Scheduling', desc: 'Sessions at times convenient for residents' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: 'All Fitness Levels', desc: 'Programs suitable for beginners to advanced' }
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
                  'Apartment complexes wanting to offer fitness amenities',
                  'Residential communities seeking wellness programs',
                  'Property managers looking to add value for residents',
                  'Residents who prefer training close to home',
                  'Corporate housing with fitness needs',
                  'Any residential community with gym facilities'
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
              Apartment training packages are customized based on location, frequency, group size, and duration. Contact us for a personalized quote for your community.
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
                q: 'What facilities does my apartment need?',
                a: 'We can work with various setups from basic equipment rooms to full gym facilities. We\'ll assess your space and create appropriate programs.'
              },
              {
                q: 'Do you work with property managers?',
                a: 'Yes! We partner with property managers and HOAs to bring fitness programs to residential communities.'
              },
              {
                q: 'Can residents book individual sessions?',
                a: 'Yes, we offer both group community sessions and individual personal training at apartment complexes.'
              },
              {
                q: 'How do you handle scheduling?',
                a: 'We work with property management to establish convenient schedules that work for residents, including morning and evening options.'
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
              { name: 'Group Training', path: '/services/group-training' },
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
            Bring Fitness to Your Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-deep-charcoal/90 mb-8 max-w-2xl mx-auto font-spartan"
          >
            Partner with us to bring professional training to your apartment complex
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

export default ApartmentTraining
