import React, { Component } from 'react';
import { obtenerEmpanadas, agregarAlCarrito } from "./ActionCreators"
import { connect } from "react-redux"
import Circularity from 'circularity'
import './App.css';

class Empanadas extends Component {

  componentWillMount(){
    this.props.obtenerEmpanadas()
  }

  render() {
    // LINK NPM CIRCULARITY => https://www.npmjs.com/package/circularity

    const misItems = this.props.empanadas.map((unaEmpanada, i) => {
      return( {title: unaEmpanada.nombre,
              image: unaEmpanada.url,
              action: () => {this.props.agregarAlCarrito(unaEmpanada)} }
      )
    })

    return (
      <div className="d-flex justify-content-center align-items-center">
          <Circularity diameter = { 300 } items={ misItems } />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      empanadas : state.empanadas
  }
}

const mapDispatchToProps = dispatch => {
  return {
    obtenerEmpanadas : () => { 
          dispatch(obtenerEmpanadas())
      },
      agregarAlCarrito : (unProducto) => {
          dispatch(agregarAlCarrito(unProducto))
      } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Empanadas);