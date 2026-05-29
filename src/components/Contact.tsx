'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const contactLinks = [
  {
    icon: '📧',
    label: 'Email',
    value: 'tanishq.saxena26@gmail.com',
    href: 'mailto:tanishq.saxena26@gmail.com',
    color: '#7C3AED',
    copyable: true,
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91-6264616658',
    href: 'tel:+916264616658',
    color: '#06B6D4',
    copyable: false,
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/tanishqsaxena',
    href: 'https://linkedin.com/in/tanishqsaxena',
    color: '#0A66C2',
    copyable: false,
  },
  {
    icon: '🐱',
    label: 'GitHub',
    value: 'github.com/tanishqsaxena',
    href: 'https://github.com/tanishqsaxena',
    color: '#f5f5f5',
    copyable: false,
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Gwalior, MP, India',
    href: '#',
    color: '#10B981',
    copyable: false,
  },
]

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('tanishq.saxena26@gmail.com')
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:tanishq.saxena26@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="section-divider mb-32" />
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-accent-cyan font-mono text-sm tracking-[0.3em] uppercase mb-3">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-white/40 text-lg mt-4 max-w-xl mx-auto">
            Open to opportunities, collaborations, and conversations about AI/ML, backend engineering, or anything tech.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card p-5 flex items-center gap-4 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${link.color}15`, border: `1px solid ${link.color}25` }}
                >
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/40 text-xs font-mono uppercase tracking-wider">{link.label}</p>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white/80 hover:text-white transition-colors text-sm md:text-base truncate block"
                  >
                    {link.value}
                  </a>
                </div>
                {link.copyable && (
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono border border-white/10 text-white/40 hover:text-white hover:border-accent-violet/40 hover:bg-accent-violet/10 transition-all"
                  >
                    {copiedEmail ? '✓ Copied!' : 'Copy'}
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div>
                <label className="block text-white/40 text-xs font-mono uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-accent-violet/50 focus:ring-1 focus:ring-accent-violet/30 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white/40 text-xs font-mono uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-accent-violet/50 focus:ring-1 focus:ring-accent-violet/30 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-white/40 text-xs font-mono uppercase tracking-wider mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-accent-violet/50 focus:ring-1 focus:ring-accent-violet/30 transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <motion.button
                type="submit"
                className="neon-button w-full text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  Send Message
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 text-center"
      >
        <div className="section-divider mb-8" />
        <p className="text-white/20 text-sm font-mono">
          © {new Date().getFullYear()} Tanishq Saxena. Crafted with passion.
        </p>
        <p className="text-white/10 text-xs font-mono mt-2">
          Built with Next.js · TypeScript · Framer Motion · Tailwind CSS
        </p>
      </motion.footer>
    </section>
  )
}
