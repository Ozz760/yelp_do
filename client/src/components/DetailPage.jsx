import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";
import Reviews from "./Reviews";
import AddReview from "./AddReview";

const DetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  // Function to handle the update button.
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await RestaurantFinder.get(`/${id}`);
        console.log(response);
        setSelectedRestaurant(response.data.data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [setSelectedRestaurant, id]);

  return (
    <div>
      <div>
        {selectedRestaurant && (
          <>
            <div>
              <Reviews reviews={selectedRestaurant.reviews} />
            </div>
            <div>
              <AddReview />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
