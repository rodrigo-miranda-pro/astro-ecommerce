import { useState } from 'preact/hooks';
import useCartStore from '../../store/cartStore.js';
import QuantitySelector from '../ui/QuantitySelector.jsx';

export default function ProductDetailClient({ product }) {
  const addItem = useCartStore((s) => s.addItem);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      <div class="relative rounded-3xl overflow-hidden bg-[#f2f0eb]">
        <img
          src={product.image}
          alt={product.name}
          class="w-full h-full object-cover aspect-square"
        />
        {product.featured && (
          <span class="absolute top-4 left-4 bg-[#cba258] text-white text-sm font-bold px-3 py-1 rounded-full">
            Destacado
          </span>
        )}
      </div>

      <div class="flex flex-col justify-center">
        <span class="text-sm text-gray-400 uppercase tracking-wider">
          {product.category.replace(/-/g, ' ')}
        </span>
        <h1 class="text-3xl md:text-4xl font-bold text-[#1e3932] mt-2">
          {product.name}
        </h1>
        <p class="text-2xl font-bold text-[#00754a] mt-4">
          B/. {product.price.toFixed(2)}
        </p>

        <p class="text-gray-500 leading-relaxed mt-6">
          {product.description}
        </p>

        {product.nutritional && (
          <div class="bg-[#f2f0eb] rounded-xl p-4 mt-6">
            <p class="text-xs text-gray-400 uppercase tracking-wider font-medium">
              Información nutricional
            </p>
            <p class="text-sm text-gray-600 mt-1">{product.nutritional}</p>
          </div>
        )}

        <div class="flex items-center gap-4 mt-8">
          <QuantitySelector quantity={quantity} onChange={setQuantity} label="unidades del producto" />
          <button
            onClick={handleAdd}
            class={`flex-1 py-3 rounded-full font-semibold text-sm transition-all cursor-pointer ${
              added
                ? 'bg-green-500 text-white'
                : 'bg-[#00754a] text-white hover:bg-[#1e3932]'
            }`}
            aria-label={added ? 'Producto agregado al carrito' : `Agregar ${product.name} al carrito`}
          >
            {added ? '¡Agregado al carrito!' : 'Agregar al carrito'}
          </button>
        </div>

        <div class="flex gap-4 mt-4 text-sm text-gray-400">
          <span class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="1" y="3" width="15" height="13" />
              <polygon points="23 7 16 12 23 17 23 7" />
            </svg>
            Entrega en 30-45 min
          </span>
          <span class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Calidad garantizada
          </span>
        </div>
      </div>
    </div>
  );
}
