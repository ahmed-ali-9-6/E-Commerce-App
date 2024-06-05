/*eslint-disable*/
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { totalProductsData } from "../allProductsData";
import StarRating from "../Components/StarRating";

import gpadImg from "../assets/gpad-colored.png";
import keyboardImg from "../assets/keyboard.png";
import tvImg from "../assets/smart-tv.png";
import cpuImg from "../assets/cpu.png";
import { WishlistContext } from "../Context/WishlistContext";
import { CartContext } from "../Context/CartContext";
import { RatingContext } from "../Context/RatingContext";
import { useTranslation } from "react-i18next";

const handleStars = (rate) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    const fillColor = (index) => {
      if (rate > 90) {
        return "#ffad33";
      } else if (index < 4) {
        return "#ffad33";
      } else {
        return "#d1d5db";
      }
    };
    stars.push(
      <svg
        key={i}
        width="16"
        height="15"
        viewBox="0 0 16 15"
        fill={fillColor(i)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" />
      </svg>
    );
  }
  return stars;
};

const rate = `${Math.floor(Math.random() * 21) + 80}`;

const relatedData = [
  {
    salePerc: "-40%",
    image: gpadImg,
    prodName: "HAVIT HV-G92 Gamepad",
    priceBefore: 160,
    priceAfter: 120,
  },
  {
    salePerc: "-35%",
    image: keyboardImg,
    prodName: "AK-900 Wired Keyboard",
    priceBefore: 1160,
    priceAfter: 960,
  },
  {
    salePerc: "-30%",
    image: tvImg,
    prodName: "IPS LCD Gaming Monitor",
    priceBefore: 400,
    priceAfter: 370,
  },
  {
    image: cpuImg,
    prodName: "RGB liquid CPU Cooler",
    priceBefore: 170,
    priceAfter: 160,
  },
];

function Details() {
  const [isFirstColorChecked, setIsFirstColorChecked] = useState(true);
  const [isSecondColorChecked, setIsSecondColorChecked] = useState(false);
  const [counter, setCounter] = useState(1);
  const { setRestDetails } = useContext(RatingContext);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { details } = useParams();

  const result = totalProductsData.find((item) => item.prodName === details);

  if (!result) {
    navigate("*");
  }

  const { updateWishlistData } = useContext(WishlistContext);
  const { updateCartData } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState("M");

  useEffect(() => {
    setRestDetails({
      prodName: result?.prodName,
      image: result?.image,
    });
  }, [result]);

  const wishlistDetailHandler = () => {
    updateWishlistData(result);
  };

  const firstColorToggle = () => {
    if (isFirstColorChecked) {
      return;
    }
    setIsFirstColorChecked(!isFirstColorChecked);
    setIsSecondColorChecked(!isSecondColorChecked);
  };

  const secondColorToggle = () => {
    if (isSecondColorChecked) {
      return;
    }
    setIsSecondColorChecked(!isSecondColorChecked);
    setIsFirstColorChecked(!isFirstColorChecked);
  };

  const toggleSize = (size) => setSelectedSize(size);
  const sizeArr = ["XS", "S", "M", "L", "XL"];

  const increaseCounterHandler = () => {
    setCounter(counter + 1);
  };

  const decreaseCounterHandler = () => {
    if (counter === 1) {
      return;
    }
    setCounter(counter - 1);
  };

  const handleBuyNowBtn = () => {
    updateCartData(result);
  };

  return (
    <div className=" container mx-auto max-w-[1170px] font-poppins mt-20 mb-[140px] px-4 xl:px-0">
      <div className=" text-sm text-[#00000080] mb-[80px]">
        <span className="mr-2">{t`Home`}</span> /
        <span className="text-black ml-2"> {result?.prodName} </span>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-[71px] w-full mb-10 ">
        <div className="grid grid-cols-4 sm:grid-cols-[0.8fr,2fr] grid-rows-5 sm:grid-rows-4 gap-x-2 lg:gap-x-0  gap-y-4 w-[90%] lg:w-[59.8%]">
          <div className="flex justify-center items-center rounded bg-[#F5F5F5] h-[138px] max-w-[170px] col-start-1 col-end-3 sm:col-end-2">
            <img
              className="max-w-[121px] max-h-[114px]"
              src={result?.image}
              alt="product Image"
            />
          </div>
          <div className="flex justify-center items-center rounded bg-[#F5F5F5] h-[138px] max-w-[170px] sm:row-start-4 col-start-3 col-end-5 sm:col-end-1">
            <img
              className="max-w-[121px] max-h-[114px]"
              src={result?.image}
              alt="product Image"
            />
          </div>
          <div className="flex justify-center items-center rounded bg-[#F5F5F5] h-[138px] max-w-[170px] row-start-5 sm:row-start-2 col-start-1 col-end-3 sm:col-end-2">
            <img
              className="max-w-[121px] max-h-[114px]"
              src={result?.image}
              alt="product Image"
            />
          </div>
          <div className="flex justify-center items-center rounded bg-[#F5F5F5] h-[138px] max-w-[170px] row-start-5 sm:row-start-3 col-start-3 col-end-5 sm:col-end-1">
            <img
              className="max-w-[121px] max-h-[114px]"
              src={result?.image}
              alt="product Image"
            />
          </div>
          <div className="flex justify-center items-center col-span-full row-start-1 row-end-4 sm:col-start-2 sm:row-span-full px-[27px] rounded bg-[#F5F5F5]">
            <img className="w-full" src={result?.image} alt="product Image" />
          </div>
        </div>
        <div className="w-[80%] lg:w-[34.2%]">
          <h2 className=" text-2xl font-semibold font-inter mb-4">
            {result?.prodName}
          </h2>
          <div className="flex flex-wrap mb-4">
            <div className=" flex gap-[2px] mr-2">{handleStars(rate)}</div>
            <p className=" text-sm font-semibold text-[#00000080]">
              ({rate} Reviews)
            </p>
            <span className="text-[#00000080] mx-2 sm:mx-4">|</span>
            <span className=" text-sm text-[#00FF66]">In Stock</span>
          </div>
          <p className=" text-2xl font-inter tracking-wide mb-6">
            ${result?.priceAfter * counter}
          </p>
          <p className=" text-sm mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            numquam dignissimos ad distinctio quam, esse, officia, consectetur
            dolor Veniam.
          </p>
          <div className=" border-b border-[#00000050] mb-6"></div>
          <div className="flex items-center mb-6">
            <p className=" text-xl font-inter tracking-wide mr-6">
              {t`Colours`}:
            </p>
            <div
              className={`flex justify-center items-center ${
                isFirstColorChecked && "border-2"
              }  border-black rounded-full w-5 h-5 mr-2 cursor-pointer`}
              onClick={firstColorToggle}
            >
              <div className=" w-3 h-3 rounded-full bg-[#A0BCE0]"></div>
            </div>
            <div
              className={`flex justify-center items-center ${
                isSecondColorChecked && "border-2"
              }  border-black rounded-full w-5 h-5 cursor-pointer`}
              onClick={secondColorToggle}
            >
              <div className=" w-3 h-3 rounded-full bg-[#E07575]"></div>
            </div>
          </div>
          <div className="flex items-center mb-6">
            <p className=" text-xl font-inter tracking-wide mr-6">{t`Size`}:</p>
            <div className="flex gap-4">
              {sizeArr.map((size, i) => (
                <button
                  key={i}
                  className={`w-8 h-8 border rounded font-medium ${
                    selectedSize === size ? "bg-[#DB4444] text-white" : ""
                  }`}
                  type="button"
                  onClick={() => toggleSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex justify-between items-center w-[159px] h-11 border border-[#00000050] rounded overflow-hidden">
              <button
                className="border-r border-[#00000050] h-full text-2xl px-3 hover:bg-[#DB4444] hover:text-white"
                type="button"
                onClick={decreaseCounterHandler}
              >
                -
              </button>
              <p className=" font-medium text-xl">{counter}</p>
              <button
                className="border-l border-[#00000050] h-full text-2xl px-3 hover:bg-[#DB4444] hover:text-white"
                type="Button"
                onClick={increaseCounterHandler}
              >
                +
              </button>
            </div>
            <button
              className=" bg-[#DB4444] px-12 py-[10px] rounded text-[#fafafa] hover:bg-[#db4444f5] active:scale-95"
              onClick={handleBuyNowBtn}
            >
              {t`Buy Now`}
            </button>
            <button
              className="border border-[#00000050] rounded p-1 active:scale-90"
              onClick={wishlistDetailHandler}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="border border-[#00000050] rounded">
            <div className="flex items-center gap-4 pt-6 pl-4 pb-4 border-b pr-2 border-[#00000050]">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_261_4843)">
                  <path
                    d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 11.8182H11.6667"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.81836 15.4545H8.48503"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 19.0909H11.6667"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_261_4843">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <h2 className=" font-medium mb-2">{t`Free Delivery`}</h2>
                <p className=" text-xs font-medium underline">
                  {t`Enter your postal code for Delivery Availability`}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-6 pl-4 pb-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_261_4865)">
                  <path
                    d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_261_4865">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <h2 className=" font-medium mb-2">{t`Return Delivery`}</h2>
                <p className=" text-xs font-medium inline mr-1">
                  {t`Free 30 Days Delivery Returns.`}
                </p>
                <span className=" text-xs font-medium underline">{t`Details`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StarRating />
      <div className=" mb-[140px]">
        <div className="flex gap-4 items-center mb-[60px]">
          <div className=" w-5 h-10 rounded bg-[#DB4444]"></div>
          <h2 className="text-[#DB4444] font-semibold">{t`Related Item`}</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-[30px]">
          {relatedData.map((data, index) => {
            const relatedRate = `${Math.floor(Math.random() * 21) + 80}`;
            const wishlistHandler = () => {
              updateWishlistData(data);
            };

            const cartHandler = () => {
              updateCartData(data);
            };

            return (
              <div
                className=" min-w-[270px]"
                key={toString(index) + data.prodName}
              >
                <div className=" bg-[#f5f5f5] rounded overflow-auto h-[250px] relative mb-4">
                  <div className="flex flex-col gap-2 absolute top-3 right-3">
                    <button
                      className=" rounded-full p-[10px] bg-white active:scale-75"
                      onClick={wishlistHandler}
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
                    <Link
                      to={`/${data.prodName}`}
                      className=" rounded-full py-[10px] px-2 bg-white active:scale-75"
                    >
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.81801 15 3.23601 10.987 1.74301 9.038C1.51239 8.74113 1.38721 8.37592 1.38721 8C1.38721 7.62408 1.51239 7.25887 1.74301 6.962C3.23601 5.013 6.81801 1 11 1C15.182 1 18.764 5.013 20.257 6.962V6.962Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className="flex justify-center items-end h-[83.5%] ">
                    <img src={data.image} alt="product image" />
                  </div>
                  <button
                    className=" w-full py-2 bg-black text-white font-medium opacity-0 transition-all duration-300 hover:opacity-100 active:scale-90"
                    onClick={cartHandler}
                  >
                    Add To Cart
                  </button>
                </div>
                <div>
                  <h2 className=" font-medium mb-2">{data.prodName}</h2>
                  <div className=" mb-2">
                    <span className="mr-3 font-medium text-[#DB4444]">
                      ${data.priceAfter}
                    </span>
                    <span className="font-medium line-through text-[#00000080]">
                      ${data.priceBefore}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className=" flex gap-[2px]">
                      {handleStars(relatedRate)}
                    </div>
                    <p className=" text-sm font-semibold text-[#00000080]">
                      ({relatedRate})
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Details;
