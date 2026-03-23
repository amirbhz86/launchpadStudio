import type { CSSProperties } from "react";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Button, { primaryButtonClasses } from "../components/Button";
import PortfolioSection from "../components/PortfolioSection";
import StatsStrip from "../components/StatsStrip";
import RevealOnScroll from "../components/RevealOnScroll";
import SiteHeader from "../components/SiteHeader";
import ToolsSection from "../components/ToolsSection";
import { portfolioProjects } from "@/data/portfolio";
import { resolvePortfolioProjects } from "@/lib/contentResolve";
import { SITE_NAME } from "@/lib/site";

const heroNoiseBg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

/** Full-bleed hero texture (HTML headline stays on top). Swap file: texture-1.png | texture-3-rays.png | texture-4-radial.png */
const HERO_TEXTURE_SRC = "/hero/texture-2-mesh.png";

type Props = { params: Promise<{ locale: string }> };

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");
  const localizedProjects = resolvePortfolioProjects(portfolioProjects, locale);
  const [heroA, heroB, heroC] = localizedProjects;

  const stats = [
    { value: "50+", label: t("stats.s1") },
    { value: "8+", label: t("stats.s2") },
    { value: "< 24h", label: t("stats.s3") },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative isolate flex min-h-[90vh] flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--hero-surface)] dark:bg-[var(--hero-deep)]" aria-hidden />
        <div className="absolute inset-0" aria-hidden>
          <Image
            src={HERO_TEXTURE_SRC}
            alt=""
            fill
            className="object-cover object-[72%_24%] opacity-[0.38] saturate-[1.02] dark:opacity-[0.92] dark:saturate-100"
            priority
            sizes="100vw"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,var(--hero-surface)_0%,color-mix(in_srgb,var(--hero-surface)_52%,transparent)_40%,transparent_74%)] dark:bg-[linear-gradient(90deg,var(--hero-deep)_0%,color-mix(in_srgb,var(--hero-deep)_42%,transparent)_46%,transparent_78%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.09] mix-blend-overlay dark:opacity-[0.14]"
          style={{ backgroundImage: heroNoiseBg }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-12 px-6 py-24 md:gap-14 md:py-28 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="ds-eyebrow text-hero-text-muted hero-animate">{t("hero.eyebrow")}</p>
            <h1 className="hero-animate hero-animate-delay-1 font-sans text-3xl font-semibold leading-[1.14] tracking-tight text-hero-text sm:text-4xl sm:leading-[1.12] md:text-[2.25rem] md:leading-[1.1] lg:text-[2.5rem] lg:leading-[1.08] xl:text-[2.65rem]">
              {t("hero.title")}
            </h1>
            <p className="hero-animate hero-animate-delay-2 mx-auto mt-6 max-w-xl text-base leading-relaxed text-hero-text-muted sm:mt-8 sm:text-lg md:text-xl lg:mx-0">
              {t("hero.lead")}
            </p>
            <div className="hero-animate hero-animate-delay-3 mt-10 flex flex-col items-center gap-4 sm:mt-12 sm:flex-row lg:justify-start">
              <a href="#contact" className={`${primaryButtonClasses} min-w-[200px]`}>
                {t("hero.ctaPrimary")}
              </a>
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-1 text-sm font-medium tracking-wide text-hero-text-muted underline decoration-transparent underline-offset-[10px] transition duration-200 hover:text-hero-text hover:decoration-primary/55"
              >
                {t("hero.ctaSecondary")}
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
            </div>
            <ul className="hero-animate hero-animate-delay-4 mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-hero-text-muted sm:mt-14 sm:gap-x-10 sm:text-xs sm:tracking-[0.2em] lg:justify-start">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                {t("hero.bullet1")}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                {t("hero.bullet2")}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                {t("hero.bullet3")}
              </li>
            </ul>
          </div>

          <div className="relative mx-auto hidden min-h-[380px] w-full max-w-[440px] lg:block">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[min(100%,420px)] w-[min(100%,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15 opacity-60 dark:border-primary/25 dark:opacity-80 hero-orbit-slow"
              aria-hidden
            />
            <figure
              className="hero-float-card absolute right-0 top-4 w-[58%] overflow-hidden rounded-[var(--ds-radius-2xl)] bg-card shadow-[0_24px_48px_-20px_rgba(10,10,10,0.35)] ring-2 ring-[var(--hero-ring)] dark:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.65)]"
              style={{ "--hero-rot": "-5deg" } as CSSProperties}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={heroA.img}
                  alt={heroA.imgAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0px, 280px"
                  priority
                />
              </div>
              <figcaption className="border-t border-border bg-card/95 px-3 py-2 text-left text-[0.65rem] font-medium uppercase tracking-wider text-muted">
                {heroA.title}
              </figcaption>
            </figure>
            <figure
              className="hero-float-card hero-float-card-delay-1 absolute left-0 top-[28%] w-[54%] overflow-hidden rounded-[var(--ds-radius-2xl)] bg-card shadow-[0_24px_48px_-20px_rgba(10,10,10,0.3)] ring-2 ring-[var(--hero-ring)] dark:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.6)]"
              style={{ "--hero-rot": "3deg" } as CSSProperties}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={heroB.img}
                  alt={heroB.imgAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0px, 260px"
                />
              </div>
              <figcaption className="border-t border-border bg-card/95 px-3 py-2 text-left text-[0.65rem] font-medium uppercase tracking-wider text-muted">
                {heroB.title}
              </figcaption>
            </figure>
            <figure
              className="hero-float-card hero-float-card-delay-2 absolute bottom-6 right-[12%] w-[50%] overflow-hidden rounded-[var(--ds-radius-2xl)] bg-card shadow-[0_24px_48px_-20px_rgba(10,10,10,0.28)] ring-2 ring-[var(--hero-ring)] dark:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.55)]"
              style={{ "--hero-rot": "-2deg" } as CSSProperties}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={heroC.img}
                  alt={heroC.imgAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0px, 240px"
                />
              </div>
              <figcaption className="border-t border-border bg-card/95 px-3 py-2 text-left text-[0.65rem] font-medium uppercase tracking-wider text-muted">
                {heroC.title}
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="relative z-10 flex justify-center gap-3 px-6 pb-14 pt-2 lg:hidden">
          {[heroA, heroB, heroC].map((p) => (
            <div
              key={p.title}
              className="relative h-24 w-[30%] max-w-[120px] overflow-hidden rounded-[var(--ds-radius-lg)] ring-1 ring-[var(--hero-ring)] shadow-lg"
            >
              <Image src={p.img} alt={p.title} fill className="object-cover" sizes="120px" />
            </div>
          ))}
        </div>
      </section>

      <RevealOnScroll>
        <section id="services" className="border-t border-border py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-6 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="ds-eyebrow">{t("services.eyebrow")}</p>
            <h2 className="ds-heading-2">{t("services.title")}</h2>
            <p className="mt-6 text-muted leading-relaxed">{t("services.intro")}</p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                id: "custom",
                title: t("services.customTitle"),
                body: t("services.customBody"),
                icon: (
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.25}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
              },
              {
                id: "perf",
                title: t("services.perfTitle"),
                body: t("services.perfBody"),
                icon: (
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.25}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
              },
              {
                id: "ecom",
                title: t("services.ecomTitle"),
                body: t("services.ecomBody"),
                icon: (
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.25}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.id}
                className="group flex flex-col rounded-[var(--ds-radius-lg)] border border-border bg-card/70 p-8 transition hover:border-primary/25 hover:shadow-[0_24px_48px_-24px_rgba(15,14,13,0.12)] dark:hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.35)]"
              >
                <div className="mb-6 text-primary transition group-hover:scale-105">{item.icon}</div>
                <h3 className="font-sans text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.body}</p>
                <div className="mt-8 h-px w-12 bg-primary/40 transition-all group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <PortfolioSection projects={localizedProjects} />

      <RevealOnScroll>
        <StatsStrip stats={stats} disclaimer={t("stats.disclaimer")} />
      </RevealOnScroll>

      <RevealOnScroll>
        <section id="testimonials" className="border-t border-border py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-6 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="ds-eyebrow">{t("reviews.eyebrow")}</p>
            <h2 className="ds-heading-2">{t("reviews.title")}</h2>
            <p className="mt-6 text-muted leading-relaxed">{t("reviews.intro")}</p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                quote: t("reviews.t1"),
                name: t("reviews.name1"),
                role: t("reviews.role1"),
                org: t("reviews.org1"),
              },
              {
                quote: t("reviews.t2"),
                name: t("reviews.name2"),
                role: t("reviews.role2"),
                org: t("reviews.org2"),
              },
              {
                quote: t("reviews.t3"),
                name: t("reviews.name3"),
                role: t("reviews.role3"),
                org: t("reviews.org3"),
              },
            ].map((row) => (
              <blockquote
                key={row.name}
                className="flex flex-col rounded-[var(--ds-radius-lg)] border border-border bg-card/70 p-8"
              >
                <p className="font-sans text-lg leading-relaxed text-foreground">&ldquo;{row.quote}&rdquo;</p>
                <footer className="mt-8 border-t border-border pt-6">
                  <p className="text-sm font-medium text-foreground">{row.name}</p>
                  <p className="mt-1 text-sm text-muted">
                    {row.role}, {row.org}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section
        id="trust"
        className="border-t border-border bg-muted/15 py-20 md:py-32"
        aria-labelledby="trust-heading"
      >
        <div className="container mx-auto max-w-6xl px-6 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="ds-eyebrow">{t("trust.eyebrow")}</p>
            <h2 id="trust-heading" className="ds-heading-2">
              {t("trust.title")}
            </h2>
            <p className="mt-6 text-muted leading-relaxed">{t("trust.intro")}</p>
          </div>
          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                id: "scope",
                title: t("trust.card1Title"),
                text: t("trust.card1Text"),
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.25}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                ),
              },
              {
                id: "security",
                title: t("trust.card2Title"),
                text: t("trust.card2Text"),
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.25}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                ),
              },
              {
                id: "own",
                title: t("trust.card3Title"),
                text: t("trust.card3Text"),
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.25}
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                ),
              },
              {
                id: "support",
                title: t("trust.card4Title"),
                text: t("trust.card4Text"),
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.25}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ),
              },
            ].map((item) => (
              <li
                key={item.id}
                className="rounded-[var(--ds-radius-lg)] border border-border bg-background/90 p-6 transition hover:border-primary/25"
              >
                <svg className="mb-4 h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  {item.icon}
                </svg>
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <ToolsSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <section id="about" className="border-t border-border py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid items-center gap-16 md:grid-cols-2 md:gap-20">
            <div>
              <p className="ds-eyebrow">{t("about.eyebrow")}</p>
              <h2 className="ds-heading-2 text-left">{t("about.title")}</h2>
              <p className="mt-6 text-muted leading-relaxed">{t("about.body")}</p>
              <a
                href="#contact"
                className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary transition duration-200 hover:gap-3"
              >
                {t("about.cta")}
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </div>
            <div className="relative overflow-hidden rounded-[var(--ds-radius-xl)] ring-1 ring-border">
              <img
                src="https://via.placeholder.com/600x400?text=Team"
                alt="The Launchpad Studio team"
                className="relative aspect-[4/3] w-full object-cover grayscale-[20%]"
              />
            </div>
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section
        id="contact"
        className="border-t border-border bg-muted/20 py-20 text-foreground md:py-32"
      >
        <div className="container mx-auto max-w-6xl px-6 md:px-8">
          <div className="mx-auto max-w-xl text-center">
            <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-primary">
              {t("contact.eyebrow")}
            </p>
            <h2 className="font-sans text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {t("contact.title")}
            </h2>
            <p className="mt-6 text-muted">{t("contact.intro")}</p>
          </div>
          <form className="mx-auto mt-14 max-w-lg space-y-10">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-muted"
              >
                {t("contact.labelName")}
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-[var(--ds-radius-md)] border border-border bg-background/90 px-4 py-3 text-foreground shadow-sm placeholder:text-muted transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                placeholder={t("contact.phName")}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-muted"
              >
                {t("contact.labelEmail")}
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-[var(--ds-radius-md)] border border-border bg-background/90 px-4 py-3 text-foreground shadow-sm placeholder:text-muted transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                placeholder={t("contact.phEmail")}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-muted"
              >
                {t("contact.labelMessage")}
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full resize-none rounded-[var(--ds-radius-md)] border border-border bg-background/90 px-4 py-3 text-foreground shadow-sm placeholder:text-muted transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                placeholder={t("contact.phMessage")}
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              {t("contact.submit")}
            </Button>
            <p className="text-center text-xs leading-relaxed text-muted sm:text-left">
              {t("contact.privacy")}
            </p>
          </form>
        </div>
      </section>
      </RevealOnScroll>

      <footer className="border-t border-brand-white/10 bg-brand-black py-12 text-muted md:py-16">
        <div className="container mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="font-sans text-xl font-semibold text-brand-white/90">Launchpad Studio</p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-white/65">
                {t("footer.tagline")}
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-brand-white/45">
                {t("footer.contactLabel")}
              </p>
              <a
                href="mailto:hello@launchpad.studio"
                className="mt-2 block text-sm text-brand-white/85 underline-offset-4 transition hover:text-brand-white hover:underline"
              >
                hello@launchpad.studio
              </a>
              <p className="mt-6 text-xs text-brand-white/45">{t("footer.emailNote")}</p>
            </div>
          </div>
          <div className="mt-12 border-t border-brand-white/10 pt-8 text-center text-xs text-brand-white/45">
            <p>
              &copy; {new Date().getFullYear()} {SITE_NAME}. {t("footer.rights")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
