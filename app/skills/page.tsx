"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Server,
  Shield,
  Wifi,
  Globe,
  Terminal,
  BarChart,
  Search,
  AlertTriangle,
  Headphones,
  Monitor,
  FileText,
  PieChart,
  LineChart,
  BrainCircuit,
  Palette,
  Layout,
  Layers,
  Users,
  Figma,
  Code,
} from "lucide-react"

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "IT Support",
      description: "Providing technical assistance and troubleshooting for hardware and software issues",
      icon: <Headphones className="h-8 w-8 text-neon" />,
      skills: [
        { name: "Configuration & Troubleshooting", level: "Advanced", icon: <Terminal className="h-4 w-4" /> },
        { name: "End-Point Devices", level: "Advanced", icon: <Monitor className="h-4 w-4" /> },
        { name: "Helpdesk Support", level: "Advanced", icon: <Headphones className="h-4 w-4" /> },
        { name: "Network Administration", level: "Intermediate", icon: <Wifi className="h-4 w-4" /> },
        { name: "User Support", level: "Advanced", icon: <Globe className="h-4 w-4" /> },
        { name: "Technical Documentation", level: "Intermediate", icon: <FileText className="h-4 w-4" /> },
        { name: "System Maintenance", level: "Intermediate", icon: <Server className="h-4 w-4" /> },
        { name: "Problem Solving", level: "Advanced", icon: <BrainCircuit className="h-4 w-4" /> },
      ],
    },
    {
      title: "Cybersecurity",
      description: "Protecting systems and networks from digital threats and security breaches",
      icon: <Shield className="h-8 w-8 text-neon" />,
      skills: [
        { name: "Cyber (Blue Teaming)", level: "Intermediate", icon: <Shield className="h-4 w-4" /> },
        { name: "Security Monitoring", level: "Intermediate", icon: <Search className="h-4 w-4" /> },
        { name: "Threat Analysis", level: "Intermediate", icon: <AlertTriangle className="h-4 w-4" /> },
        { name: "Incident Response", level: "Intermediate", icon: <AlertTriangle className="h-4 w-4" /> },
        { name: "Security Tools", level: "Intermediate", icon: <Terminal className="h-4 w-4" /> },
        { name: "Vulnerability Assessment", level: "Intermediate", icon: <Search className="h-4 w-4" /> },
        { name: "Security Awareness", level: "Intermediate", icon: <Shield className="h-4 w-4" /> },
        { name: "Risk Management", level: "Beginner", icon: <AlertTriangle className="h-4 w-4" /> },
      ],
    },
    {
      title: "Data Analysis",
      description: "Examining data sets to draw conclusions and support decision-making",
      icon: <BarChart className="h-8 w-8 text-neon" />,
      skills: [
        { name: "Data Analysis", level: "Intermediate", icon: <BarChart className="h-4 w-4" /> },
        { name: "Data Presentation", level: "Intermediate", icon: <PieChart className="h-4 w-4" /> },
        { name: "Reporting", level: "Intermediate", icon: <FileText className="h-4 w-4" /> },
        { name: "Data Visualization", level: "Intermediate", icon: <LineChart className="h-4 w-4" /> },
        { name: "Problem Solving", level: "Advanced", icon: <BrainCircuit className="h-4 w-4" /> },
        { name: "Critical Thinking", level: "Advanced", icon: <BrainCircuit className="h-4 w-4" /> },
        { name: "Statistical Analysis", level: "Beginner", icon: <BarChart className="h-4 w-4" /> },
        { name: "Data Interpretation", level: "Intermediate", icon: <PieChart className="h-4 w-4" /> },
      ],
    },
    {
      title: "Front-End & UI/UX Design",
      description: "Creating intuitive, accessible, and visually appealing user interfaces and experiences",
      icon: <Palette className="h-8 w-8 text-neon" />,
      skills: [
        { name: "HTML/CSS", level: "Intermediate", icon: <Code className="h-4 w-4" /> },
        { name: "JavaScript", level: "Beginner", icon: <Code className="h-4 w-4" /> },
        { name: "Responsive Design", level: "Intermediate", icon: <Layout className="h-4 w-4" /> },
        { name: "UI Design", level: "Intermediate", icon: <Palette className="h-4 w-4" /> },
        { name: "UX Principles", level: "Intermediate", icon: <Users className="h-4 w-4" /> },
        { name: "Wireframing", level: "Intermediate", icon: <Layers className="h-4 w-4" /> },
        { name: "Prototyping", level: "Beginner", icon: <Figma className="h-4 w-4" /> },
        { name: "Accessibility", level: "Beginner", icon: <Users className="h-4 w-4" /> },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
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
        Skills & Expertise
      </motion.h1>
      <motion.p
        className="text-xl text-muted-foreground max-w-3xl mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My technical skills span across multiple domains, allowing me to approach problems from different perspectives
        and create comprehensive solutions.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillCategories.map((category, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="skill-card h-full border-neon/10 bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 rounded-full bg-neon/10 animate-pulse-neon">{category.icon}</div>
                <div>
                  <CardTitle className="neon-text">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between group">
                      <div className="flex items-center gap-2">
                        <span className="text-neon group-hover:animate-pulse-neon transition-all duration-300">
                          {skill.icon}
                        </span>
                        <span className="group-hover:text-neon transition-colors duration-300">{skill.name}</span>
                      </div>
                      <Badge
                        variant={
                          skill.level === "Advanced"
                            ? "default"
                            : skill.level === "Intermediate"
                              ? "secondary"
                              : "outline"
                        }
                        className={
                          skill.level === "Advanced"
                            ? "bg-neon text-black"
                            : skill.level === "Intermediate"
                              ? "bg-neon/20 text-neon"
                              : "border-neon/30 text-neon"
                        }
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
