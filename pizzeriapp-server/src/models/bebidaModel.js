const {Schema, mongoose} = require("../database/database");
var bebidaSchema = new Schema({
    nombre: { type: String, required: true},
    grande: { type: Boolean, required: true},
    url: { type: String, required: true },
    precio: { type: Number, required: true}
})

var Bebida = mongoose.model("Bebida", bebidaSchema)

module.exports = Bebida