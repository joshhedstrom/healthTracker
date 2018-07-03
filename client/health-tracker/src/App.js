import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import './App.css';

const App = () => (
  <Router>
    <div>
      <NavBar />
    </div>
  </Router>
)
 

export default App;
