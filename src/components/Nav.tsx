"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { profile } from "@/data/profile";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#timeline", label: "Timeline" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
] as const;

export function Nav() {
  const [activeId, setActiveId] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = ["hero", ...LINKS.map((link) => link.href.slice(1))];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id === "hero" ? "" : entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const section of sections) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const linkClassName = (href: string) =>
    `font-display flex min-h-11 items-center rounded-md px-3 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
      activeId === href.slice(1) ? "text-accent" : "text-muted hover:text-foreground"
    }`;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background lg:hidden">
        <div className="flex h-14 items-center justify-between px-4">
          <a
            href="#hero"
            aria-label="Início"
            className="font-display flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span
              aria-hidden="true"
              className="font-display flex size-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground"
            >
              {profile.avatar.initials}
            </span>
            {profile.name}
          </a>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
            className="flex size-11 items-center justify-center rounded-md text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {open ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>

        {open && (
          <nav
            id="nav-menu"
            aria-label="Navegação da página"
            className="border-t border-border px-4 py-2"
          >
            <ul className="flex flex-col">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={activeId === link.href.slice(1) ? "true" : undefined}
                    onClick={() => setOpen(false)}
                    className={linkClassName(link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 flex-col border-r border-border bg-surface p-6 lg:flex">
        <a
          href="#hero"
          aria-label="Início"
          className="font-display flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span
            aria-hidden="true"
            className="font-display flex size-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground"
          >
            {profile.avatar.initials}
          </span>
          <span className="text-base font-semibold text-foreground">{profile.name}</span>
        </a>

        <nav aria-label="Navegação da página" className="mt-8">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={activeId === link.href.slice(1) ? "true" : undefined}
                  className={linkClassName(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
