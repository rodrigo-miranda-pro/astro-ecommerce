import { useState } from 'preact/hooks';
import useCartStore from '../../store/cartStore.js';
import CartItem from './CartItem.jsx';

export default function CartDrawer({ isOpen, onClose }) {
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div class="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="Carrito de compras">
      <div class="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />

      <div class="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        <div class="flex items-center justify-between p-4 border-b">
          <h2 class="text-lg font-bold text-[#1e3932]">
            Carrito ({items.length})
          </h2>
          <button
            onClick={onClose}
            class="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Cerrar carrito"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div class="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div class="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-4">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <p class="text-gray-400">Tu carrito está vacío</p>
              <a href="/productos" class="text-[#00754a] font-medium text-sm mt-2 inline-block no-underline hover:underline">
                Ver productos
              </a>
            </div>
          ) : (
            <div class="space-y-4">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div class="border-t p-4 space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-gray-500">Subtotal</span>
              <span class="text-lg font-bold text-[#1e3932]">
                B/. {subtotal.toFixed(2)}
              </span>
            </div>
            <a
              href="/carrito"
              class="block w-full bg-[#00754a] text-white text-center py-3 rounded-full font-semibold hover:bg-[#1e3932] transition-colors no-underline"
            >
              Ver carrito completo
            </a>
            <button
              onClick={clearCart}
              class="block w-full text-center text-sm text-red-500 hover:text-red-600 transition-colors cursor-pointer"
              aria-label="Vaciar todos los productos del carrito"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
