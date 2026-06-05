const en = {
  nav: {
    themes: "Themes",
    howItWorks: "How it works",
    faq: "FAQ",
    cart: "Cart",
    signIn: "Sign in",
  },
  hero: {
    tag: "✨ Surprise Box · UK Delivery",
    titleStart: "The perfect",
    titleEm: "surprise",
    titleEnd: "for every fandom",
    subtitle: "Curated mystery boxes filled with collectibles, figures & accessories — themed to what you love most.",
    cta: "Choose your theme",
    shipping: "Free UK shipping over £50",
  },
  themes: {
    step: "Step 1 · Pick your theme",
    title: "What world do you love?",
    subtitle: "Each box is handpicked around your chosen universe",
    items: {
      anime:   { name: "Anime",         desc: "Dragon Ball, Naruto, One Piece & more" },
      scifi:   { name: "Sci-Fi",        desc: "Star Wars, Star Trek & beyond" },
      kawaii:  { name: "Kawaii",        desc: "Hello Kitty, Cinnamoroll & friends" },
      fantasy: { name: "Fantasy",       desc: "Harry Potter, My Little Pony & magic" },
      cute:    { name: "Cute",          desc: "Pocoyo, Winnie the Pooh & more" },
      fresas:  { name: "Niñas Fresita", desc: "Strawberry Shortcake & girly magic" },
    },
  },
  configurator: {
    step: "Step 2 · Build your box",
    title: "Choose size & quantity",
    subtitle: "Every item inside is a surprise — we promise you'll love it",
    selectThemeHint: "← Select a theme above to start",
    sizeLabel: "Box Size",
    qtyLabel: "Number of Boxes",
    pieces: "pieces",
    perBox: "per box",
    box: "box",
    boxes: "boxes",
    total: "Total",
    addToCart: "Add to cart",
    addedToCart: "Added! 🎉",
    sizes: {
      S: { name: "Small",  pieces: "3" },
      M: { name: "Medium", pieces: "6" },
      L: { name: "Large",  pieces: "10" },
    },
  },
  howItWorks: {
    title: "How it works",
    steps: [
      { title: "Pick a theme",      desc: "Choose the universe that excites you most" },
      { title: "Choose your size",  desc: "Small, Medium or Large — all packed with surprises" },
      { title: "We curate & ship",  desc: "Handpicked items dispatched from St Albans, UK" },
      { title: "Unbox the magic",   desc: "Every item is a surprise you'll treasure" },
    ],
  },
  footer: {
    tagline: "Handpicked surprises, shipped from the UK",
    rights: "© 2025 Seasoning Boxes. All rights reserved.",
    location: "St Albans, United Kingdom",
  },
};

const es: typeof en = {
  nav: {
    themes: "Temáticas",
    howItWorks: "Cómo funciona",
    faq: "Preguntas",
    cart: "Carrito",
    signIn: "Iniciar sesión",
  },
  hero: {
    tag: "✨ Caja Sorpresa · Envío UK",
    titleStart: "La",
    titleEm: "sorpresa",
    titleEnd: "perfecta para cada fandom",
    subtitle: "Cajas misterio llenas de coleccionables, figuras y accesorios — temáticas para lo que más amas.",
    cta: "Elige tu temática",
    shipping: "Envío gratis en UK en compras mayores a £50",
  },
  themes: {
    step: "Paso 1 · Elige tu temática",
    title: "¿Qué universo te apasiona?",
    subtitle: "Cada caja es seleccionada a mano según tu universo favorito",
    items: {
      anime:   { name: "Anime",         desc: "Dragon Ball, Naruto, One Piece y más" },
      scifi:   { name: "Sci-Fi",        desc: "Star Wars, Star Trek y más allá" },
      kawaii:  { name: "Kawaii",        desc: "Hello Kitty, Cinnamoroll y amigos" },
      fantasy: { name: "Fantasía",      desc: "Harry Potter, My Little Pony y magia" },
      cute:    { name: "Cute",          desc: "Pocoyo, Winnie Pooh y más" },
      fresas:  { name: "Niñas Fresita", desc: "Fresa y su magia rosa" },
    },
  },
  configurator: {
    step: "Paso 2 · Arma tu caja",
    title: "Elige tamaño y cantidad",
    subtitle: "Cada artículo es una sorpresa — te prometemos que te encantará",
    selectThemeHint: "← Selecciona una temática arriba para comenzar",
    sizeLabel: "Tamaño de la caja",
    qtyLabel: "Número de cajas",
    pieces: "piezas",
    perBox: "por caja",
    box: "caja",
    boxes: "cajas",
    total: "Total",
    addToCart: "Agregar al carrito",
    addedToCart: "¡Agregado! 🎉",
    sizes: {
      S: { name: "Pequeña", pieces: "3" },
      M: { name: "Mediana", pieces: "6" },
      L: { name: "Grande",  pieces: "10" },
    },
  },
  howItWorks: {
    title: "Cómo funciona",
    steps: [
      { title: "Elige tu tema",         desc: "Selecciona el universo que más te emociona" },
      { title: "Escoge el tamaño",      desc: "Pequeña, Mediana o Grande — todas llenas de sorpresas" },
      { title: "Curadamos y enviamos",  desc: "Artículos seleccionados a mano desde St Albans, UK" },
      { title: "Desempaca la magia",    desc: "Cada artículo es una sorpresa que vas a adorar" },
    ],
  },
  footer: {
    tagline: "Sorpresas curadas, enviadas desde UK",
    rights: "© 2025 Seasoning Boxes. Todos los derechos reservados.",
    location: "St Albans, Reino Unido",
  },
};

export type Locale = "en" | "es";
export type Translations = typeof en;

export const translations: Record<Locale, Translations> = { en, es };
