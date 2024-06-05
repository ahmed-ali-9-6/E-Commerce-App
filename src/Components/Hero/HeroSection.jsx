/*eslint-disable*/
import CategoryNav from "./CategoryNav";
import { useState } from "react";
import HeroSlider from "./HeroSlider";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const containerVariants = {
  hidden: { opacity: 0, height: 0 },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
    },
  },
};

function HeroSection() {
  const { t } = useTranslation();

  const lng = Cookies.get("i18next") || "en";

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleCategoryNavHandler = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <div className=" flex justify-between items-center mt-10 mb-[140px] flex-col lg:flex-row relative">
      <div className="w-1/5 hidden lg:block ">
        <CategoryNav />
      </div>
      <AnimatePresence>
        {isCategoryOpen && (
          <div
            className={`w-[200px] lg:hidden absolute top-[-4px] ${
              lng === "ar" ? "right-0" : "left-0"
            } z-10  bg-white py-[5%] rounded`}
          >
            <motion.div
              className="w-[80%]"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <CategoryNav />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <button
        className={`flex gap-1 lg:hidden ml-2 absolute top-[-20px] ${
          lng === "ar" ? "right-[10px]" : "left-[-10px]"
        } z-10 `}
        onClick={toggleCategoryNavHandler}
      >
        {isCategoryOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
        <p className=" font-semibold">{t`CategoryNavbtn`}</p>
      </button>
      <HeroSlider />
    </div>
  );
}

export default HeroSection;
