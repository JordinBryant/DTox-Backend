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

// Delete
altCleanRouter.delete("/:id", async (req, res) => {
    try {
        //send all people
        res.json(await AltClean.findByIdAndRemove(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// Update
altCleanRouter.put("/:id", async (req, res) => {
    try{
        //send all people
        req.json(
            await AltClean.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
})

// Create
altCleanRouter.post("/", async (req, res) => {
    try {
        res.json(await AltClean.create(req.body));
    } catch (error) {
        res.status(400).json(error)
    }
});

module.exports = altCleanRouter