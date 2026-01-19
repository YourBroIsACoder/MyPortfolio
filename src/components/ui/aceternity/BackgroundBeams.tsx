"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute h-full w-full inset-0 bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
                className
            )}
        >
            <div className="absolute inset-0 bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="absolute inset-0 h-full w-full bg-neutral-950 ">
                <div className="absolute h-full w-full bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="absolute inset-0 z-0  h-full w-full  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
                    {/* Beams handled by canvas or complex SVG usually, simplifying for this environment with SVG lines */}
                    <Beams />
                </div>
            </div>
        </div>
    );
};

const Beams = () => {
    return (
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
        >
            <motion.path
                d="M0,0 L1000,1000"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            />
            <motion.path
                d="M1000,0 L0,1000"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "linear", delay: 1 }}
            />
            <motion.path
                d="M500,0 L500,1000"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
            {/* Add more random beams */}
            {[...Array(5)].map((_, i) => (
                <motion.path
                    key={i}
                    d={`M${Math.random() * 1000},0 L${Math.random() * 1000},1000`}
                    stroke="rgba(245, 158, 11, 0.1)" // Amber
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
                    transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                />
            ))}
        </svg>
    )
}
