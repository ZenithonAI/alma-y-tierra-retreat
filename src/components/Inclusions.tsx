import { inclusions } from "@/lib/content";
import FadeIn from "./FadeIn";

const iconSvgs: Record<string, React.ReactNode> = {
  "Daily Yoga Sessions": (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-8 h-8">
      <circle cx="16" cy="7" r="3" />
      <path d="M16 12v6m-6 4l6-4 6 4m-12 0v6m12-6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "Farm-to-Table Meals": (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-8 h-8">
      <ellipse cx="16" cy="20" rx="12" ry="4" />
      <path d="M16 6v8m-4 0c0-3 2-6 4-8 2 2 4 5 4 8" strokeLinecap="round" />
    </svg>
  ),
  "Boutique Accommodations": (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-8 h-8">
      <path d="M4 28V14l12-8 12 8v14H4z" strokeLinejoin="round" />
      <rect x="12" y="18" width="8" height="10" />
      <path d="M8 17v-1m16 1v-1" strokeLinecap="round" />
    </svg>
  ),
  "Therapeutic Bodywork": (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-8 h-8">
      <path d="M8 24c2-4 6-12 8-16 2 4 6 12 8 16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 20h12" strokeLinecap="round" />
      <circle cx="16" cy="6" r="2" />
    </svg>
  ),
  "Cultural Excursions": (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-8 h-8">
      <path d="M6 26l6-14 4 6 4-10 6 18" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="22" cy="8" r="3" />
    </svg>
  ),
  "Meditation & Breathwork": (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-8 h-8">
      <circle cx="16" cy="16" r="10" />
      <circle cx="16" cy="16" r="5" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    </svg>
  ),
};

export default function Inclusions() {
  return (
    <section id="inclusions" className="relative py-32 md:py-40 px-8 md:px-16 bg-charcoal grain overflow-hidden">
      {/* Warm accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-terracotta-900/20 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Everything You Need
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.05]">
              {inclusions.heading.split(" ")[0]}
              <span className="italic font-light text-gold">
                {" "}{inclusions.heading.split(" ").slice(1).join(" ")}
              </span>
            </h2>
            <div className="greca-border-dark mx-auto mt-8 w-40" />
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/5">
          {inclusions.items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 100}>
              <div className="group bg-charcoal p-10 hover:bg-charcoal-light/80 transition-all duration-500 h-full relative">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/20 group-hover:border-gold/50 transition-colors duration-500" />

                <div className="text-gold/70 group-hover:text-gold transition-colors duration-500 mb-6">
                  {iconSvgs[item.title]}
                </div>
                <h3 className="font-heading text-xl text-cream mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-cream/50 leading-[1.8] text-sm font-light">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
