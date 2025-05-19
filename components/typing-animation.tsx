"use client"

import { useEffect, useState } from "react"

interface TypingAnimationProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
  className?: string
}

export default function TypingAnimation({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
  className = "",
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, delayBetweenTexts)
      return () => clearTimeout(timeout)
    }

    const currentFullText = texts[currentTextIndex]

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false)
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentFullText.substring(0, currentText.length - 1))
        }, deletingSpeed)
      }
    } else {
      if (currentText === currentFullText) {
        setIsPaused(true)
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentFullText.substring(0, currentText.length + 1))
        }, typingSpeed)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, delayBetweenTexts])

  return (
    <span className={className}>
      {currentText}
      <span className="inline-block w-1 h-6 ml-1 bg-neon animate-pulse" aria-hidden="true"></span>
    </span>
  )
}
