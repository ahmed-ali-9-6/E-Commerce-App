/*eslint-disable*/
import { useContext, useEffect, useState } from "react";
import { WishlistContext } from "../../Context/WishlistContext";
import { AuthContext } from "../../Context/AuthContext";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";

function WishlistBtn(props) {
  const { item } = props;
  const [isInWishlist, setIsInWishlist] = useState(false);
  const { updateWishlistData, wishItemDeleteHandler, wishlistData } =
    useContext(WishlistContext);
  const { user, userData } = useContext(AuthContext);

  const getWishlistData =
    JSON.parse(localStorage.getItem("wishlistItems")) || [];

  const wishlistHandler = () => updateWishlistData(item);

  const wishlistDeleteHandler = () => {
    const filterData = (data) => data.prodName === item.prodName;
    const index = user
      ? userData?.wishlist.findIndex(filterData)
      : getWishlistData.findIndex(filterData);
    wishItemDeleteHandler(index);
    setIsInWishlist(false);
  };

  useEffect(() => {
    if (user) {
      const db = getFirestore();
      const userRef = doc(db, "users", user.uid);
      const unsubscribe = onSnapshot(userRef, (docSnap) => {
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setIsInWishlist(
            userData?.wishlist?.some((data) => data.prodName === item.prodName)
          );
        }
      });

      return () => unsubscribe();
    } else {
      setIsInWishlist(
        getWishlistData?.some((data) => data.prodName === item.prodName)
      );
    }
  }, [user, item.prodName, wishlistData]);

  return (
    <>
      <button
        className={` rounded-full p-[10px] bg-white active:scale-75 hover:bg-sky-200 duration-300 ${
          isInWishlist ? "hidden" : "block"
        }`}
        onClick={wishlistHandler}
        aria-label="Add to Wishlist Button"
      >
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 1C2.7912 1 1 2.73964 1 4.88594C1 6.61852 1.7 10.7305 8.5904 14.8873C8.71383 14.961 8.85552 15 9 15C9.14448 15 9.28617 14.961 9.4096 14.8873C16.3 10.7305 17 6.61852 17 4.88594C17 2.73964 15.2088 1 13 1C10.7912 1 9 3.35511 9 3.35511C9 3.35511 7.2088 1 5 1Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        className={` rounded-full p-[7px] bg-red-600 active:scale-75 animate-pulse ${
          isInWishlist ? "block" : "hidden"
        }`}
        onClick={wishlistDeleteHandler}
        aria-label="Remove from Wishlist Button"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 5.57143H5.33333L6.66667 21H17.3333L18.6667 5.57143H4M12 9.42857V17.1429M15.3333 9.42857L14.6667 17.1429M8.66667 9.42857L9.33333 17.1429M9.33333 5.57143L10 3H14L14.6667 5.57143"
            stroke="white"
            strokeWidth="1.56"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
}

export default WishlistBtn;
