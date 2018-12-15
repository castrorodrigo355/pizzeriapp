import React, { Component } from 'react';
import { obtenerPizzas, agregarAlCarrito } from "./ActionCreators"
import { connect } from "react-redux"
import './App.css';

class Home extends Component {

  componentWillMount(){
    this.props.obtenerPizzas()
  }

  render() {
    return (
      <div>
          <div className="card">
              <div className="card-header">
                  Pizzas Grandes
              </div>
              <div className="card-body">
                  <div className="Menu">
                      <div className="" style={{paddingLeft:"0px", paddingTop: "6px"}}>
                          {
                              this.props.pizzas.map((unaPizza, i) => {
                                  return(
                                      <div key={i}>
                                        {
                                          unaPizza.grande ?
                                            <div style={{height: "14vh", width:"13vh", marginRight:"8px"}}>
                                                <div className="recipe">
                                                    <span className="bg rounded-circle" style={{backgroundImage:`url(${unaPizza.url})`}}
                                                            onClick={() => this.props.agregarAlCarrito(unaPizza)}></span>
                                                </div>
                                                <span className="info"><h6>{unaPizza.nombre}</h6></span>
                                                <span className="info"><h6>$: {unaPizza.precio}</h6></span>
                                            </div>
                                            :
                                            ""
                                        }
                                      </div>
                                  )
                              })
                          }
                      </div>
                  </div> 
              </div>
          </div>

          <div className="card">
              <div className="card-header">
                  Pizzas Chicas
              </div>
              <div className="card-body">
                  <div className="Menu">
                      <div className="" style={{paddingLeft:"0px", paddingTop: "6px"}}>
                          {
                              this.props.pizzas.map((unaPizza, i) => {
                                  return(
                                      <div key={i}>
                                        {
                                          !unaPizza.grande ?
                                            <div style={{height: "14vh", width:"13vh", marginRight:"8px"}}>
                                                <div className="recipe">
                                                    <span className="bg rounded-circle" style={{backgroundImage:`url(${unaPizza.url})`}}
                                                            onClick={() => this.props.agregarAlCarrito(unaPizza)}></span>
                                                </div>
                                                <span className="info"><h6>{unaPizza.nombre}</h6></span>
                                                <span className="info"><h6>$: {unaPizza.precio}</h6></span>
                                            </div>
                                            :
                                            ""
                                        }
                                      </div>
                                  )
                              })
                          }
                      </div>
                  </div> 
              </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      pizzas : state.pizzas
  }
}

const mapDispatchToProps = dispatch => {
  return {
    obtenerPizzas : () => { 
          dispatch(obtenerPizzas())
      },
      agregarAlCarrito : (unProducto) => {
          dispatch(agregarAlCarrito(unProducto))
      } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);