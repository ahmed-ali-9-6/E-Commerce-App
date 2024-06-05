import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function NoPage() {
  const { t } = useTranslation();

  return (
    <div className=" container mx-auto max-w-[1170px] font-poppins mt-20 mb-[140px] px-4 xl:px-0">
      <div className=" text-sm text-[#00000080] mb-[140px]">
        <span className="mr-2">{t`Home`}</span> /
        <span className="text-black ml-2"> {t`404 Error`} </span>
      </div>
      <div className="flex flex-col items-center w-full">
        <p className=" text-[40px] sm:text-[75px] lg:text-[110px] font-medium font-inter tracking-wider mb-10">
          {t`404 Not Found`}
        </p>
        <p className="text-xs sm:text-base mb-20">
          {t`Your visited page not found. You may go home page.`}
        </p>
        <Link
          to="/"
          className=" text-sm sm:text-base bg-[#DB4444] px-12 py-4 rounded text-[#fafafa] hover:bg-[#db4444f5]"
        >
          {t`Back to home page`}
        </Link>
      </div>
    </div>
  );
}

export default NoPage;
