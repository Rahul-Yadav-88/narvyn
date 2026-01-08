import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata = {
  metadataBase: new URL("https://narvyn.com"),

  title: {
    default: "Narvyn | Enterprise Web & Software Development Studio",
    template: "%s | Narvyn",
  },

  description:
    "Narvyn is a premium enterprise development studio delivering scalable web, mobile, and cloud solutions using modern technologies like Django, React, and Next.js.",

  alternates: {
    canonical: "https://narvyn.com",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Narvyn | Enterprise Web & Software Development Studio",
    description:
      "Premium enterprise development studio delivering scalable web, mobile, and cloud solutions.",
    url: "https://narvyn.com",
    siteName: "Narvyn",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Narvyn - Enterprise Development Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Narvyn | Enterprise Web & Software Development Studio",
    description:
      "Building scalable enterprise-grade digital solutions with modern technologies.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/icon.svg",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#0a0b10]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
