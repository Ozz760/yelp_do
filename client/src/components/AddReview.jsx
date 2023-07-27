import React from "react";

const AddReview = () => {
  return (
    <div>
      <form action="">
        <div className="px-4 m-10">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="rounded border-2 pl-2 border-gray-300 w-full h-10 focus:border-black focus:outline-none"
          />
        </div>

        <div className="px-4 m-10">
          <label htmlFor="rating">Rating</label>
          <select
            id="rating"
            className="rounded border-2 pl-2 border-gray-300 w-full h-10 focus:border-black focus:outline-none"
          >
            <option disabled>Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="px-4 m-10">
          <button
            type="submit"
            className="rounded border bg-blue-600 text-white hover:bg-blue-700 p-3 w-20"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
