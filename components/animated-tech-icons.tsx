"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import {
  Code,
  Database,
  Lock,
  Server,
  Wifi,
  Shield,
  Terminal,
  MonitorSmartphone,
  Cpu,
  Cloud,
  Network,
  FileCode,
  Layers,
  Palette,
} from "lucide-react"
import type { JSX } from "react"

interface TechIcon {
  icon: JSX.Element
  name: string
  color: string
}

export default function AnimatedTechIcons() {
  const containerRef = useRef<HTMLDivElement>(null)

  const techIcons: TechIcon[] = [
    { icon: <Code size={24} />, name: "HTML/CSS", color: "#CCFF00" },
    { icon: <FileCode size={24} />, name: "JavaScript", color: "#CCFF00" },
    { icon: <Database size={24} />, name: "SQL", color: "#CCFF00" },
    { icon: <Lock size={24} />, name: "Cybersecurity", color: "#CCFF00" },
    { icon: <Server size={24} />, name: "Servers", color: "#CCFF00" },
    { icon: <Wifi size={24} />, name: "Networking", color: "#CCFF00" },
    { icon: <Shield size={24} />, name: "Security", color: "#CCFF00" },
    { icon: <Terminal size={24} />, name: "Command Line", color: "#CCFF00" },
    { icon: <MonitorSmartphone size={24} />, name: "Responsive Design", color: "#CCFF00" },
    { icon: <Cpu size={24} />, name: "Hardware", color: "#CCFF00" },
    { icon: <Cloud size={24} />, name: "Cloud", color: "#CCFF00" },
    { icon: <Network size={24} />, name: "Network Security", color: "#CCFF00" },
    { icon: <Layers size={24} />, name: "System Architecture", color: "#CCFF00" },
    { icon: <Palette size={24} />, name: "UI/UX Design", color: "#CCFF00" },
  ]

  return (
    <div ref={containerRef} className="relative h-40 w-full overflow-hidden my-8">
      {techIcons.map((tech, index) => (
        <motion.div
          key={index}
          className="absolute flex flex-col items-center justify-center"
          initial={{
            x: Math.random() * 100 - 50 + "%",
            y: Math.random() * 100 - 50 + "%",
            opacity: 0,
          }}
          animate={{
            x: [
              Math.random() * 80 - 40 + "%",
              Math.random() * 80 - 40 + "%",
              Math.random() * 80 - 40 + "%",
              Math.random() * 80 - 40 + "%",
            ],
            y: [
              Math.random() * 80 - 40 + "%",
              Math.random() * 80 - 40 + "%",
              Math.random() * 80 - 40 + "%",
              Math.random() * 80 - 40 + "%",
            ],
            opacity: [0.7, 0.9, 0.7, 0.9],
            scale: [1, 1.1, 1, 1.1],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
            times: [0, 0.33, 0.66, 1],
          }}
        >
          <div
            className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-neon/20 shadow-lg shadow-neon/10"
            style={{ color: tech.color }}
          >
            {tech.icon}
          </div>
          <span className="text-xs mt-1 font-medium text-neon/80">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  )
}
