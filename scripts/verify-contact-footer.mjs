#!/usr/bin/env node
// Verifica as seções Contato e Footer no export estático (out/index.html).
// Uso: npm run build && node scripts/verify-contact-footer.mjs
import { readFileSync } from "node:fs";

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

const cStart = html.indexOf('<section id="contato"');
const cEnd = cStart === -1 ? -1 : html.indexOf("</section>", cStart);
const fStart = html.indexOf("<footer");
const sStart = html.indexOf("<script", fStart === -1 ? 0 : fStart);

check("estrutura: seção contato presente", cStart !== -1 && cEnd !== -1);
check("estrutura: footer presente", fStart !== -1);
check("estrutura: contato vem antes do footer", cStart !== -1 && fStart !== -1 && cStart < fStart);

// Fatias: Contato = do <section id="contato"> até o seu </section>;
// Footer = do <footer> até o primeiro <script> (payload RSC fica fora da fatia).
const contact = cStart !== -1 && cEnd !== -1 ? html.slice(cStart, cEnd) : "";
const footer = fStart !== -1 ? html.slice(fStart, sStart === -1 ? html.length : sStart) : "";

// --- Contato ---
check("contato: aria-labelledby", contact.includes('aria-labelledby="contato-title"'));
check("contato: heading", contact.includes("Vamos conversar"));
check("contato: subtext", contact.includes("sempre aberto"));
check("contato: email visível (mailto)", contact.includes(">diegoluispires@gmail.com</a>"));
check(
  "contato: 2 links sociais com target=_blank",
  (contact.match(/target="_blank"/g) ?? []).length >= 2,
);

// --- Footer ---
check("footer: copyright", footer.includes("© 2026") && footer.includes("Diego Luis Pires"));
check("footer: localização", footer.includes("Mogi-Guaçu/SP"));
check("footer: localização antiga removida", !footer.includes("Mogi-Mirim/SP"));
check(
  "footer: link currículo com download",
  footer.includes("/portfolio/cv-diego-luis-peres-pires.pdf") && footer.includes("download"),
);
// remoção: o footer não repete os links sociais (ficam só em "Vamos conversar")
check(
  "footer: sem links sociais repetidos",
  !footer.includes("https://github.com/dlpires") &&
    !footer.includes("https://linkedin.com/in/diegoluispires") &&
    !footer.includes('href="mailto:diegoluispires@gmail.com"'),
);

// --- mailto NÃO abre em nova aba (Contato) ---
const mailtoIdx = contact.indexOf('href="mailto:diegoluispires@gmail.com"');
if (mailtoIdx === -1) {
  check("contato: link mailto presente", false);
} else {
  const openStart = contact.lastIndexOf("<a", mailtoIdx);
  const openEnd = contact.indexOf(">", mailtoIdx);
  const tag = contact.slice(openStart, openEnd + 1);
  check("contato: mailto sem target=_blank", !tag.includes("target="));
}

if (failures === 0) {
  console.log("\n-- todos passaram --");
  process.exit(0);
} else {
  console.log(`\n-- ${failures} falha(s) --`);
  process.exit(1);
}
