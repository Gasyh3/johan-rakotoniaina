import Image from "next/image";

const footerNav = [
  { href: "#hero", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#formation", label: "Formation" },
  { href: "#competences", label: "Compétences" },
  { href: "#experience", label: "Expériences" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#interest", label: "Inspiration" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#567CBD] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex-1 space-y-3">
            <Image
              src="/assets/logo.png"
              alt="Logo Johan Rakotoniaina"
              width={150}
              height={40}
              priority
              className="p-2 object-contain"
            />
          </div>

          <div className="grid flex-1 grid-cols-1 gap-6 text-sm sm:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-base font-semibold">Navigation</h3>
              <ul className="grid grid-cols-2 gap-2 text-white/80 sm:gap-3">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-semibold">Contact</h3>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="mailto:johan.rakotoniaina@gmail.com" className="hover:text-white">
                    nirina.johan@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/johan-rakotoniaina-aba02b298/" target="_blank" rel="noreferrer" className="hover:text-white">
                    LinkedIn
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Johan Rakotoniaina. Tous droits réservés.</span>
          <span>Basé en France · Disponible à distance</span>
        </div>
      </div>
    </footer>
  );
}
