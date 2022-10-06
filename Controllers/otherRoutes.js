///////////////////
// DEPENDENCIES //
/////////////////

const express = require("express");
const otherRouter = express.Router();
const cors = require("cors");
const morgan = require("morgan");

////////import data files
const otherSeed = require("../other")
const other = require("../Models/other")

/////////////////
// MIDDLEWARE //
///////////////

otherRouter.use(cors());
otherRouter.use(morgan("dev"));
otherRouter.use(express.json());

/////// OTHER seed route (if need)////////
// app.get('/other/seed', (req, res) => {
//     Other.deleteMany({}, (error, allOther) => { }); //used to delete multiple of the same items

//     Other.create(otherSeed, (error, data) => {
//         res.redirect('/other');
//     });
// });

///// OTHER INDEX ROUTE //////
otherRouter.get("/", async (req, res) => {
    try {
        // send all other Products
        res.json(await other.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
})

module.exports = otherRouter;