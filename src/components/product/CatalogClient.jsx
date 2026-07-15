import { useState, useMemo } from 'preact/hooks';
import CategoryFilter from './CategoryFilter.jsx';
import SearchBar from './SearchBar.jsx';
import ProductGrid from './ProductGrid.jsx';

export default function CatalogClient({ products, categories }) {
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let result = products;

    if (selectedCategory !== 'todas') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [products, selectedCategory, searchQuery]);

  return (
    <div>
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <div class="w-full md:w-72">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
      </div>

      <div class="flex items-center justify-between mb-6">
        <p class="text-sm text-gray-400">
          {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      <ProductGrid products={filteredProducts} />
    </div>
  );
}
