import { motion } from 'framer-motion'
import { useState } from 'react'

const Transformations = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      duration: '3 months',
      rating: 5,
      text: 'Coach Fitnyikal transformed my life. I lost 20kg and gained confidence I never knew I had.',
      service: 'Personal Training',
      verified: true
    },
    {
      id: 2,
      name: 'Jane Smith',
      duration: '6 months',
      rating: 5,
      text: 'The online coaching program was perfect for my busy schedule. Amazing results!',
      service: 'Online Coaching',
      verified: true
    },
    {
      id: 3,
      name: 'Mike Johnson',
      duration: '4 months',
      rating: 5,
      text: 'Boxing training with Coach Fitnyikal is intense and rewarding. Best decision ever.',
      service: 'Boxing',
      verified: true
    },
    {
      id: 4,
      name: 'Sarah Williams',
      duration: '5 months',
      rating: 5,
      text: 'The nutrition guidance helped me understand food better. Sustainable lifestyle change.',
      service: 'Nutrition',
      verified: true
    },
    {
      id: 5,
      name: 'David Brown',
      duration: '8 months',
      rating: 5,
      text: 'Built 15kg of muscle with the muscle building program. Professional and effective.',
      service: 'Muscle Building',
      verified: true
    },
    {
      id: 6,
      name: 'Emily Davis',
      duration: '2 months',
      rating: 5,
      text: 'Group training sessions are so much fun! Great community and amazing energy.',
      service: 'Group Training',
      verified: true
    }
  ]

  const filteredTestimonials = selectedFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.service === selectedFilter)

  const services = ['all', 'Personal Training', 'Online Coaching', 'Boxing', 'Muscle Building', 'Nutrition', 'Group Training']

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/1552334/pexels-photo-1552334.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Transformations background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold font-playfair text-crisp-white mb-6"
          >
            Client <span className="text-vibrant-green">Transformations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-crisp-white/90 max-w-2xl mx-auto font-spartan"
          >
            Real stories from real clients who transformed their lives
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-deep-charcoal border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => setSelectedFilter(service)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                  selectedFilter === service
                    ? 'bg-vibrant-green text-deep-charcoal'
                    : 'bg-white/10 text-crisp-white hover:bg-white/20'
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-vibrant-green transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-vibrant-green/20 rounded-full flex items-center justify-center text-2xl font-bold text-vibrant-green">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold font-playfair text-crisp-white">{testimonial.name}</h3>
                    <p className="text-crisp-white/60 font-spartan">{testimonial.duration} • {testimonial.service}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-vibrant-green text-xl">★</span>
                  ))}
                  {testimonial.verified && (
                    <span className="ml-2 text-xs bg-vibrant-green/20 text-vibrant-green px-2 py-1 rounded-full">
                      Verified
                    </span>
                  )}
                </div>
                <p className="text-crisp-white/80 leading-relaxed font-spartan">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Transformation */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold font-playfair text-crisp-white mb-6">Featured Transformation</h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="h-64 bg-vibrant-green/10 rounded-lg flex items-center justify-center">
                  <span className="text-crisp-white/60 font-spartan">Before Photo</span>
                </div>
                <div className="h-64 bg-vibrant-green/10 rounded-lg flex items-center justify-center">
                  <span className="text-crisp-white/60 font-spartan">After Photo</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold font-playfair text-vibrant-green mb-4">Success Story</h3>
              <p className="text-crisp-white/80 leading-relaxed mb-4 font-spartan">
                "Working with Coach Fitnyikal was the best decision I ever made. The personalized training program, nutrition guidance, and constant motivation helped me achieve goals I never thought possible."
              </p>
              <p className="text-crisp-white/60 font-spartan">- Featured Client</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Submit Testimonial CTA */}
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
            Share Your Transformation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-deep-charcoal/90 mb-8 max-w-2xl mx-auto font-spartan"
          >
            Completed your transformation? Share your story and inspire others on their fitness journey
          </motion.p>
          <button className="inline-block bg-deep-charcoal text-crisp-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-colors duration-300 font-spartan">
            Submit Your Story
          </button>
        </div>
      </section>
    </div>
  )
}

export default Transformations
