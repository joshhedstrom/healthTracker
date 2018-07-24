import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import WaterPage from './pages/WaterPage';
import NutritionPage from './pages/NutritionPage';
import ExercisePage from './pages/ExercisePage';
import WeightPage from './pages/WeightPage';
import MoreInfoPage from './pages/MoreInfoPage';

import './App.css';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/water" component={WaterPage} />
        <Route exact path="/nutrition" component={NutritionPage} />
        <Route exact path="/exercise" component={ExercisePage} />
        <Route exact path="/weight" component={WeightPage} />
        <Route exact path="/Info" component={MoreInfoPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
