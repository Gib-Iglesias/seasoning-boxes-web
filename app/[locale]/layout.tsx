import { notFound } from "next/navigation";
import { LocaleProvider } from "@/lib/i18n/LocaleContext";
import type { Locale } from "@/lib/i18n/translations";

const locales: Locale[] = ["en", "es"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  return (
    <LocaleProvider locale={locale as Locale}>
      {children}
    </LocaleProvider>
  );
}
