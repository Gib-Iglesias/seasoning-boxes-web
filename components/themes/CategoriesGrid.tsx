"use client";
import { motion } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/LocaleContext";
import { useRouter } from "next/navigation";
import { CATEGORIES } from "@/lib/constants";

export default function CategoriesGrid() {
  const { locale, t } = useLocaleContext();
  const tc = t.categories;
  const router = useRouter();

  // Split 10 categories into 2 rows of 5
  const row1 = CATEGORIES.slice(0, 5);
  const row2 = CATEGORIES.slice(5, 10);

  return (
    <section id="categories" className="py-20 px-6" style={{ background: "var(--cream)" }}>
      <div className="text-center mb-12">
        <span className="section-label">{tc.label}</span>
        <h2 className="font-display text-4xl font-bold mt-2 mb-2" style={{ color: "var(--dark)" }}>{tc.title}</h2>
        <p className="text-sm font-light" style={{ color: "#9a6868" }}>{tc.subtitle}</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {[row1, row2].map((row, rowIdx) => (
          <div key={rowIdx} className="grid grid-cols-5 gap-4">
            {row.map((cat, i) => {
              const info = tc.items[cat.slug as keyof typeof tc.items];
              return (
                <motion.div
                  key={cat.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (rowIdx * 5 + i) * 0.06 }}
                  whileHover={{ y: -4, transition: { duration: 0.18 } }}
                  onClick={() => router.push(`/${locale}/categories/${cat.slug}`)}
                  className="relative rounded-2xl overflow-hidden cursor-pointer group"
                  style={{ border: "2px solid transparent" }}
                >
                  {/* Gradient top block */}
                  <div
                    className="flex flex-col items-center justify-center pt-6 pb-4 text-3xl relative overflow-hidden"
                    style={{ background: cat.gradient, minHeight: "90px" }}
                  >
                    <span className="relative z-10 mb-1">{cat.emoji}</span>
                    {cat.badge && (
                      <span
                        className="text-[8px] tracking-widest uppercase px-2 py-0.5 rounded-full font-medium"
                        style={{ background: "rgba(241,226,209,0.88)", color: "var(--wine)" }}
                      >{cat.badge}</span>
                    )}
                  </div>

                  {/* Text block */}
                  <div
                    className="px-3 py-3 text-center transition-colors duration-200 group-hover:bg-orange-50"
                    style={{ background: "white" }}
                  >
                    <p className="font-display font-bold text-sm leading-tight mb-0.5" style={{ color: "var(--dark)" }}>
                      {info?.name}
                    </p>
                    <p className="text-[10px] leading-snug font-light hidden md:block" style={{ color: "#9a6868" }}>
                      {info?.desc}
                    </p>
                    <p className="text-[10px] mt-2 font-medium tracking-wide" style={{ color: "var(--wine)" }}>
                      {tc.exploreBtn} →
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
