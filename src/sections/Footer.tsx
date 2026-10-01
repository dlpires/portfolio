import { Download, Mail, MapPin } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components";
import { about, contact, profile, type SocialIcon } from "@/data";

const socialIconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: Mail,
} as const satisfies Record<SocialIcon, unknown>;

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <ul className="flex items-center justify-center gap-4" aria-label="Redes sociais">
          {profile.socials.map((social) => {
            const Icon = socialIconMap[social.icon];
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

        <p className="font-body flex items-center gap-2 text-sm text-muted">
          <MapPin aria-hidden="true" className="size-4 text-accent" />
          {contact.location}
        </p>

        <a
          href={about.resume.href}
          download
          className="font-display inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <Download aria-hidden="true" className="size-4" />
          {about.resume.label}
        </a>

        <p className="font-body text-sm text-muted">© 2026 {profile.name}</p>
      </div>
    </footer>
  );
}
