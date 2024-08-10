import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollBtn = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`inline-block px-[13px] py-[15px] rounded-full fixed bottom-8 right-[42%] lg:right-20 z-10 bg-red-500 ${
        showButton ? "block" : "hidden"
      }`}
      dir="ltr"
    >
      {showButton && (
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute top-0 left-0 w-full h-full rounded-full bg-red-600 opacity-50"
        />
      )}
      <svg
        width="28"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 animate-bounce"
      >
        <path
          d="M12 20V4M5 11L12 4L19 11"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ScrollBtn;
