const { default: mongoose } = require("mongoose")

const otherAltSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String
})

const AltOther = mongoose.model("AltOther", otherAltSchema)

module.exports=AltOther