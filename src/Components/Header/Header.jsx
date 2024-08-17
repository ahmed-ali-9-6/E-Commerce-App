import { useContext, useState } from "react";
import logoImg from "../../assets/Logo.png";
import NavBar from "./NavBar";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { AuthContext } from "../../Context/AuthContext";
import { useTranslation } from "react-i18next";
import { WishlistContext } from "../../Context/WishlistContext";
import { CartContext } from "../../Context/CartContext";
import Cookies from "js-cookie";

const containerVariants = {
  hidden: { opacity: 0, height: 0 },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
    },
  },
};

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAccountNavOpen, setIsAccountNavOpen] = useState(false);
  const { user, userData } = useContext(AuthContext);
  const { wishlistData, setWishlistData } = useContext(WishlistContext);
  const { cartData, setCartData } = useContext(CartContext);
  const { t } = useTranslation();

  const lng = Cookies.get("i18next") || "en";

  const toggleNavBarHandle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleAccountNavHandle = () => {
    setIsAccountNavOpen(!isAccountNavOpen);
  };

  const handleLogOut = () => {
    signOut(auth);
    localStorage.setItem("wishlistItems", JSON.stringify([]));
    localStorage.setItem("cartItems", JSON.stringify([]));
    setWishlistData([]);
    setCartData([]);
    setIsAccountNavOpen(false);
  };

  const handleCloseAccNav = () => {
    setIsAccountNavOpen(false);
  };

  const totalNumWishItems = () => {
    if (userData?.wishlist?.length) {
      return userData?.wishlist?.length;
    } else {
      return wishlistData.length;
    }
  };

  const totalNumCartItems = () => {
    if (userData?.cart?.length) {
      return userData?.cart?.length;
    } else {
      return cartData.length;
    }
  };

  return (
    <div className=" sticky top-0 z-50">
      <div className="container mx-auto lg:max-w-[1170px] font-poppins px-4 lg:px-0 py-4 bg-white">
        <div className=" h-full w-full bg-white absolute top-0 left-0 -z-50"></div>
        <div className="sm:hidden text-2xl font-bold tracking-wider mb-1">
          <Link to="/" className="flex gap-1 items-center" dir="ltr">
            <img
              className="w-10 h-10"
              src={logoImg}
              alt="Exclusive Logo Image"
            />
            <h1>Exclusive</h1>
          </Link>
        </div>
        <div className="flex justify-evenly sm:justify-between items-center">
          <div className="hidden sm:block text-sm mr-3 sm:mr-0 sm:text-2xl font-bold tracking-wider">
            <Link to="/" className="flex gap-1 items-center" dir="ltr">
              <img
                className="w-10 h-10"
                src={logoImg}
                alt="Exclusive Logo Image"
              />
              <h1>Exclusive</h1>
            </Link>
          </div>
          <div className=" hidden w-[43%] lg:w-1/4 sm:block">
            <NavBar />
          </div>
          <div className="flex justify-evenly lg:justify-between items-center sm:w-[29%] gap-3 sm:flex-wrap lg:flex-nowrap relative">
            <SearchInput />
            <Link
              to="wishlist"
              className="active:scale-90"
              aria-label="Wishlist page button"
            >
              <div className=" relative">
                {totalNumWishItems() !== 0 ? (
                  <span className=" absolute top-[-8px] right-[-4px] px-[4px] rounded-full text-white text-xs bg-red-600">
                    {totalNumWishItems()}
                  </span>
                ) : null}
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
            <Link
              to="cart"
              className="active:scale-90"
              aria-label="Cart page button"
            >
              <div className="relative">
                {totalNumCartItems() !== 0 ? (
                  <span className=" absolute top-[-2px] right-[-4px] px-[4px] rounded-full text-white text-xs bg-red-600">
                    {totalNumCartItems()}
                  </span>
                ) : null}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 5H7L10 22H26"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
            <button onClick={toggleAccountNavHandle} aria-label="User button">
              {user ? (
                <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[#004d40] text-white">
                  <span>
                    {user?.displayName?.charAt(0) || user?.email?.charAt(0)}
                  </span>
                </div>
              ) : (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="32"
                    height="32"
                    rx="16"
                    fill={isAccountNavOpen ? "#DB4444" : "#fff"}
                  />
                  <path
                    d="M21 23V21.3333C21 20.4493 20.691 19.6014 20.1408 18.9763C19.5907 18.3512 18.8446 18 18.0667 18H12.9333C12.1554 18 11.4093 18.3512 10.8592 18.9763C10.309 19.6014 10 20.4493 10 21.3333V23"
                    stroke={isAccountNavOpen ? "#fff" : "#000"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z"
                    stroke={isAccountNavOpen ? "#fff" : "#000"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
            {isAccountNavOpen ? (
              <div
                className={`flex flex-col text-[#fafafa] text-xs md:text-sm gap-[13px] pt-[18px] pb-[10px] pr-[12px] pl-[20px] z-40 absolute top-[40px] sm:top-[85px] lg:top-[40px] ${
                  lng === "ar" ? "left-0" : "right-0"
                } bg-[#0000004d] backdrop-blur-xl rounded`}
              >
                {user ? (
                  <h2>
                    <span>{t`Welcome`}</span>
                    <span className="text-[#333] font-bold ml-1">
                      {user?.displayName || user?.email?.split("@")[0]}
                    </span>
                  </h2>
                ) : null}
                <Link
                  to="account"
                  className="flex gap-4 items-center hover:text-slate-300"
                  onClick={handleCloseAccNav}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
                      stroke="#FAFAFA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
                      stroke="#FAFAFA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>{t`Manage My Account`}</p>
                </Link>
                <a
                  href="#"
                  className="flex gap-4 items-center hover:text-slate-300"
                  onClick={handleCloseAccNav}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 6.3V20.5C3 20.7652 3.10536 21.0196 3.29289 21.2071C3.48043 21.3946 3.73478 21.5 4 21.5H20C20.2652 21.5 20.5196 21.3946 20.7071 21.2071C20.8946 21.0196 21 20.7652 21 20.5V6.3H3Z"
                      stroke="#FAFAFA"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 6.3L18.1665 2.5H5.8335L3 6.3M15.7775 9.6C15.7775 11.699 14.0865 13.4 12 13.4C9.9135 13.4 8.222 11.699 8.222 9.6"
                      stroke="#FAFAFA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>{t`My Order`}</p>
                </a>
                <a
                  href="#"
                  className="flex gap-4 items-center hover:text-slate-300"
                  onClick={handleCloseAccNav}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_4132_458)">
                      <path
                        d="M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16"
                        stroke="#FAFAFA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="11.25"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4132_458">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>{t`My Cancellations`}</p>
                </a>
                <Link
                  to="reviews"
                  className="flex gap-4 items-center hover:text-slate-300"
                  onClick={handleCloseAccNav}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.8284 9.93621C20.4517 9.93621 20.7176 10.7286 20.2205 11.1046L16.8905 13.6234C16.1688 14.1693 15.8661 15.1087 16.1334 15.9732L17.3864 20.0261C17.5735 20.6312 16.8729 21.1193 16.3701 20.7341L13.3075 18.3879C12.536 17.7969 11.464 17.7969 10.6925 18.3879L7.61357 20.7466C7.11152 21.1312 6.41161 20.645 6.59677 20.0403L7.83243 16.0046C8.09532 15.146 7.79694 14.2145 7.08413 13.6684L3.73432 11.1022C3.24111 10.7244 3.50831 9.93621 4.12961 9.93621H8.12744C9.07024 9.93621 9.90305 9.32198 10.1815 8.42125L11.379 4.5479C11.5678 3.93721 12.4322 3.93722 12.621 4.5479L13.8185 8.42124C14.0969 9.32198 14.9298 9.93621 15.8726 9.93621H19.8284Z"
                      stroke="#FAFAFA"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <p>{t`My Reviews`}</p>
                </Link>
                {user ? (
                  <button
                    className="flex gap-4 items-center hover:text-slate-300"
                    onClick={handleLogOut}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 12H13.5M6 15L3 12L6 9M11 7V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H13C12.4696 20 11.9609 19.7893 11.5858 19.4142C11.2107 19.0391 11 18.5304 11 18V17"
                        stroke="#FAFAFA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p>{t`Logout`}</p>
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="flex gap-4 items-center hover:text-slate-300"
                    onClick={handleCloseAccNav}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 12H13.5M6 15L3 12L6 9M11 7V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H13C12.4696 20 11.9609 19.7893 11.5858 19.4142C11.2107 19.0391 11 18.5304 11 18V17"
                        stroke="#FAFAFA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p>{t`Log in`}</p>
                  </Link>
                )}
              </div>
            ) : null}
          </div>
          <button
            className="flex flex-col gap-1 sm:hidden ml-2"
            onClick={toggleNavBarHandle}
          >
            {isNavOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="sm:hidden w-full flex justify-center mt-3">
          <AnimatePresence>
            {isNavOpen && (
              <motion.div
                className="w-[80%]"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <NavBar />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className=" border-b mt-4 absolute left-0 border-black opacity-10 w-[100%]"></div>
      </div>
    </div>
  );
}

export default Header;
