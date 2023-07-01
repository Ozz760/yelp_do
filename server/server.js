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
  res.status(200).json({
    status: "success",
    data: {
      restaurant: "McDonalds",
    },
  });
});

// Create a Restaurant.
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body);
  res.status(201).json({
    status: "success",
    data: {
      restaurant: "McDonalds",
    },
  });
});

// Update a Restaurant.
app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);

  res.status(200).json({
    status: "success",
    data: {
      restaurant: "McDonalds",
    },
  });
});

// Delete a Restaurant.
app.delete("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);

  res.status(204).json({
    status: "success",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
