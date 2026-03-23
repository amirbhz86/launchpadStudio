import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import SiteHeader from "@/app/components/SiteHeader";
import { getCaseStudyBySlug, type PortfolioCaseStudy } from "@/data/portfolioCaseStudies";
import { getProjectBySlug, portfolioProjects } from "@/data/portfolio";
import { routing } from "@/i18n/routing";
import { resolveCaseStudy, resolvePortfolioProject } from "@/lib/contentResolve";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    portfolioProjects.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const projectBase = getProjectBySlug(slug);
  const studyBase = getCaseStudyBySlug(slug);
  if (!projectBase || !studyBase) return { title: "Case study" };
  const project = resolvePortfolioProject(projectBase, locale);
  const study = resolveCaseStudy(studyBase, locale);
  return {
    title: `${project.title} — ${study.subtitle}`,
    description: study.lede.slice(0, 155),
  };
}

function BlockSection({ block }: { block: PortfolioCaseStudy["context"] }) {
  return (
    <section className="mt-12">
      <h2 className="font-sans text-xl font-semibold tracking-tight text-foreground">{block.title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
        {block.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}

export default async function PortfolioCasePage({ params }: Props) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const projectBase = getProjectBySlug(slug);
  const studyBase = getCaseStudyBySlug(slug);
  if (!projectBase || !studyBase) notFound();
  const project = resolvePortfolioProject(projectBase, locale);
  const study = resolveCaseStudy(studyBase, locale);

  const index = portfolioProjects.findIndex((p) => p.slug === slug);
  const prevBase = index > 0 ? portfolioProjects[index - 1] : null;
  const nextBase = index < portfolioProjects.length - 1 ? portfolioProjects[index + 1] : null;
  const prev = prevBase ? resolvePortfolioProject(prevBase, locale) : null;
  const next = nextBase ? resolvePortfolioProject(nextBase, locale) : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <article>
        <header className="border-b border-border bg-card/50">
          <div className="container mx-auto max-w-3xl px-6 py-12 md:px-8 md:py-16">
            <nav className="text-sm text-muted">
              <Link href="/portfolio" className="transition hover:text-primary">
                Case studies
              </Link>
              <span aria-hidden className="mx-2 text-muted/60">
                /
              </span>
              <span className="text-foreground/80">{project.title}</span>
            </nav>
            <p className="mt-8 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-primary">
              {project.sector}
            </p>
            <h1 className="mt-3 font-sans text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg font-medium leading-snug text-foreground/90">
              {study.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <span>{study.period}</span>
              <span aria-hidden className="text-muted/50">
                ·
              </span>
              <span>{study.engagement}</span>
            </div>
          </div>
        </header>

        <div className="relative mx-auto max-w-3xl px-6 md:px-8">
          <div className="relative -mt-6 aspect-[16/10] overflow-hidden rounded-[var(--ds-radius-xl)] border border-[var(--border-subtle)] shadow-[var(--ds-shadow-card)] md:-mt-10">
            <Image
              src={project.img}
              alt={project.imgAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>

        <div className="container mx-auto max-w-3xl px-6 pb-20 pt-12 md:px-8 md:pb-28 md:pt-16">
          <p className="text-xl leading-relaxed text-foreground/95">{study.lede}</p>

          <BlockSection block={study.context} />
          <BlockSection block={study.constraints} />
          <BlockSection block={study.research} />
          <BlockSection block={study.approach} />
          <BlockSection block={study.delivery} />
          <BlockSection block={study.outcomes} />

          <section className="mt-14 rounded-[var(--ds-radius-lg)] border border-primary/20 bg-primary/5 px-5 py-6 dark:bg-primary/10">
            <h2 className="font-sans text-lg font-semibold text-foreground">Stack &amp; integrations</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {study.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[var(--ds-chip-border)] bg-[var(--ds-chip-bg)] px-3 py-1 text-[0.75rem] font-medium uppercase tracking-wide text-foreground/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-16 flex flex-col gap-6 border-t border-border pt-10 sm:flex-row sm:justify-between">
            {prev ? (
              <Link
                href={`/portfolio/${prev.slug}`}
                className="group max-w-sm text-sm text-muted hover:text-foreground"
              >
                <span className="block text-xs uppercase tracking-[0.2em] text-muted">Previous</span>
                <span className="mt-1 block font-sans text-lg font-medium text-foreground group-hover:text-primary">
                  ← {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/portfolio/${next.slug}`}
                className="group max-w-sm text-right text-sm text-muted hover:text-foreground sm:ml-auto"
              >
                <span className="block text-xs uppercase tracking-[0.2em] text-muted">Next</span>
                <span className="mt-1 block font-sans text-lg font-medium text-foreground group-hover:text-primary">
                  {next.title} →
                </span>
              </Link>
            ) : (
              <span />
            )}
          </div>

          <p className="mt-12 text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 transition hover:underline"
            >
              Discuss a similar engagement
            </Link>
            <span aria-hidden className="mx-3 text-muted/40">
              ·
            </span>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted underline-offset-4 transition hover:text-foreground hover:underline"
            >
              All case studies
            </Link>
          </p>
        </div>
      </article>
    </div>
  );
}
