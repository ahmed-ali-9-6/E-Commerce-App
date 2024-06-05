/*eslint-disable*/
import { createContext, useContext, useEffect, useState } from "react";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext({
  cartData: [],
  setCartData: [],
});

function CartContextProvider(props) {
  const { children } = props;
  const [cartData, setCartData] = useState([]);
  const { user, userData } = useContext(AuthContext);

  const updateCartData = (newData) => {
    const filteredItem = cartData.find(
      (data) => data.prodName === newData.prodName
    );
    if (newData?.prodName === filteredItem?.prodName) {
      return;
    }
    let merge = [...cartData, newData];
    setCartData(merge);
    localStorage.setItem("cartItems", JSON.stringify(merge));
    if (user) {
      addItemToCart(user?.uid, newData);
    }
  };

  const cartItemDeleteHandler = (index) => {
    let itemToDeleteFirebase = [];
    if (cartData?.length === 0) {
      itemToDeleteFirebase = userData?.cart[index];
    } else {
      itemToDeleteFirebase = cartData[index];
    }
    setCartData((prevItems) => {
      const updatedItems = prevItems.filter((_, i) => i !== index);
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      if (user) {
        removeItemFromCart(user?.uid, itemToDeleteFirebase);
      }
      return updatedItems;
    });
  };

  //////FireBase Functions//////
  const addItemToCart = async (userId, item) => {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      cart: arrayUnion(item),
    });
  };

  const removeItemFromCart = async (userId, item) => {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      cart: arrayRemove(item),
    });
  };

  const replaceCartData = async (userId, newCartData) => {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      cart: newCartData,
    });
  };

  useEffect(() => {
    if (!(cartData?.length === 0)) {
      setCartData(cartData);
    } else {
      const initCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartData(initCart);
    }
    if (user) {
      localStorage.setItem("cartItems", JSON.stringify([]));
      setCartData([]);
    }
  }, [user]);

  return (
    <CartContext.Provider
      value={{
        cartData,
        setCartData,
        updateCartData,
        cartItemDeleteHandler,
        replaceCartData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
