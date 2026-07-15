import useCartStore from '../../store/cartStore.js';

export default function CartIcon() {
  const items = useCartStore((s) => s.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <a
      href="/carrito"
      class="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors no-underline"
      aria-label="Ver carrito"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1e3932"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
      {totalItems > 0 && (
        <span class="absolute -top-0.5 -right-0.5 bg-[#cba258] text-white text-xs font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1">
          {totalItems}
        </span>
      )}
    </a>
  );
}
