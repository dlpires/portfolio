#!/usr/bin/env node
// Verifica a navegação fixa no export estático (out/index.html).
// Uso: npm run build && node scripts/verify-nav.mjs
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const html = readFileSync("out/index.html", "utf8");
let failures = 0;

function check(label, cond) {
  if (cond) {
    console.log(`OK   ${label}`);
  } else {
    console.log(`FAIL ${label}`);
    failures += 1;
  }
}

// Fatias: sidebar = <aside>…</aside>; topbar = <header>…</header>.
// O payload RSC fica em <script> no fim do body, fora das fatias.
const asideStart = html.indexOf("<aside");
const asideEnd = html.indexOf("</aside>", asideStart);
const aside = asideStart !== -1 && asideEnd !== -1 ? html.slice(asideStart, asideEnd) : "";

const headerStart = html.indexOf("<header");
const headerEnd = html.indexOf("</header>", headerStart);
const header = headerStart !== -1 && headerEnd !== -1 ? html.slice(headerStart, headerEnd) : "";

// CSS gerado (offset de scroll no mobile)
const chunksDir = join("out", "_next", "static", "chunks");
const css = readdirSync(chunksDir)
  .filter((file) => file.endsWith(".css"))
  .map((file) => readFileSync(join(chunksDir, file), "utf8"))
  .join("\n");

// --- Sidebar (desktop) ---
check("sidebar: <aside> presente", asideStart !== -1);
check(
  "sidebar: aria-label Navegação da página",
  aside.includes('aria-label="Navegação da página"'),
);
check("sidebar: link #sobre", aside.includes('href="#sobre"'));
check("sidebar: link #timeline", aside.includes('href="#timeline"'));
check("sidebar: link #projetos", aside.includes('href="#projetos"'));
check("sidebar: link #contato", aside.includes('href="#contato"'));
check("sidebar: marca aponta para #hero", aside.includes('href="#hero"'));

// --- Topbar (mobile) ---
check("topbar: <header> presente", headerStart !== -1);
check("topbar: botão abrir menu", header.includes("Abrir menu"));
check("topbar: marca aponta para #hero", header.includes('href="#hero"'));

// --- CSS: offset de scroll no mobile ---
check(
  "css: scroll-margin-top mobile (spacing*16)",
  css.includes("scroll-margin-top:calc(var(--spacing) * 16)"),
);

if (failures === 0) {
  console.log("\n-- todos passaram --");
  process.exit(0);
} else {
  console.log(`\n-- ${failures} falha(s) --`);
  process.exit(1);
}
