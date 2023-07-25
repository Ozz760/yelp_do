import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useNavigate } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import StarRating from "./StarRating";

const DetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);
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
        setSelectedRestaurant(response.data.data.restaurant);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1 className="text-center font-medium text-5xl pt-9 pb-8">
        {selectedRestaurant && selectedRestaurant.name}
      </h1>
      <div className="text-center text-yellow-400">
        {selectedRestaurant && <StarRating rating={3.5} />}
      </div>
    </div>
  );
};

export default DetailPage;
