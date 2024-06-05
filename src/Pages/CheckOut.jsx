import { useContext, useState } from "react";
import bankLogosImg from "../assets/bank-logos.png";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../Context/AuthContext";

function CheckOut() {
  const [isBoxChecked, setIsBoxChecked] = useState(false);
  const [isRadioBankChecked, setIsRadioBankChecked] = useState(true);
  const [isRadioCashChecked, setIsRadioCashChecked] = useState(false);
  const { userData } = useContext(AuthContext);
  const { t } = useTranslation();

  const checkOutData = JSON.parse(localStorage.getItem("cartItems")) || [];
  const quantities = JSON.parse(localStorage.getItem("quantities")) || [];

  const updateCheckOut = () => {
    if (userData?.cart?.length) {
      return userData?.cart;
    } else {
      return checkOutData;
    }
  };

  const checkBoxToggle = () => {
    setIsBoxChecked(!isBoxChecked);
  };

  const RadioBankToggle = () => {
    if (isRadioBankChecked) {
      return;
    }
    setIsRadioBankChecked(!isRadioBankChecked);
    setIsRadioCashChecked(!isRadioCashChecked);
  };

  const RadioCashToggle = () => {
    if (isRadioCashChecked) {
      return;
    }
    setIsRadioCashChecked(!isRadioCashChecked);
    setIsRadioBankChecked(!isRadioBankChecked);
  };
  let subtotal = 0;

  return (
    <div className=" container mx-auto max-w-[1170px] font-poppins mt-20 mb-[140px] px-4 xl:px-0">
      <div className=" text-sm text-[#00000080] mb-20">
        <span className="mr-2">{t`Account`} </span> /
        <span className="mx-2">{t`My Account`} </span> /
        <span className="mx-2">{t`Product`} </span> /
        <span className="mx-2">{t`View Cart`} </span> /
        <span className="text-black ml-2"> {t`CheckOut`}</span>
      </div>
      <form className="flex flex-col gap-16 sm:gap-0 sm:flex-row justify-between items-center">
        <div className=" sm:w-[40%]">
          <h2 className=" text-4xl font-medium font-inter tracking-wider mb-12">
            {t`Billing Details`}
          </h2>
          <div>
            <label className="block mb-2 text-[#00000080]" htmlFor="first-name">
              {t`First Name`}
              <span className="text-[#DB4444]">*</span>
            </label>
            <input
              className=" h-[50px] w-full rounded bg-[#F5F5F5] mb-8"
              type="text"
              id="first-name"
              required
            />

            <label
              className="block mb-2 text-[#00000080]"
              htmlFor="company-name"
            >
              {t`Company Name`}
            </label>
            <input
              className=" h-[50px] w-full rounded bg-[#F5F5F5] mb-8"
              type="text"
              id="company-name"
            />

            <label
              className="block mb-2 text-[#00000080]"
              htmlFor="street-address"
            >
              {t`Street Address`}
              <span className="text-[#DB4444]">*</span>
            </label>
            <input
              className=" h-[50px] w-full rounded bg-[#F5F5F5] mb-8"
              type="text"
              id="street-address"
              required
            />

            <label className="block mb-2 text-[#00000080]" htmlFor="Apartment">
              {t`Apartment, floor, etc. (optional)`}
            </label>
            <input
              className=" h-[50px] w-full rounded bg-[#F5F5F5] mb-8"
              type="text"
              id="Apartment"
            />

            <label className="block mb-2 text-[#00000080]" htmlFor="Town">
              {t`Town/City`}
              <span className="text-[#DB4444]">*</span>
            </label>
            <input
              className=" h-[50px] w-full rounded bg-[#F5F5F5] mb-8"
              type="text"
              id="Town"
              required
            />

            <label
              className="block mb-2 text-[#00000080]"
              htmlFor="phone-number"
            >
              {t`Phone Number`}
              <span className="text-[#DB4444]">*</span>
            </label>
            <input
              className=" h-[50px] w-full rounded bg-[#F5F5F5] mb-8"
              type="tel"
              id="phone-number"
              required
            />

            <label
              className="block mb-2 text-[#00000080]"
              htmlFor="email-address"
            >
              {t`Email Address`}
              <span className="text-[#DB4444]">*</span>
            </label>
            <input
              className=" h-[50px] w-full rounded bg-[#F5F5F5] mb-6"
              type="email"
              id="email-address"
              required
            />
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={checkBoxToggle}
            >
              <div className=" border rounded">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="24"
                    height="24"
                    rx="4"
                    fill={isBoxChecked ? "#DB4444" : "#fff"}
                  />
                  <path
                    d="M5 12L10.25 17L19 7"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-xs sm:text-base">
                {t`Save this information for faster check-out next time`}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[75%] sm:w-[45%]">
          <div className="w-full sm:w-[80%]">
            <ul>
              {updateCheckOut()?.map((item, index) => {
                subtotal = subtotal + item.priceAfter * quantities[index];
                return (
                  <li className="flex justify-between gap-4 mb-8" key={index}>
                    <div className="flex gap-4 items-center">
                      <img className=" w-12" src={item.image} alt="Tv Image" />
                      <p className="text-xs sm:text-base">{item.prodName}</p>
                    </div>
                    <span>${item.priceAfter * quantities[index]}</span>
                  </li>
                );
              })}
            </ul>
            <div className=" flex justify-between border-b border-[#00000040] pb-3 mb-4">
              <span>{t`Subtotal`}:</span>
              <span>${subtotal}</span>
            </div>
            <div className=" flex justify-between border-b border-[#00000040] pb-3 mb-4">
              <span>{t`Shipping`}:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between mb-8">
              <span>{t`Total`}:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between gap-2 items-center mb-8">
              <div className="flex gap-4 items-center">
                <div
                  className="flex justify-center items-center w-6 h-6 border border-black rounded-full cursor-pointer"
                  onClick={RadioBankToggle}
                >
                  <div
                    className={`${
                      isRadioBankChecked ? "" : "hidden"
                    } w-[14px] h-[14px] bg-black rounded-full`}
                  ></div>
                </div>
                <span>{t`Bank`}</span>
              </div>
              <div>
                <img src={bankLogosImg} alt="bank logos" />
              </div>
            </div>
            <div className="flex gap-4 items-center mb-8">
              <div
                className="flex justify-center items-center w-6 h-6 border border-black rounded-full cursor-pointer"
                onClick={RadioCashToggle}
              >
                <div
                  className={`${
                    isRadioCashChecked ? "" : "hidden"
                  } w-[14px] h-[14px] bg-black rounded-full`}
                ></div>
              </div>
              <span>{t`Cash on delivery`}</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:block w-full mb-8">
            <input
              className="pl-6 h-14 border border-black rounded w-full lg:w-[50%] mr-4"
              type="text"
              placeholder={t`Coupon Code`}
            />
            <button
              type="button"
              className=" bg-[#DB4444] px-12 py-4 max-w-[210px] rounded text-[#fafafa] hover:bg-[#db4444f5]"
            >
              {t`Apply Coupon`}
            </button>
          </div>
          <button className=" bg-[#DB4444] px-12 py-4 rounded text-[#fafafa] hover:bg-[#db4444f5]">
            {t`Place Order`}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckOut;
