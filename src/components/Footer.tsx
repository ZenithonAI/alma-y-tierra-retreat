import { footer, siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70 relative overflow-hidden">
      {/* Greca border at top */}
      <div className="greca-border-dark" />

      <div className="grain absolute inset-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div>
            <p className="font-heading text-3xl text-cream mb-3">
              <span>Alma</span>
              <span className="italic font-light text-gold"> y </span>
              <span>Tierra</span>
            </p>
            <p className="text-cream/30 text-sm font-light leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-5 font-body">
              Navigate
            </p>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6">
              {["About", "Schedule", "Pricing", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-cream/40 hover:text-cream transition-colors text-sm font-light"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-5 font-body">
              Details
            </p>
            <div className="space-y-3">
              <p className="text-cream/40 text-sm font-light">{siteConfig.dates}</p>
              <p className="text-cream/40 text-sm font-light">{siteConfig.location}</p>
              <p className="text-cream/40 text-sm font-light">12 guests max</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-cream/20 text-xs font-light">{footer.text}</span>
          <span className="text-cream/20 text-xs font-light">
            Built by{" "}
            <a
              href={footer.builtByUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/40 hover:text-gold transition-colors"
            >
              {footer.builtBy}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
