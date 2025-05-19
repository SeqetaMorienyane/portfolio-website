"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="hover:bg-neon/10 hover:text-neon opacity-0">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme)
    setIsOpen(false)
  }

  const currentIcon = {
    light: <Sun className="h-[1.2rem] w-[1.2rem] text-neon" />,
    dark: <Moon className="h-[1.2rem] w-[1.2rem] text-neon" />,
    system: <Monitor className="h-[1.2rem] w-[1.2rem] text-neon" />,
  }[theme as string] || <Moon className="h-[1.2rem] w-[1.2rem] text-neon" />

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="hover:bg-neon/10 hover:text-neon relative overflow-hidden"
      >
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {currentIcon}
        </motion.div>
        <span className="sr-only">Toggle theme</span>
        {theme === "dark" && (
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 1] }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-neon/5 rounded-full" />
          </motion.div>
        )}
        {theme === "light" && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-neon/10 to-transparent rounded-full" />
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-neon/80"
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 30],
                  y: [0, (Math.random() - 0.5) * 30],
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  repeat: 0,
                  repeatType: "reverse",
                }}
                style={{
                  top: `${50 + (Math.random() - 0.5) * 20}%`,
                  left: `${50 + (Math.random() - 0.5) * 20}%`,
                }}
              />
            ))}
          </motion.div>
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-background/95 backdrop-blur-md border border-neon/20 z-50 overflow-hidden"
          >
            <div className="py-1">
              {["light", "dark", "system"].map((themeOption) => (
                <button
                  key={themeOption}
                  onClick={() => toggleTheme(themeOption)}
                  className={`flex items-center w-full px-4 py-2 text-sm hover:bg-neon/10 hover:text-neon transition-colors ${
                    theme === themeOption ? "text-neon" : "text-foreground"
                  }`}
                >
                  <div className="mr-2">
                    {themeOption === "light" && <Sun className="h-4 w-4" />}
                    {themeOption === "dark" && <Moon className="h-4 w-4" />}
                    {themeOption === "system" && <Monitor className="h-4 w-4" />}
                  </div>
                  <span className="capitalize">{themeOption}</span>
                  {theme === themeOption && (
                    <motion.div
                      layoutId="activeTheme"
                      className="absolute left-0 w-1 h-full bg-neon"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
