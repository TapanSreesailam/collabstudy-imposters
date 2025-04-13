"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, Github, Twitter } from "lucide-react"

export default function AuthPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate authentication process
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md z-10"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-sm font-bold text-white">
                CS
              </div>
            </div>
            <span className="text-2xl font-bold ml-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
              CollabStudy
            </span>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-slate-400">Sign in to continue your learning journey</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Login to your account</CardTitle>
                <CardDescription>Enter your email and password to access your account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-200">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      required
                      className="bg-slate-800 border-slate-700 text-slate-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-slate-200">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        required
                        className="bg-slate-800 border-slate-700 text-slate-200 pr-10"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    <div className="text-right">
                      <Link href="#" className="text-sm text-teal-400 hover:text-teal-300">
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bubble-button bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin mr-2"></div>
                        Logging in...
                      </div>
                    ) : (
                      "Login"
                    )}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="relative w-full">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-800"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-2 bg-slate-900 text-slate-400">Or continue with</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <Button
                    variant="outline"
                    className="bubble-outline border-slate-700 text-slate-300 hover:bg-slate-800"
                  >
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="bubble-outline border-slate-700 text-slate-300 hover:bg-slate-800"
                  >
                    <Twitter className="mr-2 h-4 w-4" /> Twitter
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Create an account</CardTitle>
                <CardDescription>Enter your details to create a new account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="text-slate-200">
                        First name
                      </Label>
                      <Input
                        id="first-name"
                        placeholder="John"
                        required
                        className="bg-slate-800 border-slate-700 text-slate-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="text-slate-200">
                        Last name
                      </Label>
                      <Input
                        id="last-name"
                        placeholder="Doe"
                        required
                        className="bg-slate-800 border-slate-700 text-slate-200"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-slate-200">
                      Email
                    </Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="name@example.com"
                      required
                      className="bg-slate-800 border-slate-700 text-slate-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-slate-200">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        required
                        className="bg-slate-800 border-slate-700 text-slate-200 pr-10"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="rounded border-slate-700 bg-slate-800 text-teal-500 focus:ring-teal-500"
                      required
                    />
                    <Label htmlFor="terms" className="text-sm text-slate-400">
                      I agree to the{" "}
                      <Link href="#" className="text-teal-400 hover:text-teal-300">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-teal-400 hover:text-teal-300">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bubble-button bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin mr-2"></div>
                        Creating account...
                      </div>
                    ) : (
                      "Create Account"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
