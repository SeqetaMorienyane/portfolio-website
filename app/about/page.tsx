"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import InteractiveTimeline from "@/components/interactive-timeline"
import { GraduationCap, Briefcase, Award, ArrowRight } from "lucide-react"
import ResumeDownload from "@/components/resume-download"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  const education = [
    {
      degree: "Bachelor of Science – BSc, Information Technology (NQF Level 8)",
      institution: "Richfield Graduate Institute of Technology (RGIT) - Pretoria Campus",
      year: "2024-2025",
      description: "Currently pursuing a BSc in Information Technology, building on my diploma foundation.",
    },
    {
      degree: "Diploma in Information Technology – DIT, Information Technology (NQF Level 7)",
      institution: "Richfield Graduate Institute of Technology (RGIT) - Pretoria Campus",
      year: "2021-2024",
      description: "Completed a 3-year diploma with focus on IT fundamentals, networking, and security.",
    },
  ]

  const certifications = [
    {
      name: "Datacom Service Desk Job Simulation",
      issuer: "Forage",
      year: "2023",
    },
    {
      name: "AIG Shields Up: Cybersecurity Program",
      issuer: "Forage",
      year: "2023",
    },
    {
      name: "Mastercard Cybersecurity Program",
      issuer: "Forage",
      year: "2023",
    },
  ]

  const timelineItems = [
    {
      year: "2024",
      title: "Started BSc in Information Technology",
      description: "Began Bachelor's degree at Richfield Graduate Institute of Technology.",
      details:
        "Building on my diploma foundation, I'm now pursuing a BSc in Information Technology to deepen my knowledge in advanced IT concepts, cybersecurity, and network engineering. This program focuses on practical applications of theoretical knowledge in real-world scenarios.",
      icon: <GraduationCap />,
    },
    {
      year: "2023",
      title: "Security Operations Analyst Internship",
      description: "Joined CSIR as a Security Operations Analyst intern.",
      details:
        "Working with the Security Operations Center (SOC) team at CSIR, I'm gaining hands-on experience in monitoring security information and event management (SIEM) tools, analyzing security alerts, and responding to incidents. This role has provided valuable insights into real-world cybersecurity operations and threat detection.",
      icon: <Briefcase />,
    },
    {
      year: "2023",
      title: "Network Support Technician",
      description: "Work Integrated Learning at Richfield Graduate Institute of Technology.",
      details:
        "As part of my Work Integrated Learning program, I served as a Network Support Technician at RGIT, where I maintained network hardware and software, ensured efficient operation of network equipment, and provided support for network access. This practical experience complemented my theoretical knowledge from the classroom.",
      icon: <Briefcase />,
    },
    {
      year: "2021",
      title: "Started Diploma in Information Technology",
      description: "Began my journey in IT at Richfield Graduate Institute of Technology.",
      details:
        "Embarked on a 3-year Diploma in Information Technology program at RGIT, focusing on IT fundamentals, programming, networking, and cybersecurity. This program provided a solid foundation for my IT career through a combination of theoretical knowledge and practical applications.",
      icon: <GraduationCap />,
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
        About Me
      </motion.h1>

      {/* Resume Download Button */}
      <div className="flex justify-center mb-10">
        <ResumeDownload />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Bio, Education, Certifications */}
        <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
          <motion.section className="space-y-4" variants={itemVariants}>
            <h2 className="text-2xl font-bold neon-text">Biography</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                I have recently completed a 3-year Diploma in Information Technology (DIT) and a 1-year articulation
                course to obtain a Bachelor of Science Degree in Information Technology (BSc IT) at Richfield Graduate
                Institute of Technology (RGIT).
              </p>
              <p>
                During my Work Integrated Learning Program at Richfield Graduate Institute of Technology in 2023/24,
                alongside being a student intern at The Council for Scientific and Industrial Research (CSIR), my
                academic journey and practical experiences have equipped me with a solid foundation in a diverse range
                of IT disciplines specifically Network Administration/Management and Cybersecurity.
              </p>
            </div>
          </motion.section>

          <motion.section className="space-y-4" variants={itemVariants}>
            <h2 className="text-2xl font-bold neon-text">Education</h2>
            <div className="space-y-4">
              {education.map((item, index) => (
                <Card
                  key={index}
                  className="border-neon/10 bg-card/50 backdrop-blur-sm hover:shadow-neon/20 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg">{item.degree}</h3>
                        <p className="text-muted-foreground">{item.institution}</p>
                      </div>
                      <Badge variant="outline" className="border-neon/30 text-neon">
                        {item.year}
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          <motion.section className="space-y-4" variants={itemVariants}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold neon-text">Certifications</h2>
                <Award className="h-5 w-5 text-neon animate-pulse-neon" />
              </div>
              <Button asChild variant="ghost" size="sm" className="text-neon hover:bg-neon/10">
                <Link href="/certifications" className="group flex items-center">
                  View All
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="border-neon/10 bg-card/50 backdrop-blur-sm hover:shadow-neon/20 transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <h3 className="font-medium text-sm mb-1">{cert.name}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      <Badge variant="outline" className="text-xs border-neon/30 text-neon">
                        {cert.year}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-2">
              <Button asChild variant="outline" className="w-full neon-button">
                <Link href="/certifications">
                  View Detailed Certifications
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.section>
        </motion.div>

        {/* Right Column - Interactive Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6 neon-text">Career Timeline</h2>
          <InteractiveTimeline items={timelineItems} />
        </motion.div>
      </div>
    </div>
  )
}
