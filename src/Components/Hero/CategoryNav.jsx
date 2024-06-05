import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function CategoryNav() {
  const { t } = useTranslation();
  const lng = Cookies.get("i18next") || "en";

  return (
    <ul
      className={`flex flex-col gap-4 relative ${
        lng === "ar" ? " pr-3" : null
      }`}
    >
      <li className=" transition-all duration-300 hover:scale-110">
        <Link
          to="exploreOurProducts"
          className="flex justify-between items-center"
        >
          <p> {t`Woman's Fashion`}</p>
          <svg
            className={` mr-6 active:rotate-45 ${
              lng === "ar" ? "rotate-180" : null
            }`}
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z"
              fill="black"
            />
          </svg>
        </Link>
      </li>
      <li className=" transition-all duration-300 hover:scale-110">
        <Link
          to="exploreOurProducts"
          className="flex justify-between items-center"
        >
          <p> {t`Men's Fashion`}</p>
          <svg
            className={` mr-6 active:rotate-45 ${
              lng === "ar" ? "rotate-180" : null
            }`}
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z"
              fill="black"
            />
          </svg>
        </Link>
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
        className={` hidden lg:block border-r absolute top-[-43px] ${
          lng === "ar" ? "right-64" : "right-0"
        }  h-[60vh] border-black opacity-10`}
      ></div>
    </ul>
  );
}

export default CategoryNav;
