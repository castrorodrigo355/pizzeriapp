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
            <div className="Menu" style={{height:"15vh", paddingTop:"8px" ,background:"black"}}>
                <ul>
                    {
                    this.props.opciones && this.props.opciones.map((opcion, i) => {
                        return(
                            <li key={i}>
                                <Link to={opcion.url}>
                                    <div style={{height: "14vh", width:"13vh"}} key={i}>
                                        <div className="recipe">
                                            <span className="bg rounded-circle" style={{backgroundImage:`url(${opcion.imagen})`}}></span>
                                        </div>
                                        <span className="info"><h6>{opcion.titulo}</h6></span>
                                    </div>
                                </Link>
                            </li>
                            )
                        })
                    }
                </ul>
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