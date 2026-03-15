import { pricing } from "@/lib/content";
import FadeIn from "./FadeIn";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-16 md:py-20 px-8 md:px-16 overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-32 left-0 w-96 h-96 bg-forest-100/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-32 right-0 w-80 h-80 bg-terracotta-100/30 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Pricing
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05] mb-6">
              Investment
              <span className="italic font-light text-terracotta-500"> in Yourself</span>
            </h2>
            <p className="text-charcoal/65 max-w-xl mx-auto text-[15px] leading-relaxed">
              {pricing.subheading}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 md:gap-6">
          {pricing.options.map((option, i) => (
            <FadeIn key={option.name} delay={i * 150} direction={i === 0 ? "left" : "right"}>
              <div
                className={`relative group h-full ${
                  option.highlighted ? "md:-mt-4 md:mb-4" : ""
                }`}
              >
                {/* Card */}
                <div
                  className={`relative h-full p-10 md:p-12 transition-all duration-500 ${
                    option.highlighted
                      ? "bg-charcoal text-cream"
                      : "bg-white border border-charcoal/5"
                  }`}
                >
                  {/* Corner accents */}
                  <div
                    className={`absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 transition-colors duration-500 ${
                      option.highlighted
                        ? "border-gold/60"
                        : "border-terracotta-200/40 group-hover:border-gold/60"
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 transition-colors duration-500 ${
                      option.highlighted
                        ? "border-gold/60"
                        : "border-terracotta-200/40 group-hover:border-gold/60"
                    }`}
                  />

                  {option.highlighted && (
                    <div className="mb-6">
                      <span className="inline-block font-body text-[10px] tracking-[0.3em] uppercase text-gold border border-gold/30 px-4 py-1.5">
                        Best Value
                      </span>
                    </div>
                  )}

                  <h3 className="font-heading text-2xl mb-2 tracking-wide">
                    {option.name}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-heading text-5xl md:text-6xl font-light">
                      {option.price}
                    </span>
                  </div>
                  <p
                    className={`text-xs tracking-[0.15em] uppercase font-body mb-2 ${
                      option.highlighted ? "text-cream/70" : "text-charcoal/50"
                    }`}
                  >
                    {option.period}
                  </p>
                  <p
                    className={`text-sm mb-8 ${
                      option.highlighted ? "text-gold/80" : "text-terracotta-400"
                    }`}
                  >
                    {option.note}
                  </p>

                  {/* Divider */}
                  <div
                    className={`h-px mb-8 ${
                      option.highlighted ? "bg-cream/10" : "bg-charcoal/5"
                    }`}
                  />

                  <ul className="space-y-4 mb-10">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <svg
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            option.highlighted ? "text-gold" : "text-forest-500"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span
                          className={`${
                            option.highlighted
                              ? "text-cream/85"
                              : "text-charcoal/70"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`block text-center font-body text-sm tracking-[0.1em] uppercase py-4 transition-all duration-500 ${
                      option.highlighted
                        ? "bg-terracotta-500 text-cream hover:bg-terracotta-600"
                        : "border border-charcoal/15 text-charcoal hover:bg-charcoal hover:text-cream"
                    }`}
                  >
                    {option.cta}
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
