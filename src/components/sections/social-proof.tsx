"use client";

import { motion } from "framer-motion";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const clients = [
    { name: "Samsung", logo: "/clients/SAMSUNG.png" },
    { name: "GIZ", logo: "/clients/GIZ.png" },
    { name: "Hilton", logo: "/clients/HILTON.png" },
    { name: "JEG", logo: "/clients/JEG.png" },
];

const software = [
    { name: "Adobe Illustrator", logo: "/software-apps/Illustrator.png" },
    { name: "Adobe Lightroom", logo: "/software-apps/LIGHTROOM.png" },
    { name: "Adobe Photoshop", logo: "/software-apps/PHOTOSHOP.png" },
    { name: "Adobe Premiere Pro", logo: "/software-apps/Premier.png" },
    { name: "Adobe After Effects", logo: "/software-apps/afftereffect.png" },
];

export default function SocialProof() {
    return (
        <section className="py-20 bg-background border-y border-border/40 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-12"
                >
                    Trusted by Industry Leaders
                </motion.p>

                {/* Clients Marquee */}
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-8 md:shadow-xl mb-16">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {clients.map((client) => (
                            <div key={client.name} className="flex items-center justify-center mx-8 md:mx-16 transition-all duration-300">
                                <div className="relative h-20 w-40 md:h-24 md:w-48">
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
                </div>

                {/* Software Icons Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">Software Expertise</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        <TooltipProvider>
                            {software.map((tool) => (
                                <Tooltip key={tool.name}>
                                    <TooltipTrigger asChild>
                                        <div className="group relative flex items-center justify-center bg-muted/30 p-4 rounded-2xl hover:bg-muted/50 transition-colors cursor-pointer ring-1 ring-white/5 hover:ring-white/20 overflow-visible">
                                            <div className="relative h-16 w-16 md:h-20 md:w-20">
                                                <Image
                                                    src={tool.logo}
                                                    alt={tool.name}
                                                    fill
                                                    className="object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{tool.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </TooltipProvider>
                    </div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border/40 pt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-4xl md:text-5xl font-bold font-outfit text-primary">500+</span>
                        <span className="text-sm text-muted-foreground mt-2">Projects Completed</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-4xl md:text-5xl font-bold font-outfit text-primary">98%</span>
                        <span className="text-sm text-muted-foreground mt-2">Client Satisfaction</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-4xl md:text-5xl font-bold font-outfit text-primary">5+</span>
                        <span className="text-sm text-muted-foreground mt-2">Years Experience</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-4xl md:text-5xl font-bold font-outfit text-primary">24h</span>
                        <span className="text-sm text-muted-foreground mt-2">Response Time</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
