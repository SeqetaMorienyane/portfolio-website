"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const mouseDown = () => setCursorVariant("clicked")
    const mouseUp = () => setCursorVariant("default")
    const mouseEnterLink = () => setCursorVariant("hover")
    const mouseLeaveLink = () => setCursorVariant("default")

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mousedown", mouseDown)
    window.addEventListener("mouseup", mouseUp)

    // Add event listeners to all links and buttons
    const links = document.querySelectorAll("a, button, [role='button']")
    links.forEach((link) => {
      link.addEventListener("mouseenter", mouseEnterLink)
      link.addEventListener("mouseleave", mouseLeaveLink)
    })

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("mousedown", mouseDown)
      window.removeEventListener("mouseup", mouseUp)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", mouseEnterLink)
        link.removeEventListener("mouseleave", mouseLeaveLink)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: "rgba(204, 255, 0, 0.5)",
      mixBlendMode: "difference" as const,
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(204, 255, 0, 0.8)",
      mixBlendMode: "difference" as const,
    },
    clicked: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      backgroundColor: "rgba(204, 255, 0, 1)",
      mixBlendMode: "difference" as const,
    },
  }

  // Add cursor trail
  const cursorTrailVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      opacity: [0, 0.5, 0],
      scale: [0.5, 1, 0.5],
      transition: { duration: 0.8 },
    },
  }

  return (
    <>
      <motion.div
        className="cursor-dot fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="cursor-trail fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] hidden md:block"
        variants={cursorTrailVariants}
        animate="default"
        style={{ backgroundColor: "rgba(204, 255, 0, 0.2)" }}
      />
    </>
  )
}
