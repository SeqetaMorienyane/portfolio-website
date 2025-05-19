"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface SkillSphereProps {
  skills: string[]
  className?: string
}

export default function SkillSphere({ skills, className = "" }: SkillSphereProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const lastMousePosition = useRef({ x: 0, y: 0 })
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null)

  // Set up auto-rotation and mouse interaction
  useEffect(() => {
    if (!containerRef.current) return

    const startAutoRotate = () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current)

      autoRotateRef.current = setInterval(() => {
        if (!isDragging) {
          setRotation((prev) => ({
            x: prev.x,
            y: (prev.y + 0.2) % 360,
          }))
        }
      }, 50)
    }

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true)
      lastMousePosition.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      if (isDragging) {
        const deltaX = e.clientX - lastMousePosition.current.x
        const deltaY = e.clientY - lastMousePosition.current.y

        setRotation((prev) => ({
          x: (prev.x - deltaY * 0.5) % 360,
          y: (prev.y + deltaX * 0.5) % 360,
        }))

        lastMousePosition.current = { x: e.clientX, y: e.clientY }
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    const handleMouseLeave = () => {
      setIsDragging(false)
    }

    const container = containerRef.current
    container.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
    container.addEventListener("mouseleave", handleMouseLeave)

    startAutoRotate()
    setIsLoaded(true)

    return () => {
      container.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
      container.removeEventListener("mouseleave", handleMouseLeave)

      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current)
      }
    }
  }, [isDragging])

  return (
    <div
      ref={containerRef}
      className={`relative ${className} cursor-grab ${isDragging ? "cursor-grabbing" : ""}`}
      style={{
        perspective: "1000px",
        opacity: isLoaded ? 1 : 0,
        transition: "opacity 1s ease-in-out",
      }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {/* Sphere wireframe effect */}
        <div className="absolute w-[300px] h-[300px] rounded-full border border-neon/10 opacity-30" />
        <div className="absolute w-[350px] h-[350px] rounded-full border border-neon/10 opacity-20" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-neon/10 opacity-10" />

        {/* Skills */}
        {skills.map((skill, index) => {
          // Calculate position on sphere
          const phi = Math.acos(-1 + (2 * index) / skills.length)
          const theta = Math.sqrt(skills.length * Math.PI) * phi

          const x = 150 * Math.sin(phi) * Math.cos(theta)
          const y = 150 * Math.sin(phi) * Math.sin(theta)
          const z = 150 * Math.cos(phi)

          return (
            <motion.div
              key={index}
              className="absolute flex items-center justify-center"
              style={{
                transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                zIndex: z > 0 ? Math.floor(z) : Math.floor(z) - 1000,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: z > 0 ? 1 : 0.3 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="whitespace-nowrap px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-neon/20 text-neon text-sm font-medium"
                style={{
                  transform: "rotateY(0deg)",
                  scale: 1 + (z > 0 ? z / 300 : 0),
                }}
              >
                {skill}
              </div>
            </motion.div>
          )
        })}
      </div>

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon"></div>
        </div>
      )}
    </div>
  )
}
