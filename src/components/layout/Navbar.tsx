import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '../../lib/utils';

export const Navbar = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={cn(
                "fixed top-0 left-0 w-full z-40 transition-all duration-300",
                scrolled ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
                <span className="font-display italic text-xl text-white">AN.</span>
                <div className="flex gap-8 text-sm font-medium text-neutral-400">
                    <a href="#work" className="hover:text-amber-300 transition-colors">Work</a>
                    <a href="#about" className="hover:text-amber-300 transition-colors">About</a>
                    <a href="mailto:akshath.narvekar02@gmail.com" className="hover:text-amber-300 transition-colors">Contact</a>
                </div>
            </div>
        </motion.nav>
    );
};
