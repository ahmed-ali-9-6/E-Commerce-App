import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import SaleHeader from "../Components/Common/SaleHeader";
import Footer from "../Components/Common/Footer";

function Layout() {
  return (
    <>
      <SaleHeader />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
