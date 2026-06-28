import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-deep-charcoal border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-vibrant-green mb-4">NYIKAL FITNESS</h3>
            <p className="text-crisp-white/80 mb-4">
              Transform your life with discipline, excellence, and inspiration. Building a fitness legacy that inspires people to live healthier and stronger lives.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/fitnyikal" target="_blank" rel="noopener noreferrer" className="text-crisp-white hover:text-vibrant-green transition-colors">
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-crisp-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-crisp-white/80 hover:text-vibrant-green transition-colors">About</Link></li>
              <li><Link to="/services" className="text-crisp-white/80 hover:text-vibrant-green transition-colors">Services</Link></li>
              <li><Link to="/transformations" className="text-crisp-white/80 hover:text-vibrant-green transition-colors">Transformations</Link></li>
              <li><Link to="/gallery" className="text-crisp-white/80 hover:text-vibrant-green transition-colors">Gallery</Link></li>
              <li><Link to="/pricing" className="text-crisp-white/80 hover:text-vibrant-green transition-colors">Pricing</Link></li>
              <li><Link to="/blog" className="text-crisp-white/80 hover:text-vibrant-green transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-crisp-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-crisp-white/80">
                <a href="mailto:charlesnyikal52@gmail.com" className="hover:text-vibrant-green transition-colors">
                  charlesnyikal52@gmail.com
                </a>
              </li>
              <li className="text-crisp-white/80">
                <a href="tel:+254111201803" className="hover:text-vibrant-green transition-colors">
                  +254 111 201803
                </a>
              </li>
              <li className="text-crisp-white/80">
                <a href="tel:+254782923076" className="hover:text-vibrant-green transition-colors">
                  +254 782 923076
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-crisp-white/60">
            © {new Date().getFullYear()} Nyikal Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
