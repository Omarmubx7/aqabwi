"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FramerTextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export const FramerTextReveal = ({
    text,
    className,
    delay = 0,
}: FramerTextRevealProps) => {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any, // Cast to any to avoid strict type mismatch with Variants definition
        hidden: {
            opacity: 0,
            x: -20,
            y: 10,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any,
    };

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center" }}
            variants={container}
            initial="hidden"
            whileInView="visible" // Animate when in view
            viewport={{ once: true }}
            className={cn("flex flex-wrap", className)}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    style={{ marginRight: "0.25em" }}
                    key={index}
                    className="inline-block"
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};
