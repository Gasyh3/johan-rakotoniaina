"use client";

import Image from "next/image";
import Link from "next/link";


const navItems = [
  { href: "#hero", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#formation", label: "Formation" },
  { href: "#competences", label: "Compétences" },
  { href: "#experience", label: "Expériences" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#interest", label: "Inspiration" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f5efeb]/40 bg-[#f5efeb]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 md:h-20 max-w-6xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="#hero" className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="Logo Johan Rakotoniaina"
            width={150}
            height={40}
            priority
            className="p-2 object-contain"
          />
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-5 text-xs md:text-sm font-medium text-[#567CBD]/80 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 hover:bg-[#567CBD]/10 hover:text-[#567CBD] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bouton flottant */}
        <a
          href="#contact"
          className="
            inline-flex items-center gap-2
            rounded-full
            bg-[#567CBD]/15
            text-[#567CBD]
            backdrop-blur-md
            border border-[#567CBD]/25
            px-3 py-1.5 md:px-4 md:py-2
            text-xs md:text-sm font-semibold
            shadow-md shadow-[#567CBD]/25
            hover:bg-[#567CBD]/25
            hover:shadow-lg hover:shadow-[#567CBD]/35
            hover:-translate-y-[1px]
            active:translate-y-0
            transition
          "
        >
          Me contacter
        </a>
      </div>
    </header>
  );
}
