import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Narvyn Dev - Premium Development Studio",
  description: "Luxury web development and digital solutions for enterprise clients",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased bg-[#0a0b10]`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
