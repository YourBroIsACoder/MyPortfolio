import { type ReactNode } from 'react';
import { CardSpotlight } from "./aceternity/CardSpotlight";
import { cn } from "../../lib/utils";

interface GoldCardProps {
    children: ReactNode;
    className?: string;
    title?: string;
    subtitle?: string;
}

export const GoldCard = ({ children, className, title, subtitle }: GoldCardProps) => {
    return (
        <CardSpotlight
            className={cn(
                "bg-neutral-900/40 backdrop-blur-xl border-white/5 h-full transition-all duration-500 flex flex-col overflow-hidden",
                "hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.1)] hover:border-white/10",
                className
            )}
            color="#FEF3C7" // Very light amber/cream for the spotlight
            radius={400}
        >
            {/* Inner Border for depth */}
            <div className="absolute inset-[1px] rounded-[11px] border border-white/5 pointer-events-none z-0" />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-20 pointer-events-none z-0" />

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>

            {title && (
                <div className="mb-8 relative z-20 flex-shrink-0 border-b border-white/5 pb-4">
                    <h3 className="text-xl font-display font-medium text-neutral-100 tracking-wide group-hover/spotlight:text-amber-100 transition-colors duration-500">{title}</h3>
                    {subtitle && <p className="text-[10px] font-mono text-amber-500/80 uppercase tracking-[0.2em] mt-2 group-hover/spotlight:text-amber-400 transition-colors duration-500">{subtitle}</p>}
                </div>
            )}
            <div className="relative z-10 flex-1 w-full">
                {children}
            </div>
        </CardSpotlight>
    );
};
