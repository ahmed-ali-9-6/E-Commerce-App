import deliveryIcon from "../../assets/delivery-icon.svg";
import customerIcon from "../../assets/customer-icon.svg";
import guaranteeIcon from "../../assets/guarantee-icon.svg";
import { useTranslation } from "react-i18next";

function Features() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row justify-around gap-10 lg:gap-0">
      <div className="flex flex-col items-center">
        <img
          className=" w-20 h-20 mb-6"
          src={deliveryIcon}
          alt="Delivery Icon"
        />
        <span className=" text-xl font-semibold mb-2">
          {t`FREE AND FAST DELIVERY`}
        </span>
        <p>{t`Free delivery for all orders over $140`}</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          className=" w-20 h-20 mb-6"
          src={customerIcon}
          alt="Customer Service Icon"
        />
        <span className=" text-xl font-semibold mb-2">
          {t`24/7 CUSTOMER SERVICE`}
        </span>
        <p>{t`Friendly 24/7 customer support`}</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          className=" w-20 h-20 mb-6"
          src={guaranteeIcon}
          alt="Money Back Guarantee Icon"
        />
        <span className=" text-xl font-semibold mb-2">
          {t`MONEY BACK GUARANTEE`}
        </span>
        <p>{t`We reurn money within 30 days`}</p>
      </div>
    </div>
  );
}

export default Features;
