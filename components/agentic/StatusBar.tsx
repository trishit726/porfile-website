'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHaptics } from '@/hooks/use-haptics';
import { BrainCircuit, Eye, EyeOff } from 'lucide-react';

interface AgentStatus {
    state: 'idle' | 'analyzing' | 'optimizing' | 'private';
    confidence: number;
}

export const AgenticStatusBar = () => {
    const { triggerHaptic } = useHaptics();
    const [status, setStatus] = useState<AgentStatus>({ state: 'idle', confidence: 85 });
    const [isPrivacyMode, setIsPrivacyMode] = useState(false);

    useEffect(() => {
        if (!isPrivacyMode) {
            const interval = setInterval(() => {
                setStatus(prev => ({ ...prev, state: 'analyzing' }));
                setTimeout(() => setStatus(prev => ({ ...prev, state: 'idle' })), 2000);
            }, 10000);
            return () => clearInterval(interval);
        } else {
            setStatus({ state: 'private', confidence: 0 });
        }
    }, [isPrivacyMode]);

    useEffect(() => {
        if (status.state === 'analyzing') {
            triggerHaptic('soft-pattern');
        }
    }, [status.state, triggerHaptic]);

    const togglePrivacy = () => {
        triggerHaptic('snap');
        setIsPrivacyMode(!isPrivacyMode);
    };

    const getStatusColor = () => {
        if (isPrivacyMode) return 'bg-gray-500/20 border-gray-500/50';
        if (status.state === 'analyzing') return 'bg-cyan-500/20 border-cyan-500/80';
        return 'bg-white/5 border-white/10';
    };

    return (
        <motion.div
            className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full backdrop-blur-xl border ${getStatusColor()} transition-colors duration-500 z-50 flex items-center gap-4 shadow-2xl`}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
            <div className="relative flex items-center justify-center w-4 h-4">
                {!isPrivacyMode && status.state === 'analyzing' && (
                    <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-cyan-400"></span>
                )}
                <BrainCircuit size={16} className={isPrivacyMode ? 'text-gray-400' : 'text-cyan-400'} />
            </div>

            <div className="flex flex-col min-w-[120px]">
                <span className="text-xs font-mono font-bold tracking-wider text-white/90">
                    {isPrivacyMode ? 'AGENT: OFFLINE' : 'AGENT: ACTIVE'}
                </span>
                <AnimatePresence mode='wait'>
                    {!isPrivacyMode && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key="metrics"
                            className="flex justify-between items-center w-full"
                        >
                            <span className="text-[10px] text-white/50 uppercase">{status.state}</span>
                            <span className="text-[10px] text-cyan-400 font-mono">{status.confidence}% CONF.</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="h-4 w-px bg-white/10" />

            <button
                onClick={togglePrivacy}
                className="p-1 hover:bg-white/10 rounded-full transition-colors active:scale-95"
            >
                {isPrivacyMode ? <EyeOff size={16} className="text-gray-400" /> : <Eye size={16} className="text-white" />}
            </button>
        </motion.div>
    );
};
