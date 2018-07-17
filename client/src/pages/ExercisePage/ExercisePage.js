import React, { Component } from 'react';
import ExerciseGoalCard from '../../components/ExerciseGoalCard';
import { Redirect } from 'react-router-dom';

class ExerciseGoal extends Component {
  state = {
    redirect: false,
    activity: '',
    minutes: 0,
    hours: 0,
    history: [],
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
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
        <ExerciseGoalCard 
        minutes={this.state.minutes}
        hours={this.state.hours}
        history={this.state.history}
        activity={this.state.activity}
        handleChange={this.handleChange.bind()}
        
         />
      </div>
    );
  }
}

export default ExerciseGoal;
