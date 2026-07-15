export default function QuantitySelector({ quantity, onChange, min = 1, max = 99, label = 'cantidad' }) {
  return (
    <div class="flex items-center border border-gray-300 rounded-full overflow-hidden" role="group" aria-label={`Selector de ${label}`}>
      <button
        onClick={() => onChange(Math.max(min, quantity - 1))}
        disabled={quantity <= min}
        class="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer text-lg"
        aria-label={`Reducir ${label}`}
      >
        -
      </button>
      <span class="w-10 text-center font-medium text-sm select-none" aria-live="polite">{quantity}</span>
      <button
        onClick={() => onChange(Math.min(max, quantity + 1))}
        disabled={quantity >= max}
        class="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer text-lg"
        aria-label={`Aumentar ${label}`}
      >
        +
      </button>
    </div>
  );
}
