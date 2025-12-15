"use client"

interface SkillCategoryProps {
  category: string
  skills: string[]
  index: number
}

export function SkillCategory({ category, skills, index }: SkillCategoryProps) {
  return (
    <div
      className={`group p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all hover-lift ${
        index === 1 ? "md:translate-y-8" : ""
      }`}
    >
      <h3 className="text-xl font-semibold mb-6 capitalize bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {category}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, skillIdx) => (
          <span
            key={skill}
            className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 hover:scale-110 transition-all"
            style={{
              transitionDelay: `${skillIdx * 50}ms`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
