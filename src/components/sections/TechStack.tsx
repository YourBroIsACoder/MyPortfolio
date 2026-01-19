import { Icons } from "../ui/Icons";

export const TechStack = () => {
    return (
        <div className="w-full border-y border-white/5 py-8 mb-24 bg-white/[0.01]">
            <div className="flex justify-between items-center max-w-4xl mx-auto text-neutral-500 text-xs font-mono uppercase tracking-[0.2em] opacity-70 hover:opacity-100 transition-opacity">
                <span className="flex items-center gap-2"><Icons.Code className="w-4 h-4 text-amber-500/50" /> Kotlin</span>
                <span>PostgreSQL</span>
                <span className="text-amber-100/80">AWS Bedrock</span>
                <span>TimescaleDB</span>
                <span className="flex items-center gap-2"><Icons.Cpu className="w-4 h-4 text-amber-500/50" /> Flutter</span>
                <span>Next.js</span>
            </div>
        </div>
    );
};
