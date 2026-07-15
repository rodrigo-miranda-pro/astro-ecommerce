import { useState } from 'preact/hooks';
import useCartStore from '../../store/cartStore.js';
import CartItem from './CartItem.jsx';

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal >= 20 ? 0 : 3.50;
  const total = subtotal + delivery;

  if (items.length === 0) {
    return (
      <div class="text-center py-20">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-6">
          <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        <h2 class="text-2xl font-bold text-[#1e3932] mb-2">Tu carrito está vacío</h2>
        <p class="text-gray-400 mb-8">Parece que aún no has agregado productos a tu carrito.</p>
        <a href="/productos" class="btn-primary inline-block no-underline">
          Explorar productos
        </a>
      </div>
    );
  }

  return (
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-lg font-semibold text-[#1e3932]">
            {items.length} producto{items.length !== 1 ? 's' : ''}
          </h2>
          <button
            onClick={clearCart}
            class="text-sm text-red-500 hover:text-red-600 transition-colors cursor-pointer"
            aria-label="Vaciar todos los productos del carrito"
          >
            Vaciar carrito
          </button>
        </div>

        <div class="space-y-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div class="mt-6">
          <a href="/productos" class="text-[#00754a] font-medium text-sm hover:underline no-underline">
            ← Seguir comprando
          </a>
        </div>
      </div>

      <div>
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
          <h3 class="text-lg font-bold text-[#1e3932] mb-4">Resumen del pedido</h3>

          <div class="space-y-3 text-sm">
            <div class="flex justify-between text-gray-500">
              <span>Subtotal</span>
              <span>B/. {subtotal.toFixed(2)}</span>
            </div>
            <div class="flex justify-between text-gray-500">
              <span>Envío</span>
              <span>
                {delivery === 0 ? (
                  <span class="text-green-600 font-medium">Gratis</span>
                ) : (
                  `B/. ${delivery.toFixed(2)}`
                )}
              </span>
            </div>
            <div class="border-t pt-3 flex justify-between font-bold text-[#1e3932] text-base">
              <span>Total</span>
              <span>B/. {total.toFixed(2)}</span>
            </div>
          </div>

          {delivery > 0 && (
            <div class="mt-4 bg-[#f2f0eb] rounded-xl p-3 text-xs text-gray-500 text-center">
              Agrega B/. {(20 - subtotal).toFixed(2)} más para obtener <strong class="text-[#00754a]">envío gratis</strong>
            </div>
          )}

          <button class="btn-primary w-full mt-6" aria-label="Proceder al pago del pedido">
            Proceder al pago
          </button>

          <div class="mt-4 space-y-2">
            <p class="text-xs text-gray-400 text-center">
              Aceptamos:
            </p>
            <div class="flex justify-center gap-2 text-gray-400">
              <span class="text-xs bg-gray-100 px-2 py-1 rounded">Visa</span>
              <span class="text-xs bg-gray-100 px-2 py-1 rounded">Mastercard</span>
              <span class="text-xs bg-gray-100 px-2 py-1 rounded">Clave</span>
              <span class="text-xs bg-gray-100 px-2 py-1 rounded">Yappy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
