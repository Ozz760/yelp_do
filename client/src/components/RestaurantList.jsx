import React from "react";

const RestaurantList = () => {
  return (
    <div className="flex flex-col px-12 mt-12">
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
              <tbody>
                <tr className="border dark:border-neutral-500">
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">
                    Wendy's Burger
                  </td>
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">
                    Oceanside
                  </td>
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">
                    $
                  </td>
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">
                    ***
                  </td>
                  <td>
                    <button>Update</button>
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
