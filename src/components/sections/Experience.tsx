import { GoldCard } from "../ui/GoldCard";
import { Icons } from "../ui/Icons";
import { TracingBeam } from "../ui/aceternity/TracingBeam";

import { DecryptedText } from "../ui/bits/DecryptedText";

export const Experience = () => {
    return (
        <section className="w-full mx-auto mb-32 mt-32 relative">
            <h2 className="text-2xl text-white font-display italic mb-8 relative z-20 pl-6 md:pl-12">
                <DecryptedText text="Professional Experience" animateOn="view" revealDirection="start" />
            </h2>
            <TracingBeam className="px-6">
                <div className="relative pt-4">
                    <GoldCard className="relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 border border-amber-500/10 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-dashed border-amber-500/5 rounded-lg rotate-12"></div>
                        </div>

                        {/* Company Logo Placeholder */}
                        <div className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-lg flex items-center justify-center">
                            <Icons.Briefcase className="w-6 h-6 text-amber-400" />
                        </div>

                        <div className="relative z-10 p-8">
                            <div className="flex flex-col md:flex-row justify-between mb-8">
                                <div>
                                    <h3 className="text-5xl font-bold text-white mb-3 shadow-lg">Full Stack Developer Intern</h3>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="text-amber-400 text-lg font-medium">Shubh Castings Pvt Ltd</div>
                                        <div className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-xs text-blue-400 uppercase tracking-wider">Industrial Tech</div>
                                    </div>
                                    <div className="text-neutral-500 text-sm font-mono">2024 • Remote • 6 Months</div>
                                </div>
                            </div>

                            {/* Key Achievements */}
                            <div className="mb-6">
                                <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                                    Key Achievements
                                </h4>
                                <ul className="space-y-4 text-neutral-300 text-sm leading-relaxed">
                                    <li className="flex gap-4 group">
                                        <div className="min-w-8 h-8 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                                            <Icons.Database className="w-4 h-4 text-blue-400" />
                                        </div>
                                        <div>
                                            <p>Optimized high-frequency industrial data optimization using <span className="text-white font-medium bg-neutral-800/50 px-2 py-0.5 rounded">TimescaleDB</span>, significantly improving query performance for time-series analytics.</p>
                                            <div className="mt-2 text-xs text-neutral-500">Performance improvement: ~40% faster queries</div>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 group">
                                        <div className="min-w-8 h-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                                            <Icons.Shield className="w-4 h-4 text-green-400" />
                                        </div>
                                        <div>
                                            <p>Implemented secure API handling with custom <span className="text-white font-medium bg-neutral-800/50 px-2 py-0.5 rounded">Django Middleware</span>, ensuring robust data protection and request validation.</p>
                                            <div className="mt-2 text-xs text-neutral-500">Security enhancement: 100% request validation coverage</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div className="pt-6 border-t border-white/10">
                                <div className="text-xs text-neutral-500 uppercase tracking-wider mb-3">Technologies Used</div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 text-xs text-blue-300 rounded-full">Django</span>
                                    <span className="px-3 py-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-xs text-green-300 rounded-full">TimescaleDB</span>
                                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 text-xs text-yellow-300 rounded-full">Python</span>
                                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-xs text-purple-300 rounded-full">REST APIs</span>
                                </div>
                            </div>
                        </div>
                    </GoldCard>
                </div>
            </TracingBeam>
        </section>
    );
};

