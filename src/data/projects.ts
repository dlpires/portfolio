export type Project = {
  name: string;
  description: string;
  /** Tecnologias exibidas como chips. */
  stack: string[];
  /** Linguagem primária do GitHub, exibida no badge. */
  language: string;
  url: string;
};

export const projects: Project[] = [
  {
    name: "tcc-mba-usp",
    description:
      "TCC do MBA em Data Science & Analytics (USP/Esalq) sobre mineração de dados com crawlers. Coleta dados do YouTube com Scrapy + Selenium (Firefox em Docker), faz o ETL dos datasets \"top 1000\" de influenciadores (TikTok/YouTube/Instagram) em notebooks e consolida a análise em um dashboard Power BI.",
    stack: ["Python", "Scrapy", "Selenium", "Docker", "Power BI"],
    language: "Jupyter Notebook",
    url: "https://github.com/dlpires/tcc-mba-usp",
  },
  {
    name: "quero-cafe-bar",
    description:
      "Sistema de gestão para o estabelecimento \"Quero Café Bar\", feito como material didático. API REST em NestJS + TypeORM/MySQL (autenticação JWT, perfis de acesso e auditoria) e app mobile/web em Ionic + Capacitor, com módulos de produtos, usuários, mesas e comandas e uma tela de cozinha que acompanha o status de entrega dos itens.",
    stack: ["TypeScript", "NestJS", "Ionic", "MySQL"],
    language: "JavaScript",
    url: "https://github.com/dlpires/quero-cafe-bar",
  },
  {
    name: "palmphone-n",
    description:
      "Aplicativo Android nativo (Java) para coleta de chamada escolar: login e cadastro de usuários, tela de coletor com acesso à câmera/leitor e persistência em nuvem via Firebase (Auth, Realtime Database e Storage), com notificações ao usuário.",
    stack: ["Java", "Android", "Firebase"],
    language: "Java",
    url: "https://github.com/dlpires/palmphone-n",
  },
  {
    name: "pokedex-angular",
    description:
      "Pokedex em Angular 16 (projeto do canal Vida FullStack): a Home lista os Pokémons e a página de detalhes exibe as informações de cada um, consumindo a PokéAPI (pokeapi.co) por meio de um serviço HTTP dedicado.",
    stack: ["TypeScript", "Angular"],
    language: "TypeScript",
    url: "https://github.com/dlpires/pokedex-angular",
  },
  {
    name: "projeto_pi_ipia",
    description:
      "Projeto da disciplina de Programação para a Internet (Etec Pedro Ferreira Alves, Mogi-Mirim/SP): um CRUD web em PHP com Bootstrap e MariaDB, desenvolvido pela turma de 3º Informática para a Internet.",
    stack: ["PHP", "Bootstrap", "MariaDB"],
    language: "PHP",
    url: "https://github.com/dlpires/projeto_pi_ipia",
  },
  {
    name: "students_evasion_analysis",
    description:
      "Projeto final de pós-graduação em Data Science que analisa a evasão de alunos em uma universidade privada, usando notebooks (R e Python) para o tratamento dos dados e a modelagem.",
    stack: ["R", "Python"],
    language: "Jupyter Notebook",
    url: "https://github.com/juliocRamos/students_evasion_analysis",
  },
];
