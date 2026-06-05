import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seasoning Boxes – Themed Surprise Boxes",
  description: "Curated mystery boxes filled with collectibles and accessories — themed to what you love most. Shipped from the UK.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html suppressHydrationWarning>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
