import React, { Component } from 'react';
// import { obtenerEmpanadas, agregarAlCarrito } from "./ActionCreators"
import { connect } from "react-redux"
// import Circularity from 'circularity'
import ModuloPaypal from './ModuloPaypal'
import './App.css';

class Pedido extends Component {

//   componentWillMount(){
//     this.props.obtenerEmpanadas()
//   }

  render() {
    const precioTotal = this.props.carrito.reduce((acum, x) => acum + x.precio, 0);
    return (
        <div className="" style={{height:"10vh", maxHeight:"30vh", zIndex:99}}>
            <div className="card text-center text-white bg-danger mb-3  " style={{padding:"6px"}}>
                <div className="card-header" style={{padding:"0px"}}>
                    <table className="table table-dark table-sm letrablanca animacion">
                        <thead>
                            <tr className="alert alert-danger">
                            <th scope="col"><span className="info"><h5 style={{color:"black"}}>Producto</h5></span></th>
                            <th scope="col"><span className="info"><h5 style={{color:"black"}}>Precio</h5></span></th>
                            </tr>
                        </thead>
                        {
                            this.props.carrito.map((unPedido, i) => {
                            return(
                                <tbody className="alert" key={i}>
                                    <tr style={{color:"white"}}>
                                        <td>{unPedido.nombre}</td>
                                        <td>{unPedido.precio}</td>
                                    </tr>
                                </tbody>
                            )          
                            })
                        }
                        </table>
                        <ModuloPaypal precioTotal={precioTotal}/>
                </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        carrito : state.carrito
    }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     obtenerEmpanadas : () => { 
//           dispatch(obtenerEmpanadas())
//       },
//       agregarAlCarrito : (unProducto) => {
//           dispatch(agregarAlCarrito(unProducto))
//       } 
//    }
// }

export default connect(mapStateToProps)(Pedido);