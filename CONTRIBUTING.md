# Contribuindo com o CacauHub

## Branching Model

O CacauHub usa **GitHub Flow**: a branch `main` é sempre estável e todo desenvolvimento acontece em branches de feature. Mudanças grandes (acima de ~400 linhas de diff) devem ser divididas em **Stacked PRs** — PRs empilhados onde cada um targeta a branch do anterior.

Consulte [`.agents/skills/github/references/stacked-pr-workflow.md`](.agents/skills/github/references/stacked-pr-workflow.md) para o fluxo detalhado de merge de Stacked PRs.

## Branch Naming

Toda branch deve seguir o padrão `tipo/descricao-kebab-case` usando um dos tipos do Conventional Commits:

| Tipo | Uso | Exemplo |
|---|---|---|
| `feat/` | Nova funcionalidade | `feat/user-login` |
| `fix/` | Correção de bug | `fix/login-validation` |
| `docs/` | Documentação | `docs/api-readme` |
| `refactor/` | Refatoração | `refactor/auth-service` |
| `chore/` | Tarefa de manutenção | `chore/update-deps` |
| `test/` | Testes | `test/user-model` |
| `build/` | Build ou dependências | `build/upgrade-webpack` |
| `ci/` | Pipeline de CI | `ci/add-eslint-step` |
| `perf/` | Performance | `perf/optimize-query` |
| `style/` | Formatação de código | `style/indent-fix` |

## Pull Request Workflow

### Título

O título do PR deve seguir Conventional Commits: `tipo: descrição`. Exemplo: `feat: add user authentication`.

### Descrição

Inclua a motivação da mudança e referencie a issue relacionada quando aplicável (ex.: `Closes #9`).

### Revisão

Todo PR precisa de pelo menos 1 approval de outro contribuidor antes de ser mergeado.

### Merge

- Use **squash merge** para manter o histórico linear em `main`.
- O comando padrão é `gh pr merge <N> --squash --title "tipo: descrição (#N)"`.
- A mensagem do commit de merge deve seguir o mesmo formato do título: `tipo: descrição (#N)`.
- Exemplo: `gh pr merge 42 --squash --title "feat: add user login (#42)"`.

### Cleanup

Após o merge, delete a branch:
- **GitHub UI**: marque "Delete branch" (ou configure deleção automática em Settings > General).
- **CLI**: `git branch -d <branch>` e `git push origin --delete <branch>`.

### Escopo no Monorepo

PRs devem ser escopados a um único diretório de projeto (`nextjs/` ou `mobile/`) sempre que possível. Mudanças que afetam ambos os projetos são excepcionais e devem justificar na descrição do PR.

## Commit Messages

Use **Conventional Commits**: `tipo(escopo): descrição`.

Tipos válidos: `feat`, `fix`, `docs`, `refactor`, `chore`, `test`, `build`, `ci`, `perf`, `style`.

Exemplos:
- `feat(auth): add JWT token validation`
- `fix(api): handle null user on login`
- `docs(readme): update installation steps`
- `refactor(database): extract query builder`

## Local Development Setup

### Pré-requisitos

- Node.js >= 22
- Yarn (para o projeto Next.js)
- Flutter SDK >= 3.18 (para o mobile)
- Docker e Docker Compose (para o banco de dados)

### nextjs/

```bash
# Instalar dependências
cd nextjs && yarn install

# Iniciar banco de dados PostgreSQL
docker compose -f ../devops/docker/docker-compose.yml up -d

# Copiar variáveis de ambiente
cp .env.example .env

# Executar migrations
yarn migration:run

# Iniciar servidor de desenvolvimento
yarn dev
```

Comandos disponíveis:

| Comando | Descrição |
|---|---|
| `yarn dev` | Servidor de desenvolvimento em `localhost:3000` |
| `yarn build` | Build de produção |
| `yarn lint` | ESLint (flat config) |
| `yarn migration:run` | Executa migrations pendentes |
| `yarn migration:generate` | Gera nova migration |
| `yarn migration:revert` | Reverte última migration |

### mobile/

```bash
cd mobile && flutter pub get && flutter run
```

Comandos disponíveis:

| Comando | Descrição |
|---|---|
| `flutter run` | Executa em dispositivo/emulador |
| `flutter test` | Executa testes |
| `flutter analyze` | Análise estática |

## Stacked PR Workflow

Para mudanças grandes, use Stacked PRs. O fluxo completo de merge está documentado em [`.agents/skills/github/references/stacked-pr-workflow.md`](.agents/skills/github/references/stacked-pr-workflow.md).

Resumo:
1. Crie uma chain de PRs onde cada PR targeta o branch do anterior.
2. Faça squash merge do primeiro PR em `main`.
3. Para cada PR subsequente: rebaseie em `main`, atualize a base, faça squash merge.

> Este repositório conta com agentes OpenCode especializados. Consulte `.opencode/agents/` e o arquivo `AGENTS.md` na raiz para detalhes.
