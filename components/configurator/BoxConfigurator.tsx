"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/LocaleContext";
import { SIZES, type SizeId } from "@/lib/constants";

interface BoxConfiguratorProps {
  selectedTheme?: string | null;
  onAddToCart: (config: { theme: string; size: SizeId; qty: number; price: number }) => void;
}

export default function BoxConfigurator({ selectedTheme, onAddToCart }: BoxConfiguratorProps) {
  const { t } = useLocaleContext();
  const c = t.builder;
  const [selectedSize, setSelectedSize] = useState<SizeId | null>(null);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const size = SIZES.find((s) => s.id === selectedSize);
  const total = size ? (size.price * qty).toFixed(2) : "0.00";

  function changeQty(delta: number) {
    setQty((q) => Math.max(1, Math.min(10, q + delta)));
  }

  function handleAddToCart() {
    if (!selectedTheme || !selectedSize || !size) return;
    onAddToCart({ theme: selectedTheme, size: selectedSize, qty, price: size.price });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="rounded-3xl p-8 max-w-xl mx-auto"
      style={{ background: "white", border: "1px solid var(--sand)" }}>
      <AnimatePresence mode="wait">
        {!selectedTheme ? (
          <motion.div key="hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="text-center py-6 rounded-xl text-sm font-light"
            style={{ background: "#fff8f2", border: "1px dashed var(--sand)", color: "#9a6868" }}>
            {c.selectThemeHint}
          </motion.div>
        ) : (
          <motion.div key="config" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest font-medium mb-3" style={{ color: "#9a6868" }}>{c.sizeLabel}</p>
              <div className="grid grid-cols-3 gap-3">
                {SIZES.map((s) => (
                  <button key={s.id} onClick={() => setSelectedSize(s.id)}
                    className="rounded-xl py-4 px-2 text-center transition-all duration-200 border-2"
                    style={{
                      borderColor: selectedSize === s.id ? "var(--wine)" : "var(--sand)",
                      background: selectedSize === s.id ? "#fdf5f0" : "white",
                    }}>
                    <span className="text-2xl block mb-1">{s.icon}</span>
                    <p className="font-display font-bold text-sm" style={{ color: "var(--dark)" }}>
                      {c.sizes[s.id as keyof typeof c.sizes].name}
                    </p>
                    <p className="text-[11px] font-light" style={{ color: "#9a6868" }}>{s.pieces} {c.pieces}</p>
                    <p className="text-sm font-medium mt-1" style={{ color: "var(--wine)" }}>£{s.price.toFixed(2)}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-7">
              <p className="text-xs uppercase tracking-widest font-medium mb-3" style={{ color: "#9a6868" }}>{c.qtyLabel}</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center rounded-full overflow-hidden" style={{ border: "2px solid var(--sand)" }}>
                  <button onClick={() => changeQty(-1)} className="w-10 h-10 text-xl flex items-center justify-center hover:bg-orange-50" style={{ color: "var(--wine)" }}>−</button>
                  <span className="w-12 text-center font-display font-bold text-lg"
                    style={{ color: "var(--dark)", borderLeft: "1px solid var(--sand)", borderRight: "1px solid var(--sand)", lineHeight: "40px" }}>{qty}</span>
                  <button onClick={() => changeQty(1)} className="w-10 h-10 text-xl flex items-center justify-center hover:bg-orange-50" style={{ color: "var(--wine)" }}>+</button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-2xl px-6 py-5"
              style={{ background: "linear-gradient(135deg, var(--dark), var(--wine))" }}>
              <div>
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(241,226,209,0.55)" }}>{c.total}</p>
                <AnimatePresence mode="wait">
                  <motion.p key={total} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                    className="font-display font-black text-3xl" style={{ color: "var(--cream)" }}>£{total}</motion.p>
                </AnimatePresence>
              </div>
              <button onClick={handleAddToCart} disabled={!selectedSize}
                className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ background: "var(--cream)", color: "var(--wine)" }}>
                {added ? c.addedToCart : c.addToCart.split("—")[0]}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
