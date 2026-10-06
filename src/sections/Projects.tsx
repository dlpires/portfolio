import { ArrowUpRight, Code } from "lucide-react";

import { GitHubIcon } from "@/components";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-title"
      className="scroll-mt-16 lg:scroll-mt-4 px-6 py-16 sm:px-10"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <h2 id="projetos-title" className="font-display text-2xl font-semibold text-foreground">
          Projetos
        </h2>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li
              key={project.name}
              className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent"
            >
              <span className="font-body inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted">
                <Code aria-hidden="true" className="size-3.5 text-accent" />
                {project.language}
              </span>

              <h3 className="font-display text-base font-semibold text-foreground">
                {project.name}
              </h3>

              <p className="font-body text-sm text-muted">{project.description}</p>

              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="font-body rounded-full border border-border px-3 py-1 text-xs text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <GitHubIcon className="size-4" />
                Ver código
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </li>
          ))}

          <li
            aria-label="Projetos futuros"
            className="flex min-h-40 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border p-5 text-center"
          >
            <p className="font-display text-sm font-semibold text-muted">Em breve</p>
            <p className="font-body text-xs text-muted">Novos projetos a caminho.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
