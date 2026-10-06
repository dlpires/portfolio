export type CareerIcon = "education" | "work";

export type CareerMilestone = {
  period: string;
  title: string;
  description: string;
  icon: CareerIcon;
};

export const careerMilestones: CareerMilestone[] = [
  {
    period: "2016-2019",
    title: "FHO | Uniararas",
    description: "Bacharelado em Sistemas de Informação",
    icon: "education",
  },
  {
    period: "2019-2021",
    title: "FHO | Uniararas",
    description: "Especialização em Data Science",
    icon: "education",
  },
  {
    period: "2020-atual",
    title: "Professor",
    description: "Ensino Técnico e Superior",
    icon: "work",
  },
  {
    period: "2020-2023",
    title: "SiDi - JR e PL",
    description: "Analista de TI JR/PL",
    icon: "work",
  },
  {
    period: "2023-2025",
    title: "SiDi - PL",
    description: "Desenvolvedor de Software Pleno",
    icon: "work",
  },
  {
    period: "2024-2025",
    title: "MBA USP/Esalq",
    description: "Data Science e Analytics",
    icon: "education",
  },
  {
    period: "2025-atual",
    title: "SiDi - SR",
    description: "Desenvolvedor de Software Sênior",
    icon: "work",
  },
];
