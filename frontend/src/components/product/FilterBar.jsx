import { useProducts } from "../../hooks/useProducts";

function FilterBar() {
  const {
    category,
    setCategory,
    sortBy,
    setSortBy,
  } = useProducts();

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">

      <div className="bg-white shadow rounded-xl p-4 flex flex-col md:flex-row gap-4">

        {/* Category */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option>All</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Home</option>
          <option>Beauty</option>
          <option>Local Products</option>
        </select>

        {/* Sort */}

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="default">Sort</option>
          <option value="price-low">Price: Low → High</option>
          <option value="price-high">Price: High → Low</option>
          <option value="rating">Highest Rated</option>
        </select>

      </div>

    </div>
  );
}

export default FilterBar;