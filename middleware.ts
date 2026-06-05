import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_EMAIL = "goku.simpson.9517@gmail.com";
const locales = ["en", "es"];
const defaultLocale = "en";

function getLocale(req: NextRequest): string {
  const pathname = req.nextUrl.pathname;
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameLocale) return pathnameLocale;
  const acceptLanguage = req.headers.get("accept-language") || "";
  if (acceptLanguage.includes("es")) return "es";
  return defaultLocale;
}

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const pathname = req.nextUrl.pathname;

  // Skip static files
  if (pathname.includes(".") || pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  // Redirect root to locale
  if (pathname === "/") {
    const locale = getLocale(req);
    return NextResponse.redirect(new URL(`/${locale}`, req.url));
  }

  // Admin protection
  if (pathname.startsWith("/admin")) {
    const { userId, sessionClaims } = await auth();
    if (!userId) {
      return NextResponse.redirect(new URL(`/${defaultLocale}`, req.url));
    }
    const email = (sessionClaims as { email?: string })?.email;
    if (email !== ADMIN_EMAIL) {
      return NextResponse.redirect(new URL(`/${defaultLocale}`, req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
