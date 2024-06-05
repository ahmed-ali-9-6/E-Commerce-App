/*eslint-disable*/
import { createContext, useContext, useEffect, useState } from "react";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { AuthContext } from "./AuthContext";

export const WishlistContext = createContext({
  wishlistData: [],
  setWishlistData: [],
});

function WishlistContextProvider(props) {
  const { children } = props;
  const [wishlistData, setWishlistData] = useState([]);
  const { user, userData } = useContext(AuthContext);

  const updateWishlistData = (newData) => {
    const filteredItem = wishlistData.find(
      (data) => data.prodName === newData.prodName
    );
    if (newData?.prodName === filteredItem?.prodName) {
      return;
    }
    let merge = [...wishlistData, newData];
    setWishlistData(merge);
    localStorage.setItem("wishlistItems", JSON.stringify(merge));
    if (user) {
      addItemToWishlist(user?.uid, newData);
    }
  };

  const wishItemDeleteHandler = (index) => {
    let itemToDeleteFirebase = [];
    if (wishlistData?.length === 0) {
      itemToDeleteFirebase = userData?.wishlist[index];
    } else {
      itemToDeleteFirebase = wishlistData[index];
    }
    setWishlistData((prevItems) => {
      const updatedItems = prevItems.filter((_, i) => i !== index);
      localStorage.setItem("wishlistItems", JSON.stringify(updatedItems));
      if (user) {
        removeItemFromWishlist(user?.uid, itemToDeleteFirebase);
      }
      return updatedItems;
    });
  };

  //////FireBase Fuctions//////
  const addItemToWishlist = async (userId, item) => {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      wishlist: arrayUnion(item),
    });
  };

  const removeItemFromWishlist = async (userId, item) => {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      wishlist: arrayRemove(item),
    });
  };

  useEffect(() => {
    if (!(wishlistData?.length === 0)) {
      setWishlistData(wishlistData);
    } else {
      const initWishlist =
        JSON.parse(localStorage.getItem("wishlistItems")) || [];
      setWishlistData(initWishlist);
    }
    if (user) {
      localStorage.setItem("wishlistItems", JSON.stringify([]));
      setWishlistData([]);
    }
  }, [user]);

  return (
    <WishlistContext.Provider
      value={{
        wishlistData,
        updateWishlistData,
        wishItemDeleteHandler,
        setWishlistData,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistContextProvider;
