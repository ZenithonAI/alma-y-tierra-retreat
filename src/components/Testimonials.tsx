import { testimonials } from "@/lib/content";
import FadeIn from "./FadeIn";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-32 md:py-40 px-8 md:px-16 bg-sand/60 grain overflow-hidden"
    >
      {/* Decorative large quote mark */}
      <div className="absolute top-16 left-8 md:left-16 font-heading text-[20rem] leading-none text-terracotta-100/40 select-none pointer-events-none">
        &ldquo;
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Testimonials
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05]">
              What Past Guests
              <span className="italic font-light text-terracotta-500"> Say</span>
            </h2>
          </div>
        </FadeIn>

        {/* Featured testimonial — large editorial style */}
        <FadeIn delay={100}>
          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative pl-8 md:pl-12 border-l-2 border-gold/40">
              <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-charcoal leading-[1.4] italic font-light">
                &ldquo;{testimonials.items[0].quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-8 h-px bg-terracotta-400" />
                <div>
                  <p className="font-body font-medium text-charcoal text-sm tracking-wide">
                    {testimonials.items[0].name}
                  </p>
                  <p className="font-body text-xs text-charcoal-light/50 tracking-wider uppercase">
                    {testimonials.items[0].location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Supporting testimonials — smaller, side by side */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {testimonials.items.slice(1).map((item, i) => (
            <FadeIn key={item.name} delay={200 + i * 150} direction={i === 0 ? "left" : "right"}>
              <div className="relative">
                <div className="absolute -top-4 -left-2 font-heading text-6xl text-terracotta-200/50 select-none">
                  &ldquo;
                </div>
                <p className="text-charcoal-light/70 leading-[1.85] text-[15px] font-light italic pl-6 mb-6">
                  {item.quote}
                </p>
                <div className="pl-6 flex items-center gap-3">
                  <div className="w-5 h-px bg-gold/50" />
                  <p className="text-xs tracking-[0.15em] uppercase font-body">
                    <span className="text-charcoal">{item.name}</span>
                    <span className="text-charcoal-light/40"> / {item.location}</span>
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
