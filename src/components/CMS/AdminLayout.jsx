import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: '📊' },
    { name: 'Articles', path: '/admin/articles', icon: '📝' },
    { name: 'Media', path: '/admin/media', icon: '🖼️' },
    { name: 'Settings', path: '/admin/settings', icon: '⚙️' }
  ]

  return (
    <div className="min-h-screen bg-deep-charcoal text-crisp-white flex">
      {/* Sidebar */}
      <motion.aside
        initial={{ width: isSidebarOpen ? 256 : 0 }}
        animate={{ width: isSidebarOpen ? 256 : 0 }}
        className="bg-white/5 border-r border-white/10 overflow-hidden"
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-vibrant-green mb-8">Admin</h2>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white/5 border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-crisp-white hover:text-vibrant-green transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center gap-4">
            <span className="text-crisp-white/80">Coach Fitnyikal</span>
            <button className="text-crisp-white hover:text-vibrant-green transition-colors">
              Logout
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
