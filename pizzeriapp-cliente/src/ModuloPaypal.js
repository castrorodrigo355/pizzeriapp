import React, { Component } from 'react';
import './App.css';

class ModuloPaypal extends Component {
  render() {
    const { precioTotal } = this.props
    return (
        <div>
            <button type="button" className="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal">
                {
                    precioTotal === 0 ?
                    <span className="info"><h5>Pago online</h5></span>
                    :
                    <span className="info"><h5>Realizar pago de $ {precioTotal}</h5></span>
                }
            </button>
            
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Paypal</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Realizar transferencia
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary">Aceptar</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default ModuloPaypal;