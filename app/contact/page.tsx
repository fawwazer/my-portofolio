"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  MessageSquare,
  Linkedin,
  Github,
  Send,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

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
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Information Side */}
          <div className="space-y-8">
            <div>
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                Hubungi Saya
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold mt-4 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Mari Bicara Proyek Baru
              </h1>
              <p className="text-slate-400 text-lg mt-3 leading-relaxed">
                Apakah Anda memiliki tawaran pekerjaan *Full-time*, proyek
                pembuatan aplikasi web/mobile, atau ingin sekadar berdiskusi
                teknis? Silakan hubungi saya melalui saluran di bawah ini.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:mn.fawwaz99@gmail.com"
                className="flex items-center gap-4 p-5 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-emerald-500/40 transition-all group">
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 group-hover:scale-110 transition-transform">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email Pribadi</p>
                  <p className="text-base font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors">
                    mn.fawwaz99@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/6287796548343"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-5 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-emerald-500/40 transition-all group">
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">WhatsApp / Telepon</p>
                  <p className="text-base font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors">
                    +62 877-9654-8343
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-slate-900/60 border border-slate-800 rounded-2xl">
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Lokasi Dominan</p>
                  <p className="text-base font-semibold text-slate-100">
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4 border-t border-slate-800">
              <p className="text-sm text-slate-400 mb-4">
                Profil Profesional & Kode:
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all text-sm font-medium">
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all text-sm font-medium">
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-2xl relative">
            <h2 className="text-2xl font-bold mb-6 text-slate-100">
              Kirim Pesan Langsung
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm flex items-center gap-3">
                <CheckCircle2 size={20} />
                Pesan Anda berhasil dikirim! Saya akan segera merespons.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2">
                  Nama Lengkap
                </label>
                <input
                  required
                  type="text"
                  placeholder="Masukkan nama Anda"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2">
                  Alamat Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="email@domain.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2">
                  Subjek / Topik
                </label>
                <input
                  required
                  type="text"
                  placeholder="Contoh: Penawaran Project Web / Mobile"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2">
                  Pesan
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tuliskan rincian pesan atau pertanyaan Anda di sini..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold rounded-xl hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2">
                <Send size={18} />
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
