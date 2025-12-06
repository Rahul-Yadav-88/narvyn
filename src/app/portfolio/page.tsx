"use client"

import { Particles } from "@/components/particles"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ExternalLink, Star, TrendingUp } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "TechVenture Platform",
    category: "Web Development",
    description: "Enterprise SaaS platform with real-time collaboration features and advanced analytics dashboard.",
    tags: ["Next.js", "TypeScript", "Stripe", "Real-time"],
    image: "/modern-tech-dashboard.png",
    rating: 5,
    impact: "+250% Revenue Growth",
  },
  {
    title: "Digital Agency Site",
    category: "Design & Development",
    description: "Premium marketing website with custom animations and interactive experiences that converts.",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: "/luxury-agency-website-design.jpg",
    rating: 5,
    impact: "+180% Lead Generation",
  },
  {
    title: "E-Commerce Revolution",
    category: "Full Stack",
    description: "High-performance e-commerce platform with advanced analytics and personalization engine.",
    tags: ["Next.js", "Stripe", "Analytics", "Optimization"],
    image: "/modern-ecommerce-storefront.png",
    rating: 5,
    impact: "+320% Sales",
  },
  {
    title: "Analytics Dashboard",
    category: "Web Development",
    description: "Real-time data visualization and reporting system processing millions of data points.",
    tags: ["React", "D3.js", "WebSocket", "PostgreSQL"],
    image: "/data-analytics-dashboard.png",
    rating: 5,
    impact: "98% Uptime",
  },
  {
    title: "AI Content Studio",
    category: "Web Development",
    description: "AI-powered content generation platform with intelligent user management and collaboration tools.",
    tags: ["Next.js", "AI/ML", "Database", "Auth"],
    image: "/ai-content-creation-interface.jpg",
    rating: 5,
    impact: "10k+ Active Users",
  },
  {
    title: "Mobile First App",
    category: "Design & Development",
    description: "Responsive mobile-first application with offline capabilities and seamless sync.",
    tags: ["React Native", "PWA", "Offline-first"],
    image: "/mobile-app-interface.png",
    rating: 5,
    impact: "4.8★ App Rating",
  },
]

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#0a0b10] overflow-hidden relative">
      <Particles particleCount={70} particleColor="#6ae3ff" particleSpeed={0.35} />

      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-[#6ae3ff] rounded-full blur-3xl opacity-20 animate-blob-rotate"></div>
            <div
              className="absolute bottom-10 right-10 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl opacity-20 animate-blob-rotate"
              style={{ animationDelay: "5s" }}
            ></div>
          </div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up">
              Our <span className="gradient-gold-cyan">Portfolio</span>
            </h1>
            <p
              className="text-xl text-[#cbd5e1] max-w-2xl mx-auto mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Showcasing our finest work across web development, design, and digital innovation. Each project represents
              our commitment to excellence.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <Link href="#" key={i} className="group cursor-pointer">
                  <div
                    className="relative mb-4 rounded-xl overflow-hidden animate-fade-in-up h-72"
                    style={{ animationDelay: `${i * 0.05}s` }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b10] via-[#0a0b10]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="flex gap-3 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-500">
                        <ExternalLink className="w-8 h-8 text-[#6ae3ff] animate-scale-in" />
                        <Star className="w-8 h-8 text-[#d4af37] animate-scale-in" style={{ animationDelay: "0.1s" }} />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-[#d4af37]/90 px-3 py-1 rounded-full text-[#0a0b10] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.impact}
                    </div>
                  </div>

                  <div className="glass-effect p-6 rounded-xl border border-[rgba(106,227,255,0.2)] group-hover:border-[rgba(106,227,255,0.6)] transition-all hover:shadow-lg hover:shadow-[#6ae3ff]/30 animate-glow-box-shadow">
                    <p className="text-[#d4af37] text-sm font-medium mb-2 flex items-center gap-2">
                      {project.category}
                      {hoveredIndex === i && <TrendingUp size={14} className="animate-bounce" />}
                    </p>
                    <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-[#6ae3ff] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#cbd5e1] text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="text-xs px-3 py-1 bg-[rgba(212,175,55,0.1)] text-[#d4af37] rounded-full hover:bg-[rgba(212,175,55,0.2)] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[rgba(212,175,55,0.05)] to-[#0a0b10]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
              Our <span className="gradient-gold-cyan">Impact</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { stat: "500M+", label: "Page Views Generated", description: "Across all client projects" },
                { stat: "$50M+", label: "Revenue Created", description: "For our partners" },
                { stat: "99.9%", label: "Uptime Achieved", description: "Enterprise reliability" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="glass-effect p-8 rounded-2xl border border-[rgba(106,227,255,0.2)] text-center animate-fade-in-up animate-glow-box-shadow"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="text-5xl font-serif font-bold gradient-gold-cyan mb-3">{item.stat}</div>
                  <h3 className="text-lg font-bold text-[#e5e7eb] mb-2">{item.label}</h3>
                  <p className="text-[#cbd5e1]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
