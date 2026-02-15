"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FramerButton } from "@/components/ui/framer-button";
import { cn } from "@/lib/utils";
import { DATA } from "@/lib/data";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
                isScrolled ? "bg-background/80 backdrop-blur-md border-border/40 py-2" : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between overflow-visible">
                <Link href="/" className="flex items-center gap-2 whitespace-nowrap overflow-visible p-2">
                    <span className={cn("text-xl font-bold font-outfit tracking-tighter leading-none", isScrolled ? "text-foreground" : "text-white")}>
                        AQABAWI<span className="text-primary">.</span>
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    {["Work", "Services", "About", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={cn(
                                "text-sm font-medium hover:text-primary transition-colors",
                                isScrolled ? "text-muted-foreground" : "text-white/80 hover:text-white"
                            )}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                <Link href="#contact">
                    <FramerButton
                        size="sm"
                        className={cn(
                            "rounded-full px-6 font-semibold",
                            isScrolled ? "" : "bg-white text-black hover:bg-gray-200"
                        )}
                    >
                        Book Now
                    </FramerButton>
                </Link>
            </div>
        </header>
    );
}
