'use client';

import { PrismCard } from "@/components/glass-ui/PrismCard";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Terminal } from "lucide-react";

interface BentoItem {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    size: "small" | "medium" | "large";
}

const MOCK_ITEMS: BentoItem[] = [
    { id: "1", title: "Project Starshield", description: "AI Cyber Sentinel protecting against malicious traffic.", icon: Globe, size: "large" },
    { id: "2", title: "Drone Swarm", description: "L4 Autonomy using Liquid Neural Networks.", icon: Cpu, size: "medium" },
    { id: "3", title: "Zynd Aickathon", description: "Multi-Agent accident detection system.", icon: Code2, size: "medium" },
    { id: "4", title: "CTF Wins", description: "Top 1% in global security challenges.", icon: Terminal, size: "small" },
];

export const GenerativeBento = () => {
    return (
        <div className="w-full max-w-6xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
                {MOCK_ITEMS.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`
              ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
              ${item.size === 'medium' ? 'md:col-span-2' : ''}
              ${item.size === 'small' ? 'md:col-span-1' : ''}
            `}
                    >
                        <PrismCard className="h-full">
                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 text-cyan-400">
                                        <item.icon size={20} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                </div>

                                {item.size === 'large' && (
                                    <div className="mt-4">
                                        <div className="h-32 rounded-lg bg-white/5 border border-white/5 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                            <div className="absolute bottom-2 left-2 flex gap-2">
                                                <span className="text-[10px] uppercase bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">Next.js</span>
                                                <span className="text-[10px] uppercase bg-purple-500/20 text-purple-400 px-2 py-1 rounded">AI</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </PrismCard>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
