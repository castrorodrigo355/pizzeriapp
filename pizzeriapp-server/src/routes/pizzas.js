const express = require("express");
const Pizza = require("../models/pizzaModel")
const router = express.Router();
//const routerVuelos = require("./vuelos")

// CREAR UNA PIZZA
router.post("/", (req, res) => {
    let data = req.body;
    let pizza = new Pizza(data);
    pizza.save()
        .then(result => res.status(201).json(result))
        .catch(err => res.status(503).json(err));
})

// OBTENER LA LISTA DE PIZZAS
router.get("/", (req, res) => {
    Pizza.find({}).then(pizzas => res.json (pizzas));
})

// OBTENER UN DETERMINADA PIZZA MEDIANTE UN "id"
router.get("/:id", (req, res) => {
    Pizza.findById(req.params.id)
        .then(pizza => {
            if (pizza){
                res.json(pizza)
            } else {
                res.status(404).json({ message: 'not found!'})
            }
        });
})

// ELIMINAR UNA DETERMINADA PIZZA MEDIANTE UN "id"
router.delete("/:id", (req, res) => {
    Pizza.findByIdAndDelete(req.params.id)
        .then( result => res.status(204).json({ messsage: 'deleted!'}))
        .catch( err => res.status(503).json(err));
})

// ACTUALIZAR UN DETERMINADA PIZZA MEDIANTE UN "id"
router.put("/:id", (req, res) => {
    Pizza.findByIdAndUpdate(req.params.id, {$set: {"nombre": req.body.nombre, 
                                                  "especial": req.body.especial,
                                                  "tamanio": req.body.tamanio,
                                                  "url": req.body.url,
                                                  "precio": req.body.precio
                                                  }}, {new: true}, (err, doc) => {
        err ? res.json(err) : res.json(doc)
    })
})

// router.use("/:id/vuelos", routerVuelos)

module.exports = router;