import React from "react";

const RestaurantList = () => {
  return (
    <div className="mt-10">
      <table className="table-auto text-2xl text-center border border-separate border-slate-500 rounded">
        <thead className="">
          <tr>
            <th className="border border-slate-600">Restaurant</th>
            <th className="border border-slate-600">Location</th>
            <th className="border border-slate-600">Price Range</th>
            <th className="border border-slate-600">Ratings</th>
            <th className="border border-slate-600">Edit</th>
            <th className="border border-slate-600">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-600">McDonalds</td>
            <td className="border border-slate-600">San Francisco</td>
            <td className="border border-slate-600">$$</td>
            <td className="border border-slate-600">***</td>
            <td className="border border-slate-600">Update</td>
            <td className="border border-slate-600">Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
