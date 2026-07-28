import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useProducts } from "../../hooks/useProducts";

import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiMenu,
} from "react-icons/fi";

function Navbar() {
  const { search, setSearch } = useProducts();
  const { cart } = useCart();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">

        {/* Top Navbar */}
        <div className="flex items-center justify-between py-4 px-6">

          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-bold text-green-700"
          >
            Ethiora
          </Link>

          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-2 w-[420px]">

            <FiSearch className="text-gray-500 mr-3" />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none w-full"
            />

          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">

            <Link to="/products">
              Products
            </Link>

            <Link
              to="/wishlist"
              className="text-2xl hover:text-red-500"
            >
              <FiHeart />
            </Link>

            <Link
              to="/cart"
              className="relative text-2xl hover:text-green-700"
            >
              <FiShoppingCart />

              <span
                className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex justify-center items-center"
              >
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>

            </Link>

            <Link
              to="/login"
              className="text-2xl hover:text-green-700"
            >
              <FiUser />
            </Link>

            {/* Mobile Menu */}
            <button className="md:hidden text-2xl">
              <FiMenu />
            </button>

          </div>

        </div>

      </div>
    </header>
  );
}

export default Navbar;