import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <Header/>
              <Content/>
              <Footer/>
          </div>
      </Router>
    );
  }
}

export default App;