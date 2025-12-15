"use client"

import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  link: string
  size: "large" | "small"
  index: number
}

export function ProjectCard({ 
  title, 
  description, 
  tags, 
  image, 
  link, 
  size, 
  index 
}: ProjectCardProps) {
  return (
    <div
      className={`group overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-all hover-lift col-span-1 ${
        size === "large" ? "lg:col-span-2 lg:row-span-2" : "lg:col-span-1"
      } ${index % 4 === 1 ? "md:translate-y-12" : ""} ${index % 4 === 2 ? "md:-translate-y-8" : ""} ${
        index % 4 === 3 ? "md:translate-y-6" : ""
      }`}
    >
      <div
        className={`${size === "large" ? "aspect-square" : "aspect-video"} overflow-hidden bg-muted relative group/image`}
      >
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ExternalLink className="text-white w-12 h-12 transform scale-75 group-hover:scale-100 transition-transform" />
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold group-hover:gradient-text transition-all">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link"
        >
          View Project <ExternalLink size={16} className="group-hover/link:rotate-45 transition-transform" />
        </a>
      </div>
    </div>
  )
}
