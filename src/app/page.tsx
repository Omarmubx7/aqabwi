import dynamic from "next/dynamic";
import Hero from "@/components/sections/hero";

const Portfolio = dynamic(() => import("@/components/sections/portfolio"), { ssr: true });
const Services = dynamic(() => import("@/components/sections/services"), { ssr: true });
const SocialProof = dynamic(() => import("@/components/sections/social-proof"), { ssr: true });
const FAQ = dynamic(() => import("@/components/sections/faq"), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/contact"), { ssr: true });

export const dynamic = "force-static";

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
