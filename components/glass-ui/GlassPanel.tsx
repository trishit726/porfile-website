import { cn } from "@/lib/utils";
import React from "react";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    intensity?: "low" | "medium" | "high";
    gradient?: boolean;
    liquidMetal?: boolean;
}

export const GlassPanel = ({
    children,
    className,
    intensity = "medium",
    gradient = false,
    liquidMetal = false,
    ...props
}: GlassPanelProps) => {
    const intensityMap = {
        low: "bg-white/5 backdrop-blur-sm border-white/5",
        medium: "bg-white/5 backdrop-blur-md border-white/10",
        high: "bg-white/10 backdrop-blur-xl border-white/20",
    };

    return (
        <div
            className={cn(
                "rounded-2xl border transition-all duration-300 relative overflow-hidden",
                intensityMap[intensity],
                gradient && "bg-gradient-to-br from-white/5 to-transparent",
                className
            )}
            {...props}
        >
            {/* Liquid Metal Video Texture */}
            {liquidMetal && (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
                >
                    <source src="/liquid-metal.mp4" type="video/mp4" />
                </video>
            )}

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};
