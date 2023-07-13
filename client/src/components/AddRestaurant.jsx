import React, { useContext, useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const AddRestaurant = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const { addRestaurants } = useContext(RestaurantsContext);

  // Function to handle the submit button.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/", {
        name: name,
        location: location,
        price_range: priceRange,
      });
      addRestaurants(response.data.data.restaurant);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="pb-2">
      <form action="">
        <div className="columns-4 gap-8 text-center">
          <div className="">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="rounded border-2 h-10 border-gray-300 w-full pl-2 placeholder:text-black"
              placeholder="Name"
            />
          </div>
          <div className="">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              className="rounded border-2 h-10 border-gray-300 w-full pl-2 placeholder:text-black"
              placeholder="Location"
            />
          </div>
          <div className="">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="rounded border-2 border-gray-300 w-full h-10"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="rounded border bg-blue-600 text-white w-full h-10 hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
