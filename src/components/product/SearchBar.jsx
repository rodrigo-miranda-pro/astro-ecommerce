export default function SearchBar({ value, onChange }) {
  return (
    <div class="relative mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-4 top-1/2 -translate-y-1/2">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        type="text"
        value={value}
        onInput={(e) => onChange(e.target.value)}
        placeholder="Buscar productos..."
        class="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00754a]/30 focus:border-[#00754a] text-sm bg-white transition-all"
      />
    </div>
  );
}
