/*eslint-disable*/
import { totalProductsData } from "../allProductsData";
import { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { SearchAndLoaderContext } from "../Context/SearchAndLoaderContext";
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
let id = 0;
function ExploreOurProducts() {
  const { updateWishlistData } = useContext(WishlistContext);
  const { updateCartData } = useContext(CartContext);
  const { filteredProducts } = useContext(SearchAndLoaderContext);
  const { t } = useTranslation();

  return (
    <div className=" container mx-auto max-w-[1170px] font-poppins mt-20 mb-[140px] px-4 xl:px-0">
      <div className=" mb-[140px]">
        <div className="flex gap-4 items-center mb-[60px]">
          <div className=" w-5 h-10 rounded bg-[#DB4444]"></div>
          <h2 className="text-[#DB4444] font-semibold">{t`Explore Our Products`}</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-[30px]">
          {(filteredProducts?.length
            ? filteredProducts
            : totalProductsData
          ).map((data, index) => {
            id = +1;
            const rate = `${Math.floor(Math.random() * 21) + 80}`;
            const wishlistHandler = () => {
              updateWishlistData(data);
            };

            const cartHandler = () => {
              updateCartData(data);
            };

            return (
              <div className=" min-w-[270px]" key={index + data.prodName + id}>
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
                    <img src={data.image} alt="product image" loading="lazy" />
                  </div>
                  <button
                    className=" w-full py-2 bg-black text-white font-medium lg:opacity-0 transition-all duration-300 hover:opacity-100 active:scale-90"
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
  );
}

export default ExploreOurProducts;
