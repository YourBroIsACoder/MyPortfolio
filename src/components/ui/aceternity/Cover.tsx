import { useEffect, useState, useMemo, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../../lib/utils";
import { SparklesCore } from "./Sparkles"; // Need to create Sparkles if not exists, or approximate

export const Cover = ({
    children,
    className,
}: {
    children?: ReactNode;
    className?: string;
}) => {
    const [hovered, setHovered] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    const [containerWidth, setContainerWidth] = useState(0);
    const [beamPositions, setBeamPositions] = useState<number[]>([]);

    // Generate random values once and memoize them
    const beamAnimations = useMemo(() => {
        const animations = [];
        for (let i = 0; i < 3; i++) {
            animations.push({
                duration: 1.5 + (i * 0.3), // Use deterministic values instead of random
                delay: 0.5 + (i * 0.4)
            });
        }
        return animations;
    }, []);

    useEffect(() => {
        if (ref.current) {
            setContainerWidth(ref.current?.clientWidth ?? 0);
            setBeamPositions([
                -5,
                ref.current.clientWidth / 2,
                ref.current.clientWidth + 5
            ])
        }
    }, []);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            ref={ref}
            className={cn(
                "relative hover:bg-neutral-900 group/cover inline-block dark:bg-neutral-900 bg-neutral-100 px-2 py-2  transition-all duration-200 rounded-sm",
                className
            )}
        >
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            opacity: {
                                duration: 0.2,
                            },
                        }}
                        className="h-full w-full overflow-hidden absolute inset-0"
                    >
                        <motion.div
                            animate={{
                                translateX: ["-50%", "0%"],
                            }}
                            transition={{
                                translateX: {
                                    duration: 10,
                                    ease: "linear",
                                    repeat: Infinity,
                                },
                            }}
                            className="w-[200%] h-full flex"
                        >
                            <SparklesCore
                                background="transparent"
                                minSize={0.4}
                                maxSize={1}
                                particleDensity={500}
                                className="w-full h-full"
                                particleColor="#FFFFFF"
                            />
                            <SparklesCore
                                background="transparent"
                                minSize={0.4}
                                maxSize={1}
                                particleDensity={500}
                                className="w-full h-full"
                                particleColor="#FFFFFF"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            {beamPositions.map((position, index) => (
                <Beam
                    key={index}
                    hovered={hovered}
                    duration={beamAnimations[index]?.duration || 2}
                    delay={beamAnimations[index]?.delay || 1}
                    width={containerWidth}
                    style={{
                        left: `${position}px`,
                    }}
                />
            ))}
            <motion.span
                key={String(hovered)}
                animate={{
                    scale: hovered ? 0.95 : 1,
                    x: hovered ? [0, -2, 2, -2, 2, 0] : 0,
                }}
                exit={{
                    filter: "none",
                    scale: 1,
                    x: 0,
                }}
                transition={{
                    duration: 0.2,
                    x: {
                        duration: 0.2,
                        repeat: Infinity,
                        repeatType: "loop",
                    },
                }}
                className={cn(
                    "dark:text-white inline-block text-neutral-900 relative z-20 group-hover/cover:text-white transition duration-200",
                    className
                )}
            >
                {children}
            </motion.span>
            <CircleIcon className="absolute -right-[2px] -top-[2px]" />
            <CircleIcon className="absolute -bottom-[2px] -right-[2px]" />
            <CircleIcon className="absolute -left-[2px] -top-[2px]" />
            <CircleIcon className="absolute -bottom-[2px] -left-[2px]" />
        </div>
    );
};

export const Beam = ({
    className,
    delay,
    duration,
    hovered,
    width = 600,
    ...props
}: {
    className?: string;
    delay: number;
    duration: number;
    hovered: boolean;
    width?: number;
    style?: React.CSSProperties;
}) => {
    return (
        <motion.div
            initial={{
                width: width,
                rotate: 0,
            }}
            animate={{
                rotate: hovered ? 180 : 0,
            }}
            transition={{
                duration: duration,
                delay: delay,
                ease: "linear",
                repeat: Infinity,
            }}
            className={cn("absolute inset-x-0 inset-y-0 m-auto bg-transparent", className)}
            {...props}
        >
            <motion.div
                animate={{
                    scale: hovered ? 1 : 0,
                }}
                className="h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
        </motion.div>
    );
};

export const CircleIcon = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                `pointer-events-none animate-pulse group-hover/cover:hidden group-hover/cover:opacity-100 group h-2 w-2 rounded-full bg-neutral-600 dark:bg-white opacity-20 group-hover/cover:bg-white`,
                className
            )}
        ></div>
    );
};
