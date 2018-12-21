import React, { Component } from 'react';
import { obtenerBebidas, agregarAlCarrito } from "./ActionCreators"
import { connect } from "react-redux"
import './App.css';

class Bebidas extends Component {

    componentWillMount(){
        this.props.obtenerBebidas()
    }

  render() {
    return (
        <div>
            <div className="card bg-transparent">
                <div className="card-header" style={{padding:"0px"}}>
                    <span className="info"><h5>Bebidas Gaseoseas</h5></span>
                </div>
                <div className="card-body" style={{padding:"0px"}}>
                    <div className="Menu">
                        <div className="" style={{paddingLeft:"0px", paddingTop: "6px"}}>
                            {
                                this.props.bebidas.map((unaBebida, i) => {
                                    return(
                                        <div key={i}>
                                            {
                                            unaBebida.grande ?
                                                <div style={{height: "14vh", width:"13vh", marginRight:"8px"}}>
                                                    <div className="recipe">
                                                        <span className="bg rounded-circle" style={{backgroundImage:`url(${unaBebida.url})`}}
                                                                onClick={() => this.props.agregarAlCarrito(unaBebida)}></span>
                                                    </div>
                                                    <span className="info"><h6>{unaBebida.nombre}</h6></span>
                                                    <span className="info"><h6>$: {unaBebida.precio}</h6></span>
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

            <div className="card bg-transparent">
                <div className="card-header" style={{padding:"0px"}}>
                    <span className="info"><h5>Aguas Saborizadas</h5></span>
                </div>
                <div className="card-body" style={{padding:"0px"}}>
                    <div className="Menu">
                        <div className="" style={{paddingLeft:"0px", paddingTop: "6px"}}>
                            {
                                this.props.bebidas.map((unaBebida, i) => {
                                    return(
                                        <div key={i}>
                                            {
                                            unaBebida.grande ?
                                                <div style={{height: "14vh", width:"13vh", marginRight:"8px"}}>
                                                    <div className="recipe">
                                                        <span className="bg rounded-circle" style={{backgroundImage:`url(${unaBebida.url})`}}
                                                                onClick={() => this.props.agregarAlCarrito(unaBebida)}></span>
                                                    </div>
                                                    <span className="info"><h6>{unaBebida.nombre}</h6></span>
                                                    <span className="info"><h6>$: {unaBebida.precio}</h6></span>
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
      bebidas : state.bebidas
  }
}

const mapDispatchToProps = dispatch => {
  return {
    obtenerBebidas : () => { 
          dispatch(obtenerBebidas())
      },
      agregarAlCarrito : (unaBebida) => {
          dispatch(agregarAlCarrito(unaBebida))
      } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bebidas);