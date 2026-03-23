import type { CaseStudyPatch } from "@/data/locales/patchTypes";

const tM: CaseStudyPatch = {
  context: { title: "Contexte" },
  constraints: { title: "Contraintes" },
  research: { title: "Ce que nous avons regardé en premier" },
  approach: { title: "Approche" },
  delivery: { title: "Notes de livraison" },
  outcomes: { title: "Résultats (indicatifs)" },
};

const tS: CaseStudyPatch = {
  context: { title: "Contexte" },
  constraints: { title: "Contraintes" },
  research: { title: "Recherche" },
  approach: { title: "Approche" },
  delivery: { title: "Livraison" },
  outcomes: { title: "Résultats (indicatifs)" },
};

export const caseStudyPatchesFr: Record<string, CaseStudyPatch> = {
  "meridian-digital-credibility-first": {
    subtitle: "Site marketing B2B où le trafic payant doit mériter une conversation",
    period: "2024 · discovery → lancement",
    engagement: "Direction produit, architecture de l’information, systèmes front-end",
    lede:
      "L’ancien site de Meridian paraissait crédible dans un deck PDF statique, mais cédait sous la vélocité des campagnes : chaque lancement nécessitait un développeur dans la boucle, et les données de formulaires vivaient dans les boîtes mail plutôt que dans le CRM. Le mandat semblait simple—paraître enterprise, livrer vite, mesurer l’essentiel.",
    ...tM,
  },
  "velvet-row-editorial-commerce": {
    subtitle: "E-commerce mode où le récit produit porte la vente",
    period: "2023 · refonte + continu",
    engagement: "UX, architecture WooCommerce, tuning performance",
    lede:
      "Velvet Row vend une esthétique high-touch en ligne. Le risque n’était pas « WooCommerce peut-il encaisser ? »—mais si la vitrine se sentait éditoriale sur mobile, où commencent la plupart des sessions et où beaucoup de paniers meurent discrètement.",
    ...tS,
  },
  "north-co-portfolio-trust": {
    subtitle: "Site studio créatif pour la saison des RFP, pas pour des listes de prix vains",
    period: "2023 · système portfolio",
    engagement: "IA, templates d’études de cas, logique de filtres",
    lede:
      "North & Co. gagne quand les prospects se servent eux-mêmes en preuves : la bonne étude de cas, le bon secteur, le bon récit de process—avant l’invitation calendrier. L’ancien portfolio lisait comme une archive de blog : beaux projets, mauvaise structure pour les décideurs qui scannent vite.",
    ...tS,
  },
  "meridian-digital-landing-velocity": {
    subtitle: "Landings de campagne comme système—pas des one-offs",
    period: "2024 · phase d’accélération",
    engagement: "Bibliothèque de composants, checklist QA, passation paid media",
    lede:
      "Après le lancement du site cœur, l’équipe paid de Meridian avait besoin de vélocité : nouvelles offres chaque semaine, discipline UTM stricte et zéro régression quand un titre change. Le goulot n’était pas le copy—ce sont des layouts inconsistants qui cassaient le mobile et biaisaient les comparaisons de conversion.",
    ...tS,
  },
  "velvet-row-seasonal-launch": {
    subtitle: "Drops de collection avec rythme éditorial et checkout stable",
    period: "2024 · programme saisonnier",
    engagement: "Templates merchandising, blocs landing campagne",
    lede:
      "Les calendriers mode n’attendent pas l’ingénierie. Velvet Row avait besoin de lancements qui se sentent événementiels—hero, récit, lookbook, grille boutique—sans risquer des régressions checkout quand le marketing allait vite.",
    ...tS,
  },
  "north-co-work-index": {
    subtitle: "Un index de travaux que les prospects peuvent vraiment filtrer",
    period: "2024 · discovery",
    engagement: "Taxonomie, UX filtres, migration contenu",
    lede:
      "Le catalogue de North & Co. a dépassé les catégories simples. Les prospects filtraient par industrie et voyaient des écrans vides, ou trouvaient de beaux projets non pertinents. L’index avait besoin de métadonnées honnêtes et d’états vides résilients—pas plus de tags pour les tags.",
    ...tS,
  },
  "meridian-digital-lead-routing": {
    subtitle: "Formulaires, pages merci et discipline CRM",
    period: "2024 · phase intégrations",
    engagement: "Design formulaires, mapping CRM, hygiène analytics",
    lede:
      "Les formulaires de Meridian fonctionnaient—jusqu’à ce que non : leads dupliqués, IDs campagne manquantes et pages merci qui cassaient le tracking sur parcours assistés. Cette phase a resserré la plomberie pour que le marketing fasse confiance aux chiffres du pipeline.",
    ...tS,
  },
  "velvet-row-international-checkout": {
    subtitle: "Clarté panier pour acheteurs internationaux",
    period: "2024 · itération checkout",
    engagement: "UX panier, copy livraison, états d’erreur",
    lede:
      "Les acheteurs internationaux hésitaient à la dernière étape : droits de douane, fenêtres de livraison et coûts de retour pas assez visibles tôt. Le correctif n’était pas un nouveau prestataire de paiement—mais l’architecture d’information dans le panier et une gestion d’erreurs plus calme.",
    ...tS,
  },
  "north-co-cms-patterns": {
    subtitle: "Layouts d’études de cas répétables sans dérive",
    period: "2024 · affinage CMS",
    engagement: "Bibliothèque de blocs, guides rédaction, QA",
    lede:
      "North & Co. publie souvent ; les mises à jour occasionnelles ne doivent pas casser le rythme vertical ni transformer les cas en landings accidentelles. Ce travail a codifié des patterns—espacement, ratios média, ordre des sections—pour que la vitesse ne mange pas le craft.",
    ...tS,
  },
};
