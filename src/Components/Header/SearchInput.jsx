/*eslint-disable*/
import { useContext, useEffect } from "react";
import { SearchAndLoaderContext } from "../../Context/SearchAndLoaderContext";
import { totalProductsData } from "../../allProductsData";
import { useTranslation } from "react-i18next";
import { debounce } from "lodash";
import { useLocation } from "react-router-dom";

function SearchInput() {
  const { updateFilteredProducts } = useContext(SearchAndLoaderContext);
  const { t } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    updateFilteredProducts("");
  }, [pathname]);

  const debounceSearch = debounce((e) => {
    e.preventDefault();
    const searchTerm = e.target.value;

    const filteredProducts = totalProductsData.filter((product) =>
      !searchTerm || searchTerm === ""
        ? 0
        : product.prodName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    updateFilteredProducts(filteredProducts);
  }, 500);

  const handleSearch = (e) => {
    debounceSearch(e);
  };

  return (
    <form className=" relative h-[38px] w-full " dir="ltr">
      <div className="absolute right-1 md:right-3 lg:right-3 top-[10px]">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <input
        type="text"
        name="search"
        className=" text-sm h-9 w-full max-w-[243px] rounded pl-2 sm:pl-4 shadow md:h-9 bg-[#F5F5F5] placeholder:text-wrap placeholder:text-[60%] xl:placeholder:text-[80%]"
        placeholder={t`looking for?`}
        onChange={handleSearch}
      />
    </form>
  );
}

export default SearchInput;
