import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import ChatLauncher from "../components/ChatLauncher";
import LiveChat from "../components/LiveChat";
import SystemLanguageLogger from "../components/SystemLanguageLogger";
import { routing } from "@/i18n/routing";
import { getSiteUrl, SITE_NAME } from "@/lib/site";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

const themeInitScript = `
(function(){
  try {
    var s = localStorage.getItem('theme');
    var dark = s === 'dark' || (!s && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {}
})();`;

const defaultShareImage = "/logo.webp";

const OG_LOCALE: Record<string, string> = {
  en: "en_US",
  de: "de_DE",
  es: "es_ES",
  fr: "fr_FR",
  ru: "ru_RU",
  ar: "ar_SA",
  fa: "fa_IR",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  const base = getSiteUrl();
  const ogLocale = OG_LOCALE[locale] ?? "en_US";

  return {
    metadataBase: new URL(base),
    title: {
      default: t("title"),
      template: `%s | ${SITE_NAME}`,
    },
    description: t("description"),
    keywords: [
      "custom web development",
      "web development agency",
      "multilingual website development",
      "custom web applications",
      "e-commerce development",
      "WordPress development",
      "headless CMS",
      "web performance",
      "Core Web Vitals",
      "SEO-friendly websites",
    ],
    authors: [{ name: SITE_NAME }],
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: ogLocale,
      siteName: SITE_NAME,
      images: [
        {
          url: defaultShareImage,
          alt: `${SITE_NAME} — custom web development and e‑commerce`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [defaultShareImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === "fa" || locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistSans.className} font-sans antialiased`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <SystemLanguageLogger />
          <LiveChat />
          <ChatLauncher />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
