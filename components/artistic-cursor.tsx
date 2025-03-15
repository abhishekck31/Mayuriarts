"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ArtisticCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      setIsPointer(window.getComputedStyle(target).cursor === "pointer")
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed z-50 hidden h-5 w-5 md:block"
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        scale: isPointer ? 1.3 : 1,
      }}
      transition={{
        type: "spring",
        damping: 50,
        stiffness: 700,
        mass: 0.1,
      }}
      style={{
        backgroundColor: "rgba(255, 215, 0, 0.4)",
        boxShadow: "0 0 12px rgba(255, 215, 0, 0.6)",
        borderRadius: "50%",
        mixBlendMode: "difference",
      }}
    />
  )
}

