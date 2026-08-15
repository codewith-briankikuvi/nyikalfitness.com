import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          consent: true
        })
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://i.pinimg.com/236x/8f/7c/c4/8f7cc43a9aef19bcb3a7e7b07c21f170.jpg" alt="Contact background" className="w-full h-full object-cover" />
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
              Get in <span className="text-vibrant-green">Touch</span>
            </h1>
            <p className="text-xl text-crisp-white/90 font-spartan">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold font-playfair text-crisp-white mb-6 text-center">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 border border-green-500/50 text-green-400 p-4 rounded-lg mb-6 font-spartan"
                >
                  Thank you for your message! We'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/20 border border-red-500/50 text-red-400 p-4 rounded-lg mb-6 font-spartan"
                >
                  Something went wrong. Please try again or contact us directly via WhatsApp or email.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-crisp-white mb-2 font-spartan">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-crisp-white placeholder-crisp-white/50 focus:outline-none focus:border-vibrant-green transition-colors font-spartan"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-crisp-white mb-2 font-spartan">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-crisp-white placeholder-crisp-white/50 focus:outline-none focus:border-vibrant-green transition-colors font-spartan"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-crisp-white mb-2 font-spartan">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-crisp-white placeholder-crisp-white/50 focus:outline-none focus:border-vibrant-green transition-colors font-spartan"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-crisp-white mb-2 font-spartan">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-deep-charcoal border border-white/10 rounded-lg text-crisp-white focus:outline-none focus:border-vibrant-green transition-colors font-spartan"
                  >
                    <option value="" className="bg-deep-charcoal text-crisp-white/50">Select a service</option>
                    <option value="Personal Training" className="bg-deep-charcoal text-crisp-white">Personal Training</option>
                    <option value="Group Training" className="bg-deep-charcoal text-crisp-white">Group Training</option>
                    <option value="Boxing" className="bg-deep-charcoal text-crisp-white">Boxing</option>
                    <option value="Apartment Training" className="bg-deep-charcoal text-crisp-white">Apartment Training</option>
                    <option value="Muscle Building" className="bg-deep-charcoal text-crisp-white">Muscle Building</option>
                    <option value="Nutrition Guidance" className="bg-deep-charcoal text-crisp-white">Nutrition Guidance</option>
                    <option value="Online Coaching" className="bg-deep-charcoal text-crisp-white">Online Coaching</option>
                    <option value="Other" className="bg-deep-charcoal text-crisp-white">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-crisp-white mb-2 font-spartan">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-crisp-white placeholder-crisp-white/50 focus:outline-none focus:border-vibrant-green transition-colors font-spartan resize-none"
                    placeholder="Tell us about your fitness goals or questions"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-vibrant-green text-deep-charcoal px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300 font-spartan disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-deep-charcoal border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-vibrant-green/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-vibrant-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-playfair text-crisp-white mb-2">WhatsApp</h3>
              <p className="text-crisp-white/70 font-spartan">+254 111 201 803</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-vibrant-green/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-vibrant-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-playfair text-crisp-white mb-2">Email</h3>
              <p className="text-crisp-white/70 font-spartan">charlesnyikal52@gmail.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-vibrant-green/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-vibrant-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-playfair text-crisp-white mb-2">Location</h3>
              <p className="text-crisp-white/70 font-spartan">Nairobi, Kenya</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
