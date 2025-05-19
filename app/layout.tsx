import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PerformanceOptimizer from "@/components/performance-optimizer"
import PageTransition from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Seqeta Morienyane | Cybersecurity Analyst | Data Analyst | IT Helpdesk",
  description:
    "Professional portfolio of Seqeta Morienyane, specializing in Cybersecurity, Data Analysis, and IT Support",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <PerformanceOptimizer />
          <div className="flex min-h-screen flex-col relative z-10">
            <Navbar />
            <PageTransition>
              <main className="flex-1">{children}</main>
            </PageTransition>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
