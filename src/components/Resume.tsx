'use client'

import { motion } from 'framer-motion'

export default function Resume() {
  return (
    <section id="resume" className="relative py-32 px-6">
      <div className="section-divider mb-32" />
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent-cyan font-mono text-sm tracking-[0.3em] uppercase mb-3">📄 Document</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-white/40 text-lg mt-4 max-w-xl mx-auto">
            Download my complete resume to learn more about my experience, education, and technical expertise.
          </p>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-10 md:p-14 relative overflow-hidden group"
        >
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-violet/20 via-accent-cyan/10 to-accent-violet/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl" />

          {/* Document icon */}
          <motion.div
            className="w-24 h-32 mx-auto mb-8 relative"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/10 to-accent-cyan/10 rounded-lg border border-accent-violet/20 flex flex-col items-center justify-center">
              <svg className="w-10 h-10 text-accent-violet mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <span className="text-[10px] font-mono text-white/40">PDF</span>
            </div>
          </motion.div>

          <h3 className="text-2xl font-bold mb-2">Tanishq_Saxena_Resume.pdf</h3>
          <p className="text-white/30 text-sm mb-8 font-mono">AI/ML Engineer & Backend Developer</p>

          {/* Download Button */}
          <motion.a
            href="/Tanishq_Saxena_Resume.pdf"
            download="Tanishq_Saxena_Resume.pdf"
            className="neon-button inline-flex items-center gap-3 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Resume
          </motion.a>

          <p className="text-white/20 text-xs mt-6 font-mono">Last updated: May 2025</p>
        </motion.div>
      </div>
    </section>
  )
}
