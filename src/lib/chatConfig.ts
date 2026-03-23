/** Tawk embed path: https://embed.tawk.to/{property}/{widget} */
export const DEFAULT_TAWK_PROPERTY = "69bf65901f2eee1c3a8ff7c2";
export const DEFAULT_TAWK_WIDGET = "1jk9q9fmk";

export function getTawkIds() {
  const property =
    process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID?.trim() || DEFAULT_TAWK_PROPERTY;
  const widget = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID?.trim() || DEFAULT_TAWK_WIDGET;
  return { property, widget };
}

/** True when LiveChat will load a provider (Crisp env, or Tawk with defaults). */
export function isLiveChatConfigured() {
  if (process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID?.trim()) return true;
  const { property, widget } = getTawkIds();
  return Boolean(property && widget);
}
