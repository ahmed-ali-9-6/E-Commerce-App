import { Link } from "react-router-dom";
import BestProductsList from "./BestProductsList";
import { useTranslation } from "react-i18next";

function BestProducts() {
  const { t } = useTranslation();

  return (
    <div className=" mb-[140px]">
      <div className="flex gap-4 items-center mb-6">
        <div className=" w-5 h-10 rounded bg-[#DB4444]"></div>
        <h2 className="text-[#DB4444] font-semibold">{t`This Month`}</h2>
      </div>
      <div className=" flex flex-col gap-8 sm:flex-row justify-between items-center w-full sm:items-end mb-7 sm:mb-[60px]">
        <h3 className=" font-semibold text-4xl tracking-wider font-inter">
          {t`Best Selling Products`}
        </h3>
        <Link
          className=" py-4 px-12 rounded text-white bg-[#DB4444] hover:bg-[#db4444f5]"
          to="exploreOurProducts"
        >
          {t`View All`}
        </Link>
      </div>
      <BestProductsList />
    </div>
  );
}

export default BestProducts;
