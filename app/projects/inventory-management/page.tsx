"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InventoryManagement() {
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
          <h1 className="text-3xl font-bold mb-2">Inventory Management System</h1>
          <p className="mb-6">
            Show the project in GitHub{" "}
            <Link
              href="https://github.com/Akashtejareddy/Inventory-Management"
              className="text-blue-400 hover:underline"
            >
              @GitHublink
            </Link>
          </p>

          <div className="mb-8">
            <p>
              Inventory Management System is a web application which deals with managing the inventories of the small
              scale as well as the large-scale businesses.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="mb-4">
              The Inventory Management System is a web-based application designed to streamline inventory operations for
              both small and large-scale businesses. It offers reliable and efficient services aimed at minimizing, and
              in some cases, completely eliminating the challenges present in traditional inventory systems.
            </p>
            <p>
              This system is tailored to meet the specific operational needs of a business, ensuring smooth and
              effective workflow management. Unlike manual systems, this application automates tasks—such as handling
              inquiries and making corresponding entries—thanks to an integrated database management system that
              supports relationships between tables.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-700 h-64 rounded-lg relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Homepage"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Homepage</h3>
                <p>
                  I developed the homepage of the Inventory Management System, featuring distinct user and admin login
                  options for streamlined access. The navigation bar includes a "Home" link for general users to explore
                  the platform, and an "Admin" link that directs administrators to a dedicated login for managing
                  inventory, sales, and reports.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="order-2 md:order-1">
                <h3 className="text-xl font-bold mb-2">Key Features</h3>
                <p>
                  The Inventory Management System includes a sidebar that organizes key functionalities for efficient
                  navigation, primarily designed for administrators. It features side headings such as Dashboard, where
                  admins can view a summary of total brands, categories, subcategories, products, and sales; Category,
                  Sub Category, Brand, and Product sections for adding and updating respective details; Inventory for
                  tracking item stock; Cart for managing checkout items; Search and Search Invoice for locating products
                  and order invoices; and Reports for generating stock and sales reports over specific periods. This
                  structured sidebar ensures admins can seamlessly manage all aspects of the inventory system.
                </p>
              </div>
              <div className="bg-gray-700 h-64 rounded-lg relative order-1 md:order-2">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Key Features"
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
                  alt="Database Design"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Database Design</h3>
                <p>
                  I designed a comprehensive class diagram for the Inventory Management System, illustrating the
                  relationships between key database tables to ensure efficient data management. The diagram connects
                  tables like tblcategory, tblsubcategory, tblbrand, tblproducts, tblcart, tblcustomer, and tbladmin,
                  showcasing how categories, subcategories, and brands link to products, while customer and cart data
                  integrate with billing details, and admin credentials secure system access. This structured design
                  highlights my ability to model complex relationships for scalable inventory solutions.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
