import type { CaseStudyPatch } from "@/data/locales/patchTypes";

const tM: CaseStudyPatch = {
  context: { title: "Kontext" },
  constraints: { title: "Randbedingungen" },
  research: { title: "Woran wir zuerst geschaut haben" },
  approach: { title: "Vorgehen" },
  delivery: { title: "Liefernotizen" },
  outcomes: { title: "Ergebnisse (Richtung)" },
};

const tS: CaseStudyPatch = {
  context: { title: "Kontext" },
  constraints: { title: "Randbedingungen" },
  research: { title: "Recherche" },
  approach: { title: "Vorgehen" },
  delivery: { title: "Umsetzung" },
  outcomes: { title: "Ergebnisse (Richtung)" },
};

export const caseStudyPatchesDe: Record<string, CaseStudyPatch> = {
  "meridian-digital-credibility-first": {
    subtitle: "B2B-Marketing-Site, bei der bezahlter Traffic sich ein Gespräch verdienen muss",
    period: "2024 · Discovery → Launch",
    engagement: "Produktrichtung, Informationsarchitektur, Front-End-Systeme",
    lede:
      "Meridians alte Site wirkte in einer statischen PDF-Präsentation glaubwürdig, brach aber unter Kampagnentempo ein: Jeder Launch brauchte einen Entwickler in der Schleife, und Formulardaten landeten in Postfächern statt im CRM. Der Auftrag klang einfach—enterprise aussehen, schnell liefern, das Wichtige messen.",
    ...tM,
  },
  "velvet-row-editorial-commerce": {
    subtitle: "Fashion-E-Commerce, in dem die Produktstory den Verkauf trägt",
    period: "2023 · Redesign + laufend",
    engagement: "UX, WooCommerce-Architektur, Performance-Tuning",
    lede:
      "Velvet Row verkauft online eine High-Touch-Ästhetik. Das Risiko war nicht „kann WooCommerce checkout?“—sondern ob sich der Store auf dem Handy editorial anfühlt, wo die meisten Sessions starten und die meisten Warenkörbe leise sterben.",
    ...tS,
  },
  "north-co-portfolio-trust": {
    subtitle: "Kreativstudio-Site für die RFP-Saison, nicht für Vanity-Awards-Listen",
    period: "2023 · Portfolio-System",
    engagement: "IA, Case-Study-Templates, Filterlogik",
    lede:
      "North & Co. gewinnt Aufträge, wenn Interessenten Beweise selbst bedienen können: der richtige Case, die richtige Branche, die richtige Prozessstory—vor dem Kalenderinvite. Ihr altes Portfolio wirkte wie ein Blog-Archiv: tolle Projekte, falsche Struktur für schnell scannende Entscheider.",
    ...tS,
  },
  "meridian-digital-landing-velocity": {
    subtitle: "Kampagnen-Landings als System—keine Einzelstücke",
    period: "2024 · Beschleunigungsphase",
    engagement: "Komponentenbibliothek, QA-Checkliste, Paid-Media-Übergabe",
    lede:
      "Nach dem Launch der Kernsite brauchte Meridians Paid-Team Tempo: wöchentlich neue Angebote, strikte UTM-Disziplin und null Regressionen, wenn eine Headline wechselt. Der Engpass war nicht der Copy—es waren inkonsistente Layouts, die Mobile brachen und Conversion-Vergleiche verzerrten.",
    ...tS,
  },
  "velvet-row-seasonal-launch": {
    subtitle: "Collection-Drops mit editorialer Rhythmik und stabilem Checkout",
    period: "2024 · Saisonprogramm",
    engagement: "Merchandising-Templates, Kampagnen-Landing-Blöcke",
    lede:
      "Fashion-Kalender warten nicht auf Engineering. Velvet Row brauchte Kollektions-Launches, die sich event-getrieben anfühlen—Hero, Story, Lookbook, Shop-Grid—ohne Checkout-Regressionen, wenn Marketing schnell bewegt.",
    ...tS,
  },
  "north-co-work-index": {
    subtitle: "Ein Arbeitsindex, den Interessenten wirklich filtern können",
    period: "2024 · Discovery",
    engagement: "Taxonomie, Filter-UX, Content-Migration",
    lede:
      "North & Co.s Katalog wuchs über einfache Kategorien hinaus. Interessenten filterten nach Branche und sahen leere Screens, oder fanden schöne Projekte ohne Relevanz. Der Index brauchte ehrliche Metadaten und robuste Leerzustände—nicht mehr Tags um der Tags willen.",
    ...tS,
  },
  "meridian-digital-lead-routing": {
    subtitle: "Formulare, Thank-you-Pfade und CRM-Disziplin",
    period: "2024 · Integrationsphase",
    engagement: "Formular-Design, CRM-Mapping, Analytics-Hygiene",
    lede:
      "Meridians Formulare funktionierten—bis sie es nicht taten: doppelte Leads, fehlende Kampagnen-IDs und Thank-you-Seiten, die assisted Journeys im Conversion-Tracking brachen. Diese Phase straffte die Rohrleitung, damit Marketing den Pipeline-Zahlen vertrauen kann.",
    ...tS,
  },
  "velvet-row-international-checkout": {
    subtitle: "Klarheit im Warenkorb für grenzüberschreifende Käufer",
    period: "2024 · Checkout-Iteration",
    engagement: "Cart-UX, Versand-Copy, Fehlerzustände",
    lede:
      "Internationale Käufer zögerten am letzten Schritt: Zölle, Lieferfenster und Rücksendekosten waren nicht früh genug sichtbar. Der Fix war kein neuer Payment-Provider—sondern Informationsarchitektur im Warenkorb und ruhigere Fehlerbehandlung.",
    ...tS,
  },
  "north-co-cms-patterns": {
    subtitle: "Wiederholbare Case-Study-Layouts ohne Drift",
    period: "2024 · CMS-Veredelung",
    engagement: "Block-Bibliothek, Redaktionsrichtlinien, QA",
    lede:
      "North & Co. publiziert oft; gelegentliche Updates sollten vertikalen Rhythmus nicht brechen und Case Studies nicht zu versehentlichen Landings machen. Diese Arbeit kodifizierte Patterns—Abstände, Medienverhältnisse, Abschnittsreihenfolge—damit Speed nicht Craft frisst.",
    ...tS,
  },
};
