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
    } else if(action.type === "GET_EMPANADAS"){
        return {
            ...state, empanadas : action.empanadas
        }
    } else if(action.type === "GET_BEBIDAS"){
        return {
            ...state, bebidas : action.bebidas
        }
    } else if(action.type === "ADD_PRODUCTO"){
        return {
            ...state, carrito: state.carrito.concat(action.producto)
        }
    } else if(action.type === "REMOVE_PRODUCTO"){
        return {
            ...state, carrito: state.carrito.filter((unProducto, i) => {
                return i !== action.index
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

export default createStore(reducer, {opciones: [], pizzas: [], empanadas: [], bebidas: [], carrito: []}, applyMiddleware(logger, thunk))