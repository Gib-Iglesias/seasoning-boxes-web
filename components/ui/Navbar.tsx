"use client";

import { useRouter, usePathname } from "next/navigation";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useLocaleContext } from "@/lib/i18n/LocaleContext";

export default function Navbar({ cartCount = 0 }: { cartCount?: number }) {
  const { locale, t } = useLocaleContext();
  const router = useRouter();
  const pathname = usePathname();
  const { isSignedIn } = useUser();

  function switchLocale(newLocale: string) {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  }

  return (
    <>
      {/* Lang bar */}
      <div className="flex justify-end items-center gap-2 px-6 py-2 text-xs tracking-widest"
        style={{ background: "var(--dark)", color: "var(--cream)" }}>
        <span style={{ color: "rgba(241,226,209,0.45)" }}>LANG</span>
        {["en", "es"].map((l) => (
          <button key={l} onClick={() => switchLocale(l)}
            className="px-3 py-0.5 rounded-full border transition-all duration-200 text-[11px]"
            style={{
              borderColor: locale === l ? "var(--wine)" : "rgba(241,226,209,0.25)",
              background: locale === l ? "var(--wine)" : "transparent",
              color: "var(--cream)",
            }}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 h-16 sticky top-0 z-50"
        style={{ background: "var(--wine)" }}>
        <Link href={`/${locale}`} className="font-display text-2xl font-black tracking-tight"
          style={{ color: "var(--cream)" }}>
          Seasoning <span style={{ color: "var(--sand)" }}>Boxes</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href={`/${locale}#themes`} className="text-sm tracking-wide hidden md:block"
            style={{ color: "rgba(241,226,209,0.75)" }}>
            {t.nav.themes}
          </Link>
          <Link href={`/${locale}#how`} className="text-sm tracking-wide hidden md:block"
            style={{ color: "rgba(241,226,209,0.75)" }}>
            {t.nav.howItWorks}
          </Link>

          <Link href={`/${locale}/cart`}
            className="relative flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium"
            style={{ background: "rgba(241,226,209,0.15)", color: "var(--cream)" }}>
            🛍 {t.nav.cart}
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                style={{ background: "var(--cream)", color: "var(--wine)" }}>
                {cartCount}
              </span>
            )}
          </Link>

          {!isSignedIn ? (
            <SignInButton mode="modal">
              <button className="px-4 py-1.5 rounded-full text-sm font-medium"
                style={{ background: "var(--cream)", color: "var(--wine)" }}>
                {t.nav.signIn}
              </button>
            </SignInButton>
          ) : (
            <UserButton />
          )}
        </div>
      </nav>
    </>
  );
}
