///////////////////
// DEPENDENCIES //
/////////////////

const express = require("express");
const cleanRouter = express.Router();
const cors = require("cors");
const morgan = require("morgan");
const app = express();

////////import data files
const cleanSeed = require("../clean")
const Clean = require("../Models/clean")

/////////////////
// MIDDLEWARE //
///////////////

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

/////// CLEAN seed route (if need)////////
// cleanRouter.get('/clean/seed', (req, res) => {
//     Clean.deleteMany({}, (error, allClean) => { }); //used to delete multiple of the same items

//     Clean.create(cleanSeed, (error, data) => {
//         res.redirect('/clean');
//     });
// });

///// CLEAN INDEX ROUTE ///////
cleanRouter.get("/", async (req, res) => {
    try {
        // send all cleaning Products
        res.json(await Clean.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});


module.exports = cleanRouter;
