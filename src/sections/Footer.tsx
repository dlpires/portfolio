import { Download, MapPin } from "lucide-react";

import { about, contact, profile } from "@/data";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
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
