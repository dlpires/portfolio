#!/usr/bin/env node
// Verifica SEO + tema no export estático (out/).
// Uso: npm run build && node scripts/verify-seo.mjs
import { readFileSync, existsSync } from "node:fs";

const html = readFileSync("out/index.html", "utf8");
let failures = 0;

function check(label, cond) {
  if (cond) console.log(`OK   ${label}`);
  else {
    console.log(`FAIL ${label}`);
    failures += 1;
  }
}

// --- Meta / SEO ---
check("title: role com &amp;", html.includes("Senior Data Engineer &amp; Cloud Fullstack Developer"));
check("meta description presente", html.includes('name="description"'));
check("canonical presente", html.includes('rel="canonical"'));
check("og:type presente", html.includes('property="og:type"'));
check("og:url presente", html.includes('property="og:url"'));
check("og:locale pt_BR", html.includes('property="og:locale" content="pt_BR"'));
check("twitter:card presente", html.includes('name="twitter:card"'));
check("URL absoluta /portfolio/", html.includes("https://dlpires.github.io/portfolio/"));

// --- JSON-LD ---
check(
  "JSON-LD Person",
  html.includes('application/ld+json') && html.includes('"@type":"Person"'),
);
check("JSON-LD worksFor", html.includes('"worksFor"'));

// --- Sitemap / robots ---
const sitemap = existsSync("out/sitemap.xml") ? readFileSync("out/sitemap.xml", "utf8") : "";
check("sitemap.xml existe", existsSync("out/sitemap.xml"));
check("sitemap contém URL base", sitemap.includes("https://dlpires.github.io/portfolio/"));

const robots = existsSync("out/robots.txt") ? readFileSync("out/robots.txt", "utf8") : "";
check("robots.txt existe", existsSync("out/robots.txt"));
check("robots aponta sitemap", robots.includes("sitemap.xml"));

// --- Tema ---
check("html suppressHydrationWarning", html.includes("suppressHydrationWarning"));
check("script de tema (localStorage)", html.includes("localStorage.getItem('theme')"));
check(
  "toggle de tema presente",
  html.includes("Ativar modo claro") || html.includes("Ativar modo escuro"),
);

// --- Negativo: SVGs default removidos ---
for (const svg of ["globe.svg", "file.svg", "next.svg", "vercel.svg", "window.svg"]) {
  check(`negativo: ${svg} ausente de out/`, !existsSync(`out/${svg}`));
}

if (failures === 0) {
  console.log("\n-- todos passaram --");
  process.exit(0);
} else {
  console.log(`\n-- ${failures} falha(s) --`);
  process.exit(1);
}
