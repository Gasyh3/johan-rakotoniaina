import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { ChevronRight } from 'lucide-react';

export function Hero() {
    return (
        <section id="hero" className="w-full overflow-hidden">
            <BackgroundGradientAnimation containerClassName="w-full min-h-[calc(100dvh-64px)]">
                <div className="relative z-50 flex min-h-[calc(100dvh-64px)] w-full items-center justify-center px-4 text-center">
                    <div className="flex flex-col items-center gap-6">
                        <p className="pointer-events-none text-3xl font-bold text-white md:text-4xl lg:text-7xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                            Johan Rakotoniaina
                        </p>

                        <p className="text-lg md:text-2xl text-white/90">
                            Faire simple, faire beau, faire efficace.
                        </p>
                        <a
                            href="/assets/cv.pdf"
                            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-base font-semibold text-[#2f3d56] shadow-md shadow-black/10 backdrop-blur transition hover:-translate-y-[2px] hover:shadow-lg hover:shadow-black/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Mon CV
                            <ChevronRight size={16} />
                        </a>
                    </div>
                </div>

            </BackgroundGradientAnimation>
        </section>
    );
}
