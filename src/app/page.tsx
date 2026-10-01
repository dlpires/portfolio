import { About, Hero, SkillsGrid } from "@/sections";

export default function Home() {
  return (
    <main className="flex min-h-dvh w-full flex-col">
      <Hero />
      <About />
      <SkillsGrid />

      {/* Âncora provisória — substituída pela seção real de Projetos na Issue #4. */}
      <section
        id="projetos"
        aria-label="Projetos"
        className="min-h-dvh scroll-mt-4 px-6 py-16 sm:px-10"
      >
        <h2 className="font-display text-2xl font-semibold text-foreground">Projetos</h2>
        <p className="font-body mt-2 text-muted">Em breve.</p>
      </section>
    </main>
  );
}
