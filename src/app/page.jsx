"use client"

import { Particles } from "../components/particles"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import Link from "next/link"
import { ArrowRight, Code2, Zap, Shield, Sparkles, Rocket } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const sectionRefs = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Reveal elements on scroll
      sectionRefs.current.forEach((ref) => {
        if (!ref) return
        const rect = ref.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75) {
          ref.classList.add("visible")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const addRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0b10] overflow-hidden relative">
      <Particles particleCount={150} particleColor="#6ae3ff" particleSpeed={0.4} />

      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-[#6ae3ff] rounded-full blur-3xl opacity-20 animate-morph"></div>
            <div
              className="absolute bottom-10 right-10 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl opacity-20 animate-morph"
              style={{ animationDelay: "4s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#9adfff] rounded-full blur-3xl opacity-10 animate-morph"
              style={{ animationDelay: "8s" }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(212,175,55,0.1)] border border-[#d4af37]/30 rounded-full mb-6 animate-bounce-in">
                <Sparkles size={16} className="text-[#d4af37] animate-spin" style={{ animationDuration: "3s" }} />
                <p className="text-[#d4af37] font-medium text-sm tracking-widest animate-text-reveal">
                  Rahul is Aakash's father
                </p>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance animate-fade-in-up hover:animate-neon-flicker cursor-pointer transition-all">
                <span className="gradient-gold-cyan animate-neon-glow inline-block hover:animate-glitch">
                  Luxury Development
                </span>
                <br />
                for Enterprise Vision
              </h1>
              <p
                className="text-lg md:text-xl text-[#cbd5e1] max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up animate-blur-in"
                style={{ animationDelay: "0.2s" }}
              >
                We craft premium digital experiences with cutting-edge technology and meticulous attention to detail.
                Transform your ideas into extraordinary solutions that define the future.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#6ae3ff] text-[#0a0b10] font-bold rounded-full hover:shadow-2xl hover:shadow-[#6ae3ff]/60 transition-all hover:scale-110 active:scale-95 hover-lift hover-glow group"
                >
                  Start Your Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] font-bold rounded-full hover:bg-[#d4af37]/10 transition-all hover:shadow-lg hover:shadow-[#d4af37]/30 hover-lift"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#6ae3ff] rounded-full animate-pulse-ring opacity-60"></div>
          <div
            className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#d4af37] rounded-full animate-pulse-ring opacity-60"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-[rgba(212,175,55,0.1)]">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects" },
              { number: "98%", label: "Satisfaction" },
              { number: "5+", label: "Enterprises" },
              { number: "1+", label: "Years" },
            ].map((stat, i) => (
              <div
                key={i}
                className="scroll-reveal animate-fade-in-up hover-lift"
                style={{ animationDelay: `${i * 0.1}s` }}
                ref={addRef}
              >
                <div className="text-3xl md:text-4xl font-serif font-bold gradient-gold-cyan mb-2 hover:animate-neon-glow transition-all cursor-pointer">
                  {stat.number}
                </div>
                <p className="text-[#cbd5e1] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-16 text-balance animate-text-reveal">
              Why Choose <span className="gradient-gold-cyan animate-neon-glow">Narvyn</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Code2,
                  title: "Cutting-Edge Tech",
                  description: "Latest frameworks and tools to build scalable, performant solutions.",
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Optimized performance and lightning-quick load times for all devices.",
                },
                {
                  icon: Shield,
                  title: "Enterprise Grade",
                  description: "Security-first approach with enterprise-level reliability and support.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="scroll-reveal glass-effect p-8 rounded-2xl border border-[rgba(106,227,255,0.2)] hover:border-[rgba(106,227,255,0.5)] transition-all hover:shadow-lg hover:shadow-[#6ae3ff]/20 group animate-fade-in-up animate-glow-box-shadow hover-lift hover-glow card-premium animate-card-slide-in animate-card-border-glow"
                  style={{ animationDelay: `${i * 0.1}s` }}
                  ref={addRef}
                >
                  <feature.icon className="w-12 h-12 text-[#d4af37] mb-4 group-hover:text-[#6ae3ff] transition-colors group-hover:scale-110 transform duration-300 animate-icon-rotate" />
                  <h3 className="text-xl font-serif font-bold mb-3 text-[#e5e7eb]">{feature.title}</h3>
                  <p className="text-[#cbd5e1] leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[rgba(212,175,55,0.02)] to-[#0a0b10]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 animate-text-reveal">
              Built with <span className="gradient-gold-cyan animate-neon-glow">Latest Technologies</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
  {[
   "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "Django",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "WordPress",
    "Wix",
    "Shopify",
    "Webflow",
    "Strapi",
    "Firebase",
    "AWS",
    "Vercel",
    "Docker",
    "Git & GitHub",
  ].map((tech, i) => (
    <div
      key={i}
      className="scroll-reveal glass-effect p-6 rounded-xl border border-[rgba(106,227,255,0.2)] text-center hover:border-[rgba(106,227,255,0.6)] transition-all hover:scale-110 hover:shadow-lg hover:shadow-[#6ae3ff]/30 animate-fade-in-up hover-lift card-premium animate-card-slide-in"
      style={{ animationDelay: `${i * 0.05}s` }}
      ref={addRef}
    >
      <p className="text-[#e5e7eb] font-semibold">{tech}</p>
    </div>
  ))}
</div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-4xl mx-auto glass-effect p-12 md:p-16 rounded-3xl border border-[rgba(212,175,55,0.3)] text-center animate-glow-box-shadow scroll-reveal hover-glow relative overflow-hidden group card-premium animate-card-slide-in animate-card-border-glow"
            ref={addRef}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/0 via-[#6ae3ff]/10 to-[#d4af37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#6ae3ff] rounded-full blur-3xl opacity-10 group-hover:animate-pulse"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 animate-text-reveal">
                Ready to elevate your brand?
              </h2>
              <p className="text-[#cbd5e1] text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your vision and create something extraordinary together. Your next breakthrough project
                starts here.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#6ae3ff] text-[#0a0b10] font-bold rounded-full hover:shadow-2xl hover:shadow-[#6ae3ff]/60 transition-all hover:scale-110 active:scale-95 hover-lift group"
              >
                Get In Touch <Rocket size={18} className="group-hover:rotate-45 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
