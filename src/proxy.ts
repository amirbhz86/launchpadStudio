import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  if (process.env.NODE_ENV === "development") {
    const acceptLanguage = request.headers.get("accept-language");
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value ?? null;
    console.info(
      "[i18n] System language (proxy)",
      JSON.stringify(
        {
          pathname: request.nextUrl.pathname,
          acceptLanguage,
          nextLocaleCookie: cookieLocale,
        },
        null,
        0,
      ),
    );
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
