"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BookOpen, Clock, FileText, Users, Trophy, Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export default function QuizzesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter quizzes based on search query
  const filteredFeaturedQuizzes = featuredQuizzes.filter(
    (quiz) =>
      quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quiz.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredPopularQuizzes = popularQuizzes.filter(
    (quiz) =>
      quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quiz.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredRecentQuizzes = recentQuizzes.filter(
    (quiz) =>
      quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quiz.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredMyQuizzes = myQuizzes.filter(
    (quiz) =>
      quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quiz.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 pt-24 pb-16 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Quizzes & Leaderboard</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Test your knowledge with interactive quizzes and compete with friends on the global leaderboard.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <Input
                  placeholder="Search quizzes by title or category..."
                  className="pl-10 bg-slate-800 border-slate-700 text-slate-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <Tabs defaultValue="featured" className="w-full">
              <div className="flex justify-between items-center mb-6">
                <TabsList>
                  <TabsTrigger value="featured">Featured</TabsTrigger>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                  <TabsTrigger value="my-quizzes">My Quizzes</TabsTrigger>
                </TabsList>
                <Button className="bubble-button bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                  Create Quiz
                </Button>
              </div>

              <TabsContent value="featured" className="space-y-6">
                {filteredFeaturedQuizzes.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredFeaturedQuizzes.map((quiz) => (
                      <QuizCard key={quiz.id} quiz={quiz} />
                    ))}
                  </div>
                ) : (
                  <NoQuizzesFound />
                )}
              </TabsContent>

              <TabsContent value="popular" className="space-y-6">
                {filteredPopularQuizzes.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPopularQuizzes.map((quiz) => (
                      <QuizCard key={quiz.id} quiz={quiz} />
                    ))}
                  </div>
                ) : (
                  <NoQuizzesFound />
                )}
              </TabsContent>

              <TabsContent value="recent" className="space-y-6">
                {filteredRecentQuizzes.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredRecentQuizzes.map((quiz) => (
                      <QuizCard key={quiz.id} quiz={quiz} />
                    ))}
                  </div>
                ) : (
                  <NoQuizzesFound />
                )}
              </TabsContent>

              <TabsContent value="my-quizzes" className="space-y-6">
                {filteredMyQuizzes.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredMyQuizzes.map((quiz) => (
                      <QuizCard key={quiz.id} quiz={quiz} />
                    ))}
                  </div>
                ) : (
                  <NoQuizzesFound />
                )}
              </TabsContent>
            </Tabs>
          </div>

          <div className="w-full lg:w-1/3">
            <Card className="bg-slate-900 border-slate-800 mb-6">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Trophy className="mr-2 h-5 w-5 text-amber-400" />
                  Global Leaderboard
                </CardTitle>
                <CardDescription>Top performers across all quizzes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboardUsers.map((user, index) => (
                    <motion.div
                      key={user.id}
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                            index === 0
                              ? "bg-amber-400 text-amber-900"
                              : index === 1
                                ? "bg-slate-300 text-slate-900"
                                : index === 2
                                  ? "bg-amber-700 text-amber-100"
                                  : "bg-slate-700 text-slate-300"
                          }`}
                        >
                          {index + 1}
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center mr-2">
                            {user.name.charAt(0)}
                          </div>
                          <span className="text-white font-medium">{user.name}</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-white font-bold">{user.points}</span>
                        <span className="text-slate-400 ml-1">pts</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full bubble-outline border-slate-700 text-slate-300 hover:bg-slate-800"
                >
                  View Full Leaderboard
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Award className="mr-2 h-5 w-5 text-emerald-400" />
                  Your Achievements
                </CardTitle>
                <CardDescription>Track your progress and earn badges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.id}
                      className="flex flex-col items-center text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                          achievement.unlocked ? "bg-gradient-to-r from-emerald-500 to-teal-500" : "bg-slate-800"
                        }`}
                      >
                        {achievement.icon}
                      </div>
                      <span className={`text-xs font-medium ${achievement.unlocked ? "text-white" : "text-slate-500"}`}>
                        {achievement.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full bubble-outline border-slate-700 text-slate-300 hover:bg-slate-800"
                >
                  View All Achievements
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function NoQuizzesFound() {
  return (
    <div className="text-center py-12">
      <Filter className="h-12 w-12 text-slate-600 mx-auto mb-4" />
      <h3 className="text-xl font-medium text-white mb-2">No quizzes found</h3>
      <p className="text-slate-400 mb-6">Try adjusting your search or browse other categories</p>
      <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
        Clear Search
      </Button>
    </div>
  )
}

interface Quiz {
  id: string
  title: string
  category: string
  questions: number
  timeLimit: number
  difficulty: "Easy" | "Medium" | "Hard"
  attempts: number
  rating: number
  quizId?: string
}

const featuredQuizzes: Quiz[] = [
  {
    id: "1",
    title: "Introduction to Machine Learning",
    category: "Computer Science",
    questions: 20,
    timeLimit: 30,
    difficulty: "Medium",
    attempts: 1245,
    rating: 4.8,
  },
  {
    id: "2",
    title: "World History: Ancient Civilizations",
    category: "History",
    questions: 15,
    timeLimit: 20,
    difficulty: "Easy",
    attempts: 876,
    rating: 4.5,
    quizId: "world-history",
  },
  {
    id: "3",
    title: "Advanced Calculus Concepts",
    category: "Mathematics",
    questions: 25,
    timeLimit: 45,
    difficulty: "Hard",
    attempts: 532,
    rating: 4.7,
    quizId: "math-calculus",
  },
  {
    id: "4",
    title: "Biology: Human Anatomy",
    category: "Science",
    questions: 30,
    timeLimit: 40,
    difficulty: "Medium",
    attempts: 1089,
    rating: 4.6,
  },
]

const popularQuizzes: Quiz[] = [
  {
    id: "5",
    title: "Python Programming Fundamentals",
    category: "Programming",
    questions: 20,
    timeLimit: 30,
    difficulty: "Easy",
    attempts: 2345,
    rating: 4.9,
    quizId: "python-basics",
  },
  {
    id: "6",
    title: "Chemistry: Periodic Table",
    category: "Science",
    questions: 25,
    timeLimit: 35,
    difficulty: "Medium",
    attempts: 1567,
    rating: 4.7,
  },
  {
    id: "7",
    title: "English Literature Classics",
    category: "Literature",
    questions: 15,
    timeLimit: 25,
    difficulty: "Medium",
    attempts: 987,
    rating: 4.4,
  },
  {
    id: "8",
    title: "Web Development Basics",
    category: "Programming",
    questions: 20,
    timeLimit: 30,
    difficulty: "Easy",
    attempts: 1876,
    rating: 4.8,
  },
]

const recentQuizzes: Quiz[] = [
  {
    id: "9",
    title: "Artificial Intelligence Ethics",
    category: "Computer Science",
    questions: 15,
    timeLimit: 25,
    difficulty: "Medium",
    attempts: 345,
    rating: 4.6,
  },
  {
    id: "10",
    title: "Modern Physics Concepts",
    category: "Science",
    questions: 20,
    timeLimit: 40,
    difficulty: "Hard",
    attempts: 267,
    rating: 4.8,
  },
  {
    id: "11",
    title: "Spanish Language Basics",
    category: "Languages",
    questions: 30,
    timeLimit: 35,
    difficulty: "Easy",
    attempts: 432,
    rating: 4.5,
  },
  {
    id: "12",
    title: "Business Management Principles",
    category: "Business",
    questions: 25,
    timeLimit: 30,
    difficulty: "Medium",
    attempts: 189,
    rating: 4.3,
  },
]

const myQuizzes: Quiz[] = [
  {
    id: "13",
    title: "Data Structures and Algorithms",
    category: "Computer Science",
    questions: 20,
    timeLimit: 45,
    difficulty: "Hard",
    attempts: 78,
    rating: 4.9,
  },
  {
    id: "14",
    title: "Digital Marketing Strategies",
    category: "Marketing",
    questions: 15,
    timeLimit: 25,
    difficulty: "Medium",
    attempts: 45,
    rating: 4.7,
  },
]

interface LeaderboardUser {
  id: string
  name: string
  points: number
}

const leaderboardUsers: LeaderboardUser[] = [
  { id: "1", name: "Alex Johnson", points: 12450 },
  { id: "2", name: "Samantha Lee", points: 10875 },
  { id: "3", name: "Michael Chen", points: 9640 },
  { id: "4", name: "Emma Wilson", points: 8920 },
  { id: "5", name: "David Kim", points: 8340 },
]

interface Achievement {
  id: string
  name: string
  icon: React.ReactNode
  unlocked: boolean
}

const achievements: Achievement[] = [
  { id: "1", name: "Quiz Master", icon: <Trophy className="h-6 w-6 text-white" />, unlocked: true },
  { id: "2", name: "Fast Learner", icon: <Clock className="h-6 w-6 text-white" />, unlocked: true },
  { id: "3", name: "Knowledge Seeker", icon: <BookOpen className="h-6 w-6 text-white" />, unlocked: true },
  { id: "4", name: "Perfect Score", icon: <Award className="h-6 w-6 text-slate-500" />, unlocked: false },
  { id: "5", name: "Quiz Creator", icon: <FileText className="h-6 w-6 text-slate-500" />, unlocked: false },
  { id: "6", name: "Social Learner", icon: <Users className="h-6 w-6 text-slate-500" />, unlocked: false },
]

function QuizCard({ quiz }: { quiz: Quiz }) {
  return (
    <Card className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-white">{quiz.title}</CardTitle>
          <div
            className={`px-2 py-1 rounded text-xs ${
              quiz.difficulty === "Easy"
                ? "bg-emerald-500/10 text-emerald-400"
                : quiz.difficulty === "Medium"
                  ? "bg-amber-500/10 text-amber-400"
                  : "bg-rose-500/10 text-rose-400"
            }`}
          >
            {quiz.difficulty}
          </div>
        </div>
        <CardDescription>{quiz.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm text-slate-400 mb-4">
          <div className="flex items-center">
            <FileText className="h-4 w-4 mr-1" />
            <span>{quiz.questions} questions</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{quiz.timeLimit} minutes</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{quiz.attempts} attempts</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-1">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-4 h-4 ${star <= Math.round(quiz.rating) ? "text-amber-400" : "text-slate-600"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-xs text-slate-500 mt-1">{quiz.rating.toFixed(1)} rating</div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full bubble-button bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
          asChild
        >
          <Link href={`/quizzes/quiz?id=${quiz.quizId || "python-basics"}`}>Start Quiz</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
