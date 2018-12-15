const express = require("express");
const Bebida = require("../models/bebidaModel")
const router = express.Router();
//const routerVuelos = require("./vuelos")

// CREAR UNA BEBIDA
router.post("/", (req, res) => {
    let data = req.body;
    let bebida = new Bebida(data);
    bebida.save()
        .then(result => res.status(201).json(result))
        .catch(err => res.status(503).json(err));
})

// OBTENER LA LISTA DE BEBIDAS
router.get("/", (req, res) => {
    Bebida.find({}).then(bebidas => res.json (bebidas));
})

// OBTENER UN DETERMINADA BEBIDA MEDIANTE UN "id"
router.get("/:id", (req, res) => {
    Bebida.findById(req.params.id)
        .then(bebida => {
            if (bebida){
                res.json(bebida)
            } else {
                res.status(404).json({ message: 'not found!'})
            }
        });
})

// ELIMINAR UNA DETERMINADA BEBIDA MEDIANTE UN "id"
router.delete("/:id", (req, res) => {
    Bebida.findByIdAndDelete(req.params.id)
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