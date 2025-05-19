"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface GlowMenuItemProps {
  href: string
  children: React.ReactNode
  isActive: boolean
  onClick?: () => void
}

export function GlowMenuItem({ href, children, isActive, onClick }: GlowMenuItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={href}
      className={cn(
        "relative px-3 py-2 transition-all duration-300 text-sm font-medium",
        isActive ? "text-neon animate-glow-pulse" : "text-muted-foreground hover:text-neon",
        isHovered && !isActive && "text-neon",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
      <span
        className={cn(
          "absolute bottom-0 left-0 w-full h-0.5 bg-neon transform scale-x-0 transition-transform duration-300",
          (isActive || isHovered) && "scale-x-100",
        )}
      />
      {(isActive || isHovered) && <span className="absolute inset-0 rounded-md bg-neon/5 -z-10" />}
    </Link>
  )
}
