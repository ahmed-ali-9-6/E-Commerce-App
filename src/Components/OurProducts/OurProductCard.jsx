/*eslint-disable*/
import { Link } from "react-router-dom";
import WishlistBtn from "../Common/WishlistBtn";
import CartBtn from "../Common/CartBtn";

function OurProductCard(props) {
  const {
    item,
    newItem,
    image,
    prodName,
    priceAfter,
    stars,
    rate,
    newSalePerc,
    newImage,
    newProdName,
    newPriceAfter,
    newStars,
    newRate,
  } = props;

  return (
    <div>
      {prodName !== undefined ? (
        <div className=" min-w-[270px]">
          <div className=" bg-[#f5f5f5] rounded overflow-auto h-[250px] relative mb-4">
            <div className="flex flex-col gap-2 absolute top-3 right-3">
              <WishlistBtn item={item} />
              <Link
                to={prodName}
                className=" rounded-full py-[10px] px-2 bg-white active:scale-75 hover:bg-sky-200 duration-300"
                aria-label="Show Details Button"
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
              <img src={image} alt="product image" loading="lazy" />
            </div>
            <CartBtn item={item} />
          </div>
          <div>
            <h2 className=" font-medium mb-2">{prodName}</h2>
            <div className="flex items-center gap-2">
              <span className=" font-medium text-[#DB4444]">${priceAfter}</span>
              <div className=" flex gap-[2px]">{stars}</div>
              <p className=" text-sm font-semibold text-[#00000080]">
                ({rate})
              </p>
            </div>
          </div>
        </div>
      ) : null}
      {newProdName !== undefined ? (
        <div className=" min-w-[270px]">
          <div className=" bg-[#f5f5f5] rounded overflow-auto h-[250px] relative mb-4">
            {newSalePerc ? (
              <span className=" py-1 px-3 bg-[#00FF66] rounded text-xs text-[#fafafa] absolute top-3 left-3">
                {newSalePerc}
              </span>
            ) : null}
            <div className="flex flex-col gap-2 absolute top-3 right-3">
              <WishlistBtn item={newItem} />
              <Link
                to={newProdName}
                className=" rounded-full py-[10px] px-2 bg-white active:scale-75 hover:bg-sky-200 duration-300"
                aria-label="Show Details Button"
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
              <img src={newImage} alt="product image" loading="lazy" />
            </div>
            <CartBtn item={newItem} />
          </div>
          <div>
            <h2 className=" font-medium mb-2">{newProdName}</h2>
            <div className="flex items-center gap-2">
              <span className=" font-medium text-[#DB4444]">
                ${newPriceAfter}
              </span>
              <div className=" flex gap-[2px]">{newStars}</div>
              <p className=" text-sm font-semibold text-[#00000080]">
                ({newRate})
              </p>
            </div>
            <div className="flex gap-2">
              <div className="flex justify-center items-center h-5 w-5 border-2 border-black rounded-full">
                <div className="h-3 w-3 bg-[#FB1314] rounded-full"></div>
              </div>
              <div className="h-5 w-5 bg-[#DB4444] rounded-full"></div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default OurProductCard;
