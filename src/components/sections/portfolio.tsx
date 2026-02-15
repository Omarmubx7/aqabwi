"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FramerTiltCard } from "@/components/ui/framer-tilt-card";
import Image from "next/image";

// Local images from public folder
// Local images from public folder
const localImages = [
    "/aqabwi.jpg",
    "/aqabwi1.jpg",
    "/aqabwi3.jpg",
    "/aqabwi4.jpg",
    "/aqabwi5.jpg",
    "/11.jpeg",
    "/dsc-08633-copy.jpeg",
    "/dsc-09318-copy.jpeg",
    "/dsc-09874-copy.jpeg",
    "/whatsapp-image-1.jpeg",
    "/whatsapp-image-2.jpeg"
];

const portfolioItems = {
    photography: [
        { id: 1, src: localImages[0], alt: "Portrait Session", size: "tall" },
        { id: 2, src: localImages[1], alt: "Event Photography", size: "wide" },
        { id: 3, src: localImages[2], alt: "Product Shoot", size: "tall" },
        { id: 4, src: localImages[3], alt: "Landscape", size: "wide" },
        { id: 5, src: localImages[4], alt: "Lifestyle", size: "tall" },
        { id: 9, src: localImages[5], alt: "Cinematic Portrait", size: "tall" },
        { id: 10, src: localImages[6], alt: "Wedding Shot", size: "wide" },
        { id: 11, src: localImages[7], alt: "Commercial", size: "tall" },
        { id: 12, src: localImages[8], alt: "Fashion", size: "wide" },
        { id: 13, src: localImages[9], alt: "Street Photography", size: "tall" },
        { id: 14, src: localImages[10], alt: "Event Moments", size: "wide" },
    ],
    videography: [
        { id: 6, src: localImages[2], alt: "Music Video", type: "video" }, // Placeholder re-using image for now
        { id: 7, src: localImages[0], alt: "Commercial", type: "video" }, // Placeholder re-using image
    ],
    editing: [
        { id: 8, src: localImages[1], alt: "Color Grading Details" },
    ]
};

function ParallaxImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

    return (
        <div ref={ref} className={`relative w-full h-full overflow-hidden ${className}`}>
            <motion.div style={{ y, scale }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </motion.div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="text-white font-medium tracking-wide border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">View</span>
            </div>
        </div>
    );
}

function ScrollPlayVideo({ src }: { src: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect for video similar to images
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

    // Intersection observer for playing when in view
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        video.play().catch(() => {
                            // Autoplay might be blocked if not muted or user hasn't interacted
                            console.log("Autoplay prevented");
                        });
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.5 } // Play when 50% visible
        );

        observer.observe(video);

        return () => {
            if (video) observer.unobserve(video);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-full overflow-hidden bg-black">
            <motion.div style={{ y, scale }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                <video
                    ref={videoRef}
                    src={src}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                />
            </motion.div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="text-white font-medium tracking-wide border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">Playing</span>
            </div>
        </div>
    );
}

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState("photography");

    return (
        <section id="work" className="py-20 bg-background relative z-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-outfit mb-4"
                    >
                        Selected Work
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl"
                    >
                        A curation of moments captured in stunning detail. From intimate portraits to cinematic events.
                    </motion.p>
                </div>

                <Tabs defaultValue="photography" className="w-full flex flex-col items-center" onValueChange={setActiveTab}>
                    <TabsList className="mb-12 bg-muted/50 p-1 rounded-full backdrop-blur-sm sticky top-24 z-30">
                        <TabsTrigger value="photography" className="rounded-full px-6 py-2 data-[state=active]:bg-foreground data-[state=active]:text-background transition-all">Photography</TabsTrigger>
                        <TabsTrigger value="videography" className="rounded-full px-6 py-2 data-[state=active]:bg-foreground data-[state=active]:text-background transition-all">Videography</TabsTrigger>
                        <TabsTrigger value="editing" className="rounded-full px-6 py-2 data-[state=active]:bg-foreground data-[state=active]:text-background transition-all">Editing</TabsTrigger>
                    </TabsList>

                    {Object.entries(portfolioItems).map(([category, items]) => (
                        <TabsContent key={category} value={category} className="w-full">
                            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                                {items.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="break-inside-avoid"
                                    >
                                        <FramerTiltCard className="cursor-pointer aspect-[3/4]">
                                            <div className="relative w-full h-full overflow-hidden rounded-xl">
                                                {/* Simple conditional rendering for video vs image */}
                                                {(item as any).type === 'video' ? (
                                                    <ScrollPlayVideo src={item.src} />
                                                ) : (
                                                    <ParallaxImage src={item.src} alt={item.alt} />
                                                )}
                                            </div>
                                        </FramerTiltCard>
                                    </motion.div>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
}
