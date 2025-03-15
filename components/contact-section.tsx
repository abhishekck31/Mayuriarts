"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "murals",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      // In a real implementation, this would connect to your preferred contact system
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        interest: "murals",
      })

      // Show success message
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 sm:text-5xl">
            Get In Touch
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-amber-300 to-amber-500" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-amber-900/70">
            Ready to transform your space with custom artistic creations? Contact us to discuss your vision and bring
            your artistic dreams to life.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-amber-800">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="border-amber-200 focus-visible:ring-amber-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-amber-800">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="border-amber-200 focus-visible:ring-amber-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-amber-800">
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="border-amber-200 focus-visible:ring-amber-500"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-amber-800">I'm interested in</Label>
                <RadioGroup
                  value={formData.interest}
                  onValueChange={handleRadioChange}
                  className="grid gap-2 sm:grid-cols-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="murals" id="murals" className="border-amber-400 text-amber-600" />
                    <Label htmlFor="murals" className="text-amber-800">
                      Custom Murals
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fiber" id="fiber" className="border-amber-400 text-amber-600" />
                    <Label htmlFor="fiber" className="text-amber-800">
                      Fiber Artworks
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="planters" id="planters" className="border-amber-400 text-amber-600" />
                    <Label htmlFor="planters" className="text-amber-800">
                      FRP Planters
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" className="border-amber-400 text-amber-600" />
                    <Label htmlFor="other" className="text-amber-800">
                      Other Services
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-amber-800">
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  className="min-h-[120px] border-amber-200 focus-visible:ring-amber-500"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-white hover:from-amber-500 hover:to-amber-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="rounded-lg bg-gradient-to-br from-amber-100 to-white p-8 shadow-md"
              style={{
                boxShadow: "0 10px 30px rgba(251, 191, 36, 0.15)",
              }}
            >
              <h3 className="font-serif text-2xl font-bold text-amber-800">Contact Information</h3>
              <p className="mt-2 text-amber-900/70">
                Reach out to us for inquiries, consultations, or to discuss your artistic vision.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                    <MapPin className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-amber-800">Our Studio</h4>
                    <address className="mt-1 not-italic text-amber-900/70">
                      123 Artistic Avenue
                      <br />
                      Creativity District
                      <br />
                      Imagination City, IC 12345
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                    <Mail className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-amber-800">Email Us</h4>
                    <p className="mt-1 text-amber-900/70">contact@mayuriarts.com</p>
                    <p className="text-amber-900/70">info@mayuriarts.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                    <Phone className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-amber-800">Call Us</h4>
                    <p className="mt-1 text-amber-900/70">+1 (555) 123-4567</p>
                    <p className="text-amber-900/70">+1 (555) 987-6543</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-amber-800">Business Hours</h4>
                <div className="mt-2 space-y-1 text-amber-900/70">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-amber-800">Follow Us</h4>
                <div className="mt-4 flex space-x-4">
                  {["facebook", "instagram", "twitter", "pinterest"].map((social) => (
                    <a
                      key={social}
                      href={`#${social}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-200 text-amber-800 transition-colors hover:bg-amber-300"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

