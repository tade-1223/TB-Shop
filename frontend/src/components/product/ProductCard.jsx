import { Link } from "react-router-dom";
import { FiHeart, FiMapPin, FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">

      {/* Image */}

      <div className="relative">

        <img
          src={product.image}
          alt={product.name}
          className="h-60 w-full object-cover"
        />

        {product.newArrival && (
          <span className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
            NEW
          </span>
        )}

        <button
  onClick={() => toggleWishlist(product)}
  className={`absolute top-3 right-3 rounded-full p-2 shadow ${
    isWishlisted(product.id)
      ? "bg-red-500 text-white"
      : "bg-white"
  }`}
>
  <FiHeart />
</button>

      </div>

      {/* Content */}

      <div className="p-5">

        <p className="text-yellow-500 font-semibold">
          ⭐ {product.rating} ({product.reviews})
        </p>

        <h3 className="font-bold text-lg mt-2">
          {product.name}
        </h3>

        <p className="text-gray-500">
          {product.category}
        </p>

        <p className="flex items-center gap-2 text-gray-500 mt-2">
          <FiMapPin />
          {product.location}
        </p>

        <p className="text-sm text-gray-500">
          Sold by {product.seller}
        </p>

        <div className="mt-4 flex justify-between items-center">

          <p className="text-2xl font-bold text-green-700">
            ETB {product.price.toLocaleString()}
          </p>

          <span
            className={
              product.stock > 0
                ? "text-green-600"
                : "text-red-600"
            }
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>

        </div>

        <div className="mt-5 space-y-3">

          <Link
            to={`/products/${product.id}`}
            className="block text-center bg-gray-200 py-2 rounded-lg hover:bg-gray-300"
          >
            View Details
          </Link>

          <button
            onClick={() => addToCart(product)}
            className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 flex justify-center items-center gap-2"
          >
            <FiShoppingCart />
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;