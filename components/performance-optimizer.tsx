"use client"

import { useEffect } from "react"

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Lazy load images that are not in the viewport
    const lazyLoadImages = () => {
      const lazyImages = document.querySelectorAll('img[loading="lazy"]')

      if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const image = entry.target as HTMLImageElement
              if (image.dataset.src) {
                image.src = image.dataset.src
                image.removeAttribute("data-src")
              }
              imageObserver.unobserve(image)
            }
          })
        })

        lazyImages.forEach((image) => {
          imageObserver.observe(image)
        })
      } else {
        // Fallback for browsers that don't support IntersectionObserver
        setTimeout(() => {
          lazyImages.forEach((image) => {
            const img = image as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.removeAttribute("data-src")
            }
          })
        }, 1000)
      }
    }

    // Debounce function to limit the rate at which a function can fire
    const debounce = (func: Function, wait: number) => {
      let timeout: NodeJS.Timeout
      return function executedFunction(...args: any[]) {
        const later = () => {
          clearTimeout(timeout)
          func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
      }
    }

    // Optimize animations when tab is not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Pause non-essential animations when tab is not visible
        document.body.classList.add("reduce-animations")
      } else {
        // Resume animations when tab is visible again
        document.body.classList.remove("reduce-animations")
      }
    }

    // Optimize scroll performance
    const optimizeScroll = debounce(() => {
      // Check if user is scrolling rapidly
      if (window.scrollY > 100) {
        // Temporarily disable some animations during rapid scrolling
        document.body.classList.add("scrolling")
      } else {
        document.body.classList.remove("scrolling")
      }
    }, 100)

    // Initialize optimizations
    lazyLoadImages()
    document.addEventListener("visibilitychange", handleVisibilityChange)
    window.addEventListener("scroll", optimizeScroll, { passive: true })

    // Clean up event listeners
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      window.removeEventListener("scroll", optimizeScroll)
    }
  }, [])

  return null
}
