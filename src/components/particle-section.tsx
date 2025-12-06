"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ParticleSectionConfig {
  particleColor?: string
  particleSize?: number
  particleCount?: number
  particleSpeed?: number
}

export function ParticleSection({
  particleColor = "#d4af37",
  particleSize = 1.5,
  particleCount = 30,
  particleSpeed = 0.3,
  children,
}: ParticleSectionConfig & { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = canvas.parentElement?.getBoundingClientRect()
    if (!rect) return

    canvas.width = rect.width
    canvas.height = rect.height

    const particles: any[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * particleSpeed,
        vy: (Math.random() - 0.5) * particleSpeed,
        radius: Math.random() * particleSize,
        opacity: Math.random() * 0.4 + 0.1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.fillStyle =
          particleColor +
          Math.round(particle.opacity * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [particleColor, particleSize, particleCount, particleSpeed])

  return (
    <div className="relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 pointer-events-none" style={{ opacity: 0.5 }} />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
