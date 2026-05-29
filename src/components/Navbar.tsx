'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#121212]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="text-xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text">TS</span>
            <span className="text-white/60 font-light ml-1">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300 font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.button>
            ))}
            <motion.a
              href="/Tanishq_Saxena_Resume.pdf"
              download
              className="ml-3 px-5 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-accent-violet to-accent-cyan text-white hover:shadow-glow-violet transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white rounded-full block transition-all"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white rounded-full block transition-all"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white rounded-full block transition-all"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#121212]/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-2xl font-semibold text-white/70 hover:text-white transition-colors"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {link.name}
              </motion.button>
            ))}
            <motion.a
              href="/Tanishq_Saxena_Resume.pdf"
              download
              className="mt-4 px-8 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-accent-violet to-accent-cyan text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Download CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
