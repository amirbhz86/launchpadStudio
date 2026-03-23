import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import SiteHeader from "@/app/components/SiteHeader";
import { portfolioProjects } from "@/data/portfolio";
import { resolvePortfolioProjects } from "@/lib/contentResolve";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Selected web and product engagements—B2B marketing, commerce, and creative studio work with research-backed write-ups.",
};

export default async function PortfolioIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const projects = resolvePortfolioProjects(portfolioProjects, locale);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="border-t border-border bg-card/40">
        <div className="container mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
          <p className="ds-eyebrow">Work</p>
          <h1 className="mt-4 max-w-2xl font-sans text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Case studies
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Long-form notes on context, constraints, and delivery—each route mirrors a project card on
            the home page.
          </p>

          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <li key={project.id}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block overflow-hidden rounded-[var(--ds-radius-xl)] border border-[var(--border-subtle)] bg-card shadow-[var(--ds-shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--ds-shadow-card-hover)]"
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden">
                    <Image
                      src={project.img}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span
                      className="absolute inset-0"
                      style={{ background: "var(--ds-image-overlay)" }}
                      aria-hidden
                    />
                    <span className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="block text-[length:var(--ds-label-size)] font-medium uppercase tracking-[var(--ds-label-tracking)] text-white/85">
                        {project.sector}
                      </span>
                      <span className="mt-1 block font-sans text-lg font-semibold text-white">
                        {project.title}
                      </span>
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-sm leading-snug text-muted">{project.pitch}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read case study
                      <span aria-hidden className="transition group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
