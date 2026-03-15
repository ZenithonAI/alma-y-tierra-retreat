import Image from "next/image";
import { guide } from "@/lib/content";
import FadeIn from "./FadeIn";

export default function Guide() {
  return (
    <section id="guide" className="relative py-32 md:py-0 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 min-h-[600px] lg:min-h-[700px]">
          {/* Image — dramatic 7-column portrait */}
          <FadeIn direction="left" className="lg:col-span-7 relative">
            <div className="relative h-[400px] lg:h-full min-h-[400px]">
              <Image
                src={guide.image}
                alt={guide.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-cream/30 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent lg:hidden" />
            </div>
          </FadeIn>

          {/* Text — 5 columns with vertical centering */}
          <div className="lg:col-span-5 flex items-center px-8 md:px-16 py-16 lg:py-24">
            <FadeIn direction="right" delay={200}>
              <div>
                <div className="greca-border mb-10 w-20" />

                <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
                  {guide.heading}
                </p>

                <h2 className="font-heading text-5xl md:text-6xl text-charcoal mb-2 leading-[0.95]">
                  {guide.name.split(" ")[0]}
                </h2>
                <h2 className="font-heading text-5xl md:text-6xl italic font-light text-terracotta-500 mb-6 leading-[0.95]">
                  {guide.name.split(" ")[1]}
                </h2>

                <p className="text-[11px] tracking-[0.15em] uppercase text-charcoal-light/50 mb-8 font-body">
                  {guide.credentials}
                </p>

                {guide.bio.map((p, i) => (
                  <p
                    key={i}
                    className="text-charcoal-light/75 leading-[1.85] mb-5 last:mb-0 text-[15px] font-light"
                  >
                    {p}
                  </p>
                ))}

                <div className="mt-10 flex items-center gap-4">
                  <div className="w-12 h-px bg-gold/50" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gold/70 font-body">
                    10+ Years Experience
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
