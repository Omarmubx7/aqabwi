"use client";

import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FramerCard } from "@/components/ui/framer-card";
import { Camera, Video, Edit, Aperture } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        icon: Camera,
        title: "Photography",
        description: "Professional visuals for events, portraits, and commercial needs. We capture the essence of the moment with high-end equipment and lighting."
    },
    {
        icon: Video,
        title: "Videography",
        description: "Cinematic storytelling for brands, music videos, and special occasions. From concept to final cut, typical turnaround 5-7 days."
    },
    {
        icon: Edit,
        title: "Post-Production",
        description: "Advanced editing, color grading, and sound design to elevate raw footage into a masterpiece. Specialized in DaVinci Resolve & Premiere Pro."
    },
    {
        icon: Aperture, // Using Aperture as generic lens/drone alternative if needed, or stick to 3.
        title: "Drone / Aerial",
        description: "Breathtaking aerial perspectives (where permitted) adding production value to your projects. Certified piloting."
    }
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2">What We Do</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit">Our Expertise</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <FramerCard className="h-full group hover:border-primary/50">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base leading-relaxed group-hover:text-foreground/80 transition-colors">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </FramerCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
