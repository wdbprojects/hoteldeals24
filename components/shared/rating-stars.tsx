"use client";

// prevent 'id' error from library due to dynamic vs server id generation
import dynamic from "next/dynamic";
const StarRatings = dynamic(() => import("react-star-ratings"), { ssr: false });

const RatingStars = ({ ratings, size }: { ratings: number; size: string }) => {
  return (
    <StarRatings
      rating={ratings}
      starRatedColor="#f43f5e"
      numberOfStars={5}
      name="rating"
      starDimension={Number(size)}
      starSpacing="5px"
    />
  );
};

export default RatingStars;
