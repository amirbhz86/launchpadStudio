import type { PortfolioPatch } from "@/data/locales/patchTypes";

const m = {
  need: "Finition enterprise, landings rapides et routage propre des leads—sans pile de plugins ni builders lents.",
  built: [
    "Layouts éditoriaux alignés à la marque—WordPress ou CMS comparable",
    "Formulaires branchés export CRM / webhooks",
    "Base SEO et Core Web Vitals pour trafic payant",
  ],
  impact: "Le marketing publie sans dev à chaque lancement ; les gabarits restent assez rapides pour les ads.",
};

const v = {
  need: "Catalogue premium en ligne avec forte conversion mobile—sans look de thème générique.",
  built: [
    "Templates boutique, produit et collection sur mesure",
    "Livraison, taxes et paiements adaptés à leurs marchés",
    "Blocs lookbook + panier léger pour la vitesse",
  ],
  impact: "Ressenti luxe du browse au checkout ; l’équipe met à jour sans casser les layouts.",
};

const n = {
  need: "Montrer processus et résultats pour les RFP—travail filtrable, visuels forts et contact qui qualifie.",
  built: [
    "Études de cas avec layouts flexibles + médias stables",
    "Filtres industrie / service pour trouver le bon travail",
    "Champs contact qui réduisent le bruit dans la boîte mail",
  ],
  impact: "Mises à jour hebdo des cas ; les leads arrivent avec assez de contexte pour répondre le jour même.",
};

export const portfolioPatchesFr: Record<string, PortfolioPatch> = {
  "meridian-digital-credibility-first": {
    pitch:
      "Site marketing crédibilité d’abord : le trafic devient des conversations qualifiées, pas des pages vanity.",
    sector: "Agence marketing B2B",
    imgAlt:
      "Meridian Digital — mockup site responsive bureau et mobile, layout génération de leads",
    highlights: ["CMS flexible", "Landings campagne", "Leads prêts pour le CRM"],
    details: m,
  },
  "velvet-row-editorial-commerce": {
    pitch:
      "Boutique WooCommerce où récit produit, visuels et checkout sont aussi soignés que la marque.",
    sector: "E-commerce boutique (mode)",
    imgAlt: "Velvet Row — mockup e-commerce mode écran et smartphone",
    highlights: ["WooCommerce", "Layouts éditoriaux", "Checkout mobile"],
    details: v,
  },
  "north-co-portfolio-trust": {
    pitch:
      "Site portfolio-first : études de cas et parcours contact qui gagnent la confiance avant le premier appel.",
    sector: "Studio créatif / produit",
    imgAlt: "North & Co. — mockup studio créatif responsive",
    highlights: ["CMS études de cas", "Filtres travaux", "Demandes qualifiées"],
    details: n,
  },
  "meridian-digital-landing-velocity": {
    pitch:
      "Rafraîchissement du système de landings : expérimentations plus rapides pour le paid avec composants partagés et QA claire.",
    sector: "Agence marketing B2B",
    imgAlt:
      "Meridian Digital — mockup site responsive bureau et mobile, layout génération de leads",
    highlights: ["CMS flexible", "Landings campagne", "Leads prêts pour le CRM"],
    details: m,
  },
  "velvet-row-seasonal-launch": {
    pitch:
      "Lancement saisonnier : grilles éditoriales, blocs lookbook et checkout optimisé pour le trafic mobile-first.",
    sector: "E-commerce boutique (mode)",
    imgAlt: "Velvet Row — mockup e-commerce mode écran et smartphone",
    highlights: ["WooCommerce", "Layouts éditoriaux", "Checkout mobile"],
    details: v,
  },
  "north-co-work-index": {
    pitch:
      "Index travaux + filtres : les prospects trouvent des cas pertinents avant le formulaire contact.",
    sector: "Studio créatif / produit",
    imgAlt: "North & Co. — mockup studio créatif responsive",
    highlights: ["CMS études de cas", "Filtres travaux", "Demandes qualifiées"],
    details: n,
  },
  "meridian-digital-lead-routing": {
    pitch:
      "Upgrade routage leads : formulaires, pages merci et hooks CRM gardent les ventes dans un seul pipeline.",
    sector: "Agence marketing B2B",
    imgAlt:
      "Meridian Digital — mockup site responsive bureau et mobile, layout génération de leads",
    highlights: ["CMS flexible", "Landings campagne", "Leads prêts pour le CRM"],
    details: m,
  },
  "velvet-row-international-checkout": {
    pitch:
      "UX livraison internationale : clarté au panier, moins d’abandons, même finition de marque.",
    sector: "E-commerce boutique (mode)",
    imgAlt: "Velvet Row — mockup e-commerce mode écran et smartphone",
    highlights: ["WooCommerce", "Layouts éditoriaux", "Checkout mobile"],
    details: v,
  },
  "north-co-cms-patterns": {
    pitch:
      "Patterns CMS études de cas : layouts répétables pour livrer du nouveau travail sans dérive de mise en page.",
    sector: "Studio créatif / produit",
    imgAlt: "North & Co. — mockup studio créatif responsive",
    highlights: ["CMS études de cas", "Filtres travaux", "Demandes qualifiées"],
    details: n,
  },
};
