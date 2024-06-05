/*eslint-disable*/
import { forwardRef } from "react";
import ProductSaleCard from "./ProductSaleCard";
import { productsData } from "../../allProductsData";

const handleStars = (rate) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    const fillColor = (index) => {
      if (rate > 90) {
        return "#ffad33";
      } else if (index < 4) {
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

const ProductSaleList = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className=" flex gap-[30px] overflow-auto lg:overflow-hidden mb-[60px]"
    >
      {productsData.map((data, index) => {
        const rate = `${Math.floor(Math.random() * 21) + 80}`;
        return (
          <ProductSaleCard
            key={index}
            item={data}
            salePerc={data.salePerc}
            image={data.image}
            prodName={data.prodName}
            priceBefore={data.priceBefore}
            priceAfter={data.priceAfter}
            stars={handleStars(rate)}
            rate={rate}
          />
        );
      })}
    </div>
  );
});

export default ProductSaleList;
