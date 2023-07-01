const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3002;

app.get("/getRestaurant", (req, res) => {
  res.status(202).json({
    status: "success",
    restaurant: "McDonalds",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
