import React, { Component } from 'react';
import DashBoardComponent from '../../components/DashBoard';

import { Redirect } from 'react-router-dom';
import axios from "axios"
import moment from "moment"

class DashBoard extends Component {
  state = {
    userId: localStorage.getItem("userId"),
    firstName: "",
    lastName: "",
    redirect: false,
    waterIntake: 0,
    nutritionPoints: 0,
    exerciseMins: 0,
    currentWeight: 0
  };

  totalExerciseMinutes(arr) {
    let totalMinutes = 0
    for (let i = 0; i < arr.length; i++ ) {
      totalMinutes = totalMinutes + arr[i].duration
    }

    if (totalMinutes) {
      return totalMinutes
    } else {
      return 0
    }
  }

  componentDidMount() {
    this.setState({userId: localStorage.getItem("userId")})

    let url = `/api/healthtracker/user/${localStorage.getItem('userId')}`
    axios.defaults.headers.common['Authorization'] = localStorage.getItem(
      'jwtToken'
    );
    axios
    .get(url)
    .then(res => {
      console.log(res)
      if (res.data.days.length) {
        this.setState({
          firstName: res.data.name,
          lastName: res.data.name,
          waterIntake: res.data.days[0].water,
          nutritionPoints: res.data.days[0].nutrition,
          exerciseMins: this.totalExerciseMinutes(res.data.days[0].exercises),
          currentWeight: res.data.weight
        })
      } else {
        this.setState({
          firstName: res.data.name,
          lastName: res.data.name,
          currentWeight: res.data.weight
        })

        axios.post("/api/healthtracker/newDay", {
          userId: this.state.userId,
          date: moment().format("MM.DD.YYYY")
        }).then(res => {
          console.log(res)
        })

      }
    })
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
        <DashBoardComponent water={this.state.waterIntake} nutrition={this.state.nutritionPoints} weight={this.state.currentWeight} exercise={this.state.exerciseMins} />
      </div>
    );
  }
}

export default DashBoard;
