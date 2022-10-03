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
const Clean = require("./Models/clean")


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


// CLEAN INDEX ROUTE
app.get("/clean", async (req, res) => {
    try {
        // send all cleaningProducts
        res.json(await Clean.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// Clean seed route (if need)
app.get('/clean/seed', (req, res) => {
    	Clean.deleteMany({}, (error, allClean) => {}); //used to delete multiple of the same items
    
    	Clean.create(cleanSeed, (error, data) => {
    		res.redirect('/clean');
    	});
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