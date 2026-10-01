import { About, Hero, Projects, SkillsGrid } from "@/sections";

export default function Home() {
  return (
    <main className="flex min-h-dvh w-full flex-col">
      <Hero />
      <About />
      <SkillsGrid />
      <Projects />
    </main>
  );
}
