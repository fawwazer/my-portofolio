"use client"

export function TechScroll() {
  const technologies = [
    { name: "React", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
    { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
    { name: "TypeScript", icon: "📘", color: "from-blue-600 to-blue-800" },
    { name: "Node.js", icon: "🟢", color: "from-green-600 to-green-800" },
    { name: "PostgreSQL", icon: "🐘", color: "from-blue-500 to-indigo-600" },
    { name: "MongoDB", icon: "🍃", color: "from-green-500 to-emerald-600" },
    { name: "Tailwind CSS", icon: "🌊", color: "from-cyan-400 to-blue-500" },
    { name: "GraphQL", icon: "◆", color: "from-pink-500 to-purple-600" },
    { name: "Docker", icon: "🐳", color: "from-blue-400 to-blue-600" },
    { name: "AWS", icon: "☁️", color: "from-orange-500 to-amber-600" },
    { name: "Git", icon: "🌿", color: "from-orange-600 to-red-600" },
    { name: "Redis", icon: "🔴", color: "from-red-500 to-red-700" },
  ]

  // Duplicate array for seamless infinite scroll
  const duplicatedTech = [...technologies, ...technologies, ...technologies]

  return (
    <section className="py-16 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      <div className="relative w-full">
        {/* Enhanced gradient fade effects */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background via-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background via-background to-transparent z-10 pointer-events-none" />

        {/* Title */}
        <div className="text-center mb-8 relative z-10">
          <h3 className="text-2xl font-bold gradient-text mb-2">Tech Stack</h3>
          <p className="text-muted-foreground text-sm">Technologies I work with</p>
        </div>

        {/* Scrolling container */}
        <div className="flex overflow-hidden relative">
          <div className="flex gap-6 animate-scroll">
            {duplicatedTech.map((tech, index) => (
              <div
                key={index}
                className="group relative flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-primary/20 hover:border-primary/50 transition-all duration-300 flex-shrink-0 cursor-pointer hover:shadow-[0_0_25px_rgba(112,85,255,0.3)] hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300 relative z-10">{tech.icon}</span>
                <span className="font-semibold text-foreground whitespace-nowrap text-sm group-hover:text-primary transition-colors relative z-10">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
