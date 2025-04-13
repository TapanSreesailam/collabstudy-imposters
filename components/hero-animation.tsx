"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, Brain, Zap, MessageSquare, Code } from "lucide-react"

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Floating icons with their positions and speeds
  const [floatingElements] = useState([
    { Icon: BookOpen, x: 15, y: 20, size: 24, speed: 0.5, color: "#10b981" },
    { Icon: Brain, x: 75, y: 30, size: 32, speed: 0.7, color: "#06b6d4" },
    { Icon: Zap, x: 25, y: 70, size: 28, speed: 0.6, color: "#0ea5e9" },
    { Icon: MessageSquare, x: 80, y: 75, size: 26, speed: 0.4, color: "#14b8a6" },
    { Icon: Code, x: 60, y: 40, size: 30, speed: 0.8, color: "#0891b2" },
  ])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio
      canvas.height = canvas.clientHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      alpha: number
      growing: boolean

      constructor() {
        this.x = Math.random() * canvas.clientWidth
        this.y = Math.random() * canvas.clientHeight
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5

        // Gradient colors
        const colors = ["#10b981", "#14b8a6", "#06b6d4", "#0ea5e9", "#3b82f6"]
        this.color = colors[Math.floor(Math.random() * colors.length)]

        // For pulsing effect
        this.alpha = Math.random() * 0.5 + 0.1
        this.growing = Math.random() > 0.5
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.clientWidth) this.x = 0
        else if (this.x < 0) this.x = canvas.clientWidth

        if (this.y > canvas.clientHeight) this.y = 0
        else if (this.y < 0) this.y = canvas.clientHeight

        // Pulsing effect
        if (this.growing) {
          this.alpha += 0.005
          if (this.alpha >= 0.6) this.growing = false
        } else {
          this.alpha -= 0.005
          if (this.alpha <= 0.1) this.growing = true
        }
      }

      draw() {
        ctx.globalAlpha = this.alpha
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    // Create particles
    const particlesArray: Particle[] = []
    const particleCount = Math.min(120, Math.floor((canvas.clientWidth * canvas.clientHeight) / 8000))

    for (let i = 0; i < particleCount; i++) {
      particlesArray.push(new Particle())
    }

    // Connect particles with lines
    function connectParticles() {
      const maxDistance = 120

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = `rgba(100, 255, 218, ${opacity * 0.3})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Draw glowing circles
    function drawGlowingCircles() {
      const time = Date.now() * 0.001
      const centerX = canvas.clientWidth / 2
      const centerY = canvas.clientHeight / 2

      // Draw outer glowing circles
      for (let i = 0; i < 3; i++) {
        const radius = 100 + i * 30 + Math.sin(time + i) * 10
        const gradient = ctx.createRadialGradient(centerX, centerY, radius * 0.7, centerX, centerY, radius)
        gradient.addColorStop(0, `rgba(16, 185, 129, ${0.1 - i * 0.03})`)
        gradient.addColorStop(1, "rgba(16, 185, 129, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Draw hexagon grid
    function drawHexagonGrid() {
      const time = Date.now() * 0.0005
      const hexSize = 20
      const rows = Math.ceil(canvas.clientHeight / (hexSize * 1.5)) + 2
      const cols = Math.ceil(canvas.clientWidth / (hexSize * Math.sqrt(3))) + 2

      ctx.strokeStyle = "rgba(20, 184, 166, 0.15)"
      ctx.lineWidth = 1

      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const x = col * hexSize * Math.sqrt(3)
          const y = row * hexSize * 1.5 + (col % 2) * (hexSize * 0.75)

          // Add some movement
          const offsetX = Math.sin(time + row * 0.1 + col * 0.1) * 5
          const offsetY = Math.cos(time + row * 0.1 + col * 0.1) * 5

          drawHexagon(x + offsetX, y + offsetY, hexSize)
        }
      }
    }

    function drawHexagon(x: number, y: number, size: number) {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i
        const hx = x + size * Math.cos(angle)
        const hy = y + size * Math.sin(angle)

        if (i === 0) {
          ctx.moveTo(hx, hy)
        } else {
          ctx.lineTo(hx, hy)
        }
      }
      ctx.closePath()
      ctx.stroke()
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

      // Draw background elements
      drawHexagonGrid()
      drawGlowingCircles()

      // Draw and update particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      connectParticles()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-950/80 rounded-2xl"></div>
      <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }}></canvas>

      {/* Center logo with pulsing effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center"
          animate={{
            boxShadow: isHovered ? "0 0 30px 5px rgba(16, 185, 129, 0.5)" : "0 0 20px 2px rgba(16, 185, 129, 0.3)",
          }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-slate-900 flex items-center justify-center text-3xl md:text-4xl font-bold text-white">
            CS
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: ["-10px", "10px", "-10px"],
            x: [`-${element.speed * 10}px`, `${element.speed * 10}px`, `-${element.speed * 10}px`],
          }}
          transition={{
            duration: 5 / element.speed,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div
            className="rounded-lg p-2 bg-slate-800/80 backdrop-blur-sm border border-slate-700"
            style={{ boxShadow: `0 0 15px 2px ${element.color}30` }}
          >
            <element.Icon size={element.size} style={{ color: element.color }} />
          </div>
        </motion.div>
      ))}

      {/* Animated text cards */}
      <motion.div
        className="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-[200px] bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 border border-slate-700"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="text-xs md:text-sm font-medium text-emerald-400">Collaborative Learning</div>
        <div className="text-xs text-slate-300 mt-1">Join study rooms with peers worldwide</div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 max-w-[200px] bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 border border-slate-700"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="text-xs md:text-sm font-medium text-cyan-400">AI-Powered</div>
        <div className="text-xs text-slate-300 mt-1">Get instant help with complex topics</div>
      </motion.div>

      <motion.div
        className="absolute top-6 right-6 md:top-10 md:right-10 bg-slate-800/80 backdrop-blur-sm rounded-full px-3 py-1 border border-slate-700 flex items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></div>
        <div className="text-xs text-slate-300">1,245 students online</div>
      </motion.div>
    </motion.div>
  )
}
