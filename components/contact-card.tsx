"use client"

import { LucideIcon } from "lucide-react"

interface ContactCardProps {
  icon: LucideIcon
  label: string
  value: string
  href: string
}

export function ContactCard({ icon: Icon, label, value, href }: ContactCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all hover-lift text-center"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
        <Icon className="text-primary-foreground" size={24} />
      </div>
      <p className="font-semibold group-hover:text-primary transition-colors">
        {label}
      </p>
      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
        {value}
      </p>
    </a>
  )
}
