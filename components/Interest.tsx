"use client";

import { ParallaxHorizontalInterest } from "./ui/parallax-scroll";

export function Interest() {
    return (
        <section id="interest" className="w-full">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-[#567cbd] md:text-4xl">
                    Les instants qui m&apos;inspirent
                </h2>
            </div>
            <ParallaxHorizontalInterest images={images} />
        </section>
    );
}

const images = [
    // Row 1
    "/assets/interests/1.JPG",
    "/assets/interests/2.JPG",
    "/assets/interests/3.JPG",

    // Row 2
    "/assets/interests/4.JPG",
    "/assets/interests/5.JPG",
    "/assets/interests/6.JPG",

    // Row 3
    "/assets/interests/7.jpeg",
    "/assets/interests/8.jpeg",
    "/assets/interests/9.jpeg",

    // Row 4
    "/assets/interests/10.jpeg",
    "/assets/interests/11.jpeg",
    "/assets/interests/12.jpeg",
    "/assets/interests/13.jpeg",
];
