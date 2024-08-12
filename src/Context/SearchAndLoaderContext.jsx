/*eslint-disable*/
import { createContext, useState, useEffect } from "react";

export const SearchAndLoaderContext = createContext({
  filteredProducts: [],
  setFilteredProducts: [],
});

function SearchAndLoaderContextProvider(props) {
  const { children } = props;
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateFilteredProducts = (newProduct) => {
    setFilteredProducts(newProduct);
  };

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    window.addEventListener("beforeunload", handleStart);
    window.addEventListener("load", handleComplete);

    return () => {
      window.removeEventListener("beforeunload", handleStart);
      window.removeEventListener("load", handleComplete);
    };
  }, []);

  return (
    <SearchAndLoaderContext.Provider
      value={{
        filteredProducts,
        updateFilteredProducts,
        loading,
      }}
    >
      {children}
    </SearchAndLoaderContext.Provider>
  );
}

export default SearchAndLoaderContextProvider;
