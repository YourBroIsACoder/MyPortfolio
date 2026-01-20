import { motion } from "framer-motion";
import { ShimmerButton } from "../ui/ShimmerButton";
import { Icons } from "../ui/Icons";
import { TextHoverEffect } from "../ui/aceternity/TextHoverEffect";
import { TypewriterName } from "../ui/TypewriterName";
import { Meteors } from "../ui/magic/Meteors";

export const Hero = () => {
    return (
        <div className="min-h-[60vh] flex items-center justify-center relative z-10 mb-24 w-full overflow-hidden">
            {/* Meteors Background */}
            <div className="absolute inset-0 h-full w-full pointer-events-none">
                <Meteors number={30} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full relative z-20">
                {/* Text Content */}
                <div className="flex flex-col items-start text-left order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-300/80 text-xs tracking-widest uppercase mb-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" /> Available for projects
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-display font-medium text-white mb-6 leading-[1.1]">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="block text-4xl md:text-6xl"
                        >
                            <TypewriterName text="Akshath Narvekar" className="text-white hover:text-amber-100 transition-colors duration-300" />
                        </motion.span>
                        <div className="h-[120px] w-full flex items-start justify-start overflow-visible -ml-2">
                            <TextHoverEffect text="Full Stack Developer" />
                        </div>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="max-w-xl text-lg text-neutral-400 mb-8 leading-relaxed font-light"
                    >
                        <strong className="text-neutral-200">B.Tech Computer Engineering</strong> at FCRIT (9.29 CGPA).<br />
                        Specializing in high-performance web systems, industrial data solutions, and multi-agent AI architectures.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex gap-4"
                    >
                        <ShimmerButton href="#work">View Work</ShimmerButton>
                        <a href="/CV_Akshath_Narvekar.pdf" download className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors text-sm font-medium backdrop-blur-sm">
                            Download Resume
                        </a>
                        <a href="https://github.com/AkshathNarvekar02" target="_blank" title="GitHub" className="p-3 text-neutral-400 hover:text-white transition-colors border border-transparent hover:border-white/10 rounded-full">
                            <Icons.Github className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>

                {/* Profile Photo Placeholder */}
                <div className="flex justify-center md:justify-end order-1 md:order-2 relative group">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/10 p-2"
                    >
                        <div className="w-full h-full rounded-full bg-neutral-900 overflow-hidden relative">
                            {/* Glowing Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                            <img
                                src="/photo.jpg"
                                alt="Akshath Narvekar"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out"
                            />
                        </div>
                        {/* Orbiting Dot */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full"
                        >
                            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-amber-400 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]"></span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
