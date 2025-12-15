# 📦 Components Documentation

Dokumentasi lengkap untuk semua komponen reusable yang ada di folder `components/`.

## 📑 Daftar Komponen

### 1. **ProjectCard** (`project-card.tsx`)

Komponen kartu untuk menampilkan project portfolio.

#### Props:
```typescript
interface ProjectCardProps {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  link: string
  size: "large" | "small"
  index: number
}
```

#### Penggunaan:
```tsx
import { ProjectCard } from '@/components'

<ProjectCard
  id={1}
  title="E-Commerce Platform"
  description="Full-stack MERN application"
  tags={["React", "Node.js"]}
  image="/project.png"
  link="https://example.com"
  size="large"
  index={0}
/>
```

#### Fitur:
- ✅ Responsive size (large/small)
- ✅ Hover effect dengan image zoom
- ✅ Gradient overlay on hover
- ✅ Tag badges dengan hover animation
- ✅ External link icon dengan rotation effect

---

### 2. **ExpertiseCard** (`expertise-card.tsx`)

Komponen kartu untuk menampilkan area keahlian.

#### Props:
```typescript
interface ExpertiseCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay: number
  offset: string
}
```

#### Penggunaan:
```tsx
import { ExpertiseCard } from '@/components'
import { Code2 } from 'lucide-react'

<ExpertiseCard
  icon={Code2}
  title="Frontend Development"
  description="Building responsive interfaces"
  delay={0}
  offset="lg:translate-y-0"
/>
```

#### Fitur:
- ✅ Animated icon dengan gradient background
- ✅ Stagger animation dengan custom delay
- ✅ Hover effects (scale, rotate, gradient text)
- ✅ Custom offset untuk positioning

---

### 3. **SkillCategory** (`skill-category.tsx`)

Komponen untuk menampilkan kategori skill dengan badge.

#### Props:
```typescript
interface SkillCategoryProps {
  category: string
  skills: string[]
  index: number
}
```

#### Penggunaan:
```tsx
import { SkillCategory } from '@/components'

<SkillCategory
  category="frontend"
  skills={["React", "Next.js", "TypeScript"]}
  index={0}
/>
```

#### Fitur:
- ✅ Gradient category title
- ✅ Skill badges dengan hover scale
- ✅ Stagger animation per badge
- ✅ Automatic vertical offset pada middle card

---

### 4. **ContactCard** (`contact-card.tsx`)

Komponen kartu untuk informasi kontak.

#### Props:
```typescript
interface ContactCardProps {
  icon: LucideIcon
  label: string
  value: string
  href: string
}
```

#### Penggunaan:
```tsx
import { ContactCard } from '@/components'
import { Mail } from 'lucide-react'

<ContactCard
  icon={Mail}
  label="Email"
  value="hello@example.com"
  href="mailto:hello@example.com"
/>
```

#### Fitur:
- ✅ Gradient icon background
- ✅ Scale & rotate animation on hover
- ✅ External link support
- ✅ Accessible dengan proper rel attributes

---

### 5. **BannerScroll** (`banner-scroll.tsx`)

Komponen infinite scrolling banner untuk highlight features.

#### Props:
```typescript
interface BannerSlide {
  title: string
  description: string
  icon: string
}

interface BannerScrollProps {
  slides: BannerSlide[]
}
```

#### Penggunaan:
```tsx
import { BannerScroll } from '@/components'

const slides = [
  {
    title: "Scalable Solutions",
    description: "Building applications that grow",
    icon: "🚀"
  }
]

<BannerScroll slides={slides} />
```

#### Fitur:
- ✅ Infinite scroll animation
- ✅ Pause on hover
- ✅ Gradient background
- ✅ Responsive card sizing
- ✅ Icon scale animation on hover

---

### 6. **TechScroll** (`tech-scroll.tsx`)

Komponen infinite scrolling untuk tech stack showcase.

#### Props:
Tidak ada props (sudah hardcoded dengan teknologi)

#### Penggunaan:
```tsx
import { TechScroll } from '@/components'

<TechScroll />
```

#### Fitur:
- ✅ Infinite scroll animation
- ✅ Color-coded technology badges
- ✅ Gradient fade effects di edges
- ✅ Scale & shadow on hover
- ✅ Triple duplication untuk seamless scroll

---

### 7. **ScrollToTop** (`scroll-to-top.tsx`)

Komponen floating button untuk scroll ke atas halaman.

#### Props:
Tidak ada props

#### Penggunaan:
```tsx
import { ScrollToTop } from '@/components'

<ScrollToTop />
```

#### Fitur:
- ✅ Auto show/hide berdasarkan scroll position (500px)
- ✅ Smooth scroll behavior
- ✅ Gradient background dengan glow effect
- ✅ Fixed positioning di bottom-right
- ✅ Fade in animation

---

## 🎨 Custom Animations

Semua komponen menggunakan animasi yang didefinisikan di `globals.css`:

- `hover-lift`: TranslateY dengan shadow
- `animate-in fade-in-up`: Fade in dari bawah
- `gradient-text`: Gradient color shifting
- `glow-effect`: Shadow glow pada hover
- `animate-float`: Floating animation
- `animate-pulse-slow`: Slow pulse effect
- `animate-rotate`: Continuous rotation
- `shimmer`: Shimmer overlay effect

## 📦 Barrel Export

Semua komponen di-export melalui `components/index.ts` untuk kemudahan import:

```tsx
// ❌ Sebelum (multiple imports)
import { ProjectCard } from '../components/project-card'
import { ExpertiseCard } from '../components/expertise-card'
import { SkillCategory } from '../components/skill-category'

// ✅ Sesudah (single import)
import { ProjectCard, ExpertiseCard, SkillCategory } from '../components'
```

## 🔧 Customization Tips

### Mengubah Warna Komponen
Edit CSS variables di `globals.css`:
```css
:root {
  --primary: #7055ff;
  --accent: #ff6b9d;
}
```

### Menambahkan Komponen Baru
1. Buat file di folder `components/`
2. Export komponen
3. Tambahkan ke `components/index.ts`
4. Import dari barrel export

### Mengubah Animasi
Edit atau tambahkan keyframes di `globals.css`:
```css
@keyframes custom-animation {
  from { transform: translateY(0); }
  to { transform: translateY(-10px); }
}
```

## 🎯 Best Practices

1. **TypeScript Props**: Selalu definisikan interface untuk props
2. **Accessibility**: Gunakan semantic HTML dan ARIA labels
3. **Performance**: Hindari re-render dengan proper memoization
4. **Responsiveness**: Test di berbagai screen sizes
5. **Reusability**: Buat komponen yang generic dan configurable

## 📝 Example Usage

Lihat `app/page.tsx` untuk contoh implementasi lengkap semua komponen.

---

**Created with ❤️ for Portfolio Website**
