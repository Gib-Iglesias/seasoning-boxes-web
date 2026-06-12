"use client";
import { motion } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/LocaleContext";
import { useRouter } from "next/navigation";
import { TOP_SELLERS, CATEGORIES } from "@/lib/constants";

export default function TopSellers() {
  const { locale, t } = useLocaleContext();
  const ts = t.topSellers;
  const router = useRouter();

  return (
    <section className="py-20 px-6" style={{ background: "white" }}>
      <div className="text-center mb-12">
        <span className="section-label">{ts.label}</span>
        <h2 className="font-display text-4xl font-bold mt-2 mb-2" style={{ color: "var(--dark)" }}>{ts.title}</h2>
        <p className="text-sm font-light" style={{ color: "#9a6868" }}>{ts.subtitle}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {TOP_SELLERS.map((item, i) => {
          const cat = CATEGORIES.find(c => c.slug === item.categorySlug);
          const sub = cat?.subcategories.find(s => s.slug === item.subSlug);
          const catName = t.categories.items[item.categorySlug as keyof typeof t.categories.items]?.name;
          const subName = t.subcategories.items[item.subSlug as keyof typeof t.subcategories.items]?.name;
          const size = t.builder.sizes[item.size as keyof typeof t.builder.sizes];

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl overflow-hidden cursor-pointer group"
              style={{ border: "1px solid var(--sand)" }}
              onClick={() => router.push(`/${locale}/categories/${item.categorySlug}/${item.subSlug}`)}
            >
              {/* Color hero */}
              <div
                className="flex items-center justify-center py-8 text-4xl relative overflow-hidden"
                style={{ background: cat?.gradient }}
              >
                <span className="relative z-10">{item.emoji}</span>
                {item.badge && (
                  <span
                    className="absolute top-2 right-2 text-[9px] tracking-widest uppercase px-2 py-0.5 rounded-full font-medium"
                    style={{ background: "rgba(241,226,209,0.9)", color: "var(--wine)" }}
                  >{item.badge}</span>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-[10px] uppercase tracking-widest font-medium mb-0.5" style={{ color: "#9a6868" }}>
                  {catName}
                </p>
                <p className="font-display font-bold text-sm mb-1" style={{ color: "var(--dark)" }}>
                  {subName}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-xs" style={{ color: "var(--wine)" }}>★ {item.rating}</span>
                    <span className="text-[10px]" style={{ color: "#9a6868" }}>({item.reviewCount})</span>
                  </div>
                  <span className="text-xs font-medium" style={{ color: "var(--wine)" }}>
                    {size.name}
                  </span>
                </div>
                <button
                  className="w-full mt-3 py-2 rounded-full text-xs font-medium transition-all duration-200"
                  style={{ background: "var(--wine)", color: "var(--cream)" }}
                >
                  {ts.buildBtn}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => router.push(`/${locale}/categories`)}
          className="btn-wine px-8 py-3 text-sm"
        >{ts.viewAll} →</button>
      </div>
    </section>
  );
}
