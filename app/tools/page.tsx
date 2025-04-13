import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Star, BookOpen, Brain, Sparkles, Zap, MessageSquare, PenTool } from "lucide-react"

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 pt-24 pb-16 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Tools for Learning</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Discover cutting-edge AI tools to enhance your productivity and learning experience.
          </p>
        </div>

        <div className="mb-12 bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-800 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white flex-shrink-0">
              <Sparkles className="h-8 w-8 md:h-10 md:w-10" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Try out groundbreaking AI tools</h2>
              <p className="text-slate-400 max-w-3xl">
                Discover cutting-edge AI tools that can revolutionize your learning process and boost your productivity.
                We've curated the best tools to help you study smarter, not harder.
              </p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-5 w-auto">
              <TabsTrigger value="all">All Tools</TabsTrigger>
              <TabsTrigger value="note-taking">Note Taking</TabsTrigger>
              <TabsTrigger value="writing">Writing</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="language">Language</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="note-taking">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allTools
                .filter((tool) => tool.category === "Note Taking")
                .map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="writing">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allTools
                .filter((tool) => tool.category === "Writing")
                .map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="research">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allTools
                .filter((tool) => tool.category === "Research")
                .map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="language">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allTools
                .filter((tool) => tool.category === "Language")
                .map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface Tool {
  id: string
  name: string
  description: string
  category: string
  icon: React.ReactNode
  rating: number
  url: string
  free: boolean
  featured: boolean
}

const allTools: Tool[] = [
  {
    id: "1",
    name: "NotebookLM",
    description: "AI-powered note-taking app that helps organize and connect your ideas with intelligent suggestions.",
    category: "Note Taking",
    icon: <BookOpen className="h-6 w-6" />,
    rating: 4.8,
    url: "https://notebooklm.google.com/",
    free: true,
    featured: true,
  },
  {
    id: "2",
    name: "Anki",
    description:
      "Spaced repetition flashcard program that makes remembering things easy through AI-optimized review schedules.",
    category: "Note Taking",
    icon: <Brain className="h-6 w-6" />,
    rating: 4.9,
    url: "https://apps.ankiweb.net/",
    free: true,
    featured: true,
  },
  {
    id: "3",
    name: "Notion AI",
    description: "All-in-one workspace with AI capabilities for notes, tasks, wikis, and databases.",
    category: "Note Taking",
    icon: <Sparkles className="h-6 w-6" />,
    rating: 4.7,
    url: "https://www.notion.so/",
    free: false,
    featured: true,
  },
  {
    id: "4",
    name: "Grammarly",
    description: "AI writing assistant that helps you write clear, mistake-free text with real-time suggestions.",
    category: "Writing",
    icon: <PenTool className="h-6 w-6" />,
    rating: 4.8,
    url: "https://www.grammarly.com/",
    free: false,
    featured: false,
  },
  {
    id: "5",
    name: "Elicit",
    description:
      "AI research assistant that helps you find relevant papers, extract key information, and summarize findings.",
    category: "Research",
    icon: <Zap className="h-6 w-6" />,
    rating: 4.6,
    url: "https://elicit.org/",
    free: true,
    featured: false,
  },
  {
    id: "6",
    name: "Duolingo Max",
    description: "Language learning app with AI-powered conversations and personalized explanations.",
    category: "Language",
    icon: <MessageSquare className="h-6 w-6" />,
    rating: 4.7,
    url: "https://www.duolingo.com/",
    free: false,
    featured: false,
  },
  {
    id: "7",
    name: "Obsidian",
    description: "Knowledge base that works on local Markdown files with powerful linking and visualization features.",
    category: "Note Taking",
    icon: <Brain className="h-6 w-6" />,
    rating: 4.9,
    url: "https://obsidian.md/",
    free: true,
    featured: false,
  },
  {
    id: "8",
    name: "Quillbot",
    description: "AI-powered paraphrasing tool that helps you rewrite and enhance your text.",
    category: "Writing",
    icon: <PenTool className="h-6 w-6" />,
    rating: 4.5,
    url: "https://quillbot.com/",
    free: false,
    featured: false,
  },
  {
    id: "9",
    name: "Connected Papers",
    description: "Visual tool for academic literature research that helps you find relevant papers.",
    category: "Research",
    icon: <Zap className="h-6 w-6" />,
    rating: 4.6,
    url: "https://www.connectedpapers.com/",
    free: true,
    featured: false,
  },
]

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Card
      className={`bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors ${
        tool.featured ? "ring-2 ring-emerald-500/20" : ""
      }`}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-lg bg-gradient-to-r ${
                tool.category === "Note Taking"
                  ? "from-emerald-500 to-teal-500"
                  : tool.category === "Writing"
                    ? "from-purple-500 to-indigo-500"
                    : tool.category === "Research"
                      ? "from-cyan-500 to-blue-500"
                      : "from-amber-500 to-orange-500"
              } flex items-center justify-center text-white mr-3`}
            >
              {tool.icon}
            </div>
            <div>
              <CardTitle className="text-white flex items-center">
                {tool.name}
                {tool.featured && (
                  <span className="ml-2 px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-xs rounded-full">
                    Featured
                  </span>
                )}
              </CardTitle>
              <CardDescription>{tool.category}</CardDescription>
            </div>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-amber-400 mr-1" />
            <span className="text-white font-medium">{tool.rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-slate-400">{tool.description}</p>
        <div className="mt-4 flex items-center justify-between">
          {tool.free ? (
            <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full">Free</span>
          ) : (
            <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">Paid / Freemium</span>
          )}
          {tool.featured && (
            <span className="px-2 py-1 bg-amber-500/10 text-amber-400 text-xs rounded-full">Trending</span>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full bubble-button bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white"
          asChild
        >
          <Link href={tool.url} target="_blank" rel="noopener noreferrer">
            Visit Website <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
