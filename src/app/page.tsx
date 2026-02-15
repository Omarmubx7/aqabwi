import dynamicImport from "next/dynamic";
import Hero from "@/components/sections/hero";

const Portfolio = dynamicImport(() => import("@/components/sections/portfolio"), { ssr: true });
const Services = dynamicImport(() => import("@/components/sections/services"), { ssr: true });
const SocialProof = dynamicImport(() => import("@/components/sections/social-proof"), { ssr: true });
const FAQ = dynamicImport(() => import("@/components/sections/faq"), { ssr: true });
const Contact = dynamicImport(() => import("@/components/sections/contact"), { ssr: true });

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
