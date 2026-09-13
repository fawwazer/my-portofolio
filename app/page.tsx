"use client";

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Code2,
  Database,
  Smartphone,
  Globe,
  MessageSquare,
  Award,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  TechScroll,
  ScrollToTop,
  ProjectCard,
  ExpertiseCard,
  SkillCategory,
  ContactCard,
  BannerScroll,
} from "../components";

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading animation
    setTimeout(() => setIsLoading(false), 800);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Proyek dari CV Fawwaz
  const projects = [
    {
      id: 1,
      title: "Rumah Pekerja Indonesia",
      description:
        "Platform ekosistem digital nasional untuk menghubungkan pekerja Indonesia dengan peluang kerja global, pelatihan skill, dan forum diskusi.",
      tags: ["Laravel", "PHP", "MySQL", "Node.js", "Python", "REST API"],
      image: "/projects/rumah-pekerja.jpg",
      link: "https://app.rumahpekerja.id",
      size: "large" as const,
    },
    {
      id: 2,
      title: "Rumah Pekerja Indonesia Mobile",
      description:
        "Aplikasi mobile cross-platform dengan fitur notifikasi real-time, lamaran 1-tap, dan optimasi low-bandwidth.",
      tags: ["React Native", "Node.js", "Express", "MySQL", "WebSocket"],
      image: "/projects/rumah-pekerja-mobile.jpg",
      link: "#",
      size: "small" as const,
    },
    {
      id: 3,
      title: "GameWorks: AI Game Curator",
      description:
        "Aplikasi kurator game berbasis AI yang memberikan rekomendasi game personal menggunakan Gemini AI dan RAWG API.",
      tags: ["React", "Node.js", "Gemini AI", "PostgreSQL", "AWS", "Firebase"],
      image: "/projects/gameworks.jpg",
      link: "#",
      size: "small" as const,
    },
    {
      id: 4,
      title: "Website E-Shop",
      description:
        "Platform e-commerce meja furniture full-stack dengan SSR/CSR Next.js untuk optimasi performa dan SEO.",
      tags: ["Next.js", "React.js", "MongoDB", "Vercel"],
      image: "/projects/eshop.jpg",
      link: "#",
      size: "small" as const,
    },
    {
      id: 5,
      title: "Facebook Clone Mobile App",
      description:
        "Aplikasi mobile clone Facebook menggunakan React Native & Expo yang terintegrasi dengan GraphQL Apollo Server.",
      tags: [
        "React Native",
        "Expo",
        "Apollo Server",
        "MongoDB",
        "AWS",
        "Redis",
      ],
      image: "/projects/facebook-clone.jpg",
      link: "#",
      size: "large" as const,
    },
  ];

  // Skills dari CV Fawwaz
  const skills = {
    frontend: [
      "React JS",
      "React Native",
      "Next.js",
      "Redux",
      "Apollo Client",
      "HTML & CSS",
    ],
    backend: [
      "Node JS",
      "Express",
      "Laravel (PHP)",
      "Sequelize",
      "PostgreSQL",
      "GraphQL",
      "MongoDB",
      "Redis",
      "REST API",
    ],
    tools: ["AWS", "Firebase", "Cloudflare", "Expo", "Vercel", "Git"],
  };

  // Expertise berbasis pengalaman Fawwaz
  const expertise = [
    {
      icon: Globe,
      title: "Fullstack Web Engineering",
      description:
        "Membangun sistem web scalable dan performa tinggi dengan Next.js, Laravel, dan Node.js",
      delay: 0,
      offset: "lg:translate-y-0",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Pengembangan aplikasi iOS & Android cross-platform dengan React Native & Expo",
      delay: 150,
      offset: "lg:translate-y-12",
    },
    {
      icon: Database,
      title: "Backend & Cloud Architecture",
      description:
        "Perancangan RESTful & GraphQL API, manajemen basis data (PostgreSQL/MongoDB), dan deployment cloud",
      delay: 300,
      offset: "lg:translate-y-0",
    },
  ];

  const bannerSlides = [
    {
      title: "Empowering National Workforce",
      description: "Developer utama platform Rumah Pekerja Indonesia",
      icon: "🇮🇩",
    },
    {
      title: "Cross-Platform Mobile Dev",
      description: "Spesialis React Native & Expo untuk performa tinggi",
      icon: "📱",
    },
    {
      title: "Fullstack JavaScript & PHP",
      description: "Menguasai Next.js, Node.js, Express, dan Laravel",
      icon: "⚡",
    },
    {
      title: "AI Integration",
      description: "Pengalaman mengintegrasikan AI Gemini & Cloud API",
      icon: "🤖",
    },
  ];

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] bg-[#090D16] flex items-center justify-center">
          <div className="text-center space-y-6">
            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-emerald-500/20" />
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-emerald-400 animate-spin" />
            </div>
            <p className="text-lg font-semibold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Memuat Portfolio Fawwaz...
            </p>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-[#090D16] text-slate-100 overflow-hidden smooth-scroll selection:bg-emerald-500/30 selection:text-emerald-300">
        {/* Animated background gradient dengan mouse follower */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/15 via-[#090D16] to-[#090D16] pointer-events-none" />
        <div
          className="fixed w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none -z-10 transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x - 250}px`,
            top: `${mousePosition.y - 250}px`,
          }}
        />
        <div
          className="fixed w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none -z-10 transition-all duration-700 ease-out"
          style={{
            left: `${mousePosition.x - 175}px`,
            top: `${mousePosition.y - 175}px`,
          }}
        />

        {/* Navigation */}
        <nav
          className={`sticky top-0 z-50 transition-all duration-300 ${
            isScrolled
              ? "border-b border-slate-800/80 bg-[#090D16]/80 backdrop-blur-xl shadow-lg shadow-black/20"
              : "bg-transparent"
          }`}>
          <div
            className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                MNF.
              </span>
            </Link>
            <div className="hidden md:flex gap-8 items-center">
              <Link
                href="/projects"
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm font-medium tracking-wide">
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm font-medium tracking-wide">
                Contact
              </Link>
              <Link
                href="/profile"
                className="px-4 py-2 text-sm font-medium rounded-full text-emerald-300 border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-500/60 transition-all">
                Full Profile & CV
              </Link>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="py-24 sm:py-36 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Software Developer
                  </div>
                  <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                    M. Nurtyas{" "}
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                      Fawwaz
                    </span>
                  </h1>
                  <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                    Fullstack & Mobile Developer berlokasi di Jakarta. Berfokus
                    pada pembangunan solusi web & mobile intuitif, scalable, dan
                    berdampak tinggi.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    href="/projects"
                    className="group px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold rounded-xl hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all flex items-center gap-2 relative overflow-hidden">
                    <span className="relative z-10">Lihat Portofolio</span>
                    <ArrowRight
                      size={18}
                      className="relative z-10 group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <Link
                    href="/contact"
                    className="group px-7 py-3.5 border border-slate-700 bg-slate-900/60 text-slate-200 rounded-xl font-semibold hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all">
                    Hubungi Saya
                  </Link>
                </div>

                <div className="flex gap-5 pt-2 text-slate-400">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-emerald-400 hover:border-emerald-500/40 transition-all">
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-emerald-400 hover:border-emerald-500/40 transition-all">
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:mn.fawwaz99@gmail.com"
                    className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-emerald-400 hover:border-emerald-500/40 transition-all">
                    <Mail size={20} />
                  </a>
                  <a
                    href="https://wa.me/6287796548343"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-emerald-400 hover:border-emerald-500/40 transition-all">
                    <MessageSquare size={20} />
                  </a>
                </div>
              </div>

              {/* Decorative Card Image/Illustration */}
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
                <div className="relative aspect-square rounded-2xl bg-slate-900/90 border border-emerald-500/30 overflow-hidden shadow-2xl p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      fawwaz-dev.ts
                    </span>
                  </div>

                  <div className="font-mono text-sm space-y-3 text-slate-300 my-auto">
                    <p className="text-emerald-400">
                      <span className="text-purple-400">const</span> developer =
                      &#123;
                    </p>
                    <p className="pl-4">
                      name:{" "}
                      <span className="text-cyan-300">
                        'Muhammad Nurtyas Fawwaz'
                      </span>
                      ,
                    </p>
                    <p className="pl-4">
                      role:{" "}
                      <span className="text-cyan-300">
                        'Fullstack Software Developer'
                      </span>
                      ,
                    </p>
                    <p className="pl-4">
                      location:{" "}
                      <span className="text-cyan-300">
                        'Jakarta, Indonesia'
                      </span>
                      ,
                    </p>
                    <p className="pl-4">
                      topTechStack: [
                      <span className="text-cyan-300">'React Native'</span>,{" "}
                      <span className="text-cyan-300">'Next.js'</span>,{" "}
                      <span className="text-cyan-300">'Laravel'</span>,{" "}
                      <span className="text-cyan-300">'Node.js'</span>],
                    </p>
                    <p className="pl-4">
                      education:{" "}
                      <span className="text-cyan-300">
                        'Hacktiv8 & Universitas Gunadarma'
                      </span>
                      ,
                    </p>
                    <p className="text-emerald-400">&#125;;</p>
                  </div>

                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">
                        Pendidikan Terakhir
                      </p>
                      <p className="text-xs font-semibold text-emerald-400">
                        Hacktiv8 & S1 Sistem Informasi
                      </p>
                    </div>
                    <Award className="text-emerald-400" size={24} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <TechScroll />
          <BannerScroll slides={bannerSlides} />

          {/* Keahlian Section */}
          <section className="py-16 mb-20">
            <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
              Keahlian Utama
            </h2>
            <div className="grid md:grid-cols-3 gap-8 relative">
              {expertise.map((item, idx) => (
                <ExpertiseCard key={idx} {...item} />
              ))}
            </div>
          </section>

          {/* About Section */}
          <section className="py-20 space-y-16 animate-in fade-in duration-500">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                Tentang Fawwaz
              </h2>
              <div className="space-y-6 max-w-3xl text-slate-300 leading-relaxed text-base">
                <p>
                  Karier saya dimulai di bidang IT Support[cite: 3]. Namun,
                  minat besar terhadap dunia pemrograman membuat saya mengambil
                  langkah strategis untuk beralih ke software engineering[cite:
                  3]. Saya menyelesaikan program *Full Stack JavaScript
                  Immersive* di **Hacktiv8**[cite: 3] untuk mempermudah transisi
                  karier saya ke pemrograman profesional.
                </p>
                <p>
                  Saat ini, saya berfokus pada pengembangan aplikasi web dan
                  mobile[cite: 3], salah satunya menjadi arsitek dan pengembang
                  utama platform **Rumah Pekerja Indonesia**[cite: 3]
                  (kolaborasi Indonesia One Management dan Kementerian
                  Ketenagakerjaan)[cite: 3]. Saya menguasai berbagai teknologi
                  mulai dari **React Native, Next.js, Node.js**, hingga
                  **Laravel & MySQL**[cite: 3].
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

          {/* Featured Projects Preview */}
          <section className="py-20 space-y-12 animate-in fade-in duration-500">
            <div className="flex justify-between items-end">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                Proyek Unggulan
              </h2>
              <Link
                href="/projects"
                className="text-emerald-400 hover:text-emerald-300 text-sm font-semibold flex items-center gap-1 group">
                Lihat Semua Proyek
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
            <div className="grid auto-rows-max md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.slice(0, 4).map((project, idx) => (
                <ProjectCard key={project.id} {...project} index={idx} />
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800/80 mt-24 py-12 bg-slate-950/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Muhammad Nurtyas Fawwaz. All
              rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition-colors">
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition-colors">
                LinkedIn
              </a>
              <a
                href="https://wa.me/6287796548343"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </footer>

        <ScrollToTop />
      </div>
    </>
  );
}
