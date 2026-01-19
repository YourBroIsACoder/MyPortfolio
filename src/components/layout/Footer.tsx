

import { BackgroundBeams } from "../ui/aceternity/BackgroundBeams";

export const Footer = () => {
    return (
        <footer className="relative mt-32 border-t border-white/5 bg-neutral-900/50">
            <div className="h-[20rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                <div className="max-w-2xl mx-auto p-4 relative z-10 w-full pt-10">
                    <h1 className="relative z-10 text-lg md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                        Ready to build something amazing?
                    </h1>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                        Let's connect and discuss how we can turn your ideas into reality.
                    </p>

                    <div className="flex justify-center gap-6 mt-8">
                        <a href="https://linkedin.com" target="_blank" className="text-neutral-400 hover:text-amber-400 transition-colors uppercase text-xs tracking-widest">LinkedIn</a>
                        <a href="https://twitter.com" target="_blank" className="text-neutral-400 hover:text-amber-400 transition-colors uppercase text-xs tracking-widest">Twitter</a>
                        <a href="mailto:contact@example.com" className="text-neutral-400 hover:text-amber-400 transition-colors uppercase text-xs tracking-widest">Email</a>
                    </div>
                    <div className="text-center mt-12 text-[10px] text-neutral-600 font-mono uppercase tracking-widest">
                        © 2026 Akshath Narvekar
                    </div>
                </div>
                <BackgroundBeams />
            </div>
        </footer>
    );
};
