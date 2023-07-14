import React from "react";
import UpdateRestaurant from "../components/UpdateRestaurant";

const UpdatePage = () => {
  return (
    <div>
      <h1 className="text-center text-5xl pt-9 pb-8">
        {" "}
        Update This Restaurant
      </h1>
      <UpdateRestaurant />
    </div>
  );
};

export default UpdatePage;
