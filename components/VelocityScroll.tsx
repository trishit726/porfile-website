"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";

interface VelocityScrollProps {
    text: string;
    defaultVelocity?: number;
    className?: string;
}

const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const VelocityScroll = ({
    text,
    defaultVelocity = 5,
    className,
}: VelocityScrollProps) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * defaultVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="w-full overflow-hidden whitespace-nowrap flex flex-nowrap">
            <motion.div className="flex flex-nowrap justify-center" style={{ x }}>
                {/* Render text multiple times to ensure seamless loop */}
                {[...Array(4)].map((_, i) => (
                    <span
                        key={i}
                        className={`block text-5xl font-bold uppercase tracking-tighter mr-8 ${className}`}
                    >
                        {text}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};
