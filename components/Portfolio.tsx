"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const content = [
    {
        title: "Yonko Tech Consulting – Élaboration de la charte graphique",
        description:
            "Création complète de la charte graphique d’une entreprise familiale : logo, emblème, signification, palette chromatique et règles d’utilisation.",
        content: (
            <img
                src="/assets/portfolio/yonko.png"
                alt="Yonko Tech Consulting"
                className="h-full w-full"
            />
        ),
        link: "https://www.canva.com/design/DAG6XJue3WQ/pi1Bzupfukp1dr_Ay0zuwA/edit?utm_content=DAG6XJue3WQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },

    {
        title: "CAP’ALTERNANCE – Création d’une charte graphique",
        description:
            "Conception d’une charte graphique pour un site web fictif dans le cadre d’une mise en situation professionnelle. Réalisation d’un document visuel structurant l’identité graphique.",
        content: (
            <img
                src="/assets/portfolio/cap.png"
                alt="CAP’ALTERNANCE"
                className="h-full w-full"
            />
        ),
        link: "https://www.canva.com/design/DAG6XEjLBIs/BI-tZ0SbJY5nCME0cUosXg/edit?utm_content=DAG6XEjLBIs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },

    {
        title: "Pom’Croc – Conception de packaging produit",
        description:
            "Création complète du packaging d’un produit inédit basé sur le segment « compote de pomme », à travers un support visuel détaillé et professionnalisant.",
        content: (
            <img
                src="/assets/portfolio/pom_croq.png"
                alt="Pom'Croc"
                className="h-full w-full"
            />
        ),
        link: "https://www.canva.com/design/DAG6WxWHpcQ/jdC5aNCHuWhJ-TH2NjwYVQ/edit?utm_content=DAG6WxWHpcQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },

    {
        title: "Sauv’Café – Développement de packaging",
        description:
            "Développement du packaging d’un produit dans le cadre d’un projet de gestion. Proposition de solutions visuelles concrètes pour un commanditaire.",
        content: (
            <img
                src="/assets/portfolio/sauvcafe.png"
                alt="Sauv'Café"
                className="h-full w-full"
            />
        ),
        link: "https://www.canva.com/design/DAG3n2kr78c/vWuFIsDw-fAAaJ5LhsA9bg/edit?utm_content=DAG3n2kr78c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },

    {
        title: "Madagascar – Support de présentation culturelle",
        description:
            "Création d’un support visuel professionnel visant à présenter et valoriser les richesses culturelles de Madagascar.",
        content: (
            <img
                src="/assets/portfolio/mada.jpg"
                alt="Madagascar support visuel"
                className="h-full w-full"
            />
        ),
        link: "https://www.canva.com/design/DAG6XAN1-Yg/M4eZJVREfrZx-X0jvFAKKQ/edit?utm_content=DAG6XAN1-Yg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },

    {
        title: "Tranquille Émile – Plan de communication 360°",
        description:
            "Élaboration d’un plan de communication 360° innovant pour une marque réelle rencontrant des difficultés. Contribution à la production du support visuel rassemblant recommandations et stratégies.",
        content: (
            <img
                src="/assets/portfolio/tranquille.png"
                alt="Tranquille Emile"
                className="h-full w-full"
            />
        ),
        link: "https://www.canva.com/design/DAG6XFWvqrY/VFTJ5UGXCoC787_IgIflcg/edit?utm_content=DAG6XFWvqrY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },

    {
        title: "Hello Agent – Plan de communication digitale",
        description:
            "Conception d’un plan de communication et d’un plan d’action lors d’un stage. Réalisation d’un support complet présentant l’analyse et les recommandations digitales pour l’entreprise.",
        content: (
            <img
                src="/assets/portfolio/plan.jpg"
                alt="Hello Agent"
                className="h-full w-full"
            />
        ),
        link: "https://www.canva.com/design/DAGgJnlWW7U/8IcWdrhNCfdwmEoWu-rb5g/edit?utm_content=DAGgJnlWW7U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
        title: "Le Cottage – Support commercial visuel",
        description:
            "Création d’un support visuel professionnel pour représenter fictivement le restaurant Le Cottage dans le cadre d’une évaluation en négociation.",
        content: (
            <img
                src="/assets/portfolio/cottage.png"
                alt="Le Cottage"
                className="h-full w-full"
            />
        ),
        link: "https://www.canva.com/design/DAGdlROy5kc/FwHRcgMpYlULr07v7i_paQ/edit?utm_content=DAGdlROy5kc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
        title: "Mandel International – Portfolio de community management",
        description:
            "Production de visuels immobiliers (photos, vidéos) pour renforcer la communication digitale de Mandel International. Création d’un portfolio regroupant plusieurs réalisations.",
        content: (
            <img
                src="/assets/portfolio/mandel.png"
                alt="Mandel International"
                className="h-full w-full"
            />
        ),
        link: "https://www.canva.com/design/DAG6Wrl2Egk/mGfX1dKXAHljAQWYwc_4rg/edit?utm_content=DAG6Wrl2Egk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
        title: "À suivre – Projet futur",
        description:
            "Un nouveau projet est actuellement en préparation. Il sera bientôt disponible ici avec son contenu visuel, sa description détaillée et son lien vers la réalisation complète.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-slate-200 text-slate-600 text-xl font-semibold rounded-md">
                Projet en cours…
            </div>
        ),
        link: null,
    },
];


export function Portfolio() {
    return (
        <section id="portfolio" className="flex min-h-screen w-full items-center py-16">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-left text-3xl font-bold text-[#567CBD] md:text-4xl dark:text-white">
                    Les projets qui racontent mon parcours
                </h2>
                <p className="mt-2 text-left text-sm text-[#2f3d56]/80">
                    Faites défiler les descriptions et cliquez sur le visuel pour ouvrir le projet.
                </p>

                <StickyScroll content={content} />
            </div>
        </section>
    );
}
