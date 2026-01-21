'use client';

import { motion, type HTMLMotionProps } from "framer-motion";
import { useHaptics } from "@/hooks/use-haptics";
import { cn } from "@/lib/utils";
import React from "react";

interface LiquidButtonProps extends Omit<HTMLMotionProps<'button'>, 'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart'> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost";
}

export const LiquidButton = ({
    children,
    className,
    variant = "primary",
    onClick,
    ...props
}: LiquidButtonProps) => {
    const { triggerHaptic } = useHaptics();

    const handleInteraction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        triggerHaptic('snap');
        onClick?.(e);
    };

    const variants = {
        primary: "bg-neon-accent text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]",
        secondary: "bg-glass-surface text-white border border-white/10 hover:bg-white/10",
        ghost: "text-gray-400 hover:text-white"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className={cn(
                "px-6 py-3 rounded-full relative overflow-hidden transition-colors",
                variants[variant],
                className
            )}
            onClick={handleInteraction}
            onMouseEnter={() => triggerHaptic('light')}
            {...props}
        >
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
};
