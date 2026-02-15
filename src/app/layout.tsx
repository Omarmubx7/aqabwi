import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Outfit for headings as per user preference
import "./globals.css";
import { cn } from "@/lib/utils";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SmoothScroll from "@/components/ui/smooth-scroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Abdallah Alfayoumi (AQABAWI) - Filmmaker & Photographer",
  description: "Capture Your Moments in Stunning Detail. Professional photography, videography, and editing services in Aqaba and Amman, Jordan.",
  keywords: ["Photographer", "Videographer", "Filmmaker", "Editor", "Aqaba", "Amman", "Jordan", "Aqabawi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable,
        outfit.variable
      )}>
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
