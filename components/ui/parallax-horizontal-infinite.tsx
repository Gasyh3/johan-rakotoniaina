"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const ParallaxHorizontalInfinite = ({
    images,
    className,
}: {
    images: string[];
    className?: string;
}) => {
    // IMPORTANT :
    // Pour ne JAMAIS voir de vide, on duplique simplement les 6 images → 12 en tout
    const infiniteLine = [...images, ...images];

    return (
        <div className={cn("w-full overflow-hidden py-10", className)}>
            <div className="relative w-full">
                <motion.div
                    className="flex gap-6"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 25, // modifie pour changer la vitesse
                        ease: "linear",
                    }}
                >
                    {infiniteLine.map((src, idx) => (
                        <img
                            key={`scroll-${idx}`}
                            src={src}
                            alt="scroll-item"
                            className="h-24 w-auto rounded-lg object-contain select-none pointer-events-none"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};