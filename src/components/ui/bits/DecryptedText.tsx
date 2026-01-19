"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "../../../lib/utils";

interface DecryptedTextProps {
    text: string;
    speed?: number;
    maxIterations?: number;
    sequential?: boolean;
    revealDirection?: "start" | "end" | "center";
    useOriginalCharsOnly?: boolean;
    characters?: string;
    className?: string;
    animateOn?: "view" | "hover";
    parentRef?: React.RefObject<HTMLElement>;
    encryptedClassName?: string;
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({
    text,
    speed = 50,
    maxIterations = 10,
    sequential = false,
    revealDirection = "start",
    useOriginalCharsOnly = false,
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
    className = "",
    parentRef,
    animateOn = "hover",
    encryptedClassName = "",
}) => {
    const [displayText, setDisplayText] = useState<string>(text);
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const [isScrambling, setIsScrambling] = useState<boolean>(false);
    const revealedIndices = useRef<Set<number>>(new Set());
    const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    useEffect(() => {
        let interval: ReturnType<typeof setTimeout>;

        // Auto-trigger on view if animateOn is 'view'
        if (animateOn === "view" && isInView && !isScrambling) {
            scramble();
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isInView, animateOn]);


    // Effect to handle hover state if parentRef is provided
    useEffect(() => {
        const parent = parentRef?.current;

        if (animateOn === "hover" && parent) {
            const handleMouseEnter = () => {
                setIsHovering(true);
                if (!isScrambling) scramble();
            };
            const handleMouseLeave = () => setIsHovering(false);

            parent.addEventListener("mouseenter", handleMouseEnter);
            parent.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                parent.removeEventListener("mouseenter", handleMouseEnter);
                parent.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, [parentRef, animateOn, isScrambling]);


    const scramble = () => {
        if (isScrambling) return;
        setIsScrambling(true);

        const originalText = text.split("");
        let iteration = 0;

        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText((prevText) => {
                const newText = prevText.split("");

                originalText.forEach((char, index) => {
                    if (char === " ") return; // Skip spaces

                    if (iteration >= maxIterations) {
                        newText[index] = char;
                        return;
                    }

                    // Random character logic
                    if (Math.random() < 0.5) { // 50% chance to scramble each frame
                        const randomChar = characters[Math.floor(Math.random() * characters.length)];
                        newText[index] = randomChar;
                    }
                });

                return newText.join("");
            });

            iteration++;
            if (iteration > maxIterations) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setDisplayText(text); // Ensure final state is correct
                setIsScrambling(false);
            }

        }, speed);
    };

    return (
        <span ref={ref} className={cn("inline-block whitespace-nowrap", className)}>
            <span className="sr-only">{text}</span>
            <span aria-hidden="true">
                {displayText.split('').map((char, index) => {
                    const isOriginal = char === text[index];
                    return (
                        <span key={index} className={cn(isOriginal ? "" : encryptedClassName)}>{char}</span>
                    )
                })}
            </span>
        </span>
    );
};
