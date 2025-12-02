"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const ParallaxHorizontalInterest = ({
    images,
    className,
}: {
    images: string[];
    className?: string;
}) => {
    // On découpe en 3 parties comme dans ta version
    const third = Math.ceil(images.length / 3);

    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);

    // On duplique les tableaux pour créer une bande infinie
    const firstRow = [...firstPart, ...firstPart];
    const secondRow = [...secondPart, ...secondPart];
    const thirdRow = [...thirdPart, ...thirdPart];

    return (
        <div
            className={cn(
                "w-full overflow-hidden py-10 flex flex-col gap-6", // overflow-hidden pour masquer la fin de la bande
                className
            )}
        >
            {/* Ligne 1 - la plus rapide */}
            {firstRow.length > 0 && (
                <div className="relative w-full">
                    <motion.div
                        className="flex gap-6"
                        // On anime la position x de 0% à -50% (car on a doublé le tableau => 200% de largeur totale)
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 25, // plus petit = plus rapide
                            ease: "linear",
                        }}
                    >
                        {firstRow.map((src, idx) => (
                            <img
                                key={`row1-${idx}`}
                                src={src}
                                alt="thumbnail"
                                className="h-64 w-auto rounded-xl object-cover select-none pointer-events-none"
                            />
                        ))}
                    </motion.div>
                </div>
            )}

            {/* Ligne 2 - un peu plus lente */}
            {secondRow.length > 0 && (
                <div className="relative w-full">
                    <motion.div
                        className="flex gap-6"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 35, // plus long = plus lent
                            ease: "linear",
                        }}
                    >
                        {secondRow.map((src, idx) => (
                            <img
                                key={`row2-${idx}`}
                                src={src}
                                alt="thumbnail"
                                className="h-64 w-auto rounded-xl object-cover select-none pointer-events-none"
                            />
                        ))}
                    </motion.div>
                </div>
            )}

            {/* Ligne 3 - encore plus lente, sens inverse pour l'effet parallax */}
            {thirdRow.length > 0 && (
                <div className="relative w-full">
                    <motion.div
                        className="flex gap-6"
                        animate={{ x: ["-50%", "0%"] }} // sens inverse
                        transition={{
                            repeat: Infinity,
                            duration: 45,
                            ease: "linear",
                        }}
                    >
                        {thirdRow.map((src, idx) => (
                            <img
                                key={`row3-${idx}`}
                                src={src}
                                alt="thumbnail"
                                className="h-64 w-auto rounded-xl object-cover select-none pointer-events-none"
                            />
                        ))}
                    </motion.div>
                </div>
            )}
        </div>
    );
};
