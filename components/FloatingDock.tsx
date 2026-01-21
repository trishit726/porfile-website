"use client";

import { cn } from "@/lib/utils";
import {
    AnimatePresence,
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export const FloatingDock = ({
    items,
    desktopClassName,
    mobileClassName,
}: {
    items: { title: string; icon: React.ReactNode; href?: string }[];
    desktopClassName?: string;
    mobileClassName?: string;
}) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName} />
            <FloatingDockMobile items={items} className={mobileClassName} />
        </>
    );
};

const FloatingDockMobile = ({
    items,
    className,
}: {
    items: { title: string; icon: React.ReactNode; href?: string }[];
    className?: string;
}) => {
    return (
        <div className={cn("relative block md:hidden", className)}>
            <div className="flex flex-wrap gap-4 justify-center">
                {items.map((item) => (
                    <div
                        key={item.title}
                        className="flex flex-col items-center justify-center gap-2"
                    >
                        <div className="h-14 w-14 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                            <div className="h-6 w-6 text-white">{item.icon}</div>
                        </div>
                        <span className="text-xs text-neutral-400">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const FloatingDockDesktop = ({
    items,
    className,
}: {
    items: { title: string; icon: React.ReactNode; href?: string }[];
    className?: string;
}) => {
    const mouseX = useMotionValue(Infinity);
    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-neutral-900/50 backdrop-blur-md border border-white/10 px-4 pb-3",
                className
            )}
        >
            {items.map((item) => (
                <IconContainer mouseX={mouseX} key={item.title} {...item} />
            ))}
        </motion.div>
    );
};

function IconContainer({
    mouseX,
    title,
    icon,
    href,
}: {
    mouseX: MotionValue;
    title: string;
    icon: React.ReactNode;
    href?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

    const width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    const height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const [hovered, setHovered] = useState(false);

    return (
        <Link href={href || "#"} className="relative">
            <motion.div
                ref={ref}
                style={{ width, height }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="aspect-square rounded-full bg-neutral-800/80 border border-neutral-700 flex items-center justify-center relative shadow-lg"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 2, x: "-50%" }}
                            className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-0.5 whitespace-pre rounded-md bg-neutral-900 border border-neutral-800 text-white text-xs z-50 pointer-events-none"
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{ width: width, height: height }}
                    className="flex items-center justify-center text-white"
                >
                    {/* Creating a wrapper to prevent icon distortion if we were resizing the icon directly, 
              but since we wrap logic, let's keep it simple. 
              We'll just pass children or icon. 
              But let's transform the icon size a bit too or keep it centered.
           */}
                    <div className="h-6 w-6 flex items-center justify-center text-white/90">
                        {icon}
                    </div>
                </motion.div>
            </motion.div>
        </Link>
    );
}
