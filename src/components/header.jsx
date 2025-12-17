"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  const navItemHover = {
    scale: 1.1,
    rotateX: 15,
    rotateY: 10,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  }

  const logoHover = {
    scale: 1.2,
    rotate: [0, 10, -10, 0],
    transition: { duration: 0.6, repeat: Infinity, repeatType: "loop" },
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-[rgba(212,175,55,0.2)] backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.img
            src="/logo.png"
            alt="Narvyn Logo"
            className="w-10 h-12 rounded-lg shadow-lg"
            whileHover={logoHover}
          />
          <span className="gradient-gold-cyan text-xl font-bold hidden sm:inline">
            Narvyn
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.div key={item.href} whileHover={navItemHover}>
              <Link
                href={item.href}
                className={`text-sm font-medium transition-all ${
                  pathname === item.href
                    ? "text-[#d4af37] border-b-2 border-[#d4af37] pb-1"
                    : "text-[#cbd5e1] hover:text-[#6ae3ff]"
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#6ae3ff] hover:text-[#d4af37] transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={menuVariants}
            className="absolute top-full left-0 right-0 bg-[#0a0b10]/80  border-t border-[rgba(212,175,55,0.2)] p-6 md:hidden flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <motion.div key={item.href} whileHover={navItemHover}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-all ${
                    pathname === item.href
                      ? "text-[#d4af37]"
                      : "text-[#cbd5e1] hover:text-[#6ae3ff]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}
