"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useEffect, useId, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

/** Keep primary nav short; homepage still surfaces portfolio teaser, reviews, trust, and tools in-page. */
const NAV_PATHS = [
  { key: "work" as const, href: "/portfolio" },
  { key: "services" as const, href: "/#services" },
  { key: "about" as const, href: "/#about" },
  { key: "blog" as const, href: "/blog" },
  { key: "contact" as const, href: "/#contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const t = useTranslations("Common");
  const tNav = useTranslations("Common.nav");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  const nav = NAV_PATHS.map((item) => ({
    href: item.href,
    label: tNav(item.key),
  }));

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const linkClass =
    "font-medium text-foreground/85 transition-colors hover:text-foreground";

  const mobileLinkClass =
    "block rounded-[var(--ds-radius-lg)] px-4 py-3.5 text-lg font-medium text-foreground transition-colors hover:bg-foreground/[0.06] active:bg-foreground/[0.09]";

  const barBase =
    "block h-0.5 w-6 rounded-full transition-all duration-300 ease-out origin-center bg-foreground/80";

  const menuToggle = menuOpen ? t("closeMenu") : t("openMenu");

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border bg-background/90 text-foreground backdrop-blur-xl ${menuOpen ? "z-[90]" : ""}`}
    >
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 md:px-8 md:py-5">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div className="shrink-0 rounded-[var(--ds-radius-lg)] bg-primary/10 p-1.5 ring-1 ring-primary/25 transition group-hover:ring-primary/45">
            <img
              src="/logo.webp"
              alt="Launchpad Studio"
              width={36}
              height={36}
              className="h-8 w-8 object-contain sm:h-9 sm:w-9"
            />
          </div>
          <div className="min-w-0">
            <div className="truncate font-sans text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              Launchpad Studio
            </div>
            <div className="hidden text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted sm:block">
              {t("brandSubtitle")}
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <nav
            className="hidden items-center gap-6 text-[0.8125rem] md:flex lg:gap-8"
            aria-label={t("mainNav")}
          >
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher />
          <ThemeToggle />

          <button
            type="button"
            className="relative z-[95] flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--ds-radius-md)] text-foreground transition hover:bg-foreground/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuToggle}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuToggle}</span>
            <span className="flex h-5 w-6 flex-col justify-center gap-1.5">
              <span className={`${barBase} ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`${barBase} ${menuOpen ? "scale-x-0 opacity-0" : ""}`} />
              <span className={`${barBase} ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[80] bg-black/45 backdrop-blur-[2px] dark:bg-black/55 md:hidden"
            aria-label={t("closeMenu")}
            onClick={() => setMenuOpen(false)}
          />
          <div
            id={menuId}
            className="mobile-drawer-panel fixed right-0 top-0 z-[85] flex h-[100dvh] w-[min(100vw,20rem)] flex-col rounded-l-[var(--ds-radius-xl)] border-l border-border bg-background/98 px-4 pb-8 pt-[calc(1rem+env(safe-area-inset-top))] shadow-2xl md:hidden"
          >
            <div className="flex shrink-0 items-center justify-end pb-4 pt-2">
              <button
                type="button"
                className="rounded-[var(--ds-radius-md)] p-2 text-muted transition hover:bg-foreground/[0.06] hover:text-foreground"
                aria-label={t("closeMenu")}
                onClick={() => setMenuOpen(false)}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav
              className="flex flex-1 flex-col gap-0.5 overflow-y-auto overscroll-contain"
              aria-label={t("mobileNav")}
            >
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={mobileLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
