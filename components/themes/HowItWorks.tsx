"use client";
import { useLocaleContext } from "@/lib/i18n/LocaleContext";

const ICONS = ["🎯", "📦", "✈️", "🎉"];

export default function HowItWorks() {
  const { t } = useLocaleContext();
  const h = t.howItWorks;

  return (
    <section id="how" className="py-20 px-6" style={{ background: "var(--cream)" }}>
      <div className="text-center mb-12">
        <span className="section-label">{h.title}</span>
        <h2 className="font-display text-4xl font-bold mt-2" style={{ color: "var(--dark)" }}>{h.title}</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {h.steps.map((step, i) => (
          <div key={i} className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4"
              style={{ background: "var(--sand)" }}>
              {ICONS[i]}
            </div>
            <div className="text-xs font-medium tracking-widest uppercase mb-1" style={{ color: "var(--wine)" }}>
              0{i + 1}
            </div>
            <h3 className="font-display font-bold text-base mb-1" style={{ color: "var(--dark)" }}>{step.title}</h3>
            <p className="text-xs font-light leading-relaxed" style={{ color: "#9a6868" }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
