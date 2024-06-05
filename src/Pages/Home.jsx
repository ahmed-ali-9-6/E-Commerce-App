import FlashSales from "../Components/ProductSale/FlashSales";
import HeroSection from "../Components/Hero/HeroSection";
import CategorySection from "../Components/CategorySection";
import BestProducts from "../Components/BestProducts/BestProducts";
import SpeakerAdver from "../Components/SpeakerAdver/SpeakerAdver";
import OurProducts from "../Components/OurProducts/OurProducts";
import Featured from "../Components/Features/Featured";
import ExploreOurProducts from "../Pages/ExploreOurProducts";
import { useContext } from "react";
import { SearchAndLoaderContext } from "../Context/SearchAndLoaderContext";

function Home() {
  const { filteredProducts } = useContext(SearchAndLoaderContext);

  return (
    <div className=" container mx-auto lg:max-w-[1170px] font-poppins px-4 xl:px-0 ">
      {filteredProducts.length ? (
        <ExploreOurProducts />
      ) : (
        <>
          <HeroSection />
          <FlashSales />
          <CategorySection />
          <BestProducts />
          <SpeakerAdver />
          <OurProducts />
          <Featured />
        </>
      )}
    </div>
  );
}

export default Home;
