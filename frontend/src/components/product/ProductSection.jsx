import ProductCard from "./ProductCard";
import { useProducts } from "../../hooks/useProducts";

function ProductSection({ title, filter }) {
  const {
    products,
    search,
    category,
    sortBy,
  } = useProducts();

  // Start with all products
  let filteredProducts = [...products];

  // -----------------------------
  // Search Filter
  // -----------------------------
  if (search.trim() !== "") {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // -----------------------------
  // Category Filter
  // -----------------------------
  if (category !== "All") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  // -----------------------------
  // Section Filter
  // -----------------------------
  filteredProducts = filteredProducts.filter(filter);

  // -----------------------------
  // Sorting
  // -----------------------------
  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <h2 className="text-3xl font-bold mb-8">
        {title}
      </h2>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">
          No products found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>
      )}

    </section>
  );
}

export default ProductSection;