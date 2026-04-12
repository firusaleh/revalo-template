import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";
import { getAllBranchenSlugs } from "@/lib/branchen";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://getrevalo.de";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bewerten`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const branchenPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/branchen`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...getAllBranchenSlugs().map((slug) => ({
      url: `${baseUrl}/branchen/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [...staticPages, ...branchenPages, ...blogPages];
}
