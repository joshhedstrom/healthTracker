import React, { Component } from 'react';
import DashBoardComponent from '../../components/DashBoard';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

class DashBoard extends Component {
  state = {
    userId: localStorage.getItem('userId'),
    currentDayId: '',
    firstName: '',
    lastName: '',
    redirect: false,
    waterIntake: 0,
    nutritionPoints: 0,
    exerciseMins: 0,
    currentWeight: 0,
    currentDate: ''
  };

  totalExerciseMinutes(arr) {
    let totalMinutes = 0;
    for (let i = 0; i < arr.length; i++) {
      totalMinutes = totalMinutes + arr[i].duration;
    }

    if (totalMinutes) {
      return totalMinutes;
    } else {
      return 0;
    }
  }

  componentDidMount() {
    this.setState({ userId: localStorage.getItem('userId') });
    let todaysDate = moment().format('MM.DD.YYYY');

    let url = `/api/healthtracker/user/${localStorage.getItem('userId')}`;
    axios.defaults.headers.common['Authorization'] = localStorage.getItem(
      'jwtToken'
    );

    axios.get(url).then(res => {
      let user = res.data;
      let mostRecentDate = moment()
        .add(-1, 'days')
        .format('MM.DD.YYYY');

      if (user.days.length) {
        mostRecentDate = moment(user.days[0].date).format('MM.DD.YYYY');
      }

      if (mostRecentDate === todaysDate) {
        this.setState({
          firstName: user.firstName,
          lastName: user.lastName,
          waterIntake: res.data.days[0].water,
          nutritionPoints: res.data.days[0].nutrition,
          exerciseMins: res.data.days[0].totalActivity,
          currentDayId: res.data.days[0].id,
          currentWeight: res.data.days[0].weight
        });
      } else {
        this.setState({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          currentWeight: res.data.weight
        });

        axios
          .post('/api/healthtracker/newDay', {
            userId: this.state.userId,
            weight: this.state.currentWeight,
            date: moment().format('MM.DD.YYYY')
          })
          .then(res => {
            this.setState({ currentDayId: res.data._id });
          });
      }
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
        <DashBoardComponent
          water={this.state.waterIntake}
          nutrition={this.state.nutritionPoints}
          weight={this.state.currentWeight}
          exercise={this.state.exerciseMins}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
        />
      </div>
    );
  }
}

export default DashBoard;
