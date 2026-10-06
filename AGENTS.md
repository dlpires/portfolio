# AGENTS.md — Portfolio

Instruções de projeto para agentes (Hermes, OpenCode, Claude Code, Codex).

## Stack

| Camada      | Tecnologia                                    |
| ----------- | --------------------------------------------- |
| Framework   | Next.js (Static Site Generation)              |
| Estilização | Tailwind CSS                                  |
| Ícones      | lucide-react                                  |
| Deploy      | GitHub Actions → GitHub Pages (main → gh-pages) |

## Comandos

```bash
npm install   # instalar dependências
npm run dev   # servidor de desenvolvimento
npm run build # build estático (gera out/)
npm run start # preview do build
npm run lint  # análise estática
```

## Convenções de Git

- Branch base: `development`.
- Tipos permitidos: `feat`, `fix`, `docs`, `refactor`, `chore`, `test`, `build`, `ci`, `perf`, `style`.
- Branch: `<tipo>/<descricao-em-kebab-case>`.
- Commits Conventional Commits: `tipo(escopo): descrição` (escopo opcional).
- PRs contra `development`; use `gh` CLI.

## Agentes e Skills disponíveis

Migradas do `.opencode/` para skills do Hermes (categoria `software-development`):

| Skill | Função | Modo |
| ----- | ------ | ---- |
| openspec-propose | Propõe mudança OpenSpec (proposal/design/tasks) | edição |
| openspec-apply-change | Implementa tasks de uma mudança OpenSpec | edição |
| openspec-sync-specs | Sincroniza delta specs nas specs principais | edição |
| openspec-archive-change | Arquiva mudança concluída | edição |
| openspec-explore | Explora ideias antes de propor mudança | leitura |
| qa-test-generation | Gera testes Next.js/Flutter | edição |
| exception-handling-audit | Audita tratamento de exceções e status HTTP | leitura |
| security-audit | Auditoria SAST de segurança | leitura |
| ux-accessibility-audit | Audita UX/UI e acessibilidade WCAG | leitura |
| update-docs | Atualiza AGENTS.md e README.md | edição |
| run-tests | Executa lint e testes | edição |
| review-changes | Revisa commits recentes | leitura |
| analyze-coverage | Analisa cobertura de testes | leitura |
| git-workflow | Branch, commit, PR e issues | edição |

Modelos: skills de auditoria/planejamento usam o alias `plan` (deepseek-v4-pro);
skills de execução rápida usam o alias `build` (deepseek-v4.1-flash).
Para trocar: `/model plan` ou `/model build` (aliases definidos em config.yaml).
