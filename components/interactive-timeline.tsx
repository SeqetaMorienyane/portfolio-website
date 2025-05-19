"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp } from "lucide-react"

interface TimelineItem {
  year: string
  title: string
  description: string
  details?: string
  icon?: React.ReactNode
}

interface InteractiveTimelineProps {
  items: TimelineItem[]
}

export default function InteractiveTimeline({ items }: InteractiveTimelineProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="timeline-container">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="timeline-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <motion.div
            className="timeline-dot cursor-pointer"
            whileHover={{ scale: 1.2 }}
            onClick={() => toggleExpand(index)}
            animate={{
              scale: expandedIndex === index ? [1, 1.2, 1] : 1,
              boxShadow: expandedIndex === index ? "0 0 15px rgba(204, 255, 0, 0.9)" : "0 0 8px rgba(204, 255, 0, 0.7)",
            }}
            transition={{ duration: 0.5 }}
          />
          <div className="timeline-content">
            <Card
              className={`border-neon/10 bg-card/50 backdrop-blur-sm transition-all duration-300 ${
                expandedIndex === index
                  ? "shadow-lg shadow-neon/20 border-neon/30"
                  : "hover:shadow-neon/20 hover:border-neon/20"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start cursor-pointer" onClick={() => toggleExpand(index)}>
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-neon">
                      <span className="text-neon">{item.year}</span> - {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="flex items-center">
                    <Badge
                      variant="outline"
                      className={`border-neon/30 text-neon transition-all duration-300 ${
                        expandedIndex === index ? "bg-neon/10" : ""
                      }`}
                    >
                      {item.year}
                    </Badge>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-2 text-neon"
                    >
                      {expandedIndex === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && item.details && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-neon/10">
                        <p className="text-sm">{item.details}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
