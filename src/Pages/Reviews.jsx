/*eslint-disable*/
import { useContext } from "react";
import { RatingContext } from "../Context/RatingContext";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const handleStars = (rate) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    const fillColor = (index) => {
      if (rate > 6) {
        return "#ffad33";
      } else if (index < rate) {
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

function Reviews() {
  const { review, reviewDeleteHandler } = useContext(RatingContext);
  const { t } = useTranslation();

  const lng = Cookies.get("i18next") || "en";

  return (
    <div className=" container mx-auto max-w-[1170px] font-poppins mt-20 mb-[140px] px-4 xl:px-0">
      <div className="flex gap-4 items-center mb-[60px]">
        <div className=" w-5 h-10 rounded bg-[#DB4444]"></div>
        <h2 className="text-[#DB4444] font-semibold">{t`My Reviews`}</h2>
      </div>
      <ul>
        {review?.map((item, index) => (
          <li
            className="grid grid-col-1 justify-items-center md:justify-items-start md:grid-cols-[1.4fr,1fr,1fr] items-center gap-3 py-10 px-10 md:pl-20 mb-10 h-auto w-full rounded shadow-[0_0px_30px_-15px_rgba(0,0,0,0.3)]"
            key={index}
          >
            <div className="flex flex-wrap sm:flex-nowrap sm:gap-4 items-center relative">
              <button
                type="button"
                className={` absolute top-[-12px] ${
                  lng === "ar" ? "right-[-2px]" : "left-[-12px]"
                } `}
                onClick={() => reviewDeleteHandler(index)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="9" fill="#DB4444" />
                  <path
                    d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <img className="w-12 mr-2" src={item.image} alt="Product Image" />
              <p className="text-base">{item.prodName}</p>
            </div>
            <div className="flex gap-1">{handleStars(item.rating)}</div>
            <p>{item.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
