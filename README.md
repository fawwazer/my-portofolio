# 🚀 Portfolio Website - Fullstack Developer

Sebuah website portfolio modern dan interaktif yang dibangun dengan Next.js 16, React 19, dan Tailwind CSS 4.

## ✨ Fitur Utama

### 🎨 Desain & Animasi
- **Gradient Animations**: Text dan background dengan animasi gradient yang menarik
- **Hover Effects**: Efek interaktif pada semua elemen (cards, buttons, icons)
- **Parallax Mouse Follower**: Background yang mengikuti gerakan mouse
- **Floating Animations**: Elemen-elemen yang mengambang dengan animasi smooth
- **Loading Screen**: Animasi loading dengan spinner gradient saat pertama kali membuka website
- **Scroll Progress Bar**: Bar progress di navigation yang menunjukkan posisi scroll
- **Scroll to Top Button**: Tombol floating untuk kembali ke atas halaman

### 🎯 Komponen Interaktif
- **Tech Stack Carousel**: Infinite scrolling showcase teknologi dengan hover effects
- **Project Gallery**: Grid masonry dengan berbagai ukuran card dan animasi hover
- **Animated Buttons**: Buttons dengan ripple effect dan gradient transitions
- **Social Media Icons**: Icons dengan scale animation dan background glow
- **Form Inputs**: Input fields dengan focus effects dan validation styling

### 📱 Responsive Design
- Fully responsive untuk semua ukuran layar (mobile, tablet, desktop)
- Adaptive navigation dengan mobile-friendly menu
- Optimized images dan lazy loading

### ⚡ Performance
- **Next.js 16** dengan Turbopack untuk build yang super cepat
- **React 19** dengan server components
- **CSS Animations** menggunakan pure CSS untuk performa optimal
- **Code splitting** otomatis
- **SEO Optimized** dengan metadata lengkap

### 🎭 Sections
1. **Hero Section**: Intro dengan animated text dan CTA buttons
2. **Tech Stack**: Scrolling carousel menampilkan teknologi
3. **Expertise**: Cards menampilkan keahlian dengan icons
4. **About**: Informasi tentang developer dan skill set
5. **Projects**: Portfolio projects dengan filtering dan hover effects
6. **Contact**: Form kontak dengan validation
7. **Profile Page**: Halaman terpisah dengan experience, education, certifications

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.6
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Language**: TypeScript 5

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ 
- npm atau yarn

### Installation

```bash
# Clone repository
git clone <your-repo-url>

# Navigate to project
cd my-portofolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 📁 Project Structure

```
my-portofolio/
├── app/
│   ├── globals.css          # Global styles & animations
│   ├── layout.tsx           # Root layout dengan SEO metadata
│   ├── page.tsx             # Homepage dengan semua sections
│   └── profile/
│       └── page.tsx         # Profile page detail
├── components/
│   ├── tech-scroll.tsx      # Tech stack carousel
│   └── scroll-to-top.tsx    # Scroll to top button
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## 🎨 Customization

### Mengubah Warna
Edit variables di `app/globals.css`:

```css
:root {
  --primary: #7055ff;      /* Warna utama */
  --accent: #ff6b9d;       /* Warna aksen */
  --background: #ffffff;   /* Background */
  --foreground: #171717;   /* Text color */
}
```

### Menambahkan Projects
Edit array `projects` di `app/page.tsx`:

```tsx
const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Description",
    tags: ["React", "Node.js"],
    image: "/your-image.png",
    link: "https://your-link.com",
    size: "large", // atau "small"
  },
]
```

### Mengubah Konten
- **Personal Info**: Edit di `app/page.tsx` dan `app/profile/page.tsx`
- **Skills**: Edit array `skills` di `app/page.tsx`
- **Experience**: Edit array `experience` di `app/profile/page.tsx`
- **Social Links**: Edit href di social media icons

## 📦 Build untuk Production

```bash
# Build aplikasi
npm run build

# Start production server
npm start
```

## 🔧 Scripts Available

```bash
npm run dev      # Development server
npm run build    # Build untuk production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🎯 Peningkatan yang Telah Dilakukan

1. ✅ **CSS Global Enhancement**
   - Custom animations (gradient-shift, float, shimmer, rotate)
   - Custom scrollbar dengan gradient
   - Hover effects dan transitions
   - Glassmorphism effects

2. ✅ **Interactive Hero Section**
   - Mouse follower background effect
   - Floating profile image dengan decorative elements
   - Stagger animations untuk text
   - Enhanced button animations dengan ripple effect

3. ✅ **Enhanced Components**
   - Tech scroll dengan color coding dan better animations
   - Project cards dengan image overlay effects
   - Improved form styling
   - Better navigation dengan scroll progress

4. ✅ **Loading & Scroll Enhancements**
   - Loading screen saat first load
   - Scroll progress indicator
   - Scroll to top button
   - Smooth scroll behavior

5. ✅ **SEO & Metadata**
   - Complete OpenGraph tags
   - Twitter Card metadata
   - Structured data
   - Optimized meta descriptions

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [@yourname](https://linkedin.com/in/yourname)
- Email: hello@example.com

---

⭐ Jangan lupa beri star jika project ini membantu Anda!
