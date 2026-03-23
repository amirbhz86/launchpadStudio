import type { PortfolioPatch } from "@/data/locales/patchTypes";

const m = {
  need: "Aspecto enterprise, landings rápidos y enrutamiento limpio de leads—sin montón de plugins ni builders lentos.",
  built: [
    "Layouts editoriales atados a la marca—WordPress o CMS comparable",
    "Formularios conectados a export CRM / webhooks",
    "Base SEO y Core Web Vitals para tráfico de pago",
  ],
  impact: "Marketing publica páginas sin dev en cada lanzamiento; las plantillas siguen siendo rápidas para anuncios.",
};

const v = {
  need: "Catálogo premium online con conversión móvil fuerte—sin look de tema genérico.",
  built: [
    "Plantillas a medida de tienda, producto y colección",
    "Envío, impuestos y pagos ajustados a sus mercados",
    "Bloques lookbook + carrito ligero para velocidad",
  ],
  impact: "Sensación de lujo de navegación a compra; el equipo actualiza productos sin romper layouts.",
};

const n = {
  need: "Mostrar proceso y resultados para RFPs—trabajo filtrable, visuales fuertes y contacto que califica.",
  built: [
    "Casos de estudio con layouts flexibles + medios sin deriva",
    "Filtros por industria/servicio para encontrar trabajo relevante",
    "Campos de contacto que reducen ruido en el inbox",
  ],
  impact: "Actualizaciones semanales de casos; los leads llegan con contexto para responder el mismo día.",
};

export const portfolioPatchesEs: Record<string, PortfolioPatch> = {
  "meridian-digital-credibility-first": {
    pitch:
      "Sitio de marketing credibilidad primero: el tráfico se convierte en conversaciones cualificadas, no en páginas vanidosas.",
    sector: "Agencia de marketing B2B",
    imgAlt:
      "Meridian Digital — mockup web responsive en escritorio y móvil, layout de generación de leads",
    highlights: ["CMS flexible", "Landings de campaña", "Leads listos para CRM"],
    details: m,
  },
  "velvet-row-editorial-commerce": {
    pitch:
      "Tienda WooCommerce donde la historia del producto, la imagen y el checkout se sienten tan cuidados como la marca.",
    sector: "E-commerce boutique (moda)",
    imgAlt: "Velvet Row — mockup de tienda fashion en monitor y smartphone",
    highlights: ["WooCommerce", "Layouts editoriales", "Checkout móvil"],
    details: v,
  },
  "north-co-portfolio-trust": {
    pitch:
      "Sitio centrado en portfolio: casos y rutas de contacto que generan confianza antes de la primera llamada.",
    sector: "Estudio creativo / de producto",
    imgAlt: "North & Co. — mockup de estudio creativo responsive",
    highlights: ["CMS de casos", "Filtros de trabajo", "Consultas cualificadas"],
    details: n,
  },
  "meridian-digital-landing-velocity": {
    pitch:
      "Renovación del sistema de landings: experimentos más rápidos para paid con componentes compartidos y QA claro.",
    sector: "Agencia de marketing B2B",
    imgAlt:
      "Meridian Digital — mockup web responsive en escritorio y móvil, layout de generación de leads",
    highlights: ["CMS flexible", "Landings de campaña", "Leads listos para CRM"],
    details: m,
  },
  "velvet-row-seasonal-launch": {
    pitch:
      "Lanzamiento de colección: grids editoriales, bloques lookbook y checkout afinado para tráfico mobile-first.",
    sector: "E-commerce boutique (moda)",
    imgAlt: "Velvet Row — mockup de tienda fashion en monitor y smartphone",
    highlights: ["WooCommerce", "Layouts editoriales", "Checkout móvil"],
    details: v,
  },
  "north-co-work-index": {
    pitch:
      "Índice de trabajo + filtros: los prospectos encuentran casos relevantes antes del formulario de contacto.",
    sector: "Estudio creativo / de producto",
    imgAlt: "North & Co. — mockup de estudio creativo responsive",
    highlights: ["CMS de casos", "Filtros de trabajo", "Consultas cualificadas"],
    details: n,
  },
  "meridian-digital-lead-routing": {
    pitch:
      "Mejora de enrutamiento de leads: formularios, rutas de gracias y hooks CRM mantienen ventas en un solo embudo.",
    sector: "Agencia de marketing B2B",
    imgAlt:
      "Meridian Digital — mockup web responsive en escritorio y móvil, layout de generación de leads",
    highlights: ["CMS flexible", "Landings de campaña", "Leads listos para CRM"],
    details: m,
  },
  "velvet-row-international-checkout": {
    pitch:
      "UX de envío internacional: claridad en el carrito, menos abandonos, mismo acabado de marca.",
    sector: "E-commerce boutique (moda)",
    imgAlt: "Velvet Row — mockup de tienda fashion en monitor y smartphone",
    highlights: ["WooCommerce", "Layouts editoriales", "Checkout móvil"],
    details: v,
  },
  "north-co-cms-patterns": {
    pitch:
      "Patrones CMS para casos: layouts repetibles para publicar trabajo nuevo sin deriva de diseño.",
    sector: "Estudio creativo / de producto",
    imgAlt: "North & Co. — mockup de estudio creativo responsive",
    highlights: ["CMS de casos", "Filtros de trabajo", "Consultas cualificadas"],
    details: n,
  },
};
