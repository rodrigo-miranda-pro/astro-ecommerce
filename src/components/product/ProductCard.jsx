import { useState } from 'preact/hooks';
import useCartStore from '../../store/cartStore.js';

export default function ProductCard({ product }) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div class="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
      <a href={`/productos/${product.slug}`} class="no-underline">
        <div class="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {product.featured && (
            <span class="absolute top-3 left-3 bg-[#cba258] text-white text-xs font-bold px-2 py-1 rounded-full">
              Destacado
            </span>
          )}
        </div>
      </a>

      <div class="p-4 flex flex-col flex-1">
        <div class="flex-1">
          <span class="text-xs text-gray-400 uppercase tracking-wider">
            {product.category.replace(/-/g, ' ')}
          </span>
          <a href={`/productos/${product.slug}`} class="no-underline">
            <h3 class="font-semibold text-[#1e3932] mt-1 hover:text-[#00754a] transition-colors">
              {product.name}
            </h3>
          </a>
          <p class="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
        </div>

        <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <span class="text-lg font-bold text-[#1e3932]">
            B/. {product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAdd}
            class={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              added
                ? 'bg-green-500 text-white'
                : 'bg-[#00754a] text-white hover:bg-[#1e3932]'
            }`}
            aria-label={added ? 'Producto agregado al carrito' : `Agregar ${product.name} al carrito`}
          >
            {added ? '¡Agregado!' : 'Agregar'}
          </button>
        </div>
      </div>
    </div>
  );
}
