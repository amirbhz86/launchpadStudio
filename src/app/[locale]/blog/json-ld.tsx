import type { BlogPost } from "@/data/blog";
import { localizedAbsoluteUrl } from "@/lib/locale-path";
import { SITE_NAME, getSiteUrl } from "@/lib/site";

export function BlogListingJsonLd({
  posts,
  locale,
}: {
  posts: Pick<BlogPost, "slug" | "title" | "excerpt" | "date" | "updatedAt">[];
  locale: string;
}) {
  const base = getSiteUrl();
  const blogUrl = localizedAbsoluteUrl(locale, "/blog");
  const data = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} — Web development & e‑commerce blog`,
    description:
      "Practical articles on Core Web Vitals, WooCommerce performance, CMS handoff, and WordPress security from Launchpad Studio.",
    url: blogUrl,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: base,
    },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      url: localizedAbsoluteUrl(locale, `/blog/${p.slug}`),
      datePublished: p.date,
      dateModified: p.updatedAt ?? p.date,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleJsonLd({ post, locale }: { post: BlogPost; locale: string }) {
  const base = getSiteUrl();
  const pageUrl = localizedAbsoluteUrl(locale, `/blog/${post.slug}`);
  const imageUrl = post.ogImage
    ? post.ogImage.startsWith("http")
      ? post.ogImage
      : new URL(post.ogImage, base).href
    : undefined;

  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: base,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: base,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    url: pageUrl,
    articleSection: post.category,
    keywords: post.tags.join(", "),
    ...(imageUrl ? { image: [imageUrl] } : {}),
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: base,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: localizedAbsoluteUrl(locale, "/blog"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  );
}
