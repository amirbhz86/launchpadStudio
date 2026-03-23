export type PortfolioProjectDetails = {
  need: string;
  built: string[];
  impact: string;
};

export type PortfolioProject = {
  /** Stable key for lists / expand state */
  id: string;
  /** URL segment for /portfolio/[slug] */
  slug: string;
  title: string;
  sector: string;
  img: string;
  imgAlt: string;
  /** One short line under the image hero */
  pitch: string;
  /** 3 short labels for quick scan */
  highlights: string[];
  details: PortfolioProjectDetails;
};

const meridian: Omit<PortfolioProject, "id" | "slug" | "title" | "pitch" | "details"> & {
  details: PortfolioProjectDetails;
} = {
  sector: "B2B marketing agency",
  img: "/portfolio/meridian-digital.png",
  imgAlt:
    "Meridian Digital — responsive website mockup on desktop and mobile, lead generation agency layout",
  highlights: ["Flexible CMS", "Campaign landings", "CRM-ready leads"],
  details: {
    need: "Enterprise polish, fast landing pages, and clean lead routing—without a pile of plugins or slow builders.",
    built: [
      "Editorial layouts tied to brand—WordPress or a comparable CMS when it fits",
      "Forms wired for CRM export / webhooks",
      "SEO + Core Web Vitals baseline for paid traffic",
    ],
    impact: "Marketing ships pages without a dev every launch; templates stay fast enough for ads.",
  },
};

const velvet: Omit<PortfolioProject, "id" | "slug" | "title" | "pitch" | "details"> & {
  details: PortfolioProjectDetails;
} = {
  sector: "Boutique e-commerce (fashion)",
  img: "/portfolio/velvet-row.png",
  imgAlt: "Velvet Row — fashion e-commerce website mockup on desktop monitor and smartphone",
  highlights: ["WooCommerce", "Editorial layouts", "Mobile checkout"],
  details: {
    need: "Premium catalog online with strong mobile conversion—without a generic theme look.",
    built: [
      "Tailored shop, product, and collection templates",
      "Shipping, tax, and payments matched to their markets",
      "Lookbook blocks + lightweight cart for speed",
    ],
    impact: "Luxury feel from browse to purchase; the team updates products without breaking layouts.",
  },
};

const north: Omit<PortfolioProject, "id" | "slug" | "title" | "pitch" | "details"> & {
  details: PortfolioProjectDetails;
} = {
  sector: "Creative / product studio",
  img: "/portfolio/north-co.png",
  imgAlt:
    "North & Co. — creative studio website mockup with desktop and mobile responsive layouts",
  highlights: ["Case study CMS", "Work filters", "Qualified inquiries"],
  details: {
    need: "Show process and outcomes for RFPs—filterable work, strong visuals, and a contact flow that qualifies leads.",
    built: [
      "Case studies with flexible layouts + media that doesn’t drift",
      "Industry / service filters so prospects find relevant work",
      "Contact fields that reduce inbox noise",
    ],
    impact: "Weekly case study updates; leads arrive with enough context to reply same day.",
  },
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "meridian-1",
    slug: "meridian-digital-credibility-first",
    title: "Meridian Digital",
    pitch:
      "Credibility-first marketing site: traffic becomes qualified conversations, not vanity page views.",
    ...meridian,
  },
  {
    id: "velvet-1",
    slug: "velvet-row-editorial-commerce",
    title: "Velvet Row",
    pitch:
      "WooCommerce store where product story, imagery, and checkout feel as considered as the brand.",
    ...velvet,
  },
  {
    id: "north-1",
    slug: "north-co-portfolio-trust",
    title: "North & Co.",
    pitch:
      "Portfolio-forward site: case studies and contact paths that win trust before the first call.",
    ...north,
  },
  {
    id: "meridian-2",
    slug: "meridian-digital-landing-velocity",
    title: "Meridian Digital",
    pitch:
      "Landing system refresh: faster experiments for paid campaigns with shared components and QA-friendly QA.",
    ...meridian,
  },
  {
    id: "velvet-2",
    slug: "velvet-row-seasonal-launch",
    title: "Velvet Row",
    pitch:
      "Seasonal collection launch: editorial grids, lookbook blocks, and checkout tuned for mobile-first traffic.",
    ...velvet,
  },
  {
    id: "north-2",
    slug: "north-co-work-index",
    title: "North & Co.",
    pitch:
      "Work index + filters: prospects find relevant case studies before they ever hit the contact form.",
    ...north,
  },
  {
    id: "meridian-3",
    slug: "meridian-digital-lead-routing",
    title: "Meridian Digital",
    pitch:
      "Lead routing upgrade: forms, thank-you paths, and CRM hooks that keep sales in one pipeline.",
    ...meridian,
  },
  {
    id: "velvet-3",
    slug: "velvet-row-international-checkout",
    title: "Velvet Row",
    pitch:
      "International shipping UX: clarity at cart, fewer abandoned checkouts, same brand polish.",
    ...velvet,
  },
  {
    id: "north-3",
    slug: "north-co-cms-patterns",
    title: "North & Co.",
    pitch:
      "Case study CMS patterns: repeatable layouts so the team ships new work without layout drift.",
    ...north,
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}
