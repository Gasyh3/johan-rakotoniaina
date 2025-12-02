"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function LoadingOverlay() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        let mounted = true;
        const images = Array.from(document.images);
        const totalImages = images.length;

        if (totalImages === 0) {
            const instantTimer = window.setTimeout(() => {
                if (mounted) {
                    setIsReady(true);
                }
            }, 300);
            return () => window.clearTimeout(instantTimer);
        }

        let loadedCount = 0;

        const markReady = () => {
            loadedCount += 1;
            if (loadedCount >= totalImages && mounted) {
                setIsReady(true);
            }
        };

        images.forEach((img) => {
            if (img.complete && img.naturalWidth > 0) {
                markReady();
                return;
            }
            img.addEventListener("load", markReady);
            img.addEventListener("error", markReady);
        });

        const fallbackTimer = window.setTimeout(() => {
            if (mounted) {
                setIsReady(true);
            }
        }, 3500);

        return () => {
            mounted = false;
            window.clearTimeout(fallbackTimer);
            images.forEach((img) => {
                img.removeEventListener("load", markReady);
                img.removeEventListener("error", markReady);
            });
        };
    }, []);

    return (
        <AnimatePresence>
            {!isReady && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="fixed inset-0 z-[120] flex items-center justify-center bg-[#f5efeb] text-[#2f3d56]"
                >
                    <div className="flex flex-col items-center gap-6">
                        <div className="relative h-16 w-16">
                            <motion.div
                                className="absolute inset-0 rounded-full border-[3px] border-[#2f3d56]/15"
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute inset-1 rounded-full border-[3px] border-transparent border-t-[#567cbd]"
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute inset-4 rounded-full bg-[#2f3d56]/10 blur-sm"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            />
                        </div>
                        <div className="text-center">
                            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-[#2f3d56]">
                                Chargement
                            </p>
                            <p className="mt-2 text-sm text-[#567cbd]">
                                Les visuels se mettent en place...
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
