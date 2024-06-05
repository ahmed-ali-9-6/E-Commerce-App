import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n.js";
import WishlistContextProvider from "./Context/WishlistContext.jsx";
import CartContextProvider from "./Context/CartContext.jsx";
import SearchAndLoaderContextProvider from "./Context/SearchAndLoaderContext.jsx";
import AuthContextProvider from "./Context/AuthContext.jsx";
import RatingContextProvider from "./Context/RatingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RatingContextProvider>
        <WishlistContextProvider>
          <CartContextProvider>
            <SearchAndLoaderContextProvider>
              <App />
            </SearchAndLoaderContextProvider>
          </CartContextProvider>
        </WishlistContextProvider>
      </RatingContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
