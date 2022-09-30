///////////////////
// DEPENDENCIES //
/////////////////

require("dotenv").config();
const { PORT = 4000 } = process.env;
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

/////////////////
// MIDDLEWARE //
///////////////

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

///////////////cd 
// LISTENER //
/////////////

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))