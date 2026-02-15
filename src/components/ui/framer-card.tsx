"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface FramerCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
}

const FramerCard = React.forwardRef<HTMLDivElement, FramerCardProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={cn(
                    "relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-card-foreground shadow-sm transition-colors hover:bg-white/10",
                    className
                )}
                {...props}
            >
                {/* Glow effect on hover */}
                <motion.div
                    className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ filter: "blur(40px)" }}
                />
                {children}
            </motion.div>
        );
    }
);

FramerCard.displayName = "FramerCard";

export { FramerCard };
