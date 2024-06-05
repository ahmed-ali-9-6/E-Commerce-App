import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const formatTime = (time) => {
  let days = Math.floor(time / (60 * 60 * 24));
  let hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
  let minutes = Math.floor((time % (60 * 60)) / 60);
  let seconds = Math.floor(time % 60);

  if (days < 10) days = `0${days}`;
  if (hours < 10) hours = `0${hours}`;
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;

  return { days, hours, minutes, seconds };
};

function CountDownSpeaker() {
  const [countDown, setCountDown] = useState(500000);
  const countId = useRef();
  const { t } = useTranslation();

  const { days, hours, minutes, seconds } = formatTime(countDown);

  useEffect(() => {
    countId.current = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(countId.current);
  }, []);

  useEffect(() => {
    if (countDown <= 0) {
      clearInterval(countId.current);
    }
  }, [countDown]);

  return (
    <div className="flex gap-2 sm:gap-6 items-end pr-4 text-black">
      <div className=" flex flex-col w-[62px] h-[62px] justify-center items-center rounded-full bg-white">
        <p className=" leading-[14px] text-base font-semibold">{days}</p>
        <h3 className=" leading-[14px] text-[11px]">{t`Days`}</h3>
      </div>
      <div className=" flex flex-col w-[62px] h-[62px] justify-center items-center rounded-full bg-white">
        <p className=" leading-[14px] text-base font-semibold">{hours}</p>
        <h3 className=" leading-[14px] text-[11px]">{t`Hours`}</h3>
      </div>
      <div className=" flex flex-col w-[62px] h-[62px] justify-center items-center rounded-full bg-white">
        <p className=" leading-[14px] text-base font-semibold">{minutes}</p>
        <h3 className=" leading-[14px] text-[11px]">{t`Minutes`}</h3>
      </div>
      <div className=" flex flex-col w-[62px] h-[62px] justify-center items-center rounded-full bg-white">
        <p className=" leading-[14px] text-base font-semibold">{seconds}</p>
        <h3 className=" leading-[14px] text-[11px]">{t`Seconds`}</h3>
      </div>
    </div>
  );
}

export default CountDownSpeaker;
