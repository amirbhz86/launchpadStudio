import type { BlogPatch } from "@/data/locales/patchTypes";
import { bodiesDe } from "./deBodies";

const metaDe: Record<string, Omit<BlogPatch, "paragraphs" | "mediaTop" | "mediaBottom">> = {
  "your-website-quiet-salesperson-smb": {
    title: "Ihre Website ist Ihr leisester Verkäufer—trainieren Sie sie wie einen",
    seoTitle: "Website-Strategie für KMU: Besuche in Vertrauen und Umsatz verwandeln",
    excerpt:
      "Für Inhaber: eine schnelle, klare Website beantwortet Einwände rund um die Uhr, stützt SEO und bringt Anrufe und Formulare. Ein Coaching-Rahmen für Botschaft, Beweise und eine klare nächste Aktion pro Seite.",
    keywords: [
      "Website-Strategie KMU",
      "Conversion-Tipps Website",
      "lokale Online-Präsenz",
      "SEO-Grundlagen KMU",
      "ROI Hochleistungs-Website",
    ],
    category: "Business & Wachstum",
    tags: ["KMU", "Strategie", "Conversions", "SEO"],
    readTime: "8 Min. Lesezeit",
  },
  "startup-website-trust-before-features": {
    title: "Startup-Websites: Vertrauen gewinnen, bevor Sie jedes Feature liefern",
    seoTitle: "Startup-Webpräsenz: MVP-Site für Investor- und Kundenvertrauen",
    excerpt:
      "Gründer: Investoren und erste Kunden googeln Sie in Minuten. Eine glaubwürdige, schnelle Website klärt Positionierung, reduziert wahrgenommenes Teamrisiko und stützt SEO—ohne auf v3 des Produkts zu warten.",
    keywords: [
      "Startup-Website Best Practices",
      "MVP-Landingpage",
      "Gründer-Glaubwürdigkeit online",
      "Startup SEO Grundlagen",
      "Pitch-Deck und Website",
    ],
    category: "Startups",
    tags: ["Startups", "Gründer", "Vertrauen", "Positionierung"],
    readTime: "7 Min. Lesezeit",
  },
  "creators-own-platform-beyond-social-feed": {
    title: "Creator: Warum Sie eine Website brauchen—nicht nur einen Feed",
    seoTitle: "Creator-Strategie: eigene Website, E-Mail-Liste und Marken-SEO",
    excerpt:
      "Influencer und Creator reduzieren Plattformrisiko mit einem schnellen Hub unter Ihrer Kontrolle: Portfolio, Presse, Partnerschaften und E-Mail-Capture. Algorithmen ändern sich; Domain und Liste wachsen weiter.",
    keywords: [
      "Creator-Website",
      "Influencer Personal Branding",
      "E-Mail-Liste Creator",
      "Plattformrisiko Social Media",
      "Creator SEO",
    ],
    category: "Creator & Influencer",
    tags: ["Creator", "Influencer", "Marke", "E-Mail-Marketing"],
    readTime: "8 Min. Lesezeit",
  },
  "seo-priorities-without-dedicated-seo-team": {
    title: "SEO-Prioritäten ohne internes SEO-Team",
    seoTitle: "Business-SEO-Roadmap: Was zuerst fixen ohne Vollzeit-SEO",
    excerpt:
      "Inhaber und Marketing: Fokus auf technische Gesundheit, klare Seitenintention, hilfreiche Inhalte und lokale Signale—vor Trends. Ein praktisches 90-Tage-Tempo schlägt sporadische Blogposts, die niemand liest.",
    keywords: [
      "SEO-Prioritäten Business",
      "SEO-Roadmap KMU",
      "On-Page-SEO-Checkliste",
      "technisches SEO Grundlagen",
      "Content-Strategie KMU",
    ],
    category: "SEO & Sichtbarkeit",
    tags: ["SEO", "Marketing", "KMU", "Content-Strategie"],
    readTime: "9 Min. Lesezeit",
  },
  "high-performance-site-roi-service-business": {
    title: "Hochleistungs-Websites und ROI für Dienstleister",
    seoTitle: "Website-ROI Dienstleister: Geschwindigkeit, Klarheit und gebuchte Termine",
    excerpt:
      "Handwerker, Kliniken, Agenturen und Berater gewinnen, wenn Seiten schnell laden, mobile CTAs funktionieren und lokales SEO zu echten Einsatzgebieten passt. So denken Sie Payback wie ein Coach.",
    keywords: [
      "Website Dienstleistungsbetrieb",
      "Servicegebiet-Seiten lokales SEO",
      "Website-Geschwindigkeit Conversion",
      "Leadgenerierung Handwerk",
      "Terminbuchung UX",
    ],
    category: "Business & Wachstum",
    tags: ["Dienstleistung", "Lokales SEO", "Performance", "Leads"],
    readTime: "8 Min. Lesezeit",
  },
  "founder-focus-self-serve-web-experience": {
    title: "Gründer-Fokus: Self-Service-Web, das Ihren Kalender schützt",
    seoTitle: "Startup-Operations: weniger Support mit FAQs, Docs und smarter UX",
    excerpt:
      "Skalieren Sie sich selbst: FAQs, Onboarding-Mails und eine schnelle Marketing-Site reduzieren wiederholte Fragen, damit Sie bauen können. Gute UX ist Gründer-Retention—nicht nur Kundenluxus.",
    keywords: [
      "Startup-Support skalieren",
      "Self-Service-Onboarding",
      "Gründer-Produktivität",
      "SaaS-Marketing-Site",
      "Support-Tickets reduzieren",
    ],
    category: "Startups",
    tags: ["Startups", "Operations", "UX", "Gründer"],
    readTime: "7 Min. Lesezeit",
  },
  "influencer-media-kit-pricing-that-closes": {
    title: "Influencer: Media Kits und Preisseiten, die Marken-Deals abschließen",
    seoTitle: "Influencer-Preisliste & Media Kit: Seiten, die Partnerschaften gewinnen",
    excerpt:
      "Brand-Manager vergleichen Creator in Tabellen. Eine polierte, schnelle Seite mit Audience-Nachweis, Deliverables und klaren Bedingungen beschleunigt Ja/Nein und hebt Ihren effektiven Satz.",
    keywords: [
      "Influencer Media Kit",
      "Creator Preisliste",
      "Marken-Partnerschaft Website",
      "Sponsoring Preisseite",
      "Influencer Business Development",
    ],
    category: "Creator & Influencer",
    tags: ["Influencer", "Partnerschaften", "Pricing", "Sales"],
    readTime: "8 Min. Lesezeit",
  },
  "one-goal-per-page-conversion-discipline": {
    title: "Ein Ziel pro Seite: die Conversion-Disziplin, die Growth-Teams vergessen",
    seoTitle: "CRO-Grundlagen KMU: ein primärer CTA pro Seite, klarerer Umsatz",
    excerpt:
      "Wie ein Coach eine Gewohnheit verlangt, funktionieren Landingpages: konkurrierende CTAs entfernen, Ad-Intent mit Copy matchen und Abschlussquote messen—vor allem auf dem Handy.",
    keywords: [
      "Conversion-Optimierung",
      "Landingpage Best Practices",
      "ein CTA Marketing",
      "Mobile Conversion UX",
      "Anzeige Landingpage Match",
    ],
    category: "Business & Wachstum",
    tags: ["CRO", "Marketing", "KMU", "Analytics"],
    readTime: "7 Min. Lesezeit",
  },
  "personal-brand-site-for-leaders-and-experts": {
    title: "Personal-Brand-Sites für Führungskräfte, Expert:innen und Berater:innen",
    seoTitle: "Executive-Personal-Website: Autorität, Speaking und Suchsichtbarkeit",
    excerpt:
      "Führungskräfte und Advisor:innen: eine fokussierte Site erklärt, wie Sie helfen, stützt Speaking-SEO und leitet Anfragen—ohne die Firmen-Homepage Wort für Wort zu duplizieren.",
    keywords: [
      "Personal Brand Website",
      "Executive Online-Präsenz",
      "Berater Website SEO",
      "Speaking Engagements Website",
      "Thought-Leadership-Site",
    ],
    category: "Business & Wachstum",
    tags: ["Personal Brand", "Leadership", "Beratung", "SEO"],
    readTime: "7 Min. Lesezeit",
  },
  "online-trust-speed-clarity-compound": {
    title: "Wie Geschwindigkeit, Klarheit und Beweise Ihre Online-Reputation verstärken",
    seoTitle: "Online-Reputation Business: Website-Speed, Klarheit und Reviews, die konvertieren",
    excerpt:
      "Branchenübergreifend ist Vertrauen der Engpass. Schnelle Sites, klare Sprache und sichtbare Beweise senken wahrgenommenes Risiko, damit SEO und Ads sich auszahlen. Ein Coach-Blick auf die Verstärkungsschleife.",
    keywords: [
      "Online-Reputation Unternehmen",
      "Vertrauenssignale Website",
      "Kundenbewertungen SEO",
      "Markenglaubwürdigkeit Website",
      "E-E-A-T lokales Business",
    ],
    category: "Business & Wachstum",
    tags: ["Vertrauen", "Reputation", "SEO", "Reviews"],
    readTime: "8 Min. Lesezeit",
  },
  "why-core-web-vitals-matter": {
    title: "Warum Core Web Vitals 2025 noch zählen",
    seoTitle: "Core Web Vitals 2025: Warum Speed weiter SEO und Conversions treibt",
    excerpt:
      "Core Web Vitals (LCP, INP, CLS) verbinden echte Nutzererfahrung mit SEO und Umsatz. So priorisieren Sie ohne markenstarke Designs zu opfern.",
    keywords: [
      "Core Web Vitals",
      "LCP INP CLS",
      "Page Experience",
      "Web Performance SEO",
      "Site Speed",
      "Google Ranking Faktoren",
    ],
    category: "Performance & SEO",
    tags: ["Core Web Vitals", "Performance", "SEO", "UX"],
    readTime: "9 Min. Lesezeit",
  },
  "woocommerce-without-the-bloat": {
    title: "WooCommerce ohne Plugin-Ballast",
    seoTitle: "WooCommerce Performance: skalieren ohne aufgeblähte Plugins",
    excerpt:
      "WooCommerce-Shops werden oft langsamer mit wachsendem Katalog und Plugins. So bleibt Checkout schnell, Datenbanken gesund und Wartung planbar.",
    keywords: [
      "WooCommerce Performance",
      "WordPress E-Commerce Geschwindigkeit",
      "Plugin-Ballast reduzieren",
      "WooCommerce Caching",
      "Core Web Vitals Onlineshop",
    ],
    category: "E‑Commerce",
    tags: ["WooCommerce", "WordPress", "Performance", "E‑Commerce"],
    readTime: "8 Min. Lesezeit",
  },
  "handoff-that-sticks": {
    title: "Übergabe-Dokumentation, die Ihr Team wirklich nutzt",
    seoTitle: "Website-Handoff-Docs, die Redakteur:innen tatsächlich öffnen",
    excerpt:
      "Launch gelingt, wenn Marketing und Redaktion in der Folgewoche souverän publizieren. Praktische Übergabe schlägt ein PDF, das niemand öffnet.",
    keywords: [
      "Website Handoff Dokumentation",
      "CMS-Schulung",
      "Content-Team Onboarding",
      "WordPress Dokumentation",
      "Entwickler-Kunden-Übergabe",
    ],
    category: "Prozess",
    tags: ["Handoff", "CMS", "Dokumentation", "Operations"],
    readTime: "7 Min. Lesezeit",
  },
  "security-basics-for-wordpress-teams": {
    title: "Security-Grundlagen, die jedes WordPress-Team überprüfen sollte",
    seoTitle: "WordPress-Security-Checkliste für Teams (Grundlagen 2025)",
    excerpt:
      "Die meisten WordPress-Vorfälle sind automatisiert, kein Film. Starker Zugang, Updates und gutes Hosting nehmen Sie von der Easy-Target-Liste.",
    keywords: [
      "WordPress Sicherheit",
      "WordPress Hardening",
      "Managed WordPress Hosting",
      "Least Privilege Nutzer",
      "WordPress Updates",
    ],
    category: "Sicherheit",
    tags: ["WordPress", "Sicherheit", "Hosting", "Operations"],
    readTime: "8 Min. Lesezeit",
  },
};

export const blogPatchesDe: Record<string, BlogPatch> = Object.fromEntries(
  Object.entries(metaDe).map(([slug, patch]) => {
    const body = bodiesDe[slug];
    if (!body) {
      throw new Error(`Missing German body for blog slug: ${slug}`);
    }
    return [slug, { ...patch, ...body }];
  }),
) as Record<string, BlogPatch>;
