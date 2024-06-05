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

function CountDown() {
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
    <div className="flex gap-4 items-end pr-4">
      <div>
        <h3 className=" text-xs font-medium">{t`Days`}</h3>
        <p className=" text-3xl font-bold">{days}</p>
      </div>
      <span className=" text-3xl font-semiblod text-[#E07575]">:</span>
      <div>
        <h3 className=" text-xs font-medium">{t`Hours`}</h3>
        <p className=" text-3xl font-bold">{hours}</p>
      </div>
      <span className=" text-3xl font-semiblod text-[#E07575]">:</span>
      <div>
        <h3 className=" text-xs font-medium">{t`Minutes`}</h3>
        <p className=" text-3xl font-bold">{minutes}</p>
      </div>
      <span className=" text-3xl font-semiblod text-[#E07575]">:</span>
      <div>
        <h3 className=" text-xs font-medium">{t`Seconds`}</h3>
        <p className=" text-3xl font-bold">{seconds}</p>
      </div>
    </div>
  );
}

export default CountDown;
