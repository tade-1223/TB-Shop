import { useParams } from "react-router-dom";
import { FiShoppingCart, FiStar } from "react-icons/fi";
import products from "../../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Product Information */}
        <div>

          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            {product.category}
          </span>

          <h1 className="text-5xl font-bold mt-4">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex mt-4 text-yellow-500">
            {[...Array(product.rating)].map((_, index) => (
              <FiStar
                key={index}
                className="fill-yellow-400"
              />
            ))}
          </div>

          {/* Price */}
          <h2 className="text-4xl font-bold text-blue-600 mt-5">
            ${product.price}
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-8 mt-6">
            {product.description}
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-4 mt-8">

            <button className="bg-gray-200 px-4 py-2 rounded">
              -
            </button>

            <span className="text-xl font-semibold">
              1
            </span>

            <button className="bg-gray-200 px-4 py-2 rounded">
              +
            </button>

          </div>

          {/* Add to Cart */}
          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg flex items-center gap-3 transition">

            <FiShoppingCart />

            Add to Cart

          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;