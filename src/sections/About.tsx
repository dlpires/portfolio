import { Award, BadgeCheck, Download, GraduationCap } from "lucide-react";

import { about, type Badge } from "@/data/about";
import { profile } from "@/data/profile";

const badgeIconMap = {
  award: Award,
  "badge-check": BadgeCheck,
} as const satisfies Record<Badge["icon"], unknown>;

export function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="scroll-mt-16 lg:scroll-mt-4 px-6 py-16 sm:px-10"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <h2 id="sobre-title" className="font-display text-2xl font-semibold text-foreground">
          Sobre Mim
        </h2>

        <ul className="flex flex-wrap gap-3" aria-label="Credenciais">
          {about.badges.map((badge) => {
            const Icon = badgeIconMap[badge.icon];
            return (
              <li
                key={badge.label}
                className="font-display inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground"
              >
                <Icon aria-hidden="true" className="size-4 text-accent" />
                {badge.label}
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col gap-4">
          <p className="font-body text-base text-muted sm:text-lg">{profile.bio}</p>
          <p className="font-body text-base text-muted sm:text-lg">{about.summary}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-base font-semibold text-foreground">Formação</h3>
            <ul className="flex flex-col gap-3">
              {about.education.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <GraduationCap
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-accent"
                  />
                  <div>
                    <p className="font-display text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="font-body text-sm text-muted">
                      {item.institution} · {item.period}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-display text-base font-semibold text-foreground">
              Certificações
            </h3>
            <ul className="flex flex-col gap-3">
              {about.certifications.map((cert) => (
                <li key={cert} className="flex gap-3">
                  <BadgeCheck
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-accent"
                  />
                  <span className="font-body text-sm text-muted">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a
          href={about.resume.href}
          download
          className="font-display inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <Download aria-hidden="true" className="size-4" />
          {about.resume.label}
        </a>
      </div>
    </section>
  );
}
