import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6
    }
  }
}

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/3a/67/58/3a6758c8c0013a0d520767fc185e8265.jpg"
            alt="Fitness background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.22, 1, 0.36, 1],
              type: "spring"
            }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold font-playfair text-crisp-white mb-6"
            >
              Transform Your <span className="text-vibrant-green">Life</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-xl md:text-2xl text-crisp-white/90 mb-8 max-w-2xl mx-auto font-spartan"
            >
              Build confidence, improve health, and create a sustainable lifestyle with premium fitness coaching
            </motion.p>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div variants={itemVariants}>
                <Link
                  to="/services"
                  className="bg-vibrant-green text-deep-charcoal px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-colors duration-300 font-spartan"
                >
                  Start Your Transformation
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  to="/about"
                  className="border-2 border-crisp-white text-crisp-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-crisp-white hover:text-deep-charcoal transition-colors duration-300 font-spartan"
                >
                  Meet Coach Fitnyikal
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1],
              type: "spring"
            }}
            className="text-4xl font-bold text-center text-crisp-white mb-12 font-playfair"
          >
            Our Services
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { 
                name: 'Personal Training', 
                desc: 'One-on-one customized training programs',
                image: 'https://i.pinimg.com/736x/ef/51/a4/ef51a4681d575c7232d78ce053b1dc3a.jpg'
              },
              { 
                name: 'Online Coaching', 
                desc: 'Flexible training from anywhere',
                image: 'https://i.pinimg.com/736x/65/12/35/6512358c4d8312cfcc0433eb798bd6cb.jpg'
              },
              { 
                name: 'Boxing Training', 
                desc: 'Combat fitness for all levels',
                image: 'https://i.pinimg.com/736x/f0/35/7a/f0357a4f96e217679de901fd2048d3b1.jpg'
              }
            ].map((service, index) => (
              <motion.div
                key={service.name}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative overflow-hidden rounded-lg hover:shadow-2xl transition-all duration-500"
              >
                <motion.img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-80 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-crisp-white mb-2 font-playfair">{service.name}</h3>
                  <p className="text-crisp-white/80 mb-4 font-spartan">{service.desc}</p>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link
                      to="/services"
                      className="inline-block text-vibrant-green font-semibold hover:text-white transition-colors duration-300 font-spartan"
                    >
                      Learn More →
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-16 bg-vibrant-green">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            {[
              { number: '100+', label: 'Happy Clients' },
              { number: '500+', label: 'Transformations' },
              { number: '5+', label: 'Years Experience' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  className="text-5xl md:text-6xl font-bold text-deep-charcoal mb-2 font-playfair"
                >
                  {stat.number}
                </motion.div>
                <div className="text-lg text-deep-charcoal/90 font-spartan">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Blog Preview */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1],
              type: "spring"
            }}
            className="text-4xl font-bold text-center text-crisp-white mb-12 font-playfair"
          >
            Latest Articles
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: '5 Essential Exercises for Building Strength',
                excerpt: 'Discover the key exercises that will help you build functional strength and muscle mass effectively.',
                image: 'https://images.pexels.com/photos/4167552/pexels-photo-4167552.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              {
                title: 'Nutrition Basics: Fueling Your Workouts',
                excerpt: 'Learn the fundamentals of sports nutrition and how to properly fuel your body for optimal performance.',
                image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              {
                title: 'Boxing Fundamentals: Stance and Movement',
                excerpt: 'Master the basics of boxing with this comprehensive guide to proper stance and footwork.',
                image: 'https://images.pexels.com/photos/1543415/pexels-photo-1543415.jpeg?auto=compress&cs=tinysrgb&w=800'
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-vibrant-green transition-all duration-500 hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-crisp-white mb-3 font-playfair group-hover:text-vibrant-green transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-crisp-white/70 mb-4 font-spartan line-clamp-2">
                    {article.excerpt}
                  </p>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link
                      to="/blog"
                      className="inline-block text-vibrant-green font-semibold hover:text-white transition-colors duration-300 font-spartan"
                    >
                      Read More →
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
