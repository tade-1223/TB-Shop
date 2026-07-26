import products from "../../data/products";
import ProductCard from "./ProductCard";

function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-bold text-center">
        Featured Products
      </h2>

      <p className="text-center text-gray-500 mt-3 mb-12">
        Discover our best-selling products.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
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