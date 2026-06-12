"use client";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/themes/HeroSection";
import TopSellers from "@/components/themes/TopSellers";
import CategoriesGrid from "@/components/themes/CategoriesGrid";
import HowItWorks from "@/components/themes/HowItWorks";

export default function HomePage() {
  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <Navbar />
      <HeroSection />
      <TopSellers />
      <CategoriesGrid />
      <HowItWorks />
      <Footer />
    </div>
  );
}
