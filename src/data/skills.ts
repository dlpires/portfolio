export type SkillIcon =
  | "frontend"
  | "backend"
  | "data"
  | "cloud"
  | "database"
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
    skills: ["ReactJS", "AngularJS", "TypeScript", "HTML/CSS"],
  },
  {
    title: "Backend",
    icon: "backend",
    skills: ["Python", "Node.js", "APIs REST", "Web Scraping"],
  },
  {
    title: "Dados & ML",
    icon: "data",
    skills: ["ETL", "Machine Learning", "GenAI", "MLFlow"],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: ["AWS", "Docker", "Jenkins", "Ansible", "CI/CD"],
  },
  {
    title: "Bancos & Observabilidade",
    icon: "database",
    skills: ["SQL Server", "MySQL", "PostgreSQL", "Grafana", "Prometheus"],
  },
  {
    title: "Educação & Liderança",
    icon: "education",
    skills: ["Docência superior", "Tech Lead", "Scrum"],
  },
];
