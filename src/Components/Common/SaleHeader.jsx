/*eslint-disable*/
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function SaleHeader() {
  const { t } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const lng = Cookies.get("i18next") || "en";

  useEffect(() => {
    window.document.dir = i18n.dir();
  }, [lng]);

  const deafultValue = () => {
    if (lng === "en") {
      return "en";
    } else if (lng === "ar") {
      return "ar";
    } else {
      return "de";
    }
  };

  return (
    <div className=" bg-black w-full font-poppins text-sm mb-3">
      <div className=" flex text-[#fafafa] justify-around items-center  sm:h-12">
        <div className=" w-1/2">
          <div className=" flex gap-1 sm:gap-2 justify-center items-end leading-3">
            <p className="text-[8px] sm:text-sm ">{t`Summer Sale`}</p>
            <Link
              to="exploreOurProducts"
              className="font-semibold underline text-[8px] sm:text-sm"
            >
              {t`ShopNow`}
            </Link>
          </div>
        </div>
        <select
          className=" px-2 ml-10 bg-black"
          onChange={changeLanguage}
          defaultValue={deafultValue()}
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="ar"> عربي</option>
        </select>
      </div>
    </div>
  );
}

export default SaleHeader;
