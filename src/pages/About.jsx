import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/1552334/pexels-photo-1552334.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="About background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold font-playfair text-crisp-white mb-6"
          >
            About <span className="text-vibrant-green">Coach Fitnyikal</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-crisp-white/90 max-w-2xl mx-auto font-spartan"
          >
            Building a fitness legacy that inspires people to live healthier and stronger lives
          </motion.p>
        </div>
      </section>

      {/* Coach Photo Section */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden mb-8"
            >
              <img src="https://images.pexels.com/photos/1534438/pexels-photo-1534438.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Coach Fitnyikal" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold font-playfair text-crisp-white mb-2">Charles Nyikal</h3>
                <p className="text-crisp-white/90 font-spartan">Fitness Coach & Personal Trainer</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center font-playfair text-crisp-white mb-12"
          >
            My Fitness Journey
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-lg p-8"
            >
              <p className="text-crisp-white/80 leading-relaxed mb-4 font-spartan">
                My fitness journey started as a personal commitment to improve myself, but with time, it became much more than just training. Fitness became a lifestyle built around discipline, consistency, health, and personal growth.
              </p>
              <p className="text-crisp-white/80 leading-relaxed mb-4 font-spartan">
                I discovered that my passion was not only about transforming my own body, but also about helping others achieve their fitness and wellness goals.
              </p>
              <p className="text-crisp-white/80 leading-relaxed font-spartan">
                Through my journey, I developed myself as a fitness coach and personal trainer, where I focus on guiding people through their transformations. I believe fitness is not only about physical appearance, but also about building confidence, improving health, and creating a sustainable lifestyle.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center font-playfair text-crisp-white mb-12"
          >
            Certifications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Personal Training', desc: 'Certified fitness professional' },
              { title: 'Strength Training', desc: 'Advanced strength coaching' },
              { title: 'Boxing Training', desc: 'Combat fitness specialist' }
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:border-vibrant-green transition-colors duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-vibrant-green/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-vibrant-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <h3 className="text-xl font-semibold font-playfair text-crisp-white mb-2">{cert.title}</h3>
                <p className="text-crisp-white/70 font-spartan">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold font-playfair text-crisp-white mb-6">The Vision</h2>
              <p className="text-crisp-white/80 leading-relaxed font-spartan">
                My vision is to become a fitness model and represent my own brand — a brand built on discipline, excellence, and inspiration. I want to use my journey to motivate others to believe in themselves and pursue their fitness and health goals.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold font-playfair text-crisp-white mb-6">The Mission</h2>
              <p className="text-crisp-white/80 leading-relaxed font-spartan">
                My bigger dream is to build a fitness and wellness brand that transforms lives. I aspire to own a well-equipped gym that provides more than just workouts — a place that promotes complete wellbeing. I envision a calming, nature-inspired environment where people can improve physically, mentally, and emotionally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center font-playfair text-crisp-white mb-12"
          >
            Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Excellence', desc: 'I strive to deliver the highest standards of coaching, service, and professionalism.' },
              { title: 'Integrity', desc: 'I believe in building trust through honesty, accountability, and genuine care for people.' },
              { title: 'Transformation', desc: 'I aim to help people create lasting positive changes in their lives.' },
              { title: 'Community', desc: 'I want to create an environment where people feel supported, motivated, and inspired.' }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-vibrant-green transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold font-playfair text-vibrant-green mb-3">{value.title}</h3>
                <p className="text-crisp-white/80 font-spartan">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
