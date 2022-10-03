///////////////////
// DEPENDENCIES //
/////////////////

require("dotenv").config();
const { PORT = 4000, MONGODB_URL } = process.env;
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const { on } = require("nodemon");
const cleanSeed = require("./clean")
const foodSeed = require("./food")
const otherSeed = require("./other")
const Clean = require("./Models/clean")
const Other = require("./Models/other")
const Food = require("./Models/food")


/////////////////
// MIDDLEWARE //
///////////////

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//////////////////////////
//  MONGOOSE CONNECTION /
////////////////////////

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

//////////////
// ROUTES ///
////////////

/// CREATE TEST ROUTE ///////
app.get("/", (req, res) => {
    res.send("hello world");
});

/////// CLEAN seed route (if need)////////
app.get('/clean/seed', (req, res) => {
    Clean.deleteMany({}, (error, allClean) => {}); //used to delete multiple of the same items

    Clean.create(cleanSeed, (error, data) => {
        res.redirect('/clean');
    });
 });

 /////// FOOD seed route (if need)////////
app.get('/food/seed', (req, res) => {
    Food.deleteMany({}, (error, allFood) => {}); //used to delete multiple of the same items

    Food.create(foodSeed, (error, data) => {
        res.redirect('/food');
    });
 });

/////// OTHER seed route (if need)////////
app.get('/other/seed', (req, res) => {
    Other.deleteMany({}, (error, allOther) => {}); //used to delete multiple of the same items

    Other.create(otherSeed, (error, data) => {
        res.redirect('/other');
    });
 });


///// CLEAN INDEX ROUTE ///////
app.get("/clean", async (req, res) => {
    try {
        // send all cleaning Products
        res.json(await Clean.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

///// FOOD INDEX ROUTE //////
app.get("/food", async (req, res) => {
    try {
        // send all food Products
        res.json(await Food.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
})

///// OTHER INDEX ROUTE //////
app.get("/other", async (req, res) => {
    try {
        // send all food Products
        res.json(await Other.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
})

  
//connection events
mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error));

///////////////
// LISTENER //
/////////////

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))