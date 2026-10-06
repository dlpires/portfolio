import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import { Nav } from "@/components";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diego Luis Peres Pires — Senior Data Engineer & Cloud Fullstack Developer",
  description:
    "Portfólio de Diego Luis Peres Pires, Senior Data Engineer & Cloud Fullstack Developer no SiDi: engenharia de dados, arquitetura AWS e aplicações fullstack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`dark ${jetbrainsMono.variable} ${inter.variable}`}>
      <body>
        <Nav />
        <div className="lg:pl-64">{children}</div>
      </body>
    </html>
  );
}
