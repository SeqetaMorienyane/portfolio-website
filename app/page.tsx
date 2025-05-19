"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import TypingAnimation from "@/components/typing-animation"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    // Add mouse move effect for hero section
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const { clientX, clientY } = e
      const { left, top, width, height } = heroRef.current.getBoundingClientRect()

      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      heroRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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

  const typingTexts = [
    "Cybersecurity Analyst",
    "Data Analyst",
    "UI/UX Designer",
    "IT Helpdesk Specialist",
    "Network Engineer",
  ]

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-black to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 cyberpunk-grid opacity-20"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            ref={heroRef}
            className="flex flex-col items-center text-center space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d", transition: "transform 0.1s ease" }}
          >
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-neon/30 shadow-xl animate-float">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Seqeta Morienyane"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-neon/20 to-transparent"></div>
            </div>
            <div className="space-y-4 max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter neon-text-intense">
                <TypingAnimation texts={typingTexts} typingSpeed={80} className="inline" />
              </h1>
              <p className="text-xl text-blue-100 max-w-[700px] mx-auto">
                Building secure systems, analyzing data, creating intuitive interfaces, and providing effective IT
                solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button asChild size="lg" className="font-medium bg-neon text-black hover:bg-neon/80 neon-button">
                  <Link href="/projects">View Projects</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="font-medium border-neon text-neon hover:bg-neon/10 neon-button"
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 relative">
        <motion.div
          className="container px-4 md:px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            variants={itemVariants}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                Featured Projects
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Check out some of my recent work and professional experiences.
              </p>
            </div>
          </motion.div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {[
              {
                title: "Datacom Service Desk Job Simulation",
                description: "Remote job simulation focused on IT helpdesk support and service management",
                category: "IT Support",
                image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "AIG Shields Up: Cybersecurity Program",
                description: "Virtual experience program focused on cybersecurity principles and practices",
                category: "Cybersecurity",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "UI/UX Design Portfolio",
                description: "Collection of user interface and experience design projects",
                category: "UI/UX Design",
                image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-neon/10 bg-card shadow-md transition-all project-card"
                variants={itemVariants}
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-4">
                  <div className="inline-block rounded-full bg-neon/10 px-3 py-1 text-xs font-medium text-neon">
                    {project.category}
                  </div>
                  <h3 className="mt-3 text-xl font-bold group-hover:text-neon transition-colors">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button asChild variant="outline" className="neon-button">
              <Link href="/projects" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 md:py-24 bg-muted/20 relative">
        <div className="absolute inset-0 cyberpunk-grid opacity-10"></div>
        <motion.div
          className="container px-4 md:px-6 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            variants={itemVariants}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">Core Skills</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                My expertise spans across multiple domains in information technology.
              </p>
            </div>
          </motion.div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {[
              {
                title: "IT Support",
                skills: [
                  "Configuration & Troubleshooting",
                  "End-Point Devices",
                  "Helpdesk Support",
                  "Network Administration",
                  "User Support",
                  "Technical Documentation",
                ],
              },
              {
                title: "Cybersecurity",
                skills: [
                  "Cyber (Blue Teaming)",
                  "Security Monitoring",
                  "Threat Analysis",
                  "Incident Response",
                  "Security Tools",
                  "Vulnerability Assessment",
                ],
              },
              {
                title: "Data Analysis",
                skills: [
                  "Data Analysis",
                  "Data Presentation",
                  "Reporting",
                  "Data Visualization",
                  "Problem Solving",
                  "Critical Thinking",
                ],
              },
              {
                title: "UI/UX Design",
                skills: ["HTML/CSS", "JavaScript", "Responsive Design", "UI Design", "Wireframing", "User Experience"],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                className="rounded-lg border border-neon/10 bg-card p-6 shadow-sm skill-card glow-border"
                variants={itemVariants}
              >
                <h3 className="text-xl font-bold mb-4 neon-text">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-neon" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button asChild variant="outline" className="neon-button">
              <Link href="/skills" className="group">
                Explore All Skills
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
        <motion.div
          className="container px-4 md:px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl neon-text-intense">
                Let's Work Together
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                I'm currently available for new opportunities in cybersecurity, data analysis, UI/UX design, and IT
                support.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row pt-4">
              <Button asChild size="lg" className="bg-neon text-black hover:bg-neon/80 neon-button">
                <Link href="/contact">Contact Me</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-neon text-neon hover:bg-neon/10 neon-button"
              >
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
