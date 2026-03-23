import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import SiteHeader from "@/app/components/SiteHeader";
import { blogPosts } from "@/data/blog";
import { intlLocaleForAppLocale, resolveBlogPosts } from "@/lib/contentResolve";
import { BlogListingJsonLd } from "./json-ld";

const pageDesc =
  "Guides for business owners, startups, and creators: SEO, high-performance websites, conversions, and an owned online presence—plus technical notes on WordPress, e‑commerce, and Core Web Vitals.";

export const metadata: Metadata = {
  title: "Blog — Strategy, SEO & high-performance websites",
  description: pageDesc,
  keywords: [
    "business website strategy",
    "startup marketing website",
    "creator personal brand SEO",
    "small business SEO",
    "Core Web Vitals",
    "WooCommerce performance",
    "WordPress security",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Launchpad Studio",
    description: pageDesc,
    type: "website",
    url: "/blog",
    siteName: "Launchpad Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Launchpad Studio",
    description: pageDesc,
  },
};

function formatDate(iso: string, locale: string) {
  return new Date(iso).toLocaleDateString(intlLocaleForAppLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Common");
  const posts = resolveBlogPosts(blogPosts, locale);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BlogListingJsonLd posts={posts} locale={locale} />
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-accent-soft/40 via-background to-background">
          <div
            className="pointer-events-none absolute -left-1/4 top-0 h-[28rem] w-[70%] rounded-full opacity-40 blur-3xl dark:opacity-25"
            style={{ background: "radial-gradient(ellipse at center, var(--hero-glow), transparent 65%)" }}
            aria-hidden
          />
          <div className="container relative mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
            <nav className="text-sm text-muted" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="text-primary underline-offset-4 hover:underline">
                    {t("home")}
                  </Link>
                </li>
                <li aria-hidden className="text-muted/60">
                  /
                </li>
                <li className="font-medium text-foreground">Blog</li>
              </ol>
            </nav>
            <p className="mt-8 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-primary">
              Insights &amp; guides
            </p>
            <h1 className="mt-4 max-w-3xl font-sans text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Grow online with clarity, speed, and trust
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Practical coaching-style guides for owners, founders, and creators—SEO, conversions, and
              high-performance sites—alongside technical deep dives on WordPress, e‑commerce, and how we ship client
              work.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-card/40 py-14 md:py-20" aria-labelledby="articles-heading">
          <div className="container mx-auto max-w-6xl px-6 md:px-8">
            <h2 id="articles-heading" className="sr-only">
              Articles
            </h2>
            <ul className="grid gap-8 md:grid-cols-2 md:gap-10">
              {posts.map((post) => (
                <li key={post.slug}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--ds-radius-xl)] border border-border bg-card shadow-[var(--ds-shadow-card)] transition duration-300 hover:border-primary/25 hover:shadow-[var(--ds-shadow-card-hover)]">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="absolute inset-0 z-10 rounded-[var(--ds-radius-xl)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      aria-label={`Read article: ${post.title}`}
                    />
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted/30">
                      {post.ogImage ? (
                        <img
                          src={post.ogImage}
                          alt=""
                          role="presentation"
                          className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                          width={1200}
                          height={750}
                        />
                      ) : (
                        <div
                          className="h-full w-full bg-gradient-to-br from-accent-soft to-muted/20"
                          aria-hidden
                        />
                      )}
                      <div className="absolute left-4 top-4 z-[1]">
                        <span className="inline-flex rounded-full border border-ds-chip-border bg-background/90 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-foreground backdrop-blur-sm dark:bg-card/90">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6 md:p-7">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                        <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
                        <span aria-hidden className="text-muted/50">
                          ·
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="mt-3 font-sans text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl">
                        {post.title}
                      </h3>
                      <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted md:text-base">
                        {post.excerpt}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        Read article
                        <span aria-hidden className="transition group-hover:translate-x-0.5">
                          →
                        </span>
                      </span>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-white/10 bg-brand-black py-12 text-muted">
        <div className="container mx-auto max-w-6xl px-6 text-center text-sm md:px-8">
          <p className="text-brand-white/50">
            Prefer the full story?{" "}
            <Link href="/#contact" className="text-brand-white/85 underline-offset-4 hover:text-brand-white hover:underline">
              Start a project
            </Link>{" "}
            or{" "}
            <Link href="/" className="text-brand-white/85 underline-offset-4 hover:text-brand-white hover:underline">
              return home
            </Link>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
