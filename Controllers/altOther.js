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

// Delete
altOtherRouter.delete("/:id", async (req, res) => {
    try {
        //send all people
        res.json(await AltOther.findByIdAndRemove(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// Update
altOtherRouter.put("/:id", async (req, res) => {
    try{
        //send all people
        req.json(
            await AltOther.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
})

// Create
altOtherRouter.post("/", async (req, res) => {
    try {
        res.json(await AltOther.create(req.body));
    } catch (error) {
        res.status(400).json(error)
    }
});

module.exports = altOtherRouter