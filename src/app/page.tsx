import { About, Contact, Hero, Projects, SkillsGrid, Timeline } from "@/sections";

export default function Home() {
  return (
    <main className="flex min-h-dvh w-full flex-col">
      <Hero />
      <About />
      <Timeline />
      <SkillsGrid />
      <Projects />
      <Contact />
    </main>
  );
}
