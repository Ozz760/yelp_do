import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useNavigate } from "react-router-dom";

const UpdateRestaurant = (props) => {
  const { id } = useParams();
  const { restaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  // Destructure the navigate function from the react-router-dom.
  let navigate = useNavigate();

  // Function to handle the update button.
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await RestaurantFinder.get(`/${id}`);
        setName(response.data.data.restaurant.name);
        setLocation(response.data.data.restaurant.location);
        setPriceRange(response.data.data.restaurant.price_range);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // Function to handle the update button.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
        name: name,
        location: location,
        price_range: priceRange,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form action="">
        <div className="px-12 m-10">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="rounded border-2 pl-2 border-gray-300 w-full h-10 focus:border-black focus:outline-none"
          />
        </div>

        <div className="px-12 m-10">
          <label htmlFor="location">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            className="rounded border-2 pl-2 border-gray-300 w-full h-10 focus:border-black focus:outline-none"
          />
        </div>

        <div className="px-12 m-10">
          <label htmlFor="princeRange">Price Range</label>
          <select
            value={priceRange}
            onClick={(e) => setPriceRange(e.target.value)}
            className="rounded border-2 border-gray-300 w-full h-10 focus:border-black focus:outline-none"
          >
            <option disabled>Price Range</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
        </div>
        <div className="px-12 m-10">
          <button
            type="submit"
            onClick={handleSubmit}
            className="rounded border bg-blue-600 text-white hover:bg-blue-700 p-3 w-20"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
