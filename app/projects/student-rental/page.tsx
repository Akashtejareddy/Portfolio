"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StudentRental() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#0a2647] text-white">
      <div className="container mx-auto py-6">
        <Link href="/">
          <Button variant="outline" className="text-white border-white hover:bg-[#0a3060] mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <div className="bg-[#0c2e4e] rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-2">Student Rental Hub</h1>
          <p className="mb-6">
            Show the project in GitHub{" "}
            <Link href="https://github.com/Akashtejareddy/student-rent-hub" className="text-blue-400 hover:underline">
              @GitHublink
            </Link>
          </p>

          <div className="mb-8">
            <p>A Student Accommodation Platform developed to help international student to find accommodations.</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p>
              The Student Rental Hub is a web-based platform designed to simplify the process of finding rental
              accommodations for students. Built with a user-friendly interface, it allows users to register, log in,
              and explore housing options based on their preferred location and lease duration. The project integrates
              front-end technologies like HTML, CSS, and Bootstrap with back-end functionality using PHP and MySQL,
              ensuring a seamless experience for students seeking housing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-700 h-64 rounded-lg relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Register Page"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Registration Page</h3>
                <p>
                  The registration page (register.php and register.html) enables students to create accounts by
                  providing essential details such as name, email, password, phone number, location, and preferred lease
                  duration (3 months to 2 years). The form is styled with Bootstrap for responsiveness and uses PHP to
                  securely store user data in a MySQL database (users table). Client-side validation ensures all fields
                  are filled, while server-side processing handles data insertion, redirecting authenticated users to
                  the main hub (invitation.php).
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="order-2 md:order-1">
                <h3 className="text-xl font-bold mb-2">Login Page</h3>
                <p>
                  The login page (login.php) provides secure access to the platform, requiring users to enter their
                  email and password. Built with PHP for session management, it checks credentials against the MySQL
                  database and redirects authenticated users to the dashboard (invitation.php). The interface is styled
                  with Bootstrap and custom CSS, featuring a clean, responsive design with a blurred background image
                  for aesthetic appeal. A link to the registration page is included for new users.
                </p>
              </div>
              <div className="bg-gray-700 h-64 rounded-lg relative order-1 md:order-2">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Login Page"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-700 h-64 rounded-lg relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Home Page"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Database Design</h3>
                <p>
                  The project leverages a MySQL database (student.sql) to store user information, with a users table
                  that includes fields for ID, name, email, password, phone, location, and lease duration. PHP scripts
                  handle database interactions, ensuring secure data management. The navigation bar, present across
                  pages like aboutus.html, contactus.html, and invitation.php, allows users to access key sections
                  (Home, About Us, Contact Us, Login), enhancing usability and site coherence.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
