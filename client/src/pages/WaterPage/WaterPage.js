import React, { Component } from 'react';
import WaterGoalCard from '../../components/WaterGoalCard';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment'

class WaterGoal extends Component {
  state = {
    redirect: false,
    glasses: 0,
    currentDayId: "",
    updatedWater: 0,
    quantities: [],
    dates: []

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

      let waterQuantities = []
      let datesArr = []

      for (let i = data.length - 1; i > -1; i --) {
        waterQuantities.push(data[i].water)
        datesArr.push(moment(data[i].date).format("MM/DD/YYYY"))
      }

      this.setState({
        glasses: data[0].water,
        currentDayId: data[0]._id,
        quantities: waterQuantities,
        dates: datesArr

      })
    })

  }

  addGlass(number) {
    let arr = this.state.quantities
    let newTotal = this.state.glasses + number

    arr.splice(-1,1)
    arr.push(newTotal)

    this.setState({ glasses: newTotal, quantities: arr }, () => {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
      axios.post('/api/healthTracker/newWater', {
        water: this.state.glasses,
        id: this.state.currentDayId
      })
      .then(data => (data))
      .catch(err => {
        console.log(err)
      })
    })
  }

  handleChange(e) {
    this.setState({ updatedWater: parseInt(e.target.value) });
  }

  handleClick() {
    if(!this.state.updatedWater){
      return
    }
    else {
      let arr = this.state.quantities
      
      arr.splice(-1,1)
      arr.push(this.state.updatedWater)
      let value = this.state.glasses + this.state.updatedWater
      
      this.setState({glasses: value}, () => {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.post('/api/healthTracker/newWater', {
          water: this.state.glasses,
          id: this.state.currentDayId
        })
        .then(data => data)
        .catch(err => {
          console.log(err)
        })
      })
    }
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
          quantities={this.state.quantities}
          dates={this.state.dates}
         />
      </div>
    );
  }
}

export default WaterGoal;