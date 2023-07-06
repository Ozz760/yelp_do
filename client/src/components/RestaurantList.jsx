import React from "react";

const RestaurantList = () => {
  return (
    <div className="mt-10">
      <table className="table-auto">
        <thread>
          <tr>
            <th className="">Restaurant</th>
            <th className="">Location</th>
            <th className="">Price Range</th>
            <th className="">Ratings</th>
            <th className="">Edit</th>
            <th className="">Delete</th>
          </tr>
        </thread>
        <tbody>
          <tr>
            <td className="">McDonalds</td>
            <td className="">San Francisco</td>
            <td className="">$$</td>
            <td className="">Update</td>
            <td className="">Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
