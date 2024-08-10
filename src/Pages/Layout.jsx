import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import SaleHeader from "../Components/Common/SaleHeader";
import Footer from "../Components/Common/Footer";
import ScrollBtn from "../Components/Common/ScrollBtn";
import ExploreOurProducts from "./ExploreOurProducts";
import { useContext } from "react";
import { SearchAndLoaderContext } from "../Context/SearchAndLoaderContext";

function Layout() {
  const { filteredProducts } = useContext(SearchAndLoaderContext);

  return (
    <>
      <SaleHeader />
      <Header />
      {filteredProducts.length ? <ExploreOurProducts /> : <Outlet />}
      <Footer />
      <ScrollBtn />
    </>
  );
}

export default Layout;
