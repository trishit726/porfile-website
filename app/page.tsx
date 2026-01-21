"use client";

import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { GlassPanel } from '@/components/glass-ui/GlassPanel';
import { TypeWriter } from '@/components/TypeWriter';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Github, Linkedin, Twitter, Mail, MapPin, GraduationCap } from 'lucide-react';

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Loading Screen */}
            <LoadingScreen />

            {/* Gradient Overlay */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.08),transparent_50%)] pointer-events-none z-[1]" />

            {/* Hero Section */}
            <section className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-6 p-8">
                {/* Video Background */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute w-full h-full object-cover"
                    >
                        <source src="/hero-bg.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="flex flex-col items-center gap-4 z-10">
                    <p className="text-2xl md:text-3xl font-bold">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                            Hi, I am
                        </span>
                    </p>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-center">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">
                            Trishit Bodkhe
                        </span>
                    </h1>

                    {/* Typing Animation */}
                    <TypeWriter />
                </div>

                {/* Quick Info */}
                <div className="flex flex-wrap justify-center gap-4 mt-6 z-10">
                    <GlassPanel className="px-4 py-2 flex items-center gap-2">
                        <GraduationCap size={16} className="text-cyan-400" />
                        <span className="text-sm text-gray-300">SIT Nagpur</span>
                    </GlassPanel>
                    <GlassPanel className="px-4 py-2 flex items-center gap-2">
                        <MapPin size={16} className="text-cyan-400" />
                        <span className="text-sm text-gray-300">India</span>
                    </GlassPanel>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-4 z-10">
                    <a href="https://github.com/TrishitBodkhe" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/trishitbodkhe" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://twitter.com/trishitbodkhe" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all">
                        <Twitter size={20} />
                    </a>
                    <a href="mailto:trishit@example.com" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all">
                        <Mail size={20} />
                    </a>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10">
                    <span className="text-xs text-gray-500 font-mono">Scroll</span>
                    <div className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent" />
                </div>
            </section>

            {/* About Section */}
            <section className="relative z-10 py-20 px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="text-cyan-400">//</span> About Me
                    </h2>
                    <GlassPanel className="p-8" intensity="medium" liquidMetal>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I&apos;m a <span className="text-white font-semibold">Computer Science Engineering</span> student at Symbiosis Institute of Technology, Nagpur.
                            I&apos;m passionate about learning <span className="text-cyan-400">Web Development</span> and <span className="text-cyan-400">AI/ML</span>,
                            and I love building things that solve real problems.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mt-4">
                            Currently exploring modern frameworks, cloud technologies, and machine learning.
                            Always eager to learn something new! 🚀
                        </p>
                    </GlassPanel>
                </div>
            </section>

            {/* Projects Section */}
            <section className="relative z-10 py-20 px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="text-cyan-400">//</span> Projects
                    </h2>
                    <ProjectsSection />
                </div>
            </section>

            {/* Skills Section */}
            <section className="relative z-10 py-20 px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="text-cyan-400">//</span> Skills
                    </h2>
                    <SkillsSection />
                </div>
            </section>

            {/* Get in Touch Section */}
            <section className="relative z-10 py-24 px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="text-cyan-400">//</span> Get in Touch
                    </h2>

                    {/* Glass Panel with Video Background */}
                    <div className="relative rounded-3xl overflow-hidden">
                        {/* Video Background */}
                        <div className="absolute inset-0 z-0">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute w-full h-full object-cover opacity-40"
                            >
                                <source src="/liquid-metal.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
                        </div>

                        {/* Glass overlay content */}
                        <div className="relative z-10 p-10 md:p-16 backdrop-blur-sm border border-white/10 rounded-3xl">
                            <div className="text-center">
                                <h3 className="text-4xl md:text-5xl font-bold mb-4">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                                        Let&apos;s Build Something
                                    </span>
                                </h3>
                                <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                                    Amazing Together
                                </h3>
                                <p className="text-gray-400 max-w-lg mx-auto mb-10 text-lg">
                                    Have a project in mind? Want to collaborate? Or just want to say hi?
                                    I&apos;d love to hear from you!
                                </p>

                                {/* CTA Button */}
                                <a
                                    href="mailto:trishit@example.com"
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-lg hover:shadow-[0_0_40px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-105"
                                >
                                    <Mail size={20} />
                                    Say Hello
                                </a>

                                {/* Social Links */}
                                <div className="flex justify-center gap-4 mt-10">
                                    <a href="https://github.com/TrishitBodkhe" target="_blank" rel="noopener noreferrer"
                                        className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 hover:scale-110 transition-all">
                                        <Github size={24} />
                                    </a>
                                    <a href="https://linkedin.com/in/trishitbodkhe" target="_blank" rel="noopener noreferrer"
                                        className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 hover:scale-110 transition-all">
                                        <Linkedin size={24} />
                                    </a>
                                    <a href="https://twitter.com/trishitbodkhe" target="_blank" rel="noopener noreferrer"
                                        className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 hover:scale-110 transition-all">
                                        <Twitter size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 py-12 px-8 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-gray-500 text-sm">
                        Built with ❤️ by <span className="text-white">Trishit Bodkhe</span> • 2026
                    </p>
                </div>
            </footer>
        </main>
    );
}
