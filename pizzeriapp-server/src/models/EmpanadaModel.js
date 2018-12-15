const {Schema, mongoose} = require("../database/database");
var empanadaSchema = new Schema({
    nombre: { type: String, required: true },
    grande: { type: Boolean, required: true},
    url: { type: String, required: true },
    precio: { type: Number, required: true}
})

var Empanada = mongoose.model("Empanada", empanadaSchema)

module.exports = Empanada