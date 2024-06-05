import { useRef } from "react";
import OurProductsList from "./OurProductsList";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function OurProducts() {
  const ourProductsListRef = useRef(null);
  const { t } = useTranslation();

  const scrollLeftHandle = () => {
    if (ourProductsListRef.current) {
      ourProductsListRef.current.scrollLeft -= 300;
    }
  };

  const scrollRightHandle = () => {
    if (ourProductsListRef.current) {
      ourProductsListRef.current.scrollLeft += 300;
    }
  };
  return (
    <div className=" mb-[140px]">
      <div className="flex gap-4 items-center mb-6">
        <div className=" w-5 h-10 rounded bg-[#DB4444]"></div>
        <h2 className="text-[#DB4444] font-semibold">{t`Our Products`}</h2>
      </div>
      <div className=" flex justify-between items-center w-full sm:items-end mb-[60px]">
        <h3 className=" font-semibold text-4xl tracking-wider font-inter mb-5 sm:mb-0">
          {t`Explore Our Products`}
        </h3>
        <div className=" flex justify-end sm:justify-between items-center flex-wrap sm:flex-nowrap gap-10 sm:gap-4">
          <div className="flex gap-2" dir="ltr">
            <button
              className=" px-[13px] py-[15px] rounded-full bg-[#f5f5f5]"
              onClick={scrollLeftHandle}
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
      <OurProductsList ref={ourProductsListRef} />
      <div className="w-full flex justify-center">
        <Link
          className=" py-4 px-12 rounded text-white bg-[#DB4444] hover:bg-[#db4444f5]"
          to="exploreOurProducts"
        >
          {t`View All Products`}
        </Link>
      </div>
    </div>
  );
}

export default OurProducts;
