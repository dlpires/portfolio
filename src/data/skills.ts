export type SkillIcon =
  | "frontend"
  | "backend"
  | "data"
  | "cloud"
  | "database"
  | "mobile"
  | "ai"
  | "education";

export type SkillCategory = {
  title: string;
  icon: SkillIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "frontend",
    skills: ["JavaScript", "TypeScript", "React", "Angular", "HTML/CSS", "Tailwind"],
  },
  {
    title: "Backend",
    icon: "backend",
    skills: ["Node.js", "Python (Flask)", "PHP", "Java", "APIs REST", "Web Scraping"],
  },
  {
    title: "Dados & ML",
    icon: "data",
    skills: [
      "Python (Pandas/NumPy)",
      "Jupyter",
      "ETL",
      "Machine Learning",
      "GenAI",
      "MLOps",
      "MLFlow",
    ],
  },
  {
    title: "IA & Agentes",
    icon: "ai",
    skills: [
      "Desenvolvimento Agêntico",
      "Agentes, skills & comandos",
      "Codex",
      "Cursor",
      "OpenCode",
      "Hermes",
      "Claude Code",
      "Docência em IA",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Ansible", "CI/CD"],
  },
  {
    title: "Bancos de Dados",
    icon: "database",
    skills: ["SQL Server", "MySQL", "PostgreSQL"],
  },
  {
    title: "Mobile",
    icon: "mobile",
    skills: ["Android (Java)", "PhoneGap"],
  },
  {
    title: "Educação & Liderança",
    icon: "education",
    skills: ["Material didático", "Professor ETEC", "Docência superior", "Tech Lead", "Scrum"],
  },
];
