import React, { Component } from 'react';
import UserInfoCard from '../../components/DashBoard/UserInfoCard';
import DailyProgress from '../../components/DashBoard/DailyProgress';
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
        <UserInfoCard />
        <DailyProgress />
      </div>
    );
  }
}

export default DashBoard;
