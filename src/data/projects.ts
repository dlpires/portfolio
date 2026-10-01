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
    description: "Trabalho de Conclusão de Curso - USP/Esalq",
    stack: ["Python", "Jupyter"],
    language: "Jupyter Notebook",
    url: "https://github.com/dlpires/tcc-mba-usp",
  },
  {
    name: "quero-cafe-bar",
    description:
      "Sistema de gerenciamento para o estabelecimento \"Quero Café Bar\", desenvolvido como material didático para as aulas dos cursos de Informática (Desenvolvimento de Sistemas e Informática para Internet).",
    stack: ["JavaScript"],
    language: "JavaScript",
    url: "https://github.com/dlpires/quero-cafe-bar",
  },
  {
    name: "palmphone-n",
    description: "Aplicativo de coleta de chamada - Nativo (Android)",
    stack: ["Java", "Android"],
    language: "Java",
    url: "https://github.com/dlpires/palmphone-n",
  },
  {
    name: "pokedex-angular",
    description: "Aplicação em Angular - Pokedex (Vida FullStack)",
    stack: ["TypeScript", "Angular"],
    language: "TypeScript",
    url: "https://github.com/dlpires/pokedex-angular",
  },
  {
    name: "projeto_pi_ipia",
    description:
      "Projeto da disciplina de Programação para a Internet da turma de 3º Informática para a Internet - Etec Pedro Ferreira Alves",
    stack: ["PHP"],
    language: "PHP",
    url: "https://github.com/dlpires/projeto_pi_ipia",
  },
  {
    name: "students_evasion_analysis",
    description:
      "Graduate final project for Data Science analysing student evasion in a Private University",
    stack: ["R", "Python"],
    language: "Jupyter Notebook",
    url: "https://github.com/juliocRamos/students_evasion_analysis",
  },
];
