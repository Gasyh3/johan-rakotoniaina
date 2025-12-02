import Image from "next/image";

export function About() {
    return (
        <section
            id="about"
            className="w-full min-h-screen overflow-hidden bg-[#f5efeb]"
        >
            <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:items-center md:gap-16 md:py-24">
                <div className="relative w-full max-w-xl overflow-hidden rounded-2xl shadow-lg shadow-[#2f3d56]/10 aspect-[4/5] md:max-w-md lg:max-w-lg">
                    <Image
                        src="/assets/joh_about.png"
                        alt="Portrait de Johan Rakotoniaina"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="flex-1 text-left md:mt-0">
                    <h2 className="mb-4 text-3xl font-bold text-[#567cbd] md:text-4xl font-display">
                        D'où je viens, où je vais...
                    </h2>
                    <p className="text-base leading-relaxed text-justify pt-4 text-[#567cbd]/90 md:text-lg">
                        Je m'appelle Johan Rakotoniaina, né à Madagascar, et c’est ce mélange de racines et de rêves qui façonne ma vision du digital.
                        En venant étudier en France, j’ai cherché bien plus qu’un diplôme : un chemin pour mieux me comprendre. Entre deux cultures, j’ai appris la sensibilité,
                        la curiosité et l’art de m’adapter.
                    </p>
                    <p className="text-base leading-relaxed text-justify pt-2 text-[#567cbd]/90 md:text-lg">
                        Aujourd’hui, je transforme ce vécu en projets où chaque idée porte une part de mon histoire et de mon voyage,
                        guidé par le désir de créer du sens et de partager des émotions. Chaque création est une façon de relier mes origines à demain encore.
                    </p>
                    <p className="pt-4 text-base leading-relaxed text-[#567cbd]/90 md:text-lg">
                        Bienvenue dans mon univers.
                    </p>
                </div>
            </div>
        </section>
    );
}
