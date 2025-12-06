"use client"

import { Particles } from "@/components/particles"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Target, Zap, Award, Lightbulb, Rocket } from "lucide-react"

const team = [
  {
    name: "Sarah Chen",
    role: "Creative Director",
    image: "/professional-woman-headshot.png",
    bio: "12+ years designing digital experiences",
  },
  {
    name: "Marcus Johnson",
    role: "Lead Developer",
    image: "/professional-man-headshot.png",
    bio: "Full-stack expert with enterprise focus",
  },
  {
    name: "Elena Rodriguez",
    role: "UX/UI Specialist",
    image: "/professional-woman-headshot.png",
    bio: "Award-winning interaction designer",
  },
  {
    name: "David Park",
    role: "Full Stack Engineer",
    image: "/professional-man-headshot.png",
    bio: "DevOps and infrastructure expert",
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0b10] overflow-hidden relative">
      <Particles particleCount={65} particleColor="#9adfff" particleSpeed={0.25} />

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
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up">
              About <span className="gradient-gold-cyan">Narvyn</span>
            </h1>
            <p
              className="text-xl text-[#cbd5e1] mb-8 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              We're a collective of passionate developers, designers, and strategists dedicated to creating premium
              digital experiences that push boundaries and deliver measurable impact. Our mission is to transform
              visionary ideas into world-class digital products.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "Empower enterprises with cutting-edge digital solutions that drive innovation and create lasting value.",
              },
              {
                icon: Users,
                title: "Our Team",
                description:
                  "Industry-leading experts with decades of combined experience building world-class digital products.",
              },
              {
                icon: Zap,
                title: "Our Promise",
                description:
                  "Excellence in every pixel, code line, and interaction. We deliver nothing less than exceptional results.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-effect p-8 rounded-2xl border border-[rgba(106,227,255,0.2)] text-center group hover:border-[rgba(106,227,255,0.5)] transition-all hover:shadow-lg hover:shadow-[#6ae3ff]/20 animate-fade-in-up animate-glow-box-shadow"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <item.icon className="w-14 h-14 text-[#d4af37] mx-auto mb-4 group-hover:text-[#6ae3ff] group-hover:scale-125 transition-all duration-300" />
                <h3 className="text-2xl font-serif font-bold mb-3 text-[#e5e7eb]">{item.title}</h3>
                <p className="text-[#cbd5e1]">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[rgba(212,175,55,0.05)] to-[#0a0b10]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
              Our <span className="gradient-gold-cyan">Core Values</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description: "We constantly explore new technologies and methodologies to stay ahead of the curve.",
                },
                {
                  icon: Award,
                  title: "Quality",
                  description: "Every project receives meticulous attention to detail and rigorous quality assurance.",
                },
                {
                  icon: Rocket,
                  title: "Impact",
                  description: "We measure success by the tangible results we deliver for our clients and partners.",
                },
              ].map((value, i) => (
                <div
                  key={i}
                  className="glass-effect p-8 rounded-2xl border border-[rgba(106,227,255,0.2)] hover:border-[rgba(106,227,255,0.5)] transition-all animate-fade-in-up animate-glow-box-shadow"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <value.icon className="w-12 h-12 text-[#d4af37] mb-4 hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-serif font-bold mb-3 text-[#e5e7eb]">{value.title}</h3>
                  <p className="text-[#cbd5e1]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
              Meet The <span className="gradient-gold-cyan">Team</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <div key={i} className="text-center group animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="relative mb-6 rounded-xl overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b10]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                      <p className="text-[#9adfff] text-sm">{member.bio}</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#e5e7eb] group-hover:text-[#d4af37] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#cbd5e1] text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[rgba(212,175,55,0.05)] to-[#0a0b10]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
              <span className="gradient-gold-cyan">By The Numbers</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "150+", label: "Projects Delivered", icon: "📦" },
                { number: "50+", label: "Enterprise Clients", icon: "🏢" },
                { number: "12+", label: "Years Experience", icon: "⏰" },
                { number: "98%", label: "Client Satisfaction", icon: "⭐" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="glass-effect p-8 text-center rounded-2xl border border-[rgba(106,227,255,0.2)] hover:border-[rgba(106,227,255,0.5)] transition-all hover:shadow-lg hover:shadow-[#6ae3ff]/20 animate-fade-in-up animate-glow-box-shadow group"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-serif font-bold gradient-gold-cyan mb-2">{stat.number}</div>
                  <p className="text-[#cbd5e1] text-sm">{stat.label}</p>
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
