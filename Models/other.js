const { default: mongoose } = require("mongoose")

const otherSchema = new mongoose.Schema({
    chemical: String,
    description: String,
    products: [{
        name: String,
        img: String }]
})

const Other = mongoose.model("Other", otherSchema)

module.exports=Other;