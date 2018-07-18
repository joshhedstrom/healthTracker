import React, { Component } from 'react';
import NutritionGoalCard from '../../components/NutritionGoalCard';
import { Redirect } from 'react-router-dom';

class NutritionGoal extends Component {
  state = {
    redirect: false
  }

  
  renderRedirect = () => {
    if (!localStorage.getItem('jwtToken')) {
      return <Redirect to="/login" />;
    }
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <NutritionGoalCard />
      </div>
    );
  }
}

export default NutritionGoal;
