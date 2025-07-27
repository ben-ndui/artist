'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Premium */}
      <nav className="fixed top-0 w-full backdrop-blur-lg border-b z-50" style={{ background: '#ffffff95', borderColor: '#6b728040' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <h1 className="text-2xl font-bold" style={{ 
                background: `linear-gradient(to right, #2563eb, #059669)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Artist
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:flex items-center space-x-8"
            >
              <Link href="/about" className="font-medium transition-colors duration-200" style={{ color: '#1f2937', '&:hover': { color: '#2563eb' } }}>About</Link>
              <Link href="/contact" className="font-medium transition-colors duration-200" style={{ color: '#1f2937', '&:hover': { color: '#2563eb' } }}>Contact</Link>
              <Link 
                href="/contact"
                className="px-6 py-2.5 rounded-full font-medium transition-all duration-200 transform hover:scale-105 text-white"
                style={{ background: '#2563eb', '&:hover': { background: '#2563eb90' } }}
              >
                Contact
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section Ultra Premium */}
      <section className="pt-32 pb-20" style={{ 
        background: `linear-gradient(135deg, #ffffff 0%, #2563eb10 100%)`
      }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-light mb-8 leading-tight" style={{ 
                color: '#1f2937',
                fontFamily: 'Inter, sans-serif'
              }}>
                Artist
                <span className="block font-medium mt-2" style={{ color: '#2563eb' }}>Musique, Artist</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl mb-12 leading-relaxed font-light"
              style={{ color: '#6b7280' }}
            >
              Rappeur, chanteur, auteur compositeur !
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link 
                href="/contact"
                className="text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ 
                  background: '#2563eb',
                  boxShadow: `0 10px 25px #2563eb25`
                }}
              >
                Découvrir nos solutions
              </Link>
              
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* Footer Premium */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-light mb-4">Artist</h2>
            <p className="text-gray-400 mb-8">Musique, Artist</p>
            <div className="pt-8 border-t border-gray-800">
              <p className="text-gray-500">&copy; 2025 Artist. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}