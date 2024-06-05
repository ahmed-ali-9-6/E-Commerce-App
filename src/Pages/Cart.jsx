/*eslint-disable*/
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { AuthContext } from "../Context/AuthContext";

function Cart() {
  const { cartData, cartItemDeleteHandler } = useContext(CartContext);
  const [quantities, setQuantities] = useState([]);
  const { userData } = useContext(AuthContext);
  const { t } = useTranslation();

  const updateCart = () => {
    if (userData?.cart?.length) {
      return userData?.cart;
    } else {
      return cartData;
    }
  };

  useEffect(() => {
    if (quantities?.length === 0) {
      setQuantities(updateCart().map(() => 1));
    }
  }, [updateCart()]);

  const quantityHandler = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  const calculateTotal = () => {
    return updateCart().reduce((total, item, index) => {
      return total + calculateSubtotal(item.priceAfter, quantities[index]);
    }, 0);
  };
  const subtotal = calculateTotal();

  const lng = Cookies.get("i18next") || "en";

  return (
    <div className="container mx-auto max-w-[1170px] mt-20 mb-[140px] font-poppins px-4 xl:px-0">
      <form>
        <div className=" text-sm text-[#00000080] mb-20">
          <span className="mr-2">{t`Home`} </span> /
          <span className="text-black ml-2"> {t`Cart`}</span>
        </div>
        <div>
          <div className="flex justify-between items-center text-xs sm:text-base px-10 mb-10 h-[72px] w-full rounded shadow-[0_0px_30px_-15px_rgba(0,0,0,0.3)]">
            <h2>{t`Product`}</h2>
            <h2>{t`Price`}</h2>
            <h2>{t`Quantity`}</h2>
            <h2>{t`Subtotal`}</h2>
          </div>
          <ul>
            {updateCart()?.map((item, index) => (
              <li
                className="grid grid-cols-[1.4fr,1fr,1fr,1fr] items-center px-10 mb-10 h-36 sm:h-[72px] w-full rounded shadow-[0_0px_30px_-15px_rgba(0,0,0,0.3)]"
                key={index}
              >
                <div className="flex flex-wrap sm:flex-nowrap sm:gap-4 items-center relative">
                  <button
                    type="button"
                    className={` absolute top-[-12px] ${
                      lng === "ar" ? "right-[-12px]" : "left-[-12px]"
                    } `}
                    onClick={() => cartItemDeleteHandler(index)}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="9" fill="#DB4444" />
                      <path
                        d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <img className=" w-12" src={item.image} alt="Tv Image" />
                  <p className="text-xs sm:text-base">{item.prodName}</p>
                </div>
                <span className="text-xs sm:text-base">${item.priceAfter}</span>
                <input
                  className=" h-11 w-11 sm:w-[72px] justify-self-center mr-6 border border-[#00000066] rounded px-3"
                  defaultValue={1}
                  onChange={(e) =>
                    quantityHandler(index, parseInt(e.target.value))
                  }
                  type="number"
                  min={1}
                />
                <span className=" justify-self-end text-xs sm:text-base">
                  ${calculateSubtotal(item.priceAfter, quantities[index])}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-6 mb-20">
            <Link
              to="/"
              className={` ${
                lng === "de" ? "px-2" : "px-8"
              } sm:px-12 py-4 text-sm sm:text-base border border-[#00000080] rounded font-medium hover:scale-[1.02] active:scale-95`}
            >
              {t`Return To Shop`}
            </Link>
            <button
              type="reset"
              className={`${
                lng === "de" ? "px-2" : "px-8"
              } sm:px-12 py-4 text-sm sm:text-base border border-[#00000080] rounded font-medium hover:scale-[1.02] active:scale-95`}
            >
              {t`Update Cart`}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-[1.5fr,1fr]">
          <div>
            <input
              className="pl-6 h-14 border border-black rounded w-[80%] mb-3 sm:mb-0 sm:w-[43%] mr-4"
              type="text"
              placeholder={t`Coupon Code`}
            />
            <button
              type="button"
              className=" bg-[#DB4444] px-12 py-4 rounded text-[#fafafa] hover:bg-[#db4444f5]"
            >
              {t`Apply Coupon`}
            </button>
          </div>
          <div className="flex flex-col border border-black rounded py-8 px-6 w-full sm:w-[80%]">
            <h2 className=" text-xl text-black font-medium mb-6">Cart Total</h2>
            <div className=" flex justify-between border-b border-[#00000040] pb-3 mb-4">
              <span>{t`Subtotal`}:</span>
              <span>${subtotal}</span>
            </div>
            <div className=" flex justify-between border-b border-[#00000040] pb-3 mb-4">
              <span>{t`Shipping`}:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>{t`Total`}:</span>
              <span>${subtotal}</span>
            </div>
            <Link
              to="checkout"
              className=" bg-[#DB4444] px-12 py-4 rounded text-[#fafafa] self-center hover:bg-[#db4444f5]"
              onClick={() =>
                localStorage.setItem("quantities", JSON.stringify(quantities))
              }
            >
              {t`Proceed to checkout`}
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Cart;
