// ─── Box Sizes ────────────────────────────────────────────────────────────────
export type SizeId = "S" | "M" | "L";

export interface BoxSize {
  id: SizeId;
  icon: string;
  pieces: number;
  price: number;
}

export const SIZES: BoxSize[] = [
  { id: "S", icon: "📦", pieces: 5,  price: 19.99 },
  { id: "M", icon: "🎁", pieces: 8,  price: 34.99 },
  { id: "L", icon: "🛍️", pieces: 10, price: 49.99 },
];

// ─── Categories & Subcategories ───────────────────────────────────────────────
export type CategorySlug =
  | "romance"
  | "wellness"
  | "scifi"
  | "toys"
  | "pets"
  | "gamer"
  | "anime"
  | "fresas"
  | "foodie"
  | "mystery";

export interface Subcategory {
  slug: string;
  emoji: string;
  badge?: string;
}

export interface Category {
  slug: CategorySlug;
  emoji: string;
  color: string;          // accent color for hero tints
  gradient: string;       // CSS gradient for category hero
  badge?: string;
  subcategories: Subcategory[];
}

export const CATEGORIES: Category[] = [
  {
    slug: "romance",
    emoji: "💕",
    color: "#c2185b",
    gradient: "linear-gradient(135deg, #6d0b2e 0%, #c2185b 60%, #e91e63 100%)",
    subcategories: [
      { slug: "perfumes",    emoji: "🌸" },
      { slug: "makeup",      emoji: "💄" },
      { slug: "skincare",    emoji: "🧴" },
      { slug: "pyjamas",     emoji: "😴" },
      { slug: "date-night",  emoji: "🍷" },
      { slug: "lingerie",    emoji: "🩱" },
    ],
  },
  {
    slug: "wellness",
    emoji: "🌿",
    color: "#2e7d32",
    gradient: "linear-gradient(135deg, #1b4020 0%, #2e7d32 60%, #43a047 100%)",
    subcategories: [
      { slug: "aromatherapy", emoji: "🕯️" },
      { slug: "bath-spa",     emoji: "🛁" },
      { slug: "yoga",         emoji: "🧘" },
      { slug: "supplements",  emoji: "💊" },
      { slug: "herbal-teas",  emoji: "🍵" },
      { slug: "meditation",   emoji: "🔮" },
    ],
  },
  {
    slug: "scifi",
    emoji: "🚀",
    color: "#1565c0",
    gradient: "linear-gradient(135deg, #0a2540 0%, #1565c0 60%, #1e88e5 100%)",
    badge: "NEW",
    subcategories: [
      { slug: "star-wars",   emoji: "⚔️" },
      { slug: "star-trek",   emoji: "🖖" },
      { slug: "marvel",      emoji: "🦸" },
      { slug: "dc",          emoji: "🦇" },
      { slug: "space",       emoji: "🌌" },
      { slug: "robots",      emoji: "🤖" },
    ],
  },
  {
    slug: "toys",
    emoji: "🧸",
    color: "#e65100",
    gradient: "linear-gradient(135deg, #7b2d00 0%, #e65100 60%, #ff6d00 100%)",
    subcategories: [
      { slug: "plushies",    emoji: "🐻" },
      { slug: "figures",     emoji: "🗿" },
      { slug: "puzzles",     emoji: "🧩" },
      { slug: "stationery",  emoji: "✏️" },
      { slug: "stickers",    emoji: "🌟" },
      { slug: "keychains",   emoji: "🔑" },
    ],
  },
  {
    slug: "pets",
    emoji: "🐾",
    color: "#6a1b9a",
    gradient: "linear-gradient(135deg, #38006b 0%, #6a1b9a 60%, #8e24aa 100%)",
    subcategories: [
      { slug: "dogs",        emoji: "🐶" },
      { slug: "cats",        emoji: "🐱" },
      { slug: "bunnies",     emoji: "🐰" },
      { slug: "treats",      emoji: "🦴" },
      { slug: "accessories", emoji: "🎀" },
      { slug: "toys-pets",   emoji: "🪀" },
    ],
  },
  {
    slug: "gamer",
    emoji: "🎮",
    color: "#00695c",
    gradient: "linear-gradient(135deg, #00251a 0%, #00695c 60%, #00897b 100%)",
    subcategories: [
      { slug: "retro",       emoji: "👾" },
      { slug: "rpg",         emoji: "🧝" },
      { slug: "fps",         emoji: "🔫" },
      { slug: "accessories", emoji: "🖱️" },
      { slug: "merch",       emoji: "👕" },
      { slug: "card-games",  emoji: "🃏" },
    ],
  },
  {
    slug: "anime",
    emoji: "⛩️",
    color: "#b71c1c",
    gradient: "linear-gradient(135deg, #4a0000 0%, #b71c1c 60%, #e53935 100%)",
    subcategories: [
      { slug: "dragon-ball", emoji: "🐉" },
      { slug: "naruto",      emoji: "🍥" },
      { slug: "one-piece",   emoji: "☠️" },
      { slug: "demon-slayer",emoji: "🗡️" },
      { slug: "studio-ghibli",emoji:"🌾" },
      { slug: "pokemon",     emoji: "⚡" },
    ],
  },
  {
    slug: "fresas",
    emoji: "🍓",
    color: "#ad1457",
    gradient: "linear-gradient(135deg, #560027 0%, #ad1457 60%, #e91e63 100%)",
    subcategories: [
      { slug: "strawberry-shortcake", emoji: "🍰" },
      { slug: "hello-kitty",          emoji: "🎀" },
      { slug: "my-melody",            emoji: "🌸" },
      { slug: "cinnamoroll",          emoji: "☁️" },
      { slug: "kuromi",               emoji: "🖤" },
      { slug: "pompompurin",          emoji: "🍮" },
    ],
  },
  {
    slug: "foodie",
    emoji: "🍫",
    color: "#4e342e",
    gradient: "linear-gradient(135deg, #1a0000 0%, #4e342e 60%, #6d4c41 100%)",
    subcategories: [
      { slug: "chocolate",   emoji: "🍫" },
      { slug: "snacks",      emoji: "🍿" },
      { slug: "tea-coffee",  emoji: "☕" },
      { slug: "sweets",      emoji: "🍬" },
      { slug: "hot-sauce",   emoji: "🌶️" },
      { slug: "international",emoji:"🌍" },
    ],
  },
  {
    slug: "mystery",
    emoji: "🎲",
    color: "#37474f",
    gradient: "linear-gradient(135deg, #102027 0%, #37474f 60%, #546e7a 100%)",
    badge: "SURPRISE",
    subcategories: [
      { slug: "mystery-s",   emoji: "📦", badge: "5 items" },
      { slug: "mystery-m",   emoji: "🎁", badge: "8 items" },
      { slug: "mystery-l",   emoji: "🛍️", badge: "10 items" },
      { slug: "seasonal",    emoji: "🌟" },
      { slug: "viral-picks", emoji: "📱", badge: "Trending" },
      { slug: "staff-picks", emoji: "❤️" },
    ],
  },
];

// ─── Top Sellers (featured on landing) ───────────────────────────────────────
export interface TopSeller {
  categorySlug: CategorySlug;
  subSlug: string;
  size: SizeId;
  emoji: string;
  badge?: string;
  reviewCount: number;
  rating: number;
}

export const TOP_SELLERS: TopSeller[] = [
  { categorySlug: "romance",  subSlug: "perfumes",   size: "M", emoji: "🌸", badge: "Best Seller", reviewCount: 124, rating: 4.9 },
  { categorySlug: "anime",    subSlug: "demon-slayer",size: "M", emoji: "🗡️", badge: "Fan Fave",   reviewCount: 98,  rating: 4.8 },
  { categorySlug: "pets",     subSlug: "dogs",        size: "S", emoji: "🐶", badge: "Adorable",   reviewCount: 87,  rating: 4.9 },
  { categorySlug: "mystery",  subSlug: "viral-picks", size: "L", emoji: "📱", badge: "Trending",   reviewCount: 203, rating: 4.7 },
];

// ─── Admin ────────────────────────────────────────────────────────────────────
export const ADMIN_EMAIL = "goku.simpson.9517@gmail.com";
