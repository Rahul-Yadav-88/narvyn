"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-[rgba(212,175,55,0.2)]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#6ae3ff] flex items-center justify-center font-serif font-bold text-[#0a0b10] group-hover:scale-110 transition-transform">
            N
          </div>
          <span className="gradient-gold-cyan text-xl font-bold hidden sm:inline">Narvyn</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-all ${
                pathname === item.href
                  ? "text-[#d4af37] border-b-2 border-[#d4af37] pb-1"
                  : "text-[#cbd5e1] hover:text-[#6ae3ff]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#6ae3ff] hover:text-[#d4af37] transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#0a0b10]/95 glass-effect border-b border-[rgba(212,175,55,0.2)] p-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-all ${
                    pathname === item.href ? "text-[#d4af37]" : "text-[#cbd5e1] hover:text-[#6ae3ff]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
