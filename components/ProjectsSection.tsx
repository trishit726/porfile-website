'use client';

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Cpu, Shield, Eye } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    github?: string;
    live?: string;
    image: string;
    status: "research" | "development" | "concept";
    icon: React.ReactNode;
}

const PROJECTS: Project[] = [
    {
        id: "aegis",
        title: "Project AEGIS",
        subtitle: "Split-Brain Autonomous Drone",
        description: "Multi-modal failsafe agent for autonomous edge robotics. Uses Liquid Neural Networks for 200Hz reflex control and TinyVLA for semantic reasoning on Raspberry Pi 5.",
        tags: ["Python", "LNN", "TinyVLA", "ONNX", "Webots"],
        github: "#",
        image: "/aegis.png",
        status: "research",
        icon: <Cpu className="w-5 h-5" />,
    },
    {
        id: "sentinel",
        title: "Sentinel-R1",
        subtitle: "Reasoning Surveillance Agent",
        description: "CCTV AI that doesn't just detect accidents—it reasons through physics and causality to understand why they happened and coordinates Golden Hour medical response.",
        tags: ["Llama Vision", "NVIDIA Cosmos", "LangGraph", "OpenCV"],
        github: "#",
        image: "/sentinel.png",
        status: "development",
        icon: <Eye className="w-5 h-5" />,
    },
    {
        id: "edgeguard",
        title: "EdgeGuard AI",
        subtitle: "Agentic Network Security",
        description: "Plug-and-play security appliance providing autonomous, enterprise-grade protection at the edge. Features deception honeypots, zero-trust architecture, and sub-millisecond threat detection.",
        tags: ["NVIDIA Telemetry", "LangGraph", "ZyndAI", "Zero-Trust"],
        github: "#",
        image: "/edgeguard.png",
        status: "concept",
        icon: <Shield className="w-5 h-5" />,
    },
];

const statusConfig = {
    research: { label: "Research", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
    development: { label: "In Development", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
    concept: { label: "Concept", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
};

// 3D Tilt Card Component with Image
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const status = statusConfig[project.status];

    return (
        <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                delay: index * 0.2,
                duration: 0.8,
                type: "spring",
                stiffness: 80,
                damping: 20
            }}
            style={{ perspective: 1200 }}
            className="relative"
        >
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="group relative rounded-xl overflow-hidden cursor-pointer"
            >
                {/* Subtle Glow Border - Only cyan */}
                <div className="absolute -inset-[1px] bg-cyan-500/30 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />
                <div className="absolute -inset-[1px] bg-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-50 transition-all duration-500" />

                {/* Card Content */}
                <div
                    className="relative bg-black/80 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 group-hover:border-cyan-500/30 transition-all duration-300"
                    style={{ transform: "translateZ(20px)" }}
                >
                    {/* Image Section */}
                    <div className="relative h-44 overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        />
                        {/* Image Overlay - Dark gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                        <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Status Badge */}
                        <motion.div
                            className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-mono border ${status.color}`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + 0.3 }}
                        >
                            {status.label}
                        </motion.div>

                        {/* Floating Icon */}
                        <motion.div
                            className="absolute top-3 right-3 p-2 rounded-lg bg-black/50 border border-cyan-500/30 text-cyan-400"
                            style={{ transform: "translateZ(40px)" }}
                            whileHover={{ scale: 1.1 }}
                        >
                            {project.icon}
                        </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5" style={{ transform: "translateZ(30px)" }}>
                        {/* Title */}
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                            {project.title}
                        </h3>

                        {/* Subtitle */}
                        <p className="text-xs text-cyan-400/70 font-mono mb-3">
                            {project.subtitle}
                        </p>

                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.slice(0, 4).map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-0.5 text-xs font-mono text-gray-500 border-b border-gray-700"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3">
                            {project.github && (
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                                    whileHover={{ x: 2 }}
                                >
                                    <Github size={16} />
                                    <span>View Code</span>
                                </motion.a>
                            )}
                        </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

export const ProjectsSection = () => {
    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{ perspective: 1200 }}
        >
            {PROJECTS.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
            ))}
        </div>
    );
};
