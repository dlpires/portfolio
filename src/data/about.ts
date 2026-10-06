export type BadgeIcon = "badge-check" | "award";

export type Badge = {
  label: string;
  icon: BadgeIcon;
};

export type EducationItem = {
  title: string;
  institution: string;
  period: string;
};

export type About = {
  /** Parágrafo de carreira, complementa a bio curta de `profile.bio`. */
  summary: string;
  badges: Badge[];
  education: EducationItem[];
  certifications: string[];
  resume: {
    label: string;
    /** URL do PDF em `public/`, já com o `basePath` "/portfolio". */
    href: string;
  };
};

export const about: About = {
  summary:
    "Com mais de uma década de atuação em tecnologia, construí uma trajetória centrada em desenvolvimento de software escalável, engenharia de dados e arquitetura em nuvem AWS — projetando pipelines ETL e rotinas de Web Scraping para alimentar modelos de IA. No SiDi, atuo como Desenvolvedor de Software Sênior, automatizando esteiras de CI/CD com Jenkins e Ansible AWX e construindo aplicações fullstack com Python, Node.js, TypeScript e ReactJS. Em paralelo, leciono no ensino superior em Análise e Desenvolvimento de Sistemas, cobrindo Machine Learning, GenAI e ciência de dados.",
  badges: [
    { label: "AWS Certified Cloud Practitioner", icon: "badge-check" },
    { label: "MBA em Data Science & Analytics — USP/Esalq", icon: "award" },
  ],
  education: [
    {
      title: "MBA em Data Science e Analytics",
      institution: "USP / ESALQ",
      period: "2025",
    },
    {
      title: "Especialização em Data Science",
      institution: "FHO — Fundação Hermínio Ometto",
      period: "2021",
    },
    {
      title: "Bacharelado em Sistemas de Informação",
      institution: "FHO — Fundação Hermínio Ometto",
      period: "2018",
    },
    {
      title: "Técnico em Redes de Computadores",
      institution: "ETEC Pedro Ferreira Alves",
      period: "2014",
    },
  ],
  certifications: [
    "AWS Certified Cloud Practitioner",
    "Scrum Foundation Professional Certificate (SFPC™)",
    "Data Science de A a Z — da Extração à Exibição dos Dados",
    "Introdução à Ciência de Dados 2.0",
  ],
  resume: {
    label: "Baixar currículo (PDF)",
    href: "/portfolio/cv-diego-luis-peres-pires.pdf",
  },
};
