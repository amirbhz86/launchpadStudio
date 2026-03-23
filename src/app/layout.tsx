import type { ReactNode } from "react";

/** Locale-specific `<html lang>` and providers live in `[locale]/layout.tsx`. */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
