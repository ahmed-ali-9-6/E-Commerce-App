/*eslint-disable*/
import { Link } from "react-router-dom";
import sideImage from "../assets/sideImage.svg";
import { AuthContext } from "../Context/AuthContext";
import { useContext, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { AnimatePresence, motion } from "framer-motion";

function SingUp() {
  const { user } = useContext(AuthContext);
  const [message, setMessage] = useState(false);
  const { t } = useTranslation();

  const lng = Cookies.get("i18next") || "en";

  const HandleSignUp = () => {
    if (user) {
      alert("You are already logged in!");
      return;
    }
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 6000);
  };

  const HandleCreateAccount = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setMessage(true);
        setTimeout(() => {
          setMessage(false);
        }, 4000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      })
      .finally(() => {
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.password.value = "";
      });
  };

  const messVariants = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div
      className="flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-0 mt-[60px] mb-[140px] max-w-[1305px] pr-4 relative"
      dir="ltr"
    >
      <AnimatePresence mode="wait">
        {message && (
          <motion.div
            layout="position"
            key="nav-links"
            variants={messVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="flex justify-center items-center text-3xl font-bold h-[200px] w-[350px] sm:w-[400px] fixed top-[100px] right-[20px] rounded text-white bg-[#DB4444]"
          >
            <span className="mr-2">{t`Welcome`}</span>
            {user?.displayName || user?.email?.split("@")[0] || "To Exclusive"}
          </motion.div>
        )}
      </AnimatePresence>
      <img
        className="w-[90%] lg:w-[61.7%]"
        src={sideImage}
        alt="Side Image With Mobile and Cart"
        loading="lazy"
      />

      <div
        className=" w-[90%] sm:w-[60%] lg:w-[28.5%]"
        dir={lng === "ar" ? "rtl" : null}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold sm:font-medium font-inter tracking-wider mb-6">
          {t`Create an account`}
        </h2>
        <p className="mb-12">{t`Enter your details below`}</p>
        <form
          className="flex flex-col gap-10 mb-4"
          onSubmit={HandleCreateAccount}
        >
          <input
            className="border-b h-8 px-1"
            placeholder={t`Name`}
            name="Name"
            id="name"
            type="text"
            required
          />
          <input
            className="border-b h-8 px-1"
            placeholder={t`Email or Phone Number`}
            name="Email-or-Number"
            id="email"
            type="text"
            required
          />
          <input
            className="border-b h-8 px-1"
            placeholder={t`Password`}
            name="password"
            id="password"
            type="password"
            required
          />
          <button className="py-4 w-full text-[#fafafa] rounded bg-[#DB4444] hover:bg-[#db4444e0] font-medium active:scale-95">
            {t`Create Account`}
          </button>
        </form>
        <div>
          <button
            className="py-4 flex justify-center border border-black rounded w-full mb-8 active:scale-95"
            onClick={HandleSignUp}
            dir="ltr"
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_4056_3336)">
                <path
                  d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z"
                  fill="#4285F4"
                />
                <path
                  d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z"
                  fill="#34A853"
                />
                <path
                  d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z"
                  fill="#FBBC04"
                />
                <path
                  d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_4056_3336">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className=" pl-4">{t`Sign up with Google`}</p>
          </button>
          <div className="flex justify-center">
            <p>{t`Already have account?`}</p>
            <Link
              to="/login"
              className=" ml-4 border-black border-b hover:scale-105"
            >
              {t`Log in`}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
