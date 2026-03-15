"use client";

import { useState, useEffect } from "react";
import { siteConfig, navLinks } from "@/lib/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_rgba(201,169,110,0.2)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 flex items-center justify-between h-20">
        <a href="#hero" className="font-heading text-2xl tracking-wide group">
          <span className={`transition-colors duration-500 ${scrolled ? "text-charcoal" : "text-cream"}`}>
            Sol
          </span>
          <span className={`italic font-light transition-colors duration-500 ${scrolled ? "text-gold" : "text-gold-light"}`}>
            {" "}y{" "}
          </span>
          <span className={`transition-colors duration-500 ${scrolled ? "text-charcoal" : "text-cream"}`}>
            Sombra
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-[13px] tracking-[0.12em] uppercase font-body transition-colors duration-300 hover:text-terracotta-500 ${
                  scrolled ? "text-charcoal-light" : "text-cream/70"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 relative w-8 h-8"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute left-0 block w-8 h-[1.5px] transition-all duration-300 ${
              scrolled ? "bg-charcoal" : "bg-cream"
            } ${isOpen ? "rotate-45 top-[15px]" : "top-[10px]"}`}
          />
          <span
            className={`absolute left-0 block w-5 h-[1.5px] transition-all duration-300 ${
              scrolled ? "bg-charcoal" : "bg-cream"
            } ${isOpen ? "opacity-0" : "top-[17px]"}`}
          />
          <span
            className={`absolute left-0 block w-8 h-[1.5px] transition-all duration-300 ${
              scrolled ? "bg-charcoal" : "bg-cream"
            } ${isOpen ? "-rotate-45 top-[15px]" : "top-[24px]"}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-cream/98 backdrop-blur-md border-t border-gold/10 px-8 pb-8 pt-4">
          {/* Greca accent */}
          <div className="greca-border mb-6 opacity-50" />
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-charcoal-light hover:text-terracotta-500 transition-colors font-body text-[13px] tracking-[0.12em] uppercase border-b border-sand last:border-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
