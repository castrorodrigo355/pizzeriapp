const express = require("express");
const Empanada = require("../models/empanadaModel")
const router = express.Router();
//const routerVuelos = require("./vuelos")

// CREAR UNA EMPANADA
router.post("/", (req, res) => {
    let data = req.body;
    let empanada = new Empanada(data);
    empanada.save()
        .then(result => res.status(201).json(result))
        .catch(err => res.status(503).json(err));
})

// OBTENER LA LISTA DE EMPANADAS
router.get("/", (req, res) => {
    Empanada.find({}).then(empanadas => res.json (empanadas));
})

// OBTENER UN DETERMINADA EMPANADA MEDIANTE UN "id"
router.get("/:id", (req, res) => {
    Empanada.findById(req.params.id)
        .then(empanada => {
            if (empanada){
                res.json(empanada)
            } else {
                res.status(404).json({ message: 'not found!'})
            }
        });
})

// ELIMINAR UNA DETERMINADA EMPANADA MEDIANTE UN "id"
router.delete("/:id", (req, res) => {
    Empanada.findByIdAndDelete(req.params.id)
        .then( result => res.status(204).json({ messsage: 'deleted!'}))
        .catch( err => res.status(503).json(err));
})

// ACTUALIZAR UN DETERMINADA BEBIDA MEDIANTE UN "id"
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