///////////////////
// DEPENDENCIES //
/////////////////

const express = require("express");
const altOtherRouter = express.Router();
const cors = require("cors");
const morgan = require("morgan");

////////import data files
const AltOther = require("../Models/otherAlt")

/////////////////
// MIDDLEWARE //
///////////////

altOtherRouter.use(cors());
altOtherRouter.use(morgan("dev"));
altOtherRouter.use(express.json());

// Index
altOtherRouter.get("/", async (req, res) => {
    try {
        res.json(await AltOther.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
})
// New

// Delete

// Update

// Create
altOtherRouter.post("/", async (req, res) => {
    try {
        res.json(await AltOther.create(req.body));
    } catch (error) {
        res.status(400).json(error)
    }
});

// Edit 

// Show

module.exports = altOtherRouter