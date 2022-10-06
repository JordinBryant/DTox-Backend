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

// Delete
altFoodRouter.delete("/:id", async (req, res) => {
    try {
        res.json(await AltFood.findByIdAndRemove(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// Update
altFoodRouter.put("/:id", async (req, res) => {
    try{
        req.json(
            await AltFood.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
})

// Create
altFoodRouter.post("/", async (req, res) => {
    try {
        res.json(await AltFood.create(req.body));
    } catch (error) {
        res.status(400).json(error)
    }
});

module.exports = altFoodRouter