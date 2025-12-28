import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sandeep Adhikari - Web Developer",
  description:
    "Web Developer skilled in React, JavaScript, Node.js, MongoDB, and modern web technologies.",
  keywords: "Full-Stack Developer, React, Next.js, Node.js, TypeScript, JavaScript, Portfolio",
  authors: [{ name: "Sandeep Adhikari" }],
  openGraph: {
    title: "Sandeep Adhikari - Web Developer",
    description: "Web Developer building modern, responsive web applications",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
