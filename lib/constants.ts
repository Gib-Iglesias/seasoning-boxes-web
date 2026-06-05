export type ThemeSlug = "anime" | "scifi" | "kawaii" | "fantasy" | "cute" | "fresas";
export type SizeId = "S" | "M" | "L";

export interface Theme {
  slug: ThemeSlug;
  emoji: string;
  badge?: string;
  color: string;
}

export interface BoxSize {
  id: SizeId;
  icon: string;
  pieces: number;
  price: number;
}

export const THEMES: Theme[] = [
  { slug: "anime",   emoji: "⛩️", color: "#e8433a" },
  { slug: "scifi",   emoji: "🚀", color: "#1a6fb5", badge: "NEW" },
  { slug: "kawaii",  emoji: "🎀", color: "#e87ac7" },
  { slug: "fantasy", emoji: "🧙", color: "#7c3aed" },
  { slug: "cute",    emoji: "🧸", color: "#d97706" },
  { slug: "fresas",  emoji: "🍓", color: "#be185d" },
];

export const SIZES: BoxSize[] = [
  { id: "S", icon: "📦", pieces: 3,  price: 12.99 },
  { id: "M", icon: "🎁", pieces: 6,  price: 22.99 },
  { id: "L", icon: "🛍️", pieces: 10, price: 34.99 },
];

export const ADMIN_EMAIL = "goku.simpson.9517@gmail.com";
