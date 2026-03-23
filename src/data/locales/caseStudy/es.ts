import type { CaseStudyPatch } from "@/data/locales/patchTypes";

const tM: CaseStudyPatch = {
  context: { title: "Contexto" },
  constraints: { title: "Restricciones" },
  research: { title: "Lo que miramos primero" },
  approach: { title: "Enfoque" },
  delivery: { title: "Notas de entrega" },
  outcomes: { title: "Resultados (orientativos)" },
};

const tS: CaseStudyPatch = {
  context: { title: "Contexto" },
  constraints: { title: "Restricciones" },
  research: { title: "Investigación" },
  approach: { title: "Enfoque" },
  delivery: { title: "Entrega" },
  outcomes: { title: "Resultados (orientativos)" },
};

export const caseStudyPatchesEs: Record<string, CaseStudyPatch> = {
  "meridian-digital-credibility-first": {
    subtitle: "Sitio B2B donde el tráfico pago debe ganarse una conversación",
    period: "2024 · descubrimiento → lanzamiento",
    engagement: "Dirección de producto, arquitectura de información, sistemas front-end",
    lede:
      "El sitio antiguo de Meridian parecía creíble en un PDF estático, pero fallaba con la velocidad de campaña: cada lanzamiento necesitaba a un desarrollador en el circuito, y los datos de formularios vivían en bandejas en lugar del CRM. El mandato sonaba simple—parecer enterprise, lanzar rápido, medir lo que importa.",
    ...tM,
  },
  "velvet-row-editorial-commerce": {
    subtitle: "E-commerce de moda donde la historia del producto cierra la venta",
    period: "2023 · rediseño + continuo",
    engagement: "UX, arquitectura WooCommerce, ajuste de rendimiento",
    lede:
      "Velvet Row vende una estética high-touch online. El riesgo no era “¿WooCommerce puede cobrar?”—sino si la tienda se sentía editorial en móvil, donde empiezan la mayoría de sesiones y mueren muchos carritos en silencio.",
    ...tS,
  },
  "north-co-portfolio-trust": {
    subtitle: "Sitio de estudio creativo para temporada de RFP, no para listas de premios vanidosos",
    period: "2023 · sistema de portfolio",
    engagement: "IA, plantillas de casos, lógica de filtros",
    lede:
      "North & Co. gana cuando los prospectos se sirven solos la prueba: el caso correcto, el sector correcto, la historia de proceso correcta—antes de la invitación al calendario. Su portfolio viejo leía como archivo de blog: grandes proyectos, estructura equivocada para quien decide rápido.",
    ...tS,
  },
  "meridian-digital-landing-velocity": {
    subtitle: "Landings de campaña como sistema—no piezas únicas",
    period: "2024 · fase de aceleración",
    engagement: "Biblioteca de componentes, checklist QA, entrega a paid media",
    lede:
      "Tras el lanzamiento del sitio core, el equipo paid de Meridian necesitaba velocidad: ofertas nuevas semanalmente, disciplina UTM estricta y cero regresiones al cambiar un titular. El cuello de botella no era el copy—eran layouts inconsistentes que rompían móvil y sesgaban comparaciones de conversión.",
    ...tS,
  },
  "velvet-row-seasonal-launch": {
    subtitle: "Drops de colección con ritmo editorial y checkout estable",
    period: "2024 · programa estacional",
    engagement: "Plantillas de merchandising, bloques de landing de campaña",
    lede:
      "Los calendarios de moda no esperan a ingeniería. Velvet Row necesitaba lanzamientos que se sintieran como evento—hero, historia, lookbook, grid de tienda—sin arriesgar regresiones de checkout cuando marketing se movía rápido.",
    ...tS,
  },
  "north-co-work-index": {
    subtitle: "Un índice de trabajo que los prospectos pueden filtrar de verdad",
    period: "2024 · descubrimiento",
    engagement: "Taxonomía, UX de filtros, migración de contenido",
    lede:
      "El catálogo de North & Co. superó categorías simples. Los prospectos filtraban por industria y veían pantallas vacías, o encontraban proyectos hermosos pero irrelevantes. El índice necesitaba metadatos honestos y estados vacíos resilientes—no más etiquetas por las etiquetas.",
    ...tS,
  },
  "meridian-digital-lead-routing": {
    subtitle: "Formularios, rutas de gracias y disciplina CRM",
    period: "2024 · fase de integraciones",
    engagement: "Diseño de formularios, mapeo CRM, higiene analítica",
    lede:
      "Los formularios de Meridian funcionaban—hasta que no: leads duplicados, IDs de campaña faltantes y páginas de gracias que rompían el tracking en journeys asistidos. Esta fase apretó la tubería para que marketing confíe en los números del embudo.",
    ...tS,
  },
  "velvet-row-international-checkout": {
    subtitle: "Claridad en el carrito para compradores internacionales",
    period: "2024 · iteración de checkout",
    engagement: "UX de carrito, copy de envío, estados de error",
    lede:
      "Los compradores internacionales dudaban en el último paso: aranceles, ventanas de entrega y costes de devolución no eran visibles lo bastante pronto. El arreglo no era un nuevo proveedor de pago—sino arquitectura de información en el carrito y manejo de errores más calmado.",
    ...tS,
  },
  "north-co-cms-patterns": {
    subtitle: "Layouts de caso de estudio repetibles que no derivan",
    period: "2024 · refinamiento CMS",
    engagement: "Biblioteca de bloques, guías editoriales, QA",
    lede:
      "North & Co. publica a menudo; las actualizaciones ocasionales no deberían romper el ritmo vertical ni convertir casos en landings accidentales. Este trabajo codificó patrones—espaciado, ratios de media, orden de secciones—para que la velocidad no coma el oficio.",
    ...tS,
  },
};
