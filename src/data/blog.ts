/** Media blocks for blog articles. */
export type BlogMediaItem =
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "video"; src: string; caption?: string; poster?: string }
  | { type: "embed"; src: string; caption?: string };

export type BlogPost = {
  slug: string;
  /** H1 and primary title */
  title: string;
  /** Meta description & OG/Twitter (155–165 chars ideal) */
  excerpt: string;
  /** Optional shorter browser tab title */
  seoTitle?: string;
  /** Focus phrases for metadata; write for humans first */
  keywords: string[];
  category: string;
  tags: string[];
  date: string;
  /** Use for sitemap lastmod when content is refreshed */
  updatedAt?: string;
  author: string;
  readTime: string;
  /** Path under public/ or absolute URL for og:image */
  ogImage?: string;
  /** Short prompt for Canva AI / Magic Media–style image generation (hero, OG, or social) */
  canvaImagePrompt?: string;
  paragraphs: string[];
  mediaTop?: BlogMediaItem[];
  mediaBottom?: BlogMediaItem[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "your-website-quiet-salesperson-smb",
    title: "Your website is your quietest salesperson—train it like one",
    seoTitle: "Small business website strategy: turn visits into trust and revenue",
    excerpt:
      "For owners: a fast, clear site answers objections 24/7, supports SEO, and drives calls and forms. Here is a coach-style framework for messaging, proof, and one next step per page.",
    keywords: [
      "small business website strategy",
      "website conversion tips",
      "local business online presence",
      "SMB SEO basics",
      "high performance website ROI",
    ],
    category: "Business & growth",
    tags: ["Small business", "Strategy", "Conversions", "SEO"],
    date: "2025-03-20",
    author: "Launchpad Studio",
    readTime: "8 min read",
    ogImage: "/blog-media/your-website-quiet-salesperson-smb.webp",
    canvaImagePrompt:
      "Minimal editorial illustration, small business owner at a laptop with a clean website glowing on screen, subtle sales funnel or single CTA button motif, calm professional palette, soft lighting, modern flat-meets-3D style, plenty of negative space for blog header text",
    paragraphs: [
      "If you run a real business—retail, services, B2B—you already know attention is expensive. Your website is the one channel that can explain, reassure, and invite action while you sleep. Treating it like a brochure is a strategic mistake; treating it like a trained salesperson is closer to the truth. That means a clear story, evidence that reduces risk, and frictionless paths to the one outcome you want this quarter: calls, bookings, demos, or purchases.",
      "Start with jobs-to-be-done, not aesthetics first. What question is a prospect trying to answer in the first ten seconds? Price range, geography, credibility, speed of delivery, or how you compare to alternatives. Your hero section should answer the primary anxiety for cold traffic. Secondary pages can go deeper for people who are already convinced you might fit.",
      "Proof beats adjectives. Case bullets, logos, certifications, reviews, and specific outcomes outperform generic superlatives. From an SEO perspective, specificity also gives you natural language matches—what people actually type—without keyword stuffing. Tie each proof point to a measurable outcome where you can.",
      "Give every important page a single dominant call to action. Multiple competing buttons split intent and hurt conversion rate. If you need secondary actions, downgrade them visually and keep the primary action obvious on mobile—where most local and B2B discovery happens.",
      "Finally, connect the site to how you operate. Fast responses to form fills, clear service boundaries, and honest timelines build reputation that shows up in reviews and referrals. A high-performance site amplifies a trustworthy business; it rarely fixes a broken one. Use your analytics to watch landing pages, not vanity traffic—improve the pages that already attract intent.",
    ],
  },
  {
    slug: "startup-website-trust-before-features",
    title: "Startup websites: earn trust before you ship every feature",
    seoTitle: "Startup web presence: MVP site that builds investor and customer trust",
    excerpt:
      "Founders: investors and early customers Google you in minutes. A credible, fast site clarifies positioning, de-risks the team, and supports SEO—without waiting for v3 of your product.",
    keywords: [
      "startup website best practices",
      "MVP landing page",
      "founder credibility online",
      "startup SEO basics",
      "pitch deck and website alignment",
    ],
    category: "Startups",
    tags: ["Startups", "Founders", "Trust", "Positioning"],
    date: "2025-03-18",
    author: "Launchpad Studio",
    readTime: "7 min read",
    ogImage: "/blog-media/startup-website-trust-before-features.webp",
    canvaImagePrompt:
      "Startup founder silhouette facing a simple trustworthy landing page on monitor, rocket or seedling subtle metaphor, investor-meets-customer vibe, navy and teal, clean geometric shapes, confident but not flashy, wide composition for article cover",
    paragraphs: [
      "Early-stage companies live in spreadsheets and roadmaps, but the outside world searches your name and clicks your domain. Before they read a single feature bullet, they ask: Is this real? Who backs it? Will it exist in six months? A minimal site that loads instantly and explains your wedge clearly reduces perceived risk faster than a crowded deck.",
      "Align the story with what you say in meetings. Mismatched messaging between pitch, site, and outbound creates doubt. One crisp sentence on who it is for and what pain you remove beats five paragraphs of buzzwords. Update the site when positioning shifts—stale copy is a silent tax on every sales cycle.",
      "Pick one primary conversion for the public site: waitlist, book a call, or start a trial. Secondary links belong in the footer or lower on the page. Founders often over-build navigation; prospects want a straight path from curiosity to commitment.",
      "Performance signals competence. Slow pages feel like unfinished products, especially for technical buyers. Core Web Vitals are not only an SEO input—they are a trust signal. Ship lean assets, measure on real devices, and avoid heavy scripts until they earn their place.",
      "Document what you will measure weekly: traffic to key pages, form completion rate, and search queries in Search Console. That discipline turns the site into a learning instrument, not a static poster—exactly how a coach would treat any lever that touches revenue.",
    ],
  },
  {
    slug: "creators-own-platform-beyond-social-feed",
    title: "Creators: why you need a site—not only a feed",
    seoTitle: "Creator strategy: owned website, email list, and brand SEO",
    excerpt:
      "Influencers and creators reduce platform risk with a fast hub you control: portfolio, press, partnerships, and email capture. Algorithms change; your domain and list compound.",
    keywords: [
      "creator website",
      "influencer personal brand site",
      "email list for creators",
      "social media platform risk",
      "creator SEO",
    ],
    category: "Creators & influencers",
    tags: ["Creators", "Influencers", "Brand", "Email marketing"],
    date: "2025-03-16",
    author: "Launchpad Studio",
    readTime: "8 min read",
    ogImage: "/blog-media/creators-own-platform-beyond-social-feed.webp",
    canvaImagePrompt:
      "Creator workspace: phone showing social feed plus a laptop with a personal branded website, house or key symbol for “owned platform,” vibrant but polished, influencer aesthetic, diagonal layout, space for title overlay",
    paragraphs: [
      "Social platforms are rented land. They are essential for discovery, but they are not a substitute for an owned home base. A site under your domain is where sponsors, press, and collaborators expect to verify you quickly—rates, audience fit, past work, and contact paths. When algorithms shift, your domain still shows up for branded searches.",
      "Use the site to tell a story feeds cannot: structured case studies, downloadable media kits, long-form FAQs that answer brand objections, and a calendar link that respects your boundaries. That clarity shortens deal cycles and filters misfit inquiries before they burn your inbox.",
      "Email capture is still one of the highest-leverage assets you can own. Pair short, honest lead magnets—checklists, templates, or mini-guides—with a performance-minded signup flow. Slow pop-ups and heavy widgets hurt both UX and SEO; keep third-party scripts minimal.",
      "From an SEO angle, publish durable content that matches how brands search: partnership criteria, audience demographics, vertical expertise, and geographic reach. Update quarterly so dates and stats stay credible. Fresh, accurate pages rank better and close more deals.",
      "Treat your site as part of your creative practice: same tone, same visual discipline, faster load than the average theme demo. Consistency builds recognition; speed signals professionalism when a brand buyer is comparing you with five peers in one afternoon.",
    ],
  },
  {
    slug: "seo-priorities-without-dedicated-seo-team",
    title: "SEO priorities when you do not have an in-house SEO team",
    seoTitle: "Business SEO roadmap: what to fix first without a full-time SEO hire",
    excerpt:
      "Owners and marketing leads: focus on technical health, clear page intent, helpful content, and local signals—before chasing trends. A practical 90-day cadence beats sporadic blog posts nobody reads.",
    keywords: [
      "business SEO priorities",
      "small business SEO roadmap",
      "on-page SEO checklist",
      "technical SEO basics",
      "content strategy for SMB",
    ],
    category: "SEO & visibility",
    tags: ["SEO", "Marketing", "SMB", "Content strategy"],
    date: "2025-03-14",
    author: "Launchpad Studio",
    readTime: "9 min read",
    ogImage: "/blog-media/seo-priorities-without-dedicated-seo-team.webp",
    canvaImagePrompt:
      "Abstract SEO roadmap concept: magnifying glass over a simple sitemap or checklist, search bar, upward gentle graph, no logos, corporate green and gray, isometric or flat illustration, clarity and order theme",
    paragraphs: [
      "SEO rewards clarity over cleverness. If you cannot hire a full-time specialist yet, protect the basics: crawlable pages, unique titles and descriptions, fast loads, secure HTTPS, and accurate business information where trust matters—especially for local service brands. Search Console is your free diagnostic; check coverage, experience, and queries monthly.",
      "Intent beats volume. One page that answers a specific buyer question thoroughly will outperform five thin posts targeting broad phrases. Map each URL to one primary intent: learn, compare, transact, or get support. Internal links should reinforce that map, not scatter it.",
      "Content should reduce sales friction. Publish articles that address objections your team hears weekly: pricing philosophy, timelines, what good clients look like, and how implementation works. Those pages attract long-tail searches and shorten calls.",
      "Earn links and mentions ethically: partnerships, community involvement, podcasts, and supplier relationships. Quality references signal authority; spammy directories do not. Align public relations with pages you want to rank so journalists land on credible destinations.",
      "Measure what ties to pipeline, not ego metrics. Track organic sessions to money pages, form fills attributed to search, and branded query growth. Adjust quarterly based on data, not noise. SEO is a compounding discipline—small consistent improvements beat heroic one-off campaigns.",
    ],
  },
  {
    slug: "high-performance-site-roi-service-business",
    title: "High-performance websites and ROI for service businesses",
    seoTitle: "Service business website ROI: speed, clarity, and booked jobs",
    excerpt:
      "Plumbers, clinics, agencies, and consultants win when pages load fast, mobile CTAs work, and local SEO matches real service areas. Here is how to think about payback like a business coach.",
    keywords: [
      "service business website",
      "local SEO service area pages",
      "website speed conversion rate",
      "lead generation for contractors",
      "appointment booking UX",
    ],
    category: "Business & growth",
    tags: ["Service business", "Local SEO", "Performance", "Leads"],
    date: "2025-03-12",
    author: "Launchpad Studio",
    readTime: "8 min read",
    ogImage: "/blog-media/high-performance-site-roi-service-business.webp",
    canvaImagePrompt:
      "Service professional (trades or clinic abstract) holding phone with tap-to-call and map pin, speed lines suggesting fast load, local neighborhood map texture subtle, trustworthy blues and whites, photoreal or semi-realistic hero style",
    paragraphs: [
      "Service businesses live and die on trust and response time. Your website should mirror how you operate: clear coverage areas, transparent next steps, and easy ways to reach a human. If mobile users wait on a spinning hero image or cannot tap-to-call, you are paying for ads that leak at the doorstep.",
      "Performance is part of customer experience. Google’s emphasis on Core Web Vitals aligns with what your clients already feel—impatience on cellular networks. Compress images, defer non-critical scripts, and keep forms lightweight. The win is not a score; it is more completed inquiries from the same traffic.",
      "Local SEO requires consistency: name, address, phone, hours, and service pages that match how people search neighborhoods and problems. Unique copy per location beats duplicate doorway pages. Reviews amplify proof—ask satisfied clients on a steady cadence, not in bursts that look artificial.",
      "Track cost per lead, not only rankings. A page that ranks #3 but converts at twice the rate of #1 competitors is a finance problem, not an SEO trophy. Use call tracking and form events responsibly, with privacy disclosures where required.",
      "Invest in maintenance. Broken plugins, outdated hours, and slow checkout-equivalent flows (long intake forms) erode trust silently. Budget like insurance: monthly health checks beat emergency rebuilds during peak season.",
    ],
  },
  {
    slug: "founder-focus-self-serve-web-experience",
    title: "Founder focus: design a self-serve web experience that protects your calendar",
    seoTitle: "Startup operations: reduce support load with FAQs, docs, and smart UX",
    excerpt:
      "Scale yourself: FAQs, onboarding emails, and a fast marketing site cut repetitive questions so you can build. Great UX is a founder retention strategy—not only a customer perk.",
    keywords: [
      "startup customer support scaling",
      "self-serve onboarding",
      "founder productivity",
      "SaaS marketing site",
      "reduce support tickets",
    ],
    category: "Startups",
    tags: ["Startups", "Operations", "UX", "Founders"],
    date: "2025-03-10",
    author: "Launchpad Studio",
    readTime: "7 min read",
    ogImage: "/blog-media/founder-focus-self-serve-web-experience.webp",
    canvaImagePrompt:
      "Founder at desk protected by a shield made of FAQ cards and documentation pages, calendar with fewer meetings metaphor, calm productivity palette, friendly SaaS illustration, horizontal banner format",
    paragraphs: [
      "Founders underestimate how many hours vanish into repeating the same explanations. A thoughtful site structure—pricing ranges, scope boundaries, implementation steps, and honest limitations—pre-qualifies leads and educates customers before they book your time.",
      "Segment audiences on the page. New visitors need different answers than power users troubleshooting an edge case. Clear entry points reduce support tickets and make your small team feel larger than it is.",
      "Pair the marketing site with lightweight lifecycle email for trials and onboarding. The web captures intent; email nurtures habit. Both should load fast and read plainly—jargon increases confusion, which becomes support load.",
      "Instrument key flows. Where do people abandon signup? Which docs page correlates with churn reduction? Early-stage teams win by learning faster, not by shipping more features nobody discovers.",
      "Protect founder energy as a strategic asset. If a one-day content sprint on FAQs saves ten hours a month of calls, the ROI is obvious. Treat that time as carefully as runway.",
    ],
  },
  {
    slug: "influencer-media-kit-pricing-that-closes",
    title: "Influencers: media kits and pricing pages that close brand deals",
    seoTitle: "Influencer rate card and media kit: website pages that win partnerships",
    excerpt:
      "Brand managers compare creators in spreadsheets. A polished, fast page with audience proof, deliverables, and clear terms speeds yes/no decisions and lifts your effective rate.",
    keywords: [
      "influencer media kit",
      "creator rate card",
      "brand partnership website",
      "sponsorship pricing page",
      "influencer business development",
    ],
    category: "Creators & influencers",
    tags: ["Influencers", "Partnerships", "Pricing", "Sales"],
    date: "2025-03-08",
    author: "Launchpad Studio",
    readTime: "8 min read",
    ogImage: "/blog-media/influencer-media-kit-pricing-that-closes.webp",
    canvaImagePrompt:
      "Influencer media kit flatlay: rate card, analytics charts, brand logos as generic shapes, handshake or partnership ribbon, glamorous but professional, magazine editorial lighting, top-down or 3/4 view",
    paragraphs: [
      "Professional buyers want clarity: audience geography, age splits, past brand work, exclusivity rules, and turnaround times. A PDF attachment alone is fragile; a web page indexed for your name plus ‘media kit’ is discoverable and updatable. When numbers change, you edit once—not ten email threads.",
      "Structure packages around outcomes, not vague bundles. Sponsored post, story set, usage rights, whitelisting, and reporting should be spelled out. Ambiguity creates renegotiation mid-campaign—the fastest way to erode trust and margin.",
      "Show social proof with ethics. Use logos and testimonials you have permission to share. Link out to live examples of brand work when contracts allow. Authenticity beats inflated metrics; savvy marketers audit engagement quality.",
      "Performance still matters. Brand coordinators open your link on phones between meetings. If your media kit page stutters or your video autoplays with sound, you look harder to work with than a peer who kept it fast and respectful.",
      "Close with a single contact pathway—form or booking link—and an SLA you can keep. Responsiveness during sales predicts responsiveness during delivery. Your site can set that expectation honestly.",
    ],
  },
  {
    slug: "one-goal-per-page-conversion-discipline",
    title: "One goal per page: the conversion discipline growth teams forget",
    seoTitle: "CRO basics for SMBs: one primary CTA per page, clearer revenue",
    excerpt:
      "Coaches ask for one habit at a time; landing pages work the same way. Remove competing CTAs, match ad intent to copy, and measure completion rate—especially on mobile where distraction is one tap away.",
    keywords: [
      "conversion rate optimization",
      "landing page best practices",
      "single CTA marketing",
      "mobile conversion UX",
      "paid ads landing page match",
    ],
    category: "Business & growth",
    tags: ["CRO", "Marketing", "SMB", "Analytics"],
    date: "2025-03-06",
    author: "Launchpad Studio",
    readTime: "7 min read",
    ogImage: "/blog-media/one-goal-per-page-conversion-discipline.webp",
    canvaImagePrompt:
      "Single large glowing CTA button on a clean landing page mockup, other buttons faded or crossed out, mobile phone frame, conversion funnel subtle, bold accent color one primary action, minimalist UI illustration",
    paragraphs: [
      "Ambition often tempts teams to ask for three outcomes at once: follow, subscribe, and buy. Visitors rarely oblige. Pick the macro goal for each template: educate, capture, or convert. Secondary actions belong lower on the page or on dedicated follow-up journeys.",
      "Message match matters for paid traffic. If an ad promises a free audit, the landing headline should repeat that promise in plain language within seconds. Cognitive dissonance increases bounce rate and wastes media spend.",
      "Simplify forms ruthlessly. Each extra field drops completion—ask only what you need for the next step. Use progressive profiling later once trust exists.",
      "Speed underpins all of it. You can write brilliant copy, but if the page janks on scroll or the button delays, you lose people who would have said yes. Treat INP and CLS as conversion problems, not only SEO checkboxes.",
      "Review quarterly with honest data. Heatmaps and session replays (with privacy guardrails) reveal where attention goes. Iterate copy and layout based on behavior, not opinions from the loudest voice in the room.",
    ],
  },
  {
    slug: "personal-brand-site-for-leaders-and-experts",
    title: "Personal brand sites for leaders, experts, and consultants",
    seoTitle: "Executive personal website: authority, speaking, and search visibility",
    excerpt:
      "Executives and advisors: a focused site clarifies how you help, supports speaking SEO, and funnels inquiries—without duplicating your company homepage word for word.",
    keywords: [
      "personal brand website",
      "executive online presence",
      "consultant website SEO",
      "speaking engagements website",
      "thought leadership site",
    ],
    category: "Business & growth",
    tags: ["Personal brand", "Leadership", "Consulting", "SEO"],
    date: "2025-03-04",
    author: "Launchpad Studio",
    readTime: "7 min read",
    ogImage: "/blog-media/personal-brand-site-for-leaders-and-experts.webp",
    canvaImagePrompt:
      "Executive or consultant portrait silhouette at podium with microphone, personal website on screen behind, thought leadership books or article stack abstract, gold and charcoal sophisticated palette, premium editorial cover",
    paragraphs: [
      "Your corporate bio is not enough. Decision-makers search individuals before meetings—articles, talks, points of view. A concise personal site separates your public stance from company messaging and helps organizers book you for podcasts and stages.",
      "Lead with perspective, not resume spam. A sharp point of view attracts aligned opportunities; generic excellence claims attract noise. Publish durable articles on problems you solve repeatedly—those pages compound in search while reducing repetitive explanations.",
      "Make outreach easy: a single scheduling link, clear assistant routing, and explicit topics you will or will not discuss. Boundaries are part of brand; they save everyone time.",
      "Technical polish signals respect for the audience. Fast pages, accessible typography, and mobile-first layouts matter for busy readers between meetings. Heavy animations rarely help comprehension.",
      "Sync permissions if you represent an employer or board. Clear disclaimers prevent conflicts and set expectations for independent commentary versus official policy.",
    ],
  },
  {
    slug: "online-trust-speed-clarity-compound",
    title: "How speed, clarity, and proof compound your online reputation",
    seoTitle: "Business reputation online: website speed, clarity, and reviews that convert",
    excerpt:
      "Across industries, trust is the bottleneck. Fast sites, plain language, and visible proof reduce perceived risk so SEO and ads actually pay back. A coach-style look at the compounding loop.",
    keywords: [
      "online reputation management business",
      "website trust signals",
      "customer reviews SEO",
      "brand credibility website",
      "E-E-A-T local business",
    ],
    category: "Business & growth",
    tags: ["Trust", "Reputation", "SEO", "Reviews"],
    date: "2025-03-02",
    author: "Launchpad Studio",
    readTime: "8 min read",
    ogImage: "/blog-media/online-trust-speed-clarity-compound.webp",
    canvaImagePrompt:
      "Trust compounding visual: five-star reviews floating toward a stable building or shield, speedometer “fast,” simple readable webpage, warm human tones mixed with tech blues, hopeful professional mood",
    paragraphs: [
      "People do not buy the best product every time—they buy the safest choice they can justify. Online, safety shows up as clarity (do I understand the offer?), proof (have others like me succeeded?), and responsiveness (will they take care of me if something breaks?). Your website is where those signals either align or fall apart.",
      "Speed is a courtesy. Slow pages feel neglectful, especially on mobile networks. Investing in performance is investing in respect—before a visitor reads a single word. That is why technical excellence and emotional trust are linked, not separate conversations.",
      "Use language your customers use, not internal jargon. SEO rewards the match between query and copy; humans reward feeling understood. Interview clients, steal phrases from support emails (with privacy), and reflect that language on key pages.",
      "Reviews and case studies should be specific: who, what changed, and in what timeframe. Vague praise does not reduce risk. Ask for structured testimonials after successful deliveries—systems beat hope.",
      "Close the loop with measurement. Are branded searches rising? Are landing pages converting better after clarity edits? Reputation is not a project; it is a habit sustained by feedback. Treat your digital presence as an operating system for trust, not a launch-day poster.",
    ],
  },
  {
    slug: "why-core-web-vitals-matter",
    title: "Why Core Web Vitals still matter in 2025",
    seoTitle: "Core Web Vitals in 2025: Why speed still drives SEO and conversions",
    excerpt:
      "Core Web Vitals (LCP, INP, CLS) tie real user experience to SEO and revenue. Learn how we prioritize them without sacrificing brand-forward design.",
    keywords: [
      "Core Web Vitals",
      "LCP INP CLS",
      "page experience",
      "web performance SEO",
      "site speed",
      "Google ranking factors",
    ],
    category: "Performance & SEO",
    tags: ["Core Web Vitals", "Performance", "SEO", "UX"],
    date: "2025-02-12",
    updatedAt: "2025-03-01",
    author: "Launchpad Studio",
    readTime: "9 min read",
    ogImage: "/portfolio/meridian-digital.png",
    canvaImagePrompt:
      "Dashboard-style abstract: LCP clock, smooth tap interaction waves, stable grid layout no shifting boxes, Chrome-inspired blues and grays, technical but friendly infographic look, 16:9 blog hero",
    mediaTop: [
      {
        type: "image",
        src: "/portfolio/meridian-digital.png",
        alt: "Modern website interface emphasizing fast load and clear layout",
        caption: "Performance and aesthetics should reinforce each other—not trade off.",
      },
    ],
    paragraphs: [
      "Search engines have said for years that they reward pages people actually want to use. Core Web Vitals are one of the clearest bridges between that idea and something your team can measure in Chrome, Search Console, and real-user monitoring. Largest Contentful Paint (LCP) captures perceived load speed, Interaction to Next Paint (INP) captures responsiveness after load, and Cumulative Layout Shift (CLS) captures visual stability. Together they describe whether your site feels fast, calm, and under control—the same qualities that make visitors trust a brand.",
      "None of these metrics replace great content or authoritative links. What they do is prevent strong messaging from dying on a slow or janky experience. When LCP drags, people bounce before they read your headline. When INP is poor, every tap on a menu or “Add to cart” feels cheap. When CLS spikes, users mis-click and blame the product, not the browser. Fixing those issues is not vanity engineering; it is conversion and SEO hygiene.",
      "In 2025, the performance bar keeps rising because users compare you to the best app on their phone, not to your closest competitor’s website. That is why we treat performance as a product requirement from the first design review. We choose image formats and dimensions deliberately, lazy-load below-the-fold media, and avoid shipping large JavaScript bundles for simple interactions. We profile on mid-tier Android devices and throttled networks, not only on laptops on office Wi‑Fi.",
      "We also separate “lab” scores from “field” truth. A perfect Lighthouse run is useful, but Search Console and RUM data tell you what real customers experience across regions and devices. If the field data disagrees with the lab, we trust the field and chase the bottlenecks that actually hurt your audience.",
      "The end goal is not chasing a number for its own sake. The goal is a site that loads predictably, responds instantly to input, and stays visually stable while fonts and images settle. When those basics are solid, your content and design can do what they were meant to do: persuade, sell, and rank.",
    ],
    mediaBottom: [
      {
        type: "embed",
        src: "https://www.youtube.com/embed/eyCpyiYL3xk",
        caption:
          "Google’s Search Central channel explains how Core Web Vitals connect to search—worth sharing with stakeholders who want the business case, not only the tech.",
      },
    ],
  },
  {
    slug: "woocommerce-without-the-bloat",
    title: "Running WooCommerce without the bloat",
    seoTitle: "WooCommerce performance: how to scale without plugin bloat",
    excerpt:
      "WooCommerce stores often slow down as catalogs and plugins grow. Here is how we keep checkout fast, databases healthy, and maintenance predictable.",
    keywords: [
      "WooCommerce performance",
      "WordPress e-commerce speed",
      "reduce plugin bloat",
      "WooCommerce caching",
      "online store Core Web Vitals",
    ],
    category: "E‑commerce",
    tags: ["WooCommerce", "WordPress", "Performance", "E‑commerce"],
    date: "2025-01-28",
    author: "Launchpad Studio",
    readTime: "8 min read",
    ogImage: "/portfolio/velvet-row.png",
    canvaImagePrompt:
      "Sleek WooCommerce-style storefront on laptop, shopping cart with minimal plugins as small tidy cubes, speed gauge, product grid sharp and lightweight, modern e-commerce aesthetic, soft studio background",
    mediaTop: [
      {
        type: "image",
        src: "/portfolio/velvet-row.png",
        alt: "E-commerce storefront layout with clean product presentation",
        caption: "A disciplined plugin stack keeps the storefront fast as inventory grows.",
      },
    ],
    paragraphs: [
      "WooCommerce can carry serious revenue, but it does not forgive sloppy architecture. Every inactive plugin, oversized image, and unbounded related-products query adds latency at the worst possible moment—when someone is trying to pay. We treat the store as a performance-critical application, not a brochure with a cart bolted on.",
      "The first lever is scope control. We document the business requirements, then install the smallest set of well-maintained extensions that meets them. Third-party plugins that overlap (SEO, caching, optimization) are a common source of conflicts and duplicated work. Fewer moving parts mean faster pages and easier debugging when something breaks during a busy season.",
      "Next comes caching done correctly. Full-page caches and object caches help, but dynamic cart and checkout flows need exclusions and careful testing. We verify that prices, stock, shipping, and coupons stay accurate after caching layers—not only on desktop, but on mobile networks where latency amplifies every mistake.",
      "Images and media are another silent budget burner. We standardize dimensions for category grids and product galleries, serve modern formats where supported, and defer non-critical scripts so interactive elements stay responsive (this is where INP shows up for real shoppers). When a theme or page builder emits bloated markup, we refactor or replace the worst offenders instead of stacking more optimization plugins on top.",
      "Finally, we leave the team with a clear map: what runs in production, who can change it, and how to roll back. Performance is a habit—regular updates, monitored uptime, and quarterly reviews keep WooCommerce fast long after launch day.",
    ],
  },
  {
    slug: "handoff-that-sticks",
    title: "Handoff documentation that your team will actually use",
    seoTitle: "Website handoff documentation editors will actually use",
    excerpt:
      "Launch day succeeds when marketing and editors can publish confidently the week after. Practical handoff beats a PDF nobody opens.",
    keywords: [
      "website handoff documentation",
      "CMS training",
      "content team onboarding",
      "WordPress documentation",
      "developer to client handoff",
    ],
    category: "Process",
    tags: ["Handoff", "CMS", "Documentation", "Operations"],
    date: "2025-01-08",
    author: "Launchpad Studio",
    readTime: "7 min read",
    ogImage: "/portfolio/north-co.png",
    canvaImagePrompt:
      "Marketing and dev team around one screen with CMS interface, printed one-pager runbook, checklist and play button for video tutorial, collaborative office, bright optimistic colors, handoff and documentation theme",
    mediaTop: [
      {
        type: "image",
        src: "/portfolio/north-co.png",
        alt: "Team collaborating on content and design for a web project",
        caption: "Clear handoff turns your CMS from a black box into a tool the whole team trusts.",
      },
    ],
    paragraphs: [
      "The slickest codebase in the world does not matter if your marketing team is afraid to touch the CMS. Handoff is not a bundle of credentials—it is the moment your site becomes someone else’s daily workflow. We optimize for that moment: short paths to “publish a page,” obvious guardrails, and named contacts when something unusual happens.",
      "Written docs still matter, but format beats length. A one-page runbook with screenshots for common tasks often outperforms a fifty-page PDF. We structure notes around jobs to be done: add a blog post, swap a hero, update a form destination, roll back a bad edit. Each task gets prerequisites, click-by-click steps, and a “when things go wrong” section with who to ping.",
      "Video can bridge gaps that text cannot. A five-minute Loom-style walkthrough of the block editor or ACF fields saves hours of back-and-forth. We store those videos where the team already works—Notion, Drive, or the intranet—so they are one click away, not buried in an email from launch week.",
      "We also clarify ownership. Who approves plugin updates? Who has staging access? Where do backups live and how often are they tested? Ambiguity creates shadow IT and duplicate plugins. Clear ownership keeps the site maintainable and avoids the “three people installed caching plugins” problem.",
      "Good documentation is part of the product. It protects your brand, speeds up campaigns, and reduces billable panic calls. We bake it into the project plan, not the closing week when everyone is exhausted.",
    ],
  },
  {
    slug: "security-basics-for-wordpress-teams",
    title: "Security basics every WordPress team should revisit",
    seoTitle: "WordPress security checklist for teams (2025 fundamentals)",
    excerpt:
      "Most WordPress incidents are automated, not cinematic. Strong access control, updates, and hosting choices remove you from the easy-target list.",
    keywords: [
      "WordPress security",
      "WordPress hardening",
      "managed WordPress hosting",
      "least privilege users",
      "WordPress updates",
    ],
    category: "Security",
    tags: ["WordPress", "Security", "Hosting", "Operations"],
    date: "2024-12-15",
    updatedAt: "2025-02-20",
    author: "Launchpad Studio",
    readTime: "8 min read",
    ogImage: "/portfolio/meridian-digital.png",
    canvaImagePrompt:
      "WordPress security concept: lock and shield over WP-style admin aesthetic (generic, no official logo), 2FA phone token, update notification icons, server rack subtle, serious dark blue and green cyber hygiene illustration",
    paragraphs: [
      "WordPress powers a huge share of the web, which means it also attracts automated attacks at scale. The good news: most compromises are not sophisticated heists—they are bots probing weak passwords, outdated plugins, and misconfigured file permissions. A sane baseline removes you from the lowest-hanging fruit category.",
      "Start with identity. Enforce strong passwords and two-factor authentication for anyone who can change themes, install plugins, or edit users. Use role-based access ruthlessly: editors should not need administrator privileges, and former employees should be deactivated the day they leave. Least privilege limits how far an attacker can move if a single account is phished.",
      "Stay current without being reckless. We prefer staging environments where updates are tested before production, especially for WooCommerce and membership sites. A predictable update cadence beats panic-patching after a public exploit drops. Paired with reliable backups—stored off-server and periodically restored in a drill—you get resilience, not just optimism.",
      "Hosting choice matters as much as code. Managed WordPress hosts that handle network-level firewalls, malware scanning, and TLS certificates remove whole classes of chores from your plate. If you self-host, document the stack and monitor file integrity on wp-config.php and core directories.",
      "Security is never “done at launch.” We help teams schedule quarterly reviews: user audit, plugin audit, log review, and a quick tabletop exercise for “what if the site is defaced Friday night?” That mindset turns security from a scary unknown into a repeatable process.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
