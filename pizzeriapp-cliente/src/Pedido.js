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
    // LINK NPM CIRCULARITY => https://www.npmjs.com/package/circularity

    // const misItems = this.props.empanadas.map((unaEmpanada, i) => {
    //   return( {title: unaEmpanada.nombre,
    //           image: unaEmpanada.url,
    //           action: () => {this.props.agregarAlCarrito(unaEmpanada)} }
    //   )
    // })

    return (
        <div className="border" style={{height:"10vh", maxHeight:"30vh"}}>
            <table className="table table-sm letrablanca animacion">
            <thead>
                <tr className="alert alert-danger">
                <th scope="col">Producto</th>
                <th scope="col">Precio</th>
                </tr>
            </thead>
            {
                this.props.carrito.map((unPedido, i) => {
                return(
                    <tbody className="alert" key={i}>
                        <tr style={{color:"white"}}>
                            <td>{unPedido.nombre}</td>
                            <td>{unPedido.precio}</td>
                            {/* <td><button type="submit" onClick={() => this.props.obtenerFechas(curso._id)} className="badge badge-pill badge-info">Ver Clases</button></td> */}
                        </tr>
                    </tbody>
                )          
                })
            }
            </table>
            <div className="card text-white bg-danger mb-3">
                <div className="card-header">
                    {this.props.carrito.reduce((acum, x) => acum + x.precio, 0)}
                </div>
                <div className="card-body">
                    <ModuloPaypal/>
                    {/* <button type="submit" className="btn btn-primary">Pagar</button> */}
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