import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company */}

        <div>
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            Ethiora
          </h2>

          <p className="text-gray-400">
            Connecting Ethiopia Through Commerce.
          </p>

          <p className="mt-4 text-gray-500">
            Ethiora is an Ethiopian marketplace that
            connects customers with trusted local
            businesses across the country.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="font-bold text-xl mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Products</li>
            <li>Categories</li>
            <li>Wishlist</li>
            <li>Cart</li>
          </ul>
        </div>

        {/* Categories */}

        <div>
          <h3 className="font-bold text-xl mb-4">
            Categories
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Home</li>
            <li>Beauty</li>
            <li>Local Products</li>
          </ul>
        </div>

        {/* Contact */}

        <div>

          <h3 className="font-bold text-xl mb-4">
            Contact
          </h3>

          <div className="space-y-3 text-gray-400">

            <p className="flex items-center gap-2">
              <FiMapPin />
              Addis Ababa, Ethiopia
            </p>

            <p className="flex items-center gap-2">
              <FiPhone />
              +251 960 723 202
            </p>

            <p className="flex items-center gap-2">
              <FiMail />
              support@ethiora.com
            </p>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">
            © 2026 Ethiora. All rights reserved.
          </p>

          <div className="flex gap-5 text-2xl mt-4 md:mt-0">

            <FiFacebook className="hover:text-blue-500 cursor-pointer" />

            <FiTwitter className="hover:text-sky-400 cursor-pointer" />

            <FiInstagram className="hover:text-pink-500 cursor-pointer" />

            <FiLinkedin className="hover:text-blue-400 cursor-pointer" />

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;