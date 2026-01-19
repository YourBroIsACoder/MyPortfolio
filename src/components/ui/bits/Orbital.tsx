"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../../lib/utils";

export const Orbital = ({
    radius = 200,
    speed = 1,
    className,
    items,
}: {
    radius?: number;
    speed?: number;
    className?: string;
    items: { icon: React.ReactNode; label: string }[];
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        let animationFrameId: number;
        const animate = () => {
            setRotation((prev) => (prev + 0.1 * speed) % 360);
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(animationFrameId);
    }, [speed]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative flex items-center justify-center rounded-full border border-white/5 bg-transparent",
                className
            )}
            style={{
                width: radius * 2,
                height: radius * 2,
            }}
        >
            {/* Center content or glowing orb */}
            <div className="absolute h-20 w-20 rounded-full bg-amber-500/10 blur-xl"></div>
            <div className="absolute h-10 w-10 rounded-full bg-amber-500/20 blur-md"></div>

            {items.map((item, index) => {
                const angle = (index / items.length) * 360 + rotation;
                const radian = (angle * Math.PI) / 180;
                const x = Math.cos(radian) * radius;
                const y = Math.sin(radian) * radius;

                return (
                    <div
                        key={index}
                        className="absolute flex flex-col items-center justify-center p-2 rounded-lg bg-neutral-900 border border-white/10 shadow-lg transition-transform hover:scale-110 group"
                        style={{
                            transform: `translate(${x}px, ${y}px)`,
                        }}
                    >
                        <div className="w-8 h-8 flex items-center justify-center text-neutral-300">
                            {item.icon}
                        </div>
                        <span className="hidden group-hover:block absolute -bottom-5 text-[10px] text-amber-400 bg-black/80 px-1 rounded whitespace-nowrap z-50">
                            {item.label}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};
