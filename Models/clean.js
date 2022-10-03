const { default: mongoose } = require("mongoose")

const cleanSchema = new mongoose.Schema({
    chemical: String,
    description: String,
    products: [{
        name: String,
        img: String }]
})

const Clean = mongoose.model("Clean", cleanSchema)

module.exports=Clean;