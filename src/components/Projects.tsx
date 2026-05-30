'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'Memory Optimisation via Reinforcement Learning',
    description: 'Developed a Deep Q-Network agent that learns optimal memory allocation strategies, achieving significant performance improvements in dynamic workloads.',
    stack: ['Python', 'TensorFlow', 'Deep Q-Networks', 'NumPy'],
    highlights: [
      { label: 'Memory Reduction', value: '28%' },
      { label: 'Faster Convergence', value: '40%' },
      { label: 'Transitions Processed', value: '500K+' },
    ],
    deployLink: 'https://huggingface.co/spaces/tanishq-ai/memory-optimization-rl',
    githubLink: 'https://github.com/tanishqsaxena',
    gradient: 'from-violet-600/20 to-purple-800/20',
    accentColor: '#7C3AED',
  },
  {
    title: 'Self-Driving Car Simulator — Deep RL Agent',
    description: 'Built an autonomous driving agent using Deep Q-Networks that navigates complex road environments with near-perfect lane accuracy.',
    stack: ['PyTorch', 'DQN', 'OpenAI Gym', 'Pygame', 'Python'],
    highlights: [
      { label: 'Lane Accuracy', value: '96%' },
      { label: 'Episodes Trained', value: '1,000+' },
      { label: 'Faster Convergence', value: '45%' },
    ],
    deployLink: 'https://huggingface.co/spaces/tanishq-ai/Self_Driving_Car',
    githubLink: 'https://github.com/tanishqsaxena',
    gradient: 'from-cyan-600/20 to-blue-800/20',
    accentColor: '#06B6D4',
  },
  {
    title: 'Amazon Sentiment Analysis API',
    description: 'Production-grade REST API for real-time sentiment analysis of Amazon product reviews with high throughput and zero downtime.',
    stack: ['Flask', 'TF-IDF', 'Logistic Regression', 'NLTK', 'Scikit-learn'],
    highlights: [
      { label: 'Accuracy', value: '87%' },
      { label: 'Throughput', value: '150+ req/min' },
      { label: 'Uptime', value: '99%' },
    ],
    deployLink: 'https://amazon-sentimental-analysis-10.onrender.com/',
    githubLink: 'https://github.com/tanishqsaxena',
    gradient: 'from-emerald-600/20 to-teal-800/20',
    accentColor: '#10B981',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative py-32 px-6">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-violet/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-accent-cyan font-mono text-sm tracking-[0.3em] uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/40 text-lg mt-4 max-w-xl">Production-grade ML systems and APIs — from reinforcement learning agents to NLP pipelines.</p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-card group relative overflow-hidden"
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient.replace('/20', '/80')}`} />

              {/* Hover glow */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                style={{ background: project.accentColor }}
              />

              <div className="p-8 relative">
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/40 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full border border-white/10 text-white/50 bg-white/[0.03]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {project.highlights.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="font-mono font-bold text-lg" style={{ color: project.accentColor }}>
                        {stat.value}
                      </p>
                      <p className="text-white/30 text-[10px] uppercase tracking-wider mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${project.accentColor}20, ${project.accentColor}10)`,
                      border: `1px solid ${project.accentColor}30`,
                      color: project.accentColor,
                    }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </span>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl text-sm font-semibold border border-white/10 text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
