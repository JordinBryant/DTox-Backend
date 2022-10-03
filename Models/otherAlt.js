const { default: mongoose } = require("mongoose")

const otherAltSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String
})

const AltOther = mongoose.model("AltClean", otherAltSchema)

module.exports=AltOther