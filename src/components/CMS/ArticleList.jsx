import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ArticleList = () => {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Mock data - will be replaced with API calls
  const articles = [
    {
      id: 1,
      title: '5 Essential Exercises for Building Strength',
      category: 'Workout Tips',
      status: 'published',
      date: 'June 15, 2026',
      author: 'Coach Fitnyikal'
    },
    {
      id: 2,
      title: 'Nutrition Basics: Fueling Your Workouts',
      category: 'Nutrition Advice',
      status: 'published',
      date: 'June 10, 2026',
      author: 'Coach Fitnyikal'
    },
    {
      id: 3,
      title: 'Boxing Fundamentals: Stance and Movement',
      category: 'Boxing Techniques',
      status: 'draft',
      date: 'June 5, 2026',
      author: 'Coach Fitnyikal'
    },
    {
      id: 4,
      title: 'Client Success: John\'s 3-Month Transformation',
      category: 'Client Stories',
      status: 'published',
      date: 'May 28, 2026',
      author: 'Coach Fitnyikal'
    },
    {
      id: 5,
      title: 'Staying Motivated: Tips for Consistency',
      category: 'Motivation',
      status: 'scheduled',
      date: 'June 25, 2026',
      author: 'Coach Fitnyikal'
    }
  ]

  const filteredArticles = articles.filter(article => {
    const matchesFilter = filter === 'all' || article.status === filter
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'bg-green-500/20 text-green-400'
      case 'draft': return 'bg-yellow-500/20 text-yellow-400'
      case 'scheduled': return 'bg-blue-500/20 text-blue-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  return (
    <div className="min-h-screen bg-deep-charcoal text-crisp-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Articles</h1>
          <Link
            to="/admin/articles/new"
            className="bg-vibrant-green text-deep-charcoal px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors duration-300"
          >
            + New Article
          </Link>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-crisp-white focus:border-vibrant-green focus:outline-none transition-colors"
            />
          </div>
          <div className="flex gap-2">
            {['all', 'published', 'draft', 'scheduled'].map(status => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  filter === status
                    ? 'bg-vibrant-green text-deep-charcoal'
                    : 'bg-white/5 text-crisp-white hover:bg-white/10'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Table */}
        <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredArticles.map((article, index) => (
                <motion.tr
                  key={article.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-t border-white/10 hover:bg-white/5 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="font-semibold">{article.title}</div>
                    <div className="text-sm text-crisp-white/60">by {article.author}</div>
                  </td>
                  <td className="px-6 py-4 text-crisp-white/80">{article.category}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(article.status)}`}>
                      {article.status.charAt(0).toUpperCase() + article.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-crisp-white/80">{article.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="text-crisp-white hover:text-vibrant-green transition-colors">
                        Edit
                      </button>
                      <button className="text-crisp-white hover:text-red-400 transition-colors">
                        Delete
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          {filteredArticles.length === 0 && (
            <div className="px-6 py-12 text-center text-crisp-white/60">
              No articles found matching your criteria
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-crisp-white/60">
            Showing {filteredArticles.length} of {articles.length} articles
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ArticleList
