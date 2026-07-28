import { useParams } from "react-router-dom";
import products from "../../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <h1 className="text-center text-3xl mt-20">
        Product Not Found
      </h1>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <div className="grid md:grid-cols-2 gap-10">

        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-xl shadow"
        />

        <div>

          <h1 className="text-5xl font-bold">
            {product.name}
          </h1>

          <p className="text-2xl text-blue-600 mt-5">
            ETB {product.price.toLocaleString()}
          </p>

          <p className="mt-6 text-gray-600">
            {product.description}
          </p>

          <button
            className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg"
          >
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductDetails;