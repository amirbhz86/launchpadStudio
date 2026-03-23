import type { BlogPost } from "@/data/blog";
import type { PortfolioProject, PortfolioProjectDetails } from "@/data/portfolio";
import type { CaseStudyBlock, PortfolioCaseStudy } from "@/data/portfolioCaseStudies";
import type { BlogPatch, CaseStudyPatch, PortfolioPatch } from "@/data/locales/patchTypes";
import { blogPatchesAr } from "@/data/locales/blog/ar";
import { blogPatchesDe } from "@/data/locales/blog/de";
import { blogPatchesEs } from "@/data/locales/blog/es";
import { blogPatchesFa } from "@/data/locales/blog/fa";
import { blogPatchesFr } from "@/data/locales/blog/fr";
import { blogPatchesRu } from "@/data/locales/blog/ru";
import { caseStudyPatchesAr } from "@/data/locales/caseStudy/ar";
import { caseStudyPatchesDe } from "@/data/locales/caseStudy/de";
import { caseStudyPatchesEs } from "@/data/locales/caseStudy/es";
import { caseStudyPatchesFa } from "@/data/locales/caseStudy/fa";
import { caseStudyPatchesFr } from "@/data/locales/caseStudy/fr";
import { caseStudyPatchesRu } from "@/data/locales/caseStudy/ru";
import { portfolioPatchesAr } from "@/data/locales/portfolio/ar";
import { portfolioPatchesDe } from "@/data/locales/portfolio/de";
import { portfolioPatchesEs } from "@/data/locales/portfolio/es";
import { portfolioPatchesFa } from "@/data/locales/portfolio/fa";
import { portfolioPatchesFr } from "@/data/locales/portfolio/fr";
import { portfolioPatchesRu } from "@/data/locales/portfolio/ru";

export type { BlogPatch, CaseStudyPatch, PortfolioPatch } from "@/data/locales/patchTypes";

const BLOG_BY_LOCALE: Record<string, Record<string, BlogPatch>> = {
  de: blogPatchesDe,
  es: blogPatchesEs,
  fr: blogPatchesFr,
  ru: blogPatchesRu,
  ar: blogPatchesAr,
  fa: blogPatchesFa,
};

const PORTFOLIO_BY_LOCALE: Record<string, Record<string, PortfolioPatch>> = {
  de: portfolioPatchesDe,
  es: portfolioPatchesEs,
  fr: portfolioPatchesFr,
  ru: portfolioPatchesRu,
  ar: portfolioPatchesAr,
  fa: portfolioPatchesFa,
};

const CASE_STUDY_BY_LOCALE: Record<string, Record<string, CaseStudyPatch>> = {
  de: caseStudyPatchesDe,
  es: caseStudyPatchesEs,
  fr: caseStudyPatchesFr,
  ru: caseStudyPatchesRu,
  ar: caseStudyPatchesAr,
  fa: caseStudyPatchesFa,
};

function applyBlogPatch(base: BlogPost, patch: BlogPatch): BlogPost {
  return {
    ...base,
    title: patch.title ?? base.title,
    seoTitle: patch.seoTitle ?? base.seoTitle,
    excerpt: patch.excerpt ?? base.excerpt,
    category: patch.category ?? base.category,
    readTime: patch.readTime ?? base.readTime,
    keywords: patch.keywords ?? base.keywords,
    tags: patch.tags ?? base.tags,
    paragraphs: patch.paragraphs ?? base.paragraphs,
    mediaTop: patch.mediaTop ?? base.mediaTop,
    mediaBottom: patch.mediaBottom ?? base.mediaBottom,
  };
}

function mergeBlock(base: CaseStudyBlock, patch?: Partial<CaseStudyBlock>): CaseStudyBlock {
  if (!patch) return base;
  return {
    title: patch.title ?? base.title,
    paragraphs: patch.paragraphs ?? base.paragraphs,
  };
}

function applyPortfolioPatch(base: PortfolioProject, patch: PortfolioPatch): PortfolioProject {
  const d = patch.details;
  return {
    ...base,
    title: patch.title ?? base.title,
    pitch: patch.pitch ?? base.pitch,
    sector: patch.sector ?? base.sector,
    imgAlt: patch.imgAlt ?? base.imgAlt,
    highlights: patch.highlights ?? base.highlights,
    details: d
      ? {
          need: d.need ?? base.details.need,
          built: d.built ?? base.details.built,
          impact: d.impact ?? base.details.impact,
        }
      : base.details,
  };
}

export function resolveBlogPost(post: BlogPost, locale: string): BlogPost {
  if (locale === "en") return post;
  const pack = BLOG_BY_LOCALE[locale];
  if (!pack) return post;
  const patch = pack[post.slug];
  if (!patch) return post;
  return applyBlogPatch(post, patch);
}

export function resolveBlogPosts(posts: BlogPost[], locale: string): BlogPost[] {
  return posts.map((p) => resolveBlogPost(p, locale));
}

export function resolvePortfolioProject(project: PortfolioProject, locale: string): PortfolioProject {
  if (locale === "en") return project;
  const pack = PORTFOLIO_BY_LOCALE[locale];
  if (!pack) return project;
  const patch = pack[project.slug];
  if (!patch) return project;
  return applyPortfolioPatch(project, patch);
}

export function resolvePortfolioProjects(projects: PortfolioProject[], locale: string): PortfolioProject[] {
  return projects.map((p) => resolvePortfolioProject(p, locale));
}

export function resolveCaseStudy(study: PortfolioCaseStudy, locale: string): PortfolioCaseStudy {
  if (locale === "en") return study;
  const pack = CASE_STUDY_BY_LOCALE[locale];
  if (!pack) return study;
  const patch = pack[study.slug];
  if (!patch) return study;
  return {
    ...study,
    subtitle: patch.subtitle ?? study.subtitle,
    period: patch.period ?? study.period,
    engagement: patch.engagement ?? study.engagement,
    lede: patch.lede ?? study.lede,
    context: mergeBlock(study.context, patch.context),
    constraints: mergeBlock(study.constraints, patch.constraints),
    research: mergeBlock(study.research, patch.research),
    approach: mergeBlock(study.approach, patch.approach),
    delivery: mergeBlock(study.delivery, patch.delivery),
    outcomes: mergeBlock(study.outcomes, patch.outcomes),
    stack: patch.stack ?? study.stack,
  };
}

/** BCP 47 tag for `Intl` / `toLocaleDateString` */
export function intlLocaleForAppLocale(locale: string): string {
  const map: Record<string, string> = {
    en: "en-US",
    de: "de-DE",
    es: "es-ES",
    fr: "fr-FR",
    ru: "ru-RU",
    ar: "ar-SA",
    fa: "fa-IR",
  };
  return map[locale] ?? locale;
}
