import {
  BrainCircuit,
  Cloud,
  Database,
  GraduationCap,
  MonitorSmartphone,
  Server,
} from "lucide-react";

import { skillCategories, type SkillIcon } from "@/data/skills";

const iconMap = {
  frontend: MonitorSmartphone,
  backend: Server,
  data: BrainCircuit,
  cloud: Cloud,
  database: Database,
  education: GraduationCap,
} as const satisfies Record<SkillIcon, unknown>;

export function SkillsGrid() {
  return (
    <section aria-labelledby="skills-title" className="scroll-mt-4 px-6 py-16 sm:px-10">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <h2 id="skills-title" className="font-display text-2xl font-semibold text-foreground">
          Skills
        </h2>

        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <li
                key={category.title}
                className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent"
              >
                <div className="flex items-center gap-2">
                  <Icon aria-hidden="true" className="size-5 text-accent" />
                  <h3 className="font-display text-sm font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="font-body rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
