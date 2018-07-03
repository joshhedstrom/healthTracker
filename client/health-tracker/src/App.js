import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import UserInfoCard from './components/DashBoard/UserInfoCard';
import './App.css';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <UserInfoCard />
    </div>
  </Router>
)
 

export default App;
