/**
 * Long-form case study copy for /portfolio/[slug] — written in a research-notes style:
 * context, constraints, method, and outcomes (illustrative / composite scenarios).
 */

export type CaseStudyBlock = {
  title: string;
  paragraphs: string[];
};

export type PortfolioCaseStudy = {
  slug: string;
  /** Short line under the title */
  subtitle: string;
  /** Display year / phase */
  period: string;
  /** Your hat in the narrative */
  engagement: string;
  lede: string;
  context: CaseStudyBlock;
  constraints: CaseStudyBlock;
  research: CaseStudyBlock;
  approach: CaseStudyBlock;
  delivery: CaseStudyBlock;
  outcomes: CaseStudyBlock;
  stack: string[];
  furtherReading?: string[];
};

export const portfolioCaseStudies: PortfolioCaseStudy[] = [
  {
    slug: "meridian-digital-credibility-first",
    subtitle: "B2B marketing site where paid traffic has to earn a conversation",
    period: "2024 · discovery → launch",
    engagement: "Product direction, information architecture, front-end systems",
    lede:
      "Meridian’s old site looked credible in a static PDF deck but broke down under campaign velocity: every launch needed a developer in the loop, and form data lived in inboxes instead of the CRM. The mandate was simple on paper—look enterprise, ship fast, measure what matters.",
    context: {
      title: "Context",
      paragraphs: [
        "The team sells complex B2B services with long sales cycles. Traffic arrives from LinkedIn and paid search; most visitors will not convert on first visit. The site’s real job is to qualify intent early—clear ICP fit, proof, and a low-friction path to a booked call—without burying leads in generic “contact us” noise.",
        "Stakeholders were split between marketing (who needed weekly landings) and IT (who wanted fewer moving parts). Any solution had to respect brand guidelines that were already locked while still allowing modular layouts.",
      ],
    },
    constraints: {
      title: "Constraints",
      paragraphs: [
        "No bespoke SPA for content editors: marketing had to publish without opening tickets for every headline swap. Performance targets were tied to paid media—slow LCP meant wasted spend, not just a Lighthouse badge.",
        "Lead data had to land in the CRM with campaign attribution intact; exports from a dashboard were not acceptable as the system of record.",
      ],
    },
    research: {
      title: "What we looked at first",
      paragraphs: [
        "We mapped the three dominant journeys: cold paid click → service page → form; organic → resource → nurture; and referral → case study → contact. Analytics showed the second path under-counted because event naming drifted between Tag Manager versions.",
        "Competitive review focused on clarity, not decoration: who the offer is for, what proof exists, and what happens after submit. Several peers hid strong work below the fold on mobile—an easy win for Meridian if layouts stayed disciplined.",
      ],
    },
    approach: {
      title: "Approach",
      paragraphs: [
        "We separated “evergreen” templates (services, proof, team) from “campaign shells” designed to launch in hours: hero, story, offer, proof strip, single primary CTA. Editors assemble pages from blocks with guardrails—spacing, type scale, and CTA placement stay consistent so brand doesn’t drift with every experiment.",
        "Forms post to endpoints the CRM team owns; server-side validation mirrors client rules so junk never pollutes downstream automation. Thank-you routes are real URLs, not modal dead-ends, which keeps measurement honest for assisted conversions.",
      ],
    },
    delivery: {
      title: "Delivery notes",
      paragraphs: [
        "Core Web Vitals were treated as a feature: image discipline, font subsetting, and deferring non-critical scripts. We avoided third-party carousels and heavy builders that reintroduce layout thrash.",
        "Editor training was one working session plus a short internal doc—because the system is boring on purpose. Boring systems get used.",
      ],
    },
    outcomes: {
      title: "Outcomes (directional)",
      paragraphs: [
        "Marketing could ship landings without engineering for routine launches; time-to-live for a new offer dropped from weeks to hours once templates existed.",
        "Sales stopped re-keying leads; attribution fields were consistent enough for pipeline reporting without manual cleanup.",
      ],
    },
    stack: ["WordPress (block theme)", "ACF / block library", "WP Rocket–class caching", "CRM webhooks", "GA4 + Consent Mode"],
  },
  {
    slug: "velvet-row-editorial-commerce",
    subtitle: "Fashion e-commerce where the product story carries the sale",
    period: "2023 · redesign + ongoing",
    engagement: "UX, WooCommerce architecture, performance tuning",
    lede:
      "Velvet Row sells a high-touch aesthetic online. The risk wasn’t “can WooCommerce check out?”—it was whether the storefront felt editorial on mobile, where most sessions start and most carts die quietly.",
    context: {
      title: "Context",
      paragraphs: [
        "The brand had outgrown a theme that looked fine in demos but fought their photography: crops were inconsistent, collection pages felt like catalogs from another decade, and mobile navigation buried size and care content.",
        "Operations needed predictable shipping and tax behavior across regions without turning checkout into a questionnaire.",
      ],
    },
    constraints: {
      title: "Constraints",
      paragraphs: [
        "Inventory and fulfillment integrations had to remain standard WooCommerce—no exotic middleware that would break with plugin updates.",
        "Page weight had to stay controlled: large lookbook imagery is non-negotiable for the brand, so we planned for responsive art direction and lazy loading patterns that don’t fight Core Web Vitals.",
      ],
    },
    research: {
      title: "Research",
      paragraphs: [
        "We reviewed session replays and exit pages: PDP drop-off correlated more with trust and sizing clarity than with price. Collection pages with weak narrative framing underperformed even when products were strong.",
        "Checkout friction clustered around shipping expectations and return clarity—fixable with copy and timing, not new payment gateways.",
      ],
    },
    approach: {
      title: "Approach",
      paragraphs: [
        "Templates separate “story” modules from commerce rails: editorial blocks for campaigns, stable product grids for browse. The cart stays lightweight—no surprise drawers that reload half the theme.",
        "Mobile checkout uses progressive disclosure: shipping first, payment second, with persistent order summary that doesn’t jump as fields validate.",
      ],
    },
    delivery: {
      title: "Delivery",
      paragraphs: [
        "We staged content migration with URL parity checks and 301 planning so organic rankings weren’t torched by template changes.",
        "Staff workflows were documented for seasonal launches—duplicate collection, swap hero, publish—so creative cycles don’t bottleneck on one person who knows the theme.",
      ],
    },
    outcomes: {
      title: "Outcomes (directional)",
      paragraphs: [
        "Mobile sessions retained more depth on collection and PDP templates after the narrative modules shipped.",
        "Checkout completion improved once shipping and returns expectations were explicit earlier in the funnel—not after frustration at payment.",
      ],
    },
    stack: ["WooCommerce", "Custom child theme", "Blocks for merchandising", "Stripe", "Regional shipping rules"],
  },
  {
    slug: "north-co-portfolio-trust",
    subtitle: "Creative studio site built for RFP season, not vanity awards lists",
    period: "2024 · IA + CMS",
    engagement: "Content model, case study templates, filtering UX",
    lede:
      "North & Co. wins work when prospects can self-serve proof: the right case study, the right sector, the right process story—before a calendar invite. Their old portfolio read like a blog archive: great projects, wrong structure for decision-makers scanning fast.",
    context: {
      title: "Context",
      paragraphs: [
        "Inbound leads were high quality but poorly qualified: contact forms produced one-line emails with no project scope. Sales spent first calls asking questions the website could have answered.",
        "The studio’s work spans product, brand, and campaigns; filters had to reflect how buyers search, not how the team organizes internal folders.",
      ],
    },
    constraints: {
      title: "Constraints",
      paragraphs: [
        "Editors update case studies weekly; layouts cannot require a front-end dev for every new project page.",
        "Visual design had to stay restrained—large media, quiet typography—so work remains the hero.",
      ],
    },
    research: {
      title: "Research",
      paragraphs: [
        "We interviewed the principals on how RFPs actually start: often with a forwarded link and a 90-second skim. That implied strong page hierarchy: sector → outcome → proof → contact, with scannable bullets, not long essays.",
        "We cataloged competitor studio sites and tagged patterns: timeline case studies vs. hero-only portfolios. North needed the former with better filters.",
      ],
    },
    approach: {
      title: "Approach",
      paragraphs: [
        "A case study content model enforces the same bones every time—challenge, approach, outcome, deliverables—while allowing flexible media within sections so projects don’t look templated to death.",
        "Filtering combines industry tags with engagement type so prospects narrow without hitting dead results pages.",
      ],
    },
    delivery: {
      title: "Delivery",
      paragraphs: [
        "Contact routes include structured fields (budget band, timeline, role) that reduce noise without feeling like a government form—progressive disclosure keeps the first step lightweight.",
        "Redirects and internal links were audited so old project URLs still resolve after migration.",
      ],
    },
    outcomes: {
      title: "Outcomes (directional)",
      paragraphs: [
        "The team could publish new work on a predictable cadence; case study pages stopped breaking layout when embedded video ratios changed.",
        "Inbound messages arrived with more context, shrinking back-and-forth before meaningful calls.",
      ],
    },
    stack: ["Headless-friendly CMS patterns", "Next-ready content API (where applicable)", "Tag-driven filters", "Accessible components"],
  },
  {
    slug: "meridian-digital-landing-velocity",
    subtitle: "Campaign landings as a system—not one-offs",
    period: "2024 · acceleration phase",
    engagement: "Component library, QA checklist, paid-media handoff",
    lede:
      "After the core site shipped, Meridian’s paid team needed velocity: new offers weekly, strict UTM discipline, and zero regressions when a headline changed. The bottleneck wasn’t copy—it was inconsistent layouts breaking mobile and skewing conversion comparisons.",
    context: {
      title: "Context",
      paragraphs: [
        "Each experiment needed comparable structure so results were interpretable. Ad-hoc page builders introduced spacing drift and accidental duplicate H1s.",
        "Stakeholders wanted a shared QA ritual before spend went live—something lighter than a ticket storm but heavier than ‘looks fine on my laptop.’",
      ],
    },
    constraints: {
      title: "Constraints",
      paragraphs: [
        "Reuse the existing CMS and hosting footprint—no parallel stack for landings.",
        "Preserve brand typography while keeping CLS near zero when fonts load.",
      ],
    },
    research: {
      title: "Research",
      paragraphs: [
        "We sampled the last twelve landings and tagged failure modes: hero CTA below fold on small phones, forms with uneven field spacing, and third-party scripts firing before consent.",
        "Media buyers provided their review checklist; we mirrored it in a one-page QA doc tied to each publish.",
      ],
    },
    approach: {
      title: "Approach",
      paragraphs: [
        "We defined three landing archetypes—lead capture, webinar, and content upgrade—each with locked vertical rhythm and CTA placement. Variants swap copy and imagery inside rails, not outside them.",
        "Preview links use the same caching behavior as production so stakeholders don’t approve a fast page that ships slow.",
      ],
    },
    delivery: {
      title: "Delivery",
      paragraphs: [
        "A lightweight changelog accompanies each launch: hypothesis, audience, primary KPI, and date—so retrospectives don’t rely on memory.",
        "Automated smoke tests cover form posts to a staging endpoint before go-live.",
      ],
    },
    outcomes: {
      title: "Outcomes (directional)",
      paragraphs: [
        "Time-to-publish for a net-new landing stabilized; fewer rollbacks after mobile checks became mandatory.",
        "Experiment readouts became cleaner because page structure stopped confounding creative tests.",
      ],
    },
    stack: ["CMS block library", "Staging parity", "Tag Manager governance", "Webhook staging"],
  },
  {
    slug: "velvet-row-seasonal-launch",
    subtitle: "Collection drops with editorial rhythm and stable checkout",
    period: "2024 · seasonal program",
    engagement: "Merchandising templates, campaign landing blocks",
    lede:
      "Fashion calendars don’t wait on engineering. Velvet Row needed collection launches that felt event-driven—hero, story, lookbook, shop grid—without risking checkout regressions when marketing moved fast.",
    context: {
      title: "Context",
      paragraphs: [
        "Peak traffic hits in short windows; any friction in cart or shipping messaging shows up immediately in support tickets and abandoned carts.",
        "Creative wanted vertical storytelling on desktop without crippling mobile scroll depth.",
      ],
    },
    constraints: {
      title: "Constraints",
      paragraphs: [
        "Reuse existing payment and inventory integrations; no forked checkout experiments.",
        "Maintain SEO on collection URLs when hero content rotated.",
      ],
    },
    research: {
      title: "Research",
      paragraphs: [
        "We compared session paths for launch days vs. baseline weeks: users who engaged with the editorial block converted at higher rates when product grids loaded quickly afterward.",
        "We also traced return-policy views—spikes correlated with international visitors unsure about duties.",
      ],
    },
    approach: {
      title: "Approach",
      paragraphs: [
        "Launch templates stack story blocks above a stable product grid; the grid pulls the same underlying queries so merchandising rules don’t duplicate.",
        "Mobile uses shorter editorial modules with explicit ‘shop the edit’ jumps so scroll fatigue doesn’t bury product access.",
      ],
    },
    delivery: {
      title: "Delivery",
      paragraphs: [
        "A pre-launch checklist covers image compression, alt text, and price visibility—small items that destroy trust when missed during a midnight publish.",
        "Rollback plan: cached pages and CDN invalidation steps documented for the one person on call.",
      ],
    },
    outcomes: {
      title: "Outcomes (directional)",
      paragraphs: [
        "Marketing shipped seasonal pages without developer pairing for routine launches.",
        "Support load on launch weekends dropped once shipping messaging was surfaced earlier.",
      ],
    },
    stack: ["WooCommerce", "Campaign blocks", "Edge caching", "Transactional email templates"],
  },
  {
    slug: "north-co-work-index",
    subtitle: "A work index prospects can actually filter",
    period: "2024 · discovery",
    engagement: "Taxonomy, filter UX, content migration",
    lede:
      "North & Co.’s catalog of work outgrew simple categories. Prospects filtered by industry and left with empty screens, or found beautiful projects that weren’t relevant. The index needed honest metadata and resilient empty states—not more tags for their own sake.",
    context: {
      title: "Context",
      paragraphs: [
        "The studio’s reputation spans overlapping sectors; strict silos misrepresent the work. Filters had to combine logically (AND/OR) without confusing casual visitors.",
        "Search was out of scope; browse had to carry the experience.",
      ],
    },
    constraints: {
      title: "Constraints",
      paragraphs: [
        "Keep filters server-renderable for speed and shareable URLs—hash-only client filters were rejected.",
        "Avoid filter UIs that require tutorials.",
      ],
    },
    research: {
      title: "Research",
      paragraphs: [
        "We card-sorted project types with the team and validated against inbound inquiry language—often imprecise (‘brand refresh for fintech’) vs. internal labels.",
        "We mapped zero-result queries from the beta index and adjusted synonym coverage.",
      ],
    },
    approach: {
      title: "Approach",
      paragraphs: [
        "Filters expose counts and disable impossible combinations instead of leading users to dead ends.",
        "Each result tile prioritizes outcome language over internal codenames so scanning stays human.",
      ],
    },
    delivery: {
      title: "Delivery",
      paragraphs: [
        "Migration scripts reconciled legacy tags; redirects preserved old deep links to the closest new case study.",
        "Analytics events capture filter usage without PII so the team can retire unused dimensions.",
      ],
    },
    outcomes: {
      title: "Outcomes (directional)",
      paragraphs: [
        "Prospects reached relevant case studies faster; empty states became rare and instructive instead of blank.",
        "Sales spent less time sending PDFs to replace confusing web paths.",
      ],
    },
    stack: ["Taxonomy model", "URL-based filters", "Static generation where possible"],
  },
  {
    slug: "meridian-digital-lead-routing",
    subtitle: "Forms, thank-you paths, and CRM discipline",
    period: "2024 · integrations",
    engagement: "Lead routing, validation, analytics alignment",
    lede:
      "Meridian’s forms worked—until they didn’t: duplicate leads, missing campaign IDs, and thank-you pages that broke conversion tracking in assisted journeys. This phase tightened the plumbing so marketing could trust the pipeline numbers.",
    context: {
      title: "Context",
      paragraphs: [
        "Sales complained about duplicate records after events and webinars; marketing saw different numbers than CRM dashboards.",
        "Consent and region rules added complexity: not every field should go to every automation.",
      ],
    },
    constraints: {
      title: "Constraints",
      paragraphs: [
        "Stay within the CRM’s public APIs—no shadow databases.",
        "Preserve user-facing copy tone; legal reviewed disclaimers that couldn’t move casually.",
      ],
    },
    research: {
      title: "Research",
      paragraphs: [
        "We traced a sample of leads end-to-end and found timing issues—webhooks arriving out of order—and mapping gaps where UTM fields didn’t align to CRM picklists.",
        "We reviewed error logs for silent failures (the worst kind).",
      ],
    },
    approach: {
      title: "Approach",
      paragraphs: [
        "Server-side validation with structured error responses; client mirrors for UX but server wins.",
        "Idempotent webhook handling and dead-letter visibility so ops can retry without guessing.",
      ],
    },
    delivery: {
      title: "Delivery",
      paragraphs: [
        "Thank-you pages are real routes with consistent event hooks; assisted conversions become measurable without hacks.",
        "Documentation includes field dictionaries for CRM admins—boring, essential.",
      ],
    },
    outcomes: {
      title: "Outcomes (directional)",
      paragraphs: [
        "Duplicate lead noise dropped after idempotency keys and smarter dedupe rules.",
        "Reporting between ads and CRM converged enough for weekly standups to trust the trend lines.",
      ],
    },
    stack: ["CRM REST API", "Server validation", "Webhook retries", "GA4 events"],
  },
  {
    slug: "velvet-row-international-checkout",
    subtitle: "Clarity at cart for cross-border buyers",
    period: "2024 · UX refinement",
    engagement: "Checkout copy, shipping transparency, cart resilience",
    lede:
      "International buyers hesitated at the last step: duties, delivery windows, and return costs weren’t visible early enough. The fix wasn’t a new payment provider—it was information architecture in the cart and calmer error handling.",
    context: {
      title: "Context",
      paragraphs: [
        "The brand’s domestic flow was strong; cross-border was a minority of revenue but a majority of support tickets.",
        "Legal required accurate duty disclaimers without turning checkout into a law textbook.",
      ],
    },
    constraints: {
      title: "Constraints",
      paragraphs: [
        "No change to core payment processor; improvements had to be presentation and timing.",
        "Mobile-first: most international sessions were phones.",
      ],
    },
    research: {
      title: "Research",
      paragraphs: [
        "We correlated exit pages with shipping method selection; hesitation clustered before payment when totals shifted.",
        "Support logs were categorized: ‘unexpected fees’ vs. ‘timing’ vs. ‘returns’—three different copy strategies.",
      ],
    },
    approach: {
      title: "Approach",
      paragraphs: [
        "Totals communicate duty estimates earlier with links to policy; returns summary sits beside size selection prompts for international shoppers.",
        "Error states explain what failed and what to try next—no generic ‘something went wrong.’",
      ],
    },
    delivery: {
      title: "Delivery",
      paragraphs: [
        "We staged changes behind a feature flag by region to measure impact without risking domestic flows.",
        "Transactional emails mirror checkout language so post-purchase anxiety drops.",
      ],
    },
    outcomes: {
      title: "Outcomes (directional)",
      paragraphs: [
        "Support tickets about surprise fees declined after estimates moved earlier in the path.",
        "Cart recovery emails referenced the same language for consistency.",
      ],
    },
    stack: ["WooCommerce checkout", "Regional shipping APIs", "Email templates"],
  },
  {
    slug: "north-co-cms-patterns",
    subtitle: "Repeatable case study layouts that don’t drift",
    period: "2024 · editorial system",
    engagement: "CMS patterns, component QA, editor guardrails",
    lede:
      "North & Co. publishes often; occasional updates shouldn’t break vertical rhythm or turn case studies into accidental landing pages. This work codified patterns—spacing, media ratios, and section order—so speed doesn’t erode craft.",
    context: {
      title: "Context",
      paragraphs: [
        "Editors were talented, not technical; the CMS had to reward good defaults and resist broken combinations.",
        "Video embeds and tall galleries were the main sources of layout bugs.",
      ],
    },
    constraints: {
      title: "Constraints",
      paragraphs: [
        "No shutdown of publishing during rollout—migrations had to be incremental.",
        "Accessibility couldn’t regress when new media types appeared.",
      ],
    },
    research: {
      title: "Research",
      paragraphs: [
        "We audited published pages for inconsistent spacing tokens and orphan headings.",
        "We watched editors build a case study and noted where they reached for workarounds (custom HTML, rogue breaks).",
      ],
    },
    approach: {
      title: "Approach",
      paragraphs: [
        "Pattern library ties components to design tokens; editors pick patterns, not raw spacing.",
        "Media components enforce aspect ratios and captions so galleries stay coherent on mobile.",
      ],
    },
    delivery: {
      title: "Delivery",
      paragraphs: [
        "Migration scripts normalized legacy pages into patterns where possible; edge cases got manual review.",
        "Short video walkthrough replaced a forty-page manual.",
      ],
    },
    outcomes: {
      title: "Outcomes (directional)",
      paragraphs: [
        "New case studies looked ‘on brand’ without design review becoming a bottleneck.",
        "Layout bugs reported by the team dropped after ratio-locked media components shipped.",
      ],
    },
    stack: ["Design tokens", "CMS components", "A11y checks in preview"],
  },
];

const bySlug = new Map(portfolioCaseStudies.map((c) => [c.slug, c]));

export function getCaseStudyBySlug(slug: string): PortfolioCaseStudy | undefined {
  return bySlug.get(slug);
}

export function getAllCaseStudySlugs(): string[] {
  return portfolioCaseStudies.map((c) => c.slug);
}
