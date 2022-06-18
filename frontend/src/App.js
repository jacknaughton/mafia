import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/home";
import Game from "./components/game";

class App extends Component {
  render() {
    return (
        <Router>
          <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/game' element={<Game />}></Route>
          </Routes>
        </Router>
    );
  }

}

export default App;
