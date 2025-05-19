"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileDown, Check, Loader2 } from "lucide-react"
import { motion } from "framer-motion"

interface ResumeDownloadProps {
  className?: string
}

export default function ResumeDownload({ className }: ResumeDownloadProps) {
  const [downloadState, setDownloadState] = useState<"idle" | "downloading" | "complete">("idle")

  const handleDownload = () => {
    setDownloadState("downloading")

    // Simulate download delay (replace with actual download logic)
    setTimeout(() => {
      // Create a link to download the resume
      const link = document.createElement("a")
      link.href = "/resume-seqeta-morienyane.pdf" // Replace with actual path to your resume
      link.download = "Seqeta-Morienyane-Resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setDownloadState("complete")

      // Reset state after showing completion
      setTimeout(() => {
        setDownloadState("idle")
      }, 2000)
    }, 1000)
  }

  return (
    <motion.div
      className={`${className || ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Button onClick={handleDownload} variant="neon" size="lg" disabled={downloadState !== "idle"} className="group">
        {downloadState === "idle" && (
          <>
            <FileDown className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Resume
          </>
        )}
        {downloadState === "downloading" && (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Downloading...
          </>
        )}
        {downloadState === "complete" && (
          <>
            <Check className="mr-2 h-5 w-5" />
            Downloaded!
          </>
        )}
      </Button>
    </motion.div>
  )
}
