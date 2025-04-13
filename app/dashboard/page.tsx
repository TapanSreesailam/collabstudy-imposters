"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Brain,
  Calendar,
  Clock,
  FileText,
  MessageSquare,
  Trophy,
  Users,
  Youtube,
  Zap,
  ArrowRight,
  Bell,
  CheckCircle2,
  BarChart3,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 pt-24 pb-16 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white">Welcome back, Alex</h1>
            <p className="text-slate-400">Continue your learning journey</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="bubble-outline border-slate-700 text-slate-300 hover:bg-slate-800">
              <Bell className="mr-2 h-4 w-4" /> Notifications
            </Button>
            <Button className="bubble-button bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
              <Users className="mr-2 h-4 w-4" /> Join a Study Room
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-white flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-emerald-400" /> Learning Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">Weekly Goal</span>
                      <span className="text-emerald-400">4/5 hours</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">Quizzes Completed</span>
                      <span className="text-emerald-400">7/10</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">Study Streak</span>
                      <span className="text-emerald-400">5 days</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-teal-400 hover:text-teal-300 hover:bg-slate-800">
                  View Detailed Stats <BarChart3 className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-white flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-cyan-400" /> Upcoming Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start p-3 rounded-lg bg-slate-800/50">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white mr-3 flex-shrink-0">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Advanced Calculus Study Group</h3>
                      <p className="text-slate-400 text-sm">Today, 3:00 PM • 8 participants</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 rounded-lg bg-slate-800/50">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white mr-3 flex-shrink-0">
                      <Brain className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">AI Assistant Tutorial</h3>
                      <p className="text-slate-400 text-sm">Tomorrow, 5:30 PM • Personal</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-teal-400 hover:text-teal-300 hover:bg-slate-800">
                  View Calendar <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Card className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-white flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-amber-400" /> To-Do List
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center p-2 rounded-md bg-slate-800/50">
                    <input type="checkbox" className="rounded border-slate-700 text-teal-500 mr-3" />
                    <span className="text-slate-300">Complete Python Programming Quiz</span>
                  </div>
                  <div className="flex items-center p-2 rounded-md bg-slate-800/50">
                    <input type="checkbox" className="rounded border-slate-700 text-teal-500 mr-3" />
                    <span className="text-slate-300">Review Calculus Notes</span>
                  </div>
                  <div className="flex items-center p-2 rounded-md bg-slate-800/50">
                    <input type="checkbox" className="rounded border-slate-700 text-teal-500 mr-3" checked />
                    <span className="text-slate-500 line-through">Join History Discussion</span>
                  </div>
                  <div className="flex items-center p-2 rounded-md bg-slate-800/50">
                    <input type="checkbox" className="rounded border-slate-700 text-teal-500 mr-3" />
                    <span className="text-slate-300">Prepare for Group Presentation</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-teal-400 hover:text-teal-300 hover:bg-slate-800">
                  Add New Task <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Explore Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <FeatureCard
            icon={<Users className="h-6 w-6" />}
            title="Study Rooms"
            description="Join or create collaborative study spaces with peers"
            href="/study-rooms"
            color="from-emerald-500 to-teal-500"
            delay={0.1}
          />
          <FeatureCard
            icon={<Brain className="h-6 w-6" />}
            title="AI Assistant"
            description="Get instant help with your questions and explanations"
            href="/ai-assistant"
            color="from-cyan-500 to-blue-500"
            delay={0.2}
          />
          <FeatureCard
            icon={<Trophy className="h-6 w-6" />}
            title="Quizzes & Leaderboard"
            description="Test your knowledge and compete with friends"
            href="/quizzes"
            color="from-amber-500 to-orange-500"
            delay={0.3}
          />
          <FeatureCard
            icon={<Zap className="h-6 w-6" />}
            title="AI Tools"
            description="Discover cutting-edge AI tools for productivity"
            href="/tools"
            color="from-purple-500 to-indigo-500"
            delay={0.4}
          />
          <FeatureCard
            icon={<Youtube className="h-6 w-6" />}
            title="YouTube Summarizer"
            description="Get concise summaries of educational videos"
            href="/youtube-summarizer"
            color="from-rose-500 to-pink-500"
            delay={0.5}
          />
          <FeatureCard
            icon={<FileText className="h-6 w-6" />}
            title="Study Resources"
            description="Access a library of learning materials and guides"
            href="/resources"
            color="from-blue-500 to-indigo-500"
            delay={0.6}
          />
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-800 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Ready to enhance your learning?</h2>
              <p className="text-slate-400 max-w-2xl">
                Join a study room now or explore our AI assistant to get instant help with your questions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bubble-button bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                <Users className="mr-2 h-4 w-4" /> Join Study Room
              </Button>
              <Button variant="outline" className="bubble-outline border-slate-700 text-slate-300 hover:bg-slate-800">
                <MessageSquare className="mr-2 h-4 w-4" /> Ask AI Assistant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  color: string
  delay: number
}

function FeatureCard({ icon, title, description, href, color, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <Link href={href}>
        <Card className="glass-card border-slate-800 hover:border-slate-700 transition-colors h-full">
          <CardContent className="pt-6">
            <div
              className={`w-12 h-12 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-white mb-4`}
            >
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-slate-400 mb-4">{description}</p>
            <div className="flex items-center text-teal-400 text-sm font-medium">
              Explore <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
