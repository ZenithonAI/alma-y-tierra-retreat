"use client";

import { useState } from "react";
import { faq } from "@/lib/content";
import FadeIn from "./FadeIn";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-12 md:py-14 px-8 md:px-16 bg-sand/40">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
              FAQ
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-bark leading-[1.05]">
              Common
              <span className="italic text-terracotta-600"> Questions</span>
            </h2>
          </div>
        </FadeIn>

        <div>
          {faq.items.map((item, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className="border-b border-charcoal/8 last:border-none">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-start justify-between py-7 text-left group"
                >
                  <span className="flex items-start gap-5">
                    <span className="font-heading text-2xl text-terracotta-300/60 leading-none mt-1 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-heading text-xl md:text-2xl text-bark group-hover:text-terracotta-600 transition-colors duration-300 leading-snug">
                      {item.question}
                    </span>
                  </span>
                  <span
                    className={`ml-6 mt-2 flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-500 ${
                      openIndex === i ? "rotate-45" : ""
                    }`}
                  >
                    <svg
                      className="w-4 h-4 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" d="M12 4v16m-8-8h16" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    openIndex === i ? "max-h-80 pb-8" : "max-h-0"
                  }`}
                >
                  <p className="pl-11 md:pl-[3.25rem] text-body leading-[1.85] text-[15px] max-w-xl">
                    {item.answer}
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
