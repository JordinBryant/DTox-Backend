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

//connection events
mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error));
    
///////////////
// LISTENER //
/////////////

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))