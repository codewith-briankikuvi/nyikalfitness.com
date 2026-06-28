import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Booking = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/1552334/pexels-photo-1552334.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Booking background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-playfair text-crisp-white mb-6">
              Book Your <span className="text-vibrant-green">Session</span>
            </h1>
            <p className="text-xl text-crisp-white/90 font-spartan">
              Take the first step towards your fitness goals. Choose your preferred booking method below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-lg p-8 text-center hover:border-vibrant-green transition-all duration-500 hover:shadow-2xl"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-vibrant-green/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-vibrant-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-playfair text-crisp-white mb-3">WhatsApp</h3>
              <p className="text-crisp-white/70 mb-6 font-spartan">Chat with us directly on WhatsApp for quick responses</p>
              <a
                href="https://wa.me/254111201803"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-vibrant-green text-deep-charcoal px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300 font-spartan"
              >
                Chat Now
              </a>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-lg p-8 text-center hover:border-vibrant-green transition-all duration-500 hover:shadow-2xl"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-vibrant-green/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-vibrant-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-playfair text-crisp-white mb-3">Email</h3>
              <p className="text-crisp-white/70 mb-6 font-spartan">Send us an email for detailed inquiries</p>
              <a
                href="mailto:charlesnyikal52@gmail.com"
                className="inline-block bg-vibrant-green text-deep-charcoal px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300 font-spartan"
              >
                Send Email
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-lg p-8 text-center hover:border-vibrant-green transition-all duration-500 hover:shadow-2xl"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-vibrant-green/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-vibrant-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-playfair text-crisp-white mb-3">Contact Form</h3>
              <p className="text-crisp-white/70 mb-6 font-spartan">Fill out our form for personalized assistance</p>
              <Link
                to="/contact"
                className="inline-block bg-vibrant-green text-deep-charcoal px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300 font-spartan"
              >
                Fill Form
              </Link>
            </motion.div>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-playfair text-deep-charcoal mb-6"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-deep-charcoal/90 mb-8 max-w-2xl mx-auto font-spartan"
          >
            Book a consultation today and take the first step towards your fitness goals
          </motion.p>
          <Link
            to="/about"
            className="inline-block bg-deep-charcoal text-crisp-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-colors duration-300 font-spartan"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Booking
