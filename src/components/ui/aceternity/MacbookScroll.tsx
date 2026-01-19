import React, { useEffect, useRef, useState } from "react";
import { MotionValue, useScroll, useTransform, motion } from "framer-motion";
import { cn } from "../../../lib/utils";
import {
    IconBrightnessDown,
    IconBrightnessUp,
    IconCaretRightFilled,
    IconCaretUpFilled,
    IconMicrophone,
    IconMoon,
    IconPlayerSkipBack,
    IconPlayerSkipForward,
    IconPlayerTrackNext,
    IconSearch,
    IconVolume,
    IconVolume2,
    IconVolume3,
    IconWorld,
    IconCommand,
    IconCaretDownFilled,
} from "@tabler/icons-react";

export const MacbookScroll = ({
    src,
    title,
}: {
    src?: string;
    title?: string | React.ReactNode;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window && window.innerWidth < 768) {
            setIsMobile(true);
        }
    }, []);

    const scaleX = useTransform(
        scrollYProgress,
        [0, 0.3],
        [1.2, isMobile ? 1 : 1.5]
    );
    const scaleY = useTransform(
        scrollYProgress,
        [0, 0.3],
        [0.6, isMobile ? 1 : 1.5]
    );
    const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
    const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
    const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div
            ref={ref}
            className="min-h-[200vh] flex flex-col items-center py-0 md:py-80 justify-start flex-shrink-0 w-full transform scale-[0.35] sm:scale-50 md:scale-100 origin-top"
        >
            <motion.div
                style={{
                    translateY: textTransform,
                    opacity: textOpacity,
                }}
                className="text-2xl md:text-5xl font-bold text-white text-center mb-32"
            >
                {title || (
                    <span>
                        This Macbook is built with Tailwindcss. <br /> No kidding.
                    </span>
                )}
            </motion.div>
            {/* Lid */}
            <Lid
                src={src}
                scaleX={scaleX}
                scaleY={scaleY}
                rotate={rotate}
                translate={translate}
            />
            {/* Base Area */}
            <div className="h-[22rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative -z-10">
                {/* above keyboard bar */}
                <div className="h-10 w-full relative">
                    <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
                </div>
                <div className="flex relative">
                    <div className="mx-auto w-[10%] overflow-hidden  h-full">
                        <SpeakerGrid />
                    </div>
                    <div className="mx-auto w-[80%] h-full">
                        <Keypad />
                    </div>
                    <div className="mx-auto w-[10%] overflow-hidden  h-full">
                        <SpeakerGrid />
                    </div>
                </div>
                <Trackpad />
                <div className="h-2 w-20 mx-auto bg-gradient-to-t from-[#272729] to-[#050505] rounded-b-3xl" />
            </div>
        </div>
    );
};

const Lid = ({
    scaleX,
    scaleY,
    rotate,
    translate,
    src,
}: {
    scaleX: MotionValue<number>;
    scaleY: MotionValue<number>;
    rotate: MotionValue<number>;
    translate: MotionValue<number>;
    src?: string;
}) => {
    return (
        <div className="relative [perspective:800px]">
            <div
                style={{
                    transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
                    transformOrigin: "bottom",
                    transformStyle: "preserve-3d",
                }}
                className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
            >
                <div
                    style={{
                        boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
                    }}
                    className="absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center"
                >
                    <span className="text-white">
                        <IconWorld size={48} className="stroke-1 text-neutral-800" />
                    </span>
                </div>
            </div>
            <motion.div
                style={{
                    scaleX: scaleX,
                    scaleY: scaleY,
                    rotateX: rotate,
                    translateY: translate,
                    transformStyle: "preserve-3d",
                    transformOrigin: "top",
                }}
                className="h-96 w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2"
            >
                <div className="absolute inset-0 bg-[#272729] rounded-lg" />
                {src && (
                    <img
                        src={src}
                        alt="aceternity logo"
                        className="object-cover object-left-top w-full h-full absolute inset-0 rounded-lg"
                    />
                )}
            </motion.div>
        </div>
    );
};

const Trackpad = () => {
    return (
        <div
            className="w-[40%] mx-auto h-32  rounded-xl my-1"
            style={{
                boxShadow: "0px 0px 1px 1px #00000020 inset",
            }}
        ></div>
    );
};

const Keypad = () => {
    return (
        <div className="h-full rounded-md bg-[#050505] mx-1 p-1">
            {/* Row 1 */}
            <div className="flex justify-between items-center w-full h-8 mb-1">
                <KBtn
                    className="w-10 items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start"
                >
                    esc
                </KBtn>
                <KBtn>
                    <IconBrightnessDown className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F1</span>
                </KBtn>

                <KBtn>
                    <IconBrightnessUp className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F2</span>
                </KBtn>
                <KBtn>
                    <IconCommand className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F3</span>
                </KBtn>
                <KBtn>
                    <IconSearch className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F4</span>
                </KBtn>
                <KBtn>
                    <IconMicrophone className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F5</span>
                </KBtn>
                <KBtn>
                    <IconMoon className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F6</span>
                </KBtn>
                <KBtn>
                    <IconPlayerSkipBack className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F7</span>
                </KBtn>
                <KBtn>
                    <IconPlayerSkipForward className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F8</span>
                </KBtn>
                <KBtn>
                    <IconPlayerTrackNext className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F8</span>
                </KBtn>
                <KBtn>
                    <IconVolume3 className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F10</span>
                </KBtn>
                <KBtn>
                    <IconVolume2 className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F11</span>
                </KBtn>
                <KBtn>
                    <IconVolume className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F12</span>
                </KBtn>
                <KBtn>
                    <div className="h-4 w-4 rounded-full  bg-gradient-to-b from-20% from-neutral-900 via-black to-neutral-900 p-px">
                        <div className="bg-black h-full w-full rounded-full" />
                    </div>
                </KBtn>
            </div>

            {/* Row 2 */}
            <div className="flex justify-between items-center w-full h-8 mb-1">
                <KBtn className="w-12">~</KBtn>
                <KBtn>1</KBtn>
                <KBtn>2</KBtn>
                <KBtn>3</KBtn>
                <KBtn>4</KBtn>
                <KBtn>5</KBtn>
                <KBtn>6</KBtn>
                <KBtn>7</KBtn>
                <KBtn>8</KBtn>
                <KBtn>9</KBtn>
                <KBtn>0</KBtn>
                <KBtn>-</KBtn>
                <KBtn>+</KBtn>
                <KBtn
                    className="w-12 items-end justify-end pr-[4px] pb-[2px]"
                    childrenClassName="items-end"
                >
                    delete
                </KBtn>
            </div>

            {/* Row 3 */}
            <div className="flex justify-between items-center w-full h-8 mb-1">
                <KBtn
                    className="w-14 items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start"
                >
                    tab
                </KBtn>
                <KBtn>Q</KBtn>
                <KBtn>W</KBtn>
                <KBtn>E</KBtn>
                <KBtn>R</KBtn>
                <KBtn>T</KBtn>
                <KBtn>Y</KBtn>
                <KBtn>U</KBtn>
                <KBtn>I</KBtn>
                <KBtn>O</KBtn>
                <KBtn>P</KBtn>
                <KBtn>{`[`}</KBtn>
                <KBtn>{`]`}</KBtn>
                <KBtn
                    className="w-10 items-end justify-end pr-[4px] pb-[2px]"
                    childrenClassName="items-end"
                >
                    \
                </KBtn>
            </div>

            {/* Row 4 */}
            <div className="flex justify-between items-center w-full h-8 mb-1">
                <KBtn
                    className="w-16 items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start"
                >
                    caps lock
                </KBtn>
                <KBtn>A</KBtn>
                <KBtn>S</KBtn>
                <KBtn>D</KBtn>
                <KBtn>F</KBtn>
                <KBtn>G</KBtn>
                <KBtn>H</KBtn>
                <KBtn>J</KBtn>
                <KBtn>K</KBtn>
                <KBtn>L</KBtn>
                <KBtn>;</KBtn>
                <KBtn>{"'"}</KBtn>
                <KBtn
                    className="w-20 items-end justify-end pr-[4px] pb-[2px]"
                    childrenClassName="items-end"
                >
                    return
                </KBtn>
            </div>

            {/* Row 5 */}
            <div className="flex justify-between items-center w-full h-8 mb-1">
                <KBtn
                    className="w-20 items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start"
                >
                    shift
                </KBtn>
                <KBtn>Z</KBtn>
                <KBtn>X</KBtn>
                <KBtn>C</KBtn>
                <KBtn>V</KBtn>
                <KBtn>B</KBtn>
                <KBtn>N</KBtn>
                <KBtn>M</KBtn>
                <KBtn>{`,`}</KBtn>
                <KBtn>{`.`}</KBtn>
                <KBtn>{`/`}</KBtn>
                <KBtn
                    className="w-24 items-end justify-end pr-[4px] pb-[2px]"
                    childrenClassName="items-end"
                >
                    shift
                </KBtn>
            </div>

            {/* Row 6 */}
            <div className="flex justify-between items-center w-full h-8 mb-1">
                <KBtn
                    className="w-10 items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start"
                >
                    fn
                </KBtn>
                <KBtn
                    className="w-10 items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start"
                >
                    control
                </KBtn>
                <KBtn
                    className="w-12 items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start"
                >
                    option
                </KBtn>
                <KBtn
                    className="w-14 items-end justify-center pl-[4px] pb-[2px]"
                    childrenClassName="items-center"
                >
                    command
                </KBtn>
                <KBtn className="w-40"></KBtn>
                <KBtn
                    className="w-14 items-end justify-center pl-[4px] pb-[2px]"
                    childrenClassName="items-center"
                >
                    command
                </KBtn>
                <KBtn
                    className="w-12 items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start"
                >
                    option
                </KBtn>
                <div className="w-[4.5rem] h-6 mt-[2px] flex flex-col justify-end">
                    <div className="flex justify-center">
                        <KBtn className="w-6 h-3 items-center justify-center"> <IconCaretUpFilled className="h-[6px] w-[6px]" /> </KBtn>
                    </div>
                    <div className="flex justify-between">
                        <KBtn className="w-6 h-3 items-center justify-center"> <IconCaretRightFilled className="h-[6px] w-[6px] rotate-180" /> </KBtn>
                        <KBtn className="w-6 h-3 items-center justify-center"> <IconCaretDownFilled className="h-[6px] w-[6px]" /> </KBtn>
                        <KBtn className="w-6 h-3 items-center justify-center"> <IconCaretRightFilled className="h-[6px] w-[6px]" /> </KBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

const KBtn = ({
    className,
    children,
    childrenClassName,
    backlit = true,
}: {
    className?: string;
    children?: React.ReactNode;
    childrenClassName?: string;
    backlit?: boolean;
}) => {
    return (
        <div
            className={cn(
                "p-[0.5px] rounded-[4px]",
                backlit && "bg-white/[0.2] shadow-xl shadow-white"
            )}
        >
            <div
                className={cn(
                    "h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center",
                    className
                )}
                style={{
                    boxShadow:
                        "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
                }}
            >
                <div
                    className={cn(
                        "text-neutral-200 text-[5px] w-full flex justify-center items-center flex-col",
                        childrenClassName
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

const SpeakerGrid = () => {
    return (
        <div
            className="flex px-[0.5px] gap-[2px] mt-2 h-40"
            style={{
                backgroundImage:
                    "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
                backgroundSize: "3px 3px",
            }}
        ></div>
    );
};
