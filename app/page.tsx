"use client"
import { ArrowRight, BookOpen, Brain, Trophy, Youtube, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroAnimation from "@/components/hero-animation"
import FeatureCard from "@/components/feature-card"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 mb-3">
                  Collaborative Learning
                </h1>
                <p className="text-2xl md:text-3xl text-teal-300 mb-6">Everything at one place</p>
                <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
                  Join CollabStudy to learn together, leverage AI assistance, and boost your productivity with
                  cutting-edge tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bubble-button bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
                    asChild
                  >
                    <Link href="/auth">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bubble-outline border-slate-700 text-slate-200 hover:bg-slate-800"
                  >
                    Explore Features
                  </Button>
                </div>
              </motion.div>
            </div>
            <div className="flex-1">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-slate-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Everything you need to enhance your learning experience in one platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen className="h-6 w-6" />}
              title="Study Rooms"
              description="Collaborate in real-time with peers in virtual study rooms. Share resources, discuss topics, and solve problems together."
              href="/study-rooms"
              color="from-emerald-500 to-teal-500"
            />
            <FeatureCard
              icon={<Brain className="h-6 w-6" />}
              title="AI Assistant"
              description="Get instant help with your questions, explanations for complex topics, and personalized learning recommendations."
              href="/ai-assistant"
              color="from-cyan-500 to-blue-500"
            />
            <FeatureCard
              icon={<Trophy className="h-6 w-6" />}
              title="Quizzes & Leaderboard"
              description="Test your knowledge with interactive quizzes and compete with friends on the global leaderboard."
              href="/quizzes"
              color="from-amber-500 to-orange-500"
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="AI Tools Recommendations"
              description="Discover cutting-edge AI tools for productivity and learning like NotebookLM, Anki, and more."
              href="/tools"
              color="from-purple-500 to-indigo-500"
            />
            <FeatureCard
              icon={<Youtube className="h-6 w-6" />}
              title="YouTube Summarizer"
              description="Save time by getting concise summaries of educational YouTube videos with our AI-powered summarizer."
              href="/youtube-summarizer"
              color="from-rose-500 to-pink-500"
            />
            <div className="relative group rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-800 p-6 h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-center p-8">
                <div className="text-slate-400 mb-2">Coming Soon</div>
                <h3 className="text-xl font-semibold text-white mb-2">More Features</h3>
                <p className="text-slate-400">
                  We're constantly adding new features to enhance your learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-800 rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Learning?</h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                Join thousands of students who are already experiencing the future of collaborative learning.
              </p>
              <Button
                size="lg"
                className="bubble-button bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
              >
                Join CollabStudy Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
