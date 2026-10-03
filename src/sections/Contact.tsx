import { Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components";
import { contact, email, profile, type SocialIcon } from "@/data";

const socialIconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: Mail,
} as const satisfies Record<SocialIcon, unknown>;

export function Contact() {
  const socials = profile.socials.filter((social) => social.icon !== "mail");

  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="scroll-mt-4 px-6 py-16 sm:px-10"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h2 id="contato-title" className="font-display text-2xl font-semibold text-foreground">
          {contact.heading}
        </h2>

        <p className="font-body max-w-xl text-balance text-base text-muted sm:text-lg">
          {contact.subtext}
        </p>

        <a
          href={`mailto:${email}`}
          className="font-display text-xl font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-2xl"
        >
          {email}
        </a>

        <ul className="flex items-center justify-center gap-4" aria-label="Redes sociais">
          {socials.map((social) => {
            const Icon = socialIconMap[social.icon];
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <Icon aria-hidden="true" className="size-5" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
