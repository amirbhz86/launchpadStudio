import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { portfolioProjects } from "@/data/portfolio";
import { routing } from "@/i18n/routing";
import { localizedAbsoluteUrl } from "@/lib/locale-path";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/portfolio", "/blog"];

  const staticEntries: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: localizedAbsoluteUrl(locale, path || "/"),
      lastModified: new Date(),
      changeFrequency: path === "" ? ("weekly" as const) : path === "/blog" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path === "/blog" ? 0.9 : 0.88,
    })),
  );

  const articles: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    blogPosts.map((post) => ({
      url: localizedAbsoluteUrl(locale, `/blog/${post.slug}`),
      lastModified: new Date(post.updatedAt ?? post.date),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  );

  const caseStudies: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    portfolioProjects.map((project) => ({
      url: localizedAbsoluteUrl(locale, `/portfolio/${project.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.72,
    })),
  );

  return [...staticEntries, ...caseStudies, ...articles];
}
