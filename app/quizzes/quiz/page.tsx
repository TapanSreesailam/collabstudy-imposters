"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, XCircle, Clock, ArrowRight, BarChart3, Award } from "lucide-react"

interface Question {
  id: number
  text: string
  options: string[]
  correctAnswer: number
  explanation: string
}

// Sample quiz data
const quizzes = {
  "python-basics": {
    title: "Python Programming Fundamentals",
    description: "Test your knowledge of Python basics",
    timeLimit: 10, // in minutes
    questions: [
      {
        id: 1,
        text: "What is the output of the following code?\n\nx = 5\ny = 2\nprint(x ** y)",
        options: ["7", "10", "25", "3"],
        correctAnswer: 2, // 25 (index 2)
        explanation:
          "The ** operator in Python represents exponentiation. So x ** y means x raised to the power of y, which is 5² = 25.",
      },
      {
        id: 2,
        text: "Which of the following is the correct way to create a list in Python?",
        options: ["list = (1, 2, 3)", "list = {1, 2, 3}", "list = [1, 2, 3]", "list = <1, 2, 3>"],
        correctAnswer: 2, // list = [1, 2, 3] (index 2)
        explanation:
          "In Python, lists are created using square brackets []. Parentheses () create tuples, and curly braces {} create dictionaries or sets.",
      },
      {
        id: 3,
        text: "What does the following code do?\n\nfor i in range(5):\n    print(i)",
        options: ["Prints numbers 1 to 5", "Prints numbers 0 to 4", "Prints numbers 0 to 5", "Prints numbers 1 to 4"],
        correctAnswer: 1, // Prints numbers 0 to 4 (index 1)
        explanation:
          "The range(5) function generates a sequence from 0 to 4 (5 numbers). The loop iterates through this sequence, printing each number.",
      },
      {
        id: 4,
        text: "Which of the following is used to define a function in Python?",
        options: ["function", "def", "define", "func"],
        correctAnswer: 1, // def (index 1)
        explanation:
          "In Python, the 'def' keyword is used to define a function, followed by the function name and parameters.",
      },
      {
        id: 5,
        text: "What is the output of the following code?\n\nprint(len('Hello, World!'))",
        options: ["12", "13", "11", "14"],
        correctAnswer: 1, // 13 (index 1)
        explanation:
          "The len() function returns the length of a string, including all characters and spaces. 'Hello, World!' has 13 characters including the comma, space, and exclamation mark.",
      },
    ],
  },
  "world-history": {
    title: "World History: Ancient Civilizations",
    description: "Test your knowledge of ancient world history",
    timeLimit: 8, // in minutes
    questions: [
      {
        id: 1,
        text: "Which ancient civilization built the pyramids at Giza?",
        options: ["Mesopotamians", "Egyptians", "Greeks", "Romans"],
        correctAnswer: 1, // Egyptians (index 1)
        explanation:
          "The pyramids at Giza were built by the ancient Egyptians during the Old and Middle Kingdom periods, primarily serving as tombs for pharaohs.",
      },
      {
        id: 2,
        text: "Which of these was NOT one of the ancient Greek city-states?",
        options: ["Athens", "Sparta", "Carthage", "Corinth"],
        correctAnswer: 2, // Carthage (index 2)
        explanation:
          "Carthage was a Phoenician city-state located in modern-day Tunisia, not a Greek city-state. Athens, Sparta, and Corinth were all major Greek city-states.",
      },
      {
        id: 3,
        text: "Who was the first Emperor of Rome?",
        options: ["Julius Caesar", "Augustus", "Nero", "Constantine"],
        correctAnswer: 1, // Augustus (index 1)
        explanation:
          "Augustus (born Octavian) became the first Roman Emperor in 27 BCE after defeating Mark Antony and Cleopatra. Julius Caesar was never officially emperor.",
      },
      {
        id: 4,
        text: "Which of these inventions is credited to ancient China?",
        options: ["Concrete", "Aqueducts", "Paper", "Democracy"],
        correctAnswer: 2, // Paper (index 2)
        explanation:
          "Paper was invented in China around 105 CE by Cai Lun, an official of the Han Dynasty. This invention revolutionized record-keeping and communication.",
      },
      {
        id: 5,
        text: "The Code of Hammurabi was created in which ancient civilization?",
        options: ["Egypt", "Mesopotamia", "Indus Valley", "Greece"],
        correctAnswer: 1, // Mesopotamia (index 1)
        explanation:
          "The Code of Hammurabi was created in ancient Mesopotamia (specifically Babylon) around 1754 BCE. It is one of the oldest deciphered writings of significant length in the world.",
      },
    ],
  },
  "math-calculus": {
    title: "Advanced Calculus Concepts",
    description: "Test your knowledge of calculus principles",
    timeLimit: 15, // in minutes
    questions: [
      {
        id: 1,
        text: "What is the derivative of f(x) = x²?",
        options: ["f'(x) = x", "f'(x) = 2x", "f'(x) = 2", "f'(x) = x²"],
        correctAnswer: 1, // f'(x) = 2x (index 1)
        explanation:
          "The power rule for differentiation states that if f(x) = xⁿ, then f'(x) = n·xⁿ⁻¹. For x², n = 2, so f'(x) = 2·x²⁻¹ = 2x.",
      },
      {
        id: 2,
        text: "What is the integral of f(x) = 2x?",
        options: ["F(x) = x² + C", "F(x) = x + C", "F(x) = 2x² + C", "F(x) = x² - C"],
        correctAnswer: 0, // F(x) = x² + C (index 0)
        explanation:
          "The integral of f(x) = 2x is F(x) = x² + C. This can be verified by differentiating x², which gives 2x.",
      },
      {
        id: 3,
        text: "What is the limit of (sin x)/x as x approaches 0?",
        options: ["0", "1", "∞", "The limit does not exist"],
        correctAnswer: 1, // 1 (index 1)
        explanation:
          "This is a famous limit in calculus. Although both sin x and x approach 0 as x approaches 0, their ratio approaches 1. This can be proven using L'Hôpital's rule or by analyzing the behavior of sin x near 0.",
      },
      {
        id: 4,
        text: "Which of the following is the chain rule for differentiation?",
        options: [
          "d/dx[f(g(x))] = f'(g(x)) · g'(x)",
          "d/dx[f(g(x))] = f'(x) · g'(x)",
          "d/dx[f(g(x))] = f(x) · g(x)",
          "d/dx[f(g(x))] = f'(x) / g'(x)",
        ],
        correctAnswer: 0, // d/dx[f(g(x))] = f'(g(x)) · g'(x) (index 0)
        explanation:
          "The chain rule states that the derivative of a composite function f(g(x)) is the derivative of the outer function f evaluated at g(x), multiplied by the derivative of the inner function g(x).",
      },
      {
        id: 5,
        text: "What is the second derivative of f(x) = sin(x)?",
        options: ["f''(x) = sin(x)", "f''(x) = cos(x)", "f''(x) = -sin(x)", "f''(x) = -cos(x)"],
        correctAnswer: 2, // f''(x) = -sin(x) (index 2)
        explanation:
          "The first derivative of sin(x) is cos(x). The derivative of cos(x) is -sin(x). Therefore, the second derivative of sin(x) is -sin(x).",
      },
    ],
  },
}

export default function QuizPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const quizId = searchParams.get("id") || "python-basics"

  const quiz = quizzes[quizId as keyof typeof quizzes] || quizzes["python-basics"]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(quiz.timeLimit * 60) // convert to seconds
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  // Timer effect
  useEffect(() => {
    if (quizCompleted) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setQuizCompleted(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [quizCompleted])

  const handleOptionSelect = (optionIndex: number) => {
    if (isAnswered) return
    setSelectedOption(optionIndex)
  }

  const handleCheckAnswer = () => {
    if (selectedOption === null) return

    setIsAnswered(true)
    setShowExplanation(true)

    if (selectedOption === quiz.questions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setSelectedOption(null)
      setIsAnswered(false)
      setShowExplanation(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  const progressPercentage = ((currentQuestion + 1) / quiz.questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 pt-24 pb-16 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        {!quizCompleted ? (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">{quiz.title}</h1>
                <p className="text-slate-400">{quiz.description}</p>
              </div>
              <div className="flex items-center bg-slate-800 px-4 py-2 rounded-lg text-white">
                <Clock className="mr-2 h-5 w-5 text-amber-400" />
                <span className="font-mono">{formatTime(timeLeft)}</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8">
              <div className="mb-6">
                <div className="flex justify-between text-sm text-slate-400 mb-2">
                  <span>
                    Question {currentQuestion + 1} of {quiz.questions.length}
                  </span>
                  <span>
                    Score: {score}/{currentQuestion + (isAnswered ? 1 : 0)}
                  </span>
                </div>
                <Progress value={progressPercentage} className="h-2 bg-slate-800" />
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">{quiz.questions[currentQuestion].text}</h2>
                <div className="space-y-3">
                  {quiz.questions[currentQuestion].options.map((option, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: isAnswered ? 1 : 1.01 }}
                      whileTap={{ scale: isAnswered ? 1 : 0.99 }}
                    >
                      <button
                        className={`w-full text-left p-4 rounded-lg transition-colors ${
                          selectedOption === index
                            ? isAnswered
                              ? index === quiz.questions[currentQuestion].correctAnswer
                                ? "bg-emerald-500/20 border-2 border-emerald-500 text-white"
                                : "bg-rose-500/20 border-2 border-rose-500 text-white"
                              : "bg-slate-700 border-2 border-teal-500 text-white"
                            : isAnswered && index === quiz.questions[currentQuestion].correctAnswer
                              ? "bg-emerald-500/20 border-2 border-emerald-500 text-white"
                              : "bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700"
                        }`}
                        onClick={() => handleOptionSelect(index)}
                        disabled={isAnswered}
                      >
                        <div className="flex items-start">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                            {isAnswered ? (
                              index === quiz.questions[currentQuestion].correctAnswer ? (
                                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                              ) : selectedOption === index ? (
                                <XCircle className="h-5 w-5 text-rose-500" />
                              ) : (
                                <span className="text-slate-400">{String.fromCharCode(65 + index)}</span>
                              )
                            ) : (
                              <span className="text-slate-400">{String.fromCharCode(65 + index)}</span>
                            )}
                          </div>
                          <span>{option}</span>
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>

              <AnimatePresence>
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6"
                  >
                    <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                      <h3 className="text-white font-medium mb-2">Explanation</h3>
                      <p className="text-slate-300">{quiz.questions[currentQuestion].explanation}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-end">
                {!isAnswered ? (
                  <Button
                    onClick={handleCheckAnswer}
                    disabled={selectedOption === null}
                    className="bubble-button bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
                  >
                    Check Answer
                  </Button>
                ) : (
                  <Button
                    onClick={handleNextQuestion}
                    className="bubble-button bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
                  >
                    {currentQuestion < quiz.questions.length - 1 ? (
                      <>
                        Next Question <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Finish Quiz <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Quiz Completed!</h1>
              <p className="text-slate-400">
                You scored {score} out of {quiz.questions.length} ({Math.round((score / quiz.questions.length) * 100)}%)
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-teal-400" /> Performance Summary
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-400">Accuracy</span>
                    <span className="text-white">{Math.round((score / quiz.questions.length) * 100)}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                      style={{ width: `${(score / quiz.questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-400">Time Used</span>
                    <span className="text-white">
                      {formatTime(quiz.timeLimit * 60 - timeLeft)} / {formatTime(quiz.timeLimit * 60)}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                      style={{ width: `${((quiz.timeLimit * 60 - timeLeft) / (quiz.timeLimit * 60)) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => router.push("/quizzes")}
                variant="outline"
                className="bubble-outline border-slate-700 text-slate-300 hover:bg-slate-800"
              >
                Back to Quizzes
              </Button>
              <Button
                onClick={() => {
                  setCurrentQuestion(0)
                  setSelectedOption(null)
                  setIsAnswered(false)
                  setScore(0)
                  setTimeLeft(quiz.timeLimit * 60)
                  setQuizCompleted(false)
                  setShowExplanation(false)
                }}
                className="bubble-button bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
              >
                Retry Quiz
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
