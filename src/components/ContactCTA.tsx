"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/lib/content";
import FadeIn from "./FadeIn";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function ContactCTA() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;

    // Demo mode: simulate submission. Replace with real Formspree fetch for production.
    if (contact.formspreeEndpoint.includes("your-form-id")) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("sent");
      form.reset();
      return;
    }

    const data = new FormData(form);

    try {
      const res = await fetch(contact.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-16 md:py-20 px-8 md:px-16 overflow-hidden bg-sand/40">
      {/* Background warmth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-terracotta-100/20 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left — decorative + text */}
          <FadeIn direction="left" className="lg:col-span-5">
            <div>
              <div className="greca-border mb-10 w-20" />

              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Get in Touch
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05] mb-6">
                Ready to
                <span className="block italic font-light text-terracotta-500">
                  Begin?
                </span>
              </h2>
              <p className="text-charcoal/70 leading-[1.85] text-[15px] mb-12">
                {contact.subheading}
              </p>

              {/* Decorative greca pattern block */}
              <div className="hidden lg:block">
                <div className="flex gap-3 items-start">
                  <div className="greca-vertical h-32 opacity-40" />
                  <div className="space-y-6 pt-2">
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-1 font-body">
                        Location
                      </p>
                      <p className="text-charcoal/60 text-sm">
                        Oaxaca de Juarez, Mexico
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-1 font-body">
                        Dates
                      </p>
                      <p className="text-charcoal/60 text-sm">
                        November 8–14, 2026
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-1 font-body">
                        Availability
                      </p>
                      <p className="text-charcoal/60 text-sm">
                        12 spots — limited enrollment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn direction="right" delay={200} className="lg:col-span-7">
            {status === "sent" ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center py-20">
                  <div className="w-16 h-px bg-gold mx-auto mb-8" />
                  <p className="font-heading text-3xl text-charcoal mb-3">
                    Message Sent
                  </p>
                  <p className="text-charcoal/60 text-sm">
                    Thank you for reaching out. We&apos;ll be in touch within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[11px] tracking-[0.2em] uppercase text-charcoal/60 mb-3 font-body font-medium"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-charcoal/20 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-terracotta-500 transition-colors text-[15px]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] tracking-[0.2em] uppercase text-charcoal/60 mb-3 font-body font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-charcoal/20 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-terracotta-500 transition-colors text-[15px]"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] tracking-[0.2em] uppercase text-charcoal/60 mb-3 font-body font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-charcoal/20 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-terracotta-500 transition-colors resize-none text-[15px]"
                    placeholder="Tell us about yourself and any questions you have..."
                  />
                </div>

                {status === "error" && (
                  <p className="text-terracotta-500 text-sm font-light">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex items-center gap-4 bg-charcoal hover:bg-charcoal-light disabled:opacity-50 text-cream font-body text-sm tracking-[0.1em] uppercase px-10 py-5 transition-all duration-500"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
