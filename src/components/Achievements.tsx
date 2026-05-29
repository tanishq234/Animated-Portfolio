'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const achievements = [
  {
    icon: '🏆',
    title: 'Smart India Hackathon 2023',
    description: 'Top national competitor among 12,000+ teams. Shipped a full analytics product in just 36 hours of intensive development.',
    tags: ['National Level', '12,000+ Teams', '36hrs'],
    color: '#F59E0B',
  },
  {
    icon: '💻',
    title: 'LeetCode — Top 30% Globally',
    description: 'Rating 1531 with 200+ problems solved across data structures, algorithms, and competitive programming.',
    tags: ['Rating 1531', '200+ Problems', 'Top 30%'],
    color: '#F97316',
  },
  {
    icon: '🎓',
    title: 'ML Bootcamp (40+ Hours)',
    description: '6 production-grade NLP and recommendation systems deployed. Intensive hands-on training in real-world ML engineering.',
    tags: ['40+ Hours', '6 Systems', 'Production'],
    color: '#06B6D4',
  },
  {
    icon: '📊',
    title: 'DSA Specialisation — Infosys Springboard',
    description: 'Completed 65+ algorithmic challenges with 92% optimisation efficiency. Focused on advanced problem-solving.',
    tags: ['65+ Challenges', '92% Efficiency', 'Infosys'],
    color: '#7C3AED',
  },
  {
    icon: '🐍',
    title: '100 Days of Code',
    description: '18 Python applications shipped in 100 consecutive days. Built a consistent daily coding practice and shipped real products.',
    tags: ['100 Days', '18 Apps', 'Python'],
    color: '#10B981',
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="relative py-32 px-6">
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
          <p className="text-accent-cyan font-mono text-sm tracking-[0.3em] uppercase mb-3">Recognition</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Key <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-violet/50 via-accent-cyan/30 to-transparent" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0
                    ? 'md:flex-row md:text-right'
                    : 'md:flex-row-reverse md:text-left'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.2, type: 'spring' }}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl border-2"
                    style={{ 
                      background: `${achievement.color}15`,
                      borderColor: `${achievement.color}40`,
                    }}
                  >
                    {achievement.icon}
                  </motion.div>
                </div>

                {/* Content card */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="glass-card p-6 relative overflow-hidden">
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(90deg, ${achievement.color}, transparent)` }}
                    />
                    <h3 className="text-lg font-bold mb-2 text-left">{achievement.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-4 text-left">
                      {achievement.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {achievement.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono rounded-full"
                          style={{
                            background: `${achievement.color}15`,
                            border: `1px solid ${achievement.color}30`,
                            color: achievement.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
