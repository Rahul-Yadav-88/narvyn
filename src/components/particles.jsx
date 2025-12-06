"use client"

import { useEffect, useRef } from "react"

function useParticleAnimation(canvasRef, config) {
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = Array.from({ length: config.particleCount || 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * (config.particleSpeed || 0.5),
      vy: (Math.random() - 0.5) * (config.particleSpeed || 0.5),
      radius: Math.random() * (config.particleSize || 2) + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    }))

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
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
      particles.forEach((other) => {
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
      particle.x += particle.vx
      particle.y += particle.vy

      const dx = particle.x - mouseRef.current.x
      const dy = particle.y - mouseRef.current.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      const repulsionDistance = 150

      if (distance < repulsionDistance) {
        const angle = Math.atan2(dy, dx)
        const repulsionStrength = (1 - distance / repulsionDistance) * 2.5
        particle.vx += Math.cos(angle) * repulsionStrength * 0.1
        particle.vy += Math.sin(angle) * repulsionStrength * 0.1
      }

      if (particle.x < 0) particle.x = canvas.width
      if (particle.x > canvas.width) particle.x = 0
      if (particle.y < 0) particle.y = canvas.height
      if (particle.y > canvas.height) particle.y = 0

      particle.vx *= 0.99
      particle.vy *= 0.99
    }

    const animate = () => {
      ctx.fillStyle = "rgba(10, 11, 16, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        updateParticle(particle)
        drawConnections(particle)
        drawParticle(particle)
      })

      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener("mousemove", handleMouseMove)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
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
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
      aria-hidden="true"
    />
  )
}
