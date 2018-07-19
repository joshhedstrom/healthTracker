import React, { Component } from 'react';
import WaterGoalCard from '../../components/WaterGoalCard';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class WaterGoal extends Component {
  state = {
    redirect: false,
    glasses: 3,
    incrementer: 0,
    historyData: []
  }

  renderRedirect = () => {
    if (!localStorage.getItem('jwtToken')) {
      return <Redirect to="/login" />;
    }
  }

  componentDidMount() {
    //pull water data from backend
  }

  addGlass = event => {
    let newGlasses = parseInt(event.target.value) + this.state.glasses;
    this.setState({ glasses: newGlasses });
    axios
      .post('/api/healthTracker/addWater', {
        water: 'value',
        userId: localStorage.userId
      })
      .then(data => console.log(data));
  }

  incrementGlass = () => {
    let newGlasses = this.state.incrementer + this.state.glasses;
    this.setState({ glasses: newGlasses, incrementer: 0 });
  }

  increment = event => {
    this.setState({ incrementer: parseInt(event.target.value) });
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <WaterGoalCard
        incrementGlass={this.incrementGlass.bind()}
        increment={this.increment.bind()}
        addGlass={this.addGlass.bind()}
        glasses={this.state.glasses}
         />
      </div>
    );
  }
}

export default WaterGoal;
