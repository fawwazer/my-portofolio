# 🎨 Panduan Kustomisasi Portfolio

Panduan lengkap untuk mengkustomisasi portfolio Anda.

## 📝 Informasi Pribadi

### 1. Ubah Nama dan Tagline
File: `app/page.tsx`

```tsx
// Line ~170
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
  Building the <span className="gradient-text">Future</span> of Web
</h1>
```

Ubah teks sesuai keinginan Anda.

### 2. Deskripsi Singkat
File: `app/page.tsx`

```tsx
// Line ~175
<p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
  I craft beautiful, performant web applications...
</p>
```

### 3. About Section
File: `app/page.tsx` - Section `activeSection === "about"`

```tsx
// Line ~303-315
<p className="text-lg text-muted-foreground leading-relaxed">
  With 5+ years of experience building web applications...
</p>
```

## 🔗 Social Media Links

File: `app/page.tsx`

```tsx
// Line ~243-253
<a href="#" className="group relative p-2...">  // Ubah href dengan link Anda
  <Github size={24} />
</a>
<a href="#" className="group relative p-2...">  // LinkedIn
  <Linkedin size={24} />
</a>
<a href="#" className="group relative p-2...">  // Email
  <Mail size={24} />
</a>
```

Juga di footer:
```tsx
// Line ~450-460
<a href="https://github.com" className="hover:text-primary...">
  GitHub
</a>
```

## 🛠️ Skills & Technologies

### 1. Tech Stack Carousel
File: `components/tech-scroll.tsx`

```tsx
const technologies = [
  { name: "React", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
  // Tambahkan tech stack Anda di sini
]
```

### 2. Skills Grid
File: `app/page.tsx`

```tsx
// Line ~69-73
const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma ORM"],
  tools: ["Git", "Docker", "AWS", "GraphQL", "REST APIs"],
}
```

## 💼 Projects

File: `app/page.tsx`

```tsx
// Line ~26-61
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack MERN application...",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/ecommerce-dashboard.png",  // Letakkan gambar di folder public/
    link: "#",  // Link ke project atau GitHub
    size: "large",  // "large" atau "small" untuk ukuran card
  },
  // Tambahkan project Anda di sini
]
```

### Tips untuk Images:
1. Letakkan gambar di folder `public/`
2. Gunakan format: `/nama-file.png`
3. Ukuran rekomendasi: 1200x800px untuk large, 800x600px untuk small
4. Format: JPG, PNG, atau WebP

## 🎓 Experience & Education

File: `app/profile/page.tsx`

### Experience
```tsx
// Line ~9-48
const experience = [
  {
    title: "Senior Fullstack Developer",
    company: "Tech Innovation Labs",
    period: "2023 - Present",
    description: "Leading development of...",
    highlights: [
      "Built 5+ production applications...",
      "Improved application performance...",
    ],
  },
  // Tambahkan pengalaman Anda
]
```

### Education
```tsx
// Line ~50-60
const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "State University",
    year: "2019",
    details: "GPA: 3.8/4.0 - Specialized in...",
  },
  // Tambahkan pendidikan Anda
]
```

### Certifications
```tsx
// Line ~62-68
const certifications = [
  "AWS Certified Solutions Architect - Associate",
  "MongoDB University Certified Developer",
  // Tambahkan sertifikasi Anda
]
```

## 🎨 Warna & Theme

File: `app/globals.css`

### Light Mode
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --primary: #7055ff;      /* Warna utama - ubah sesuai brand Anda */
  --primary-foreground: #ffffff;
  --accent: #ff6b9d;       /* Warna aksen - komplementer dengan primary */
  --card: #ffffff;
  --border: #e5e7eb;
  --muted-foreground: #6b7280;
}
```

### Dark Mode
```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
    --primary: #8b74ff;
    --primary-foreground: #ffffff;
    --accent: #ff79a8;
    --card: #1a1a1a;
    --border: #2a2a2a;
    --muted-foreground: #9ca3af;
  }
}
```

### Rekomendasi Kombinasi Warna:

**Purple & Pink (Default)**
- Primary: `#7055ff`
- Accent: `#ff6b9d`

**Blue & Orange**
- Primary: `#3b82f6`
- Accent: `#f97316`

**Green & Yellow**
- Primary: `#10b981`
- Accent: `#fbbf24`

**Red & Purple**
- Primary: `#ef4444`
- Accent: `#a855f7`

## 📧 Contact Information

### Email di Form
File: `app/page.tsx`

```tsx
// Line ~405
{ icon: Mail, label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
```

### Contact Form Action
File: `app/page.tsx` - Line ~420

Tambahkan handler untuk form submission:
```tsx
<form onSubmit={handleSubmit} className="max-w-2xl...">
```

Dan buat function handler:
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  // Tambahkan logic untuk send email
  // Bisa menggunakan EmailJS, SendGrid, atau API sendiri
}
```

## 🖼️ Gambar & Assets

### Profile Image
File: `app/page.tsx` - Line ~260

```tsx
<img src="/developer-profile-illustration.jpg" alt="Profile" />
```

Letakkan gambar Anda di `public/developer-profile-illustration.jpg`

### Favicon & Icons
Letakkan icon di folder `public/`:
- `icon-light-32x32.png`
- `icon-dark-32x32.png`
- `icon.svg`
- `apple-icon.png`

### OG Image (untuk Social Media)
Letakkan di `public/og-image.jpg` (1200x630px)

## 🔍 SEO & Metadata

File: `app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: {
    default: "Portfolio - Fullstack Developer",  // Ubah dengan nama Anda
    template: "%s | Fullstack Developer Portfolio"
  },
  description: "Showcasing innovative...",  // Deskripsi Anda
  keywords: ["fullstack developer", ...],  // Keywords relevan
  authors: [{ name: "Your Name" }],  // Nama Anda
  metadataBase: new URL("https://yourwebsite.com"),  // Domain Anda
  openGraph: {
    url: "https://yourwebsite.com",
    title: "Fullstack Developer Portfolio",
    siteName: "Portfolio",
  },
  twitter: {
    creator: "@yourusername",  // Twitter handle Anda
  },
}
```

## ⚡ Tips Tambahan

### 1. Animasi Speed
Ubah kecepatan animasi di `app/globals.css`:

```css
/* Lebih cepat */
.animate-scroll {
  animation: scroll 20s linear infinite;  /* default: 40s */
}

/* Lebih lambat */
.animate-banner {
  animation: banner 60s linear infinite;  /* default: 30s */
}
```

### 2. Hover Effect Intensity
Ubah intensitas shadow di components:

```tsx
// Lebih subtle
hover:shadow-[0_0_15px_rgba(112,85,255,0.2)]

// Lebih intense
hover:shadow-[0_0_40px_rgba(112,85,255,0.6)]
```

### 3. Disable Loading Screen
File: `app/page.tsx`

```tsx
// Comment atau hapus state ini
// const [isLoading, setIsLoading] = useState(true)

// Dan hapus section loading screen
```

### 4. Navigation Items
File: `app/page.tsx` - Line ~148

```tsx
{["about", "projects", "contact"].map((item) => (
  // Tambahkan section baru di array ini
))}
```

## 🚀 Deploy

### Vercel (Recommended)
1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Deploy otomatis!

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`

### Custom Server
```bash
npm run build
npm start
```

---

💡 **Need Help?** Buka issue di GitHub atau hubungi saya!
