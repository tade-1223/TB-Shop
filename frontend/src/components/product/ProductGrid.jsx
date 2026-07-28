import ProductCard from "./ProductCard";
import { useProducts } from "../../hooks/useProducts";

function ProductGrid() {
  const {
    products,
    search,
    category,
  } = useProducts();

  let filteredProducts = [...products];

  // Search
  if (search) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Category
  if (category !== "All") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default ProductGrid;