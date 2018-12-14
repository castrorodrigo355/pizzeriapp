import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

const reducer = (state, action) => {
    if(action.type === "GET_OPCIONES"){
        return{
            ...state, opciones : action.opciones
        }
    } else if(action.type === "GET_PIZZAS"){
        return {
            ...state, pizzas : action.pizzas
        }
    } else if(action.type === "ADD_PIZZA"){
        return {
            ...state, carrito: state.carrito.concat(action.producto)
        }
    } else if(action.type === "REMOVE_PRODUCTO"){
        return {
            ...state, carrito: state.carrito.filter(unProducto => {
                return unProducto._id !== action.producto._id
            })
        }
    }
    return state
}

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

export default createStore(reducer, {opciones: [], pizzas: [], carrito: []}, applyMiddleware(logger, thunk))