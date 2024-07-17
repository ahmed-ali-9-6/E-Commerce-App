import phoneImg from "../../assets/phone.png";
import appleLogo from "../../assets/apple-logo.svg";
import labtopImg from "../../assets/labtop.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "../../StylesSwiper/pagination.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

function HeroSlider() {
  const { t } = useTranslation();

  const lng = Cookies.get("i18next") || "en";

  return (
    <>
      <div className="flex gap-3 overflow-auto w-full sm:w-[76.3%]" dir="ltr">
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
        >
          <SwiperSlide key={1}>
            <div className="flex-none gap-8 bg-black text-white w-full pt-4 lg:pt-0 lg:h-[360px] mt-6 relative">
              <div className="flex justify-between items-center flex-col lg:flex-row w-[100%]">
                <div className=" ml-5 sm:ml-16 mb-10">
                  <div className="flex gap-[14px] items-center mb-5">
                    <img src={appleLogo} alt="Apple Logo" loading="lazy" />
                    <h2 className=" text-[#FAFAFA]">iPhone 14 Series</h2>
                  </div>
                  <p
                    className={` ${
                      lng === "de"
                        ? "text-2xl sm:text-4xl"
                        : "text-3xl sm:text-5xl"
                    } font-semibold leading-tight tracking-wider pr-2 mb-6 font-inter`}
                  >
                    {t`Up to 30% off Voucher`}
                  </p>
                  <Link
                    to="exploreOurProducts"
                    className=" flex items-center gap-3 text-[#FAFAFA]"
                  >
                    <span className=" border-b border-white">{t`Shop Now`}</span>
                    <svg
                      width="19"
                      height="16"
                      viewBox="0 0 19 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 8H18M18 8L11 1M18 8L11 15"
                        stroke="#FAFAFA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
                <img
                  className="my-4 hover:scale-95 duration-300"
                  src={phoneImg}
                  alt="Phone Image"
                  loading="lazy"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide key={2}>
            <div className="flex-none gap-8 bg-black text-white w-full pt-4 lg:pt-0 lg:h-[360px] mt-6 relative">
              <div className="flex justify-between items-center flex-col lg:flex-row w-[100%]">
                <div className=" ml-5 sm:ml-16 mb-10">
                  <h2 className=" text-[#FAFAFA] text-xl font-semibold my-5">
                    Laptop: Lenovo
                  </h2>
                  <p
                    className={` ${
                      lng === "de"
                        ? "text-2xl sm:text-4xl"
                        : "text-3xl sm:text-5xl"
                    } font-semibold leading-tight tracking-wider pr-2 mb-6 font-inter`}
                  >
                    {t`Up to 10% off Voucher`}
                  </p>
                  <Link
                    to="exploreOurProducts"
                    className=" flex items-center gap-3 text-[#FAFAFA]"
                  >
                    <span className=" border-b border-white">{t`Shop Now`}</span>
                    <svg
                      width="19"
                      height="16"
                      viewBox="0 0 19 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 8H18M18 8L11 1M18 8L11 15"
                        stroke="#FAFAFA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
                <img
                  className="my-4 hover:scale-95 duration-300"
                  src={labtopImg}
                  alt="Phone Image"
                  loading="lazy"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default HeroSlider;
