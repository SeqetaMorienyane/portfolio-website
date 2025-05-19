"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { GlowMenuItem } from "@/components/glow-menu-item"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-neon/10 shadow-md shadow-neon/5" : "bg-background"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-xl font-bold transition-all duration-300 group-hover:text-neon neon-text">
            Seqeta Morienyane
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <GlowMenuItem key={link.path} href={link.path} isActive={pathname === link.path}>
              {link.name}
            </GlowMenuItem>
          ))}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </nav>
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="ml-2" onClick={() => setIsOpen(!isOpen)}>
            <Menu className={`h-5 w-5 ${isOpen ? "hidden" : "block"}`} />
            <X className={`h-5 w-5 ${isOpen ? "block" : "hidden"}`} />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden p-4 pt-0 bg-background/95 backdrop-blur-md border-b border-neon/10">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <GlowMenuItem
                key={link.path}
                href={link.path}
                isActive={pathname === link.path}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </GlowMenuItem>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
