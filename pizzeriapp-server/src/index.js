const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 3000);
// ----------------------------------------------------------
const authValidator = require('./middlewares/authValidator');
// ----------------------------------------------------------
const routerSignUp = require('./routes/signup');
app.use('/signup', routerSignUp);
// ----------------------------------------------------------
const routerSignIn = require('./routes/signin');
app.use('/signin', routerSignIn);
// ----------------------------------------------------------
const routerOpciones = require("./routes/opciones");
app.use("/opciones", routerOpciones);
// ----------------------------------------------------------
const routerPizzas = require("./routes/pizzas");
app.use("/pizzas", routerPizzas);
// ----------------------------------------------------------
const routerBebidas = require("./routes/bebidas");
app.use("/bebidas", routerBebidas);
// ----------------------------------------------------------
app.get("/*", (req, res) => {
    res.end("Archivo no encontrado");
});
// ----------------------------------------------------------
app.listen(app.get('port'), () => {
    console.log(`Server works on port: ${app.get('port')}`);
});