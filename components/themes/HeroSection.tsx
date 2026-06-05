"use client";
import { motion } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/LocaleContext";

export default function HeroSection() {
  const { locale, t } = useLocaleContext();
  const h = t.hero;

  return (
    <section className="relative overflow-hidden py-20 px-6 text-center"
      style={{ background: "linear-gradient(135deg, var(--dark) 0%, var(--wine) 60%, #a8184a 100%)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(220,195,170,0.1) 0%, transparent 65%)" }} />
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-10" style={{ background: "var(--cream)" }} />
      <div className="absolute -bottom-20 -left-10 w-48 h-48 rounded-full opacity-5" style={{ background: "var(--sand)" }} />

      <div className="relative max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 border"
            style={{ background: "rgba(241,226,209,0.12)", color: "var(--sand)", borderColor: "rgba(220,195,170,0.3)" }}>
            {h.tag}
          </span>
        </motion.div>

        <motion.h1 className="font-display text-5xl md:text-6xl font-black leading-tight mb-5"
          style={{ color: "var(--cream)" }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}>
          {h.titleStart}{" "}
          <em style={{ color: "var(--sand)", fontStyle: "italic" }}>{h.titleEm}</em>{" "}
          {h.titleEnd}
        </motion.h1>

        <motion.p className="text-base md:text-lg leading-relaxed mb-8 font-light max-w-lg mx-auto"
          style={{ color: "rgba(241,226,209,0.72)" }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}>
          {h.subtitle}
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }}>
          <a href="#themes" className="btn-primary text-base px-10 py-3.5">{h.cta} →</a>
          <p className="text-xs tracking-wide" style={{ color: "rgba(241,226,209,0.5)" }}>
            🚚 {h.shipping}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
