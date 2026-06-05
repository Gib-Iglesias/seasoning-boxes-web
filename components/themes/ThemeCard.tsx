"use client";
import { motion } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/LocaleContext";
import type { Theme } from "@/lib/constants";

interface ThemeCardProps {
  theme: Theme;
  selected: boolean;
  onSelect: (slug: string) => void;
  index: number;
}

export default function ThemeCard({ theme, selected, onSelect, index }: ThemeCardProps) {
  const { t } = useLocaleContext();
  const item = t.themes.items[theme.slug as keyof typeof t.themes.items];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      whileHover={{ y: -4, transition: { duration: 0.18 } }}
      onClick={() => onSelect(theme.slug)}
      className="relative rounded-2xl p-5 text-center cursor-pointer transition-all duration-200 overflow-hidden"
      style={{
        background: selected ? "#fdf5f0" : "white",
        border: selected ? "2px solid var(--wine)" : "2px solid var(--sand)",
        boxShadow: selected ? "0 8px 24px rgba(129,11,56,0.15)" : "none",
      }}>
      <div className="absolute top-0 left-0 right-0 h-1 transition-transform duration-200 origin-left"
        style={{ background: "var(--wine)", transform: selected ? "scaleX(1)" : "scaleX(0)" }} />

      {theme.badge && (
        <span className="absolute top-2 right-2 text-[9px] tracking-widest uppercase px-2 py-0.5 rounded-full"
          style={{ background: "var(--wine)", color: "var(--cream)" }}>
          {theme.badge}
        </span>
      )}

      <span className="text-4xl block mb-3 leading-none">{theme.emoji}</span>
      <p className="font-display font-bold text-sm mb-1" style={{ color: "var(--dark)" }}>{item.name}</p>
      <p className="text-[11px] leading-snug font-light" style={{ color: "#9a6868" }}>{item.desc}</p>

      {selected && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
          className="absolute bottom-2 right-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px]"
          style={{ background: "var(--wine)", color: "var(--cream)" }}>
          ✓
        </motion.div>
      )}
    </motion.div>
  );
}
