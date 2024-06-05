import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const navVariants = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function NavBar() {
  const { t } = useTranslation();
  const lng = Cookies.get("i18next") || "en";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        layout="position"
        key="nav-links"
        variants={navVariants}
        initial="hidden"
        animate="show"
      >
        <ul
          className={`flex justify-between items-center ${
            lng === "de" ? "text-sm" : "text-sm sm:text-base"
          }`}
        >
          <motion.div variants={itemVariants}>
            <li className=" transition-all duration-300 hover:border-b border-black hover:scale-110 h-[23px]">
              <NavLink to="/">{t`Home`}</NavLink>
            </li>
          </motion.div>
          <motion.div variants={itemVariants}>
            <li className=" transition-all duration-300 hover:border-b border-black hover:scale-110 h-[23px]">
              <NavLink to="contact">{t`Contact`}</NavLink>
            </li>
          </motion.div>
          <motion.div variants={itemVariants}>
            <li className=" transition-all duration-300 hover:border-b border-black hover:scale-110 h-[23px]">
              <NavLink to="about">{t`About`}</NavLink>
            </li>
          </motion.div>
          <motion.div variants={itemVariants}>
            <li className=" transition-all duration-300 hover:border-b border-black hover:scale-110 h-[23px]">
              <NavLink to="singup">{t`Sign Up`}</NavLink>
            </li>
          </motion.div>
        </ul>
      </motion.div>
    </AnimatePresence>
  );
}

export default NavBar;
