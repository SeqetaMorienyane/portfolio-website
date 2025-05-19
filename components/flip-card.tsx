"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FlipCardProps {
  front: ReactNode
  back: ReactNode
  className?: string
}

export default function FlipCard({ front, back, className = "" }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div
      className={`relative w-full h-full perspective-1000 cursor-pointer ${className}`}
      onClick={handleFlip}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleFlip()
        }
      }}
      tabIndex={0}
      role="button"
      aria-pressed={isFlipped}
    >
      <motion.div
        className="relative w-full h-full preserve-3d transition-all duration-500"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="absolute w-full h-full backface-hidden">{front}</div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180">{back}</div>
      </motion.div>
    </div>
  )
}
