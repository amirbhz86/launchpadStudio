import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import SiteHeader from "@/app/components/SiteHeader";
import PostMedia from "@/app/components/PostMedia";
import { blogPosts, getAllBlogSlugs, getBlogPostBySlug } from "@/data/blog";
import { routing } from "@/i18n/routing";
import { intlLocaleForAppLocale, resolveBlogPost } from "@/lib/contentResolve";
import { localizedAbsoluteUrl, localizedPath } from "@/lib/locale-path";
import { getSiteUrl } from "@/lib/site";
import { ArticleJsonLd } from "../json-ld";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllBlogSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const base = getBlogPostBySlug(slug);
  const post = base ? resolveBlogPost(base, locale) : undefined;
  if (!post) {
    return { title: "Article not found", robots: { index: false, follow: false } };
  }

  const title = post.seoTitle ?? post.title;
  const canonical = localizedPath(locale, `/blog/${slug}`);
  const ogUrl = localizedAbsoluteUrl(locale, `/blog/${slug}`);
  const ogImages = post.ogImage
    ? [{ url: post.ogImage, alt: post.title }]
    : undefined;

  return {
    title,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author, url: getSiteUrl() }],
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: ogUrl,
      siteName: "Launchpad Studio",
      publishedTime: post.date,
      modifiedTime: post.updatedAt ?? post.date,
      section: post.category,
      tags: post.tags,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.ogImage ? [post.ogImage] : undefined,
    },
    robots: { index: true, follow: true },
  };
}

function formatDate(iso: string, locale: string) {
  return new Date(iso).toLocaleDateString(intlLocaleForAppLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Common");
  const basePost = getBlogPostBySlug(slug);
  if (!basePost) notFound();
  const post = resolveBlogPost(basePost, locale);

  const index = blogPosts.findIndex((p) => p.slug === slug);
  const prevBase = index > 0 ? blogPosts[index - 1] : null;
  const nextBase = index < blogPosts.length - 1 ? blogPosts[index + 1] : null;
  const prev = prevBase ? resolveBlogPost(prevBase, locale) : null;
  const next = nextBase ? resolveBlogPost(nextBase, locale) : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ArticleJsonLd post={post} locale={locale} />
      <SiteHeader />

      <article className="border-t border-border bg-gradient-to-b from-card/80 via-background to-background">
        <div className="container mx-auto max-w-3xl px-6 py-10 md:px-8 md:py-14">
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
              <li>
                <Link href="/blog" className="text-primary underline-offset-4 hover:underline">
                  {t("blog")}
                </Link>
              </li>
              <li aria-hidden className="text-muted/60">
                /
              </li>
              <li className="line-clamp-2 max-w-[min(100%,20rem)] font-medium text-foreground">
                {post.title}
              </li>
            </ol>
          </nav>

          <header className="mt-10">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-primary">
              {post.category}
            </p>
            <h1 className="mt-4 max-w-4xl font-sans text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-5xl md:leading-[1.06]">
              {post.title}
            </h1>
            <div className="mt-6 flex max-w-2xl flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
              <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
              {post.updatedAt && post.updatedAt !== post.date ? (
                <>
                  <span aria-hidden className="text-muted/70">
                    ·
                  </span>
                  <span>
                    Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt, locale)}</time>
                  </span>
                </>
              ) : null}
              <span aria-hidden className="text-muted/70">
                ·
              </span>
              <span>{post.author}</span>
              <span aria-hidden className="text-muted/70">
                ·
              </span>
              <span>{post.readTime}</span>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Topics">
              {post.tags.map((tag) => (
                <li key={tag}>
                  <span className="inline-flex rounded-full border border-ds-chip-border bg-accent-soft/50 px-3 py-1 text-xs font-medium text-foreground/90 dark:bg-accent-soft/30">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          </header>

          {post.mediaTop && post.mediaTop.length > 0 ? (
            <div className="mt-10">
              <PostMedia items={post.mediaTop} />
            </div>
          ) : null}

          <div className="mx-auto mt-12 max-w-2xl space-y-6 text-lg leading-[1.75] text-foreground/90">
            {post.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {post.mediaBottom && post.mediaBottom.length > 0 ? (
            <div className="mt-12">
              <PostMedia items={post.mediaBottom} />
            </div>
          ) : null}

          <div className="mt-16 flex flex-col gap-8 border-t border-border pt-10 sm:flex-row sm:justify-between">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="group max-w-sm text-sm text-muted hover:text-foreground"
                rel="prev"
              >
                <span className="block text-xs font-medium uppercase tracking-[0.2em] text-muted">Previous</span>
                <span className="mt-1 block font-sans text-lg font-medium text-foreground group-hover:text-primary">
                  ← {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="group max-w-sm text-right text-sm text-muted hover:text-foreground sm:ml-auto"
                rel="next"
              >
                <span className="block text-xs font-medium uppercase tracking-[0.2em] text-muted">Next</span>
                <span className="mt-1 block font-sans text-lg font-medium text-foreground group-hover:text-primary">
                  {next.title} →
                </span>
              </Link>
            ) : null}
          </div>

          <p className="mt-12 text-center">
            <Link
              href="/blog"
              className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              ← All articles
            </Link>
          </p>
        </div>
      </article>

      <footer className="border-t border-brand-white/10 bg-brand-black py-12 text-muted">
        <div className="container mx-auto max-w-6xl px-6 text-center text-sm md:px-8">
          <Link
            href="/"
            className="text-brand-white/75 underline-offset-4 hover:text-brand-white hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </footer>
    </div>
  );
}
