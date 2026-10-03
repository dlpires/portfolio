import { Briefcase, GraduationCap } from "lucide-react";

import { careerMilestones, type CareerIcon } from "@/data/career";

const iconMap = {
  education: GraduationCap,
  work: Briefcase,
} as const satisfies Record<CareerIcon, unknown>;

export function Timeline() {
  return (
    <section
      id="timeline"
      aria-labelledby="timeline-title"
      className="scroll-mt-16 lg:scroll-mt-4 px-6 py-16 sm:px-10"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <h2 id="timeline-title" className="font-display text-2xl font-semibold text-foreground">
          Timeline de Carreira
        </h2>

        <ol className="relative flex flex-col gap-8">
          <span
            aria-hidden="true"
            className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2"
          />
          {careerMilestones.map((milestone, index) => {
            const Icon = iconMap[milestone.icon];
            const isLeft = index % 2 === 0;
            return (
              <li key={`${milestone.period}-${milestone.title}`} className="relative">
                <span className="absolute left-4 top-5 z-10 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-background md:left-1/2">
                  <Icon aria-hidden="true" className="size-4 text-accent" />
                </span>
                <div
                  className={`ml-12 w-full md:w-[calc(50%-2.5rem)] ${
                    isLeft ? "md:ml-0 md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex flex-col gap-1 rounded-xl border border-border bg-surface p-5">
                    <span className="font-display text-xs text-muted">{milestone.period}</span>
                    <h3 className="font-display text-sm font-semibold text-foreground">
                      {milestone.title}
                    </h3>
                    <p className="font-body text-sm text-muted">{milestone.description}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
