import Hero from "@/components/sections/hero";
import Portfolio from "@/components/sections/portfolio";
import Services from "@/components/sections/services";
import SocialProof from "@/components/sections/social-proof";
import FAQ from "@/components/sections/faq";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialProof />
      <Services />
      <Portfolio />
      <FAQ />
      <Contact />
    </main>
  );
}
