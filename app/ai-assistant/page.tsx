"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUp, Bot, Sparkles, BookOpen, Lightbulb, History, Bookmark, Search } from "lucide-react"
import { motion } from "framer-motion"

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your AI learning assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse: Message = {
        role: "assistant",
        content: getAIResponse(inputValue),
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getAIResponse = (query: string): string => {
    // Convert query to lowercase for easier matching
    const q = query.toLowerCase()

    // Math and Science responses
    if (q.includes("calculus") || q.includes("derivative")) {
      return "Calculus is the mathematical study of continuous change. Derivatives measure the rate at which a function is changing at a given point. For example, if f(x) = x², then f'(x) = 2x. This means that at any point x, the slope of the tangent line to the curve is 2x. Would you like me to explain a specific calculus concept in more detail or work through an example problem?"
    } else if (q.includes("python") || q.includes("code") || q.includes("programming")) {
      return "Python is a high-level, interpreted programming language known for its readability and versatility. Here's a simple example of a Python function that calculates the factorial of a number:\n\n```python\ndef factorial(n):\n    if n == 0 or n == 1:\n        return 1\n    else:\n        return n * factorial(n-1)\n\n# Example usage\nprint(factorial(5))  # Output: 120\n```\n\nWhat specific aspect of Python would you like to learn about?"
    } else if (q.includes("physics") || q.includes("newton") || q.includes("gravity")) {
      return "Newton's law of universal gravitation states that every particle attracts every other particle with a force proportional to the product of their masses and inversely proportional to the square of the distance between them. The mathematical formula is F = G(m₁m₂/r²), where F is the gravitational force, G is the gravitational constant, m₁ and m₂ are the masses, and r is the distance between the centers of the masses. Would you like me to explain how this applies to everyday phenomena?"
    }

    // History and Literature responses
    else if (q.includes("history") || q.includes("world war") || q.includes("revolution")) {
      return "History is a vast subject! The World Wars were two global conflicts that fundamentally changed the political, economic, and social structures of the world. World War I (1914-1918) began with the assassination of Archduke Franz Ferdinand and involved the Allied Powers (including Britain, France, Russia) against the Central Powers (Germany, Austria-Hungary, Ottoman Empire). World War II (1939-1945) was even more devastating and ended with the defeat of Nazi Germany and Imperial Japan. Which historical period or event would you like to explore further?"
    } else if (q.includes("shakespeare") || q.includes("literature") || q.includes("novel")) {
      return "Shakespeare is considered one of the greatest writers in the English language. He wrote approximately 37 plays and 154 sonnets. His works explore themes of love, betrayal, power, and human nature that remain relevant today. Some of his most famous plays include 'Hamlet,' 'Macbeth,' 'Romeo and Juliet,' and 'A Midsummer Night's Dream.' Would you like me to analyze a specific work or explain a literary concept?"
    }

    // Study tips and learning strategies
    else if (q.includes("study") || q.includes("learn") || q.includes("memorize") || q.includes("remember")) {
      return "Effective studying involves active engagement with the material. The Pomodoro Technique (25 minutes of focused study followed by a 5-minute break) can help maintain concentration. Spaced repetition is excellent for memorization—review material at increasing intervals. Also, teaching concepts to others (even imaginary students) significantly improves understanding and retention. Would you like specific study strategies for a particular subject or learning style?"
    }

    // Exam and assignment help
    else if (q.includes("exam") || q.includes("test") || q.includes("assignment") || q.includes("homework")) {
      return "When preparing for exams, create a study schedule that allocates more time to challenging subjects. Practice with past papers to familiarize yourself with the format and timing. For assignments, break the task into smaller components with deadlines for each. Start with an outline to organize your thoughts, and always leave time for revision. Would you like tips for a specific type of exam or assignment?"
    }

    // Career and future planning
    else if (q.includes("career") || q.includes("job") || q.includes("profession") || q.includes("future")) {
      return "Career planning involves understanding your strengths, interests, and values. Research growing fields like data science, artificial intelligence, renewable energy, and healthcare. Networking and internships provide valuable experience and connections. Consider developing both technical skills and soft skills like communication and problem-solving, as these are valuable in any field. Would you like to discuss specific career paths or strategies for professional development?"
    }

    // General greeting or introduction
    else if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("greetings")) {
      return "Hello! I'm your AI learning assistant. I can help with subjects like math, science, history, literature, and provide study strategies. What would you like to learn about today?"
    }

    // Questions about the assistant
    else if (q.includes("who are you") || q.includes("what can you do") || q.includes("how do you work")) {
      return "I'm an AI learning assistant designed to help with your educational needs. I can explain concepts in various subjects, provide study tips, help with homework questions, and suggest learning resources. While I don't have access to the internet to search for information, I've been trained on a wide range of educational topics. How can I assist with your learning today?"
    }

    // Default response for unrecognized queries
    else {
      return "That's an interesting question! To help you better, could you provide more details about what you're trying to learn? I can explain concepts, provide examples, or guide you through problem-solving steps in subjects like mathematics, science, history, literature, and more. I can also offer study strategies tailored to your learning style."
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 pt-24 pb-16 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-3/4">
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden h-[calc(100vh-180px)] flex flex-col">
              <div className="p-4 border-b border-slate-800 bg-slate-900 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-3">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h2 className="text-white font-medium">AI Learning Assistant</h2>
                    <p className="text-slate-400 text-xs">Powered by advanced language models</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="bubble-outline border-slate-700 text-slate-300">
                  <Sparkles className="h-4 w-4 mr-2" /> Upgrade
                </Button>
              </div>

              <div className="flex-grow overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                          : "bg-slate-800 text-slate-200"
                      }`}
                    >
                      <p className="whitespace-pre-line">{message.content}</p>
                      <div
                        className={`text-xs mt-1 ${message.role === "user" ? "text-emerald-100" : "text-slate-400"}`}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-slate-800 text-slate-200 rounded-lg p-3 max-w-[80%]">
                      <div className="flex space-x-1">
                        <div
                          className="w-2 h-2 rounded-full bg-slate-500 animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-slate-500 animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-slate-500 animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 border-t border-slate-800 bg-slate-900">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask anything about your studies..."
                    className="bg-slate-800 border-slate-700 text-slate-200"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bubble-button bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
                  >
                    <ArrowUp className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-2 text-xs text-slate-500 text-center">
                  AI responses are generated to help with learning. Verify important information.
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/4">
            <Tabs defaultValue="suggestions">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="saved">Saved</TabsTrigger>
              </TabsList>

              <TabsContent value="suggestions" className="space-y-3">
                <SuggestionCard
                  icon={<BookOpen className="h-4 w-4" />}
                  title="Explain a concept"
                  description="Ask the AI to explain any academic concept in simple terms"
                  examples={["Explain quantum computing", "What is photosynthesis?", "How do neural networks work?"]}
                  onSelect={(text) => setInputValue(text)}
                />

                <SuggestionCard
                  icon={<Lightbulb className="h-4 w-4" />}
                  title="Problem solving"
                  description="Get step-by-step guidance on solving problems"
                  examples={[
                    "Help me solve this calculus problem",
                    "Debug my Python code",
                    "How to structure an essay?",
                  ]}
                  onSelect={(text) => setInputValue(text)}
                />

                <SuggestionCard
                  icon={<Search className="h-4 w-4" />}
                  title="Study strategies"
                  description="Get tips on effective learning methods"
                  examples={["How to memorize formulas?", "Best way to study for exams", "Tips for staying focused"]}
                  onSelect={(text) => setInputValue(text)}
                />
              </TabsContent>

              <TabsContent value="history">
                <Card className="bg-slate-900 border-slate-800">
                  <CardContent className="p-4">
                    <div className="flex items-center text-slate-400 mb-4">
                      <History className="h-4 w-4 mr-2" />
                      <span>Your conversation history</span>
                    </div>
                    <div className="space-y-2">
                      <HistoryItem title="Calculus derivatives explanation" date="Today, 2:30 PM" onClick={() => {}} />
                      <HistoryItem
                        title="Python list comprehension examples"
                        date="Yesterday, 10:15 AM"
                        onClick={() => {}}
                      />
                      <HistoryItem title="Renaissance art characteristics" date="May 10, 2023" onClick={() => {}} />
                      <HistoryItem title="Study techniques for memorization" date="May 8, 2023" onClick={() => {}} />
                      <HistoryItem title="Newton's laws of motion" date="May 5, 2023" onClick={() => {}} />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="saved">
                <Card className="bg-slate-900 border-slate-800">
                  <CardContent className="p-4">
                    <div className="flex items-center text-slate-400 mb-4">
                      <Bookmark className="h-4 w-4 mr-2" />
                      <span>Saved responses</span>
                    </div>
                    <div className="text-center py-8 text-slate-500">
                      <Bookmark className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p>No saved responses yet</p>
                      <p className="text-xs mt-1">Bookmark helpful AI responses to access them later</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

interface Message {
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

interface SuggestionCardProps {
  icon: React.ReactNode
  title: string
  description: string
  examples: string[]
  onSelect: (text: string) => void
}

function SuggestionCard({ icon, title, description, examples, onSelect }: SuggestionCardProps) {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardContent className="p-4">
        <div className="flex items-center mb-2">
          <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center mr-2">{icon}</div>
          <h3 className="text-white font-medium">{title}</h3>
        </div>
        <p className="text-slate-400 text-sm mb-3">{description}</p>
        <div className="space-y-2">
          {examples.map((example, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="w-full justify-start border-slate-700 text-slate-300 hover:bg-slate-800 rounded-full"
              onClick={() => onSelect(example)}
            >
              {example}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

interface HistoryItemProps {
  title: string
  date: string
  onClick: () => void
}

function HistoryItem({ title, date, onClick }: HistoryItemProps) {
  return (
    <Button variant="ghost" className="w-full justify-start p-2 h-auto text-left hover:bg-slate-800" onClick={onClick}>
      <div>
        <div className="text-slate-300 font-medium text-sm">{title}</div>
        <div className="text-slate-500 text-xs">{date}</div>
      </div>
    </Button>
  )
}
