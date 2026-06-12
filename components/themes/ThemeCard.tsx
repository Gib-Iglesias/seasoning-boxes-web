"use client";
import { motion } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/LocaleContext";
import type { Category } from "@/lib/constants";

interface ThemeCardProps {
  theme: Category;
  selected: boolean;
  onSelect: (slug: string) => void;
  index: number;
}

export default function ThemeCard({ theme, selected, onSelect, index }: ThemeCardProps) {
  const { t } = useLocaleContext();
  const item = t.categories.items[theme.slug as keyof typeof t.categories.items];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      whileHover={{ y: -4, transition: { duration: 0.18 } }}
      onClick={() => onSelect(theme.slug)}
      className="relative rounded-2xl overflow-hidden text-center cursor-pointer transition-all duration-200"
      style={{
        border: selected ? "2px solid var(--wine)" : "2px solid var(--sand)",
        boxShadow: selected ? "0 8px 24px rgba(129,11,56,0.15)" : "none",
      }}
    >
      <div className="flex flex-col items-center justify-center py-6 text-3xl"
        style={{ background: theme.gradient }}>
        <span className="mb-1">{theme.emoji}</span>
        {theme.badge && (
          <span className="text-[8px] tracking-widest uppercase px-2 py-0.5 rounded-full"
            style={{ background: "rgba(241,226,209,0.88)", color: "var(--wine)" }}>
            {theme.badge}
          </span>
        )}
      </div>
      <div className="px-3 py-3" style={{ background: selected ? "#fdf5f0" : "white" }}>
        <p className="font-display font-bold text-sm mb-0.5" style={{ color: "var(--dark)" }}>{item?.name}</p>
        <p className="text-[10px] leading-snug font-light" style={{ color: "#9a6868" }}>{item?.desc}</p>
        {selected && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
            className="absolute bottom-2 right-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px]"
            style={{ background: "var(--wine)", color: "var(--cream)" }}>✓</motion.div>
        )}
      </div>
    </motion.div>
  );
}
