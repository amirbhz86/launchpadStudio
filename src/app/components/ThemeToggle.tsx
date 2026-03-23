"use client";

import { useCallback } from "react";

export default function ThemeToggle() {
  const toggle = useCallback(() => {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    root.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--ds-radius-md)] border border-border bg-card/80 text-foreground shadow-sm backdrop-blur-sm transition hover:border-primary/35 hover:bg-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      aria-label="Toggle light or dark theme"
    >
      <span className="sr-only">Toggle light or dark theme</span>
      {/* Icons follow html.dark — no client state, avoids hydration mismatch */}
      <svg
        className="h-5 w-5 dark:hidden"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
        />
      </svg>
      <svg
        className="hidden h-5 w-5 dark:inline"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    </button>
  );
}
