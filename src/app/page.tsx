import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Inclusions from "@/components/Inclusions";
import Schedule from "@/components/Schedule";
import Guide from "@/components/Guide";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Inclusions />
        <Schedule />
        <Guide />
        <Testimonials />
        <Pricing />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
