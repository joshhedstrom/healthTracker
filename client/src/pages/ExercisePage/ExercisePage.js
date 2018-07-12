import React, { Component } from 'react';
import ExerciseGoalCard from '../../components/ExerciseGoalCard';
import { Redirect } from 'react-router-dom';

class ExerciseGoal extends Component {
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
        <ExerciseGoalCard />
      </div>
    );
  }
}

export default ExerciseGoal;
