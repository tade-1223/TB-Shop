import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import { WishlistProvider } from "./context/WishlistContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductProvider>
      <WishlistProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </WishlistProvider>
    </ProductProvider>
  </BrowserRouter>
);