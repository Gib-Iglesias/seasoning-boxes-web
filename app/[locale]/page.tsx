"use client";
import { useState } from "react";
import { useLocaleContext } from "@/lib/i18n/LocaleContext";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/themes/HeroSection";
import ThemeCard from "@/components/themes/ThemeCard";
import BoxConfigurator from "@/components/configurator/BoxConfigurator";
import HowItWorks from "@/components/themes/HowItWorks";
import { THEMES, type ThemeSlug, type SizeId } from "@/lib/constants";

interface CartItem { theme: ThemeSlug; size: SizeId; qty: number; price: number; }

export default function HomePage() {
  const { t } = useLocaleContext();
  const [selectedTheme, setSelectedTheme] = useState<ThemeSlug | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  function handleThemeSelect(slug: string) {
    setSelectedTheme(slug as ThemeSlug);
    setTimeout(() => {
      document.getElementById("configurator")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  }

  function handleAddToCart(config: CartItem) {
    setCartItems((prev) => {
      const existing = prev.findIndex((item) => item.theme === config.theme && item.size === config.size);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing].qty += config.qty;
        return updated;
      }
      return [...prev, config];
    });
  }

  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <Navbar cartCount={cartCount} />
      <HeroSection />

      <section id="themes" className="py-20 px-6">
        <div className="text-center mb-10">
          <span className="section-label">{t.themes.step}</span>
          <h2 className="font-display text-4xl font-bold mt-2 mb-2" style={{ color: "var(--dark)" }}>
            {t.themes.title}
          </h2>
          <p className="text-sm font-light" style={{ color: "#9a6868" }}>{t.themes.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {THEMES.map((theme, i) => (
            <ThemeCard key={theme.slug} theme={theme} selected={selectedTheme === theme.slug}
              onSelect={handleThemeSelect} index={i} />
          ))}
        </div>
      </section>

      <div className="mx-8" style={{ height: "1px", background: "var(--sand)", opacity: 0.5 }} />

      <section id="configurator" className="py-20 px-6">
        <div className="text-center mb-10">
          <span className="section-label">{t.configurator.step}</span>
          <h2 className="font-display text-4xl font-bold mt-2 mb-2" style={{ color: "var(--dark)" }}>
            {t.configurator.title}
          </h2>
          <p className="text-sm font-light" style={{ color: "#9a6868" }}>{t.configurator.subtitle}</p>
        </div>
        <BoxConfigurator selectedTheme={selectedTheme} onAddToCart={handleAddToCart} />
      </section>

      <HowItWorks />
      <Footer />
    </div>
  );
}
