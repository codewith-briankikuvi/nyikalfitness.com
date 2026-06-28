import { useState } from 'react'
import { motion } from 'framer-motion'

const ArticleEditor = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: '',
    tags: '',
    metaTitle: '',
    metaDescription: '',
    publishDate: '',
    status: 'draft'
  })

  const categories = ['Workout Tips', 'Nutrition Advice', 'Boxing Techniques', 'Client Stories', 'Motivation']

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle article submission
    console.log('Article submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-deep-charcoal text-crisp-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Create New Article</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold mb-2">Article Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-crisp-white focus:border-vibrant-green focus:outline-none transition-colors"
              placeholder="Enter article title"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-semibold mb-2">Excerpt *</label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              required
              rows={3}
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-crisp-white focus:border-vibrant-green focus:outline-none transition-colors resize-none"
              placeholder="Brief summary of the article"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold mb-2">Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-crisp-white focus:border-vibrant-green focus:outline-none transition-colors"
            >
              <option value="">Select a category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-semibold mb-2">Tags</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-crisp-white focus:border-vibrant-green focus:outline-none transition-colors"
              placeholder="Comma-separated tags (e.g., fitness, nutrition, tips)"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-semibold mb-2">Content *</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows={15}
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-crisp-white focus:border-vibrant-green focus:outline-none transition-colors resize-none"
              placeholder="Write your article content here..."
            />
            <p className="text-sm text-crisp-white/60 mt-2">Note: Rich text editor integration will be added in production</p>
          </div>

          {/* SEO Section */}
          <div className="border-t border-white/10 pt-6">
            <h2 className="text-2xl font-bold mb-4">SEO Settings</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Meta Title</label>
                <input
                  type="text"
                  name="metaTitle"
                  value={formData.metaTitle}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-crisp-white focus:border-vibrant-green focus:outline-none transition-colors"
                  placeholder="SEO title (optional, defaults to article title)"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Meta Description</label>
                <textarea
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-crisp-white focus:border-vibrant-green focus:outline-none transition-colors resize-none"
                  placeholder="SEO description for search engines"
                />
              </div>
            </div>
          </div>

          {/* Publishing Options */}
          <div className="border-t border-white/10 pt-6">
            <h2 className="text-2xl font-bold mb-4">Publishing Options</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-crisp-white focus:border-vibrant-green focus:outline-none transition-colors"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="scheduled">Scheduled</option>
                </select>
              </div>

              {formData.status === 'scheduled' && (
                <div>
                  <label className="block text-sm font-semibold mb-2">Publish Date</label>
                  <input
                    type="datetime-local"
                    name="publishDate"
                    value={formData.publishDate}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-crisp-white focus:border-vibrant-green focus:outline-none transition-colors"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              className="flex-1 bg-vibrant-green text-deep-charcoal px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors duration-300"
            >
              {formData.status === 'draft' ? 'Save Draft' : 'Publish Article'}
            </button>
            <button
              type="button"
              className="px-6 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
            >
              Preview
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default ArticleEditor
