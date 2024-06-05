/*eslint-disable*/
import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { RatingContext } from "../Context/RatingContext";
import { useTranslation } from "react-i18next";

function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const { updateReviewHandler } = useContext(RatingContext);
  const { t } = useTranslation();

  const handleFormReview = (e) => {
    e.preventDefault();
    updateReviewHandler({
      rating,
      review: e.target.elements.review.value,
    });
    e.target.elements.review.value = "";
    setRating(null);
  };

  return (
    <form
      className="flex justify-around items-center flex-col md:flex-row gap-6 md:gap-2 mb-[140px] w-full border rounded p-2"
      onSubmit={handleFormReview}
    >
      <div className="flex gap-3">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label key={index}>
              <input
                className=" hidden"
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
              />
              <FaStar
                className="cursor-pointer"
                size={40}
                color={
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                }
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
        <p>({rating ? rating : 0})</p>
      </div>
      <textarea
        className=" h-20 w-3/4 md:w-1/2 rounded-md px-4 pt-4 shadow bg-[#F4F4F5]"
        type="text"
        name="review"
        placeholder={t`Write Review`}
      />
      <button className=" bg-[#DB4444] px-12 py-[10px] rounded text-[#fafafa] active:scale-95 hover:bg-[#db4444f5]">
        {t`Add Review`}
      </button>
    </form>
  );
}

export default StarRating;
