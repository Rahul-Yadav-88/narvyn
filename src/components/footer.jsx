"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Code2,
  Palette,
  Briefcase,
  Building2,
  FolderKanban,
  Mail,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  }

  return (
    <footer className="border-t border-[rgba(212,175,55,0.2)] bg-[#0a0b10]/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} custom={1}>
            <Link href="/" className="flex items-center gap-2 group">
                    <img src="/logo.png" alt="Narvyn Logo"  className="w-8 h-12 rounded-lg"/>
          <span className="gradient-gold-cyan text-xl font-bold hidden sm:inline">Narvyn</span>
        </Link>
            <p className="text-[#cbd5e1] text-sm leading-relaxed">
              Premium digital solutions for enterprise innovation.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp} custom={2}>
            <h4 className="text-[#6ae3ff] font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-[#cbd5e1]">
              <li>
                <Link
                  href="/services"
                  className="flex items-center gap-2 hover:text-[#d4af37] transition-all"
                >
                  <Code2 size={16} />
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="flex items-center gap-2 hover:text-[#d4af37] transition-all"
                >
                  <Palette size={16} />
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="flex items-center gap-2 hover:text-[#d4af37] transition-all"
                >
                  <Briefcase size={16} />
                  Consulting
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeUp} custom={3}>
            <h4 className="text-[#6ae3ff] font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-[#cbd5e1]">
              <li>
                <Link
                  href="/about"
                  className="flex items-center gap-2 hover:text-[#d4af37] transition-all"
                >
                  <Building2 size={16} />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="flex items-center gap-2 hover:text-[#d4af37] transition-all"
                >
                  <FolderKanban size={16} />
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 hover:text-[#d4af37] transition-all"
                >
                  <Mail size={16} />
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={fadeUp} custom={4}>
            <h4 className="text-[#6ae3ff] font-semibold mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-[#cbd5e1]">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-[#d4af37] transition-all"
                >
                  <Instagram size={16} />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-[#d4af37] transition-all"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-[#d4af37] transition-all"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-[rgba(212,175,55,0.1)] pt-8 text-center text-[#cbd5e1] text-sm"
        >
          <p>
            &copy; {currentYear} Narvyn Dev Studio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
