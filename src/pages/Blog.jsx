import { motion } from 'framer-motion'
import { useState } from 'react'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'Workout Tips', 'Nutrition Advice', 'Boxing Techniques', 'Client Stories', 'Motivation']

  const articles = [
    {
      id: 1,
      title: '5 Essential Exercises for Building Strength',
      excerpt: 'Discover the key exercises that will help you build functional strength and muscle mass effectively.',
      category: 'Workout Tips',
      date: 'June 15, 2026',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Nutrition Basics: Fueling Your Workouts',
      excerpt: 'Learn the fundamentals of sports nutrition and how to properly fuel your body for optimal performance.',
      category: 'Nutrition Advice',
      date: 'June 10, 2026',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 3,
      title: 'Boxing Fundamentals: Stance and Movement',
      excerpt: 'Master the basics of boxing with this comprehensive guide to proper stance and footwork.',
      category: 'Boxing Techniques',
      date: 'June 5, 2026',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Client Success: John\'s 3-Month Transformation',
      excerpt: 'Read about John\'s incredible journey and how he achieved his fitness goals in just 3 months.',
      category: 'Client Stories',
      date: 'May 28, 2026',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Staying Motivated: Tips for Consistency',
      excerpt: 'Discover practical strategies to maintain motivation and stay consistent with your fitness routine.',
      category: 'Motivation',
      date: 'May 20, 2026',
      readTime: '5 min read',
      featured: false
    },
    {
      id: 6,
      title: 'High-Intensity Interval Training Explained',
      excerpt: 'Learn about HIIT workouts and how they can help you burn fat and improve cardiovascular fitness.',
      category: 'Workout Tips',
      date: 'May 15, 2026',
      readTime: '6 min read',
      featured: false
    }
  ]

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  const featuredArticle = articles.find(a => a.featured)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/1552334/pexels-photo-1552334.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Blog background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold font-playfair text-crisp-white mb-6"
          >
            Fitness <span className="text-vibrant-green">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-crisp-white/90 max-w-2xl mx-auto font-spartan"
          >
            Expert tips, nutrition advice, and inspiring stories to help you on your fitness journey
          </motion.p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16 bg-deep-charcoal border-b border-white/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <span className="text-vibrant-green font-semibold mb-2 block font-spartan">Featured Article</span>
              <h2 className="text-4xl font-bold font-playfair text-crisp-white mb-4">{featuredArticle.title}</h2>
              <p className="text-crisp-white/80 text-lg mb-6 font-spartan">{featuredArticle.excerpt}</p>
              <div className="flex items-center space-x-4 text-crisp-white/60 mb-6">
                <span className="font-spartan">{featuredArticle.date}</span>
                <span>•</span>
                <span className="font-spartan">{featuredArticle.readTime}</span>
                <span>•</span>
                <span className="text-vibrant-green font-spartan">{featuredArticle.category}</span>
              </div>
              <button className="bg-vibrant-green text-deep-charcoal px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300 font-spartan">
                Read Full Article
              </button>
            </motion.div>
          </div>
        </section>
      )}

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

      {/* Articles Grid */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-vibrant-green transition-all duration-300 group"
              >
                <div className="h-48 bg-vibrant-green/10 flex items-center justify-center">
                  <span className="text-6xl">📝</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-crisp-white/60 mb-3">
                    <span className="text-vibrant-green font-spartan">{article.category}</span>
                    <span>•</span>
                    <span className="font-spartan">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold font-playfair text-crisp-white mb-2 group-hover:text-vibrant-green transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-crisp-white/70 mb-4 font-spartan">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-crisp-white/60 text-sm font-spartan">{article.readTime}</span>
                    <button className="text-vibrant-green hover:text-white transition-colors group-hover:translate-x-2 transform inline-block transition-transform font-spartan">
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/1552334/pexels-photo-1552334.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Newsletter background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-vibrant-green/90"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-playfair text-deep-charcoal mb-6"
          >
            Stay Updated
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-deep-charcoal/90 mb-8 max-w-2xl mx-auto font-spartan"
          >
            Subscribe to our newsletter for the latest fitness tips, nutrition advice, and client stories
          </motion.p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-deep-charcoal text-crisp-white placeholder-crisp-white/60 focus:outline-none focus:ring-2 focus:ring-white font-spartan"
            />
            <button className="bg-deep-charcoal text-crisp-white px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300 font-spartan">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
