'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '30%', label: 'Deployment Overhead Reduction', icon: '🚀' },
  { value: '100%', label: 'Test Coverage Achieved', icon: '✅' },
  { value: '25%', label: 'ML Model Improvement', icon: '🧠' },
  { value: '15,000+', label: 'Records Analysed', icon: '📊' },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="section-divider mb-32" />
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-accent-cyan font-mono text-sm tracking-[0.3em] uppercase mb-3">Career</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="glass-card p-8 md:p-10 relative overflow-hidden"
          >
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent-violet to-accent-cyan" />

            {/* Company badge */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-violet/20 to-accent-cyan/20 border border-accent-violet/20 flex items-center justify-center text-xl">
                    💼
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Octanet</h3>
                    <p className="text-white/40 text-sm">Remote</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-accent-violet/10 border border-accent-violet/20 text-accent-violet">
                  May 2025 – Jul 2025
                </span>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-white/90 mb-4">
              Python Backend Developer Intern
            </h4>

            <div className="space-y-3 mb-8">
              {[
                'Reduced deployment overhead by 30% through optimized CI/CD pipelines and containerized microservices',
                'Achieved 100% test coverage across all backend modules using pytest and automated testing workflows',
                'Improved ML model performance by 25% through feature engineering and hyperparameter optimization',
                'Analysed 15,000+ records to derive actionable insights, implementing ETL pipelines with Python and SQL',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 flex-shrink-0" />
                  <p className="text-white/50 text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>

            {/* Tech used */}
            <div className="flex flex-wrap gap-2">
              {['Python', 'Flask', 'Docker', 'PostgreSQL', 'pytest', 'CI/CD'].map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-mono rounded-full border border-white/10 text-white/40 bg-white/[0.03]">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                className="glass-card p-6 text-center group"
              >
                <span className="text-3xl mb-3 block">{stat.icon}</span>
                <p className="stat-value text-2xl md:text-3xl">{stat.value}</p>
                <p className="text-white/30 text-xs uppercase tracking-wider mt-2 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
