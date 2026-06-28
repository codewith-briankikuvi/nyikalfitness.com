import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Boxing = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://i.pinimg.com/736x/f0/35/7a/f0357a4f96e217679de901fd2048d3b1.jpg" alt="Boxing Training background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-playfair text-crisp-white mb-6">
              Boxing <span className="text-vibrant-green">Training</span>
            </h1>
            <p className="text-xl text-crisp-white/90 font-spartan">
              Combat fitness training for all skill levels, from beginners to advanced fighters
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
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: 'Technique Training', desc: 'Learn proper boxing fundamentals and advanced techniques' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>, title: 'Strength & Conditioning', desc: 'Build the strength and endurance needed for boxing' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Pad Work', desc: 'Focus mitt and pad work for precision and timing' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'Defense Skills', desc: 'Master defensive techniques and footwork' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>, title: 'HIIT Boxing', desc: 'High-intensity boxing workouts for fat burning' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>, title: 'Sparring', desc: 'Controlled sparring sessions for practical experience' }
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
                  'Complete beginners with no boxing experience',
                  'Fitness enthusiasts looking for a new challenge',
                  'Those wanting to learn self-defense skills',
                  'People seeking high-intensity cardio workouts',
                  'Anyone interested in combat sports',
                  'Athletes looking to improve hand-eye coordination'
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
              Boxing training packages are customized based on your skill level, goals, and training frequency. Contact us for a personalized quote.
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
                q: 'Do I need any experience?',
                a: 'No experience necessary! We train complete beginners through to advanced fighters. Everyone starts at their own level.'
              },
              {
                q: 'What equipment do I need?',
                a: 'We provide all necessary equipment including gloves, pads, and protective gear. Just bring comfortable workout clothes and water.'
              },
              {
                q: 'Is sparring mandatory?',
                a: 'Sparring is optional and only introduced when you\'re ready. We focus heavily on technique and fitness first.'
              },
              {
                q: 'Can boxing help with weight loss?',
                a: 'Absolutely! Boxing is one of the most effective calorie-burning workouts. Combined with proper nutrition, it\'s excellent for weight loss.'
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
              { name: 'Muscle Building', path: '/services/muscle-building' },
              { name: 'Group Training', path: '/services/group-training' }
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
            Ready to Step Into the Ring?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-deep-charcoal/90 mb-8 max-w-2xl mx-auto font-spartan"
          >
            Start your boxing training journey today with expert guidance
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

export default Boxing
