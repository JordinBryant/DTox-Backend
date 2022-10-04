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

////////import data files
const AltFood = require("./Models/foodAlt");
const AltOther = require("./Models/otherAlt");
const cleanController = require("./Controllers/cleanRoutes")
const foodController = require ("./Controllers/foodRoutes")
const otherController = require ("./Controllers/otherRoutes")
const altCleanController = require("./Controllers/altClean")


/////////////////
// MIDDLEWARE //
///////////////

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/clean", cleanController)
app.use("/food", foodController)
app.use("/other", otherController)
app.use("/altclean", altCleanController)

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

// CREATE TEST ROUTE ///////
app.get("/", (req, res) => {
    res.send("hello world");
});


///////// ALT INDEX ROUTES //////////////

//Food//
app.get("/altfood", async (req, res) => {
    try {
        res.json(await AltFood.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
})

//Other//
app.get("/altother", async (req, res) => {
    try {
        res.json(await AltOther.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
})

/////// ALT CREATE ROUTES ///////////

//Food//
app.post("/altfood", async (req, res) => {
    try {
        res.json(await AltFood.create(req.body));
    } catch (error) {
        res.status(400).json(error)
    }
});

//Other//
app.post("/altother", async (req, res) => {
    try {
        res.json(await AltOther.create(req.body));
    } catch (error) {
        res.status(400).json(error)
    }
});


//connection events
mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error));

///////////////
// LISTENER //
/////////////

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))