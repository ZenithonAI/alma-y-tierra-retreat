import Image from "next/image";
import { about } from "@/lib/content";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-20 px-8 md:px-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-terracotta-100/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-forest-100/30 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Image — takes 7 columns, bleeds asymmetrically */}
          <FadeIn direction="left" className="lg:col-span-7 relative">
            <div className="relative">
              {/* Gold frame accent */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-gold/40" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-gold/40" />
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={about.image}
                  alt={about.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/10 to-transparent" />
              </div>
            </div>
          </FadeIn>

          {/* Text — 5 columns, overlaps image on desktop */}
          <FadeIn
            direction="right"
            delay={200}
            className="lg:col-span-5 lg:-ml-20 relative z-10"
          >
            <div className="bg-cream/95 backdrop-blur-sm p-8 md:p-12 lg:p-14">
              {/* Greca divider */}
              <div className="greca-border mb-8 w-24" />

              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                The Retreat
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal mb-8 leading-[1.05]">
                <span className="block">{about.heading.split(" ")[0]}</span>
                <span className="block italic font-light text-terracotta-500">
                  {about.heading.split(" ").slice(1).join(" ")}
                </span>
              </h2>

              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-charcoal/80 leading-[1.85] mb-5 last:mb-0 text-[15px]"
                >
                  {p}
                </p>
              ))}

              <div className="mt-10 flex items-center gap-4">
                <div className="w-8 h-px bg-gold" />
                <span className="text-xs tracking-[0.2em] uppercase text-gold font-body">
                  Max 12 guests
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
