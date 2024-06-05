/*eslint-disable*/
import gpadImg from "../assets/gpad-colored.png";
import keyboardImg from "../assets/keyboard.png";
import tvImg from "../assets/smart-tv.png";
import labtop2Img from "../assets/labtop2.png";
import { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../Context/AuthContext";

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

const justProductsData = [
  {
    salePerc: "-35%",
    image: labtop2Img,
    prodName: "ASUS FHD Gaming Laptop",
    priceBefore: 1160,
    priceAfter: 996,
  },
  {
    image: tvImg,
    prodName: "IPS LCD Gaming Monitor",
    priceAfter: 1160,
  },
  {
    salePerc: "NEW",
    image: gpadImg,
    prodName: "HAVIT HV-G92 Gamepad",
    priceAfter: 560,
  },
  {
    image: keyboardImg,
    prodName: "AK-900 Wired Keyboard",
    priceAfter: 200,
  },
];

function WishList() {
  const { wishlistData, wishItemDeleteHandler } = useContext(WishlistContext);
  const { updateCartData, setCartData, cartData, replaceCartData } =
    useContext(CartContext);
  const { user, userData } = useContext(AuthContext);
  const { t } = useTranslation();

  const updateWishlist = () => {
    if (userData?.wishlist?.length) {
      return userData?.wishlist;
    } else {
      return wishlistData;
    }
  };
  const updateCart = () => {
    if (userData?.cart?.length) {
      return userData?.cart;
    } else {
      return cartData;
    }
  };

  const moveAllToCart = () => {
    const allWishlistData = updateWishlist();
    const allCartData = updateCart();
    const mergedData = [...allCartData, ...allWishlistData];

    const uniqueItems = mergedData.filter(
      (item, index, self) =>
        index === self.findIndex((i) => i.prodName === item.prodName)
    );

    setCartData(uniqueItems);
    localStorage.setItem("cartItems", JSON.stringify(uniqueItems));
    if (user) {
      replaceCartData(user?.uid, uniqueItems);
    }
  };

  const totalNumWishItems = () => {
    if (userData?.wishlist?.length) {
      return userData?.wishlist?.length;
    } else if (wishlistData.length) {
      return wishlistData.length;
    } else {
      return 0;
    }
  };

  return (
    <div className=" container mx-auto max-w-[1170px] mt-20 mb-[140px] px-4 xl:px-0">
      <div className="mb-20">
        <div className="flex justify-between items-center mb-[60px]">
          <h2 className=" text-xl">
            {t`Wishlist`} ({totalNumWishItems()})
          </h2>
          <button
            className=" font-medium py-4 px-6 sm:px-12 border border-[#00000080] rounded active:scale-90"
            onClick={moveAllToCart}
          >
            {t`Move All To Bag`}
          </button>
        </div>
        <div>
          <div className=" flex flex-wrap justify-center sm:justify-start gap-[30px] mb-[60px]">
            {updateWishlist()?.map((data, index) => {
              const cartHandler = () => {
                updateCartData(data);
              };

              return (
                <div className=" min-w-[270px]" key={index}>
                  <div className=" bg-[#f5f5f5] rounded overflow-auto h-[250px] relative mb-4">
                    {data?.salePerc && (
                      <span
                        className={` py-1 px-3 ${
                          data.salePerc === "NEW"
                            ? "bg-[#00FF66]"
                            : "bg-[#DB4444]"
                        } rounded text-xs text-[#fafafa] absolute top-3 left-3`}
                      >
                        {data?.salePerc}
                      </span>
                    )}
                    <div className="flex flex-col gap-2 absolute top-3 right-3">
                      <button
                        className=" rounded-full p-[5px] bg-white active:scale-75"
                        onClick={() => wishItemDeleteHandler(index)}
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
                            stroke="black"
                            strokeWidth="1.56"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex justify-center items-center h-[83.5%] ">
                      <img
                        src={data?.image}
                        alt="product image"
                        loading="lazy"
                      />
                    </div>
                    <button
                      className=" flex justify-center items-center gap-2  text-xs w-full py-2 bg-black text-white active:scale-90"
                      onClick={cartHandler}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.25 20.25C8.66421 20.25 9 19.9142 9 19.5C9 19.0858 8.66421 18.75 8.25 18.75C7.83579 18.75 7.5 19.0858 7.5 19.5C7.5 19.9142 7.83579 20.25 8.25 20.25Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.75 20.25C19.1642 20.25 19.5 19.9142 19.5 19.5C19.5 19.0858 19.1642 18.75 18.75 18.75C18.3358 18.75 18 19.0858 18 19.5C18 19.9142 18.3358 20.25 18.75 20.25Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.25 3.75H5.25L7.5 16.5H19.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.5 12.5H19.1925C19.2792 12.5001 19.3633 12.4701 19.4304 12.4151C19.4975 12.3601 19.5434 12.2836 19.5605 12.1986L20.9105 5.44859C20.9214 5.39417 20.92 5.338 20.9066 5.28414C20.8931 5.23029 20.8679 5.18009 20.8327 5.13717C20.7975 5.09426 20.7532 5.05969 20.703 5.03597C20.6528 5.01225 20.598 4.99996 20.5425 5H6"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p>Add To Cart</p>
                    </button>
                  </div>
                  <div>
                    <h2 className=" font-medium mb-2">{data?.prodName}</h2>
                    <div className=" mb-2">
                      <span className="mr-3 font-medium text-[#DB4444]">
                        ${data?.priceAfter}
                      </span>
                      <span className="font-medium line-through text-[#00000080]">
                        {data?.priceBefore && "$"}
                        {data?.priceBefore}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-[60px]">
          <div className="flex gap-4 items-center mb-6">
            <div className=" w-5 h-10 rounded bg-[#DB4444]"></div>
            <h2 className=" text-xl">{t`Just For You`}</h2>
          </div>
          <Link
            to="/exploreOurProducts"
            className=" font-medium py-4 px-12 border border-[#00000080] rounded"
          >
            {t`See All`}
          </Link>
        </div>
        <div>
          <div className=" flex overflow-auto gap-[30px] mb-[60px]">
            {justProductsData.map((data, index) => {
              const rate = `${Math.floor(Math.random() * 21) + 80}`;
              const cartHandler = () => {
                updateCartData(data);
              };

              return (
                <div className=" min-w-[270px]" key={index}>
                  <div className=" bg-[#f5f5f5] rounded overflow-auto h-[250px] relative mb-4">
                    {data.salePerc && (
                      <span
                        className={` py-1 px-3 ${
                          data.salePerc === "NEW"
                            ? "bg-[#00FF66]"
                            : "bg-[#DB4444]"
                        } rounded text-xs text-[#fafafa] absolute top-3 left-3`}
                      >
                        {data.salePerc}
                      </span>
                    )}
                    <div className="flex flex-col gap-2 absolute top-3 right-3">
                      <Link
                        to={`/${data.prodName}`}
                        className=" rounded-full py-[10px] px-2 bg-white"
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
                    <div className="flex justify-center items-center h-[83.5%] ">
                      <img
                        src={data.image}
                        alt="product image"
                        loading="lazy"
                      />
                    </div>
                    <button
                      className=" flex justify-center items-center gap-2  text-xs w-full py-2 bg-black text-white active:scale-90"
                      onClick={cartHandler}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.25 20.25C8.66421 20.25 9 19.9142 9 19.5C9 19.0858 8.66421 18.75 8.25 18.75C7.83579 18.75 7.5 19.0858 7.5 19.5C7.5 19.9142 7.83579 20.25 8.25 20.25Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.75 20.25C19.1642 20.25 19.5 19.9142 19.5 19.5C19.5 19.0858 19.1642 18.75 18.75 18.75C18.3358 18.75 18 19.0858 18 19.5C18 19.9142 18.3358 20.25 18.75 20.25Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.25 3.75H5.25L7.5 16.5H19.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.5 12.5H19.1925C19.2792 12.5001 19.3633 12.4701 19.4304 12.4151C19.4975 12.3601 19.5434 12.2836 19.5605 12.1986L20.9105 5.44859C20.9214 5.39417 20.92 5.338 20.9066 5.28414C20.8931 5.23029 20.8679 5.18009 20.8327 5.13717C20.7975 5.09426 20.7532 5.05969 20.703 5.03597C20.6528 5.01225 20.598 4.99996 20.5425 5H6"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p>Add To Cart</p>
                    </button>
                  </div>
                  <div>
                    <h2 className=" font-medium mb-2">{data.prodName}</h2>
                    <div className=" mb-2">
                      <span className="mr-3 font-medium text-[#DB4444]">
                        ${data.priceAfter}
                      </span>
                      <span className="font-medium line-through text-[#00000080]">
                        {data.priceBefore && "$"}
                        {data.priceBefore}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className=" flex gap-[2px]">{handleStars(rate)}</div>
                      <p className=" text-sm font-semibold text-[#00000080]">
                        ({rate})
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishList;
