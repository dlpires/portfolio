import type { MetadataRoute } from "next";

// Rotas de metadata exigem geração estática explícita sob `output: "export"`.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://dlpires.github.io/portfolio/sitemap.xml",
  };
}
