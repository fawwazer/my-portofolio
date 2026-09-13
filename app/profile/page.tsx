"use client";

import {
  ArrowLeft,
  Download,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Award,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  // Pengalaman Kerja Fawwaz
  const experience = [
    {
      title: "Fullstack & Mobile Developer (Rumah Pekerja Indonesia)",
      company: "Kolaborasi Indonesia One Management & Kemnaker RI",
      period: "Januari 2026 - Sekarang",
      description:
        "Merancang dan membangun ekosistem digital nasional untuk menghubungkan tenaga kerja Indonesia dengan peluang kerja internasional, pelatihan skill, dan forum komunitas.",
      highlights: [
        "Membangun web app (app.rumahpekerja.id) menggunakan Laravel (PHP), MySQL, Node.js, Python, dan REST API architecture.",
        "Membangun aplikasi mobile cross-platform (React Native, Express, WebSocket) yang dioptimasi untuk jaringan low-bandwidth.",
        "Mengintegrasikan fitur low-latency, offline-first capabilities, dan keamanan data tingkat tinggi.",
      ],
    },
    {
      title: "IT Support",
      company: "PT. Karsa Buana Lestari",
      period: "Januari 2021 - Agustus 2025",
      description:
        "Mengelola infrastruktur IT perusahaan, perangkat keras, dan membuat program otomasi form internal.",
      highlights: [
        "Mengelola jaringan terpisah di 3 kantor operasional.",
        "Mengembangkan program khusus untuk pemrosesan submit form kebutuhan kantor.",
        "Menangani pemeliharaan hardware dan perbaikan sistem komunikasi internal.",
      ],
    },
  ];

  // Pendidikan Fawwaz
  const education = [
    {
      degree: "Full Stack JavaScript Immersive Program",
      school: "Hacktiv8 Indonesia",
      year: "Agustus 2025 – November 2025",
      details:
        "Program boot camp intensif berfokus pada ekosistem JavaScript modern (MERN stack, React Native, GraphQL, PostgreSQL).",
    },
    {
      degree: "S1 Sistem Informasi (IPK: 3.32 / 4.00)",
      school: "Universitas Gunadarma",
      year: "2017 – 2021",
      details:
        "Mempelajari dasar-dasar ilmu komputer, perancangan sistem informasi, basis data, dan rekayasa perangkat lunak.",
    },
  ];

  // Sertifikasi Fawwaz
  const certifications = [
    "Hacktiv8 - Fullstack JavaScript Immersive (Nov 2025)",
    "HackerRank - Software Engineer Intern (Nov 2025)",
    "HackerRank - Problem Solving (Basic) (Nov 2025)",
    "HackerRank - JavaScript (Basic) (Nov 2025)",
    "HackerRank - React (Basic) (Nov 2025)",
    "HackerRank - CSS (Basic) (Nov 2025)",
  ];

  // Bahasa & Skills Fawwaz
  const languages = [
    { name: "Bahasa Indonesia", level: "Native" },
    { name: "JavaScript / TypeScript", level: "Expert" },
    { name: "PHP (Laravel)", level: "Advanced" },
    { name: "SQL (MySQL / PostgreSQL)", level: "Advanced" },
  ];

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Header Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-[#090D16]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              MNF.
            </span>
          </Link>
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 hover:border-emerald-500/40 transition-all text-sm font-medium text-slate-300">
            <ArrowLeft size={18} />
            Kembali
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Quick Actions Card */}
            <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-3xl blur-xl opacity-40" />
                <div className="relative w-48 h-48 rounded-2xl bg-slate-900 border-2 border-emerald-500/30 overflow-hidden flex items-center justify-center p-4">
                  <div className="text-center">
                    <span className="text-6xl font-black bg-gradient-to-br from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                      MNF
                    </span>
                    <p className="text-xs font-mono text-slate-400 mt-2">
                      Jakarta, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="w-full space-y-3">
                <a
                  href="mailto:mn.fawwaz99@gmail.com"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all">
                  <Mail size={18} />
                  Kirim Email
                </a>
                <a
                  href="/cv_fawwaz.pdf"
                  download="CV_Muhammad_Nurtyas_Fawwaz.pdf"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-slate-700 bg-slate-900 text-slate-200 rounded-xl font-semibold hover:border-emerald-500/40 hover:bg-slate-800 transition-all text-sm">
                  <Download size={18} />
                  Unduh CV Fawwaz
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-6 justify-center lg:justify-start">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 hover:text-emerald-400 transition-all">
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 hover:text-emerald-400 transition-all">
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://wa.me/6287796548343"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 hover:text-emerald-400 transition-all">
                  <MessageSquare size={18} />
                </a>
              </div>
            </div>

            {/* Profile Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  Software Developer
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold mt-3 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Muhammad Nurtyas Fawwaz
                </h1>
                <p className="text-xl text-slate-400 mt-2 font-medium">
                  Specializing in React Native, Next.js, & Laravel Applications
                </p>
              </div>

              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                Memulai karier dari IT Support, ketertarikan mendalam pada
                pemrograman membawa saya beralih penuh menjadi Software
                Developer. Setelah menyelesaikan pelatihan *Full Stack
                JavaScript* intensif di Hacktiv8, saya aktif membangun aplikasi
                web dan mobile berskala nasional, seperti platform **Rumah
                Pekerja Indonesia**.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-4">
                <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl">
                  <p className="text-3xl font-extrabold text-emerald-400">5+</p>
                  <p className="text-xs text-slate-400 mt-1">Proyek Utama</p>
                </div>
                <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl">
                  <p className="text-3xl font-extrabold text-cyan-400">6+</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Sertifikasi Teknis
                  </p>
                </div>
                <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl">
                  <p className="text-3xl font-extrabold text-teal-300">3.32</p>
                  <p className="text-xs text-slate-400 mt-1">
                    IPK S1 Sistem Informasi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent mb-8">
            Pengalaman Kerja
          </h2>
          <div className="space-y-6">
            {experience.map((job, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-emerald-500/40 transition-all">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">
                      {job.title}
                    </h3>
                    <p className="text-emerald-400 text-sm font-medium">
                      {job.company}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold border border-emerald-500/20">
                    {job.period}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {job.description}
                </p>
                <ul className="space-y-2">
                  {job.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-xs sm:text-sm text-slate-300">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent mb-8">
            Pendidikan
          </h2>
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-emerald-500/40 transition-all">
                <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-100">
                      {edu.degree}
                    </h3>
                    <p className="text-emerald-400 text-sm font-medium">
                      {edu.school}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs">
                    {edu.year}
                  </span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm mt-2">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Skills */}
        <section className="mb-16 grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent mb-8">
              Sertifikasi
            </h2>
            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition-all">
                  <CheckCircle2
                    size={18}
                    className="text-emerald-400 flex-shrink-0"
                  />
                  <span className="text-slate-200 text-sm font-medium">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent mb-8">
              Bahasa & Keahlian Utama
            </h2>
            <div className="space-y-4">
              {languages.map((lang, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-slate-200">
                      {lang.name}
                    </span>
                    <span className="text-xs text-emerald-400 font-medium px-2.5 py-0.5 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                      {lang.level}
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                      style={{
                        width:
                          lang.level === "Native" || lang.level === "Expert"
                            ? "100%"
                            : "85%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
