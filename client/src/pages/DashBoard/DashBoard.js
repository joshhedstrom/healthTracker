import React, { Component } from 'react';

import DashBoardCompontent from '../../components/DashBoard';
import { Redirect } from 'react-router-dom';

class DashBoard extends Component {
  state = {
    redirect: false,
    waterIntake: 0,
    nutritionPoints: 0,
    exerciseHrs: 0,
    weightCurrent: 0
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
        <DashBoardCompontent />

      </div>
    );
  }
}

export default DashBoard;
