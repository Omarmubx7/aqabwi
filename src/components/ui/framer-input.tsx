"use client";

import * as React from "react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FramerInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const FramerInput = React.forwardRef<HTMLInputElement, FramerInputProps>(
    ({ className, type, ...props }, ref) => {
        const [isFocused, setIsFocused] = React.useState(false);

        return (
            <div className="relative">
                <input
                    type={type}
                    className={cn(
                        "flex h-12 w-full rounded-lg border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    ref={ref}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
                {/* Animated border bottom or ring */}
                <motion.div
                    initial={false}
                    animate={{ scaleX: isFocused ? 1 : 0, opacity: isFocused ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
                />
            </div>
        );
    }
);
FramerInput.displayName = "FramerInput";


export interface FramerTextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const FramerTextarea = React.forwardRef<HTMLTextAreaElement, FramerTextAreaProps>(
    ({ className, ...props }, ref) => {
        const [isFocused, setIsFocused] = React.useState(false);

        return (
            <div className="relative">
                <textarea
                    className={cn(
                        "flex min-h-[80px] w-full rounded-lg border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    ref={ref}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
                <motion.div
                    initial={false}
                    animate={{ scaleX: isFocused ? 1 : 0, opacity: isFocused ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
                />
            </div>
        );
    }
);
FramerTextarea.displayName = "FramerTextarea";

export { FramerInput, FramerTextarea };
