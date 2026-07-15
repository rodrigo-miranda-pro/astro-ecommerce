export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div class="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filtrar por categoría">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.slug)}
          aria-pressed={selected === cat.slug}
          class={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
            selected === cat.slug
              ? 'bg-[#00754a] text-white shadow-md'
              : 'bg-gray-100 text-[#1e3932] hover:bg-gray-200'
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
