"use client";
import { use } from "react";
import { useLocaleContext } from "@/lib/i18n/LocaleContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CATEGORIES } from "@/lib/constants";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Link from "next/link";

export default function CategoryPage({ params }: { params: Promise<{ locale: string; category: string }> }) {
  const { category } = use(params);
  const { locale, t } = useLocaleContext();
  const router = useRouter();

  const cat = CATEGORIES.find(c => c.slug === category);
  const catInfo = t.categories.items[category as keyof typeof t.categories.items];
  const tsub = t.subcategories;

  if (!cat || !catInfo) {
    return <div className="p-8 text-center">Category not found</div>;
  }

  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <Navbar />

      {/* Category hero */}
      <div className="relative py-16 px-6 text-center overflow-hidden" style={{ background: cat.gradient }}>
        <div className="absolute inset-0 opacity-10"
          style={{ background: "radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, transparent 70%)" }} />
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-5xl block mb-4">{cat.emoji}</span>
          <h1 className="font-display text-4xl font-black mb-3" style={{ color: "var(--cream)" }}>{catInfo.name}</h1>
          <p className="text-base font-light max-w-md mx-auto" style={{ color: "rgba(241,226,209,0.75)" }}>
            {catInfo.desc}
          </p>
        </motion.div>
      </div>

      {/* Breadcrumb */}
      <div className="px-6 py-3 text-xs" style={{ color: "#9a6868" }}>
        <Link href={`/${locale}/categories`} className="hover:underline">{tsub.backTo}</Link>
        <span className="mx-2">›</span>
        <span style={{ color: "var(--dark)" }}>{catInfo.name}</span>
      </div>

      {/* Subcategories */}
      <div className="py-10 px-6">
        <div className="text-center mb-10">
          <span className="section-label">{tsub.label}</span>
          <h2 className="font-display text-3xl font-bold mt-2 mb-2" style={{ color: "var(--dark)" }}>{tsub.title}</h2>
          <p className="text-sm font-light" style={{ color: "#9a6868" }}>{tsub.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {cat.subcategories.map((sub, i) => {
            const subInfo = tsub.items[sub.slug as keyof typeof tsub.items];
            return (
              <motion.div key={sub.slug}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(129,11,56,0.12)" }}
                onClick={() => router.push(`/${locale}/categories/${category}/${sub.slug}`)}
                className="rounded-2xl p-5 text-center cursor-pointer transition-all duration-200"
                style={{ background: "white", border: "2px solid var(--sand)" }}
              >
                <span className="text-3xl block mb-3">{sub.emoji}</span>
                <p className="font-display font-bold text-sm mb-1" style={{ color: "var(--dark)" }}>
                  {subInfo?.name ?? sub.slug}
                </p>
                <p className="text-[11px] leading-snug font-light" style={{ color: "#9a6868" }}>
                  {subInfo?.desc}
                </p>
                {sub.badge && (
                  <span className="inline-block mt-2 text-[9px] tracking-widest uppercase px-2 py-0.5 rounded-full"
                    style={{ background: "var(--wine)", color: "var(--cream)" }}>
                    {sub.badge}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
