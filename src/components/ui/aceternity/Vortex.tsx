import { useRef, useEffect } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

interface VortexProps {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    particleCount?: number;

    baseHue?: number;
    baseSpeed?: number;
    rangeSpeed?: number;
    baseRadius?: number;
    rangeRadius?: number;
    backgroundColor?: string;
    colors?: string[]; // Custom colors for gold/silver
    particleOpacity?: number;
}

export const Vortex = ({
    children,
    className,
    containerClassName,
    particleCount = 700,

    baseHue = 220,
    baseSpeed = 0.0,
    rangeSpeed = 1.5,
    baseRadius = 1,
    rangeRadius = 2,
    backgroundColor = "#000000",
    colors = ["#fbbf24", "#f59e0b", "#e5e7eb", "#d1d5db"], // Gold and Silver defaults
    particleOpacity = 0.7,
}: VortexProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const noise3D = createNoise3D();
    let tick = 0;

    const particlePropsLength = 9; // x, y, vx, vy, life, ttl, speed, radius, hue

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let center = [0, 0];
        let particleProps: Float32Array;

        // Resize
        const resize = () => {
            const { innerWidth, innerHeight } = window;
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            center = [0.5 * canvas.width, 0.5 * canvas.height];
            initParticles();
        };

        // Init Particles
        const initParticles = () => {
            particleProps = new Float32Array(particleCount * particlePropsLength);

            for (let i = 0; i < particlePropsLength * particleCount; i += particlePropsLength) {
                initParticle(i);
            }
        };

        const initParticle = (i: number) => {
            const { width, height } = canvas;
            const x = Math.random() * width;
            const y = Math.random() * height; // Center heavy? No, full screen.
            const vx = 0;
            const vy = 0;
            const life = 0;
            const ttl = 50 + Math.random() * 50;
            const speed = baseSpeed + Math.random() * rangeSpeed;
            const radius = baseRadius + Math.random() * rangeRadius;
            const hue = baseHue + Math.random() * 100;

            const p = particleProps;
            p[i] = x;
            p[i + 1] = y;
            p[i + 2] = vx;
            p[i + 3] = vy;
            p[i + 4] = life;
            p[i + 5] = ttl;
            p[i + 6] = speed;
            p[i + 7] = radius;
            p[i + 8] = hue;
        };

        const drawParticle = (x: number, y: number, r: number, c: string, alpha: number) => {
            ctx.save();
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = c;
            ctx.globalAlpha = alpha;
            ctx.fill();
            ctx.restore();
        }

        const updateParticle = (i: number) => {
            const { width, height } = canvas;
            const p = particleProps;

            const i2 = 1 + i, i3 = 2 + i, i4 = 3 + i, i5 = 4 + i, i6 = 5 + i, i7 = 6 + i;

            let n;
            // Vortex flow field
            const x = p[i];
            const y = p[i2];

            // Calculate noise based on position
            n = noise3D(x * 0.001, y * 0.001, tick * 0.0005);

            // Calculate angle from center for vortex effect
            const dx = x - center[0];
            const dy = y - center[1];

            const angle = Math.atan2(dy, dx);

            // Swirl force: Tangential to the circle + slightly inwards/outwards + noise
            // To behave like a vortex, we want tangential motion mainly.
            // angle + PI/2 is tangent.

            const vortexAngle = angle + Math.PI / 2 + n * 0.5;

            const vx = Math.cos(vortexAngle) * p[i7];
            const vy = Math.sin(vortexAngle) * p[i7];

            // Lerp velocity
            p[i3] = p[i3] * 0.5 + vx * 0.5; // Smooth transitions
            p[i4] = p[i4] * 0.5 + vy * 0.5;

            p[i] += p[i3];
            p[i2] += p[i4];

            // Reset if out of bounds (optional, or just let them loop/respawn)
            // Check life
            p[i5]++;
            if (p[i5] > p[i6] || x < 0 || x > width || y < 0 || y > height) {
                initParticle(i);
            }
        };

        const draw = () => {
            tick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Background fill if provided, otherwise transparent
            if (backgroundColor !== "transparent") {
                ctx.fillStyle = backgroundColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            for (let i = 0; i < particlePropsLength * particleCount; i += particlePropsLength) {
                updateParticle(i);

                const x = particleProps[i];
                const y = particleProps[i + 1];
                const r = particleProps[i + 7];

                // Pick color based on index or random? 
                // Let's use the colors prop cyclically for consistent mixing.
                // i / particlePropsLength gives the particle index.
                const pIndex = i / particlePropsLength;
                const colorIndex = Math.floor(pIndex) % colors.length;
                const color = colors[colorIndex];

                // Fade in/out based on life
                const life = particleProps[i + 4];
                const ttl = particleProps[i + 5];
                const alpha = Math.sin((life / ttl) * Math.PI); // Smooth fade in/out

                drawParticle(x, y, r, color, alpha * particleOpacity);
            }

            requestAnimationFrame(draw);
        };

        resize();
        window.addEventListener("resize", resize);
        requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, [particleCount, backgroundColor, colors]); // Dependencies

    return (
        <div className={cn("relative h-full w-full overflow-hidden", containerClassName)}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                ref={containerRef}
                className="absolute inset-0 z-0 flex items-center justify-center bg-transparent"
            >
                <canvas ref={canvasRef} />
            </motion.div>
            <div className={cn("relative z-10", className)}>
                {children}
            </div>
        </div>
    );
};
