"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Brush, Leaf, PaintBucket } from "lucide-react"

import { Button } from "@/components/ui/button"
import ArtisticCursor from "@/components/artistic-cursor"
import GallerySection from "@/components/gallery-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const mainRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"],
  })

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2], [0.8, 0])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-black to-amber-950">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-8 h-0.5 w-48 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600"
          />
          <motion.h1
            className="font-serif text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Mayuri Arts
          </motion.h1>
          <motion.p
            className="mt-3 text-amber-300/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            Transforming spaces with artistic vision
          </motion.p>
          <motion.div
            className="mt-8 flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <Brush className="h-6 w-6 text-amber-400" />
            <PaintBucket className="h-6 w-6 text-amber-300" />
            <Leaf className="h-6 w-6 text-amber-500" />
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <main ref={mainRef} className="relative min-h-screen overflow-hidden bg-white">
      <ArtisticCursor />

      {/* Hero Section */}
      <section className="relative h-screen">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-white"
          style={{ opacity: backgroundOpacity }}
        />

        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 2 }}
          >
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-amber-400"
                style={{
                  width: Math.random() * 300 + 50,
                  height: Math.random() * 300 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.3 + 0.1,
                  filter: "blur(40px)",
                }}
                animate={{
                  x: [0, Math.random() * 40 - 20],
                  y: [0, Math.random() * 40 - 20],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: Math.random() * 10 + 10,
                }}
              />
            ))}
          </motion.div>

          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                d="M0,0 L100,0 L100,100 L0,100 Z"
                fill="none"
                stroke="rgba(251, 191, 36, 0.2)"
                strokeWidth="0.1"
                vectorEffect="non-scaling-stroke"
              />
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.path
                  key={i}
                  d={`M0,${20 * (i + 1)} C${25 + i * 5},${15 + i * 5} ${50 - i * 3},${25 + i * 2} 100,${20 * (i + 1)}`}
                  fill="none"
                  stroke="rgba(251, 191, 36, 0.3)"
                  strokeWidth="0.15"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 3, delay: i * 0.5 }}
                />
              ))}
            </svg>
          </motion.div>
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <motion.h1
            className="font-serif text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 sm:text-6xl md:text-7xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Mayuri Arts
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg text-amber-900/80 sm:text-xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Transforming spaces with breathtaking murals, custom fiber works, and artistic FRP planters that tell your
            unique story.
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <Button
              className="bg-gradient-to-r from-amber-400 to-amber-600 text-white hover:from-amber-500 hover:to-amber-700"
              size="lg"
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Our Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-amber-800/60">Scroll to discover</span>
            <motion.div
              className="mt-2 h-10 w-1.5 rounded-full bg-gradient-to-b from-amber-300 to-amber-500"
              animate={{
                height: [10, 40, 10],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 z-50 w-full backdrop-blur-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <Link
            href="/"
            className="font-serif text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600"
          >
            Mayuri Arts
          </Link>
          <div className="hidden space-x-8 md:flex">
            {["Home", "Gallery", "Services", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-amber-900/80 transition-colors hover:text-amber-600"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <span>{item}</span>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 hover:w-full" />
              </Link>
            ))}
          </div>
          <Button
            className="hidden bg-gradient-to-r from-amber-400 to-amber-600 text-white hover:from-amber-500 hover:to-amber-700 md:block"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
          <Button variant="outline" className="border-amber-400 text-amber-700 hover:bg-amber-50 md:hidden">
            Menu
          </Button>
        </div>
      </motion.nav>

      {/* Gallery Section */}
      <GallerySection />

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 sm:text-5xl">
              Our Artistic Journey
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-amber-300 to-amber-500" />
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              className="relative h-[400px] overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              style={{
                boxShadow: "0 10px 30px rgba(251, 191, 36, 0.15)",
              }}
            >
              <Image src="/placeholder.svg?height=800&width=600" alt="Artist at work" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-serif text-2xl font-bold text-white">Passion for Creation</h3>
                <p className="mt-2 text-white/80">Every piece tells a story of dedication and artistic vision</p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col justify-center space-y-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-amber-900/80">
                At Mayuri Arts, we blend traditional techniques with contemporary vision to create stunning murals,
                fiber works, and FRP planters that transform spaces into immersive artistic experiences.
              </p>
              <p className="text-lg text-amber-900/80">
                Our journey began with a simple passion for bringing art into everyday spaces. Today, we've evolved into
                a full-service artistic studio, collaborating with homeowners, businesses, and public spaces to create
                custom pieces that inspire and captivate.
              </p>
              <p className="text-lg text-amber-900/80">
                Each project is approached with meticulous attention to detail, ensuring that every creation not only
                meets but exceeds our clients' expectations.
              </p>
              <Button
                variant="outline"
                className="mt-4 w-fit border-amber-400 text-amber-700 hover:bg-amber-50"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More About Our Process
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-100 to-amber-200">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-serif text-2xl font-bold text-amber-800">Mayuri Arts</h3>
              <p className="mt-4 text-amber-900/70">
                Transforming spaces with breathtaking artistic creations since 2015.
              </p>
              <div className="mt-6 flex space-x-4">
                {["facebook", "instagram", "twitter", "pinterest"].map((social) => (
                  <Link
                    key={social}
                    href={`#${social}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-300/50 text-amber-800 transition-colors hover:bg-amber-400/50"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-amber-800">Quick Links</h4>
              <ul className="mt-4 space-y-2">
                {["Home", "Gallery", "Services", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-amber-900/70 transition-colors hover:text-amber-700"
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-amber-800">Contact Us</h4>
              <address className="mt-4 not-italic text-amber-900/70">
                <p>123 Artistic Avenue</p>
                <p>Creativity District</p>
                <p>Imagination City, IC 12345</p>
                <p className="mt-2">contact@mayuriarts.com</p>
                <p>+1 (555) 123-4567</p>
              </address>
            </div>
          </div>

          <div className="mt-12 border-t border-amber-300/50 pt-6 text-center text-sm text-amber-900/60">
            <p>© {new Date().getFullYear()} Mayuri Arts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

