"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  href: string
  color: string
}

export default function FeatureCard({ icon, title, description, href, color }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative rounded-xl overflow-hidden glass-card border border-slate-800 p-6 h-full flex flex-col"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      ></div>
      <div
        className={`w-12 h-12 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-white mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 mb-6 flex-grow">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors"
      >
        Learn more <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </motion.div>
  )
}
