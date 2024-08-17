import { useRef } from "react";
import CountDown from "./CountDown";
import ProductSaleList from "./ProductSaleList";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function FlashSales() {
  const productSaleListRef = useRef(null);
  const { t } = useTranslation();

  const scrollLeftHandle = () => {
    if (productSaleListRef.current) {
      productSaleListRef.current.scrollLeft -= 300;
    }
  };

  const scrollRightHandle = () => {
    if (productSaleListRef.current) {
      productSaleListRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className=" mb-[60px]">
      <div className="flex gap-4 items-center mb-6">
        <div className=" w-5 h-10 rounded bg-[#DB4444]"></div>
        <h2 className="text-[#DB4444] font-semibold">{t`Today's`}</h2>
      </div>
      <div className=" flex flex-col items-center sm:flex-row w-full sm:items-end mb-10">
        <h3 className=" font-semibold text-4xl tracking-wider sm:w-[30%] font-inter mb-5 sm:mb-0">
          {t`Flash Sales`}
        </h3>
        <div className=" flex justify-end sm:justify-between items-center flex-wrap sm:flex-nowrap gap-10 sm:gap-4 w-full">
          <CountDown />
          <div className="flex gap-2" dir="ltr">
            <button
              className=" px-[13px] py-[15px] rounded-full bg-[#f5f5f5]"
              onClick={scrollLeftHandle}
              aria-label="Left button"
            >
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1L1 8L8 15M1 8H17"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className=" px-[13px] py-[15px] rounded-full bg-[#f5f5f5]"
              onClick={scrollRightHandle}
              aria-label="Right button"
            >
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 8H18M18 8L11 1M18 8L11 15"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <ProductSaleList ref={productSaleListRef} />
      <div className="w-full flex justify-center">
        <Link
          to="exploreOurProducts"
          className=" py-4 px-12 rounded text-white bg-[#DB4444] hover:bg-[#db4444f5]"
        >
          {t`View All Products`}
        </Link>
      </div>
    </div>
  );
}

export default FlashSales;
