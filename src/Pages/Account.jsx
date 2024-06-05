import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useTranslation } from "react-i18next";

function Account() {
  const { user } = useContext(AuthContext);
  const { t } = useTranslation();

  return (
    <div className=" container mx-auto max-w-[1170px] font-poppins mt-20 mb-[140px] px-4 xl:px-0">
      <div className="flex justify-between mb-20">
        <div className=" text-sm text-[#00000080]">
          <span className="mr-2">{t`Home`}</span> /
          <span className="text-black ml-2"> {t`My Account`} </span>
        </div>
        <div className=" text-sm">
          <span>{t`Welcome`}! </span>
          {user ? (
            <span className="text-[#DB4444]">
              {user?.displayName || user?.email?.split("@")[0]}
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-12 sm:gap-4 justify-between items-center">
        <div className="border rounded sm:border-none py-3 px-6 sm:py-0 sm:px-0">
          <h2 className=" font-medium mb-4">{t`Manage My Account`}</h2>
          <nav className="flex flex-col gap-2 mb-6 ml-9 text-[#00000050]">
            <a
              href="#"
              className=" hover:text-[#DB4444] transition-all duration-300"
            >
              {t`My Profile`}
            </a>
            <a
              href="#"
              className=" hover:text-[#DB4444] transition-all duration-300"
            >
              {t`Address Book`}
            </a>
            <a
              href="#"
              className=" hover:text-[#DB4444] transition-all duration-300"
            >
              {t`My Payment Options`}
            </a>
          </nav>
          <h2 className=" font-medium mb-4">{t`My Orders`}</h2>
          <nav className="flex flex-col gap-2 mb-6 ml-9 text-[#00000050]">
            <a
              href="#"
              className=" hover:text-[#DB4444] transition-all duration-300"
            >
              {t`My Returns`}
            </a>
            <a
              href="#"
              className=" hover:text-[#DB4444] transition-all duration-300"
            >
              {t`My Cancellations`}
            </a>
          </nav>
          <h2 className=" font-medium">{t`My WishList`}</h2>
        </div>
        <div className="sm:w-[74.3%] py-10 px-8 lg:px-20 rounded shadow-[0_0_10px_0px_rgba(0,0,0,0.1)]">
          <form className="w-full">
            <h2 className=" text-xl font-medium text-[#DB4444] mb-4">
              {t`Edit Your Profile`}
            </h2>
            <div className="flex flex-col ">
              <div className=" flex flex-col sm:flex-row sm:gap-5 lg:gap-[50px] w-full">
                <div className="w-full">
                  <label className="block mb-2" htmlFor="first-name">
                    {t`First Name`}
                  </label>
                  <input
                    className=" h-[50px] w-full rounded bg-[#F5F5F5] mb-8 px-4 placeholder:text-[#00000050]"
                    type="text"
                    id="first-name"
                    placeholder={t`Ahmed`}
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-2" htmlFor="last-name">
                    {t`Last Name`}
                  </label>
                  <input
                    className=" h-[50px] w-full rounded bg-[#F5F5F5] mb-8 px-4 placeholder:text-[#00000050]"
                    type="text"
                    id="last-name"
                    placeholder={t`Ali`}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-5 lg:gap-[50px] w-full">
                <div className="w-full">
                  <label className="block mb-2" htmlFor="email">
                    {t`Email`}
                  </label>
                  <input
                    className=" h-[50px] w-full rounded bg-[#F5F5F5] mb-8 px-4 placeholder:text-[#00000050]"
                    type="email"
                    id="email"
                    placeholder="aa@gmail.com"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-2" htmlFor="address">
                    {t`Address`}
                  </label>
                  <input
                    className=" h-[50px] w-full rounded bg-[#F5F5F5] mb-8 px-4 placeholder:text-[#00000050]"
                    type="text"
                    id="address"
                    placeholder={t`Giza,Egypt`}
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block mb-2" htmlFor="password">
                {t`Password Changes`}
              </label>
              <input
                className=" h-[50px] w-full rounded bg-[#F5F5F5] mb-4 px-4 placeholder:text-[#00000050]"
                type="text"
                id="password"
                placeholder={t`Current Passwod`}
                required
              />
              <input
                className=" h-[50px] w-full rounded bg-[#F5F5F5] mb-4 px-4 placeholder:text-[#00000050]"
                type="text"
                id="new-password"
                placeholder={t`New Passwod`}
                required
              />
              <input
                className=" h-[50px] w-full rounded bg-[#F5F5F5] mb-6 px-4 placeholder:text-[#00000050]"
                type="text"
                id="confirm-password"
                placeholder={t`Confirm New Passwod`}
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-end">
              <button
                type="reset"
                className=" order-2 hover:scale-105 active:scale-95"
              >
                {t`Cancel`}
              </button>
              <button className=" order-1 bg-[#DB4444] px-12 py-4 rounded text-[#fafafa] hover:bg-[#db4444f5]">
                {t`Save Changes`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Account;
