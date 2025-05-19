"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error(data.error || "Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      text: "morienyaneblessings@gmail.com",
      href: "mailto:morienyaneblessings@gmail.com",
    },
    { icon: <Phone className="h-5 w-5" />, text: "(+27) 79 658 0384", href: "tel:+27796580384" },
    {
      icon: <MapPin className="h-5 w-5" />,
      text: "Lilian Ngoyi Street, Pretoria, 0001",
      href: "https://maps.google.com/?q=Lilian+Ngoyi+Street,+Pretoria",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      text: "seqeta-morienyane-4ab943224",
      href: "https://www.linkedin.com/in/seqeta-morienyane-4ab943224",
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
        Contact Me
      </motion.h1>
      <motion.p
        className="text-xl text-muted-foreground max-w-3xl mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Have a question or want to discuss potential opportunities? Feel free to reach out!
      </motion.p>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Contact Form */}
        <motion.div variants={itemVariants}>
          <Card className="border-neon/10 bg-card/50 backdrop-blur-sm hover:shadow-neon/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="neon-text">Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="border-neon/20 bg-background/50 focus:border-neon focus:ring-neon/30"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                    className="border-neon/20 bg-background/50 focus:border-neon focus:ring-neon/30"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                    className="border-neon/20 bg-background/50 focus:border-neon focus:ring-neon/30"
                  />
                </div>
                <Button type="submit" className="w-full neon-button" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div className="space-y-6" variants={itemVariants} style={{ animationDelay: "0.2s" }}>
          <Card className="border-neon/10 bg-card/50 backdrop-blur-sm hover:shadow-neon/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="neon-text">Contact Information</CardTitle>
              <CardDescription>Here are the different ways you can reach me.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-neon/10 transition-colors group"
                    >
                      <div className="flex-shrink-0 text-neon group-hover:animate-pulse-neon">{item.icon}</div>
                      <span className="group-hover:text-neon transition-colors duration-300">{item.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-neon/10 bg-card/50 backdrop-blur-sm hover:shadow-neon/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="neon-text">Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I'm currently available for new opportunities in cybersecurity, data analysis, UI/UX design, and IT
                support roles.
              </p>
              <div className="mt-4 p-3 bg-neon/5 rounded-md border border-neon/10">
                <p className="text-sm font-medium text-neon">Response Time</p>
                <p className="text-sm text-muted-foreground">Usually within 24-48 hours</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
