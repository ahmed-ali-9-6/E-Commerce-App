import playstationImg from "../../assets/playstation.png";
import speakeramazonImg from "../../assets/speaker-amazon.png";
import gucci from "../../assets/gucci.png";

import Features from "./Features";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Featured() {
  const { t } = useTranslation();

  return (
    <div className=" pb-[140px] relative">
      <div className="flex gap-4 items-center mb-6">
        <div className=" w-5 h-10 rounded bg-[#DB4444]"></div>
        <h2 className="text-[#DB4444] font-semibold">{t`Featured`}</h2>
      </div>
      <h3 className=" font-semibold text-4xl tracking-wider font-inter mb-[60px]">
        {t`New Arrival`}
      </h3>

      <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 gap-3 sm:gap-[30px] lg:max-h-[570px] mb-[140px]">
        <div className="bg-black col-span-full lg:col-span-2 row-span-2 lg:row-span-full px-[30px] pt-[90px] relative ">
          <img
            className="h-full w-full"
            src={playstationImg}
            alt="Play Station Image"
            loading="lazy"
          />

          <div className=" flex flex-col gap-2 sm:gap-4 absolute left-8 bottom-8 max-w-[242px]">
            <h2 className=" text-lg sm:text-2xl font-semibold font-inter text-[#fafafa]">
              PlayStation 5
            </h2>
            <p className=" text-xs sm:text-sm text-[#fafafa]">
              {t`Black and White version of the PS5 coming out on sale.`}
            </p>
            <Link
              to="exploreOurProducts"
              className=" text-white font-medium underline"
            >
              {t`Shop Now`}
            </Link>
          </div>
        </div>
        <div className=" bg-black h-full w-full col-span-2 relative">
          <div className=" flex flex-col gap-4 absolute left-6 bottom-6 max-w-[255px]">
            <h2 className=" text-2xl font-semibold font-inter text-[#fafafa]">
              {t`Women's Collections`}
            </h2>
            <p className=" text-sm text-[#fafafa]">
              {t`Featured woman collections that give you another vibe.`}
            </p>
            <Link
              to="exploreOurProducts"
              className=" text-white font-medium underline"
            >
              {t`Shop Now`}
            </Link>
          </div>
        </div>
        <div className=" -z-20 bg-black h-full w-full relative px-10 py-8 overflow-hidden">
          <img
            src={speakeramazonImg}
            alt="Speaker Amazone Image"
            loading="lazy"
          />
          <div className=" flex flex-col sm:gap-2 absolute left-2 sm:left-6 bottom-2 sm:bottom-6 max-w-[255px]">
            <h2 className=" text-lg sm:text-2xl font-semibold font-inter text-[#fafafa]">
              Speakers
            </h2>
            <p className=" text-xs sm:text-sm text-[#fafafa]">
              {t`Amazon wireless speakers`}
            </p>
            <Link
              to="exploreOurProducts"
              className=" text-white font-medium underline"
            >
              {t`Shop Now`}
            </Link>
          </div>
          <div className=" -z-10 absolute right-[50%] top-[40%] shadow-[20px_35px_100px_90px_rgba(119,119,119,1)]"></div>
        </div>
        <div className=" -z-20 bg-black h-full w-full relative px-10 py-8 overflow-hidden">
          <img src={gucci} alt="Gucci perfume Image" loading="lazy" />
          <div className=" z-30 flex flex-col sm:gap-2 absolute left-2 sm:left-6 bottom-2 sm:bottom-6 max-w-[255px]">
            <h2 className=" text-lg sm:text-2xl font-semibold font-inter text-[#fafafa]">
              Perfume
            </h2>
            <p className=" text-xs sm:text-sm text-[#fafafa]">
              {t`GUCCI INTENSE OUD EDP`}
            </p>
            <Link
              to="exploreOurProducts"
              className=" text-white font-medium underline"
            >
              {t`Shop Now`}
            </Link>
          </div>
          <div className=" -z-10 absolute right-[50%] top-[40%] shadow-[20px_35px_100px_90px_rgba(119,119,119,1)]"></div>
        </div>
      </div>

      <Features />

      <a
        href="#header"
        className=" inline-block px-[13px] py-[15px] rounded-full bg-[#f5f5f5] absolute right-0 bottom-[25px] "
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 20V4M5 11L12 4L19 11"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}

export default Featured;
