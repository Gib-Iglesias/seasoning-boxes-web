"use client";
import { motion } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/LocaleContext";

export default function HeroSection() {
  const { t } = useLocaleContext();
  const h = t.hero;
  return (
    <section
      className="relative overflow-hidden py-24 px-6 text-center"
      style={{ background: "linear-gradient(135deg, var(--dark) 0%, var(--wine) 55%, #a8184a 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(220,195,170,0.1) 0%, transparent 65%)" }} />
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10" style={{ background: "var(--cream)" }} />
      <div className="absolute -bottom-24 -left-12 w-56 h-56 rounded-full opacity-5" style={{ background: "var(--sand)" }} />

      <div className="relative max-w-2xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
          className="inline-block text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border"
          style={{ background: "rgba(241,226,209,0.12)", color: "var(--sand)", borderColor: "rgba(220,195,170,0.3)" }}
        >{h.tag}</motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }}
          className="font-display font-black leading-tight mb-5"
          style={{ color: "var(--cream)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}
        >
          {h.titleStart}{" "}
          <em style={{ color: "var(--sand)", fontStyle: "italic" }}>{h.titleEm}</em>
          {h.titleEnd && <> {h.titleEnd}</>}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.16 }}
          className="text-base md:text-lg leading-relaxed mb-10 font-light max-w-lg mx-auto"
          style={{ color: "rgba(241,226,209,0.72)" }}
        >{h.subtitle}</motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.24 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <a href="#categories" className="btn-primary text-base px-10 py-3.5 font-medium">{h.cta} →</a>
          <a href="#how" className="text-sm font-light tracking-wide transition-colors duration-200"
            style={{ color: "rgba(241,226,209,0.55)" }}>
            {h.subCta} ↓
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="mt-8 text-xs tracking-wide" style={{ color: "rgba(241,226,209,0.4)" }}
        >🚚 {h.shipping}</motion.p>
      </div>
    </section>
  );
}
