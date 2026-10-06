# Portfólio — Diego Luis Pires

Portfólio profissional de **Diego Luis Pires**, Senior Data Engineer & Cloud Fullstack Developer.
Site estático (SSG) publicado no GitHub Pages: <https://dlpires.github.io/portfolio/>.

## Stack

| Camada      | Tecnologia                                   |
| ----------- | -------------------------------------------- |
| Framework   | Next.js 16 (App Router, `output: "export"`)  |
| UI          | React 19                                     |
| Estilização | Tailwind CSS v4 (CSS-first, sem config JS)   |
| Ícones      | lucide-react                                 |
| Linguagem   | TypeScript                                   |
| Deploy      | GitHub Actions → GitHub Pages                |

## Pré-requisitos

- Node.js 20 ou superior
- npm

## Como rodar

```bash
npm install   # instala as dependências
npm run dev   # servidor de desenvolvimento em http://localhost:3000/portfolio
npm run build # build estático; gera out/
npm run lint  # análise estática (ESLint)
```

> `npm run start` (`next start`) **não funciona** com `output: "export"`. Para pré-visualizar
> o build, sirva a pasta `out/` respeitando o `basePath` (os assets são referenciados como
> `/portfolio/_next/...`):
>
> ```bash
> mkdir -p /tmp/preview && ln -sfn "$PWD/out" /tmp/preview/portfolio
> npx serve /tmp/preview   # abra http://localhost:3000/portfolio/
> ```

## Estrutura

```
src/
  app/         # layout raiz, página, sitemap.ts, robots.ts e CSS global
  components/  # Nav, ThemeToggle e ícones
  sections/    # Hero, About, Timeline, SkillsGrid, Projects, Contact, Footer
  data/        # conteúdo tipado do portfólio (profile, projects, career, ...)
scripts/       # verificações do export estático
public/        # assets estáticos servidos na raiz (currículo PDF, .nojekyll)
```

O conteúdo do site vive em `src/data/` — edite lá em vez de mexer nas seções.

## Verificação

O projeto não usa framework de testes: as verificações são scripts Node que assertam sobre o
export estático gerado em `out/`. Rode sempre após o build:

```bash
npm run build
node scripts/verify-nav.mjs   # navegação fixa (sidebar + topbar)
node scripts/verify-seo.mjs   # meta tags, Open Graph, JSON-LD, sitemap, robots.txt e tema
```

Cada script imprime `OK`/`FAIL` por asserção, termina com `-- todos passaram --` e sai com
código 0 só quando tudo passa. Há assertivas negativas para o que deve **deixar de existir**.

Formatação: o Prettier está configurado (`.prettierrc`), mas não há script `format`. Rode nos
arquivos que você alterar (parte da base ainda não está no padrão):

```bash
npx prettier --write <arquivo>
```

## Deploy

O workflow `.github/workflows/deploy.yml` roda em push na branch `main`: instala as
dependências (com cache), roda `lint`, `build` e os scripts de verificação, e publica `out/`
no GitHub Pages. O `basePath` é `/portfolio` (project page), por isso `public/.nojekyll` é
obrigatório — sem ele o Jekyll do GitHub Pages descarta `_next/` e quebra todos os assets.

## Agentes e Skills

As convenções de git, os comandos e a lista de agentes/skills disponíveis estão em
[`AGENTS.md`](./AGENTS.md).
