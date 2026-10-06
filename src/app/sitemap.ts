import type { MetadataRoute } from "next";

// Rotas de metadata exigem geração estática explícita sob `output: "export"`.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dlpires.github.io/portfolio/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
