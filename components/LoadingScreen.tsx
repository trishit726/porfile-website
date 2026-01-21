'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Smooth progress animation
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        // Loading duration
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1800);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, []);

    const letters = "TRISHIT".split("");

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.1,
                    }}
                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0">
                        <motion.div
                            className="absolute inset-0"
                            animate={{
                                background: [
                                    'radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
                                    'radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
                                    'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
                                    'radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
                                ]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        />
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-white/20 rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -100, 0],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                    ease: 'easeInOut',
                                }}
                            />
                        ))}
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10 flex flex-col items-center">
                        {/* Morphing Name Animation */}
                        <div className="flex overflow-hidden mb-8">
                            {letters.map((letter, i) => (
                                <motion.span
                                    key={i}
                                    className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        delay: i * 0.08,
                                        duration: 0.5,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </div>

                        {/* Subtitle with typing effect */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex items-center gap-3 mb-12"
                        >
                            <motion.div
                                className="w-8 h-[1px] bg-gradient-to-r from-transparent to-purple-500"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            />
                            <span className="text-sm font-light tracking-[0.3em] text-gray-400 uppercase">
                                Developer
                            </span>
                            <motion.div
                                className="w-8 h-[1px] bg-gradient-to-l from-transparent to-purple-500"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            />
                        </motion.div>

                        {/* Circular Progress Indicator */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="relative w-16 h-16"
                        >
                            {/* Background circle */}
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.1)"
                                    strokeWidth="2"
                                />
                                {/* Progress circle */}
                                <motion.circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke="url(#gradient)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeDasharray={283}
                                    strokeDashoffset={283 - (283 * progress) / 100}
                                />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#a855f7" />
                                        <stop offset="50%" stopColor="#6366f1" />
                                        <stop offset="100%" stopColor="#3b82f6" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Center percentage */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-xs font-mono text-white/60">
                                    {Math.min(progress, 100)}
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Accent Line */}
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
