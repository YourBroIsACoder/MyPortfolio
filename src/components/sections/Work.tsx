
import { motion, type Variants } from "framer-motion";
import { Icons } from "../ui/Icons";
import { MagicCard } from "../ui/magic/MagicCard";

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

import { DecryptedText } from "../ui/bits/DecryptedText";

export const Work = () => {
    return (
        <section id="work" className="space-y-6 relative z-10 w-full mb-32">
            <div className="flex items-end justify-between mb-8 px-4 md:px-0">
                <h2 className="text-2xl text-white font-display italic">
                    <DecryptedText text="Selected Works" animateOn="view" revealDirection="start" />
                </h2>
                <span className="text-xs text-neutral-600 uppercase tracking-widest">2024 — 2026</span>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0"
            >

                {/* Project 1: MARS (Featured Project) */}
                <motion.div variants={item} className="lg:col-span-2 h-[400px]">
                    <MagicCard className="h-full group" gradientColor="rgba(245, 158, 11, 0.2)">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute top-0 right-0 w-32 h-32 border border-amber-500/20 rounded-full"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 border border-amber-500/10 rounded-full"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-between p-8">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">MARS</h3>
                                    <p className="text-neutral-400 text-sm">Multi Agent Review System</p>
                                </div>
                                <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                                    <span className="text-green-400 text-xs font-mono uppercase tracking-wider">Live Project</span>
                                </div>
                            </div>

                            <div>
                                <p className="text-neutral-300 text-sm leading-relaxed max-w-md mb-6">
                                    Developed for <span className="text-amber-400 font-medium">AWS ImpactX/IIT Bombay</span>. A system that automates academic conference workflows using AWS Bedrock agents, reducing manual review time by <span className="text-white font-medium">70%</span>.
                                </p>

                                <div className="flex items-end justify-between border-t border-white/5 pt-6">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1.5 bg-neutral-900 border border-white/10 text-xs text-amber-300 uppercase tracking-wider rounded-full font-medium">AWS Bedrock</span>
                                        <span className="px-3 py-1.5 bg-neutral-900 border border-white/10 text-xs text-blue-300 uppercase tracking-wider rounded-full font-medium">Python</span>
                                    </div>
                                    <div className="text-2xl font-display text-amber-400/30">01</div>
                                </div>
                            </div>
                        </div>
                    </MagicCard>
                </motion.div>

                {/* Project 2: ResQMesh */}
                <motion.div variants={item} className="lg:col-span-1 h-[400px]">
                    <MagicCard className="h-full" gradientColor="rgba(168, 85, 247, 0.2)">
                        <div className="relative z-10 h-full flex flex-col justify-between p-8">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">ResQMesh</h3>
                                    <p className="text-neutral-400 text-sm">Disaster Comms</p>
                                </div>
                                <div className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded">
                                    <span className="text-purple-400 text-xs font-mono">Top 18</span>
                                </div>
                            </div>

                            <div>
                                <div className="w-full h-24 mb-6 border border-white/10 bg-neutral-900/50 relative overflow-hidden rounded-lg backdrop-blur-sm flex items-center justify-center">
                                    <div className="text-2xl font-display italic text-amber-400/20">LoRa</div>
                                    <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                </div>

                                <div className="flex items-end justify-between">
                                    <div className="flex gap-2">
                                        <span className="px-2 py-1 bg-neutral-900 border border-white/10 text-xs text-red-300 uppercase tracking-wider rounded">IoT</span>
                                    </div>
                                    <div className="text-2xl font-display text-amber-400/30">02</div>
                                </div>
                            </div>
                        </div>
                    </MagicCard>
                </motion.div>

                {/* Project 3: ApnaKirana */}
                <motion.div variants={item} className="h-[300px]">
                    <MagicCard className="h-full" gradientColor="rgba(59, 130, 246, 0.2)">
                        <div className="relative z-10 h-full flex flex-col justify-between p-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">ApnaKirana</h3>
                                <p className="text-neutral-400 text-xs mb-4">E-Commerce Ecosystem</p>
                                <p className="text-neutral-300 text-sm leading-relaxed">
                                    Grocery marketplace with <span className="text-amber-400 font-medium">recipe-to-cart</span>.
                                </p>
                            </div>

                            <div className="flex items-end justify-between">
                                <div className="flex items-center gap-2">
                                    <Icons.Globe className="w-4 h-4 text-blue-400" />
                                    <span className="text-xs text-neutral-400">Next.js</span>
                                </div>
                                <div className="text-2xl font-display text-amber-400/30">03</div>
                            </div>
                        </div>
                    </MagicCard>
                </motion.div>

                {/* Project 4: KrishiMitra */}
                <motion.div variants={item} className="lg:col-span-2 h-[300px]">
                    <MagicCard className="h-full" gradientColor="rgba(34, 197, 94, 0.2)">
                        <div className="relative z-10 h-full flex flex-col justify-between p-8">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">KrishiMitra</h3>
                                    <p className="text-neutral-400 text-sm">Agro-Tech Solution</p>
                                </div>
                                <div className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-full">
                                    <span className="text-yellow-400 text-xs font-mono uppercase tracking-wider">SIH Winner</span>
                                </div>
                            </div>

                            <div className="flex items-end justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-neutral-900 border border-cyan-500/30 rounded-lg">
                                        <Icons.Cpu className="w-4 h-4 text-cyan-400" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-neutral-400 uppercase tracking-wider">Mobile App</div>
                                        <div className="text-sm text-white font-medium">Flutter</div>
                                    </div>
                                </div>
                                <div className="text-2xl font-display text-amber-400/30">04</div>
                            </div>
                        </div>
                    </MagicCard>
                </motion.div>

            </motion.div>
        </section>
    );
};
