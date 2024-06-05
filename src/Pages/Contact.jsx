import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className=" container mx-auto max-w-[1170px] font-poppins mt-20 mb-[140px] px-4 xl:px-0">
      <div className=" text-sm text-[#00000080] mb-20">
        <span className="mr-2">{t`Home`}</span> /
        <span className="text-black ml-2"> {t`Contact`} </span>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-[30px]">
        <div className="py-10 px-[35px] rounded shadow-[0_0_10px_0px_rgba(0,0,0,0.1)] max-w-[340px]">
          <div className="border-b border-black pb-8 mb-8">
            <div className=" flex gap-4 items-center mb-6">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#DB4444" />
                <path
                  d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className=" font-medium">{t`Call To Us`}</p>
            </div>
            <p className=" text-sm mb-4">
              {t`We are available 24/7, 7 days a week.`}
            </p>
            <p className=" text-sm">{t`Phone`}: +8801611112222</p>
          </div>

          <div>
            <div className="flex gap-4 items-center mb-6">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#DB4444" />
                <path
                  d="M10 13L20 20L30 13M10 27H30V13H10V27Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="font-medium">{t`Write To US`}</p>
            </div>
            <p className=" text-sm mb-4">
              {t`Fill out our form and we will contact you within 24 hours.`}
            </p>
            <p className=" text-sm mb-4">{t`Emails`}: customer@exclusive.com</p>
            <p className=" text-sm">{t`Emails`}: support@exclusive.com</p>
          </div>
        </div>

        <div className=" py-6 lg:py-[50px] px-8 rounded shadow-[0_0_10px_0px_rgba(0,0,0,0.1)] w-full">
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <input
              className=" h-[50px] w-full rounded bg-[#F5F5F5] px-4 placeholder:text-[#00000050]"
              type="text"
              id="name"
              placeholder={t`Your Name *`}
              required
            />
            <input
              className=" h-[50px] w-full rounded bg-[#F5F5F5] px-4 placeholder:text-[#00000050]"
              type="text"
              id="email"
              placeholder={t`Your Email *`}
              required
            />
            <input
              className=" h-[50px] w-full rounded bg-[#F5F5F5] px-4 placeholder:text-[#00000050]"
              type="text"
              id="phone"
              placeholder={t`Your Phone *`}
              required
            />
          </div>
          <textarea
            className="w-full h-[207px] rounded bg-[#F5F5F5] px-4 pt-3 mb-8 placeholder:text-[#00000050]"
            id="massage"
            placeholder={t`Your Massage`}
            required
          ></textarea>
          <div className="flex justify-end ">
            <button className=" order-1 bg-[#DB4444] px-12 py-4 rounded text-[#fafafa] hover:bg-[#db4444f5]">
              {t`Send Massage`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
