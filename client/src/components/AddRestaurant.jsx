import React from "react";

const AddRestaurant = () => {
  return (
    <div className="mb-3">
      <form action="">
        <div className="columns-4 gap-8 text-center mx-7">
          <div className="">
            <input
              type="text"
              className="rounded border-2 h-10 border-gray-300 w-full pl-2"
              placeholder="Name"
            />
          </div>
          <div className="">
            <input
              type="text"
              className="rounded border-2 h-10 border-gray-300 w-full pl-2"
              placeholder="Location"
            />
          </div>
          <div className="">
            <select className="rounded border-2 border-gray-300 w-full h-10">
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div>
            <button className=" rounded border bg-blue-600 text-white w-full h-10">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
