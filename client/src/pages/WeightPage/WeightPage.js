import React, { Component } from 'react';
import WeightGoalCard from '../../components/WeightGoalCard';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

class WeightGoal extends Component {
  state = {
    redirect: false,
    weight: 0,
    updatedWeight: 0,
    currentDayId: '',
    quantities: [],
    dates: []
  };

  componentDidMount() {
    // Sets the url to query
    let url = `/api/healthtracker/getDaysWeight/${localStorage.getItem(
      'userId'
    )}`;

    // Sets the Authorization request header
    axios.defaults.headers.common['Authorization'] = localStorage.getItem(
      'jwtToken'
    );

    axios.get(url).then(res => {
      let data = res.data;

      let weightQuantities = [];
      let datesArr = [];

      for (let i = data.length - 1; i > -1; i--) {
        weightQuantities.push(data[i].weight);
        datesArr.push(moment(data[i].date).format('MM/DD/YYYY'));
      }

      this.setState({
        weight: data[0].weight,
        updatedWeight: data[0].weight,
        currentDayId: data[0]._id,
        quantities: weightQuantities,
        dates: datesArr
      });
    });
  }

  handleChange(e) {
    this.setState({ updatedWeight: e.target.value });
  }

  handleClick() {
    let arr = this.state.quantities;

    arr.splice(-1, 1);
    arr.push(this.state.updatedWeight);

    this.setState({ weight: this.state.updatedWeight }, () => {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem(
        'jwtToken'
      );
      axios
        .post('/api/healthTracker/updateWeight', {
          weight: this.state.weight,
          id: this.state.currentDayId
        })
        .then(data => data)
        .catch(err => {
          console.log(err);
        });
    });
  }

  renderRedirect = () => {
    if (!localStorage.getItem('jwtToken')) {
      return <Redirect to="/login" />;
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <WeightGoalCard
          handleChange={this.handleChange.bind(this)}
          handleClick={this.handleClick.bind(this)}
          weight={this.state.weight}
          updatedWeight={this.state.updatedWeight}
          quantities={this.state.quantities}
          dates={this.state.dates}
        />
      </div>
    );
  }
}

export default WeightGoal;
