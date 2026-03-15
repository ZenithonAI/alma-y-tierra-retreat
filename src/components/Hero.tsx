import Image from "next/image";
import { hero, siteConfig } from "@/lib/content";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] overflow-hidden">
      <Image
        src={hero.image}
        alt="Oaxaca landscape"
        fill
        className="object-cover scale-105"
        priority
        sizes="100vw"
      />

      {/* Single warm gradient — enough for text readability without killing the image */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-charcoal/5" />
      {/* Warm terracotta tint for vibrancy instead of more darkness */}
      <div className="absolute inset-0 bg-gradient-to-br from-terracotta-900/25 via-transparent to-forest-900/15" />

      {/* Content — editorial lower-left positioning */}
      <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24 px-8 md:px-16 lg:px-24 max-w-6xl">
        {/* Greca accent line */}
        <div className="w-16 h-px bg-gold mb-8 animate-hero-text" />

        <p className="font-body text-gold-light text-xs md:text-sm tracking-[0.35em] uppercase mb-6 animate-hero-text-delay-1">
          {siteConfig.dates} &mdash; {siteConfig.location}
        </p>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-cream leading-[0.9] mb-8 animate-hero-text-delay-1 drop-shadow-[0_2px_30px_rgba(0,0,0,0.3)]">
          <span className="block">Reconnect</span>
          <span className="block italic font-light text-gold drop-shadow-[0_2px_20px_rgba(201,169,110,0.3)]">with Yourself</span>
          <span className="block">in Oaxaca</span>
        </h1>

        <p className="text-cream/85 text-base md:text-lg max-w-lg leading-relaxed mb-10 font-light animate-hero-text-delay-2 drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)]">
          {hero.subheading}
        </p>

        <div className="flex items-center gap-6 animate-hero-text-delay-3">
          <a
            href={hero.ctaHref}
            className="group inline-flex items-center gap-3 bg-terracotta-500 hover:bg-terracotta-400 text-cream font-body font-medium px-8 py-4 transition-all duration-500 tracking-wide text-sm uppercase shadow-[0_4px_30px_rgba(196,87,46,0.4)]"
          >
            {hero.cta}
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
          <span className="hidden md:block w-12 h-px bg-cream/40" />
          <span className="hidden md:block text-cream/60 text-xs tracking-[0.2em] uppercase font-body">
            12 spots only
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-3 animate-hero-text-delay-3">
        <span className="text-cream/40 text-[10px] tracking-[0.3em] uppercase font-body rotate-90 origin-center translate-y-6">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-cream/50 to-transparent" />
      </div>
    </section>
  );
}
