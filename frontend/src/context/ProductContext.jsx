import { createContext, useState } from "react";
import productsData from "../data/products";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products] = useState(productsData);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  return (
    <ProductContext.Provider
      value={{
        products,
        search,
        setSearch,
        category,
        setCategory,
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}