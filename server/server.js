const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(express.json());

// Get all Restaurants.
app.get("/api/v1/restaurants", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["McDonalds", "Burger King", "KFC"],
    },
  });
});

// Get a Restaurant.
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params);
});

// Create a Restaurant.
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
