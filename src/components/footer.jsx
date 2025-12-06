import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[rgba(212,175,55,0.2)] bg-[#0a0b10]/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-[#d4af37] font-serif font-bold mb-4">Narvyn</h3>
            <p className="text-[#cbd5e1] text-sm">Premium digital solutions for enterprise innovation.</p>
          </div>
          <div>
            <h4 className="text-[#6ae3ff] font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-[#cbd5e1]">
              <li>
                <Link href="/services" className="hover:text-[#d4af37] transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#d4af37] transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#d4af37] transition-colors">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#6ae3ff] font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-[#cbd5e1]">
              <li>
                <Link href="/about" className="hover:text-[#d4af37] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#d4af37] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d4af37] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#6ae3ff] font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-[#cbd5e1]">
              <li>
                <a href="#" className="hover:text-[#d4af37] transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4af37] transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4af37] transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[rgba(212,175,55,0.1)] pt-8 text-center text-[#cbd5e1] text-sm">
          <p>&copy; {currentYear} Narvyn Dev Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
