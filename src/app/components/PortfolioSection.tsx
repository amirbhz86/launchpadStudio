"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { PortfolioProject } from "@/data/portfolio";
import RevealOnScroll from "./RevealOnScroll";

type LightboxState = { src: string; alt: string; title: string } | null;

function CaseDetailsContent({
  project,
  t,
}: {
  project: PortfolioProject;
  t: (key: string) => string;
}) {
  return (
    <div className="flex flex-col gap-4 text-left">
      <div>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-foreground/90">
          {t("brief")}
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.details.need}</p>
      </div>
      <div>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-foreground/90">
          {t("delivered")}
        </p>
        <ul className="mt-1.5 space-y-1.5 border-l-2 border-primary/35 pl-3 text-sm leading-relaxed text-muted">
          {project.details.built.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-[var(--ds-radius-md)] border border-primary/20 bg-primary/5 p-3 dark:bg-primary/10">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-foreground/90">
          {t("impact")}
        </p>
        <p className="mt-1 text-[0.9rem] leading-snug text-muted">{project.details.impact}</p>
      </div>
    </div>
  );
}

function PortfolioCard({
  project,
  index,
  onOpenLightbox,
  t,
}: {
  project: PortfolioProject;
  index: number;
  onOpenLightbox: () => void;
  t: (key: string, values?: Record<string, string | number | Date>) => string;
}) {
  const [pinned, setPinned] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [canHoverFlip, setCanHoverFlip] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (min-width: 1024px)");
    const apply = () => setCanHoverFlip(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const flipped = pinned || (canHoverFlip && hovering);

  return (
    <article
      className="portfolio-scroll-card group/card relative flex min-h-[560px] w-[min(100vw-2.5rem,400px)] shrink-0 snap-start snap-always flex-col overflow-hidden rounded-[var(--ds-radius-xl)] border border-[var(--border-subtle)] bg-card shadow-[var(--ds-shadow-card)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--ds-shadow-card-hover)] motion-reduce:transform-none motion-reduce:hover:translate-y-0"
      style={{ animationDelay: `${Math.min(index, 14) * 65}ms` }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="portfolio-flip-root relative min-h-[520px] w-full flex-1">
        <button
          type="button"
          aria-pressed={pinned}
          aria-label={
            pinned
              ? t("flipPinned", { title: project.title })
              : t("flipUnpinned", { title: project.title })
          }
          onClick={() => setPinned((p) => !p)}
          className="absolute inset-0 z-0 flex min-h-[520px] w-full cursor-pointer flex-col overflow-hidden rounded-[var(--ds-radius-xl)] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <div className={`portfolio-flip-inner relative h-full min-h-[520px] w-full ${flipped ? "is-flipped" : ""}`}>
            <div className="portfolio-flip-face portfolio-flip-face--front flex h-full flex-col bg-card">
              <div className="relative aspect-[16/11] w-full shrink-0">
                <Image
                  src={project.img}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 95vw, 400px"
                  className="object-cover transition duration-500 ease-out group-hover/card:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover/card:scale-100"
                />
                <span
                  className="absolute inset-0"
                  style={{ background: "var(--ds-image-overlay)" }}
                  aria-hidden
                />
                <span className="pointer-events-none absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <span className="block text-[length:var(--ds-label-size)] font-medium uppercase tracking-[var(--ds-label-tracking)] text-white/85">
                    {project.sector}
                  </span>
                  <span className="mt-1 block font-sans text-2xl font-semibold leading-tight tracking-tight text-white md:text-[1.65rem]">
                    {project.title}
                  </span>
                </span>
              </div>

              <div className="flex min-h-0 flex-1 flex-col px-5 pb-5 pt-4 md:px-6 md:pb-6 md:pt-5">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-muted/90">
                  <span className="lg:hidden">{t("flipHintMobile")}</span>
                  <span className="hidden lg:inline">{t("flipHintDesktop")}</span>
                </p>
                <p className="mt-2 text-[0.9375rem] leading-snug text-muted">{project.pitch}</p>

                <ul className="mt-4 flex flex-wrap gap-2" aria-label={t("focusLabel")}>
                  {project.highlights.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-[var(--ds-chip-border)] bg-[var(--ds-chip-bg)] px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wide text-foreground/90"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="portfolio-flip-face portfolio-flip-face--back flex h-full flex-col bg-card">
              <div
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] dark:opacity-[0.07]"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse 120% 80% at 20% 0%, var(--accent-soft), transparent 55%)",
                }}
                aria-hidden
              />
              <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden">
                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-2 pt-5 md:px-6 md:pt-6">
                  <CaseDetailsContent project={project} t={t} />
                </div>
                <div className="relative shrink-0 border-t border-[var(--border-subtle)] bg-card px-5 py-4 md:px-6">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-[var(--ds-radius-sm)] border border-primary/35 bg-primary/10 py-2.5 text-center text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-foreground transition hover:border-primary/55 hover:bg-primary/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {t("fullCaseStudy")}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenLightbox();
          }}
          className="absolute right-3 top-3 z-20 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-black/65 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label={t("openPreview", { title: project.title })}
        >
          <span className="hidden sm:inline">Full size</span>
          <span className="sm:hidden">Zoom</span>
        </button>
      </div>
    </article>
  );
}

export default function PortfolioSection({ projects }: { projects: PortfolioProject[] }) {
  const t = useTranslations("Portfolio");
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const titleId = useId();
  const scrollerRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setLightbox(null), []);

  const scrollProjects = useCallback((direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("article");
    const delta = card ? Math.min(card.offsetWidth + 24, el.clientWidth * 0.92) : el.clientWidth * 0.85;
    el.scrollBy({ left: direction * delta, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox, close]);

  return (
    <>
      <RevealOnScroll>
        <section
          id="portfolio"
          className="border-t border-[var(--border-subtle)] bg-white/40 py-[var(--ds-section-y)] dark:bg-card/30"
        >
          <div className="container mx-auto max-w-6xl px-6 md:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="ds-eyebrow">{t("sectionEyebrow")}</p>
              <h2 className="ds-heading-2">{t("sectionTitle")}</h2>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-muted md:text-base">
                {t("sectionIntro")}
              </p>
              <p className="mt-4">
                <Link
                  href="/portfolio"
                  className="text-sm font-medium text-primary underline-offset-4 transition hover:underline"
                >
                  {t("browseAll")}
                </Link>
              </p>
            </div>

            <div className="relative mt-14 lg:mt-16">
              <div
                className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-10 bg-gradient-to-r from-background to-transparent dark:from-background"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-10 bg-gradient-to-l from-background to-transparent dark:from-background"
                aria-hidden
              />

              <div
                ref={scrollerRef}
                role="region"
                aria-label={t("regionLabel")}
                className="portfolio-horizontal-scroll flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden scroll-smooth pb-4 pl-1 pr-1 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden"
              >
                {projects.map((project, index) => (
                  <PortfolioCard
                    key={project.id}
                    project={project}
                    index={index}
                    t={t}
                    onOpenLightbox={() =>
                      setLightbox({ src: project.img, alt: project.imgAlt, title: project.title })
                    }
                  />
                ))}
              </div>

              <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
                <p className="text-center text-[0.75rem] font-medium uppercase tracking-[0.16em] text-muted sm:text-left">
                  {t("scrollHint")}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => scrollProjects(-1)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-card text-foreground shadow-sm transition hover:border-primary/40 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    aria-label={t("scrollLeft")}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M15 18l-6-6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollProjects(1)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-card text-foreground shadow-sm transition hover:border-primary/40 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    aria-label={t("scrollRight")}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M9 18l6-6-6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {lightbox ? (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"
            aria-label={t("closeLightbox")}
            onClick={close}
          />
          <div className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col items-center">
            <div className="relative max-h-[82vh] w-full">
              {/* eslint-disable-next-line @next/next/no-img-element -- large lightbox uses native img for reliable full-size display */}
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="mx-auto max-h-[82vh] w-auto max-w-full rounded-[var(--ds-radius-xl)] object-contain shadow-2xl"
              />
            </div>
            <p id={titleId} className="mt-4 max-w-2xl text-center text-sm text-white/90">
              {lightbox.title}
            </p>
            <button
              type="button"
              onClick={close}
              className="fixed right-4 top-4 z-[210] flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25 md:right-6 md:top-6"
              aria-label={t("closeLightbox")}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
