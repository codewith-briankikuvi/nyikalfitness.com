import { motion } from 'framer-motion'
import { useState } from 'react'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedMedia, setSelectedMedia] = useState(null)

  const categories = ['all', 'Training', 'Transformations', 'Boxing', 'Nutrition', 'Events']

  const mediaItems = [
    { id: 1, category: 'Training', type: 'image', title: 'Strength Training Session' },
    { id: 2, category: 'Transformations', type: 'image', title: 'Client Transformation' },
    { id: 3, category: 'Boxing', type: 'image', title: 'Boxing Training' },
    { id: 4, category: 'Nutrition', type: 'image', title: 'Nutrition Planning' },
    { id: 5, category: 'Events', type: 'image', title: 'Fitness Event' },
    { id: 6, category: 'Training', type: 'image', title: 'Personal Training' },
    { id: 7, category: 'Transformations', type: 'image', title: 'Before & After' },
    { id: 8, category: 'Boxing', type: 'image', title: 'Combat Fitness' },
    { id: 9, category: 'Training', type: 'image', title: 'Group Session' },
  ]

  const filteredMedia = selectedCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/1552334/pexels-photo-1552334.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Gallery background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold font-playfair text-crisp-white mb-6"
          >
            Our <span className="text-vibrant-green">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-crisp-white/90 max-w-2xl mx-auto font-spartan"
          >
            Visual journey of transformations, training sessions, and fitness events
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-deep-charcoal border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-vibrant-green text-deep-charcoal'
                    : 'bg-white/10 text-crisp-white hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedMedia(item)}
                className="relative group cursor-pointer overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-vibrant-green transition-all duration-300"
              >
                <div className="aspect-square bg-vibrant-green/10 flex items-center justify-center">
                  <span className="text-6xl">{item.type === 'image' ? '📷' : '🎥'}</span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-bold font-playfair text-crisp-white mb-2">{item.title}</h3>
                    <p className="text-crisp-white/80 font-spartan">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedMedia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="max-w-4xl w-full bg-deep-charcoal rounded-lg p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold font-playfair text-crisp-white">{selectedMedia.title}</h2>
                <p className="text-crisp-white/60 font-spartan">{selectedMedia.category}</p>
              </div>
              <button
                onClick={() => setSelectedMedia(null)}
                className="text-crisp-white hover:text-vibrant-green transition-colors text-2xl"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-vibrant-green/10 rounded-lg flex items-center justify-center">
              <span className="text-8xl">{selectedMedia.type === 'image' ? '📷' : '🎥'}</span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-crisp-white/60 font-spartan">Media placeholder - will be replaced with actual media from Cloudinary</p>
              <div className="flex space-x-4">
                <button className="text-crisp-white hover:text-vibrant-green transition-colors">← Previous</button>
                <button className="text-crisp-white hover:text-vibrant-green transition-colors">Next →</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Upload CTA */}
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
            Want to Share Your Photos?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-deep-charcoal/90 mb-8 max-w-2xl mx-auto font-spartan"
          >
            If you're a client and want to share your transformation photos, contact us
          </motion.p>
          <button className="inline-block bg-deep-charcoal text-crisp-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-colors duration-300 font-spartan">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  )
}

export default Gallery
