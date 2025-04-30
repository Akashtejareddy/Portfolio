"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#0a2647] text-white">
      {/* Navigation */}
      <header className="container mx-auto py-6 flex justify-end">
        <nav className="flex gap-6">
          <Link href="#about" className="hover:text-gray-300">
            ABOUT
          </Link>
          <Link href="#skills" className="hover:text-gray-300">
            SKILLS
          </Link>
          <Link href="#experience" className="hover:text-gray-300">
            EXPERIENCE
          </Link>
          <Link href="#projects" className="hover:text-gray-300">
            PROJECTS
          </Link>
          <Link href="#contact" className="hover:text-gray-300">
            CONTACT
          </Link>
        </nav>
      </header>

      <main className="container mx-auto py-12 flex flex-col items-center justify-center">
        {/* Main Card */}
        <div className="bg-[#0c2e4e] rounded-lg p-12 max-w-4xl w-full shadow-xl">
          {/* Decorative dots */}
          <div className="flex gap-1 mb-8">
            <div className="h-1 w-1 bg-white rounded-full"></div>
            <div className="h-1 w-1 bg-white rounded-full"></div>
            <div className="h-1 w-1 bg-white rounded-full"></div>
            <div className="h-1 w-1 bg-white rounded-full"></div>
            <div className="h-1 w-1 bg-white rounded-full"></div>
          </div>

          <div className="flex gap-1 mb-4">
            <div className="h-1 w-1 bg-white rounded-full"></div>
            <div className="h-1 w-1 bg-white rounded-full"></div>
          </div>

          <div className="flex gap-1 mb-8">
            <div className="h-1 w-1 bg-white rounded-full"></div>
            <div className="h-1 w-1 bg-white rounded-full"></div>
            <div className="h-1 w-1 bg-white rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
            <div>
              <h1 className="text-2xl font-medium mb-2">Data Scientist & Software Engineer</h1>
              <p className="text-gray-300 mb-8">
                Data-driven and detail-oriented Computer Science graduate student with strong experience in Python, SQL,
                R, Tableau, and machine learning. Skilled in building scalable data pipelines, advanced analytics
                models, and interactive dashboards to support business decisions.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="outline" className="rounded-full px-4 py-1 bg-[#0a2647] text-white border-[#0a2647]">
                  Data Analysis
                </Badge>
                <Badge variant="outline" className="rounded-full px-4 py-1 bg-[#0a2647] text-white border-[#0a2647]">
                  AI/ML
                </Badge>
                <Badge variant="outline" className="rounded-full px-4 py-1 bg-[#0a2647] text-white border-[#0a2647]">
                  DBA
                </Badge>
                <Badge variant="outline" className="rounded-full px-4 py-1 bg-[#0a2647] text-white border-[#0a2647]">
                  DevOps
                </Badge>
                <Badge variant="outline" className="rounded-full px-4 py-1 bg-[#0a2647] text-white border-[#0a2647]">
                  Full Stack
                </Badge>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="#contact">
                  <Button className="bg-[#0a2647] hover:bg-[#0a3060] text-white rounded-md flex items-center gap-2">
                    Contact Me <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/resume">
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-[#0a3060] rounded-md flex items-center gap-2"
                  >
                    GET / Resume in 204ms <Download className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative h-64 w-64 rounded-full overflow-hidden border-4 border-white">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Akash Teja Reddy"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <section id="projects" className="w-full mt-16">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0c2e4e] rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-700 relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Inventory Management Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Inventory Management Project</h3>
                <p className="text-gray-300 mb-4">using html, php, mysql, Apache</p>
                <Link href="/projects/inventory-management">
                  <Button className="bg-[#0a2647] hover:bg-[#0a3060] text-white">View Project</Button>
                </Link>
              </div>
            </div>

            <div className="bg-[#0c2e4e] rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-700 relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Student Rental Hub"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Student Rental Hub</h3>
                <p className="text-gray-300 mb-4">using Html, MySQL, PHP, Bootstrap, Apache</p>
                <Link href="/projects/student-rental">
                  <Button className="bg-[#0a2647] hover:bg-[#0a3060] text-white">View Project</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full mt-16">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0c2e4e] rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Send a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 rounded bg-[#0a2647] border border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 rounded bg-[#0a2647] border border-gray-600 text-white"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full p-2 rounded bg-[#0a2647] border border-gray-600 text-white"
                  ></textarea>
                </div>
                <div className="flex gap-4">
                  <Button className="bg-[#0a2647] hover:bg-[#0a3060] text-white">Send Message</Button>
                  <Button variant="outline" className="text-white border-white hover:bg-[#0a3060]">
                    Clear
                  </Button>
                </div>
              </form>
            </div>

            <div className="bg-[#0c2e4e] rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-300">akashtejareddy@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-gray-300">(201) 257-3732</p>
                </div>
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p className="text-gray-300">
                    Centerton, Arkansas, 72719
                    <br />
                    United States of America
                  </p>
                </div>
                <div className="flex gap-4 mt-6">
                  <Link href="https://github.com/Akashtejareddy" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="text-white border-white hover:bg-[#0a3060]">
                      GitHub
                    </Button>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/akash-teja-reddy-4ba7221a3/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="text-white border-white hover:bg-[#0a3060]">
                      LinkedIn
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto py-6 text-center text-gray-400">
        <p>&copy; 2025 Design: Akash Teja Reddy</p>
      </footer>
    </div>
  )
}
