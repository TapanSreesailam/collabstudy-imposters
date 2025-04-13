import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-xs font-bold text-white">
                  CS
                </div>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
                CollabStudy
              </span>
            </Link>
            <p className="text-slate-400 mb-4">
              Transforming the way we learn together with AI-powered collaborative tools.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/study-rooms" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Study Rooms
                </Link>
              </li>
              <li>
                <Link href="/ai-assistant" className="text-slate-400 hover:text-teal-400 transition-colors">
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link href="/quizzes" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Quizzes & Leaderboard
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-slate-400 hover:text-teal-400 transition-colors">
                  AI Tools
                </Link>
              </li>
              <li>
                <Link href="/youtube-summarizer" className="text-slate-400 hover:text-teal-400 transition-colors">
                  YouTube Summarizer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-12 pt-8 text-center">
          <p className="text-slate-500">© {new Date().getFullYear()} CollabStudy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
