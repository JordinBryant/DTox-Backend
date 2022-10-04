///////////////////
// DEPENDENCIES //
/////////////////

const express = require("express");
const foodRouter = express.Router();
const cors = require("cors");
const morgan = require("morgan");

////////import data files
const foodSeed = require("../food")
const Food = require("../Models/food")

/////////////////
// MIDDLEWARE //
///////////////

foodRouter.use(cors());
foodRouter.use(morgan("dev"));
foodRouter.use(express.json());

/////// FOOD seed route (if need)////////
// foodRouter.get('/food/seed', (req, res) => {
//     Food.deleteMany({}, (error, allFood) => { }); //used to delete multiple of the same items

//     Food.create(foodSeed, (error, data) => {
//         res.redirect('/food');
//     });
// });

///// FOOD INDEX ROUTE //////
foodRouter.get("/", async (req, res) => {
    try {
        // send all food Products
        res.json(await Food.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
})

module.exports = foodRouter;