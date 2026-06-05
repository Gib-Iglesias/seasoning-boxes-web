"use client";
import { useLocaleContext } from "@/lib/i18n/LocaleContext";

export default function Footer() {
  const { t } = useLocaleContext();
  return (
    <footer className="py-10 px-6 text-center text-sm tracking-wide"
      style={{ background: "var(--dark)", color: "rgba(241,226,209,0.55)" }}>
      <p className="font-display text-lg font-bold mb-1" style={{ color: "var(--cream)" }}>
        Seasoning Boxes
      </p>
      <p className="mb-1">{t.footer.tagline}</p>
      <p className="text-xs" style={{ color: "rgba(241,226,209,0.35)" }}>
        📍 {t.footer.location} · {t.footer.rights}
      </p>
    </footer>
  );
}
