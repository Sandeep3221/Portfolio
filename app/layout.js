import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Sandeep Adhikari - Full Stack Developer",
  description:
    "Full Stack Web Developer skilled in React, Next.js, Node.js, MongoDB, and modern web technologies. Building scalable, production-ready applications.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "MongoDB",
    "MERN Stack",
    "Web Developer",
    "Portfolio",
    "Sandeep Adhikari",
  ],
  authors: [{ name: "Sandeep Adhikari" }],
  creator: "Sandeep Adhikari",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Sandeep Adhikari - Full Stack Developer",
    description:
      "Full Stack Web Developer building modern, responsive web applications with React, Node.js, and MongoDB.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandeep Adhikari - Full Stack Developer",
    description:
      "Full Stack Web Developer building modern, responsive web applications.",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
