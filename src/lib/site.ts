/** Canonical site origin for metadata, JSON-LD, and sitemaps. Override with NEXT_PUBLIC_SITE_URL in production. */
export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://launchpad.studio"
  );
}

export const SITE_NAME = "Launchpad Studio";
