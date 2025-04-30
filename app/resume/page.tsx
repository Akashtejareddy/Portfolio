"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Resume() {
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
          <h1 className="text-2xl font-bold mb-6">My Resume</h1>
          <div className="bg-white rounded-lg p-4 h-[800px] flex items-center justify-center">
            <p className="text-black">Resume PDF would be embedded here.</p>
            {/* In a real implementation, you would use an iframe or embed tag to show the PDF */}
            {/* <embed src="/AkashTejaResume.pdf" type="application/pdf" width="100%" height="100%" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
