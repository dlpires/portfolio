# Portfolio — Diego Luis Pires

**Fullstack Developer & Data Engineer**

[![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-blue?logo=github)](https://dlpires.github.io/portfolio)
[![Next.js](https://img.shields.io/badge/framework-Next.js-black?logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/style-Tailwind%20CSS-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

Portfolio pessoal desenvolvido com Next.js (SSG) + Tailwind CSS, com deploy automatizado via GitHub Actions para GitHub Pages. O objetivo é apresentar minha trajetória profissional, projetos, habilidades e formas de contato.

---

## Stack

| Camada        | Tecnologia                              |
| ------------- | --------------------------------------- |
| Framework     | Next.js (Static Site Generation)        |
| Estilização   | Tailwind CSS                            |
| Ícones        | lucide-react                            |
| Deploy        | GitHub Actions → GitHub Pages           |

## Seções

- **Hero** — Apresentação pessoal, badges (AWS Certified, MBA USP/Esalq) e links sociais
- **Sobre Mim** — Biografia, formação acadêmica e grid de habilidades técnicas
- **Projetos** — Cards dos meus projetos no GitHub com detalhes de stack
- **Timeline** — Linha do tempo interativa da carreira
- **Contato** — Formulário funcional + footer com links profissionais

## Projetos em Destaque

| Projeto | Descrição | Stack |
|---------|-----------|-------|
| [tcc-mba-usp](https://github.com/dlpires/tcc-mba-usp) | Classificação de Influenciadores com ML não-supervisionado | Python/Jupyter |
| [quero-cafe-bar](https://github.com/dlpires/quero-cafe-bar) | Sistema de gerenciamento para estabelecimento | JavaScript |
| [pokedex-angular](https://github.com/dlpires/pokedex-angular) | Pokédex interativa | TypeScript/Angular |
| [palmphone-n](https://github.com/dlpires/palmphone-n) | App Android de coleta de chamadas | Java/Android |
| [scaffold](https://github.com/dlpires/scaffold) | Project scaffold CLI para Python | Python |
| [iniciativa_devops](https://github.com/dlpires/iniciativa_devops) | Desafios práticos de DevOps | DevOps/EJS |

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build estático
npm run build

# Preview do build
npm run start
```

## CI/CD

Ao fazer push na branch `main`, o GitHub Actions automaticamente:

1. Instala dependências
2. Executa o build estático
3. Faz deploy do conteúdo da pasta `out/` para a branch `gh-pages`

## Licença

Este projeto é de uso pessoal para fins de portfólio.
