"use client"

import { useEffect, useRef } from "react"

function useParticleAnimation(canvasRef, config) {
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    particlesRef.current = Array.from({ length: config.particleCount || 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * (config.particleSpeed || 0.5),
      vy: (Math.random() - 0.5) * (config.particleSpeed || 0.5),
      radius: Math.random() * (config.particleSize || 2) + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
      angle: Math.random() * Math.PI * 2,
      angularVelocity: (Math.random() - 0.5) * 0.02,
      wobbleTime: Math.random() * Math.PI * 2,
    }))

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleCanvasClick = (e) => {
      const rect = canvas.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const clickY = e.clientY - rect.top

      // Spawn 15 new particles at click location
      for (let i = 0; i < 15; i++) {
        const angle = (Math.PI * 2 * i) / 15
        particlesRef.current.push({
          x: clickX,
          y: clickY,
          vx: Math.cos(angle) * 2,
          vy: Math.sin(angle) * 2,
          radius: Math.random() * (config.particleSize || 2) + 0.5,
          opacity: Math.random() * 0.7 + 0.3,
          angle: Math.random() * Math.PI * 2,
          angularVelocity: (Math.random() - 0.5) * 0.02,
          wobbleTime: Math.random() * Math.PI * 2,
        })
      }
    }

    const drawParticle = (particle) => {
      const hexOpacity = Math.round(particle.opacity * 255)
        .toString(16)
        .padStart(2, "0")
      ctx.fillStyle = config.particleColor + hexOpacity || "#6ae3ff" + hexOpacity
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      ctx.fill()
    }

    const drawConnections = (particle) => {
      particlesRef.current.forEach((other) => {
        const dx = particle.x - other.x
        const dy = particle.y - other.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const hexOpacity = Math.round((1 - distance / 150) * particle.opacity * 100)
            .toString(16)
            .padStart(2, "0")
          ctx.strokeStyle = config.particleColor + hexOpacity || "#6ae3ff" + hexOpacity
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(other.x, other.y)
          ctx.stroke()
        }
      })
    }

    const updateParticle = (particle) => {
      // Orbital motion
      particle.angle += particle.angularVelocity
      const orbitalForce = 0.3
      particle.vx += Math.cos(particle.angle) * orbitalForce * 0.01
      particle.vy += Math.sin(particle.angle) * orbitalForce * 0.01

      // Wobble motion (sine/cosine waves)
      particle.wobbleTime += 0.01
      const wobbleX = Math.sin(particle.wobbleTime) * 0.15
      const wobbleY = Math.cos(particle.wobbleTime * 0.7) * 0.15
      particle.vx += wobbleX * 0.01
      particle.vy += wobbleY * 0.01

      particle.x += particle.vx
      particle.y += particle.vy

      const dx = particle.x - mouseRef.current.x
      const dy = particle.y - mouseRef.current.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      const repulsionDistance = 150

      if (distance < repulsionDistance) {
        const angle = Math.atan2(dy, dx)
        const repulsionStrength = (1 - distance / repulsionDistance) * 3
        particle.vx += Math.cos(angle) * repulsionStrength * 0.15
        particle.vy += Math.sin(angle) * repulsionStrength * 0.15
      }

      if (particle.x < 0) particle.x = canvas.width
      if (particle.x > canvas.width) particle.x = 0
      if (particle.y < 0) particle.y = canvas.height
      if (particle.y > canvas.height) particle.y = 0

      particle.vx *= 0.98
      particle.vy *= 0.98
    }

    const animate = () => {
      ctx.fillStyle = "rgba(10, 11, 16, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        updateParticle(particle)
        drawConnections(particle)
        drawParticle(particle)
      })

      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("click", handleCanvasClick)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("click", handleCanvasClick)
    }
  }, [config.particleColor, config.particleSize, config.particleCount, config.particleSpeed])
}

export function Particles({ particleColor = "#6ae3ff", particleSize = 2, particleCount = 50, particleSpeed = 0.5 }) {
  const canvasRef = useRef(null)

  useParticleAnimation(canvasRef, {
    particleColor,
    particleSize,
    particleCount,
    particleSpeed,
  })

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-auto z-0 cursor-crosshair"
      style={{ opacity: 0.6 }}
      aria-hidden="true"
    />
  )
}
