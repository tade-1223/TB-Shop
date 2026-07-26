import { useCart } from "../../hooks/useCart";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="max-w-5xl mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold">
          Your Cart is Empty
        </h1>

        <p className="text-gray-500 mt-4">
          Add some products to start shopping.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">

      <h1 className="text-4xl font-bold mb-10">
        Shopping Cart
      </h1>

      {cart.map(item => (

        <div
          key={item.id}
          className="bg-white shadow rounded-xl p-6 mb-6 flex justify-between items-center"
        >

          <div>

            <h2 className="text-xl font-semibold">
              {item.name}
            </h2>

            <p className="text-blue-600 mt-2">
              ${item.price}
            </p>

          </div>

          <div className="flex items-center gap-3">

            <button
              onClick={() => decreaseQuantity(item.id)}
              className="bg-gray-200 px-3 py-1 rounded"
            >
              -
            </button>

            <span className="font-bold">
              {item.quantity}
            </span>

            <button
              onClick={() => increaseQuantity(item.id)}
              className="bg-gray-200 px-3 py-1 rounded"
            >
              +
            </button>

          </div>

          <div>

            <p className="font-bold text-lg">
              ${(item.price * item.quantity).toFixed(2)}
            </p>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 mt-2"
            >
              Remove
            </button>

          </div>

        </div>

      ))}

      <div className="text-right mt-10">

        <h2 className="text-3xl font-bold">
          Total: ${total.toFixed(2)}
        </h2>

        <button
          className="mt-6 bg-green-600 text-white px-8 py-3 rounded-lg"
        >
          Checkout
        </button>

      </div>

    </div>
  );
}

export default Cart;