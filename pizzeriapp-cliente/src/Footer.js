import React, { Component } from 'react';
import { eliminarProducto } from "./ActionCreators"
import { connect } from "react-redux"
import './App.css';

class Footer extends Component {

  render() {
    return (
      <div className="fondoFooter" style={{height:"20vh", zIndex:1}}>
          <div className="Menu jd-flex justify-content-center align-items-center" style={{paddingTop:"10px"}}>
              <div className="" style={{paddingLeft:"0px"}}>
                  {
                      this.props.carrito.map((unProducto, i) => {
                          return(
                              <div key={i}>
                                  <div style={{height: "14vh", width:"13vh", marginRight:"8px"}}>
                                      <div className="recipe">
                                            <span className="bg rounded-circle" style={{backgroundImage:`url(${unProducto.url})`}}>
                                                    <button type="submit" onClick={() => this.props.eliminarProducto(i)}></button>
                                            </span>
                                      </div>
                                      <span className="info"><h6>{unProducto.nombre}</h6></span>
                                      <span className="info"><h6>$: {unProducto.precio}</h6></span>
                                  </div>
                              </div>
                          )
                      })
                  }
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

const mapDispatchToProps = dispatch => {
  return {
    eliminarProducto(index){
      dispatch(eliminarProducto(index))
  }}
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);