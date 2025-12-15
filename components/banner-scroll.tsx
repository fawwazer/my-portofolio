"use client"

interface BannerSlide {
  title: string
  description: string
  icon: string
}

interface BannerScrollProps {
  slides: BannerSlide[]
}

export function BannerScroll({ slides }: BannerScrollProps) {
  return (
    <section className="py-12 mb-8">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 p-1">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl" />
        <div className="relative overflow-hidden rounded-lg">
          <div className="flex animate-banner gap-4">
            {[...slides, ...slides].map((slide, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 min-w-full md:min-w-[calc(50%-8px)] lg:min-w-[calc(33.333%-8px)] px-6 py-8 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg hover:border-primary/50 transition-all hover:bg-card/80 group cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {slide.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text">
                  {slide.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
