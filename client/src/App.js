import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import DashBoard from "./pages/DashBoard"
import Login from "./pages/Login"

import './App.css';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
       <Route exact path="/dashboard" component={DashBoard} />
       <Route exact path="/login" component={Login} />

      </Switch>
    </div>
  </Router>
);
 

export default App;
