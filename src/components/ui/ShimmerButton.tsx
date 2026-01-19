import React from 'react';
import { cn } from "../../lib/utils";

interface ShimmerButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
}

export const ShimmerButton = ({ children, href, onClick, className }: ShimmerButtonProps) => {
    const Component = href ? 'a' : 'button';

    return (
        <Component
            href={href}
            onClick={onClick}
            className={cn(
                "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-8 font-medium text-neutral-300 transition-colors hover:text-white border border-white/10",
                className
            )}
        >
            <div className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-gradient-to-r from-transparent via-amber-500/10 to-transparent transition-all duration-1000 group-hover:translate-x-full" />
            <span className="relative flex items-center gap-2">{children}</span>
        </Component>
    );
};
