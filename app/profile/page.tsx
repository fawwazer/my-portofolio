"use client"

import { ArrowLeft, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const router = useRouter()

  const experience = [
    {
      title: "Senior Fullstack Developer",
      company: "Tech Innovation Labs",
      period: "2023 - Present",
      description:
        "Leading development of scalable web applications using React, Next.js, and Node.js. Architecting microservices and managing teams of 3-5 developers.",
      highlights: [
        "Built 5+ production applications handling 100k+ users",
        "Improved application performance by 45% through optimization",
        "Led mentorship program for junior developers",
      ],
    },
    {
      title: "Fullstack Developer",
      company: "Digital Solutions Inc",
      period: "2021 - 2023",
      description:
        "Developed full-stack features for e-commerce platform using MERN stack. Implemented real-time features with WebSocket and optimized database queries.",
      highlights: [
        "Developed e-commerce features processing $2M+ annually",
        "Reduced API response time from 800ms to 150ms",
        "Built comprehensive admin dashboard",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Agency",
      period: "2019 - 2021",
      description:
        "Created responsive and interactive web interfaces using React and Vue.js. Collaborated with designers and backend developers.",
      highlights: [
        "Delivered 20+ client projects with 95%+ satisfaction rate",
        "Implemented accessibility standards (WCAG 2.1)",
        "Built reusable component library",
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "State University",
      year: "2019",
      details: "GPA: 3.8/4.0 - Specialized in Web Development and Software Engineering",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "Code Academy",
      year: "2018",
      details: "Intensive 12-week program focusing on MERN stack and modern development practices",
    },
  ]

  const certifications = [
    "AWS Certified Solutions Architect - Associate",
    "Google Cloud Professional Data Engineer",
    "MongoDB University Certified Developer",
    "Kubernetes Administrator (CKA)",
    "React & GraphQL Advanced Patterns",
  ]

  const languages = [
    { name: "Indonesian", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "JavaScript/TypeScript", level: "Expert" },
    { name: "SQL", level: "Advanced" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">
            Portfolio
          </Link>
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-card/50 transition-all text-sm font-medium"
          >
            <ArrowLeft size={18} />
            Back
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Profile Image */}
            <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-xl" />
                <div className="relative w-48 h-48 rounded-2xl bg-gradient-to-br from-card to-card/50 border-2 border-primary/30 overflow-hidden glow-effect">
                  <img src="/developer-profile-illustration.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Quick Contact */}
              <div className="w-full space-y-3">
                <a
                  href="mailto:hello@example.com"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(112,85,255,0.4)] transition-all"
                >
                  <Mail size={18} />
                  Contact Me
                </a>
                <a
                  href="/resume.pdf"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-6 justify-center lg:justify-start">
                <a href="#" className="p-3 bg-card border border-border rounded-lg hover:border-primary transition-all">
                  <Github size={20} />
                </a>
                <a href="#" className="p-3 bg-card border border-border rounded-lg hover:border-primary transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-3 bg-card border border-border rounded-lg hover:border-primary transition-all">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Profile Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <p className="text-accent text-sm font-semibold uppercase tracking-widest">Full Stack Developer</p>
                <h1 className="text-5xl font-bold mt-2 gradient-text">Your Name</h1>
                <p className="text-2xl text-muted-foreground mt-2">Building elegant solutions to complex problems</p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I'm a passionate full-stack web developer with 5+ years of experience crafting beautiful and performant
                web applications. I specialize in modern JavaScript frameworks, cloud architecture, and mentoring junior
                developers. My mission is to turn innovative ideas into scalable digital solutions.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="p-4 bg-card border border-border rounded-lg">
                  <p className="text-3xl font-bold gradient-text">50+</p>
                  <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg">
                  <p className="text-3xl font-bold gradient-text">5+</p>
                  <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg">
                  <p className="text-3xl font-bold gradient-text">30+</p>
                  <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-8">Professional Experience</h2>
          <div className="space-y-6">
            {experience.map((job, idx) => (
              <div
                key={idx}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all hover-lift"
              >
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                    <p className="text-primary font-semibold">{job.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                    {job.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{job.description}</p>
                <ul className="space-y-2">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-8">Education</h2>
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div key={idx} className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all hover-lift">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:gradient-text transition-all">{edu.degree}</h3>
                    <p className="text-accent font-semibold">{edu.school}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">{edu.year}</span>
                </div>
                <p className="text-muted-foreground text-sm">{edu.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Certifications */}
        <section className="mb-16 grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold gradient-text mb-8">Certifications</h2>
            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover:translate-x-2 hover:shadow-lg"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-primary-foreground font-bold text-sm">✓</span>
                  </div>
                  <span className="text-foreground group-hover:text-primary transition-colors">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold gradient-text mb-8">Languages & Skills</h2>
            <div className="space-y-4">
              {languages.map((lang, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">{lang.name}</span>
                    <span className="text-sm text-accent font-medium px-3 py-1 bg-accent/10 rounded-full">{lang.level}</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-2.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-1000 ease-out animate-in"
                      style={{
                        width:
                          lang.level === "Native" || lang.level === "Expert"
                            ? "100%"
                            : lang.level === "Fluent" || lang.level === "Advanced"
                              ? "85%"
                              : "70%",
                        animationDelay: `${idx * 100}ms`,
                        backgroundSize: "200% 100%",
                        animation: "shimmer 3s infinite, fade-in-up 0.6s ease-out forwards"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-2xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 animate-pulse-slow" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Ready to Work Together?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              I'm always interested in hearing about new projects and opportunities. Let's connect and create something
              amazing!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:hello@example.com"
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-[0_0_30px_rgba(112,85,255,0.5)] transition-all hover-lift relative overflow-hidden"
              >
                <span className="relative z-10">Send Email</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <Link
                href="/"
                className="px-8 py-4 border-2 border-accent text-accent rounded-full font-semibold hover:bg-accent/10 transition-all hover:scale-105"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
