import React from "react";
import StarRating from "./StarRating";

const Reviews = ({ reviews }) => {
  return (
    <div className="container mx-auto flex flex-wrap items-start my-8 px-16">
      {reviews &&
        reviews.map((review) => {
          return (
            <div key={review.id} className="lg:w-1/4 w-full lg:pr-3 pt-5">
              <div className="bg-gray-200 rounded-xl p-6">
                <div className="text-2xl font-bold mb-2">{review.name}</div>
                <span>
                  <StarRating rating={review.rating} />
                </span>
                <div className="text-gray-800 leading-relaxed">
                  {review.review}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Reviews;
