'use client';

import { motion } from "framer-motion";
import { useHaptics } from "@/hooks/use-haptics";
import { GlassPanel } from "./GlassPanel";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface PrismCardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const PrismCard = ({ children, className, onClick }: PrismCardProps) => {
    const { triggerHaptic } = useHaptics();
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            whileHover={{ y: -5 }}
            onHoverStart={() => {
                setHovered(true);
                triggerHaptic('light');
            }}
            onHoverEnd={() => setHovered(false)}
            onClick={() => {
                triggerHaptic('medium');
                onClick?.();
            }}
            className={cn("relative group cursor-pointer", className)}
        >
            {/* Glow Effect */}
            <div
                className={cn(
                    "absolute -inset-0.5 bg-gradient-to-r from-neon-accent to-neon-secondary rounded-2xl opacity-0 transition-opacity duration-500 blur-md",
                    hovered && "opacity-70"
                )}
            />

            {/* Content */}
            <GlassPanel className="relative h-full p-6 bg-black/80 group-hover:bg-black/90 transition-colors">
                {children}
            </GlassPanel>
        </motion.div>
    );
};
