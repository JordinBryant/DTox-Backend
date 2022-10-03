const { default: mongoose } = require("mongoose")

const foodAltSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String
})

const AltFood = mongoose.model("AltFood", foodAltSchema)

module.exports=AltFood;