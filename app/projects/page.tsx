"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Info, Calendar, User, Tag } from "lucide-react"
import FlipCard from "@/components/flip-card"

// Project data
const projects = [
  {
    id: 1,
    title: "Datacom Service Desk Job Simulation",
    description:
      "Remote job simulation focused on IT helpdesk support and service management, developing skills in customer service, technical troubleshooting, and IT service management.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop",
    category: "IT Support",
    techStack: ["Helpdesk", "ITIL", "Customer Service", "Troubleshooting"],
    demoUrl: "https://example.com",
    details: {
      date: "2023",
      client: "Datacom",
      role: "IT Support Specialist",
      challenge:
        "Simulating real-world IT support scenarios and implementing effective solutions within service level agreements.",
      solution:
        "Applied ITIL framework principles to categorize and prioritize incidents, developed technical troubleshooting skills, and improved customer communication techniques.",
    },
  },
  {
    id: 2,
    title: "AIG Shields Up: Cybersecurity Program",
    description:
      "Virtual experience program focused on cybersecurity principles and practices, including threat detection, incident response, and security analysis.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
    category: "Cybersecurity",
    techStack: ["Threat Detection", "Incident Response", "Security Analysis", "Risk Assessment"],
    demoUrl: "https://example.com",
    details: {
      date: "2023",
      client: "AIG",
      role: "Security Analyst",
      challenge: "Identifying and responding to simulated cyber threats in a corporate environment.",
      solution:
        "Implemented security monitoring techniques, analyzed potential threats, and developed incident response procedures following industry best practices.",
    },
  },
  {
    id: 3,
    title: "Mastercard Cybersecurity Program",
    description:
      "Virtual experience program exploring cybersecurity in financial technology, focusing on security protocols, compliance, and protecting sensitive financial data.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop",
    category: "Cybersecurity",
    techStack: ["Financial Security", "Compliance", "Data Protection", "Security Protocols"],
    demoUrl: "https://example.com",
    details: {
      date: "2023",
      client: "Mastercard",
      role: "Cybersecurity Specialist",
      challenge: "Securing financial data and transactions in compliance with industry regulations.",
      solution:
        "Applied security protocols for financial data protection, implemented compliance measures, and developed strategies for securing payment systems.",
    },
  },
  {
    id: 4,
    title: "Network Infrastructure Management",
    description:
      "Work experience at RGIT involving the maintenance and troubleshooting of network hardware and software, ensuring efficient operation of network equipment.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    category: "Networks",
    techStack: ["Network Administration", "Hardware Maintenance", "Troubleshooting", "VPN Configuration"],
    demoUrl: "https://example.com",
    details: {
      date: "2023-2024",
      client: "RGIT",
      role: "Network Support Technician",
      challenge: "Maintaining and optimizing network infrastructure for an educational institution.",
      solution:
        "Performed routine maintenance of network hardware and software, configured and troubleshooted VPNs and Wi-Fi connections, and ensured efficient operation of network equipment.",
    },
  },
  {
    id: 5,
    title: "Security Operations Analysis",
    description:
      "Internship experience at CSIR involving monitoring security information and event management tools, analyzing security alerts, and responding to incidents.",
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?q=80&w=2033&auto=format&fit=crop",
    category: "Cybersecurity",
    techStack: ["SIEM", "Threat Analysis", "Incident Response", "Security Monitoring"],
    demoUrl: "https://example.com",
    details: {
      date: "2023-Present",
      client: "CSIR",
      role: "Security Operations Analyst",
      challenge: "Monitoring and responding to security threats in a research environment.",
      solution:
        "Monitored SIEM tools for unusual activity, analyzed security alerts and determined their impact on systems, and assisted in responding to security incidents and mitigating threats.",
    },
  },
  {
    id: 6,
    title: "IT Support and Helpdesk Management",
    description:
      "Experience providing technical support, troubleshooting hardware and software issues, and assisting users with technical problems.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    category: "IT Support",
    techStack: ["Technical Support", "Problem Resolution", "User Assistance", "Documentation"],
    demoUrl: "https://example.com",
    details: {
      date: "2022-2023",
      client: "Various",
      role: "IT Support Specialist",
      challenge: "Providing effective technical support and resolving user issues efficiently.",
      solution:
        "Developed strong troubleshooting skills, improved technical documentation processes, and enhanced user communication techniques to provide effective IT support.",
    },
  },
  {
    id: 7,
    title: "Portfolio Website Design",
    description:
      "Design and development of a personal portfolio website showcasing skills, projects, and professional experience with modern UI/UX principles.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
    category: "UI/UX Design",
    techStack: ["HTML/CSS", "React", "Responsive Design", "Tailwind CSS"],
    demoUrl: "https://example.com",
    details: {
      date: "2024",
      client: "Self",
      role: "UI/UX Designer & Developer",
      challenge: "Creating a visually appealing and functional portfolio website to showcase professional skills.",
      solution:
        "Designed and developed a responsive portfolio website using React and Tailwind CSS, implementing modern UI/UX principles and interactive elements.",
    },
  },
  {
    id: 8,
    title: "Dashboard Interface Concept",
    description:
      "UI/UX design concept for a cybersecurity dashboard interface, focusing on data visualization and user experience for security analysts.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    category: "UI/UX Design",
    techStack: ["UI Design", "UX Research", "Wireframing", "Prototyping"],
    demoUrl: "https://example.com",
    details: {
      date: "2023",
      client: "Concept Project",
      role: "UI/UX Designer",
      challenge: "Designing an intuitive dashboard interface for security analysts to monitor and respond to threats.",
      solution:
        "Conducted user research with security professionals, created wireframes and prototypes, and designed a dashboard interface that prioritizes critical information and streamlines workflow.",
    },
  },
]

// Categories for filtering
const categories = ["All", "IT Support", "Cybersecurity", "Networks", "UI/UX Design"]

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

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
        Projects & Experience
      </motion.h1>
      <motion.p
        className="text-xl text-muted-foreground max-w-3xl mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Explore my portfolio of projects and professional experiences in IT support, cybersecurity, network management,
        and UI/UX design. <span className="text-neon">Click on any card to see more details.</span>
      </motion.p>

      {/* Filter buttons */}
      <motion.div
        className="flex flex-wrap gap-2 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {categories.map((category, index) => (
          <Button
            key={category}
            variant={filter === category ? "neon" : "outline"}
            onClick={() => setFilter(category)}
            className={`transition-all ${filter === category ? "animate-pulse-neon" : "hover:border-neon hover:text-neon"}`}
          >
            {category}
          </Button>
        ))}
      </motion.div>

      {/* Projects grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.id} variants={itemVariants} className="h-[400px]">
            <FlipCard
              front={
                <Card className="overflow-hidden project-card border-neon/10 bg-card/50 backdrop-blur-sm h-full">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70"></div>
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-neon/80 text-black">{project.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-2 group-hover:text-neon transition-colors neon-text">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.techStack.slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-neon/20 text-neon/80">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge variant="outline" className="text-xs border-neon/20 text-neon/80">
                          +{project.techStack.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 flex justify-center">
                    <span className="text-neon text-sm flex items-center gap-1">
                      <Info className="h-4 w-4" /> Click to view details
                    </span>
                  </CardFooter>
                </Card>
              }
              back={
                <Card className="overflow-hidden project-card border-neon/10 bg-card/80 backdrop-blur-sm h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h2 className="text-xl font-bold mb-4 neon-text">{project.title}</h2>

                    <div className="space-y-3 mb-4 flex-grow">
                      <div className="flex items-start gap-2">
                        <Calendar className="h-4 w-4 text-neon mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Period</p>
                          <p className="text-sm text-muted-foreground">{project.details.date}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <User className="h-4 w-4 text-neon mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Role</p>
                          <p className="text-sm text-muted-foreground">{project.details.role}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Tag className="h-4 w-4 text-neon mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Client</p>
                          <p className="text-sm text-muted-foreground">{project.details.client}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Info className="h-4 w-4 text-neon mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Challenge</p>
                          <p className="text-sm text-muted-foreground line-clamp-2">{project.details.challenge}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <Button asChild variant="neon" size="sm" className="w-full">
                        <Link
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 justify-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Project
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              }
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
