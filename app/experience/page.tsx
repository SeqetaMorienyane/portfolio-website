"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperiencePage() {
  const experiences = [
    {
      company: "The Council for Scientific and Industrial Research (CSIR)",
      logo: "/placeholder.svg?height=50&width=50",
      position: "Security Operations Analyst (Student Intern)",
      period: "2023 - Present",
      achievements: [
        "Monitoring security information and event management (SIEM) tools for unusual activity",
        "Analyzing security alerts and determining their impact on systems",
        "Assisting in responding to security incidents and mitigating threats",
        "Participating in cybersecurity training programs and pursuing relevant certifications",
      ],
    },
    {
      company: "Richfield Graduate Institute of Technology (RGIT) – Pretoria Campus",
      logo: "/placeholder.svg?height=50&width=50",
      position: "Network Support Technician (Work Integrated Learning)",
      period: "2023 - 2024",
      achievements: [
        "Performing routine maintenance of network hardware and software",
        "Ensuring efficient operation of network equipment (routers, switches, and firewalls)",
        "Providing support for network access, configuring and troubleshooting VPNs and Wi-Fi connections",
        "Assisting users with technical issues and documenting solutions",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  return (
    <div className="container py-12 md:py-16 px-4 md:px-6">
      <motion.h1
        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 gradient-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Professional Experience
      </motion.h1>
      <motion.p
        className="text-xl text-muted-foreground max-w-3xl mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My professional journey in IT support, network management, and cybersecurity.
      </motion.p>

      <div className="max-w-4xl mx-auto">
        <motion.div className="timeline-container" variants={containerVariants} initial="hidden" animate="visible">
          {experiences.map((experience, index) => (
            <motion.div key={index} className="timeline-item" variants={itemVariants}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <Card className="border-neon/10 bg-card/50 backdrop-blur-sm hover:shadow-neon/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-neon/10 border border-neon/20">
                        <Image
                          src={experience.logo || "/placeholder.svg"}
                          alt={experience.company}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <h2 className="text-xl font-bold neon-text">{experience.position}</h2>
                          <Badge variant="outline" className="border-neon/30 text-neon">
                            {experience.period}
                          </Badge>
                        </div>
                        <h3 className="text-lg text-muted-foreground mb-4">{experience.company}</h3>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start group">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-neon flex-shrink-0 group-hover:animate-pulse-neon"></span>
                              <span className="group-hover:text-neon transition-colors duration-300">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
