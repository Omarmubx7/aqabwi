"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FramerButton } from "@/components/ui/framer-button";
import { FramerTextReveal } from "@/components/ui/framer-text-reveal";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { DATA } from "@/lib/data";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
                <Image
                    src="/aqabwi1.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
            </motion.div>

            <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6"
                >
                    <FramerTextReveal
                        text={DATA.profile.displayName}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-outfit justify-center text-white drop-shadow-lg"
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl font-light"
                >
                    {DATA.profile.bio.split("||")[0]} <br />
                    <span className="text-white/80 font-medium">Capture Your Moments in Stunning Detail</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    {/* Link import needed at top of file, ensuring it's available or adding it */}
                    <div className="flex gap-4">
                        <a href="#contact">
                            <FramerButton size="lg" className="text-lg px-8 py-6 rounded-full w-full sm:w-auto">
                                Book a Session
                            </FramerButton>
                        </a>

                        <a href="#work">
                            <FramerButton variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full w-full sm:w-auto">
                                View Gallery <ArrowRight className="ml-2 w-5 h-5" />
                            </FramerButton>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
