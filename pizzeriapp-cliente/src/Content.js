import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import Home from './Home';
import Empanadas from './Empanadas';
import Bebidas from './Bebidas';
import Pedido from './Pedido';
import './App.css';

class Content extends Component {
  render() {
    return (
      <div className="border" style={{height:"65vh", maxHeight:"65vh"}}>
          <Switch>
              <Route exact path = "/" component = {Home}></Route>
              <Route path = "/empanadas" component = {Empanadas}></Route>
              <Route path = "/bebidas" component = {Bebidas}></Route>
              <Route path = "/pedido" component = {Pedido}></Route>
          </Switch>
      </div>
    );
  }
}

export default Content;