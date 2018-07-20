import React, { Component } from 'react';
import WaterGoalCard from '../../components/WaterGoalCard';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class WaterGoal extends Component {
  state = {
    redirect: false,
    glasses: 0,
    currentDayId: "",
    updatedWater: 0
  }

  renderRedirect = () => {
    if (!localStorage.getItem('jwtToken')) {
      return <Redirect to="/login" />;
    }
  }

  componentDidMount() {
    // Sets the url to query
    let url = `/api/healthtracker/getDays/${localStorage.getItem('userId')}`

    // Sets the Authorization request header
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');

    axios.get(url)
    .then(res => {
      let data = res.data
      this.setState({
        glasses: data[0].water,
        currentDayId: data[0]._id
      })
    })

  }

  addGlass(number) {
    this.setState({glasses: this.state.glasses + number},() => {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
      axios.post('/api/healthTracker/newWater', {
        water: this.state.glasses,
        id: this.state.currentDayId
      })
      .then(data => console.log(data))
      .catch(err => {
        console.log(err)
      })
    })
  }

  handleChange(e) {
    this.setState({ updatedWater: e.target.value }
);
  }

  handleClick() {
    this.setState({glasses: this.state.updatedWater}, () => {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
      axios.post('/api/healthTracker/newWater', {
        water: this.state.updatedWater,
        id: this.state.currentDayId
      })
      .then(data => data)
      .catch(err => {
        console.log(err)
      })
    })
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <WaterGoalCard
        addGlass={this.addGlass.bind(this)}
        handleChange={this.handleChange.bind(this)}
        handleClick={this.handleClick.bind(this)}
        glasses={this.state.glasses}
         />
      </div>
    );
  }
}

export default WaterGoal;
