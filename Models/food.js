const { default: mongoose } = require("mongoose")

const foodSchema = new mongoose.Schema({
    chemical: String,
    description: String,
    products: [{
        name: String,
        img: String }]
})

const Food = mongoose.model("Food", foodSchema)

module.exports=Food;