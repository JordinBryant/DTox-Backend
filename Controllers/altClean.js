///////////////////
// DEPENDENCIES //
/////////////////

const express = require("express");
const altCleanRouter = express.Router();
const cors = require("cors");
const morgan = require("morgan");

////////import data files
const AltClean = require("../Models/cleanAlt")

/////////////////
// MIDDLEWARE //
///////////////

altCleanRouter.use(cors());
altCleanRouter.use(morgan("dev"));
altCleanRouter.use(express.json());

// Index
altCleanRouter.get("/", async (req, res) => {
    try {
        res.json(await AltClean.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
})
// New

// Delete

// Update

// Create
altCleanRouter.post("/", async (req, res) => {
    try {
        res.json(await AltClean.create(req.body));
    } catch (error) {
        res.status(400).json(error)
    }
});

// Edit 

// Show

module.exports = altCleanRouter