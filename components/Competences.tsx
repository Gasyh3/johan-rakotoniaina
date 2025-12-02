"use client";

import { ParallaxHorizontalInfinite } from "./ui/parallax-horizontal-infinite";

export function Competences() {
    return (
        <section id="competences" className="w-full py-16">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
                <h2 className="text-left text-3xl font-bold text-[#567CBD] md:text-4xl dark:text-white">
                    Ce que j'ai développé en chemin
                </h2>
                <ParallaxHorizontalInfinite images={images} />
            </div>
        </section>
    );
}

const images = [
    // Row 1
    "https://www.pixartprinting.it/blog/wp-content/uploads/2022/12/figma_logo.png",
    "https://tool-advisor.fr/wp-content/uploads/2021/08/Semrush-logo-2021-2.png",
    "https://i0.wp.com/get.site/wp-content/uploads/2021/10/notion-logo.png?ssl=1",

    // Row 2
    "https://1000logos.net/wp-content/uploads/2023/02/Canva-logo.png",
    "https://logos-marques.com/wp-content/uploads/2025/01/CapCut-Logo.png",
    "https://pngimg.com/uploads/meta/meta_PNG12.png",
];
