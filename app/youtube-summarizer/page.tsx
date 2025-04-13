"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Youtube, Clock, FileText, BookOpen, History } from "lucide-react"
import { motion } from "framer-motion"

export default function YoutubeSummarizerPage() {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [summary, setSummary] = useState<Summary | null>(null)
  const [recentVideos, setRecentVideos] = useState<RecentVideo[]>([
    {
      id: "1",
      title: "Introduction to Neural Networks",
      url: "https://www.youtube.com/watch?v=example1",
      thumbnail: "/placeholder.svg?height=90&width=160",
      duration: "15:42",
    },
    {
      id: "2",
      title: "Advanced Python Programming Techniques",
      url: "https://www.youtube.com/watch?v=example2",
      thumbnail: "/placeholder.svg?height=90&width=160",
      duration: "23:18",
    },
    {
      id: "3",
      title: "The History of Ancient Rome",
      url: "https://www.youtube.com/watch?v=example3",
      thumbnail: "/placeholder.svg?height=90&width=160",
      duration: "18:05",
    },
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setSummary({
        title: "Understanding Quantum Computing: A Beginner's Guide",
        channel: "Tech Explained",
        duration: "18:24",
        thumbnail: "/placeholder.svg?height=180&width=320",
        summary:
          "This video provides an introduction to quantum computing, explaining the fundamental concepts that make it different from classical computing. The presenter covers qubits, superposition, and entanglement, and how these properties enable quantum computers to solve certain problems much faster than classical computers.\n\nKey points covered:\n\n1. Quantum bits (qubits) can exist in multiple states simultaneously due to superposition\n2. Entanglement allows qubits to be correlated in ways that have no classical analog\n3. Quantum computers excel at specific tasks like factoring large numbers and simulating quantum systems\n4. Current quantum computers are still in early stages with limitations in qubit stability\n5. Potential applications include cryptography, drug discovery, and optimization problems",
        keyPoints: [
          "Quantum computing uses qubits instead of classical bits",
          "Superposition allows qubits to exist in multiple states simultaneously",
          "Entanglement creates powerful correlations between qubits",
          "Quantum computers can solve certain problems exponentially faster",
          "Current quantum computers face challenges with decoherence and error rates",
        ],
        timestamps: [
          { time: "0:00", label: "Introduction" },
          { time: "2:15", label: "Classical vs. Quantum Computing" },
          { time: "5:42", label: "Understanding Qubits" },
          { time: "8:30", label: "Superposition Explained" },
          { time: "11:18", label: "Quantum Entanglement" },
          { time: "14:05", label: "Current State of Quantum Computing" },
          { time: "16:50", label: "Future Applications" },
        ],
      })

      setIsLoading(false)

      // Add to recent videos
      const newVideo: RecentVideo = {
        id: (recentVideos.length + 1).toString(),
        title: "Understanding Quantum Computing: A Beginner's Guide",
        url: url,
        thumbnail: "/placeholder.svg?height=90&width=160",
        duration: "18:24",
      }

      setRecentVideos([newVideo, ...recentVideos.slice(0, 2)])
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 pt-24 pb-16 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">YouTube Summarizer</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Save time by getting concise summaries of educational YouTube videos with our AI-powered summarizer.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
            <div className="flex-grow relative">
              <Youtube className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <Input
                type="text"
                placeholder="Paste YouTube video URL here..."
                className="pl-10 bg-slate-800 border-slate-700 text-slate-200"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="bubble-button bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Summarizing..." : "Summarize"}
            </Button>
          </form>
        </div>

        {isLoading && (
          <div className="max-w-3xl mx-auto text-center py-12">
            <div className="inline-block relative w-20 h-20">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="w-20 h-20 rounded-full border-4 border-t-emerald-500 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
              </div>
              <div className="absolute top-2 left-2 w-16 h-16">
                <div
                  className="w-16 h-16 rounded-full border-4 border-t-teal-500 border-r-transparent border-b-transparent border-l-transparent animate-spin"
                  style={{ animationDirection: "reverse", animationDuration: "0.8s" }}
                ></div>
              </div>
            </div>
            <p className="text-slate-400 mt-4">Analyzing video content and generating summary...</p>
          </div>
        )}

        {summary && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-slate-900 border-slate-800 overflow-hidden">
              <div className="p-6 border-b border-slate-800">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={summary.thumbnail || "/placeholder.svg"}
                        alt={summary.title}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{summary.title}</h2>
                    <div className="flex items-center text-slate-400 mb-4">
                      <span className="mr-4">{summary.channel}</span>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{summary.duration}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bubble-outline border-slate-700 text-slate-300 hover:bg-slate-800"
                      >
                        <FileText className="h-4 w-4 mr-2" /> Copy Summary
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bubble-outline border-slate-700 text-slate-300 hover:bg-slate-800"
                      >
                        <BookOpen className="h-4 w-4 mr-2" /> Save to Notes
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-0">
                <Tabs defaultValue="summary">
                  <TabsList className="w-full rounded-none border-b border-slate-800 bg-slate-900">
                    <TabsTrigger value="summary" className="flex-1 rounded-none data-[state=active]:bg-slate-800">
                      Summary
                    </TabsTrigger>
                    <TabsTrigger value="key-points" className="flex-1 rounded-none data-[state=active]:bg-slate-800">
                      Key Points
                    </TabsTrigger>
                    <TabsTrigger value="timestamps" className="flex-1 rounded-none data-[state=active]:bg-slate-800">
                      Timestamps
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="summary" className="p-6 mt-0">
                    <p className="text-slate-300 whitespace-pre-line">{summary.summary}</p>
                  </TabsContent>
                  <TabsContent value="key-points" className="p-6 mt-0">
                    <ul className="space-y-3">
                      {summary.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white text-xs mr-3 mt-0.5">
                            {index + 1}
                          </div>
                          <span className="text-slate-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="timestamps" className="p-6 mt-0">
                    <div className="space-y-3">
                      {summary.timestamps.map((timestamp, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
                        >
                          <div className="flex items-center">
                            <div className="w-12 text-emerald-400 font-mono">{timestamp.time}</div>
                            <span className="text-slate-300">{timestamp.label}</span>
                          </div>
                          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                            Watch
                          </Button>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {!isLoading && !summary && (
          <div className="max-w-4xl mx-auto mt-12">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
              <History className="mr-2 h-5 w-5" /> Recent Summaries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentVideos.map((video) => (
                <Card key={video.id} className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex mb-3">
                      <div className="w-20 h-12 rounded overflow-hidden mr-3">
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-white line-clamp-2">{video.title}</h3>
                        <div className="text-xs text-slate-400 mt-1 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{video.duration}</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bubble-outline border-slate-700 text-slate-300 hover:bg-slate-800"
                      onClick={() => {
                        setUrl(video.url)
                        handleSubmit(new Event("submit") as any)
                      }}
                    >
                      View Summary
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

interface Summary {
  title: string
  channel: string
  duration: string
  thumbnail: string
  summary: string
  keyPoints: string[]
  timestamps: {
    time: string
    label: string
  }[]
}

interface RecentVideo {
  id: string
  title: string
  url: string
  thumbnail: string
  duration: string
}
