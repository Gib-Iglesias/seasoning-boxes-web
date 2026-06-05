"use client";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function CartPage() {
  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <Navbar />
      <div className="py-20 px-6 text-center max-w-xl mx-auto">
        <h1 className="font-display text-4xl font-bold mb-4" style={{ color: "var(--dark)" }}>
          🛍 Your Cart
        </h1>
        <p className="text-sm font-light" style={{ color: "#9a6868" }}>
          Cart functionality coming in Phase 2 — will be connected to Supabase + Stripe.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export const dynamic = "force-dynamic";
