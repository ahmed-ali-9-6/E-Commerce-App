import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import SaleHeader from "../Components/Common/SaleHeader";
import Footer from "../Components/Common/Footer";
import ScrollBtn from "../Components/Common/ScrollBtn";

function Layout() {
  return (
    <>
      <SaleHeader />
      <Header />
      <Outlet />
      <Footer />
      <ScrollBtn />
    </>
  );
}

export default Layout;
