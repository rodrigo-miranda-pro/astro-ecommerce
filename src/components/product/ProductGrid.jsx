import ProductCard from './ProductCard.jsx';

export default function ProductGrid({ products, client:load }) {
  if (!products || products.length === 0) {
    return (
      <div class="text-center py-20">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-4">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <p class="text-gray-400 text-lg">No se encontraron productos</p>
        <p class="text-gray-300 text-sm mt-1">Intenta con otra categoría o búsqueda</p>
      </div>
    );
  }

  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
