import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const services = [
    {
      id: 1,
      name: 'Personal Training',
      desc: 'One-on-one customized training programs tailored to your specific goals and fitness level',
      price: 'Custom Pricing',
      image: 'https://i.pinimg.com/736x/ef/51/a4/ef51a4681d575c7232d78ce053b1dc3a.jpg',
      category: '1-on-1'
    },
    {
      id: 2,
      name: 'Online Coaching',
      desc: 'Flexible training programs with remote guidance and support from anywhere in the world',
      price: 'Custom Pricing',
      image: 'https://i.pinimg.com/736x/65/12/35/6512358c4d8312cfcc0433eb798bd6cb.jpg',
      category: 'Online'
    },
    {
      id: 3,
      name: 'Boxing',
      desc: 'Combat fitness training for all skill levels, from beginners to advanced fighters',
      price: 'Custom Pricing',
      image: 'https://i.pinimg.com/736x/f0/35/7a/f0357a4f96e217679de901fd2048d3b1.jpg',
      category: '1-on-1'
    },
    {
      id: 4,
      name: 'Muscle Building',
      desc: 'Specialized strength and hypertrophy programs to build lean muscle mass',
      price: 'Custom Pricing',
      image: 'https://i.pinimg.com/736x/eb/31/c7/eb31c79cbc8237688d6e0b09b53cbdbb.jpg',
      category: '1-on-1'
    },
    {
      id: 5,
      name: 'Nutrition',
      desc: 'Comprehensive nutrition guidance and meal planning to support your fitness goals',
      price: 'Custom Pricing',
      image: 'https://i.pinimg.com/736x/4b/0e/bc/4b0ebc3895534ca4cb3aacf4b777e4b3.jpg',
      category: 'Nutrition'
    },
    {
      id: 6,
      name: 'Group Training',
      desc: 'Energizing group sessions that build community while achieving fitness goals together',
      price: 'Custom Pricing',
      image: 'https://i.pinimg.com/736x/df/f0/7f/dff07f2b60074160e6de185404424c47.jpg',
      category: 'Group'
    },
    {
      id: 7,
      name: 'Apartment Training',
      desc: 'Convenient training sessions at your apartment complex or residential community',
      price: 'Custom Pricing',
      image: 'https://i.pinimg.com/736x/11/2f/2d/112f2d3f3b9142444e1528de7a7198fd.jpg',
      category: 'Group'
    }
  ]

  const categories = ['all', '1-on-1', 'Group', 'Online', 'Nutrition']

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.desc.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === 'all' || service.category === selectedFilter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/a9/f9/54/a9f954544397fdfb4a5d35afa589a1f7.jpg"
            alt="Services background"
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
            Our <span className="text-vibrant-green">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="text-xl text-crisp-white/90 max-w-2xl mx-auto font-spartan"
          >
            Comprehensive fitness solutions tailored to transform your life
          </motion.p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-deep-charcoal border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-crisp-white focus:border-vibrant-green focus:outline-none transition-colors"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`px-4 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                    selectedFilter === category
                      ? 'bg-vibrant-green text-deep-charcoal'
                      : 'bg-white/5 text-crisp-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="group relative overflow-hidden rounded-lg hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-crisp-white mb-2 font-playfair">{service.name}</h3>
                  <p className="text-crisp-white/80 mb-4 font-spartan line-clamp-2">{service.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-vibrant-green font-semibold font-spartan">{service.price}</span>
                    <Link
                      to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-crisp-white font-semibold hover:text-vibrant-green transition-colors duration-300 font-spartan"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12 text-crisp-white/60 font-spartan">
              No services found matching your criteria
            </div>
          )}
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
            Ready to Start Your Transformation?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-deep-charcoal/90 mb-8 max-w-2xl mx-auto font-spartan"
          >
            Contact us today to schedule a consultation and take the first step towards your fitness goals
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
              Book a Session
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
