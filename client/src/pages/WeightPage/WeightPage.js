import React, { Component } from 'react';
import WeightGoalCard from '../../components/WeightGoalCard';
import { Redirect } from 'react-router-dom';

class WeightGoal extends Component {
  state = {
    redirect: false
  };
  renderRedirect = () => {
    if (!localStorage.getItem('jwtToken')) {
      return <Redirect to="/login" />;
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <WeightGoalCard />
      </div>
    );
  }
}

export default WeightGoal;
