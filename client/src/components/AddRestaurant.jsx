import React from "react";

const AddRestaurant = () => {
  return (
    <div className=" mb-4">
      <form action="">
        <div className="columns-3 gap-8 text-center">
          <div className="">
            <input type="text" className="" placeholder="Name" />
          </div>
          <div className="">
            <input type="text" className="" placeholder="Location" />
          </div>
          <div className="col">
            <select className="" placeholder="Price Range">
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
