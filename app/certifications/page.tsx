"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Calendar, ExternalLink, FileText, GraduationCap, Info, User } from "lucide-react"

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null)

  const certifications = [
    {
      id: 1,
      name: "Datacom Service Desk Job Simulation",
      issuer: "Forage",
      issuerLogo: "/placeholder.svg?height=80&width=80",
      category: "IT Support",
      date: "2023",
      description:
        "Completed a virtual job simulation focused on IT helpdesk support and service management, developing skills in customer service, technical troubleshooting, and IT service management.",
      skills: ["Helpdesk Support", "ITIL Framework", "Customer Service", "Technical Troubleshooting", "Documentation"],
      credentialUrl: "https://example.com/credential/datacom",
      color: "#CCFF00",
      details: {
        overview:
          "The Datacom Service Desk Job Simulation provided hands-on experience in managing IT support tickets, prioritizing incidents, and delivering effective technical solutions within service level agreements.",
        learnings: [
          "Applied ITIL framework principles to categorize and prioritize incidents",
          "Developed technical troubleshooting methodologies for common IT issues",
          "Practiced effective customer communication techniques",
          "Created detailed technical documentation for knowledge base",
          "Implemented service management best practices",
        ],
        projects: [
          "Incident Management Simulation: Handled multiple simultaneous support tickets with varying priorities",
          "Knowledge Base Article Creation: Documented technical solutions for common issues",
          "Service Level Agreement Analysis: Evaluated response times and resolution metrics",
        ],
      },
    },
    {
      id: 2,
      name: "AIG Shields Up: Cybersecurity Program",
      issuer: "Forage",
      issuerLogo: "/placeholder.svg?height=80&width=80",
      category: "Cybersecurity",
      date: "2023",
      description:
        "Completed a virtual experience program focused on cybersecurity principles and practices, including threat detection, incident response, and security analysis in a corporate environment.",
      skills: [
        "Threat Detection",
        "Incident Response",
        "Security Analysis",
        "Risk Assessment",
        "Vulnerability Management",
      ],
      credentialUrl: "https://example.com/credential/aig",
      color: "#00FFCC",
      details: {
        overview:
          "The AIG Shields Up Cybersecurity Program provided practical experience in identifying and responding to cyber threats in a simulated corporate environment, with a focus on protecting sensitive financial data and systems.",
        learnings: [
          "Implemented security monitoring techniques for early threat detection",
          "Analyzed potential security threats and determined their impact",
          "Developed incident response procedures following industry best practices",
          "Conducted vulnerability assessments on simulated systems",
          "Applied risk management principles to prioritize security efforts",
        ],
        projects: [
          "Threat Hunting Exercise: Identified indicators of compromise in system logs",
          "Incident Response Simulation: Developed and executed a response plan for a simulated breach",
          "Security Assessment Report: Created a comprehensive security posture evaluation",
        ],
      },
    },
    {
      id: 3,
      name: "Mastercard Cybersecurity Program",
      issuer: "Forage",
      issuerLogo: "/placeholder.svg?height=80&width=80",
      category: "Cybersecurity",
      date: "2023",
      description:
        "Completed a virtual experience program exploring cybersecurity in financial technology, focusing on security protocols, compliance, and protecting sensitive financial data.",
      skills: ["Financial Security", "Compliance", "Data Protection", "Security Protocols", "Payment Systems Security"],
      credentialUrl: "https://example.com/credential/mastercard",
      color: "#FF00CC",
      details: {
        overview:
          "The Mastercard Cybersecurity Program provided specialized training in securing financial systems and transactions, with a focus on compliance requirements and protecting cardholder data.",
        learnings: [
          "Applied security protocols specific to financial data protection",
          "Implemented compliance measures for financial regulations",
          "Developed strategies for securing payment systems",
          "Analyzed transaction data for potential fraud indicators",
          "Created security awareness materials for financial services",
        ],
        projects: [
          "Payment System Security Assessment: Evaluated vulnerabilities in a simulated payment processing system",
          "Compliance Gap Analysis: Identified areas needing improvement to meet regulatory requirements",
          "Fraud Detection System: Developed rules for identifying suspicious transaction patterns",
        ],
      },
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
      <motion.div
        className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center justify-center p-2 bg-neon/10 rounded-full mb-4">
          <Award className="h-10 w-10 text-neon animate-pulse-neon" />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
          Professional Certifications
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Credentials and professional development programs that have enhanced my skills and expertise.
        </p>
      </motion.div>

      <Tabs defaultValue="grid" className="mb-12">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-background/50 border border-neon/20">
            <TabsTrigger value="grid" className="data-[state=active]:bg-neon/10 data-[state=active]:text-neon">
              Grid View
            </TabsTrigger>
            <TabsTrigger value="detailed" className="data-[state=active]:bg-neon/10 data-[state=active]:text-neon">
              Detailed View
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="grid">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {certifications.map((cert, index) => (
              <motion.div key={cert.id} variants={itemVariants} whileHover={{ y: -5 }}>
                <Card className="h-full border-neon/10 bg-card/50 backdrop-blur-sm hover:shadow-neon/20 transition-all duration-300 overflow-hidden">
                  <div
                    className="h-2 w-full"
                    style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
                  />
                  <CardHeader className="flex flex-row items-start gap-4 pt-6">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden border border-neon/20 bg-background/50">
                      <Image
                        src={cert.issuerLogo || "/placeholder.svg"}
                        alt={cert.issuer}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl neon-text">{cert.name}</CardTitle>
                      <CardDescription>{cert.issuer}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-neon/80 text-black">{cert.category}</Badge>
                      <Badge variant="outline" className="border-neon/30 text-neon">
                        {cert.date}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {cert.skills.slice(0, 3).map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-neon/20 text-neon/80">
                          {skill}
                        </Badge>
                      ))}
                      {cert.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs border-neon/20 text-neon/80">
                          +{cert.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-neon hover:bg-neon/10"
                      onClick={() => setSelectedCert(selectedCert === cert.id ? null : cert.id)}
                    >
                      <Info className="mr-1 h-4 w-4" />
                      Details
                    </Button>
                    <Button variant="ghost" size="sm" className="text-neon hover:bg-neon/10" asChild>
                      <Link href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-4 w-4" />
                        Verify
                      </Link>
                    </Button>
                  </CardFooter>

                  {selectedCert === cert.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6 border-t border-neon/10 mt-2 pt-4"
                    >
                      <h4 className="font-medium text-neon mb-2">Overview</h4>
                      <p className="text-sm text-muted-foreground mb-4">{cert.details.overview}</p>

                      <h4 className="font-medium text-neon mb-2">Key Learnings</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                        {cert.details.learnings.map((learning, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-neon flex-shrink-0"></span>
                            <span>{learning}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="font-medium text-neon mb-2">Projects</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {cert.details.projects.map((project, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-neon flex-shrink-0"></span>
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="detailed">
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
            {certifications.map((cert, index) => (
              <motion.div key={cert.id} variants={itemVariants}>
                <Card className="border-neon/10 bg-card/50 backdrop-blur-sm hover:shadow-neon/20 transition-all duration-300 overflow-hidden">
                  <div
                    className="h-2 w-full"
                    style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                    <div className="md:col-span-1 flex flex-col items-center md:items-start">
                      <div className="relative w-24 h-24 mb-4 rounded-md overflow-hidden border border-neon/20 bg-background/50">
                        <Image
                          src={cert.issuerLogo || "/placeholder.svg"}
                          alt={cert.issuer}
                          fill
                          className="object-contain p-3"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2 neon-text text-center md:text-left">{cert.name}</h3>
                      <p className="text-muted-foreground mb-4 text-center md:text-left">{cert.issuer}</p>

                      <div className="space-y-3 w-full">
                        <div className="flex items-start gap-2">
                          <Calendar className="h-4 w-4 text-neon mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium">Issued</p>
                            <p className="text-sm text-muted-foreground">{cert.date}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <GraduationCap className="h-4 w-4 text-neon mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium">Category</p>
                            <p className="text-sm text-muted-foreground">{cert.category}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <FileText className="h-4 w-4 text-neon mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium">Credential</p>
                            <Link
                              href={cert.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-neon hover:underline flex items-center"
                            >
                              Verify Certificate
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mt-4">
                        {cert.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs border-neon/20 text-neon/80">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium text-neon mb-2">Overview</h4>
                          <p className="text-muted-foreground">{cert.details.overview}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-neon mb-2">Key Learnings</h4>
                          <ul className="space-y-2">
                            {cert.details.learnings.map((learning, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-neon flex-shrink-0"></span>
                                <span>{learning}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-neon mb-2">Projects</h4>
                          <ul className="space-y-2">
                            {cert.details.projects.map((project, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-neon flex-shrink-0"></span>
                                <span>{project}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 neon-text">Continuing Education</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          I'm committed to continuous learning and professional development. Currently pursuing additional
          certifications in cybersecurity and network engineering to further enhance my skills.
        </p>
        <Button asChild variant="neon" size="lg">
          <Link href="/contact">
            <User className="mr-2 h-5 w-5" />
            Contact Me About My Qualifications
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
