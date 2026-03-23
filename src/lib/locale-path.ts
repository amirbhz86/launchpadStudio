import { getSiteUrl } from "@/lib/site";
import { routing } from "@/i18n/routing";

/** Path prefix for URL: default locale has no prefix (as-needed). */
export function localePathPrefix(locale: string): string {
  if (locale === routing.defaultLocale) return "";
  return `/${locale}`;
}

export function localizedPath(locale: string, pathname: string): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${localePathPrefix(locale)}${path}`;
}

export function localizedAbsoluteUrl(locale: string, pathname: string): string {
  return `${getSiteUrl()}${localizedPath(locale, pathname)}`;
}
