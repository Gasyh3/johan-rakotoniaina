import Image from "next/image";


type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  logo: string;
};

const experiences: ExperienceItem[] = [
  {
    role: "Projet personnel – Entrepreneuriat",
    company: "Yonko Tech Consulting",
    period: "En cours",
    location: "France",
    description:
      "Création d’une identité visuelle complète et production de contenus graphiques destinés aux réseaux sociaux et supports de communication.",
    skills: ["Charte graphique", "Branding", "Création visuelle"],
    logo: "/assets/logo_yonko.png",
  },
  {
    role: "Responsable communication digitale (Stage)",
    company: "Mandel International",
    period: "Avril – Juin 2025",
    location: "Paris · France",
    description:
      "Conception de contenus visuels, gestion des réseaux sociaux de l’agence et optimisation du référencement digital.",
    skills: ["Création visuelle", "Social Media", "SEO"],
    logo: "/assets/logo_helloagent.png",
  },
  {
    role: "Mise en situation professionnelle",
    company: "Start-up Lyon – CAP’ALTERNANCE",
    period: "Mars 2025",
    location: "Lyon · France",
    description:
      "Réalisation de maquettes web, création d’une charte graphique et développement de premières fonctionnalités du site.",
    skills: ["Maquettage Web", "Charte graphique", "Web design"],
    logo: "/assets/logo_cap.jpg",
  },
  {
    role: "Mise en situation professionnelle",
    company: "Néa RH+",
    period: "Décembre 2024",
    location: "Lyon · France",
    description:
      "Audit complet de la présence digitale, analyse du site web et recommandations stratégiques pour optimiser la communication.",
    skills: ["Audit digital", "Analyse web", "Recommandations stratégiques"],
    logo: "/assets/logo_nea.png",
  },
  {
    role: "Responsable de magasin (CDI)",
    company: "Domino’s Pizza",
    period: "Mars – Juillet 2024",
    location: "Villeurbanne · France",
    description:
      "Gestion de la relation client, encadrement d’équipe et supervision quotidienne de l’activité du magasin.",
    skills: ["Gestion d’équipe", "Relation client", "Management"],
    logo: "/assets/logo_dominos.jpg",
  },
];


export function Experience() {
  return (
    <section
      id="experience"
      className="w-full min-h-screen bg-gradient-to-b from-[#f5efeb] via-white to-[#f5efeb] py-20 dark:from-[#1e2a3d] dark:via-[#24344f] dark:to-[#1e2a3d]"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">

          <h2 className="text-3xl font-bold text-[#567CBD] md:text-4xl dark:text-white">
            Expériences professionnelles
          </h2>

        </div>

        <div className="grid gap-6">
          {experiences.map((item, index) => (
            <article
              key={item.role + item.period}
              className="relative overflow-hidden rounded-2xl border border-[#c6d3ea]/60 bg-white/80 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-[#304161] dark:bg-[#24344f]"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-[#567cbd]" />
              <div className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-start sm:gap-6 sm:px-8 sm:py-6">
                <div className="flex w-full max-w-[220px] flex-col gap-3 sm:w-auto">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className="h-15 w-15 rounded-lg bg-white object-contain p-2 ring-1 ring-[#c6d3ea] dark:bg-[#304161] dark:ring-[#304161]"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#2f3d56] dark:text-white">
                        {item.company}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {item.location}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#567cbd] dark:text-[#a1b4da]">
                    {item.period}
                  </span>
                </div>

                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-semibold text-[#2f3d56] dark:text-white">
                    {item.role}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-[#567cbd]/10 px-3 py-1 text-xs font-medium text-[#2f3d56] ring-1 ring-[#567cbd]/25 dark:bg-[#304161] dark:text-white dark:ring-[#a1b4da]/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
