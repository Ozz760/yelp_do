import React from "react";
import StarRating from "./StarRating";

const Reviews = ({ reviews }) => {
  return (
    <div className="container mx-auto flex flex-wrap items-start my-16 px-16">
      {reviews &&
        reviews.map((review) => {
          return (
            <div className="lg:w-1/4 w-full lg:pr-3">
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

      {/* Card
      <div className="lg:w-1/4 w-full lg:pr-3">
        <div className="bg-gray-200 rounded-xl p-6">
          <div className="text-2xl font-bold mb-2">Card Title</div>
          <span>
            <StarRating rating={3} />
          </span>
          <div className="text-gray-800 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed
            neque minima minus omnis voluptatum sit quidem. Esse, fugit. Quia
            ducimus unde necessitatibus eum eveniet rem dicta laboriosam velit
            esse!
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Reviews;
