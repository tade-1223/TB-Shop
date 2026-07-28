import Hero from "../../components/common/Hero";
import Categories from "../../components/common/Categories";
import Newsletter from "../../components/home/Newsletter";

import ProductSection from "../../components/product/ProductSection";
import FilterBar from "../../components/product/FilterBar";

function Home() {
  return (
    <>
      <Hero />

      <Categories />
      <FilterBar />

      <ProductSection
        title="⭐ Featured Products"
        filter={(product) => product.featured}
      />

      <ProductSection
        title="🇪🇹 Ethiopian Products"
        filter={(product) => product.category === "Local Products"}
      />

      <ProductSection
        title="🆕 New Arrivals"
        filter={(product) => product.newArrival}
      />

      <ProductSection
        title="🔥 Best Deals"
        filter={(product) => product.bestDeal}
      />

      <Newsletter />
    </>
  );
}

export default Home;