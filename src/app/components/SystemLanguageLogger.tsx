"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

/**
 * Logs browser / OS language hints vs the locale next-intl resolved (dev only).
 */
export default function SystemLanguageLogger() {
  const locale = useLocale();

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    const payload = {
      navigatorLanguage: typeof navigator !== "undefined" ? navigator.language : null,
      navigatorLanguages:
        typeof navigator !== "undefined" && navigator.languages
          ? [...navigator.languages]
          : [],
      documentLang: typeof document !== "undefined" ? document.documentElement.lang : null,
      resolvedAppLocale: locale,
      nextLocaleCookie: readCookie("NEXT_LOCALE"),
    };

    console.info("[i18n] System / browser language (client)", payload);
  }, [locale]);

  return null;
}
