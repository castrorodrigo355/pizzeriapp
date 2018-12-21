import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { obtenerOpciones } from "./ActionCreators"
import { connect } from "react-redux"
// import items from "./menu";
import './App.css';

class Header extends Component {

    componentWillMount(){
        this.props.obtenerOpciones()
    }

    render() {
        return (
            <div className="Menu fondoHeader" style={{height:"17vh", paddingTop:"8px", paddingLeft:"1px"}}>
                <div>
                    {
                    this.props.opciones && this.props.opciones.map((opcion, i) => {
                        return(
                            <div key={i}>
                                <Link to={opcion.url}>
                                    <div style={{height: "14vh", width:"13vh"}} key={i}>
                                        <div className="recipe">
                                            {/* <img src={opcion.imagen} className="img-fluid rounded-circle" alt="Imágenes responsive"></img> */}
                                            <span className="bg img-fluid rounded-circle" style={{backgroundImage:`url(${opcion.imagen})`}}></span>
                                        </div>
                                        <span className="info"><h6>{opcion.titulo}</h6></span>
                                    </div>
                                </Link>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        opciones : state.opciones
    }
}

const mapDispatchToProps = dispatch => {
    return {
        obtenerOpciones : () => { 
            dispatch(obtenerOpciones())
        },
        // obtenerMateria : (idMateria) => {
        //     dispatch(obtenerMateria(idMateria))
        // } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);