/*eslint-disable*/
import { createContext, useEffect, useState } from "react";

export const RatingContext = createContext({
  review: [],
  restDetails: [],
  setReview: [],
});

function RatingContextProvider(props) {
  const { children } = props;
  const [review, setReview] = useState([]);
  const [restDetails, setRestDetails] = useState([]);

  const updateReviewHandler = (newReview) => {
    const filteredItem = review.find(
      (data) => data.prodName === restDetails.prodName
    );
    if (restDetails?.prodName === filteredItem?.prodName) {
      return;
    }
    const merge = { ...newReview, ...restDetails };
    let updateMerge = [...review, merge];
    setReview(updateMerge);
    localStorage.setItem("reviews", JSON.stringify(updateMerge));
  };

  const reviewDeleteHandler = (index) => {
    setReview((prevItems) => {
      const updatedItems = prevItems.filter((_, i) => i !== index);
      localStorage.setItem("reviews", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  useEffect(() => {
    if (!(review?.length === 0)) {
      setReview(cartData);
    } else {
      const initReviews = JSON.parse(localStorage.getItem("reviews")) || [];
      setReview(initReviews);
    }
  }, []);

  return (
    <RatingContext.Provider
      value={{
        review,
        updateReviewHandler,
        setRestDetails,
        reviewDeleteHandler,
      }}
    >
      {children}
    </RatingContext.Provider>
  );
}

export default RatingContextProvider;
