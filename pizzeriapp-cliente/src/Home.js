import React, { Component } from 'react';
import { obtenerPizzas, agregarAlCarrito } from "./ActionCreators"
import { connect } from "react-redux"
import './App.css';

class Home extends Component {

  componentWillMount(){
    this.props.obtenerPizzas()
  }

    render() {
        const pizzasGrandes = this.props.pizzas.filter(unaPizza => unaPizza.grande)
        const pizzasChicas = this.props.pizzas.filter(unaPizza => !(unaPizza.grande))
    return (
        <div>
            <div className="card bg-transparent">
                <div className="card-header" style={{padding:"0px"}}>
                    <span className="info"><h5>Pizzas grandes</h5></span>
                </div>
                <div className="card-body" style={{padding:"0px"}}>
                    <div className="Menu">
                        <div style={{paddingLeft:"0px", paddingTop: "6px"}}>
                            {
                                pizzasGrandes.map((unaPizza, i) => {
                                    return(
                                        <div key={i} className="recipe" style={{height: "14vh", width:"13vh", marginRight:"10px"}}>
                                            <span className="bg rounded-circle" style={{padding:"50px", backgroundImage:`url(${unaPizza.url})`}}
                                                    onClick={() => this.props.agregarAlCarrito(unaPizza)}></span>
                                            <span className="info"><h6>$: {unaPizza.precio}</h6></span>
                                            <span className="info"><h6>{unaPizza.nombre}</h6></span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div> 
                </div>
          </div>

            <div className="card bg-transparent">
                <div className="card-header" style={{padding:"0px"}}>
                    <span className="info"><h5>Pizzas Chicas</h5></span>
                </div>
                <div className="card-body" style={{padding:"0px"}}>
                    <div className="Menu">
                        <div className="" style={{paddingLeft:"0px", paddingTop: "6px"}}>
                            {
                                pizzasChicas.map((unaPizza, i) => {
                                    return(
                                        <div key={i} style={{height: "14vh", width:"13vh", marginRight:"8px"}}>
                                            <div className="recipe">
                                                <span className="bg rounded-circle" style={{backgroundImage:`url(${unaPizza.url})`}}
                                                        onClick={() => this.props.agregarAlCarrito(unaPizza)}></span>
                                            </div>
                                            <span className="info"><h6>{unaPizza.nombre}</h6></span>
                                            <span className="info"><h6>$: {unaPizza.precio}</h6></span>
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