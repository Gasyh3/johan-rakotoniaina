"use client";

import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { cn } from "@/lib/utils";

type StickyScrollItem = {
    title: string;
    description: string;
    content?: React.ReactNode;
    link?: string;
};

type StickyScrollProps = {
    content: StickyScrollItem[];
    contentClassName?: string;
};

export const StickyScroll: React.FC<StickyScrollProps> = ({
    content,
    contentClassName,
}) => {
    const [activeCard, setActiveCard] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        // si tu veux que ce soit sur tout le scroll de la page, remplace par :
        // target: containerRef
        container: containerRef,
        offset: ["start start", "end start"],
    });

    const cardLength = content.length || 1;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const breakpoints = content.map((_, index) => index / cardLength);

        const closestIndex = breakpoints.reduce((acc, breakpoint, index) => {
            const distance = Math.abs(latest - breakpoint);
            const bestDistance = Math.abs(latest - breakpoints[acc]);
            return distance < bestDistance ? index : acc;
        }, 0);

        setActiveCard(closestIndex);
    });

    const backgroundColors = ["#F5EFEB"];

    const linearGradients = [
        "linear-gradient(to bottom right, #06b6d4, #10b981)",
        "linear-gradient(to bottom right, #ec4899, #6366f1)",
        "linear-gradient(to bottom right, #f97316, #eab308)",
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(
        linearGradients[0],
    );

    useEffect(() => {
        setBackgroundGradient(
            linearGradients[activeCard % linearGradients.length],
        );
    }, [activeCard]);

    return (
        <motion.div
            ref={containerRef}
            animate={{
                backgroundColor:
                    backgroundColors[activeCard % backgroundColors.length],
            }}
            className="relative flex h-[35rem] w-full justify-center space-x-10 overflow-y-auto rounded-md p-10"
        >
            {/* Colonne gauche : textes */}
            <div className="relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.4 }}
                                className="text-2xl font-bold text-slate-900"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.4 }}
                                className="mt-6 max-w-sm text-lg text-slate-700"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>

            {/* Colonne droite : bloc sticky (image / contenu cliquable) */}
            <div
                style={{ background: backgroundGradient }}
                className={cn(
                    "sticky top-10 hidden h-100 w-140 overflow-hidden rounded-md bg-white lg:block",
                    contentClassName,
                )}
            >
                {content[activeCard]?.link ? (
                    <a
                        href={content[activeCard].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full w-full"
                    >
                        {content[activeCard]?.content ?? null}
                    </a>
                ) : (
                    content[activeCard]?.content ?? null
                )}
            </div>
        </motion.div>
    );
};
