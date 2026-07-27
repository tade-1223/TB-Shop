import { Link } from "react-router-dom";
import { FiShoppingCart, FiStar } from "react-icons/fi";
import { useCart } from "../../hooks/useCart";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <Link
      to={`/product/${product.id}`}
      className="block"
    >
      <div className="bg-white rounded-xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2">

        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover hover:scale-110 transition duration-500"
          />
        </div>

        <div className="p-5">
          <h3 className="text-xl font-semibold">
            {product.name}
          </h3>

          <div className="flex mt-2 text-yellow-500">
            {[...Array(product.rating)].map((_, index) => (
              <FiStar key={index} className="fill-yellow-400" />
            ))}
          </div>

          <p className="text-2xl font-bold text-blue-600 mt-3">
            ETB {product.price.toLocaleString()}
          </p>

          <button
            onClick={() => addToCart(product)}
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 flex justify-center items-center gap-2"
          >
            <FiShoppingCart />
            Add to Cart
          </button>
        </div>

      </div>
    </Link>
  );
}

export default ProductCard;