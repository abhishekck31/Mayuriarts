"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = ["All", "Murals", "Fiber Art", "FRP Planters", "Custom Designs"]

const galleryItems = [
  {
    id: 1,
    title: "Celestial Garden Mural",
    category: "Murals",
    image: "/placeholder.svg?height=600&width=800",
    description: "A vibrant mural depicting a celestial garden with gold accents.",
  },
  {
    id: 2,
    title: "Geometric Fiber Tapestry",
    category: "Fiber Art",
    image: "/placeholder.svg?height=600&width=800",
    description: "Intricate fiber art with geometric patterns in gold and white.",
  },
  {
    id: 3,
    title: "Lotus FRP Planter",
    category: "FRP Planters",
    image: "/placeholder.svg?height=600&width=800",
    description: "Elegant lotus-shaped FRP planter with gold-leaf detailing.",
  },
  {
    id: 4,
    title: "Abstract Waves Mural",
    category: "Murals",
    image: "/placeholder.svg?height=600&width=800",
    description: "Flowing abstract waves mural with metallic gold highlights.",
  },
  {
    id: 5,
    title: "Mandala Fiber Wall Hanging",
    category: "Fiber Art",
    image: "/placeholder.svg?height=600&width=800",
    description: "Detailed mandala pattern created with natural fibers and gold thread.",
  },
  {
    id: 6,
    title: "Sculptural FRP Planter Series",
    category: "FRP Planters",
    image: "/placeholder.svg?height=600&width=800",
    description: "Modern sculptural planters with gradient gold to white finish.",
  },
  {
    id: 7,
    title: "Corporate Lobby Installation",
    category: "Custom Designs",
    image: "/placeholder.svg?height=600&width=800",
    description: "Custom art installation for corporate lobby featuring gold leaf accents.",
  },
  {
    id: 8,
    title: "Residential Accent Wall",
    category: "Murals",
    image: "/placeholder.svg?height=600&width=800",
    description: "Elegant accent wall with hand-painted gold patterns.",
  },
]

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const filteredItems =
    activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  const handlePrevious = () => {
    if (selectedItem === null) return

    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem)
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedItem(filteredItems[prevIndex].id)
  }

  const handleNext = () => {
    if (selectedItem === null) return

    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem)
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setSelectedItem(filteredItems[nextIndex].id)
  }

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 sm:text-5xl">
            Our Artistic Portfolio
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-amber-300 to-amber-500" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-amber-900/70">
            Explore our collection of custom murals, fiber artworks, and designer FRP planters that transform spaces
            into immersive artistic experiences.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-md"
                  : "bg-white text-amber-800 hover:bg-amber-100",
              )}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedItem(item.id)}
              style={{
                boxShadow: "0 4px 20px rgba(251, 191, 36, 0.15)",
              }}
              whileHover={{
                boxShadow: "0 8px 30px rgba(251, 191, 36, 0.3)",
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-xl font-semibold text-amber-800">{item.title}</h3>
                <div className="mt-1 flex items-center">
                  <span className="text-xs text-amber-600">{item.category}</span>
                  <span className="mx-2 h-1 w-1 rounded-full bg-amber-300" />
                  <span className="text-xs text-amber-600">View Details</span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Button variant="outline" className="border-amber-400 bg-transparent text-white hover:bg-amber-500/20">
                  View Project
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button
            className="bg-gradient-to-r from-amber-400 to-amber-600 text-white hover:from-amber-500 hover:to-amber-700"
            onClick={() => {
              // This would typically link to a full gallery page
              // For now, we'll just show all categories
              setActiveCategory("All")
            }}
          >
            View All Projects
          </Button>
        </motion.div>

        {selectedItem !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-lg bg-white">
              <button
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                onClick={() => setSelectedItem(null)}
              >
                <span className="sr-only">Close</span>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative h-[300px] md:h-[500px]">
                  {filteredItems.find((item) => item.id === selectedItem)?.image && (
                    <Image
                      src={filteredItems.find((item) => item.id === selectedItem)?.image || ""}
                      alt={filteredItems.find((item) => item.id === selectedItem)?.title || ""}
                      fill
                      className="object-cover"
                    />
                  )}

                  <button
                    className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                    onClick={handlePrevious}
                  >
                    <ChevronLeft className="h-6 w-6" />
                    <span className="sr-only">Previous</span>
                  </button>

                  <button
                    className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                    onClick={handleNext}
                  >
                    <ChevronRight className="h-6 w-6" />
                    <span className="sr-only">Next</span>
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-amber-800">
                    {filteredItems.find((item) => item.id === selectedItem)?.title}
                  </h3>
                  <div className="mt-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                    {filteredItems.find((item) => item.id === selectedItem)?.category}
                  </div>
                  <p className="mt-4 text-amber-900/70">
                    {filteredItems.find((item) => item.id === selectedItem)?.description}
                  </p>
                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-amber-800">Materials</h4>
                      <p className="text-sm text-amber-900/70">
                        Premium quality materials with gold leaf accents and natural fibers
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-amber-800">Dimensions</h4>
                      <p className="text-sm text-amber-900/70">Custom sizes available to fit your space</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-amber-800">Installation</h4>
                      <p className="text-sm text-amber-900/70">
                        Professional installation included with every purchase
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 flex gap-4">
                    <Button
                      className="bg-gradient-to-r from-amber-400 to-amber-600 text-white hover:from-amber-500 hover:to-amber-700"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Request Similar Design
                    </Button>
                    <Button variant="outline" className="border-amber-400 text-amber-700 hover:bg-amber-50">
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

