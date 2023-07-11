import React, { useEffect, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await RestaurantFinder.get("/");
        setRestaurants(response.data.data.restaurant);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [setRestaurants]);

  return (
    <div className="flex flex-col mt-12">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-sm font-light">
              <thead className="border bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                <tr>
                  <th scope="col" className=" px-6 py-4">
                    Restaurant
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Location
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Price Range
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Ratings
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Update
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Delete
                  </th>
                </tr>
              </thead>
              {/* body of table */}
              <tbody>
                {restaurants.map((restaurant) => {
                  return (
                    <tr className="border dark:border-neutral-500 hover:bg-slate-100">
                      <td className="whitespace-nowrap  px-6 py-4 font-medium">
                        {restaurant.name}
                      </td>
                      <td className="whitespace-nowrap  px-6 py-4 font-medium">
                        {restaurant.location}
                      </td>
                      <td className="whitespace-nowrap  px-6 py-4 font-medium">
                        {"$".repeat(restaurant.price_range)}
                      </td>
                      <td className="whitespace-nowrap  px-6 py-4 font-medium">
                        reviews
                      </td>
                      <td>
                        <button
                          type="button"
                          className="inline-block rounded bg-yellow-500 text-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 hover:bg-yellow-600"
                        >
                          Update
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="inline-block rounded bg-red-500 text-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
