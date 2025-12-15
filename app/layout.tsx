import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Portfolio - Fullstack Developer",
    template: "%s | Fullstack Developer Portfolio"
  },
  description: "Showcasing innovative fullstack web development projects and expertise. Specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: ["fullstack developer", "web development", "React", "Next.js", "Node.js", "TypeScript", "portfolio", "software engineer"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Name",
  metadataBase: new URL("https://yourwebsite.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Fullstack Developer Portfolio",
    description: "Showcasing innovative fullstack web development projects and expertise",
    siteName: "Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fullstack Developer Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fullstack Developer Portfolio",
    description: "Showcasing innovative fullstack web development projects and expertise",
    images: ["/og-image.jpg"],
    creator: "@yourusername"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
