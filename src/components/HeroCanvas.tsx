'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  // Transform values
  const imageScale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [1, 1.15, 1.3, 1.5])
  const imageOpacity = useTransform(smoothProgress, [0, 0.2, 0.7, 1], [1, 0.9, 0.5, 0])
  const overlayOpacity = useTransform(smoothProgress, [0, 0.3, 0.6], [0, 0.3, 0.8])

  // Text animations
  const heroTextOpacity = useTransform(smoothProgress, [0, 0.08, 0.25, 0.35], [0, 1, 1, 0])
  const heroTextY = useTransform(smoothProgress, [0, 0.08, 0.25, 0.35], [60, 0, 0, -80])

  const secondTextOpacity = useTransform(smoothProgress, [0.3, 0.4, 0.55, 0.65], [0, 1, 1, 0])
  const secondTextY = useTransform(smoothProgress, [0.3, 0.4, 0.55, 0.65], [60, 0, 0, -80])
  const secondTextX = useTransform(smoothProgress, [0.3, 0.4, 0.55, 0.65], [-100, 0, 0, 0])

  const thirdTextOpacity = useTransform(smoothProgress, [0.6, 0.7, 0.85, 0.95], [0, 1, 1, 0])
  const thirdTextY = useTransform(smoothProgress, [0.6, 0.7, 0.85, 0.95], [60, 0, 0, -80])
  const thirdTextX = useTransform(smoothProgress, [0.6, 0.7, 0.85, 0.95], [100, 0, 0, 0])

  // Scroll indicator
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0])

  // Load image
  useEffect(() => {
    const img = new Image()
    img.src = '/images/profile.png'
    img.onload = () => setImage(img)
  }, [])

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Draw canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !image || !dimensions.width) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = dimensions.width * window.devicePixelRatio
    canvas.height = dimensions.height * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    canvas.style.width = `${dimensions.width}px`
    canvas.style.height = `${dimensions.height}px`

    const draw = () => {
      const scale = imageScale.get()
      const opacity = imageOpacity.get()
      const overlay = overlayOpacity.get()

      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Fill background
      ctx.fillStyle = '#121212'
      ctx.fillRect(0, 0, dimensions.width, dimensions.height)

      // Draw image with object-fit: cover logic
      ctx.globalAlpha = opacity
      const imgRatio = image.width / image.height
      const canvasRatio = dimensions.width / dimensions.height

      let drawWidth, drawHeight, drawX, drawY
      if (canvasRatio > imgRatio) {
        drawWidth = dimensions.width * scale
        drawHeight = drawWidth / imgRatio
      } else {
        drawHeight = dimensions.height * scale
        drawWidth = drawHeight * imgRatio
      }
      drawX = (dimensions.width - drawWidth) / 2
      drawY = (dimensions.height - drawHeight) / 2

      ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight)

      // Dark overlay
      ctx.globalAlpha = overlay
      ctx.fillStyle = '#121212'
      ctx.fillRect(0, 0, dimensions.width, dimensions.height)

      // Vignette effect
      ctx.globalAlpha = 0.7
      const gradient = ctx.createRadialGradient(
        dimensions.width / 2, dimensions.height / 2, dimensions.height * 0.3,
        dimensions.width / 2, dimensions.height / 2, dimensions.height * 0.8
      )
      gradient.addColorStop(0, 'transparent')
      gradient.addColorStop(1, 'rgba(18, 18, 18, 0.9)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, dimensions.width, dimensions.height)

      ctx.globalAlpha = 1
    }

    const unsubscribeScale = imageScale.on('change', draw)
    const unsubscribeOpacity = imageOpacity.on('change', draw)
    const unsubscribeOverlay = overlayOpacity.on('change', draw)
    draw()

    return () => {
      unsubscribeScale()
      unsubscribeOpacity()
      unsubscribeOverlay()
    }
  }, [image, dimensions, imageScale, imageOpacity, overlayOpacity])

  return (
    <div ref={containerRef} className="relative" style={{ height: '500vh' }} id="home">
      {/* Sticky canvas container */}
      <div className="canvas-container">
        <canvas ref={canvasRef} className="absolute inset-0" />

        {/* Overlay Text 1 - Hero */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6"
          style={{ opacity: heroTextOpacity, y: heroTextY }}
        >
          <motion.div className="text-center max-w-4xl">
            <motion.p
              className="text-accent-cyan font-mono text-sm md:text-base tracking-[0.3em] uppercase mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              AI/ML Engineer & Backend Developer
            </motion.p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6">
              <span className="gradient-text">Tanishq</span>
              <br />
              <span className="text-white">Saxena</span>
              <span className="text-accent-violet">.</span>
            </h1>
            <motion.p
              className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Building intelligent systems that scale — from deep learning research to production-grade APIs.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Overlay Text 2 */}
        <motion.div
          className="absolute inset-0 flex items-center z-10 px-6 md:px-16 lg:px-24"
          style={{ opacity: secondTextOpacity, y: secondTextY, x: secondTextX }}
        >
          <div className="max-w-2xl">
            <p className="text-accent-cyan font-mono text-xs tracking-[0.3em] uppercase mb-3">What I Do</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              I build <span className="gradient-text">intelligent systems</span> that scale.
            </h2>
            <p className="text-white/40 text-lg leading-relaxed">
              Reinforcement Learning · Deep Neural Networks · NLP Pipelines · Production APIs
            </p>
          </div>
        </motion.div>

        {/* Overlay Text 3 */}
        <motion.div
          className="absolute inset-0 flex items-center justify-end z-10 px-6 md:px-16 lg:px-24"
          style={{ opacity: thirdTextOpacity, y: thirdTextY, x: thirdTextX }}
        >
          <div className="max-w-2xl text-right">
            <p className="text-accent-violet font-mono text-xs tracking-[0.3em] uppercase mb-3">My Vision</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Bridging <span className="gradient-text">machine learning</span>
              <br />and engineering.
            </h2>
            <p className="text-white/40 text-lg leading-relaxed">
              From research prototypes to 99.9% uptime production systems.
            </p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <span className="text-white/30 text-xs font-mono tracking-[0.2em] uppercase">Scroll to explore</span>
          <motion.div
            className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-1 h-2 bg-accent-violet rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
