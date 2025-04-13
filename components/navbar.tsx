"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Study Rooms", href: "/study-rooms" },
  { name: "AI Assistant", href: "/ai-assistant" },
  { name: "Quizzes", href: "/quizzes" },
  { name: "Tools", href: "/tools" },
  { name: "YouTube Summarizer", href: "/youtube-summarizer" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50 py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-xs font-bold text-white">
                CS
              </div>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
              CollabStudy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm rounded-md transition-colors",
                  pathname === item.href
                    ? "text-teal-400 bg-teal-500/10"
                    : "text-slate-300 hover:text-teal-400 hover:bg-slate-800/50",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="bubble-outline border-slate-700 text-slate-300 hover:bg-slate-800"
              asChild
            >
              <Link href="/auth?tab=login">Log In</Link>
            </Button>
            <Button
              className="bubble-button bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
              asChild
            >
              <Link href="/auth?tab=signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900 border-b border-slate-800"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm rounded-md transition-colors",
                    pathname === item.href
                      ? "text-teal-400 bg-teal-500/10"
                      : "text-slate-300 hover:text-teal-400 hover:bg-slate-800/50",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2">
                <Button
                  variant="outline"
                  className="bubble-outline border-slate-700 text-slate-300 hover:bg-slate-800 w-full"
                  asChild
                >
                  <Link href="/auth?tab=login">Log In</Link>
                </Button>
                <Button
                  className="bubble-button bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white w-full"
                  asChild
                >
                  <Link href="/auth?tab=signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
