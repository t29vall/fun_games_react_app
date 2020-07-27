import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Blackjack from './pages/blackjack/Blackjack';
import TexasHoldEm from './pages/texas-hold-em/TexasHoldEm';

function App() {

  return (
    <Router>
    <div className="app">

      <header className="app-header">

        

          <nav className="navbar">

            <Link to="/">Home</Link>

            <Link to="/blackjack">Blackjack</Link>

            <Link to="/texas-hold-em">Texas Hold Em</Link>

          </nav>

        

      </header>

      <Route path="/blackjack" component={Blackjack} /> 
      
      <Route path="/texas-hold-em" component={TexasHoldEm} /> 

    </div>
    </Router>
  );
}

export default App;
