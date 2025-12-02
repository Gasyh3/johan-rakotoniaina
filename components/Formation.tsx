"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Formation() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div id="formation" className="w-full h-full py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-left text-xl md:text-5xl font-bold text-[#567cbd] dark:text-neutral-200 font-sans">
                    Les étapes de mon évolution
                </h2>
                <p className="pt-2 text-base md:text-lg text-[#567ddd]/90 dark:text-neutral-400 font-sans">
                    Cliquez pour en savoir plus
                </p>
            </div>
            <Carousel items={cards} />
        </div>
    );
}

const Step1 = () => {
    return (
        <div
            className="bg-[#f5efeb] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                De 2012 à 2023, j’ai suivi ma scolarité au sein de l’établissement privé La Clairefontaine, membre du réseau
                {" "}
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    AEFE (Agence pour l’Enseignement Français à l’Étranger).
                </span>{" "}
                <br />
                J’y ai obtenu le Diplôme National du Brevet avec la mention Très Bien, ainsi que le Baccalauréat général avec la mention Bien.

                <br />
                <br />

                Mes spécialités étaient :
                <br />
                - Mathématiques
                <br />
                - Sciences Économiques et Sociales
                <br />
                - Histoire-Géographie Géopolitique et Sciences Politiques.
            </p>
            <img
                src="https://lyceeclairefontainetana.mg/wp-content/uploads/2024/05/logo-vf.png"
                alt="Logo La Clairefontaine"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-5"
            />
        </div>
    );
};

const Step2 = () => {
    return (
        <div
            className="bg-[#f5efeb] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">

                Depuis maintenant 2 ans, j’ai décidé d’intégrer l’IUT de Lyon 1 pour suivre une formation professionnelle mélangeant commercial, marketing et communication et surtout une
                {" "}
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    spécialisation Marketing Digital.
                </span>{" "}
                <br />
                Maintenant en dernière année de mon BUT, j’ai pu acquérir de nombreuses compétences à partir de mes matières dont :
                <br />
                - Négociation
                <br />
                - Communication commercial 360°
                <br />
                - Marketing Mix
                <br />
                - Communication digitale
                <br />
                - Stratégie communication digitale
                <br />
                - Référencement (SEO/SEA)
                <br />
                - Gestion et création de projet
            </p>
            <img
                src="https://www.alimentec.com/wp-content/uploads/2022/02/Logo-IUT-LYON-1.png"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
        </div>
    );
};

const Step3 = () => {
    return (

        <div
            className="bg-[#f5efeb] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">

                Pour la suite de l’aventure, je candidate actuellement pour un master en Marketing Digital & Communication digitale, chez <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    l’IIM Digital School Paris
                </span>{" "}
            </p>
            <img
                src="https://www.mondedesgrandesecoles.fr/wp-content/uploads/logo-iim-1458223620.jpg"
                alt="Logo IIM Digital School Paris"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-5"
            />
        </div>
    );
};

const data = [
    {
        category: "Antananarivo, Madagascar",
        title: "La Clairefontaine - Baccalauréat",
        src: "https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?q=80&w=722&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <Step1 />,
    },
    {
        category: "Lyon, France",
        title: "IUT Lyon 1 - BUT TC",
        src: "/assets/iut.JPEG",
        content: <Step2 />,
    },
    {
        category: "Paris, France",
        title: "A suivre...",
        src: "/assets/tower.jpeg",
        content: <Step3 />,
    },
];
