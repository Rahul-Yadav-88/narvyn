"use client"

import type React from "react"

import { Particles } from "@/components/particles"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormState({ name: "", email: "", company: "", budget: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-[#0a0b10] overflow-hidden relative">
      <Particles particleCount={75} particleColor="#6ae3ff" particleSpeed={0.4} />

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
              Let's Create <span className="gradient-gold-cyan">Something Great</span>
            </h1>
            <p className="text-xl text-[#cbd5e1] mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Ready to start your next project? Get in touch and let's discuss your vision.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-serif font-bold mb-12">
                Get in <span className="gradient-gold-cyan">Touch</span>
              </h2>

              <div className="space-y-8 mb-12">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "hello@narvyn.dev",
                    link: "mailto:hello@narvyn.dev",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+1 (555) 123-4567",
                    link: "tel:+15551234567",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "San Francisco, CA",
                    link: "#",
                  },
                ].map((contact, i) => (
                  <a
                    key={i}
                    href={contact.link}
                    className="flex items-start gap-6 group cursor-pointer animate-fade-in-up"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="w-14 h-14 rounded-lg glass-effect flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(212,175,55,0.1)] group-hover:scale-110 transition-all duration-300">
                      <contact.icon className="w-6 h-6 text-[#d4af37] group-hover:text-[#6ae3ff] transition-colors" />
                    </div>
                    <div>
                      <p className="text-[#cbd5e1] text-sm mb-1">{contact.label}</p>
                      <p className="text-lg font-semibold text-[#e5e7eb] group-hover:text-[#d4af37] transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="glass-effect p-8 rounded-2xl border border-[rgba(106,227,255,0.2)] animate-glow-box-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[#6ae3ff]" />
                  <h3 className="font-serif font-bold text-[#e5e7eb]">Response Time</h3>
                </div>
                <p className="text-[#cbd5e1] mb-4">
                  We typically respond within 24 hours during business days. For urgent inquiries, call us directly.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#6ae3ff] animate-pulse"></div>
                  <span className="text-sm text-[#9adfff]">Available for new projects</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="glass-effect p-8 rounded-2xl border border-[rgba(106,227,255,0.2)] animate-fade-in-up animate-glow-box-shadow"
              style={{ animationDelay: "0.2s" }}
            >
              {submitted && (
                <div className="mb-6 p-4 bg-[rgba(106,227,255,0.1)] border border-[#6ae3ff] rounded-lg flex items-center gap-3 animate-slide-up">
                  <CheckCircle className="w-5 h-5 text-[#6ae3ff]" />
                  <p className="text-[#9adfff]">Message sent! We'll be in touch soon.</p>
                </div>
              )}
              <div className="space-y-6">
                <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
                  <label className="block text-[#e5e7eb] font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0b10]/50 border border-[rgba(212,175,55,0.2)] rounded-lg focus:border-[#6ae3ff] focus:outline-none transition-all focus:shadow-lg focus:shadow-[#6ae3ff]/20 text-[#e5e7eb] placeholder-[#cbd5e1]/50"
                    placeholder="John Doe"
                  />
                </div>

                <div className="animate-slide-up" style={{ animationDelay: "0.15s" }}>
                  <label className="block text-[#e5e7eb] font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0b10]/50 border border-[rgba(212,175,55,0.2)] rounded-lg focus:border-[#6ae3ff] focus:outline-none transition-all focus:shadow-lg focus:shadow-[#6ae3ff]/20 text-[#e5e7eb] placeholder-[#cbd5e1]/50"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                  <label className="block text-[#e5e7eb] font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0b10]/50 border border-[rgba(212,175,55,0.2)] rounded-lg focus:border-[#6ae3ff] focus:outline-none transition-all focus:shadow-lg focus:shadow-[#6ae3ff]/20 text-[#e5e7eb] placeholder-[#cbd5e1]/50"
                    placeholder="Your Company"
                  />
                </div>

                <div className="animate-slide-up" style={{ animationDelay: "0.25s" }}>
                  <label className="block text-[#e5e7eb] font-medium mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formState.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0b10]/50 border border-[rgba(212,175,55,0.2)] rounded-lg focus:border-[#6ae3ff] focus:outline-none transition-all focus:shadow-lg focus:shadow-[#6ae3ff]/20 text-[#e5e7eb]"
                  >
                    <option value="">Select a range</option>
                    <option value="5k-10k">$5k - $10k</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k+">$50k+</option>
                  </select>
                </div>

                <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                  <label className="block text-[#e5e7eb] font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0a0b10]/50 border border-[rgba(212,175,55,0.2)] rounded-lg focus:border-[#6ae3ff] focus:outline-none transition-all focus:shadow-lg focus:shadow-[#6ae3ff]/20 text-[#e5e7eb] placeholder-[#cbd5e1]/50 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#6ae3ff] text-[#0a0b10] font-bold rounded-lg hover:shadow-2xl hover:shadow-[#6ae3ff]/50 transition-all hover:scale-105 active:scale-95 animate-slide-up"
                  style={{ animationDelay: "0.35s" }}
                >
                  {submitted ? "Message Sent!" : "Send Message"} <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
