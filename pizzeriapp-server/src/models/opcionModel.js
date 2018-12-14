const {Schema, mongoose} = require("../database/database");
var opcionSchema = new Schema({
    titulo: { type: String, required: true, unique: true },
    url: { type: String, required: true},
    imagen: { type: String, required: true}
})

var Option = mongoose.model("Option", opcionSchema)

module.exports = Option