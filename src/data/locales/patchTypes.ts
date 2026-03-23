import type { BlogMediaItem } from "@/data/blog";
import type { PortfolioProjectDetails } from "@/data/portfolio";
import type { CaseStudyBlock } from "@/data/portfolioCaseStudies";

export type BlogPatch = {
  title?: string;
  seoTitle?: string;
  excerpt?: string;
  category?: string;
  readTime?: string;
  keywords?: string[];
  tags?: string[];
  paragraphs?: string[];
  mediaTop?: BlogMediaItem[];
  mediaBottom?: BlogMediaItem[];
};

export type PortfolioPatch = {
  title?: string;
  pitch?: string;
  sector?: string;
  imgAlt?: string;
  highlights?: string[];
  details?: Partial<PortfolioProjectDetails>;
};

export type CaseStudyPatch = {
  subtitle?: string;
  period?: string;
  engagement?: string;
  lede?: string;
  context?: Partial<CaseStudyBlock>;
  constraints?: Partial<CaseStudyBlock>;
  research?: Partial<CaseStudyBlock>;
  approach?: Partial<CaseStudyBlock>;
  delivery?: Partial<CaseStudyBlock>;
  outcomes?: Partial<CaseStudyBlock>;
  stack?: string[];
};
