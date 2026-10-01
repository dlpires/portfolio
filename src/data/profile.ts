export type SocialIcon = "github" | "linkedin" | "mail";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIcon;
};

export type Profile = {
  name: string;
  /** Frase curta de posicionamento, exibida abaixo do nome. */
  role: string;
  /** Parágrafo curto de apresentação (2 frases). */
  bio: string;
  avatar: {
    /** Caminho dentro de `public/`, ou `null` para renderizar o monograma. */
    src: string | null;
    initials: string;
    alt: string;
  };
  socials: SocialLink[];
};

export const profile: Profile = {
  name: "Diego Luis Pires",
  role: "Fullstack Developer & Data Engineer",
  bio: "Desenvolvedor Cloud no SiDi, atuando de aplicações fullstack a pipelines de dados. Bacharel em Sistemas de Informação, MBA em Data Science & Analytics pela USP/Esalq e professor de Ensino Técnico e Superior.",
  avatar: {
    src: null,
    initials: "DP",
    alt: "Foto de perfil de Diego Luis Pires",
  },
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/dlpires",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/diegoluispires",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:diegoluispires@gmail.com",
      icon: "mail",
    },
  ],
};
