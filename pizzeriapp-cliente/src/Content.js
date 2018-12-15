import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import Home from './Home';
import Empanadas from './Empanadas';
import Bebidas from './Bebidas';
import './App.css';

class Content extends Component {
  render() {
    return (
      <div className="" style={{height:"55vh", background:"gray"}}>
          <Switch>
              <Route exact path = "/" component = {Home}></Route>
              <Route path = "/empanadas" component = {Empanadas}></Route>
              <Route path = "/bebidas" component = {Bebidas}></Route>
          </Switch>
      </div>
    );
  }
}

export default Content;