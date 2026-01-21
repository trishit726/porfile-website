"use client";

import {
    Atom,
    Layers,
    FileCode,
    Palette,
    Server,
    Terminal,
    Box,
    GitBranch,
    Move,
    Database,
    Container,
    Flame,
    Share2,
    Cpu,
    Globe,
    Cloud,
    Code
} from "lucide-react";
import { FloatingDock } from "./FloatingDock";


export const SkillsSection = () => {
    // Master Skills - Large, White Icons for Dock
    const masterSkills = [
        { title: "React", icon: <Atom className="h-full w-full text-white" /> },
        { title: "Next.js", icon: <Layers className="h-full w-full text-white" /> },
        { title: "TypeScript", icon: <FileCode className="h-full w-full text-white" /> },
        { title: "Node.js", icon: <Server className="h-full w-full text-white" /> },
        { title: "Tallwind", icon: <Palette className="h-full w-full text-white" /> },
        { title: "Figma", icon: <Palette className="h-full w-full text-white" /> }, // Using Palette as placeholder for Figma
        { title: "GitHub", icon: <GitBranch className="h-full w-full text-white" /> },
        { title: "Python", icon: <Terminal className="h-full w-full text-white" /> },
        { title: "Docker", icon: <Container className="h-full w-full text-white" /> },
    ];

    // Universe Skills - Comprehensive list with badges
    const universeSkills = [
        { name: "Python", icon: <Terminal className="w-3 h-3 text-yellow-500" /> },
        { name: "JavaScript", icon: <Code className="w-3 h-3 text-yellow-400" /> },
        { name: "TypeScript", icon: <FileCode className="w-3 h-3 text-blue-500" /> },
        { name: "C++", icon: <Cpu className="w-3 h-3 text-blue-700" /> },
        { name: "HTML5", icon: <Globe className="w-3 h-3 text-orange-600" /> },
        { name: "CSS3", icon: <Palette className="w-3 h-3 text-blue-500" /> },
        { name: "React", icon: <Atom className="w-3 h-3 text-cyan-400" /> },
        { name: "Next.js", icon: <Layers className="w-3 h-3 text-white" /> },
        { name: "Tailwind", icon: <Palette className="w-3 h-3 text-teal-400" /> },
        { name: "Three.js", icon: <Box className="w-3 h-3 text-white" /> },
        { name: "Framer", icon: <Move className="w-3 h-3 text-pink-500" /> },
        { name: "Node.js", icon: <Server className="w-3 h-3 text-green-500" /> },
        { name: "Express", icon: <Server className="w-3 h-3 text-gray-400" /> },
        { name: "FastAPI", icon: <Terminal className="w-3 h-3 text-teal-500" /> },
        { name: "Flask", icon: <Terminal className="w-3 h-3 text-white" /> },
        { name: "GraphQL", icon: <Share2 className="w-3 h-3 text-pink-600" /> },
        { name: "TensorFlow", icon: <Cpu className="w-3 h-3 text-orange-500" /> },
        { name: "Keras", icon: <Cpu className="w-3 h-3 text-red-600" /> },
        { name: "LangChain", icon: <Cloud className="w-3 h-3 text-yellow-600" /> },
        { name: "CrewAI", icon: <Cloud className="w-3 h-3 text-yellow-500" /> },
        { name: "RAG", icon: <Database className="w-3 h-3 text-blue-400" /> },
        { name: "LLM", icon: <Cpu className="w-3 h-3 text-green-400" /> },
        { name: "LoRA", icon: <Cpu className="w-3 h-3 text-yellow-400" /> },
        { name: "MCP", icon: <Server className="w-3 h-3 text-white" /> },
        { name: "MongoDB", icon: <Database className="w-3 h-3 text-green-500" /> },
        { name: "Firebase", icon: <Flame className="w-3 h-3 text-yellow-500" /> },
        { name: "Neo4j", icon: <Share2 className="w-3 h-3 text-blue-500" /> },
        { name: "Redis", icon: <Database className="w-3 h-3 text-red-600" /> },
        { name: "AWS", icon: <Cloud className="w-3 h-3 text-orange-500" /> },
        { name: "GCP", icon: <Cloud className="w-3 h-3 text-blue-500" /> },
        { name: "Docker", icon: <Container className="w-3 h-3 text-blue-600" /> },
        { name: "Git", icon: <GitBranch className="w-3 h-3 text-red-500" /> },
        { name: "GitHub", icon: <GitBranch className="w-3 h-3 text-white" /> },
        { name: "Vercel", icon: <Layers className="w-3 h-3 text-white" /> },
        { name: "React Native", icon: <Atom className="w-3 h-3 text-cyan-500" /> },
        { name: "Expo", icon: <Layers className="w-3 h-3 text-white" /> },
    ];

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 space-y-24">

            {/* Technologies I Master */}
            <div className="flex flex-col items-center space-y-12">
                <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Technologies I Master
                </h2>

                <div className="flex items-center justify-center">
                    <FloatingDock
                        items={masterSkills}
                        desktopClassName="bg-transparent border-none shadow-none"
                        mobileClassName="bg-transparent border-none"
                    />
                </div>
            </div>

            {/* Tech Universe */}
            <div className="w-full max-w-5xl flex flex-col items-start space-y-8">
                <h3 className="text-sm font-mono text-neutral-400 uppercase tracking-widest pl-2">
                    Tech Universe
                </h3>

                <div className="flex flex-wrap gap-3">
                    {universeSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-2 bg-neutral-900/50 border border-white/5 px-4 py-2 rounded-full hover:bg-neutral-800/80 transition-colors cursor-default"
                        >
                            {skill.icon}
                            <span className="text-neutral-300 text-xs font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};
