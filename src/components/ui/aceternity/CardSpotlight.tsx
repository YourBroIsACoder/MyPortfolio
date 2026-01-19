import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import type { MouseEvent as ReactMouseEvent } from "react";
import { cn } from "../../../lib/utils";

export const CardSpotlight = ({
    children,
    radius = 350,
    color = "#D97706", // Amber-500 default for gold tint
    className,
    ...props
}: {
    radius?: number;
    color?: string;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: ReactMouseEvent<HTMLDivElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                "group/spotlight p-10 rounded-xl relative border border-neutral-800 bg-black dark:border-neutral-800",
                className
            )}
            onMouseMove={handleMouseMove}
            {...props}
        >
            <motion.div
                className="pointer-events-none absolute z-0 -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover/spotlight:opacity-30"
                style={{
                    backgroundColor: color,
                    maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.15),
              transparent 70%
            )
          `,
                }}
            />
            {children}
        </div>
    );
};
