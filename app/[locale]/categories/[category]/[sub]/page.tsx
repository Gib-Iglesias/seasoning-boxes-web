"use client";
import { use, useState } from "react";
import { useLocaleContext } from "@/lib/i18n/LocaleContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CATEGORIES, SIZES, type SizeId } from "@/lib/constants";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Link from "next/link";

export default function SubcategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string; sub: string }>;
}) {
  const { category, sub } = use(params);
  const { locale, t } = useLocaleContext();
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<SizeId | null>(null);

  const cat = CATEGORIES.find(c => c.slug === category);
  const subData = cat?.subcategories.find(s => s.slug === sub);
  const catInfo = t.categories.items[category as keyof typeof t.categories.items];
  const subInfo = t.subcategories.items[sub as keyof typeof t.subcategories.items];
  const tb = t.builder;

  if (!cat || !subData || !catInfo || !subInfo) {
    return <div className="p-8 text-center">Not found</div>;
  }

  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <Navbar />

      {/* Sub hero */}
      <div className="relative py-14 px-6 text-center overflow-hidden" style={{ background: cat.gradient }}>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-4xl block mb-3">{subData.emoji}</span>
          <h1 className="font-display text-3xl font-black mb-2" style={{ color: "var(--cream)" }}>{subInfo.name}</h1>
          <p className="text-sm font-light" style={{ color: "rgba(241,226,209,0.72)" }}>{subInfo.desc}</p>
        </motion.div>
      </div>

      {/* Breadcrumb */}
      <div className="px-6 py-3 text-xs" style={{ color: "#9a6868" }}>
        <Link href={`/${locale}/categories`} className="hover:underline">{t.subcategories.backTo}</Link>
        <span className="mx-2">›</span>
        <Link href={`/${locale}/categories/${category}`} className="hover:underline">{catInfo.name}</Link>
        <span className="mx-2">›</span>
        <span style={{ color: "var(--dark)" }}>{subInfo.name}</span>
      </div>

      {/* Size selector */}
      <div className="py-12 px-6 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <span className="section-label">{tb.label}</span>
          <h2 className="font-display text-3xl font-bold mt-2 mb-2" style={{ color: "var(--dark)" }}>
            {tb.title}
          </h2>
          <p className="text-sm font-light" style={{ color: "#9a6868" }}>{tb.subtitle
            .replace("{count}", selectedSize ? String(SIZES.find(s=>s.id===selectedSize)?.pieces) : "?")
            .replace("{size}", selectedSize ? tb.sizes[selectedSize as keyof typeof tb.sizes].name : "")
          }</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-10">
          {SIZES.map((size) => {
            const sInfo = tb.sizes[size.id as keyof typeof tb.sizes];
            const isSelected = selectedSize === size.id;
            return (
              <motion.button key={size.id}
                whileHover={{ y: -2 }}
                onClick={() => setSelectedSize(size.id)}
                className="rounded-2xl py-6 px-4 text-center transition-all duration-200 border-2"
                style={{
                  background: isSelected ? "#fdf5f0" : "white",
                  borderColor: isSelected ? "var(--wine)" : "var(--sand)",
                }}
              >
                <span className="text-3xl block mb-2">{size.icon}</span>
                <p className="font-display font-bold text-lg mb-1" style={{ color: "var(--dark)" }}>{sInfo.name}</p>
                <p className="text-sm font-light mb-2" style={{ color: "#9a6868" }}>
                  {sInfo.pieces} items
                </p>
                <p className="text-xl font-bold font-display" style={{ color: "var(--wine)" }}>
                  £{size.price.toFixed(2)}
                </p>
                {isSelected && (
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="inline-block mt-2 text-[10px] tracking-widest uppercase px-3 py-0.5 rounded-full"
                    style={{ background: "var(--wine)", color: "var(--cream)" }}>
                    Selected ✓
                  </motion.span>
                )}
              </motion.button>
            );
          })}
        </div>

        <motion.button
          disabled={!selectedSize}
          onClick={() => selectedSize && router.push(`/${locale}/build/${sub}?size=${selectedSize}&category=${category}`)}
          className="w-full py-4 rounded-2xl font-medium text-base tracking-wide transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ background: "var(--wine)", color: "var(--cream)" }}
          whileHover={selectedSize ? { scale: 1.01 } : {}}
        >
          {selectedSize
            ? `${tb.addToCart.split("—")[0].trim()} · ${SIZES.find(s => s.id === selectedSize)?.pieces} items →`
            : tb.sizeGuide}
        </motion.button>
      </div>

      <Footer />
    </div>
  );
}
