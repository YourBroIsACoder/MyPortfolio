"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import { cn } from "../../../lib/utils";

interface MagicCardProps {
    children: ReactNode;
    className?: string;
    gradientSize?: number;
    gradientColor?: string;
    gradientOpacity?: number;
}

export const MagicCard = ({
    children,
    className,
    gradientSize = 200,
    gradientColor = "#262626",
    gradientOpacity = 0.8,
}: MagicCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mouseX, setMouseX] = useState(-gradientSize);
    const [mouseY, setMouseY] = useState(-gradientSize);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (cardRef.current) {
                const { left, top } = cardRef.current.getBoundingClientRect();
                setMouseX(e.clientX - left);
                setMouseY(e.clientY - top);
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [gradientSize]);

    return (
        <div
            ref={cardRef}
            className={cn(
                "group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-black",
                className
            )}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)`,
                    opacity: gradientOpacity,
                }}
            />
            <div className="relative z-10 h-full">{children}</div>

            {/* Border Beam Effect (simplified for this component specific request) */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm"
                style={{
                    maskImage: `radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, black, transparent 100%)`,
                    WebkitMaskImage: `radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, black, transparent 100%)`,
                }}
            />
        </div>
    );
};
