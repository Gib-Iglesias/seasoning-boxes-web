"use client";
import { useLocaleContext } from "@/lib/i18n/LocaleContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CATEGORIES } from "@/lib/constants";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function CategoriesPage() {
  const { locale, t } = useLocaleContext();
  const tc = t.categories;
  const router = useRouter();

  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <Navbar />
      <div className="py-16 px-6">
        <div className="text-center mb-12">
          <span className="section-label">{tc.label}</span>
          <h1 className="font-display text-4xl font-bold mt-2 mb-2" style={{ color: "var(--dark)" }}>{tc.title}</h1>
          <p className="text-sm font-light" style={{ color: "#9a6868" }}>{tc.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {[CATEGORIES.slice(0,5), CATEGORIES.slice(5,10)].map((row, rowIdx) => (
            <div key={rowIdx} className="grid grid-cols-5 gap-4">
              {row.map((cat, i) => {
                const info = tc.items[cat.slug as keyof typeof tc.items];
                return (
                  <motion.div key={cat.slug}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: (rowIdx*5+i)*0.05 }}
                    whileHover={{ y: -3 }}
                    onClick={() => router.push(`/${locale}/categories/${cat.slug}`)}
                    className="rounded-2xl overflow-hidden cursor-pointer"
                    style={{ border: "1px solid var(--sand)" }}
                  >
                    <div className="flex flex-col items-center justify-center py-6 text-3xl"
                      style={{ background: cat.gradient }}>
                      <span className="mb-1">{cat.emoji}</span>
                      {cat.badge && (
                        <span className="text-[8px] tracking-widest uppercase px-2 py-0.5 rounded-full"
                          style={{ background: "rgba(241,226,209,0.9)", color: "var(--wine)" }}>
                          {cat.badge}
                        </span>
                      )}
                    </div>
                    <div className="px-3 py-3 text-center" style={{ background: "white" }}>
                      <p className="font-display font-bold text-sm" style={{ color: "var(--dark)" }}>{info?.name}</p>
                      <p className="text-[10px] mt-1 font-medium" style={{ color: "var(--wine)" }}>{tc.exploreBtn} →</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
