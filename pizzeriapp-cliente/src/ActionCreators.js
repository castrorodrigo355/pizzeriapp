import axios from "axios"

// let idMiMateria = "";

const obtenerOpciones = () => {
    return (dispatch) => {
        axios.get("http://localhost:3000/opciones")
            .then(response => dispatch({
                type: "GET_OPCIONES",
                opciones : response.data
            })
    )}
}

const obtenerPizzas = () => {
    return (dispatch) => {
        axios.get("http://localhost:3000/pizzas")
            .then(response => dispatch({
                type: "GET_PIZZAS",
                pizzas : response.data
            })
    )}
}

const agregarAlCarrito = (unaPizza) => {
    return {
        type: "ADD_PIZZA",
        producto: unaPizza
    }
}

const eliminarProducto = unProducto => {
    return {
        type: "REMOVE_PRODUCTO",
        producto: unProducto
    }
}

export {obtenerOpciones, obtenerPizzas, agregarAlCarrito, eliminarProducto}