import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import WaterPage from './pages/WaterPage';
import NutritionPage from './pages/NutritionPage';
import ExercisePage from './pages/ExercisePage';
import Charts from './components/Charts';

import './App.css';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/waterGoal" component={WaterPage} />
        <Route exact path="/nutritionGoal" component={NutritionPage} />
        <Route exact path="/exerciseGoal" component={ExercisePage} />
      </Switch>

      
    </div>
  </Router>
);

export default App;
