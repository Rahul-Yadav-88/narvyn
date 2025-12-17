"use client"

import { Particles } from "../../components/particles"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Code2, Palette, Zap, Cloud, Shield, BarChart3 } from "lucide-react"
import { useState } from "react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Full-stack solutions built with modern frameworks. React, Next.js, TypeScript, and more.",
    features: ["Custom Solutions", "API Integration", "Database Design", "Real-time Applications"],
    details:
      "Build scalable, high-performance web applications with our cutting-edge development expertise. We specialize in creating robust backend systems and intuitive frontend experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Pixel-perfect interfaces that captivate and convert. User-centric design philosophy.",
    features: ["Wireframing", "Prototyping", "Design Systems", "Accessibility"],
    details:
      "Create stunning user experiences through research-driven design. From concept to deployment, we ensure every pixel serves a purpose.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast load times and smooth interactions. Every millisecond matters.",
    features: ["Core Web Vitals", "Image Optimization", "Code Splitting", "CDN Integration"],
    details:
      "Achieve top-tier performance metrics. We optimize every aspect of your application for speed and efficiency.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Scalable deployment on cutting-edge cloud platforms. Serverless to containerized.",
    features: ["Vercel", "AWS", "Docker", "CI/CD Pipelines"],
    details:
      "Deploy with confidence. Our infrastructure solutions ensure reliability, scalability, and cost-efficiency.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security practices. GDPR, compliance, and data protection.",
    features: ["Encryption", "Auth Systems", "Penetration Testing", "Security Audits"],
    details:
      "Protect your data with military-grade security. We implement best practices for compliance and threat prevention.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Growth",
    description: "Data-driven insights to optimize your digital presence. Track what matters.",
    features: ["User Tracking", "Conversion Optimization", "A/B Testing", "Reports & Dashboards"],
    details:
      "Transform data into actionable insights. Monitor, analyze, and optimize every metric that drives your business forward.",
  },
]

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#0a0b10] overflow-hidden relative">
      <Particles particleCount={120} particleColor="#d4af37" particleSpeed={0.3} />

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
              Our <span className="gradient-gold-cyan">Services</span>
            </h1>
            <p
              className="text-xl text-[#cbd5e1] max-w-2xl mx-auto mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Comprehensive solutions designed to accelerate your digital transformation and drive measurable results.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="glass-effect p-8 rounded-2xl border border-[rgba(106,227,255,0.2)] hover:border-[rgba(106,227,255,0.5)] transition-all hover:shadow-lg hover:shadow-[#6ae3ff]/20 group animate-fade-in-up cursor-pointer animate-glow-box-shadow card-premium animate-card-slide-in animate-card-border-glow"
                  style={{ animationDelay: `${i * 0.05}s` }}
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                >
                  <service.icon className="w-14 h-14 text-[#d4af37] mb-4 group-hover:text-[#6ae3ff] transition-colors group-hover:scale-125 transform duration-300 animate-icon-rotate" />
                  <h3 className="text-2xl font-serif font-bold mb-3 text-[#e5e7eb]">{service.title}</h3>
                  <p className="text-[#cbd5e1] mb-6 leading-relaxed">{service.description}</p>
                  {expandedIndex === i && (
                    <div className="mb-6 pb-6 border-b border-[rgba(106,227,255,0.2)] animate-slide-up">
                      <p className="text-[#9adfff] text-sm mb-4">{service.details}</p>
                    </div>
                  )}
                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="text-sm text-[#9adfff] flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[rgba(212,175,55,0.05)] to-[#0a0b10]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
              Our <span className="gradient-gold-cyan">Development Process</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "Understanding your vision, goals, and challenges.",
                  icon: "🔍",
                },
                {
                  step: "02",
                  title: "Strategy",
                  desc: "Crafting the perfect technical and design approach.",
                  icon: "📋",
                },
                { step: "03", title: "Development", desc: "Building with precision and best practices.", icon: "⚙️" },
                { step: "04", title: "Deploy", desc: "Launch and optimize for maximum performance.", icon: "🚀" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative group animate-fade-in-up card-premium animate-card-slide-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="glass-effect p-8 rounded-2xl border border-[rgba(106,227,255,0.2)] group-hover:border-[rgba(106,227,255,0.5)] transition-all group-hover:shadow-lg group-hover:shadow-[#6ae3ff]/20 animate-glow-box-shadow animate-card-border-glow">
                    <div className="text-5xl font-serif font-bold text-[#d4af37]/30 mb-4 group-hover:text-[#d4af37]/60 transition-colors">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-3 text-[#e5e7eb] group-hover:text-[#6ae3ff] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#cbd5e1]">{item.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="absolute -right-4 top-1/2 w-8 h-1 bg-gradient-to-r from-[#d4af37] to-[#6ae3ff] hidden md:block transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
              <span className="gradient-gold-cyan">Technology Stack</span> We Master
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { category: "Frontend", techs: ["React", "Next.js", "Vue.js", "TypeScript", "WordPress", "Wix", "Shopify", "Webflow"] },
                { category: "Backend", techs: ["Node.js", "Python", "Java", "Django", "Flask", "FastAPI", "Express.js"] },
                { category: "Database", techs: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "MySQL", "SQLite",] },
                { category: "DevOps", techs: ["Docker", "Kubernetes", "AWS", "Vercel", "GitHub Actions", ] },
              ].map((stack, i) => (
                <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <h4 className="text-[#d4af37] font-semibold mb-4 text-center">{stack.category}</h4>
                  <div className="space-y-2">
                    {stack.techs.map((tech, j) => (
                      <div
                        key={j}
                        className="glass-effect p-3 rounded-lg border border-[rgba(106,227,255,0.2)] text-center text-[#e5e7eb] hover:border-[rgba(106,227,255,0.5)] transition-all hover:text-[#6ae3ff] cursor-pointer"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
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
