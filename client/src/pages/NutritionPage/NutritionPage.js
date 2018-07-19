import React, { Component } from 'react';
import NutritionGoalCard from '../../components/NutritionGoalCard';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class NutritionGoal extends Component {
  state = {
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

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
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
        healthyFat={this.state.healthyFat}
        proteinBreakfast={this.state.proteinBreakfast}
        newFruit={this.state.newFruit}
        newReceipe={this.state.newReceipe}
        fastFood={this.state.fastFood}
        noMeat={this.state.noMeat}
        skipBreakfast={this.state.skipBreakfast}
        noSugar={this.state.noSugar}
        noAlcohol={this.state.noAlcohol}
         />
      </div>
    );
  }
}

export default NutritionGoal;
