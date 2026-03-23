import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/posts", destination: "/blog", permanent: true },
      // Old blog URLs; static article images live under /blog-media/ to avoid clashing with this redirect.
      { source: "/posts/:slug", destination: "/blog/:slug", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
