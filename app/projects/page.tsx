"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  Bot,
  Layers,
} from "lucide-react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | "web" | "mobile" | "ai">("all");

  const projects = [
    {
      id: 1,
      title: "Rumah Pekerja Indonesia",
      category: "web",
      description:
        "Platform ekosistem digital nasional yang menghubungkan tenaga kerja Indonesia dengan peluang kerja internasional, pelatihan vokasi/bahasa, dan forum komunitas terintegrasi.",
      role: "Lead Architect & Fullstack Developer",
      tags: ["Laravel (PHP)", "MySQL", "Node.js", "Python", "REST API"],
      link: "https://app.rumahpekerja.id",
      github: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Rumah Pekerja Indonesia Mobile",
      category: "mobile",
      description:
        "Aplikasi mobile cross-platform dengan arsitektur offline-first, notifikasi real-time push, dan optimasi jaringan low-bandwidth untuk pekerja di seluruh daerah.",
      role: "Mobile Developer",
      tags: [
        "React Native",
        "Expo",
        "Node.js",
        "Express",
        "MySQL",
        "WebSocket",
      ],
      link: "#",
      github: "#",
      featured: true,
    },
    {
      id: 3,
      title: "GameWorks: AI Game Curator",
      category: "ai",
      description:
        "Aplikasi kurator game berbasis AI yang merekomendasikan permainan sesuai preferensi pengguna menggunakan Google Gemini AI dan RAWG API.",
      role: "Fullstack Developer",
      tags: [
        "React.js",
        "Node.js",
        "Gemini AI",
        "PostgreSQL",
        "AWS",
        "Firebase",
      ],
      link: "#",
      github: "https://github.com",
      featured: false,
    },
    {
      id: 4,
      title: "Facebook Clone Mobile App",
      category: "mobile",
      description:
        "Aplikasi mobile clone platform media sosial Facebook yang direkayasa ulang menggunakan React Native, Expo, dan Apollo GraphQL Server.",
      role: "Mobile Developer",
      tags: [
        "React Native",
        "Expo",
        "Apollo Server",
        "MongoDB",
        "AWS",
        "Redis",
      ],
      link: "#",
      github: "https://github.com",
      featured: false,
    },
    {
      id: 5,
      title: "Website E-Shop",
      category: "web",
      description:
        "Platform e-commerce meja furniture full-stack dengan implementasi Next.js SSR & CSR untuk pencapaian SEO dan kecepatan respons optimal.",
      role: "Fullstack Developer",
      tags: ["Next.js", "React.js", "MongoDB", "Vercel"],
      link: "#",
      github: "https://github.com",
      featured: false,
    },
  ];

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter,
  );

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Header Nav */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-[#090D16]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              MNF.
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 hover:border-emerald-500/40 transition-all text-sm font-medium text-slate-300">
            <ArrowLeft size={18} />
            Beranda
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            Portofolio Proyek
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-4 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Kumpulan Karya & Aplikasi
          </h1>
          <p className="text-slate-400 text-lg mt-3">
            Daftar proyek web dan aplikasi mobile yang pernah saya rancang dan
            kembangkan, berfokus pada performa dan pengalaman pengguna.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-slate-800 pb-6">
          {[
            { id: "all", label: "Semua Proyek", icon: Layers },
            { id: "web", label: "Web Applications", icon: Globe },
            { id: "mobile", label: "Mobile Apps", icon: Smartphone },
            { id: "ai", label: "AI Integrations", icon: Bot },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  filter === tab.id
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                }`}>
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-all hover:-translate-y-1 shadow-xl relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                    {project.role}
                  </span>
                  <div className="flex gap-2 text-slate-400">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-emerald-400 transition-colors p-1">
                        <Github size={18} />
                      </a>
                    )}
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-emerald-400 transition-colors p-1">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono text-slate-300 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
