import React, { Component } from 'react';
import NutritionGoalCard from '../../components/NutritionGoalCard';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class NutritionGoal extends Component {
  state = {
    progress: 0,
    healthyFat: false,
    proteinBreakfast: false,
    newFruit: false,
    newReceipe: false,
    fastFood: false,
    noMeat: false,
    skipBreakfast: false,
    noSugar: false,
    noAlcohol: false,
    redirect: false
  }

  renderRedirect = () => {
    if (!localStorage.getItem('jwtToken')) {
      return <Redirect to="/login" />;
    }
  }

  componentDidMount() {
    //axios call to check current progress
  }

  handleSubmit = ()=> {
    //axios call to update database
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.checked
    })
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <NutritionGoalCard 
        handleChange={this.handleChange.bind()}
        progress={this.state.progress}
        handleSubmit={this.handleSubmit}
         />
      </div>
    );
  }
}

export default NutritionGoal;
