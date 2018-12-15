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

const obtenerEmpanadas = () => {
    return (dispatch) => {
        axios.get("http://localhost:3000/empanadas")
            .then(response => dispatch({
                type: "GET_EMPANADAS",
                empanadas : response.data
            })
    )}
}

const obtenerBebidas = () => {
    return (dispatch) => {
        axios.get("http://localhost:3000/bebidas")
            .then(response => dispatch({
                type: "GET_BEBIDAS",
                bebidas : response.data
            })
    )}
}

const agregarAlCarrito = (unProducto) => {
    return {
        type: "ADD_PRODUCTO",
        producto: unProducto
    }
}

const eliminarProducto = index => {
    return {
        type: "REMOVE_PRODUCTO",
        index: index
    }
}

export {obtenerOpciones, obtenerPizzas, obtenerEmpanadas, obtenerBebidas, agregarAlCarrito, eliminarProducto}