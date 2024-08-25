"use client";
import StarRatings from "react-star-ratings";

const RatingStars = () => {
  return (
    <StarRatings
      rating={5}
      starRatedColor="#f43f5e"
      numberOfStars={5}
      name="rating"
      starDimension="28px"
      starSpacing="5px"
    />
  );
};

export default RatingStars;
