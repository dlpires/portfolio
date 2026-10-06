import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import { Nav } from "@/components";
import { profile, email } from "@/data";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://dlpires.github.io/portfolio/";
const siteTitle = `${profile.name} — ${profile.role}`;
const siteDescription = profile.bio;

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: `${profile.name} — Portfólio`,
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  email,
  jobTitle: profile.role,
  description: profile.bio,
  worksFor: { "@type": "Organization", name: "SiDi" },
  sameAs: profile.socials
    .map((social) => social.href)
    .filter((href) => !href.startsWith("mailto:")),
};

const themeInitScript = `(function(){try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.remove('dark')}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`dark ${jetbrainsMono.variable} ${inter.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <div className="lg:pl-64">{children}</div>
      </body>
    </html>
  );
}
