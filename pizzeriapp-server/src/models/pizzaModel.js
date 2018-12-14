const {Schema, mongoose} = require("../database/database");
var pizzaSchema = new Schema({
    nombre: { type: String, required: true, unique: true },
    grande: { type: Boolean, required: true},
    url: { type: String, required: true },
    precio: { type: Number, required: true}
})

var Pizza = mongoose.model("Pizza", pizzaSchema)

module.exports = Pizza