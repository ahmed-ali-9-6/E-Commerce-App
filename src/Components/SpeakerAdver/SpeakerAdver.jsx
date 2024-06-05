import CountDownSpeaker from "./CountDownSpeaker";
import speakerjblImg from "../../assets/speaker-jbl.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function SpeakerAdver() {
  const { t } = useTranslation();

  return (
    <div
      className="flex justify-between items-center gap-8 lg:gap-0 flex-col lg:flex-row w-full bg-black mb-[71px] py-[69px] px-14 relative overflow-hidden"
      dir="ltr"
    >
      <div className=" flex flex-col items-center sm:items-start gap-8 text-white ">
        <span className="font-semibold text-[#00FF66]">{t`Categories`}</span>
        <h2 className=" text-5xl font-semibold text-[#fafafa] tracking-wider">
          {t`Enhance Your Music Experience`}
        </h2>
        <CountDownSpeaker />
        <Link
          className=" py-4 px-12 max-w-[171px] font-medium rounded text-white bg-[#00FF66] hover:bg-[#00ff66de]"
          to="exploreOurProducts"
        >
          {t`Buy Now!`}
        </Link>
      </div>
      <img
        className=" z-10 "
        src={speakerjblImg}
        alt="Speaker JBL Image"
        loading="lazy"
      />
      <div className=" z-0 absolute w-[90px] sm:w-[130px] bottom-[140px] sm:bottom-[240px] lg:right-[310px] lg:top-[200px] shadow-[20px_35px_80px_70px_rgba(119,119,119,1)] sm:shadow-[20px_35px_140px_130px_rgba(119,119,119,1)]"></div>
    </div>
  );
}

export default SpeakerAdver;
