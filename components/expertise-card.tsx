"use client"

import { LucideIcon } from "lucide-react"

interface ExpertiseCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay: number
  offset: string
}

export function ExpertiseCard({ icon: Icon, title, description, delay, offset }: ExpertiseCardProps) {
  return (
    <div
      className={`group p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all hover-lift hover:bg-card/80 animate-in fade-in-up duration-700 ${offset}`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:rotate-6">
        <Icon className="text-primary-foreground" size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:gradient-text transition-all">
        {title}
      </h3>
      <p className="text-muted-foreground text-base group-hover:text-foreground transition-colors leading-relaxed">
        {description}
      </p>
    </div>
  )
}
