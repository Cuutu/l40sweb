"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { TransitionLink } from "./transition-link"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    title: "The Art of Digital Storytelling",
    excerpt: "Exploring how animations and interactions can create compelling narratives online.",
    slug: "/blog/digital-storytelling",
  },
  {
    title: "Performance in the Age of WebGL",
    excerpt: "Optimizing Three.js scenes for a smooth experience on all devices.",
    slug: "/blog/performance-webgl",
  },
  {
    title: "GSAP vs. Framer Motion: A Deep Dive",
    excerpt: "When to use which library to achieve stunning web animations.",
    slug: "/blog/gsap-vs-framer-motion",
  },
]

export function BlogPreview() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.from(".blog-title", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".blog-post", {
        scrollTrigger: {
          trigger: ".blog-grid",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      })
    },
    { scope: container },
  )

  return (
    null
  )
}
