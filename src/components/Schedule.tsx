import { schedule } from "@/lib/content";
import FadeIn from "./FadeIn";

export default function Schedule() {
  return (
    <section id="schedule" className="relative py-16 md:py-20 px-8 md:px-16 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-sand/50 to-cream" />

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
              7 Days of Transformation
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05]">
              Your Week
              <span className="italic font-light text-terracotta-500"> at a Glance</span>
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-0">
          {schedule.days.map((day, i) => (
            <FadeIn key={day.day} delay={i * 80}>
              <div className="group grid md:grid-cols-12 gap-4 md:gap-8 items-baseline py-8 border-b border-charcoal/8 hover:bg-sand/30 transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8">
                {/* Large day number */}
                <div className="md:col-span-2">
                  <span className="font-heading text-6xl md:text-7xl font-light text-terracotta-200 group-hover:text-terracotta-400 transition-colors duration-500 leading-none">
                    {day.day.replace("Day ", "")}
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-3">
                  <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold block mb-1">
                    {day.day}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl text-charcoal leading-tight">
                    {day.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-7">
                  <p className="text-charcoal/70 leading-[1.85] text-[15px] md:pl-8 md:border-l border-gold/20">
                    {day.description}
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
