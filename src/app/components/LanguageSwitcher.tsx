"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { isSelectableLocale, selectableLocales, type SelectableLocale } from "@/i18n/routing";

/** Value when current locale is Persian (fa) — not a real routing target from the menu. */
const PERSIAN_AUTO_VALUE = "__fa_from_device__";

const NATIVE_LANGUAGE_LABELS: Record<SelectableLocale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  ru: "Русский",
  ar: "العربية",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const selectValue = isSelectableLocale(locale) ? locale : PERSIAN_AUTO_VALUE;

  return (
    <select
      dir="ltr"
      aria-label="Language"
      value={selectValue}
      onChange={(e) => {
        const next = e.target.value;
        if (next !== PERSIAN_AUTO_VALUE && isSelectableLocale(next)) {
          router.replace(pathname, { locale: next });
        }
      }}
      className="h-9 min-w-[9.25rem] cursor-pointer rounded-[var(--ds-radius-md)] border border-border bg-background/90 px-2.5 text-left text-[0.8125rem] font-medium text-foreground shadow-sm transition hover:border-primary/35 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
    >
      {locale === "fa" ? (
        <option value={PERSIAN_AUTO_VALUE} disabled>
          فارسی (از زبان دستگاه)
        </option>
      ) : null}
      {selectableLocales.map((loc) => (
        <option key={loc} value={loc}>
          {NATIVE_LANGUAGE_LABELS[loc]}
        </option>
      ))}
    </select>
  );
}
