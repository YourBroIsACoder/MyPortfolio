import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypewriterNameProps {
    text: string;
    className?: string;
}

export const TypewriterName = ({ text, className }: TypewriterNameProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let currentIndex = 0;
        const timer = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                setIsComplete(true);
                clearInterval(timer);
            }
        }, 80); // Slightly faster for better feel

        return () => clearInterval(timer);
    }, [text]);

    return (
        <motion.span
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {displayedText}
            {!isComplete && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                    className="text-amber-400 ml-1"
                >
                    |
                </motion.span>
            )}
            {isComplete && (
                <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [1, 0.3, 1], scale: 1 }}
                    transition={{ 
                        opacity: { duration: 2, repeat: Infinity, repeatType: "reverse" },
                        scale: { duration: 0.3, delay: 0.2 }
                    }}
                    className="ml-2 inline-block w-2 h-2 bg-amber-400 rounded-full"
                />
            )}
        </motion.span>
    );
};