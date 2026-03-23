import type { PortfolioPatch } from "@/data/locales/patchTypes";

const meridianDetails = {
  need: "Enterprise-Anmutung, schnelle Landingpages und sauberes Lead-Routing—ohne Plugin-Haufen oder langsame Builder.",
  built: [
    "Editorial Layouts an die Marke gebunden—WordPress oder vergleichbares CMS, wenn es passt",
    "Formulare für CRM-Export / Webhooks verdrahtet",
    "SEO- und Core-Web-Vitals-Baseline für bezahlten Traffic",
  ],
  impact: "Marketing kann Seiten ohne Dev pro Launch ausrollen; Templates bleiben schnell genug für Ads.",
};

const velvetDetails = {
  need: "Premium-Katalog online mit starker Mobile-Conversion—ohne generischen Theme-Look.",
  built: [
    "Maßgeschneiderte Shop-, Produkt- und Kollektions-Templates",
    "Versand, Steuern und Zahlungen auf ihre Märkte abgestimmt",
    "Lookbook-Blöcke + leichter Warenkorb für Speed",
  ],
  impact: "Luxus-Feeling vom Browse bis Checkout; das Team aktualisiert Produkte ohne Layout-Bruch.",
};

const northDetails = {
  need: "Prozess und Ergebnisse für RFPs zeigen—filterbare Arbeit, starke Visuals und ein Kontaktfluss, der qualifiziert.",
  built: [
    "Case Studies mit flexiblen Layouts + Medien ohne Drift",
    "Branchen-/Service-Filter, damit Interessenten relevante Arbeit finden",
    "Kontaktfelder, die Postfach-Rauschen reduzieren",
  ],
  impact: "Wöchentliche Case-Study-Updates; Leads kommen mit genug Kontext für Antwort am selben Tag.",
};

export const portfolioPatchesDe: Record<string, PortfolioPatch> = {
  "meridian-digital-credibility-first": {
    pitch:
      "Glaubwürdigkeit zuerst: Traffic wird zu qualifizierten Gesprächen, nicht zu Vanity-Pageviews.",
    sector: "B2B-Marketing-Agentur",
    imgAlt:
      "Meridian Digital — responsives Website-Mockup auf Desktop und Mobil, Layout für Lead-Generierung",
    highlights: ["Flexibles CMS", "Campaign-Landings", "CRM-taugliche Leads"],
    details: meridianDetails,
  },
  "velvet-row-editorial-commerce": {
    pitch:
      "WooCommerce-Shop, in dem Produktstory, Bildsprache und Checkout so durchdacht wirken wie die Marke.",
    sector: "Boutique-E-Commerce (Fashion)",
    imgAlt: "Velvet Row — Fashion-E-Commerce-Website-Mockup auf Monitor und Smartphone",
    highlights: ["WooCommerce", "Editorial-Layouts", "Mobile Checkout"],
    details: velvetDetails,
  },
  "north-co-portfolio-trust": {
    pitch:
      "Portfolio-lastige Site: Case Studies und Kontaktwege, die vor dem ersten Call Vertrauen gewinnen.",
    sector: "Kreativ- / Produktstudio",
    imgAlt:
      "North & Co. — Kreativstudio-Website-Mockup mit Desktop- und Mobile-Layouts",
    highlights: ["Case-Study-CMS", "Arbeitsfilter", "Qualifizierte Anfragen"],
    details: northDetails,
  },
  "meridian-digital-landing-velocity": {
    pitch:
      "Landing-System-Refresh: schnellere Experimente für Paid-Kampagnen mit geteilten Komponenten und QA-freundlichem Ablauf.",
    sector: "B2B-Marketing-Agentur",
    imgAlt:
      "Meridian Digital — responsives Website-Mockup auf Desktop und Mobil, Layout für Lead-Generierung",
    highlights: ["Flexibles CMS", "Campaign-Landings", "CRM-taugliche Leads"],
    details: meridianDetails,
  },
  "velvet-row-seasonal-launch": {
    pitch:
      "Saisonaler Drop: Editorial-Grids, Lookbook-Blöcke und Checkout für Mobile-First-Traffic optimiert.",
    sector: "Boutique-E-Commerce (Fashion)",
    imgAlt: "Velvet Row — Fashion-E-Commerce-Website-Mockup auf Monitor und Smartphone",
    highlights: ["WooCommerce", "Editorial-Layouts", "Mobile Checkout"],
    details: velvetDetails,
  },
  "north-co-work-index": {
    pitch:
      "Arbeitsindex + Filter: Interessenten finden relevante Case Studies, bevor sie das Kontaktformular anfassen.",
    sector: "Kreativ- / Produktstudio",
    imgAlt:
      "North & Co. — Kreativstudio-Website-Mockup mit Desktop- und Mobile-Layouts",
    highlights: ["Case-Study-CMS", "Arbeitsfilter", "Qualifizierte Anfragen"],
    details: northDetails,
  },
  "meridian-digital-lead-routing": {
    pitch:
      "Lead-Routing-Upgrade: Formulare, Thank-you-Pfade und CRM-Hooks halten Sales in einer Pipeline.",
    sector: "B2B-Marketing-Agentur",
    imgAlt:
      "Meridian Digital — responsives Website-Mockup auf Desktop und Mobil, Layout für Lead-Generierung",
    highlights: ["Flexibles CMS", "Campaign-Landings", "CRM-taugliche Leads"],
    details: meridianDetails,
  },
  "velvet-row-international-checkout": {
    pitch:
      "Internationaler Versand-UX: Klarheit im Warenkorb, weniger abgebrochene Checkouts, gleiche Marken-Polish.",
    sector: "Boutique-E-Commerce (Fashion)",
    imgAlt: "Velvet Row — Fashion-E-Commerce-Website-Mockup auf Monitor und Smartphone",
    highlights: ["WooCommerce", "Editorial-Layouts", "Mobile Checkout"],
    details: velvetDetails,
  },
  "north-co-cms-patterns": {
    pitch:
      "Case-Study-CMS-Patterns: wiederholbare Layouts, damit das Team neue Arbeit ohne Layout-Drift ausliefert.",
    sector: "Kreativ- / Produktstudio",
    imgAlt:
      "North & Co. — Kreativstudio-Website-Mockup mit Desktop- und Mobile-Layouts",
    highlights: ["Case-Study-CMS", "Arbeitsfilter", "Qualifizierte Anfragen"],
    details: northDetails,
  },
};
