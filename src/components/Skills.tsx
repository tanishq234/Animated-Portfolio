'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Languages',
    icon: '⚡',
    color: '#7C3AED',
    skills: ['Python', 'C++', 'Java', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'ML / AI',
    icon: '🧠',
    color: '#06B6D4',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'HuggingFace Transformers', 'Deep Learning', 'NLP', 'Reinforcement Learning', 'LLM APIs','OpenAI Gym'],
  },
  {
    title: 'Data Science & Analytics',
    icon: '📊',
    color: '#10B981',
    skills: ['Pandas', 'NumPy', 'EDA', 'Predictive Modelling'],
  },
  {
    title: 'Data Visualization',
    icon: '📊',
    color: '#10B981',
    skills: ['Matplotlib', 'Seaborn', 'Plotly'],
  },
  {
    title: 'Backend',
    icon: '🔧',
    color: '#F59E0B',
    skills: ['Flask', 'FastAPI', 'REST APIs', 'Streamlit', 'NLTK'],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    color: '#EF4444',
    skills: ['Docker', 'Git', 'GitHub Actions', 'Postman', 'Jupyter', 'VS Code', 'Linux'],
  },
  {
    title: 'CS Fundamentals',
    icon: '📚',
    color: '#8B5CF6',
    skills: ['DSA', 'OOP', 'Computer Networks', 'DBMS', 'OS'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative py-32 px-6">
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
          <p className="text-accent-cyan font-mono text-sm tracking-[0.3em] uppercase mb-3">Expertise</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-white/40 text-lg mt-4 max-w-xl">A comprehensive toolkit spanning machine learning, backend engineering, and computer science fundamentals.</p>
        </motion.div>

        {/* Skills Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, ${category.color}, transparent)` }}
              />

              {/* Hover glow */}
              <div
                className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                style={{ background: category.color }}
              />

              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-bold" style={{ color: category.color }}>
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2, duration: 0.3 }}
                    className="skill-pill"
                    style={{
                      borderColor: `${category.color}25`,
                      background: `${category.color}10`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
