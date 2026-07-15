const products = [
  {
    id: 1,
    name: "Latte Clásico",
    slug: "latte-clasico",
    category: "bebidas-calientes",
    price: 4.25,
    description: "Nuestro clásico espresso con leche vaporizada, coronado con una suave capa de espuma. El equilibrio perfecto entre intensidad y cremosidad.",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600&h=600&fit=crop",
    featured: true,
    nutritional: "250 cal, 10g grasa, 27g carbohidratos, 8g proteína",
  },
  {
    id: 2,
    name: "Cappuccino",
    slug: "cappuccino",
    category: "bebidas-calientes",
    price: 4.50,
    description: "Espresso intenso con leche vaporizada y abundante espuma, finalizado con un toque de chocolate en polvo. Un clásico italiano en cada taza.",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c211?w=600&h=600&fit=crop",
    featured: true,
    nutritional: "200 cal, 7g grasa, 22g carbohidratos, 7g proteína",
  },
  {
    id: 3,
    name: "Mocha Frappuccino",
    slug: "mocha-frappuccino",
    category: "bebidas-frias",
    price: 5.75,
    description: "Una deliciosa mezcla de café, chocolate y leche, licuado con hielo y coronado con crema batida y salsa de chocolate.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=600&fit=crop",
    featured: true,
    nutritional: "350 cal, 15g grasa, 45g carbohidratos, 6g proteína",
  },
  {
    id: 4,
    name: "Chocolate Caliente",
    slug: "chocolate-caliente",
    category: "bebidas-calientes",
    price: 4.75,
    description: "Chocolate derretido con leche vaporizada, crema batida y chips de chocolate. El abrazo cálido que necesitas en cualquier momento.",
    image: "https://images.unsplash.com/photo-1542990253-e902f62e4a61?w=600&h=600&fit=crop",
    featured: false,
    nutritional: "380 cal, 16g grasa, 48g carbohidratos, 10g proteína",
  },
  {
    id: 5,
    name: "Caramel Macchiato",
    slug: "caramel-macchiato",
    category: "bebidas-frias",
    price: 5.50,
    description: "Leche con vainilla, marcada con espresso y terminada con un remolino de caramelo. Dulce, cremoso e irresistible.",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&h=600&fit=crop",
    featured: true,
    nutritional: "300 cal, 10g grasa, 40g carbohidratos, 8g proteína",
  },
  {
    id: 6,
    name: "Muffin de Arándanos",
    slug: "muffin-arandanos",
    category: "comida",
    price: 3.95,
    description: "Muffin esponjoso repleto de arándanos jugosos y cubierto con un toque de azúcar. Perfecto con tu café de la mañana.",
    image: "https://images.unsplash.com/photo-1607958996333-41934787a5e2?w=600&h=600&fit=crop",
    featured: false,
    nutritional: "420 cal, 18g grasa, 58g carbohidratos, 6g proteína",
  },
  {
    id: 7,
    name: "Croissant de Mantequilla",
    slug: "croissant-mantequilla",
    category: "comida",
    price: 3.50,
    description: "Hojaldre francés dorado y crujiente por fuera, suave y mantecoso por dentro. Recién horneado todos los días.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=600&h=600&fit=crop",
    featured: false,
    nutritional: "310 cal, 18g grasa, 30g carbohidratos, 6g proteína",
  },
  {
    id: 8,
    name: "Sándwich de Pollo Pesto",
    slug: "sandwich-pollo-pesto",
    category: "comida",
    price: 7.25,
    description: "Pechuga de pollo a la parrilla, pesto artesanal, tomate deshidratado y queso mozzarella en pan ciabatta tostado.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&h=600&fit=crop",
    featured: false,
    nutritional: "480 cal, 22g grasa, 38g carbohidratos, 32g proteína",
  },
  {
    id: 9,
    name: "Café en Grano Starbucks",
    slug: "cafe-grano-starbucks",
    category: "granos-y-tazas",
    price: 12.95,
    description: "Nuestra mezcla exclusiva de granos 100% arábica tostados a la perfección. Notas de chocolate y nuez tostada.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=600&fit=crop",
    featured: false,
    nutritional: "Bolsa de 340g.",
  },
  {
    id: 10,
    name: "Taza Colección Panamá",
    slug: "taza-coleccion-panama",
    category: "granos-y-tazas",
    price: 15.95,
    description: "Taza de cerámica de edición especial con diseño inspirado en Panamá. Aptas para lavavajillas y microondas. 350ml.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop",
    featured: true,
    nutritional: "Taza de cerámica coleccionable.",
  },
  {
    id: 11,
    name: "Tumbler Rosa Starbucks",
    slug: "tumbler-rosa",
    category: "merchandising",
    price: 22.95,
    description: "Tumbler térmico color rosa con popote reutilizable. Mantiene tus bebidas frías por 12 horas. Capacidad 500ml.",
    image: "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=600&h=600&fit=crop",
    featured: false,
    nutritional: "Tumbler reutilizable.",
  },
  {
    id: 12,
    name: "Botella Starbucks Green",
    slug: "botella-starbucks-green",
    category: "merchandising",
    price: 19.95,
    description: "Botella de acrílico con diseño de la icónica sirena en color verde. Tapa hermética y resistente. 600ml.",
    image: "https://images.unsplash.com/photo-1549366028-ebf7b90f9bea?w=600&h=600&fit=crop",
    featured: false,
    nutritional: "Botella reutilizable 600ml.",
  },
  {
    id: 13,
    name: "Refresher de Fresa y Açaí",
    slug: "refresher-fresa-acai",
    category: "bebidas-frias",
    price: 5.25,
    description: "Una refrescante mezcla de sabores de fresa y açaí, mezclada con agua y servida con fresas frescas.",
    image: "https://images.unsplash.com/photo-1525385133512-2f3bdddafa7b?w=600&h=600&fit=crop",
    featured: false,
    nutritional: "140 cal, 0g grasa, 33g carbohidratos, 0g proteína",
  },
  {
    id: 14,
    name: "Matcha Latte",
    slug: "matcha-latte",
    category: "bebidas-calientes",
    price: 5.25,
    description: "Té matcha japonés de alta calidad mezclado con leche vaporizada. Cremoso, terroso y lleno de antioxidantes.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&h=600&fit=crop",
    featured: false,
    nutritional: "240 cal, 7g grasa, 34g carbohidratos, 12g proteína",
  },
  {
    id: 15,
    name: "Cheesecake de Fresa",
    slug: "cheesecake-fresa",
    category: "comida",
    price: 6.50,
    description: "Suave cheesecake estilo Nueva York con cobertura de fresas frescas y base de galleta graham crujiente.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&h=600&fit=crop",
    featured: false,
    nutritional: "450 cal, 26g grasa, 46g carbohidratos, 8g proteína",
  },
  {
    id: 16,
    name: "Termo Acero Inoxidable",
    slug: "termo-acero-inoxidable",
    category: "merchandising",
    price: 29.95,
    description: "Termo de acero inoxidable con doble pared y tapa térmica. Mantiene caliente 8 horas y frío 24 horas. 750ml.",
    image: "https://images.unsplash.com/photo-1577937927133-78ef98a0692e?w=600&h=600&fit=crop",
    featured: false,
    nutritional: "Termo reutilizable 750ml.",
  },
];

const categories = [
  { id: "todas", name: "Todas", slug: "todas" },
  { id: "bebidas-calientes", name: "Bebidas Calientes", slug: "bebidas-calientes" },
  { id: "bebidas-frias", name: "Bebidas Frías", slug: "bebidas-frias" },
  { id: "comida", name: "Comida", slug: "comida" },
  { id: "granos-y-tazas", name: "Granos y Tazas", slug: "granos-y-tazas" },
  { id: "merchandising", name: "Merchandising", slug: "merchandising" },
];

export function getAllProducts() {
  return products;
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category) {
  if (!category || category === "todas") return products;
  return products.filter((p) => p.category === category);
}

export function getCategories() {
  return categories;
}
