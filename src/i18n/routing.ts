import { defineRouting } from "next-intl/routing";

/**
 * Header shows `selectableLocales` only. Persian (`fa`) is negotiated from Accept-Language
 * but cannot be chosen from the menu (only switched away from).
 * localePrefix: "as-needed" — default locale (en) keeps clean URLs.
 */
export const selectableLocales = ["en", "es", "fr", "de", "ru", "ar"] as const;

export type SelectableLocale = (typeof selectableLocales)[number];

export const routing = defineRouting({
  locales: ["en", "es", "fr", "de", "ru", "ar", "fa"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  localeDetection: true,
});

export function isSelectableLocale(locale: string): locale is SelectableLocale {
  return (selectableLocales as readonly string[]).includes(locale);
}
