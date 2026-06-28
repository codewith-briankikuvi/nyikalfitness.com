import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  const stats = [
    { name: 'Total Articles', value: '24', icon: '📝', color: 'from-blue-500/20 to-blue-600/20' },
    { name: 'Published', value: '18', icon: '✅', color: 'from-green-500/20 to-green-600/20' },
    { name: 'Drafts', value: '4', icon: '📋', color: 'from-yellow-500/20 to-yellow-600/20' },
    { name: 'Scheduled', value: '2', icon: '📅', color: 'from-purple-500/20 to-purple-600/20' }
  ]

  const recentArticles = [
    { id: 1, title: '5 Essential Exercises for Building Strength', status: 'published', date: 'June 15, 2026' },
    { id: 2, title: 'Nutrition Basics: Fueling Your Workouts', status: 'published', date: 'June 10, 2026' },
    { id: 3, title: 'Boxing Fundamentals: Stance and Movement', status: 'draft', date: 'June 5, 2026' },
    { id: 4, title: 'Client Success: John\'s 3-Month Transformation', status: 'published', date: 'May 28, 2026' },
    { id: 5, title: 'Staying Motivated: Tips for Consistency', status: 'scheduled', date: 'June 25, 2026' }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'text-green-400'
      case 'draft': return 'text-yellow-400'
      case 'scheduled': return 'text-blue-400'
      default: return 'text-gray-400'
    }
  }

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        Dashboard
      </motion.h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-gradient-to-br ${stat.color} border border-white/10 rounded-lg p-6`}
          >
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-crisp-white mb-1">{stat.value}</div>
            <div className="text-crisp-white/60">{stat.name}</div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <Link
            to="/admin/articles/new"
            className="bg-vibrant-green text-deep-charcoal px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors duration-300"
          >
            + New Article
          </Link>
          <Link
            to="/admin/media"
            className="bg-white/10 text-crisp-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-300"
          >
            Upload Media
          </Link>
        </div>
      </motion.div>

      {/* Recent Articles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white/5 border border-white/10 rounded-lg p-6"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Recent Articles</h2>
          <Link
            to="/admin/articles"
            className="text-vibrant-green hover:text-white transition-colors"
          >
            View All →
          </Link>
        </div>
        <div className="space-y-4">
          {recentArticles.map((article, index) => (
            <div
              key={article.id}
              className="flex items-center justify-between py-3 border-b border-white/10 last:border-0"
            >
              <div>
                <h3 className="font-semibold text-crisp-white">{article.title}</h3>
                <p className="text-sm text-crisp-white/60">{article.date}</p>
              </div>
              <span className={`text-sm font-semibold ${getStatusColor(article.status)}`}>
                {article.status.charAt(0).toUpperCase() + article.status.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default AdminDashboard
