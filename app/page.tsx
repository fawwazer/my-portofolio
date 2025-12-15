"use client"

import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Code2, Database, Zap } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import {
  TechScroll,
  ScrollToTop,
  ProjectCard,
  ExpertiseCard,
  SkillCategory,
  ContactCard,
  BannerScroll,
} from "../components"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Loading animation
    setTimeout(() => setIsLoading(false), 1000)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack MERN application with Stripe integration, real-time inventory management, and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/ecommerce-dashboard.png",
      link: "#",
      size: "large" as const,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, team workspaces, and advanced filtering.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      image: "/task-management-interface.png",
      link: "#",
      size: "small" as const,
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Data visualization platform with interactive charts, custom reports, and scheduled email exports.",
      tags: ["React", "D3.js", "Node.js", "Redis"],
      image: "/analytics-dashboard.png",
      link: "#",
      size: "small" as const,
    },
    {
      id: 4,
      title: "Social Media API",
      description: "RESTful API with authentication, rate limiting, WebSocket support for real-time notifications.",
      tags: ["Express.js", "PostgreSQL", "JWT", "WebSocket"],
      image: "/api-endpoints-documentation.jpg",
      link: "#",
      size: "large" as const,
    },
  ]

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma ORM"],
    tools: ["Git", "Docker", "AWS", "GraphQL", "REST APIs"],
  }

  const expertise = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Building responsive, pixel-perfect interfaces with React and Next.js",
      delay: 0,
      offset: "lg:translate-y-0",
    },
    {
      icon: Database,
      title: "Backend Architecture",
      description: "Designing scalable APIs and databases with Node.js and PostgreSQL",
      delay: 150,
      offset: "lg:translate-y-12",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, SEO, and user experience",
      delay: 300,
      offset: "lg:translate-y-0",
    },
  ]

  const bannerSlides = [
    {
      title: "Scalable Solutions",
      description: "Building applications that grow with your business",
      icon: "🚀",
    },
    {
      title: "Modern Stack",
      description: "Using the latest technologies and best practices",
      icon: "⚡",
    },
    {
      title: "User Focused",
      description: "Creating experiences that users love",
      icon: "❤️",
    },
    {
      title: "Performance First",
      description: "Optimized for speed and efficiency",
      icon: "⚙️",
    },
  ]

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
          <div className="text-center space-y-6">
            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-rotate" />
            </div>
            <p className="text-lg font-semibold gradient-text">Loading Portfolio...</p>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-background text-foreground overflow-hidden smooth-scroll">
      {/* Animated background gradient with mouse follower */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-accent/5 pointer-events-none" />
      <div
        className="fixed w-96 h-96 rounded-full bg-primary/10 blur-[100px] pointer-events-none -z-10 transition-all duration-1000 ease-out"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
        }}
      />
      <div
        className="fixed w-64 h-64 rounded-full bg-accent/10 blur-[80px] pointer-events-none -z-10 transition-all duration-700 ease-out"
        style={{
          left: `${mousePosition.x - 128}px`,
          top: `${mousePosition.y - 128}px`,
        }}
      />

      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent"}`}
      >
        {/* Scroll Progress Bar */}
        <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">Portfolio</div>
          <div className="hidden md:flex gap-8">
            {["about", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`capitalize transition-all text-sm font-medium ${
                  activeSection === item
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
            <Link
              href="/profile"
              className="capitalize transition-all text-sm font-medium text-accent hover:text-primary border-b-2 border-transparent hover:border-primary pb-1"
            >
              Profile
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-24 sm:py-40 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-sm font-semibold text-accent tracking-widest uppercase animate-in fade-in-up" style={{ animationDelay: '0.1s' }}>Fullstack Developer</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight animate-in fade-in-up" style={{ animationDelay: '0.2s' }}>
                  Building the <span className="gradient-text">Future</span> of Web
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-in fade-in-up" style={{ animationDelay: '0.3s' }}>
                  I craft beautiful, performant web applications that solve real problems. Specializing in React,
                  Node.js, and modern web technologies.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 animate-in fade-in-up" style={{ animationDelay: '0.4s' }}>
                <button
                  onClick={() => setActiveSection("projects")}
                  className="group px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-[0_0_30px_rgba(112,85,255,0.4)] transition-all hover-lift flex items-center gap-2 relative overflow-hidden"
                >
                  <span className="relative z-10">View My Work</span>
                  <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <button
                  onClick={() => setActiveSection("contact")}
                  className="group px-8 py-3 border-2 border-accent text-accent rounded-full font-semibold hover:bg-accent/10 transition-all relative overflow-hidden"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0 bg-accent/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </button>
              </div>

              <div className="flex gap-6 pt-4 animate-in fade-in-up" style={{ animationDelay: '0.5s' }}>
                <a href="#" className="group relative p-2 text-muted-foreground hover:text-primary transition-colors">
                  <Github size={24} className="group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                </a>
                <a href="#" className="group relative p-2 text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                </a>
                <a href="#" className="group relative p-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={24} className="group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl animate-pulse-slow" />
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-card to-card/50 border border-primary/30 overflow-hidden glow-effect animate-float">
                <img src="/developer-profile-illustration.jpg" alt="Profile" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/20 opacity-50" />
              </div>
              {/* Decorative floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </section>

        <TechScroll />

        <BannerScroll slides={bannerSlides} />

        <section className="py-16 mb-20">
          <h2 className="text-4xl font-bold mb-12 gradient-text">My Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            {expertise.map((item, idx) => (
              <ExpertiseCard
                key={idx}
                {...item}
              />
            ))}
          </div>
        </section>

        {/* About Section */}
        {activeSection === "about" && (
          <section className="py-20 space-y-16 animate-in fade-in duration-500">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 gradient-text">About Me</h2>
              <div className="space-y-6 max-w-3xl">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With 5+ years of experience building web applications, I've developed a deep passion for creating
                  user-centric solutions that combine elegant design with robust architecture. My journey started with
                  frontend development, but I quickly realized the power of understanding the full stack.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, I work across the entire stack—from crafting intuitive React interfaces to designing scalable
                  backend systems with Node.js and PostgreSQL. I'm proficient in TypeScript, which has significantly
                  improved my code quality and developer experience.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me contributing to open-source projects, writing technical articles,
                  or exploring new technologies to stay ahead of the curve.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items], idx) => (
                <SkillCategory
                  key={category}
                  category={category}
                  skills={items}
                  index={idx}
                />
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <section className="py-20 space-y-12 animate-in fade-in duration-500">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text">
              red Projects</h2>
            <div className="grid auto-rows-max md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                  
                  index={idx}
                />
              ))}
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <section className="py-20 space-y-12 animate-in fade-in duration-500">
            <div className="max-w-3xl">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">Let's Work Together</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Mail, label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
                { icon: Github, label: "GitHub", value: "github.com/yourname", href: "https://github.com" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yourname", href: "https://linkedin.com" },
              ].map((contact, idx) => (
                <ContactCard
                  key={idx}
                  {...contact}
                />
              ))}
            </div>

            {/* Contact Form */}
            <form className="max-w-2xl space-y-6 bg-card border border-border rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(112,85,255,0.4)] transition-all"
              >
                Send Message
              </button>
            </form>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-24 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 Your Name. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com" className="hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com" className="hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com" className="hover:text-primary transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
      </div>
    </>
  )
}
