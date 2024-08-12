import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function CategoryNav() {
  const { t } = useTranslation();
  const lng = Cookies.get("i18next") || "en";

  return (
    <ul
      className={`flex flex-col gap-4  ${
        lng === "ar" ? " pr-3" : null
      } relative`}
    >
      <li className=" transition-all duration-300 hover:scale-110">
        <Link to="exploreOurProducts">{t`Woman's Fashion`}</Link>
      </li>
      <li className=" transition-all duration-300 hover:scale-110">
        <Link to="exploreOurProducts">{t`Men's Fashion`}</Link>
      </li>
      <li className=" transition-all duration-300 hover:scale-110">
        <Link to="exploreOurProducts">{t`Electronics`}</Link>
      </li>
      <li className=" transition-all duration-300 hover:scale-110">
        <Link to="exploreOurProducts">{t`Home & Lifestyle`}</Link>
      </li>
      <li className=" transition-all duration-300 hover:scale-110">
        <Link to="exploreOurProducts">{t`Medicine`}</Link>
      </li>
      <li className=" transition-all duration-300 hover:scale-110">
        <Link to="exploreOurProducts">{t`Sports & Outdoor`}</Link>
      </li>
      <li className=" transition-all duration-300 hover:scale-110">
        <Link to="exploreOurProducts">{t`Baby's & Toys`}</Link>
      </li>
      <li className=" transition-all duration-300 hover:scale-110">
        <Link to="exploreOurProducts">{t`Groceries & Pets`}</Link>
      </li>
      <li className=" transition-all duration-300 hover:scale-110">
        <Link to="exploreOurProducts">{t`Health & Beauty`}</Link>
      </li>
      <div
        className={` hidden lg:block border-r absolute top-[-59px] ${
          lng === "ar" ? "right-64" : "right-0"
        }  h-[60vh] border-black opacity-10`}
      ></div>
    </ul>
  );
}

export default CategoryNav;
