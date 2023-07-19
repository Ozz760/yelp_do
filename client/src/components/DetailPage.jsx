import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useNavigate } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";

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
        console.log(response.data.data.restaurant);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div>
      <h1 className="">Detail Page</h1>
    </div>
  );
};

export default DetailPage;
