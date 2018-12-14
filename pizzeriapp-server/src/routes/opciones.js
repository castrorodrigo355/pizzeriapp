const express = require("express");
const Opcion = require("../models/opcionModel")
const router = express.Router();
//const routerVuelos = require("./vuelos")

// CREAR UNA OPCION
router.post("/", (req, res) => {
    let data = req.body;
    let opcion = new Opcion(data);
    opcion.save()
        .then(result => res.status(201).json(result))
        .catch(err => res.status(503).json(err));
})

// OBTENER LA LISTA DE OPCIONES
router.get("/", (req, res) => {
    Opcion.find({}).then(opciones => res.json (opciones));
})

// OBTENER UN DETERMINADA OPCION MEDIANTE UN "id"
router.get("/:id", (req, res) => {
    Opcion.findById(req.params.id)
        .then(opcion => {
            if (opcion){
                res.json(opcion)
            } else {
                res.status(404).json({ message: 'not found!'})
            }
        });
})

// ELIMINAR UNA DETERMINADA OPCION MEDIANTE UN "id"
router.delete("/:id", (req, res) => {
    Opcion.findByIdAndDelete(req.params.id)
        .then( result => res.status(204).json({ messsage: 'deleted!'}))
        .catch( err => res.status(503).json(err));
})

// ACTUALIZAR UN DETERMINADA PIZZA MEDIANTE UN "id"
// router.put("/:id", (req, res) => {
//     Pizza.findByIdAndUpdate(req.params.id, {$set: {"nombre": req.body.nombre, 
//                                                   "especial": req.body.especial,
//                                                   "tamanio": req.body.tamanio,
//                                                   "url": req.body.url,
//                                                   "precio": req.body.precio
//                                                   }}, {new: true}, (err, doc) => {
//         err ? res.json(err) : res.json(doc)
//     })
// })

// router.use("/:id/vuelos", routerVuelos)

module.exports = router;