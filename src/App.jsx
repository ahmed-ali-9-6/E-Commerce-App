import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import SingUp from "./Pages/SingUp";
import LogIn from "./Pages/LogIn";
import WishList from "./Pages/WishList";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import Account from "./Pages/Account";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import Details from "./Pages/Details";
import ExploreOurProducts from "./Pages/ExploreOurProducts";
import Reviews from "./Pages/Reviews";
import ScrollToTop from "./Components/Common/ScrollToTop";
import Loader from "./Components/Common/Loader";
import { useContext } from "react";
import { SearchAndLoaderContext } from "./Context/SearchAndLoaderContext";

function App() {
  const { loading } = useContext(SearchAndLoaderContext);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {loading && <Loader />}
      {!loading && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="singup" element={<SingUp />} />
            <Route path="login" element={<LogIn />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="cart" element={<Cart />} />
            <Route path="cart/checkout" element={<CheckOut />} />
            <Route path="account" element={<Account />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path=":details" element={<Details />} />
            <Route path="exploreOurProducts" element={<ExploreOurProducts />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
