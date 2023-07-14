import React, { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateRestaurant = (props) => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  return (
    <div>
      <form action="">
        <div className="px-12 m-10">
          <label>Name</label>
          <input
            type="text"
            className="rounded border-2 pl-2 border-gray-300 w-full h-10 focus:border-black focus:outline-none"
          />
        </div>

        <div className="px-12 m-10">
          <label>Location</label>
          <input
            type="text"
            className="rounded border-2 pl-2 border-gray-300 w-full h-10 focus:border-black focus:outline-none"
          />
        </div>

        <div className="px-12 m-10">
          <label>Price Range</label>
          <select className="rounded border-2 border-gray-300 w-full h-10 focus:border-black focus:outline-none">
            <option disabled>Price Range</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
        </div>
        <div className="px-12 m-10">
          <button className="rounded border bg-blue-600 text-white hover:bg-blue-700 p-3 w-20">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
