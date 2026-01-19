import { useEffect } from 'react';
import Lenis from 'lenis';

import { Vortex } from './components/ui/aceternity/Vortex';
import { ContainerScroll } from './components/ui/aceternity/ContainerScroll';
import { FloatingDock } from './components/ui/aceternity/FloatingDock';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Work } from './components/sections/Work';
import { Icons } from './components/ui/Icons';
import { Experience } from './components/sections/Experience';
import { About } from './components/sections/About';

// --- Main App ---
export default function App() {
    useEffect(() => {
        // Initialize Smooth Scrolling
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);



        const link = document.createElement('link');
        link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        return () => {
            lenis.destroy();
        }
    }, []);

    return (
        <div className="relative bg-[#050505] min-h-screen text-neutral-200 selection:bg-amber-500/30 selection:text-amber-100 overflow-x-hidden font-sans">

            {/* Smooth Scroll Progress Bar */}
            <ScrollProgress />

            {/* Vortex Background */}
            <Vortex
                backgroundColor="transparent"
                rangeY={800}
                particleCount={500}
                baseHue={45}
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
                containerClassName="fixed inset-0 z-0 pointer-events-none"
                colors={['#fbbf24', '#f59e0b', '#e5e7eb', '#d1d5db', '#ffffff']}
            />

            {/* Background Ambient Light (Static fallback layer) */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-soft-light" />

            <main className="w-full max-w-[100rem] mx-auto px-6 md:px-12 pt-20 pb-40 relative z-10">
                <Hero />
                <Skills />
                <Work />
                <Experience />
                <About />

                {/* Featured Work Showcase - Container Scroll */}
                <section className="relative z-20 w-full bg-transparent pt-20 pb-40">
                    <ContainerScroll
                        titleComponent={
                            <div className="flex flex-col items-center">
                                <h2 className="text-4xl md:text-8xl font-display italic text-white mb-6">Featured Implementations</h2>
                                <p className="text-neutral-400 max-w-2xl mx-auto text-lg mb-20">Exploring the depths of system architecture and agentic workflows.</p>
                            </div>
                        }
                    >
                        <a href="https://acc-eosin.vercel.app" target="_blank" rel="noopener noreferrer" className="block h-full w-full rounded-2xl overflow-hidden border border-white/10 group relative">
                            <div className="absolute inset-0 bg-neutral-900/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                            <img
                                src="/MARS.png"
                                alt="Agnel CyberCell Website"
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                                <span className="text-4xl md:text-6xl font-display italic text-white mb-2">Agnel CyberCell</span>
                                <span className="text-blue-400 text-lg font-mono">Visit Official Website &rarr;</span>
                            </div>
                        </a>
                    </ContainerScroll>
                </section>

                <Footer />
            </main>

            {/* Floating Dock Navigation */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
                <FloatingDock
                    items={[
                        { title: "Home", icon: <Icons.Home className="w-full h-full text-neutral-300" />, href: "#" },
                        { title: "Work", icon: <Icons.Briefcase className="w-full h-full text-neutral-300" />, href: "#work" },
                        { title: "Skills", icon: <Icons.Cpu className="w-full h-full text-neutral-300" />, href: "#skills" },
                        { title: "About", icon: <Icons.User className="w-full h-full text-neutral-300" />, href: "#about" },
                        { title: "Mail", icon: <Icons.Mail className="w-full h-full text-neutral-300" />, href: "https://mail.google.com/mail/?view=cm&fs=1&to=akshath.narvekar02@gmail.com" },
                        { title: "LinkedIn", icon: <Icons.Linkedin className="w-full h-full text-neutral-300" />, href: "https://www.linkedin.com/in/akshath-narvekar" },
                        { title: "GitHub", icon: <Icons.Github className="w-full h-full text-neutral-300" />, href: "https://github.com/AkshathNarvekar02" },
                    ]}
                />
            </div>
        </div>
    );
}