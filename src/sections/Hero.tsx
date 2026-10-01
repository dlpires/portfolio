import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components";
import { profile, type SocialIcon } from "@/data/profile";

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: Mail,
} as const satisfies Record<SocialIcon, unknown>;

export function Hero() {
  const { name, role, bio, avatar, socials } = profile;

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="flex min-h-dvh w-full flex-col items-center justify-center gap-8 px-6 py-16 text-center sm:px-10"
    >
      <p className="font-display text-sm text-muted">
        <span aria-hidden="true">~</span>
        {"/portfolio $ "}
        <span aria-hidden="true" className="text-accent motion-safe:animate-blink">
          ▌
        </span>
      </p>

      <div className="motion-safe:animate-fade-in-up flex flex-col items-center gap-6">
        {avatar.src ? (
          <Image
            src={avatar.src}
            alt={avatar.alt}
            width={128}
            height={128}
            priority
            className="size-32 rounded-full border-2 border-border object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={avatar.alt}
            className="font-display flex size-32 items-center justify-center rounded-full border-2 border-border bg-surface text-4xl text-accent"
          >
            {avatar.initials}
          </div>
        )}

        <h1
          id="hero-title"
          className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
        >
          {name}
        </h1>

        <p className="font-display text-base text-accent sm:text-lg">{role}</p>

        <p className="font-body max-w-xl text-balance text-base text-muted sm:text-lg">
          {bio}
        </p>

        <ul className="flex items-center justify-center gap-4">
          {socials.map((social) => {
            const Icon = iconMap[social.icon];
            const isMail = social.href.startsWith("mailto:");

            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noopener noreferrer"}
                  aria-label={social.label}
                  className="flex size-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <Icon aria-hidden="true" className="size-5" />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#projetos"
          className="font-display inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Ver Projetos
          <ArrowDown aria-hidden="true" className="size-4" />
        </a>
      </div>
    </section>
  );
}
