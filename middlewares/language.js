import { NextResponse } from "next/server";
import i18nextConfig from "../next-i18next.config.mjs";

export function languageMiddleware(request) {
  const { locales, defaultLocale } = i18nextConfig.i18n;
  const preferredLanguage = request.headers
    .get("accept-language")
    ?.split(",")[0]
    .split("-")[0];
  const lang = locales.includes(preferredLanguage)
    ? preferredLanguage
    : defaultLocale;

  const response = NextResponse.next();
  response.cookies.set("NEXT_LOCALE", lang);
  return response;
}
