import React, { Component } from 'react';
import WaterGoalCard from '../../components/WaterGoalCard';
import { Redirect } from 'react-router-dom';

class WaterGoal extends Component {
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
        <WaterGoalCard />
      </div>
    );
  }
}

export default WaterGoal;
