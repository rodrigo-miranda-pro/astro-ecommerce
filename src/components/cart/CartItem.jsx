import useCartStore from '../../store/cartStore.js';

export default function CartItem({ item }) {
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);

  return (
    <div class="flex gap-3 pb-4 border-b">
      <img
        src={item.image}
        alt={item.name}
        class="w-16 h-16 object-cover rounded-lg flex-shrink-0"
      />
      <div class="flex-1 min-w-0">
        <h4 class="font-medium text-sm text-[#1e3932] truncate">{item.name}</h4>
        <p class="text-sm text-[#00754a] font-semibold mt-1">
          B/. {item.price.toFixed(2)}
        </p>
        <div class="flex items-center gap-3 mt-2">
          <div class="flex items-center border rounded-full">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              class="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-[#00754a] transition-colors cursor-pointer text-lg leading-none"
            >
              -
            </button>
            <span class="w-7 text-center text-sm font-medium">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              class="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-[#00754a] transition-colors cursor-pointer text-lg leading-none"
            >
              +
            </button>
          </div>
          <button
            onClick={() => removeItem(item.id)}
            class="text-xs text-red-500 hover:text-red-600 transition-colors cursor-pointer"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
