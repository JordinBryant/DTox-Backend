///////////////////
// DEPENDENCIES //
/////////////////

const express = require("express");
const altFoodRouter = express.Router();
const cors = require("cors");
const morgan = require("morgan");

////////import data files
const AltFood = require("../Models/foodAlt")

/////////////////
// MIDDLEWARE //
///////////////

altFoodRouter.use(cors());
altFoodRouter.use(morgan("dev"));
altFoodRouter.use(express.json());

// Index
altFoodRouter.get("/", async (req, res) => {
    try {
        res.json(await AltFood.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
})
// New

// Delete

// Update

// Create
altFoodRouter.post("/", async (req, res) => {
    try {
        res.json(await AltFood.create(req.body));
    } catch (error) {
        res.status(400).json(error)
    }
});

// Edit 

// Show

module.exports = altFoodRouter