import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="flex w-full flex-1 items-center py-16 backdrop-blur dark:bg-[#24344f]/80"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-2">

          <h2 className="text-3xl font-bold text-[#2f3d56] md:text-4xl dark:text-white">
            Restons en contact
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-300">
            Une idée, un projet ou juste l’envie d’échanger ? Voici les moyens
            les plus simples pour me joindre.
          </p>
        </div>

        <div className="grid gap-4 rounded-2xl border border-[#c6d3ea]/60 bg-white p-6 shadow-sm dark:border-[#304161] dark:bg-[#1e2a3d]">
          <ContactRow
            icon={<Mail className="h-5 w-5" />}
            label="Email"
            value="nirina.johan@gmail.com"
            href="mailto:nirina.johan@gmail.com"
          />
          <ContactRow
            icon={<Phone className="h-5 w-5" />}
            label="Téléphone"
            value="+33 7 78 95 20 10"
            href="tel:+33778952010"
          />
          <ContactRow
            icon={<MapPin className="h-5 w-5" />}
            label="Basé à"
            value="Paris/Lyon - France"
          />
          <div className="flex flex-wrap gap-3 pt-1">
            <SocialLink
              icon={<Linkedin className="h-4 w-4" />}
              label="LinkedIn"
              href=" https://www.linkedin.com/in/johan-rakotoniaina-aba02b298/"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#567cbd]/10 text-[#2f3d56] dark:bg-[#304161] dark:text-white">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          {label}
        </span>
        <span className="text-sm font-medium text-[#2f3d56] dark:text-white">
          {value}
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="rounded-xl px-2 py-1 transition hover:bg-[#567cbd]/5 dark:hover:bg-[#304161]"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="rounded-xl px-2 py-1">
      {content}
    </div>
  );
}

function SocialLink({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-[#567cbd] px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-[1px] hover:shadow-md hover:shadow-[#567cbd]/30"
    >
      {icon}
      {label}
    </a>
  );
}
