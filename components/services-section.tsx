"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Custom Murals",
    description: "Transform your walls with stunning hand-painted murals tailored to your space and vision.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Residential & Commercial", "Interior & Exterior", "Custom Designs", "Gold Leaf Accents"],
  },
  {
    title: "Fiber Artworks",
    description:
      "Elevate your space with exquisite handcrafted fiber art pieces that add texture, dimension, and artistic expression to any environment.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Wall Hangings & Tapestries", "Sculptural Pieces", "Mixed Media Creations", "Custom Installations"],
  },
  {
    title: "FRP Planters",
    description: "Enhance your indoor or outdoor areas with our artistic, durable, and lightweight FRP planters.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Custom Designs", "Weather Resistant", "Lightweight", "Gold & White Finishes"],
  },
  {
    title: "Artistic Consultations",
    description: "Work with our artists to develop a cohesive artistic vision for your space.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Space Assessment", "Concept Development", "Material Selection", "Installation Planning"],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 sm:text-5xl">
            Our Artistic Services
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-amber-300 to-amber-500" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-amber-900/70">
            We offer a range of custom artistic services to transform your spaces with our unique gold and white
            aesthetic, blending traditional techniques with contemporary vision.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group overflow-hidden rounded-lg bg-gradient-to-br from-amber-50 to-white shadow-md transition-all hover:shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              style={{
                boxShadow: "0 4px 20px rgba(251, 191, 36, 0.15)",
              }}
              whileHover={{
                boxShadow: "0 8px 30px rgba(251, 191, 36, 0.3)",
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 font-serif text-2xl font-bold text-white">{service.title}</h3>
              </div>

              <div className="p-6">
                <p className="text-amber-900/80">{service.description}</p>

                <ul className="mt-4 grid grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-amber-800">
                      <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-100">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className="mt-6 bg-gradient-to-r from-amber-400 to-amber-600 text-white hover:from-amber-500 hover:to-amber-700"
                  size="sm"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 rounded-lg bg-gradient-to-r from-amber-100 to-amber-200 p-8 sm:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{
            boxShadow: "0 10px 30px rgba(251, 191, 36, 0.15)",
          }}
        >
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="font-serif text-2xl font-bold text-amber-800 sm:text-3xl">The Versatility of Fiber Art</h3>
              <p className="mt-4 text-amber-900/80">
                At Mayuri Arts, we specialize in creating custom fiber artworks using a wide range of materials and
                techniques. Our fiber artists can work with natural fibers, synthetic materials, recycled elements, and
                mixed media to create pieces that perfectly complement your space.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start">
                  <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-300">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-medium text-amber-800">Diverse Materials</h4>
                    <p className="text-sm text-amber-900/70">
                      Cotton, wool, silk, jute, bamboo, recycled fabrics, metallic threads, and synthetic fibers
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-300">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-medium text-amber-800">Techniques</h4>
                    <p className="text-sm text-amber-900/70">
                      Weaving, macramé, embroidery, felting, knitting, crochet, and mixed media approaches
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-300">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-medium text-amber-800">Applications</h4>
                    <p className="text-sm text-amber-900/70">
                      Wall hangings, room dividers, ceiling installations, furniture accents, and sculptural pieces
                    </p>
                  </div>
                </div>
              </div>
              <Button
                className="mt-6 bg-gradient-to-r from-amber-500 to-amber-700 text-white hover:from-amber-600 hover:to-amber-800"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Discuss Your Fiber Art Project
              </Button>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Fiber Art Versatility"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="font-serif text-xl font-semibold text-white">Custom Fiber Creations</h4>
                <p className="mt-1 text-sm text-white/80">From concept to installation, we bring your vision to life</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

