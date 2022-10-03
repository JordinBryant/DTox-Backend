const { default: mongoose } = require("mongoose")

const cleanAltSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String
})

const AltClean = mongoose.model("AltClean", cleanAltSchema)

module.exports=AltClean;